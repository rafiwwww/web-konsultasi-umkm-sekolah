import { useMemo, useState } from "react"
import {
  ArrowLeft,
  Building2,
  Edit,
  GraduationCap,
  Plus,
  Trash2,
} from "lucide-react"
import { useNavigate } from "react-router"
import { ConfirmModal, Modal } from "../../components/Modal"
import { useToast } from "../../components/Toast"
import { useConsultationSystem } from "../../context/ConsultationSystemContext"
import { ProdiEntry } from "../../data/facultyHierarchy"

type FacultyForm = {
  name: string
  shortName: string
}

type DepartmentForm = {
  name: string
  facultyName: string
}

type DeleteTarget =
  | {
      type: "faculty"
      facultyName: string
      departmentName?: never
    }
  | {
      type: "department"
      facultyName: string
      departmentName: string
    }

const emptyFacultyForm: FacultyForm = { name: "", shortName: "" }
const emptyDepartmentForm: DepartmentForm = { name: "", facultyName: "" }

export function KelolaFacultyDepartmentPage() {
  const navigate = useNavigate()
  const { showToast } = useToast()
  const {
    facultyHierarchy,
    createFaculty,
    updateFaculty,
    deleteFaculty,
    createDepartment,
    updateDepartment,
    deleteDepartment,
  } = useConsultationSystem()

  const [facultyModalOpen, setFacultyModalOpen] = useState(false)
  const [departmentModalOpen, setDepartmentModalOpen] = useState(false)
  const [editingFacultyName, setEditingFacultyName] = useState<string | null>(
    null,
  )
  const [editingDepartment, setEditingDepartment] = useState<{
    facultyName: string
    name: string
  } | null>(null)
  const [facultyForm, setFacultyForm] = useState<FacultyForm>(emptyFacultyForm)
  const [departmentForm, setDepartmentForm] =
    useState<DepartmentForm>(emptyDepartmentForm)
  const [facultyErrors, setFacultyErrors] = useState<Partial<FacultyForm>>({})
  const [departmentErrors, setDepartmentErrors] =
    useState<Partial<DepartmentForm>>({})
  const [deleteTarget, setDeleteTarget] = useState<DeleteTarget | null>(null)

  const departments = useMemo(
    () =>
      facultyHierarchy.flatMap((faculty) =>
        faculty.prodi.map((department) => ({
          ...department,
          facultyName: faculty.name,
          facultyShortName: faculty.shortName,
        })),
      ),
    [facultyHierarchy],
  )

  const openAddFaculty = () => {
    setEditingFacultyName(null)
    setFacultyForm(emptyFacultyForm)
    setFacultyErrors({})
    setFacultyModalOpen(true)
  }

  const openEditFaculty = (name: string, shortName: string) => {
    setEditingFacultyName(name)
    setFacultyForm({ name, shortName })
    setFacultyErrors({})
    setFacultyModalOpen(true)
  }

  const openAddDepartment = () => {
    setEditingDepartment(null)
    setDepartmentForm({
      ...emptyDepartmentForm,
      facultyName: facultyHierarchy[0]?.name ?? "",
    })
    setDepartmentErrors({})
    setDepartmentModalOpen(true)
  }

  const openEditDepartment = (facultyName: string, name: string) => {
    setEditingDepartment({ facultyName, name })
    setDepartmentForm({ facultyName, name })
    setDepartmentErrors({})
    setDepartmentModalOpen(true)
  }

  const saveFaculty = () => {
    const name = facultyForm.name.trim()
    const shortName = facultyForm.shortName.trim()
    const errors: Partial<FacultyForm> = {}
    if (!name) errors.name = "Nama fakultas wajib diisi"
    if (!shortName) errors.shortName = "Singkatan fakultas wajib diisi"
    if (
      facultyHierarchy.some(
        (faculty) =>
          faculty.name.toLowerCase() === name.toLowerCase() &&
          faculty.name !== editingFacultyName,
      )
    ) {
      errors.name = "Nama fakultas sudah digunakan"
    }
    if (
      facultyHierarchy.some(
        (faculty) =>
          faculty.shortName.toLowerCase() === shortName.toLowerCase() &&
          faculty.name !== editingFacultyName,
      )
    ) {
      errors.shortName = "Singkatan fakultas sudah digunakan"
    }
    if (Object.keys(errors).length) {
      setFacultyErrors(errors)
      return
    }

    if (editingFacultyName) {
      updateFaculty(editingFacultyName, { name, shortName })
      showToast("Data fakultas berhasil diperbarui.", "success")
    } else {
      createFaculty({ name, shortName })
      showToast("Fakultas baru berhasil ditambahkan.", "success")
    }
    setFacultyModalOpen(false)
  }

  const saveDepartment = () => {
    const name = departmentForm.name.trim()
    const facultyName = departmentForm.facultyName
    const errors: Partial<DepartmentForm> = {}
    if (!name) errors.name = "Nama jurusan wajib diisi"
    if (!facultyName) errors.facultyName = "Fakultas wajib dipilih"
    if (
      departments.some(
        (department) =>
          department.name.toLowerCase() === name.toLowerCase() &&
          !(
            department.name === editingDepartment?.name &&
            department.facultyName === editingDepartment?.facultyName
          ),
      )
    ) {
      errors.name = "Nama jurusan sudah digunakan"
    }
    if (Object.keys(errors).length) {
      setDepartmentErrors(errors)
      return
    }

    const existing = editingDepartment
      ? facultyHierarchy
          .find((faculty) => faculty.name === editingDepartment.facultyName)
          ?.prodi.find((program) => program.name === editingDepartment.name)
      : undefined
    const department: ProdiEntry = {
      name,
      peminatan: existing?.peminatan ?? [{ name: "Umum", keywords: [name] }],
    }

    if (editingDepartment) {
      updateDepartment(
        editingDepartment.facultyName,
        editingDepartment.name,
        facultyName,
        department,
      )
      showToast("Data jurusan berhasil diperbarui.", "success")
    } else {
      createDepartment(facultyName, department)
      showToast("Jurusan baru berhasil ditambahkan.", "success")
    }
    setDepartmentModalOpen(false)
  }

  const confirmDelete = () => {
    if (!deleteTarget) return
    if (deleteTarget.type === "faculty") {
      deleteFaculty(deleteTarget.facultyName)
      showToast("Fakultas dan jurusan terkait berhasil dihapus.", "success")
    } else {
      deleteDepartment(deleteTarget.facultyName, deleteTarget.departmentName)
      showToast("Jurusan berhasil dihapus.", "success")
    }
    setDeleteTarget(null)
  }

  const inputClass = (hasError: boolean) =>
    `w-full px-4 py-2 border ${
      hasError ? "border-red-500" : "border-gray-300"
    } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`

  return (
    <div className="min-h-[calc(100vh-theme(spacing.16))] bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <button
            type="button"
            onClick={() => navigate("/admin/users")}
            className="inline-flex items-center gap-1 text-sm text-blue-600 hover:text-blue-700 mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            Kembali ke Kelola User
          </button>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Kelola Fakultas & Jurusan
          </h1>
          <p className="text-gray-600">
            Kelola master data Fakultas → Jurusan yang digunakan di seluruh
            platform
          </p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          <section className="bg-white rounded-lg border border-gray-200 overflow-hidden">
            <div className="p-6 border-b border-gray-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-blue-600" />
                  <h2 className="text-lg font-semibold text-gray-900">
                    Kelola Fakultas
                  </h2>
                </div>
                <p className="text-sm text-gray-500 mt-1">
                  {facultyHierarchy.length} fakultas terdaftar
                </p>
              </div>
              <button
                type="button"
                onClick={openAddFaculty}
                className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
              >
                <Plus className="w-4 h-4" />
                Tambah Fakultas
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Nama Fakultas
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Jurusan
                    </th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Aksi
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {facultyHierarchy.map((faculty) => (
                    <tr key={faculty.name} className="hover:bg-gray-50">
                      <td className="px-6 py-4">
                        <div className="text-sm font-medium text-gray-900">
                          {faculty.name}
                        </div>
                        <div className="text-xs text-blue-600 mt-1">
                          {faculty.shortName}
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        {faculty.prodi.length}
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center justify-end gap-2">
                          <button
                            type="button"
                            onClick={() =>
                              openEditFaculty(faculty.name, faculty.shortName)
                            }
                            className="p-2 text-blue-600 hover:bg-blue-50 rounded-md transition-colors"
                            title="Edit Fakultas"
                          >
                            <Edit className="w-4 h-4" />
                          </button>
                          <button
                            type="button"
                            onClick={() =>
                              setDeleteTarget({
                                type: "faculty",
                                facultyName: faculty.name,
                              })
                            }
                            className="p-2 text-red-600 hover:bg-red-50 rounded-md transition-colors"
                            title="Hapus Fakultas"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="bg-white rounded-lg border border-gray-200 overflow-hidden">
            <div className="p-6 border-b border-gray-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-blue-600" />
                  <h2 className="text-lg font-semibold text-gray-900">
                    Kelola Jurusan
                  </h2>
                </div>
                <p className="text-sm text-gray-500 mt-1">
                  {departments.length} jurusan terdaftar
                </p>
              </div>
              <button
                type="button"
                onClick={openAddDepartment}
                disabled={facultyHierarchy.length === 0}
                className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Plus className="w-4 h-4" />
                Tambah Jurusan
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Nama Jurusan
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Fakultas
                    </th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Aksi
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {departments.map((department) => (
                    <tr
                      key={`${department.facultyName}-${department.name}`}
                      className="hover:bg-gray-50"
                    >
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">
                        {department.name}
                      </td>
                      <td className="px-6 py-4">
                        <span className="inline-flex px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-700">
                          {department.facultyShortName} —{" "}
                          {department.facultyName}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center justify-end gap-2">
                          <button
                            type="button"
                            onClick={() =>
                              openEditDepartment(
                                department.facultyName,
                                department.name,
                              )
                            }
                            className="p-2 text-blue-600 hover:bg-blue-50 rounded-md transition-colors"
                            title="Edit Jurusan"
                          >
                            <Edit className="w-4 h-4" />
                          </button>
                          <button
                            type="button"
                            onClick={() =>
                              setDeleteTarget({
                                type: "department",
                                facultyName: department.facultyName,
                                departmentName: department.name,
                              })
                            }
                            className="p-2 text-red-600 hover:bg-red-50 rounded-md transition-colors"
                            title="Hapus Jurusan"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </div>

      <Modal
        isOpen={facultyModalOpen}
        onClose={() => setFacultyModalOpen(false)}
        title={editingFacultyName ? "Edit Fakultas" : "Tambah Fakultas"}
        footer={
          <>
            <button
              type="button"
              onClick={() => setFacultyModalOpen(false)}
              className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Batal
            </button>
            <button
              type="button"
              onClick={saveFaculty}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Simpan Fakultas
            </button>
          </>
        }
      >
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Nama Fakultas <span className="text-red-500">*</span>
            </label>
            <input
              value={facultyForm.name}
              onChange={(event) => {
                setFacultyForm({ ...facultyForm, name: event.target.value })
                setFacultyErrors({ ...facultyErrors, name: undefined })
              }}
              placeholder="Contoh: Faculty of Engineering"
              className={inputClass(Boolean(facultyErrors.name))}
            />
            {facultyErrors.name && (
              <p className="mt-1 text-sm text-red-500">{facultyErrors.name}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Singkatan <span className="text-red-500">*</span>
            </label>
            <input
              value={facultyForm.shortName}
              onChange={(event) => {
                setFacultyForm({
                  ...facultyForm,
                  shortName: event.target.value,
                })
                setFacultyErrors({ ...facultyErrors, shortName: undefined })
              }}
              placeholder="Contoh: FoE"
              className={inputClass(Boolean(facultyErrors.shortName))}
            />
            {facultyErrors.shortName && (
              <p className="mt-1 text-sm text-red-500">
                {facultyErrors.shortName}
              </p>
            )}
          </div>
        </div>
      </Modal>

      <Modal
        isOpen={departmentModalOpen}
        onClose={() => setDepartmentModalOpen(false)}
        title={editingDepartment ? "Edit Jurusan" : "Tambah Jurusan"}
        footer={
          <>
            <button
              type="button"
              onClick={() => setDepartmentModalOpen(false)}
              className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Batal
            </button>
            <button
              type="button"
              onClick={saveDepartment}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Simpan Jurusan
            </button>
          </>
        }
      >
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Nama Jurusan <span className="text-red-500">*</span>
            </label>
            <input
              value={departmentForm.name}
              onChange={(event) => {
                setDepartmentForm({
                  ...departmentForm,
                  name: event.target.value,
                })
                setDepartmentErrors({ ...departmentErrors, name: undefined })
              }}
              placeholder="Contoh: Teknik Informatika"
              className={inputClass(Boolean(departmentErrors.name))}
            />
            {departmentErrors.name && (
              <p className="mt-1 text-sm text-red-500">
                {departmentErrors.name}
              </p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Fakultas <span className="text-red-500">*</span>
            </label>
            <select
              value={departmentForm.facultyName}
              onChange={(event) => {
                setDepartmentForm({
                  ...departmentForm,
                  facultyName: event.target.value,
                })
                setDepartmentErrors({
                  ...departmentErrors,
                  facultyName: undefined,
                })
              }}
              className={inputClass(Boolean(departmentErrors.facultyName))}
            >
              <option value="">— Pilih Fakultas —</option>
              {facultyHierarchy.map((faculty) => (
                <option key={faculty.name} value={faculty.name}>
                  {faculty.shortName} — {faculty.name}
                </option>
              ))}
            </select>
            {departmentErrors.facultyName && (
              <p className="mt-1 text-sm text-red-500">
                {departmentErrors.facultyName}
              </p>
            )}
          </div>
          <p className="text-xs text-gray-500">
            Jurusan akan tersedia pada pilihan akun Dosen dan pencarian dosen.
          </p>
        </div>
      </Modal>

      <ConfirmModal
        isOpen={Boolean(deleteTarget)}
        onClose={() => setDeleteTarget(null)}
        onConfirm={confirmDelete}
        title={
          deleteTarget?.type === "faculty"
            ? "Hapus fakultas?"
            : "Hapus jurusan?"
        }
        message={
          deleteTarget?.type === "faculty"
            ? `Fakultas ${deleteTarget.facultyName} beserta seluruh jurusan di dalamnya akan dihapus dari master data.`
            : `Jurusan ${deleteTarget?.departmentName ?? ""} akan dihapus dari master data.`
        }
        confirmText="Hapus"
        cancelText="Batal"
        variant="danger"
      />
    </div>
  )
}