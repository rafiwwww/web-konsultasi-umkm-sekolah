
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model StudyProgram
 * 
 */
export type StudyProgram = $Result.DefaultSelection<Prisma.$StudyProgramPayload>
/**
 * Model Lecturer
 * 
 */
export type Lecturer = $Result.DefaultSelection<Prisma.$LecturerPayload>
/**
 * Model Student
 * 
 */
export type Student = $Result.DefaultSelection<Prisma.$StudentPayload>
/**
 * Model Semester
 * 
 */
export type Semester = $Result.DefaultSelection<Prisma.$SemesterPayload>
/**
 * Model LecturerAvailability
 * 
 */
export type LecturerAvailability = $Result.DefaultSelection<Prisma.$LecturerAvailabilityPayload>
/**
 * Model ConsultationBooking
 * 
 */
export type ConsultationBooking = $Result.DefaultSelection<Prisma.$ConsultationBookingPayload>
/**
 * Model ConsultationSession
 * 
 */
export type ConsultationSession = $Result.DefaultSelection<Prisma.$ConsultationSessionPayload>
/**
 * Model Seminar
 * 
 */
export type Seminar = $Result.DefaultSelection<Prisma.$SeminarPayload>
/**
 * Model SeminarRegistration
 * 
 */
export type SeminarRegistration = $Result.DefaultSelection<Prisma.$SeminarRegistrationPayload>
/**
 * Model ActivityLog
 * 
 */
export type ActivityLog = $Result.DefaultSelection<Prisma.$ActivityLogPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserRole: {
  Admin: 'Admin',
  Dosen: 'Dosen',
  UMKM: 'UMKM',
  Siswa: 'Siswa',
  Guru: 'Guru'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]


export const ConsultationType: {
  umkm: 'umkm',
  school: 'school'
};

export type ConsultationType = (typeof ConsultationType)[keyof typeof ConsultationType]


export const ConsultationStatus: {
  pending: 'pending',
  accepted: 'accepted',
  waiting_zoom: 'waiting_zoom',
  rejected: 'rejected',
  rescheduled: 'rescheduled',
  scheduled: 'scheduled',
  completed: 'completed',
  cancelled: 'cancelled'
};

export type ConsultationStatus = (typeof ConsultationStatus)[keyof typeof ConsultationStatus]


export const SeminarStatus: {
  Draft: 'Draft',
  Published: 'Published',
  Cancelled: 'Cancelled'
};

export type SeminarStatus = (typeof SeminarStatus)[keyof typeof SeminarStatus]


export const SeminarCategory: {
  Business: 'Business',
  Academic: 'Academic',
  Technology: 'Technology',
  Other: 'Other'
};

export type SeminarCategory = (typeof SeminarCategory)[keyof typeof SeminarCategory]

}

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

export type ConsultationType = $Enums.ConsultationType

export const ConsultationType: typeof $Enums.ConsultationType

export type ConsultationStatus = $Enums.ConsultationStatus

export const ConsultationStatus: typeof $Enums.ConsultationStatus

export type SeminarStatus = $Enums.SeminarStatus

export const SeminarStatus: typeof $Enums.SeminarStatus

export type SeminarCategory = $Enums.SeminarCategory

export const SeminarCategory: typeof $Enums.SeminarCategory

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.studyProgram`: Exposes CRUD operations for the **StudyProgram** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StudyPrograms
    * const studyPrograms = await prisma.studyProgram.findMany()
    * ```
    */
  get studyProgram(): Prisma.StudyProgramDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.lecturer`: Exposes CRUD operations for the **Lecturer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Lecturers
    * const lecturers = await prisma.lecturer.findMany()
    * ```
    */
  get lecturer(): Prisma.LecturerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.student`: Exposes CRUD operations for the **Student** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Students
    * const students = await prisma.student.findMany()
    * ```
    */
  get student(): Prisma.StudentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.semester`: Exposes CRUD operations for the **Semester** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Semesters
    * const semesters = await prisma.semester.findMany()
    * ```
    */
  get semester(): Prisma.SemesterDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.lecturerAvailability`: Exposes CRUD operations for the **LecturerAvailability** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LecturerAvailabilities
    * const lecturerAvailabilities = await prisma.lecturerAvailability.findMany()
    * ```
    */
  get lecturerAvailability(): Prisma.LecturerAvailabilityDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.consultationBooking`: Exposes CRUD operations for the **ConsultationBooking** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ConsultationBookings
    * const consultationBookings = await prisma.consultationBooking.findMany()
    * ```
    */
  get consultationBooking(): Prisma.ConsultationBookingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.consultationSession`: Exposes CRUD operations for the **ConsultationSession** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ConsultationSessions
    * const consultationSessions = await prisma.consultationSession.findMany()
    * ```
    */
  get consultationSession(): Prisma.ConsultationSessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.seminar`: Exposes CRUD operations for the **Seminar** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Seminars
    * const seminars = await prisma.seminar.findMany()
    * ```
    */
  get seminar(): Prisma.SeminarDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.seminarRegistration`: Exposes CRUD operations for the **SeminarRegistration** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SeminarRegistrations
    * const seminarRegistrations = await prisma.seminarRegistration.findMany()
    * ```
    */
  get seminarRegistration(): Prisma.SeminarRegistrationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.activityLog`: Exposes CRUD operations for the **ActivityLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ActivityLogs
    * const activityLogs = await prisma.activityLog.findMany()
    * ```
    */
  get activityLog(): Prisma.ActivityLogDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.19.3
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    StudyProgram: 'StudyProgram',
    Lecturer: 'Lecturer',
    Student: 'Student',
    Semester: 'Semester',
    LecturerAvailability: 'LecturerAvailability',
    ConsultationBooking: 'ConsultationBooking',
    ConsultationSession: 'ConsultationSession',
    Seminar: 'Seminar',
    SeminarRegistration: 'SeminarRegistration',
    ActivityLog: 'ActivityLog'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "studyProgram" | "lecturer" | "student" | "semester" | "lecturerAvailability" | "consultationBooking" | "consultationSession" | "seminar" | "seminarRegistration" | "activityLog"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      StudyProgram: {
        payload: Prisma.$StudyProgramPayload<ExtArgs>
        fields: Prisma.StudyProgramFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StudyProgramFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudyProgramPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StudyProgramFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudyProgramPayload>
          }
          findFirst: {
            args: Prisma.StudyProgramFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudyProgramPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StudyProgramFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudyProgramPayload>
          }
          findMany: {
            args: Prisma.StudyProgramFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudyProgramPayload>[]
          }
          create: {
            args: Prisma.StudyProgramCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudyProgramPayload>
          }
          createMany: {
            args: Prisma.StudyProgramCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StudyProgramCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudyProgramPayload>[]
          }
          delete: {
            args: Prisma.StudyProgramDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudyProgramPayload>
          }
          update: {
            args: Prisma.StudyProgramUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudyProgramPayload>
          }
          deleteMany: {
            args: Prisma.StudyProgramDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StudyProgramUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StudyProgramUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudyProgramPayload>[]
          }
          upsert: {
            args: Prisma.StudyProgramUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudyProgramPayload>
          }
          aggregate: {
            args: Prisma.StudyProgramAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStudyProgram>
          }
          groupBy: {
            args: Prisma.StudyProgramGroupByArgs<ExtArgs>
            result: $Utils.Optional<StudyProgramGroupByOutputType>[]
          }
          count: {
            args: Prisma.StudyProgramCountArgs<ExtArgs>
            result: $Utils.Optional<StudyProgramCountAggregateOutputType> | number
          }
        }
      }
      Lecturer: {
        payload: Prisma.$LecturerPayload<ExtArgs>
        fields: Prisma.LecturerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LecturerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LecturerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LecturerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LecturerPayload>
          }
          findFirst: {
            args: Prisma.LecturerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LecturerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LecturerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LecturerPayload>
          }
          findMany: {
            args: Prisma.LecturerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LecturerPayload>[]
          }
          create: {
            args: Prisma.LecturerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LecturerPayload>
          }
          createMany: {
            args: Prisma.LecturerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LecturerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LecturerPayload>[]
          }
          delete: {
            args: Prisma.LecturerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LecturerPayload>
          }
          update: {
            args: Prisma.LecturerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LecturerPayload>
          }
          deleteMany: {
            args: Prisma.LecturerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LecturerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LecturerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LecturerPayload>[]
          }
          upsert: {
            args: Prisma.LecturerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LecturerPayload>
          }
          aggregate: {
            args: Prisma.LecturerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLecturer>
          }
          groupBy: {
            args: Prisma.LecturerGroupByArgs<ExtArgs>
            result: $Utils.Optional<LecturerGroupByOutputType>[]
          }
          count: {
            args: Prisma.LecturerCountArgs<ExtArgs>
            result: $Utils.Optional<LecturerCountAggregateOutputType> | number
          }
        }
      }
      Student: {
        payload: Prisma.$StudentPayload<ExtArgs>
        fields: Prisma.StudentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StudentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StudentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          findFirst: {
            args: Prisma.StudentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StudentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          findMany: {
            args: Prisma.StudentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>[]
          }
          create: {
            args: Prisma.StudentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          createMany: {
            args: Prisma.StudentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StudentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>[]
          }
          delete: {
            args: Prisma.StudentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          update: {
            args: Prisma.StudentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          deleteMany: {
            args: Prisma.StudentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StudentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StudentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>[]
          }
          upsert: {
            args: Prisma.StudentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          aggregate: {
            args: Prisma.StudentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStudent>
          }
          groupBy: {
            args: Prisma.StudentGroupByArgs<ExtArgs>
            result: $Utils.Optional<StudentGroupByOutputType>[]
          }
          count: {
            args: Prisma.StudentCountArgs<ExtArgs>
            result: $Utils.Optional<StudentCountAggregateOutputType> | number
          }
        }
      }
      Semester: {
        payload: Prisma.$SemesterPayload<ExtArgs>
        fields: Prisma.SemesterFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SemesterFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SemesterPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SemesterFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SemesterPayload>
          }
          findFirst: {
            args: Prisma.SemesterFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SemesterPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SemesterFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SemesterPayload>
          }
          findMany: {
            args: Prisma.SemesterFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SemesterPayload>[]
          }
          create: {
            args: Prisma.SemesterCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SemesterPayload>
          }
          createMany: {
            args: Prisma.SemesterCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SemesterCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SemesterPayload>[]
          }
          delete: {
            args: Prisma.SemesterDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SemesterPayload>
          }
          update: {
            args: Prisma.SemesterUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SemesterPayload>
          }
          deleteMany: {
            args: Prisma.SemesterDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SemesterUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SemesterUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SemesterPayload>[]
          }
          upsert: {
            args: Prisma.SemesterUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SemesterPayload>
          }
          aggregate: {
            args: Prisma.SemesterAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSemester>
          }
          groupBy: {
            args: Prisma.SemesterGroupByArgs<ExtArgs>
            result: $Utils.Optional<SemesterGroupByOutputType>[]
          }
          count: {
            args: Prisma.SemesterCountArgs<ExtArgs>
            result: $Utils.Optional<SemesterCountAggregateOutputType> | number
          }
        }
      }
      LecturerAvailability: {
        payload: Prisma.$LecturerAvailabilityPayload<ExtArgs>
        fields: Prisma.LecturerAvailabilityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LecturerAvailabilityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LecturerAvailabilityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LecturerAvailabilityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LecturerAvailabilityPayload>
          }
          findFirst: {
            args: Prisma.LecturerAvailabilityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LecturerAvailabilityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LecturerAvailabilityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LecturerAvailabilityPayload>
          }
          findMany: {
            args: Prisma.LecturerAvailabilityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LecturerAvailabilityPayload>[]
          }
          create: {
            args: Prisma.LecturerAvailabilityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LecturerAvailabilityPayload>
          }
          createMany: {
            args: Prisma.LecturerAvailabilityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LecturerAvailabilityCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LecturerAvailabilityPayload>[]
          }
          delete: {
            args: Prisma.LecturerAvailabilityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LecturerAvailabilityPayload>
          }
          update: {
            args: Prisma.LecturerAvailabilityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LecturerAvailabilityPayload>
          }
          deleteMany: {
            args: Prisma.LecturerAvailabilityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LecturerAvailabilityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LecturerAvailabilityUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LecturerAvailabilityPayload>[]
          }
          upsert: {
            args: Prisma.LecturerAvailabilityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LecturerAvailabilityPayload>
          }
          aggregate: {
            args: Prisma.LecturerAvailabilityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLecturerAvailability>
          }
          groupBy: {
            args: Prisma.LecturerAvailabilityGroupByArgs<ExtArgs>
            result: $Utils.Optional<LecturerAvailabilityGroupByOutputType>[]
          }
          count: {
            args: Prisma.LecturerAvailabilityCountArgs<ExtArgs>
            result: $Utils.Optional<LecturerAvailabilityCountAggregateOutputType> | number
          }
        }
      }
      ConsultationBooking: {
        payload: Prisma.$ConsultationBookingPayload<ExtArgs>
        fields: Prisma.ConsultationBookingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ConsultationBookingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultationBookingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ConsultationBookingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultationBookingPayload>
          }
          findFirst: {
            args: Prisma.ConsultationBookingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultationBookingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ConsultationBookingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultationBookingPayload>
          }
          findMany: {
            args: Prisma.ConsultationBookingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultationBookingPayload>[]
          }
          create: {
            args: Prisma.ConsultationBookingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultationBookingPayload>
          }
          createMany: {
            args: Prisma.ConsultationBookingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ConsultationBookingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultationBookingPayload>[]
          }
          delete: {
            args: Prisma.ConsultationBookingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultationBookingPayload>
          }
          update: {
            args: Prisma.ConsultationBookingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultationBookingPayload>
          }
          deleteMany: {
            args: Prisma.ConsultationBookingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ConsultationBookingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ConsultationBookingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultationBookingPayload>[]
          }
          upsert: {
            args: Prisma.ConsultationBookingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultationBookingPayload>
          }
          aggregate: {
            args: Prisma.ConsultationBookingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateConsultationBooking>
          }
          groupBy: {
            args: Prisma.ConsultationBookingGroupByArgs<ExtArgs>
            result: $Utils.Optional<ConsultationBookingGroupByOutputType>[]
          }
          count: {
            args: Prisma.ConsultationBookingCountArgs<ExtArgs>
            result: $Utils.Optional<ConsultationBookingCountAggregateOutputType> | number
          }
        }
      }
      ConsultationSession: {
        payload: Prisma.$ConsultationSessionPayload<ExtArgs>
        fields: Prisma.ConsultationSessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ConsultationSessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultationSessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ConsultationSessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultationSessionPayload>
          }
          findFirst: {
            args: Prisma.ConsultationSessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultationSessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ConsultationSessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultationSessionPayload>
          }
          findMany: {
            args: Prisma.ConsultationSessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultationSessionPayload>[]
          }
          create: {
            args: Prisma.ConsultationSessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultationSessionPayload>
          }
          createMany: {
            args: Prisma.ConsultationSessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ConsultationSessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultationSessionPayload>[]
          }
          delete: {
            args: Prisma.ConsultationSessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultationSessionPayload>
          }
          update: {
            args: Prisma.ConsultationSessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultationSessionPayload>
          }
          deleteMany: {
            args: Prisma.ConsultationSessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ConsultationSessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ConsultationSessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultationSessionPayload>[]
          }
          upsert: {
            args: Prisma.ConsultationSessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultationSessionPayload>
          }
          aggregate: {
            args: Prisma.ConsultationSessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateConsultationSession>
          }
          groupBy: {
            args: Prisma.ConsultationSessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<ConsultationSessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.ConsultationSessionCountArgs<ExtArgs>
            result: $Utils.Optional<ConsultationSessionCountAggregateOutputType> | number
          }
        }
      }
      Seminar: {
        payload: Prisma.$SeminarPayload<ExtArgs>
        fields: Prisma.SeminarFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SeminarFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeminarPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SeminarFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeminarPayload>
          }
          findFirst: {
            args: Prisma.SeminarFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeminarPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SeminarFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeminarPayload>
          }
          findMany: {
            args: Prisma.SeminarFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeminarPayload>[]
          }
          create: {
            args: Prisma.SeminarCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeminarPayload>
          }
          createMany: {
            args: Prisma.SeminarCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SeminarCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeminarPayload>[]
          }
          delete: {
            args: Prisma.SeminarDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeminarPayload>
          }
          update: {
            args: Prisma.SeminarUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeminarPayload>
          }
          deleteMany: {
            args: Prisma.SeminarDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SeminarUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SeminarUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeminarPayload>[]
          }
          upsert: {
            args: Prisma.SeminarUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeminarPayload>
          }
          aggregate: {
            args: Prisma.SeminarAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSeminar>
          }
          groupBy: {
            args: Prisma.SeminarGroupByArgs<ExtArgs>
            result: $Utils.Optional<SeminarGroupByOutputType>[]
          }
          count: {
            args: Prisma.SeminarCountArgs<ExtArgs>
            result: $Utils.Optional<SeminarCountAggregateOutputType> | number
          }
        }
      }
      SeminarRegistration: {
        payload: Prisma.$SeminarRegistrationPayload<ExtArgs>
        fields: Prisma.SeminarRegistrationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SeminarRegistrationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeminarRegistrationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SeminarRegistrationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeminarRegistrationPayload>
          }
          findFirst: {
            args: Prisma.SeminarRegistrationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeminarRegistrationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SeminarRegistrationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeminarRegistrationPayload>
          }
          findMany: {
            args: Prisma.SeminarRegistrationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeminarRegistrationPayload>[]
          }
          create: {
            args: Prisma.SeminarRegistrationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeminarRegistrationPayload>
          }
          createMany: {
            args: Prisma.SeminarRegistrationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SeminarRegistrationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeminarRegistrationPayload>[]
          }
          delete: {
            args: Prisma.SeminarRegistrationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeminarRegistrationPayload>
          }
          update: {
            args: Prisma.SeminarRegistrationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeminarRegistrationPayload>
          }
          deleteMany: {
            args: Prisma.SeminarRegistrationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SeminarRegistrationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SeminarRegistrationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeminarRegistrationPayload>[]
          }
          upsert: {
            args: Prisma.SeminarRegistrationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeminarRegistrationPayload>
          }
          aggregate: {
            args: Prisma.SeminarRegistrationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSeminarRegistration>
          }
          groupBy: {
            args: Prisma.SeminarRegistrationGroupByArgs<ExtArgs>
            result: $Utils.Optional<SeminarRegistrationGroupByOutputType>[]
          }
          count: {
            args: Prisma.SeminarRegistrationCountArgs<ExtArgs>
            result: $Utils.Optional<SeminarRegistrationCountAggregateOutputType> | number
          }
        }
      }
      ActivityLog: {
        payload: Prisma.$ActivityLogPayload<ExtArgs>
        fields: Prisma.ActivityLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ActivityLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ActivityLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>
          }
          findFirst: {
            args: Prisma.ActivityLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ActivityLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>
          }
          findMany: {
            args: Prisma.ActivityLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>[]
          }
          create: {
            args: Prisma.ActivityLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>
          }
          createMany: {
            args: Prisma.ActivityLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ActivityLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>[]
          }
          delete: {
            args: Prisma.ActivityLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>
          }
          update: {
            args: Prisma.ActivityLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>
          }
          deleteMany: {
            args: Prisma.ActivityLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ActivityLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ActivityLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>[]
          }
          upsert: {
            args: Prisma.ActivityLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>
          }
          aggregate: {
            args: Prisma.ActivityLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateActivityLog>
          }
          groupBy: {
            args: Prisma.ActivityLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<ActivityLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.ActivityLogCountArgs<ExtArgs>
            result: $Utils.Optional<ActivityLogCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    studyProgram?: StudyProgramOmit
    lecturer?: LecturerOmit
    student?: StudentOmit
    semester?: SemesterOmit
    lecturerAvailability?: LecturerAvailabilityOmit
    consultationBooking?: ConsultationBookingOmit
    consultationSession?: ConsultationSessionOmit
    seminar?: SeminarOmit
    seminarRegistration?: SeminarRegistrationOmit
    activityLog?: ActivityLogOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    bookings: number
    createdSeminars: number
    seminarRegistrations: number
    activityLogs: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookings?: boolean | UserCountOutputTypeCountBookingsArgs
    createdSeminars?: boolean | UserCountOutputTypeCountCreatedSeminarsArgs
    seminarRegistrations?: boolean | UserCountOutputTypeCountSeminarRegistrationsArgs
    activityLogs?: boolean | UserCountOutputTypeCountActivityLogsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConsultationBookingWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCreatedSeminarsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SeminarWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSeminarRegistrationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SeminarRegistrationWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountActivityLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActivityLogWhereInput
  }


  /**
   * Count Type StudyProgramCountOutputType
   */

  export type StudyProgramCountOutputType = {
    lecturers: number
    students: number
  }

  export type StudyProgramCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lecturers?: boolean | StudyProgramCountOutputTypeCountLecturersArgs
    students?: boolean | StudyProgramCountOutputTypeCountStudentsArgs
  }

  // Custom InputTypes
  /**
   * StudyProgramCountOutputType without action
   */
  export type StudyProgramCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudyProgramCountOutputType
     */
    select?: StudyProgramCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StudyProgramCountOutputType without action
   */
  export type StudyProgramCountOutputTypeCountLecturersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LecturerWhereInput
  }

  /**
   * StudyProgramCountOutputType without action
   */
  export type StudyProgramCountOutputTypeCountStudentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentWhereInput
  }


  /**
   * Count Type LecturerCountOutputType
   */

  export type LecturerCountOutputType = {
    availabilities: number
    bookings: number
    sessions: number
    seminars: number
  }

  export type LecturerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    availabilities?: boolean | LecturerCountOutputTypeCountAvailabilitiesArgs
    bookings?: boolean | LecturerCountOutputTypeCountBookingsArgs
    sessions?: boolean | LecturerCountOutputTypeCountSessionsArgs
    seminars?: boolean | LecturerCountOutputTypeCountSeminarsArgs
  }

  // Custom InputTypes
  /**
   * LecturerCountOutputType without action
   */
  export type LecturerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LecturerCountOutputType
     */
    select?: LecturerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LecturerCountOutputType without action
   */
  export type LecturerCountOutputTypeCountAvailabilitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LecturerAvailabilityWhereInput
  }

  /**
   * LecturerCountOutputType without action
   */
  export type LecturerCountOutputTypeCountBookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConsultationBookingWhereInput
  }

  /**
   * LecturerCountOutputType without action
   */
  export type LecturerCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConsultationSessionWhereInput
  }

  /**
   * LecturerCountOutputType without action
   */
  export type LecturerCountOutputTypeCountSeminarsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SeminarWhereInput
  }


  /**
   * Count Type SemesterCountOutputType
   */

  export type SemesterCountOutputType = {
    availabilities: number
    bookings: number
  }

  export type SemesterCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    availabilities?: boolean | SemesterCountOutputTypeCountAvailabilitiesArgs
    bookings?: boolean | SemesterCountOutputTypeCountBookingsArgs
  }

  // Custom InputTypes
  /**
   * SemesterCountOutputType without action
   */
  export type SemesterCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SemesterCountOutputType
     */
    select?: SemesterCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SemesterCountOutputType without action
   */
  export type SemesterCountOutputTypeCountAvailabilitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LecturerAvailabilityWhereInput
  }

  /**
   * SemesterCountOutputType without action
   */
  export type SemesterCountOutputTypeCountBookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConsultationBookingWhereInput
  }


  /**
   * Count Type ConsultationSessionCountOutputType
   */

  export type ConsultationSessionCountOutputType = {
    bookings: number
  }

  export type ConsultationSessionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookings?: boolean | ConsultationSessionCountOutputTypeCountBookingsArgs
  }

  // Custom InputTypes
  /**
   * ConsultationSessionCountOutputType without action
   */
  export type ConsultationSessionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConsultationSessionCountOutputType
     */
    select?: ConsultationSessionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ConsultationSessionCountOutputType without action
   */
  export type ConsultationSessionCountOutputTypeCountBookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConsultationBookingWhereInput
  }


  /**
   * Count Type SeminarCountOutputType
   */

  export type SeminarCountOutputType = {
    registrations: number
  }

  export type SeminarCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    registrations?: boolean | SeminarCountOutputTypeCountRegistrationsArgs
  }

  // Custom InputTypes
  /**
   * SeminarCountOutputType without action
   */
  export type SeminarCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeminarCountOutputType
     */
    select?: SeminarCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SeminarCountOutputType without action
   */
  export type SeminarCountOutputTypeCountRegistrationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SeminarRegistrationWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    semester: number | null
  }

  export type UserSumAggregateOutputType = {
    semester: number | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    passwordHash: string | null
    role: $Enums.UserRole | null
    avatar: string | null
    profilePictureUrl: string | null
    phone: string | null
    status: string | null
    organization: string | null
    businessName: string | null
    businessCategory: string | null
    businessAddress: string | null
    nim: string | null
    semester: number | null
    schoolName: string | null
    subject: string | null
    grade: string | null
    lastLogin: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    passwordHash: string | null
    role: $Enums.UserRole | null
    avatar: string | null
    profilePictureUrl: string | null
    phone: string | null
    status: string | null
    organization: string | null
    businessName: string | null
    businessCategory: string | null
    businessAddress: string | null
    nim: string | null
    semester: number | null
    schoolName: string | null
    subject: string | null
    grade: string | null
    lastLogin: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    passwordHash: number
    role: number
    avatar: number
    profilePictureUrl: number
    phone: number
    status: number
    organization: number
    businessName: number
    businessCategory: number
    businessAddress: number
    nim: number
    semester: number
    schoolName: number
    subject: number
    grade: number
    lastLogin: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    semester?: true
  }

  export type UserSumAggregateInputType = {
    semester?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    passwordHash?: true
    role?: true
    avatar?: true
    profilePictureUrl?: true
    phone?: true
    status?: true
    organization?: true
    businessName?: true
    businessCategory?: true
    businessAddress?: true
    nim?: true
    semester?: true
    schoolName?: true
    subject?: true
    grade?: true
    lastLogin?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    passwordHash?: true
    role?: true
    avatar?: true
    profilePictureUrl?: true
    phone?: true
    status?: true
    organization?: true
    businessName?: true
    businessCategory?: true
    businessAddress?: true
    nim?: true
    semester?: true
    schoolName?: true
    subject?: true
    grade?: true
    lastLogin?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    passwordHash?: true
    role?: true
    avatar?: true
    profilePictureUrl?: true
    phone?: true
    status?: true
    organization?: true
    businessName?: true
    businessCategory?: true
    businessAddress?: true
    nim?: true
    semester?: true
    schoolName?: true
    subject?: true
    grade?: true
    lastLogin?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    email: string
    passwordHash: string
    role: $Enums.UserRole
    avatar: string
    profilePictureUrl: string | null
    phone: string | null
    status: string
    organization: string | null
    businessName: string | null
    businessCategory: string | null
    businessAddress: string | null
    nim: string | null
    semester: number | null
    schoolName: string | null
    subject: string | null
    grade: string | null
    lastLogin: Date | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
    avatar?: boolean
    profilePictureUrl?: boolean
    phone?: boolean
    status?: boolean
    organization?: boolean
    businessName?: boolean
    businessCategory?: boolean
    businessAddress?: boolean
    nim?: boolean
    semester?: boolean
    schoolName?: boolean
    subject?: boolean
    grade?: boolean
    lastLogin?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lecturer?: boolean | User$lecturerArgs<ExtArgs>
    bookings?: boolean | User$bookingsArgs<ExtArgs>
    createdSeminars?: boolean | User$createdSeminarsArgs<ExtArgs>
    seminarRegistrations?: boolean | User$seminarRegistrationsArgs<ExtArgs>
    activityLogs?: boolean | User$activityLogsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
    avatar?: boolean
    profilePictureUrl?: boolean
    phone?: boolean
    status?: boolean
    organization?: boolean
    businessName?: boolean
    businessCategory?: boolean
    businessAddress?: boolean
    nim?: boolean
    semester?: boolean
    schoolName?: boolean
    subject?: boolean
    grade?: boolean
    lastLogin?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
    avatar?: boolean
    profilePictureUrl?: boolean
    phone?: boolean
    status?: boolean
    organization?: boolean
    businessName?: boolean
    businessCategory?: boolean
    businessAddress?: boolean
    nim?: boolean
    semester?: boolean
    schoolName?: boolean
    subject?: boolean
    grade?: boolean
    lastLogin?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
    avatar?: boolean
    profilePictureUrl?: boolean
    phone?: boolean
    status?: boolean
    organization?: boolean
    businessName?: boolean
    businessCategory?: boolean
    businessAddress?: boolean
    nim?: boolean
    semester?: boolean
    schoolName?: boolean
    subject?: boolean
    grade?: boolean
    lastLogin?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "passwordHash" | "role" | "avatar" | "profilePictureUrl" | "phone" | "status" | "organization" | "businessName" | "businessCategory" | "businessAddress" | "nim" | "semester" | "schoolName" | "subject" | "grade" | "lastLogin" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lecturer?: boolean | User$lecturerArgs<ExtArgs>
    bookings?: boolean | User$bookingsArgs<ExtArgs>
    createdSeminars?: boolean | User$createdSeminarsArgs<ExtArgs>
    seminarRegistrations?: boolean | User$seminarRegistrationsArgs<ExtArgs>
    activityLogs?: boolean | User$activityLogsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      lecturer: Prisma.$LecturerPayload<ExtArgs> | null
      bookings: Prisma.$ConsultationBookingPayload<ExtArgs>[]
      createdSeminars: Prisma.$SeminarPayload<ExtArgs>[]
      seminarRegistrations: Prisma.$SeminarRegistrationPayload<ExtArgs>[]
      activityLogs: Prisma.$ActivityLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      passwordHash: string
      role: $Enums.UserRole
      avatar: string
      profilePictureUrl: string | null
      phone: string | null
      status: string
      organization: string | null
      businessName: string | null
      businessCategory: string | null
      businessAddress: string | null
      nim: string | null
      semester: number | null
      schoolName: string | null
      subject: string | null
      grade: string | null
      lastLogin: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    lecturer<T extends User$lecturerArgs<ExtArgs> = {}>(args?: Subset<T, User$lecturerArgs<ExtArgs>>): Prisma__LecturerClient<$Result.GetResult<Prisma.$LecturerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    bookings<T extends User$bookingsArgs<ExtArgs> = {}>(args?: Subset<T, User$bookingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConsultationBookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    createdSeminars<T extends User$createdSeminarsArgs<ExtArgs> = {}>(args?: Subset<T, User$createdSeminarsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SeminarPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    seminarRegistrations<T extends User$seminarRegistrationsArgs<ExtArgs> = {}>(args?: Subset<T, User$seminarRegistrationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SeminarRegistrationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    activityLogs<T extends User$activityLogsArgs<ExtArgs> = {}>(args?: Subset<T, User$activityLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly passwordHash: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'UserRole'>
    readonly avatar: FieldRef<"User", 'String'>
    readonly profilePictureUrl: FieldRef<"User", 'String'>
    readonly phone: FieldRef<"User", 'String'>
    readonly status: FieldRef<"User", 'String'>
    readonly organization: FieldRef<"User", 'String'>
    readonly businessName: FieldRef<"User", 'String'>
    readonly businessCategory: FieldRef<"User", 'String'>
    readonly businessAddress: FieldRef<"User", 'String'>
    readonly nim: FieldRef<"User", 'String'>
    readonly semester: FieldRef<"User", 'Int'>
    readonly schoolName: FieldRef<"User", 'String'>
    readonly subject: FieldRef<"User", 'String'>
    readonly grade: FieldRef<"User", 'String'>
    readonly lastLogin: FieldRef<"User", 'DateTime'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.lecturer
   */
  export type User$lecturerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lecturer
     */
    select?: LecturerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lecturer
     */
    omit?: LecturerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LecturerInclude<ExtArgs> | null
    where?: LecturerWhereInput
  }

  /**
   * User.bookings
   */
  export type User$bookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConsultationBooking
     */
    select?: ConsultationBookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConsultationBooking
     */
    omit?: ConsultationBookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultationBookingInclude<ExtArgs> | null
    where?: ConsultationBookingWhereInput
    orderBy?: ConsultationBookingOrderByWithRelationInput | ConsultationBookingOrderByWithRelationInput[]
    cursor?: ConsultationBookingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ConsultationBookingScalarFieldEnum | ConsultationBookingScalarFieldEnum[]
  }

  /**
   * User.createdSeminars
   */
  export type User$createdSeminarsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seminar
     */
    select?: SeminarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seminar
     */
    omit?: SeminarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeminarInclude<ExtArgs> | null
    where?: SeminarWhereInput
    orderBy?: SeminarOrderByWithRelationInput | SeminarOrderByWithRelationInput[]
    cursor?: SeminarWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SeminarScalarFieldEnum | SeminarScalarFieldEnum[]
  }

  /**
   * User.seminarRegistrations
   */
  export type User$seminarRegistrationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeminarRegistration
     */
    select?: SeminarRegistrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeminarRegistration
     */
    omit?: SeminarRegistrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeminarRegistrationInclude<ExtArgs> | null
    where?: SeminarRegistrationWhereInput
    orderBy?: SeminarRegistrationOrderByWithRelationInput | SeminarRegistrationOrderByWithRelationInput[]
    cursor?: SeminarRegistrationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SeminarRegistrationScalarFieldEnum | SeminarRegistrationScalarFieldEnum[]
  }

  /**
   * User.activityLogs
   */
  export type User$activityLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    where?: ActivityLogWhereInput
    orderBy?: ActivityLogOrderByWithRelationInput | ActivityLogOrderByWithRelationInput[]
    cursor?: ActivityLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ActivityLogScalarFieldEnum | ActivityLogScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model StudyProgram
   */

  export type AggregateStudyProgram = {
    _count: StudyProgramCountAggregateOutputType | null
    _min: StudyProgramMinAggregateOutputType | null
    _max: StudyProgramMaxAggregateOutputType | null
  }

  export type StudyProgramMinAggregateOutputType = {
    id: string | null
    code: string | null
    name: string | null
    faculty: string | null
    createdAt: Date | null
  }

  export type StudyProgramMaxAggregateOutputType = {
    id: string | null
    code: string | null
    name: string | null
    faculty: string | null
    createdAt: Date | null
  }

  export type StudyProgramCountAggregateOutputType = {
    id: number
    code: number
    name: number
    faculty: number
    createdAt: number
    _all: number
  }


  export type StudyProgramMinAggregateInputType = {
    id?: true
    code?: true
    name?: true
    faculty?: true
    createdAt?: true
  }

  export type StudyProgramMaxAggregateInputType = {
    id?: true
    code?: true
    name?: true
    faculty?: true
    createdAt?: true
  }

  export type StudyProgramCountAggregateInputType = {
    id?: true
    code?: true
    name?: true
    faculty?: true
    createdAt?: true
    _all?: true
  }

  export type StudyProgramAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StudyProgram to aggregate.
     */
    where?: StudyProgramWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudyPrograms to fetch.
     */
    orderBy?: StudyProgramOrderByWithRelationInput | StudyProgramOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StudyProgramWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudyPrograms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudyPrograms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StudyPrograms
    **/
    _count?: true | StudyProgramCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StudyProgramMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StudyProgramMaxAggregateInputType
  }

  export type GetStudyProgramAggregateType<T extends StudyProgramAggregateArgs> = {
        [P in keyof T & keyof AggregateStudyProgram]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStudyProgram[P]>
      : GetScalarType<T[P], AggregateStudyProgram[P]>
  }




  export type StudyProgramGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudyProgramWhereInput
    orderBy?: StudyProgramOrderByWithAggregationInput | StudyProgramOrderByWithAggregationInput[]
    by: StudyProgramScalarFieldEnum[] | StudyProgramScalarFieldEnum
    having?: StudyProgramScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StudyProgramCountAggregateInputType | true
    _min?: StudyProgramMinAggregateInputType
    _max?: StudyProgramMaxAggregateInputType
  }

  export type StudyProgramGroupByOutputType = {
    id: string
    code: string
    name: string
    faculty: string
    createdAt: Date
    _count: StudyProgramCountAggregateOutputType | null
    _min: StudyProgramMinAggregateOutputType | null
    _max: StudyProgramMaxAggregateOutputType | null
  }

  type GetStudyProgramGroupByPayload<T extends StudyProgramGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StudyProgramGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StudyProgramGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StudyProgramGroupByOutputType[P]>
            : GetScalarType<T[P], StudyProgramGroupByOutputType[P]>
        }
      >
    >


  export type StudyProgramSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    name?: boolean
    faculty?: boolean
    createdAt?: boolean
    lecturers?: boolean | StudyProgram$lecturersArgs<ExtArgs>
    students?: boolean | StudyProgram$studentsArgs<ExtArgs>
    _count?: boolean | StudyProgramCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["studyProgram"]>

  export type StudyProgramSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    name?: boolean
    faculty?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["studyProgram"]>

  export type StudyProgramSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    name?: boolean
    faculty?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["studyProgram"]>

  export type StudyProgramSelectScalar = {
    id?: boolean
    code?: boolean
    name?: boolean
    faculty?: boolean
    createdAt?: boolean
  }

  export type StudyProgramOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "code" | "name" | "faculty" | "createdAt", ExtArgs["result"]["studyProgram"]>
  export type StudyProgramInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lecturers?: boolean | StudyProgram$lecturersArgs<ExtArgs>
    students?: boolean | StudyProgram$studentsArgs<ExtArgs>
    _count?: boolean | StudyProgramCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type StudyProgramIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type StudyProgramIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $StudyProgramPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StudyProgram"
    objects: {
      lecturers: Prisma.$LecturerPayload<ExtArgs>[]
      students: Prisma.$StudentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      code: string
      name: string
      faculty: string
      createdAt: Date
    }, ExtArgs["result"]["studyProgram"]>
    composites: {}
  }

  type StudyProgramGetPayload<S extends boolean | null | undefined | StudyProgramDefaultArgs> = $Result.GetResult<Prisma.$StudyProgramPayload, S>

  type StudyProgramCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StudyProgramFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StudyProgramCountAggregateInputType | true
    }

  export interface StudyProgramDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StudyProgram'], meta: { name: 'StudyProgram' } }
    /**
     * Find zero or one StudyProgram that matches the filter.
     * @param {StudyProgramFindUniqueArgs} args - Arguments to find a StudyProgram
     * @example
     * // Get one StudyProgram
     * const studyProgram = await prisma.studyProgram.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StudyProgramFindUniqueArgs>(args: SelectSubset<T, StudyProgramFindUniqueArgs<ExtArgs>>): Prisma__StudyProgramClient<$Result.GetResult<Prisma.$StudyProgramPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one StudyProgram that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StudyProgramFindUniqueOrThrowArgs} args - Arguments to find a StudyProgram
     * @example
     * // Get one StudyProgram
     * const studyProgram = await prisma.studyProgram.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StudyProgramFindUniqueOrThrowArgs>(args: SelectSubset<T, StudyProgramFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StudyProgramClient<$Result.GetResult<Prisma.$StudyProgramPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StudyProgram that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudyProgramFindFirstArgs} args - Arguments to find a StudyProgram
     * @example
     * // Get one StudyProgram
     * const studyProgram = await prisma.studyProgram.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StudyProgramFindFirstArgs>(args?: SelectSubset<T, StudyProgramFindFirstArgs<ExtArgs>>): Prisma__StudyProgramClient<$Result.GetResult<Prisma.$StudyProgramPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StudyProgram that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudyProgramFindFirstOrThrowArgs} args - Arguments to find a StudyProgram
     * @example
     * // Get one StudyProgram
     * const studyProgram = await prisma.studyProgram.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StudyProgramFindFirstOrThrowArgs>(args?: SelectSubset<T, StudyProgramFindFirstOrThrowArgs<ExtArgs>>): Prisma__StudyProgramClient<$Result.GetResult<Prisma.$StudyProgramPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more StudyPrograms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudyProgramFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StudyPrograms
     * const studyPrograms = await prisma.studyProgram.findMany()
     * 
     * // Get first 10 StudyPrograms
     * const studyPrograms = await prisma.studyProgram.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const studyProgramWithIdOnly = await prisma.studyProgram.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StudyProgramFindManyArgs>(args?: SelectSubset<T, StudyProgramFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudyProgramPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a StudyProgram.
     * @param {StudyProgramCreateArgs} args - Arguments to create a StudyProgram.
     * @example
     * // Create one StudyProgram
     * const StudyProgram = await prisma.studyProgram.create({
     *   data: {
     *     // ... data to create a StudyProgram
     *   }
     * })
     * 
     */
    create<T extends StudyProgramCreateArgs>(args: SelectSubset<T, StudyProgramCreateArgs<ExtArgs>>): Prisma__StudyProgramClient<$Result.GetResult<Prisma.$StudyProgramPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many StudyPrograms.
     * @param {StudyProgramCreateManyArgs} args - Arguments to create many StudyPrograms.
     * @example
     * // Create many StudyPrograms
     * const studyProgram = await prisma.studyProgram.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StudyProgramCreateManyArgs>(args?: SelectSubset<T, StudyProgramCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many StudyPrograms and returns the data saved in the database.
     * @param {StudyProgramCreateManyAndReturnArgs} args - Arguments to create many StudyPrograms.
     * @example
     * // Create many StudyPrograms
     * const studyProgram = await prisma.studyProgram.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many StudyPrograms and only return the `id`
     * const studyProgramWithIdOnly = await prisma.studyProgram.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StudyProgramCreateManyAndReturnArgs>(args?: SelectSubset<T, StudyProgramCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudyProgramPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a StudyProgram.
     * @param {StudyProgramDeleteArgs} args - Arguments to delete one StudyProgram.
     * @example
     * // Delete one StudyProgram
     * const StudyProgram = await prisma.studyProgram.delete({
     *   where: {
     *     // ... filter to delete one StudyProgram
     *   }
     * })
     * 
     */
    delete<T extends StudyProgramDeleteArgs>(args: SelectSubset<T, StudyProgramDeleteArgs<ExtArgs>>): Prisma__StudyProgramClient<$Result.GetResult<Prisma.$StudyProgramPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one StudyProgram.
     * @param {StudyProgramUpdateArgs} args - Arguments to update one StudyProgram.
     * @example
     * // Update one StudyProgram
     * const studyProgram = await prisma.studyProgram.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StudyProgramUpdateArgs>(args: SelectSubset<T, StudyProgramUpdateArgs<ExtArgs>>): Prisma__StudyProgramClient<$Result.GetResult<Prisma.$StudyProgramPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more StudyPrograms.
     * @param {StudyProgramDeleteManyArgs} args - Arguments to filter StudyPrograms to delete.
     * @example
     * // Delete a few StudyPrograms
     * const { count } = await prisma.studyProgram.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StudyProgramDeleteManyArgs>(args?: SelectSubset<T, StudyProgramDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StudyPrograms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudyProgramUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StudyPrograms
     * const studyProgram = await prisma.studyProgram.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StudyProgramUpdateManyArgs>(args: SelectSubset<T, StudyProgramUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StudyPrograms and returns the data updated in the database.
     * @param {StudyProgramUpdateManyAndReturnArgs} args - Arguments to update many StudyPrograms.
     * @example
     * // Update many StudyPrograms
     * const studyProgram = await prisma.studyProgram.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more StudyPrograms and only return the `id`
     * const studyProgramWithIdOnly = await prisma.studyProgram.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends StudyProgramUpdateManyAndReturnArgs>(args: SelectSubset<T, StudyProgramUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudyProgramPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one StudyProgram.
     * @param {StudyProgramUpsertArgs} args - Arguments to update or create a StudyProgram.
     * @example
     * // Update or create a StudyProgram
     * const studyProgram = await prisma.studyProgram.upsert({
     *   create: {
     *     // ... data to create a StudyProgram
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StudyProgram we want to update
     *   }
     * })
     */
    upsert<T extends StudyProgramUpsertArgs>(args: SelectSubset<T, StudyProgramUpsertArgs<ExtArgs>>): Prisma__StudyProgramClient<$Result.GetResult<Prisma.$StudyProgramPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of StudyPrograms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudyProgramCountArgs} args - Arguments to filter StudyPrograms to count.
     * @example
     * // Count the number of StudyPrograms
     * const count = await prisma.studyProgram.count({
     *   where: {
     *     // ... the filter for the StudyPrograms we want to count
     *   }
     * })
    **/
    count<T extends StudyProgramCountArgs>(
      args?: Subset<T, StudyProgramCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StudyProgramCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StudyProgram.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudyProgramAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StudyProgramAggregateArgs>(args: Subset<T, StudyProgramAggregateArgs>): Prisma.PrismaPromise<GetStudyProgramAggregateType<T>>

    /**
     * Group by StudyProgram.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudyProgramGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StudyProgramGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StudyProgramGroupByArgs['orderBy'] }
        : { orderBy?: StudyProgramGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StudyProgramGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStudyProgramGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StudyProgram model
   */
  readonly fields: StudyProgramFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StudyProgram.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StudyProgramClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    lecturers<T extends StudyProgram$lecturersArgs<ExtArgs> = {}>(args?: Subset<T, StudyProgram$lecturersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LecturerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    students<T extends StudyProgram$studentsArgs<ExtArgs> = {}>(args?: Subset<T, StudyProgram$studentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the StudyProgram model
   */
  interface StudyProgramFieldRefs {
    readonly id: FieldRef<"StudyProgram", 'String'>
    readonly code: FieldRef<"StudyProgram", 'String'>
    readonly name: FieldRef<"StudyProgram", 'String'>
    readonly faculty: FieldRef<"StudyProgram", 'String'>
    readonly createdAt: FieldRef<"StudyProgram", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * StudyProgram findUnique
   */
  export type StudyProgramFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudyProgram
     */
    select?: StudyProgramSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudyProgram
     */
    omit?: StudyProgramOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudyProgramInclude<ExtArgs> | null
    /**
     * Filter, which StudyProgram to fetch.
     */
    where: StudyProgramWhereUniqueInput
  }

  /**
   * StudyProgram findUniqueOrThrow
   */
  export type StudyProgramFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudyProgram
     */
    select?: StudyProgramSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudyProgram
     */
    omit?: StudyProgramOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudyProgramInclude<ExtArgs> | null
    /**
     * Filter, which StudyProgram to fetch.
     */
    where: StudyProgramWhereUniqueInput
  }

  /**
   * StudyProgram findFirst
   */
  export type StudyProgramFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudyProgram
     */
    select?: StudyProgramSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudyProgram
     */
    omit?: StudyProgramOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudyProgramInclude<ExtArgs> | null
    /**
     * Filter, which StudyProgram to fetch.
     */
    where?: StudyProgramWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudyPrograms to fetch.
     */
    orderBy?: StudyProgramOrderByWithRelationInput | StudyProgramOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StudyPrograms.
     */
    cursor?: StudyProgramWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudyPrograms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudyPrograms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StudyPrograms.
     */
    distinct?: StudyProgramScalarFieldEnum | StudyProgramScalarFieldEnum[]
  }

  /**
   * StudyProgram findFirstOrThrow
   */
  export type StudyProgramFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudyProgram
     */
    select?: StudyProgramSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudyProgram
     */
    omit?: StudyProgramOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudyProgramInclude<ExtArgs> | null
    /**
     * Filter, which StudyProgram to fetch.
     */
    where?: StudyProgramWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudyPrograms to fetch.
     */
    orderBy?: StudyProgramOrderByWithRelationInput | StudyProgramOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StudyPrograms.
     */
    cursor?: StudyProgramWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudyPrograms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudyPrograms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StudyPrograms.
     */
    distinct?: StudyProgramScalarFieldEnum | StudyProgramScalarFieldEnum[]
  }

  /**
   * StudyProgram findMany
   */
  export type StudyProgramFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudyProgram
     */
    select?: StudyProgramSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudyProgram
     */
    omit?: StudyProgramOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudyProgramInclude<ExtArgs> | null
    /**
     * Filter, which StudyPrograms to fetch.
     */
    where?: StudyProgramWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudyPrograms to fetch.
     */
    orderBy?: StudyProgramOrderByWithRelationInput | StudyProgramOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StudyPrograms.
     */
    cursor?: StudyProgramWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudyPrograms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudyPrograms.
     */
    skip?: number
    distinct?: StudyProgramScalarFieldEnum | StudyProgramScalarFieldEnum[]
  }

  /**
   * StudyProgram create
   */
  export type StudyProgramCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudyProgram
     */
    select?: StudyProgramSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudyProgram
     */
    omit?: StudyProgramOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudyProgramInclude<ExtArgs> | null
    /**
     * The data needed to create a StudyProgram.
     */
    data: XOR<StudyProgramCreateInput, StudyProgramUncheckedCreateInput>
  }

  /**
   * StudyProgram createMany
   */
  export type StudyProgramCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StudyPrograms.
     */
    data: StudyProgramCreateManyInput | StudyProgramCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StudyProgram createManyAndReturn
   */
  export type StudyProgramCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudyProgram
     */
    select?: StudyProgramSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StudyProgram
     */
    omit?: StudyProgramOmit<ExtArgs> | null
    /**
     * The data used to create many StudyPrograms.
     */
    data: StudyProgramCreateManyInput | StudyProgramCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StudyProgram update
   */
  export type StudyProgramUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudyProgram
     */
    select?: StudyProgramSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudyProgram
     */
    omit?: StudyProgramOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudyProgramInclude<ExtArgs> | null
    /**
     * The data needed to update a StudyProgram.
     */
    data: XOR<StudyProgramUpdateInput, StudyProgramUncheckedUpdateInput>
    /**
     * Choose, which StudyProgram to update.
     */
    where: StudyProgramWhereUniqueInput
  }

  /**
   * StudyProgram updateMany
   */
  export type StudyProgramUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StudyPrograms.
     */
    data: XOR<StudyProgramUpdateManyMutationInput, StudyProgramUncheckedUpdateManyInput>
    /**
     * Filter which StudyPrograms to update
     */
    where?: StudyProgramWhereInput
    /**
     * Limit how many StudyPrograms to update.
     */
    limit?: number
  }

  /**
   * StudyProgram updateManyAndReturn
   */
  export type StudyProgramUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudyProgram
     */
    select?: StudyProgramSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StudyProgram
     */
    omit?: StudyProgramOmit<ExtArgs> | null
    /**
     * The data used to update StudyPrograms.
     */
    data: XOR<StudyProgramUpdateManyMutationInput, StudyProgramUncheckedUpdateManyInput>
    /**
     * Filter which StudyPrograms to update
     */
    where?: StudyProgramWhereInput
    /**
     * Limit how many StudyPrograms to update.
     */
    limit?: number
  }

  /**
   * StudyProgram upsert
   */
  export type StudyProgramUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudyProgram
     */
    select?: StudyProgramSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudyProgram
     */
    omit?: StudyProgramOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudyProgramInclude<ExtArgs> | null
    /**
     * The filter to search for the StudyProgram to update in case it exists.
     */
    where: StudyProgramWhereUniqueInput
    /**
     * In case the StudyProgram found by the `where` argument doesn't exist, create a new StudyProgram with this data.
     */
    create: XOR<StudyProgramCreateInput, StudyProgramUncheckedCreateInput>
    /**
     * In case the StudyProgram was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StudyProgramUpdateInput, StudyProgramUncheckedUpdateInput>
  }

  /**
   * StudyProgram delete
   */
  export type StudyProgramDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudyProgram
     */
    select?: StudyProgramSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudyProgram
     */
    omit?: StudyProgramOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudyProgramInclude<ExtArgs> | null
    /**
     * Filter which StudyProgram to delete.
     */
    where: StudyProgramWhereUniqueInput
  }

  /**
   * StudyProgram deleteMany
   */
  export type StudyProgramDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StudyPrograms to delete
     */
    where?: StudyProgramWhereInput
    /**
     * Limit how many StudyPrograms to delete.
     */
    limit?: number
  }

  /**
   * StudyProgram.lecturers
   */
  export type StudyProgram$lecturersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lecturer
     */
    select?: LecturerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lecturer
     */
    omit?: LecturerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LecturerInclude<ExtArgs> | null
    where?: LecturerWhereInput
    orderBy?: LecturerOrderByWithRelationInput | LecturerOrderByWithRelationInput[]
    cursor?: LecturerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LecturerScalarFieldEnum | LecturerScalarFieldEnum[]
  }

  /**
   * StudyProgram.students
   */
  export type StudyProgram$studentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    where?: StudentWhereInput
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    cursor?: StudentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * StudyProgram without action
   */
  export type StudyProgramDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudyProgram
     */
    select?: StudyProgramSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudyProgram
     */
    omit?: StudyProgramOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudyProgramInclude<ExtArgs> | null
  }


  /**
   * Model Lecturer
   */

  export type AggregateLecturer = {
    _count: LecturerCountAggregateOutputType | null
    _avg: LecturerAvgAggregateOutputType | null
    _sum: LecturerSumAggregateOutputType | null
    _min: LecturerMinAggregateOutputType | null
    _max: LecturerMaxAggregateOutputType | null
  }

  export type LecturerAvgAggregateOutputType = {
    rating: number | null
  }

  export type LecturerSumAggregateOutputType = {
    rating: number | null
  }

  export type LecturerMinAggregateOutputType = {
    id: string | null
    lecturerCode: string | null
    userId: string | null
    studyProgramId: string | null
    name: string | null
    email: string | null
    photo: string | null
    specialization: string | null
    university: string | null
    rating: number | null
    experience: string | null
    phone: string | null
    bio: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LecturerMaxAggregateOutputType = {
    id: string | null
    lecturerCode: string | null
    userId: string | null
    studyProgramId: string | null
    name: string | null
    email: string | null
    photo: string | null
    specialization: string | null
    university: string | null
    rating: number | null
    experience: string | null
    phone: string | null
    bio: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LecturerCountAggregateOutputType = {
    id: number
    lecturerCode: number
    userId: number
    studyProgramId: number
    name: number
    email: number
    photo: number
    specialization: number
    university: number
    rating: number
    experience: number
    expertise: number
    phone: number
    bio: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type LecturerAvgAggregateInputType = {
    rating?: true
  }

  export type LecturerSumAggregateInputType = {
    rating?: true
  }

  export type LecturerMinAggregateInputType = {
    id?: true
    lecturerCode?: true
    userId?: true
    studyProgramId?: true
    name?: true
    email?: true
    photo?: true
    specialization?: true
    university?: true
    rating?: true
    experience?: true
    phone?: true
    bio?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LecturerMaxAggregateInputType = {
    id?: true
    lecturerCode?: true
    userId?: true
    studyProgramId?: true
    name?: true
    email?: true
    photo?: true
    specialization?: true
    university?: true
    rating?: true
    experience?: true
    phone?: true
    bio?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LecturerCountAggregateInputType = {
    id?: true
    lecturerCode?: true
    userId?: true
    studyProgramId?: true
    name?: true
    email?: true
    photo?: true
    specialization?: true
    university?: true
    rating?: true
    experience?: true
    expertise?: true
    phone?: true
    bio?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type LecturerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Lecturer to aggregate.
     */
    where?: LecturerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lecturers to fetch.
     */
    orderBy?: LecturerOrderByWithRelationInput | LecturerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LecturerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lecturers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lecturers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Lecturers
    **/
    _count?: true | LecturerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LecturerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LecturerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LecturerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LecturerMaxAggregateInputType
  }

  export type GetLecturerAggregateType<T extends LecturerAggregateArgs> = {
        [P in keyof T & keyof AggregateLecturer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLecturer[P]>
      : GetScalarType<T[P], AggregateLecturer[P]>
  }




  export type LecturerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LecturerWhereInput
    orderBy?: LecturerOrderByWithAggregationInput | LecturerOrderByWithAggregationInput[]
    by: LecturerScalarFieldEnum[] | LecturerScalarFieldEnum
    having?: LecturerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LecturerCountAggregateInputType | true
    _avg?: LecturerAvgAggregateInputType
    _sum?: LecturerSumAggregateInputType
    _min?: LecturerMinAggregateInputType
    _max?: LecturerMaxAggregateInputType
  }

  export type LecturerGroupByOutputType = {
    id: string
    lecturerCode: string
    userId: string | null
    studyProgramId: string | null
    name: string
    email: string
    photo: string
    specialization: string
    university: string
    rating: number
    experience: string
    expertise: string[]
    phone: string
    bio: string
    createdAt: Date
    updatedAt: Date
    _count: LecturerCountAggregateOutputType | null
    _avg: LecturerAvgAggregateOutputType | null
    _sum: LecturerSumAggregateOutputType | null
    _min: LecturerMinAggregateOutputType | null
    _max: LecturerMaxAggregateOutputType | null
  }

  type GetLecturerGroupByPayload<T extends LecturerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LecturerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LecturerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LecturerGroupByOutputType[P]>
            : GetScalarType<T[P], LecturerGroupByOutputType[P]>
        }
      >
    >


  export type LecturerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    lecturerCode?: boolean
    userId?: boolean
    studyProgramId?: boolean
    name?: boolean
    email?: boolean
    photo?: boolean
    specialization?: boolean
    university?: boolean
    rating?: boolean
    experience?: boolean
    expertise?: boolean
    phone?: boolean
    bio?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | Lecturer$userArgs<ExtArgs>
    studyProgram?: boolean | Lecturer$studyProgramArgs<ExtArgs>
    availabilities?: boolean | Lecturer$availabilitiesArgs<ExtArgs>
    bookings?: boolean | Lecturer$bookingsArgs<ExtArgs>
    sessions?: boolean | Lecturer$sessionsArgs<ExtArgs>
    seminars?: boolean | Lecturer$seminarsArgs<ExtArgs>
    _count?: boolean | LecturerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lecturer"]>

  export type LecturerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    lecturerCode?: boolean
    userId?: boolean
    studyProgramId?: boolean
    name?: boolean
    email?: boolean
    photo?: boolean
    specialization?: boolean
    university?: boolean
    rating?: boolean
    experience?: boolean
    expertise?: boolean
    phone?: boolean
    bio?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | Lecturer$userArgs<ExtArgs>
    studyProgram?: boolean | Lecturer$studyProgramArgs<ExtArgs>
  }, ExtArgs["result"]["lecturer"]>

  export type LecturerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    lecturerCode?: boolean
    userId?: boolean
    studyProgramId?: boolean
    name?: boolean
    email?: boolean
    photo?: boolean
    specialization?: boolean
    university?: boolean
    rating?: boolean
    experience?: boolean
    expertise?: boolean
    phone?: boolean
    bio?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | Lecturer$userArgs<ExtArgs>
    studyProgram?: boolean | Lecturer$studyProgramArgs<ExtArgs>
  }, ExtArgs["result"]["lecturer"]>

  export type LecturerSelectScalar = {
    id?: boolean
    lecturerCode?: boolean
    userId?: boolean
    studyProgramId?: boolean
    name?: boolean
    email?: boolean
    photo?: boolean
    specialization?: boolean
    university?: boolean
    rating?: boolean
    experience?: boolean
    expertise?: boolean
    phone?: boolean
    bio?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type LecturerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "lecturerCode" | "userId" | "studyProgramId" | "name" | "email" | "photo" | "specialization" | "university" | "rating" | "experience" | "expertise" | "phone" | "bio" | "createdAt" | "updatedAt", ExtArgs["result"]["lecturer"]>
  export type LecturerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Lecturer$userArgs<ExtArgs>
    studyProgram?: boolean | Lecturer$studyProgramArgs<ExtArgs>
    availabilities?: boolean | Lecturer$availabilitiesArgs<ExtArgs>
    bookings?: boolean | Lecturer$bookingsArgs<ExtArgs>
    sessions?: boolean | Lecturer$sessionsArgs<ExtArgs>
    seminars?: boolean | Lecturer$seminarsArgs<ExtArgs>
    _count?: boolean | LecturerCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type LecturerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Lecturer$userArgs<ExtArgs>
    studyProgram?: boolean | Lecturer$studyProgramArgs<ExtArgs>
  }
  export type LecturerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Lecturer$userArgs<ExtArgs>
    studyProgram?: boolean | Lecturer$studyProgramArgs<ExtArgs>
  }

  export type $LecturerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Lecturer"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
      studyProgram: Prisma.$StudyProgramPayload<ExtArgs> | null
      availabilities: Prisma.$LecturerAvailabilityPayload<ExtArgs>[]
      bookings: Prisma.$ConsultationBookingPayload<ExtArgs>[]
      sessions: Prisma.$ConsultationSessionPayload<ExtArgs>[]
      seminars: Prisma.$SeminarPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      lecturerCode: string
      userId: string | null
      studyProgramId: string | null
      name: string
      email: string
      photo: string
      specialization: string
      university: string
      rating: number
      experience: string
      expertise: string[]
      phone: string
      bio: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["lecturer"]>
    composites: {}
  }

  type LecturerGetPayload<S extends boolean | null | undefined | LecturerDefaultArgs> = $Result.GetResult<Prisma.$LecturerPayload, S>

  type LecturerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LecturerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LecturerCountAggregateInputType | true
    }

  export interface LecturerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Lecturer'], meta: { name: 'Lecturer' } }
    /**
     * Find zero or one Lecturer that matches the filter.
     * @param {LecturerFindUniqueArgs} args - Arguments to find a Lecturer
     * @example
     * // Get one Lecturer
     * const lecturer = await prisma.lecturer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LecturerFindUniqueArgs>(args: SelectSubset<T, LecturerFindUniqueArgs<ExtArgs>>): Prisma__LecturerClient<$Result.GetResult<Prisma.$LecturerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Lecturer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LecturerFindUniqueOrThrowArgs} args - Arguments to find a Lecturer
     * @example
     * // Get one Lecturer
     * const lecturer = await prisma.lecturer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LecturerFindUniqueOrThrowArgs>(args: SelectSubset<T, LecturerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LecturerClient<$Result.GetResult<Prisma.$LecturerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Lecturer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LecturerFindFirstArgs} args - Arguments to find a Lecturer
     * @example
     * // Get one Lecturer
     * const lecturer = await prisma.lecturer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LecturerFindFirstArgs>(args?: SelectSubset<T, LecturerFindFirstArgs<ExtArgs>>): Prisma__LecturerClient<$Result.GetResult<Prisma.$LecturerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Lecturer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LecturerFindFirstOrThrowArgs} args - Arguments to find a Lecturer
     * @example
     * // Get one Lecturer
     * const lecturer = await prisma.lecturer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LecturerFindFirstOrThrowArgs>(args?: SelectSubset<T, LecturerFindFirstOrThrowArgs<ExtArgs>>): Prisma__LecturerClient<$Result.GetResult<Prisma.$LecturerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Lecturers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LecturerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Lecturers
     * const lecturers = await prisma.lecturer.findMany()
     * 
     * // Get first 10 Lecturers
     * const lecturers = await prisma.lecturer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const lecturerWithIdOnly = await prisma.lecturer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LecturerFindManyArgs>(args?: SelectSubset<T, LecturerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LecturerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Lecturer.
     * @param {LecturerCreateArgs} args - Arguments to create a Lecturer.
     * @example
     * // Create one Lecturer
     * const Lecturer = await prisma.lecturer.create({
     *   data: {
     *     // ... data to create a Lecturer
     *   }
     * })
     * 
     */
    create<T extends LecturerCreateArgs>(args: SelectSubset<T, LecturerCreateArgs<ExtArgs>>): Prisma__LecturerClient<$Result.GetResult<Prisma.$LecturerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Lecturers.
     * @param {LecturerCreateManyArgs} args - Arguments to create many Lecturers.
     * @example
     * // Create many Lecturers
     * const lecturer = await prisma.lecturer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LecturerCreateManyArgs>(args?: SelectSubset<T, LecturerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Lecturers and returns the data saved in the database.
     * @param {LecturerCreateManyAndReturnArgs} args - Arguments to create many Lecturers.
     * @example
     * // Create many Lecturers
     * const lecturer = await prisma.lecturer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Lecturers and only return the `id`
     * const lecturerWithIdOnly = await prisma.lecturer.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LecturerCreateManyAndReturnArgs>(args?: SelectSubset<T, LecturerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LecturerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Lecturer.
     * @param {LecturerDeleteArgs} args - Arguments to delete one Lecturer.
     * @example
     * // Delete one Lecturer
     * const Lecturer = await prisma.lecturer.delete({
     *   where: {
     *     // ... filter to delete one Lecturer
     *   }
     * })
     * 
     */
    delete<T extends LecturerDeleteArgs>(args: SelectSubset<T, LecturerDeleteArgs<ExtArgs>>): Prisma__LecturerClient<$Result.GetResult<Prisma.$LecturerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Lecturer.
     * @param {LecturerUpdateArgs} args - Arguments to update one Lecturer.
     * @example
     * // Update one Lecturer
     * const lecturer = await prisma.lecturer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LecturerUpdateArgs>(args: SelectSubset<T, LecturerUpdateArgs<ExtArgs>>): Prisma__LecturerClient<$Result.GetResult<Prisma.$LecturerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Lecturers.
     * @param {LecturerDeleteManyArgs} args - Arguments to filter Lecturers to delete.
     * @example
     * // Delete a few Lecturers
     * const { count } = await prisma.lecturer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LecturerDeleteManyArgs>(args?: SelectSubset<T, LecturerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Lecturers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LecturerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Lecturers
     * const lecturer = await prisma.lecturer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LecturerUpdateManyArgs>(args: SelectSubset<T, LecturerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Lecturers and returns the data updated in the database.
     * @param {LecturerUpdateManyAndReturnArgs} args - Arguments to update many Lecturers.
     * @example
     * // Update many Lecturers
     * const lecturer = await prisma.lecturer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Lecturers and only return the `id`
     * const lecturerWithIdOnly = await prisma.lecturer.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LecturerUpdateManyAndReturnArgs>(args: SelectSubset<T, LecturerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LecturerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Lecturer.
     * @param {LecturerUpsertArgs} args - Arguments to update or create a Lecturer.
     * @example
     * // Update or create a Lecturer
     * const lecturer = await prisma.lecturer.upsert({
     *   create: {
     *     // ... data to create a Lecturer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Lecturer we want to update
     *   }
     * })
     */
    upsert<T extends LecturerUpsertArgs>(args: SelectSubset<T, LecturerUpsertArgs<ExtArgs>>): Prisma__LecturerClient<$Result.GetResult<Prisma.$LecturerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Lecturers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LecturerCountArgs} args - Arguments to filter Lecturers to count.
     * @example
     * // Count the number of Lecturers
     * const count = await prisma.lecturer.count({
     *   where: {
     *     // ... the filter for the Lecturers we want to count
     *   }
     * })
    **/
    count<T extends LecturerCountArgs>(
      args?: Subset<T, LecturerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LecturerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Lecturer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LecturerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LecturerAggregateArgs>(args: Subset<T, LecturerAggregateArgs>): Prisma.PrismaPromise<GetLecturerAggregateType<T>>

    /**
     * Group by Lecturer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LecturerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LecturerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LecturerGroupByArgs['orderBy'] }
        : { orderBy?: LecturerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LecturerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLecturerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Lecturer model
   */
  readonly fields: LecturerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Lecturer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LecturerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends Lecturer$userArgs<ExtArgs> = {}>(args?: Subset<T, Lecturer$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    studyProgram<T extends Lecturer$studyProgramArgs<ExtArgs> = {}>(args?: Subset<T, Lecturer$studyProgramArgs<ExtArgs>>): Prisma__StudyProgramClient<$Result.GetResult<Prisma.$StudyProgramPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    availabilities<T extends Lecturer$availabilitiesArgs<ExtArgs> = {}>(args?: Subset<T, Lecturer$availabilitiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LecturerAvailabilityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    bookings<T extends Lecturer$bookingsArgs<ExtArgs> = {}>(args?: Subset<T, Lecturer$bookingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConsultationBookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sessions<T extends Lecturer$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, Lecturer$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConsultationSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    seminars<T extends Lecturer$seminarsArgs<ExtArgs> = {}>(args?: Subset<T, Lecturer$seminarsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SeminarPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Lecturer model
   */
  interface LecturerFieldRefs {
    readonly id: FieldRef<"Lecturer", 'String'>
    readonly lecturerCode: FieldRef<"Lecturer", 'String'>
    readonly userId: FieldRef<"Lecturer", 'String'>
    readonly studyProgramId: FieldRef<"Lecturer", 'String'>
    readonly name: FieldRef<"Lecturer", 'String'>
    readonly email: FieldRef<"Lecturer", 'String'>
    readonly photo: FieldRef<"Lecturer", 'String'>
    readonly specialization: FieldRef<"Lecturer", 'String'>
    readonly university: FieldRef<"Lecturer", 'String'>
    readonly rating: FieldRef<"Lecturer", 'Float'>
    readonly experience: FieldRef<"Lecturer", 'String'>
    readonly expertise: FieldRef<"Lecturer", 'String[]'>
    readonly phone: FieldRef<"Lecturer", 'String'>
    readonly bio: FieldRef<"Lecturer", 'String'>
    readonly createdAt: FieldRef<"Lecturer", 'DateTime'>
    readonly updatedAt: FieldRef<"Lecturer", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Lecturer findUnique
   */
  export type LecturerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lecturer
     */
    select?: LecturerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lecturer
     */
    omit?: LecturerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LecturerInclude<ExtArgs> | null
    /**
     * Filter, which Lecturer to fetch.
     */
    where: LecturerWhereUniqueInput
  }

  /**
   * Lecturer findUniqueOrThrow
   */
  export type LecturerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lecturer
     */
    select?: LecturerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lecturer
     */
    omit?: LecturerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LecturerInclude<ExtArgs> | null
    /**
     * Filter, which Lecturer to fetch.
     */
    where: LecturerWhereUniqueInput
  }

  /**
   * Lecturer findFirst
   */
  export type LecturerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lecturer
     */
    select?: LecturerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lecturer
     */
    omit?: LecturerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LecturerInclude<ExtArgs> | null
    /**
     * Filter, which Lecturer to fetch.
     */
    where?: LecturerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lecturers to fetch.
     */
    orderBy?: LecturerOrderByWithRelationInput | LecturerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Lecturers.
     */
    cursor?: LecturerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lecturers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lecturers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Lecturers.
     */
    distinct?: LecturerScalarFieldEnum | LecturerScalarFieldEnum[]
  }

  /**
   * Lecturer findFirstOrThrow
   */
  export type LecturerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lecturer
     */
    select?: LecturerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lecturer
     */
    omit?: LecturerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LecturerInclude<ExtArgs> | null
    /**
     * Filter, which Lecturer to fetch.
     */
    where?: LecturerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lecturers to fetch.
     */
    orderBy?: LecturerOrderByWithRelationInput | LecturerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Lecturers.
     */
    cursor?: LecturerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lecturers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lecturers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Lecturers.
     */
    distinct?: LecturerScalarFieldEnum | LecturerScalarFieldEnum[]
  }

  /**
   * Lecturer findMany
   */
  export type LecturerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lecturer
     */
    select?: LecturerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lecturer
     */
    omit?: LecturerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LecturerInclude<ExtArgs> | null
    /**
     * Filter, which Lecturers to fetch.
     */
    where?: LecturerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lecturers to fetch.
     */
    orderBy?: LecturerOrderByWithRelationInput | LecturerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Lecturers.
     */
    cursor?: LecturerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lecturers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lecturers.
     */
    skip?: number
    distinct?: LecturerScalarFieldEnum | LecturerScalarFieldEnum[]
  }

  /**
   * Lecturer create
   */
  export type LecturerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lecturer
     */
    select?: LecturerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lecturer
     */
    omit?: LecturerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LecturerInclude<ExtArgs> | null
    /**
     * The data needed to create a Lecturer.
     */
    data: XOR<LecturerCreateInput, LecturerUncheckedCreateInput>
  }

  /**
   * Lecturer createMany
   */
  export type LecturerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Lecturers.
     */
    data: LecturerCreateManyInput | LecturerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Lecturer createManyAndReturn
   */
  export type LecturerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lecturer
     */
    select?: LecturerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Lecturer
     */
    omit?: LecturerOmit<ExtArgs> | null
    /**
     * The data used to create many Lecturers.
     */
    data: LecturerCreateManyInput | LecturerCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LecturerIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Lecturer update
   */
  export type LecturerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lecturer
     */
    select?: LecturerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lecturer
     */
    omit?: LecturerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LecturerInclude<ExtArgs> | null
    /**
     * The data needed to update a Lecturer.
     */
    data: XOR<LecturerUpdateInput, LecturerUncheckedUpdateInput>
    /**
     * Choose, which Lecturer to update.
     */
    where: LecturerWhereUniqueInput
  }

  /**
   * Lecturer updateMany
   */
  export type LecturerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Lecturers.
     */
    data: XOR<LecturerUpdateManyMutationInput, LecturerUncheckedUpdateManyInput>
    /**
     * Filter which Lecturers to update
     */
    where?: LecturerWhereInput
    /**
     * Limit how many Lecturers to update.
     */
    limit?: number
  }

  /**
   * Lecturer updateManyAndReturn
   */
  export type LecturerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lecturer
     */
    select?: LecturerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Lecturer
     */
    omit?: LecturerOmit<ExtArgs> | null
    /**
     * The data used to update Lecturers.
     */
    data: XOR<LecturerUpdateManyMutationInput, LecturerUncheckedUpdateManyInput>
    /**
     * Filter which Lecturers to update
     */
    where?: LecturerWhereInput
    /**
     * Limit how many Lecturers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LecturerIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Lecturer upsert
   */
  export type LecturerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lecturer
     */
    select?: LecturerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lecturer
     */
    omit?: LecturerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LecturerInclude<ExtArgs> | null
    /**
     * The filter to search for the Lecturer to update in case it exists.
     */
    where: LecturerWhereUniqueInput
    /**
     * In case the Lecturer found by the `where` argument doesn't exist, create a new Lecturer with this data.
     */
    create: XOR<LecturerCreateInput, LecturerUncheckedCreateInput>
    /**
     * In case the Lecturer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LecturerUpdateInput, LecturerUncheckedUpdateInput>
  }

  /**
   * Lecturer delete
   */
  export type LecturerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lecturer
     */
    select?: LecturerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lecturer
     */
    omit?: LecturerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LecturerInclude<ExtArgs> | null
    /**
     * Filter which Lecturer to delete.
     */
    where: LecturerWhereUniqueInput
  }

  /**
   * Lecturer deleteMany
   */
  export type LecturerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Lecturers to delete
     */
    where?: LecturerWhereInput
    /**
     * Limit how many Lecturers to delete.
     */
    limit?: number
  }

  /**
   * Lecturer.user
   */
  export type Lecturer$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Lecturer.studyProgram
   */
  export type Lecturer$studyProgramArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudyProgram
     */
    select?: StudyProgramSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudyProgram
     */
    omit?: StudyProgramOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudyProgramInclude<ExtArgs> | null
    where?: StudyProgramWhereInput
  }

  /**
   * Lecturer.availabilities
   */
  export type Lecturer$availabilitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LecturerAvailability
     */
    select?: LecturerAvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LecturerAvailability
     */
    omit?: LecturerAvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LecturerAvailabilityInclude<ExtArgs> | null
    where?: LecturerAvailabilityWhereInput
    orderBy?: LecturerAvailabilityOrderByWithRelationInput | LecturerAvailabilityOrderByWithRelationInput[]
    cursor?: LecturerAvailabilityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LecturerAvailabilityScalarFieldEnum | LecturerAvailabilityScalarFieldEnum[]
  }

  /**
   * Lecturer.bookings
   */
  export type Lecturer$bookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConsultationBooking
     */
    select?: ConsultationBookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConsultationBooking
     */
    omit?: ConsultationBookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultationBookingInclude<ExtArgs> | null
    where?: ConsultationBookingWhereInput
    orderBy?: ConsultationBookingOrderByWithRelationInput | ConsultationBookingOrderByWithRelationInput[]
    cursor?: ConsultationBookingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ConsultationBookingScalarFieldEnum | ConsultationBookingScalarFieldEnum[]
  }

  /**
   * Lecturer.sessions
   */
  export type Lecturer$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConsultationSession
     */
    select?: ConsultationSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConsultationSession
     */
    omit?: ConsultationSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultationSessionInclude<ExtArgs> | null
    where?: ConsultationSessionWhereInput
    orderBy?: ConsultationSessionOrderByWithRelationInput | ConsultationSessionOrderByWithRelationInput[]
    cursor?: ConsultationSessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ConsultationSessionScalarFieldEnum | ConsultationSessionScalarFieldEnum[]
  }

  /**
   * Lecturer.seminars
   */
  export type Lecturer$seminarsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seminar
     */
    select?: SeminarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seminar
     */
    omit?: SeminarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeminarInclude<ExtArgs> | null
    where?: SeminarWhereInput
    orderBy?: SeminarOrderByWithRelationInput | SeminarOrderByWithRelationInput[]
    cursor?: SeminarWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SeminarScalarFieldEnum | SeminarScalarFieldEnum[]
  }

  /**
   * Lecturer without action
   */
  export type LecturerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lecturer
     */
    select?: LecturerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lecturer
     */
    omit?: LecturerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LecturerInclude<ExtArgs> | null
  }


  /**
   * Model Student
   */

  export type AggregateStudent = {
    _count: StudentCountAggregateOutputType | null
    _avg: StudentAvgAggregateOutputType | null
    _sum: StudentSumAggregateOutputType | null
    _min: StudentMinAggregateOutputType | null
    _max: StudentMaxAggregateOutputType | null
  }

  export type StudentAvgAggregateOutputType = {
    semester: number | null
  }

  export type StudentSumAggregateOutputType = {
    semester: number | null
  }

  export type StudentMinAggregateOutputType = {
    id: string | null
    nim: string | null
    name: string | null
    email: string | null
    studyProgramId: string | null
    semester: number | null
    phone: string | null
  }

  export type StudentMaxAggregateOutputType = {
    id: string | null
    nim: string | null
    name: string | null
    email: string | null
    studyProgramId: string | null
    semester: number | null
    phone: string | null
  }

  export type StudentCountAggregateOutputType = {
    id: number
    nim: number
    name: number
    email: number
    studyProgramId: number
    semester: number
    phone: number
    _all: number
  }


  export type StudentAvgAggregateInputType = {
    semester?: true
  }

  export type StudentSumAggregateInputType = {
    semester?: true
  }

  export type StudentMinAggregateInputType = {
    id?: true
    nim?: true
    name?: true
    email?: true
    studyProgramId?: true
    semester?: true
    phone?: true
  }

  export type StudentMaxAggregateInputType = {
    id?: true
    nim?: true
    name?: true
    email?: true
    studyProgramId?: true
    semester?: true
    phone?: true
  }

  export type StudentCountAggregateInputType = {
    id?: true
    nim?: true
    name?: true
    email?: true
    studyProgramId?: true
    semester?: true
    phone?: true
    _all?: true
  }

  export type StudentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Student to aggregate.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Students
    **/
    _count?: true | StudentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StudentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StudentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StudentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StudentMaxAggregateInputType
  }

  export type GetStudentAggregateType<T extends StudentAggregateArgs> = {
        [P in keyof T & keyof AggregateStudent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStudent[P]>
      : GetScalarType<T[P], AggregateStudent[P]>
  }




  export type StudentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentWhereInput
    orderBy?: StudentOrderByWithAggregationInput | StudentOrderByWithAggregationInput[]
    by: StudentScalarFieldEnum[] | StudentScalarFieldEnum
    having?: StudentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StudentCountAggregateInputType | true
    _avg?: StudentAvgAggregateInputType
    _sum?: StudentSumAggregateInputType
    _min?: StudentMinAggregateInputType
    _max?: StudentMaxAggregateInputType
  }

  export type StudentGroupByOutputType = {
    id: string
    nim: string
    name: string
    email: string
    studyProgramId: string | null
    semester: number
    phone: string
    _count: StudentCountAggregateOutputType | null
    _avg: StudentAvgAggregateOutputType | null
    _sum: StudentSumAggregateOutputType | null
    _min: StudentMinAggregateOutputType | null
    _max: StudentMaxAggregateOutputType | null
  }

  type GetStudentGroupByPayload<T extends StudentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StudentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StudentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StudentGroupByOutputType[P]>
            : GetScalarType<T[P], StudentGroupByOutputType[P]>
        }
      >
    >


  export type StudentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nim?: boolean
    name?: boolean
    email?: boolean
    studyProgramId?: boolean
    semester?: boolean
    phone?: boolean
    studyProgram?: boolean | Student$studyProgramArgs<ExtArgs>
  }, ExtArgs["result"]["student"]>

  export type StudentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nim?: boolean
    name?: boolean
    email?: boolean
    studyProgramId?: boolean
    semester?: boolean
    phone?: boolean
    studyProgram?: boolean | Student$studyProgramArgs<ExtArgs>
  }, ExtArgs["result"]["student"]>

  export type StudentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nim?: boolean
    name?: boolean
    email?: boolean
    studyProgramId?: boolean
    semester?: boolean
    phone?: boolean
    studyProgram?: boolean | Student$studyProgramArgs<ExtArgs>
  }, ExtArgs["result"]["student"]>

  export type StudentSelectScalar = {
    id?: boolean
    nim?: boolean
    name?: boolean
    email?: boolean
    studyProgramId?: boolean
    semester?: boolean
    phone?: boolean
  }

  export type StudentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nim" | "name" | "email" | "studyProgramId" | "semester" | "phone", ExtArgs["result"]["student"]>
  export type StudentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    studyProgram?: boolean | Student$studyProgramArgs<ExtArgs>
  }
  export type StudentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    studyProgram?: boolean | Student$studyProgramArgs<ExtArgs>
  }
  export type StudentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    studyProgram?: boolean | Student$studyProgramArgs<ExtArgs>
  }

  export type $StudentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Student"
    objects: {
      studyProgram: Prisma.$StudyProgramPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nim: string
      name: string
      email: string
      studyProgramId: string | null
      semester: number
      phone: string
    }, ExtArgs["result"]["student"]>
    composites: {}
  }

  type StudentGetPayload<S extends boolean | null | undefined | StudentDefaultArgs> = $Result.GetResult<Prisma.$StudentPayload, S>

  type StudentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StudentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StudentCountAggregateInputType | true
    }

  export interface StudentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Student'], meta: { name: 'Student' } }
    /**
     * Find zero or one Student that matches the filter.
     * @param {StudentFindUniqueArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StudentFindUniqueArgs>(args: SelectSubset<T, StudentFindUniqueArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Student that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StudentFindUniqueOrThrowArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StudentFindUniqueOrThrowArgs>(args: SelectSubset<T, StudentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Student that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindFirstArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StudentFindFirstArgs>(args?: SelectSubset<T, StudentFindFirstArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Student that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindFirstOrThrowArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StudentFindFirstOrThrowArgs>(args?: SelectSubset<T, StudentFindFirstOrThrowArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Students that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Students
     * const students = await prisma.student.findMany()
     * 
     * // Get first 10 Students
     * const students = await prisma.student.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const studentWithIdOnly = await prisma.student.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StudentFindManyArgs>(args?: SelectSubset<T, StudentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Student.
     * @param {StudentCreateArgs} args - Arguments to create a Student.
     * @example
     * // Create one Student
     * const Student = await prisma.student.create({
     *   data: {
     *     // ... data to create a Student
     *   }
     * })
     * 
     */
    create<T extends StudentCreateArgs>(args: SelectSubset<T, StudentCreateArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Students.
     * @param {StudentCreateManyArgs} args - Arguments to create many Students.
     * @example
     * // Create many Students
     * const student = await prisma.student.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StudentCreateManyArgs>(args?: SelectSubset<T, StudentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Students and returns the data saved in the database.
     * @param {StudentCreateManyAndReturnArgs} args - Arguments to create many Students.
     * @example
     * // Create many Students
     * const student = await prisma.student.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Students and only return the `id`
     * const studentWithIdOnly = await prisma.student.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StudentCreateManyAndReturnArgs>(args?: SelectSubset<T, StudentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Student.
     * @param {StudentDeleteArgs} args - Arguments to delete one Student.
     * @example
     * // Delete one Student
     * const Student = await prisma.student.delete({
     *   where: {
     *     // ... filter to delete one Student
     *   }
     * })
     * 
     */
    delete<T extends StudentDeleteArgs>(args: SelectSubset<T, StudentDeleteArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Student.
     * @param {StudentUpdateArgs} args - Arguments to update one Student.
     * @example
     * // Update one Student
     * const student = await prisma.student.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StudentUpdateArgs>(args: SelectSubset<T, StudentUpdateArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Students.
     * @param {StudentDeleteManyArgs} args - Arguments to filter Students to delete.
     * @example
     * // Delete a few Students
     * const { count } = await prisma.student.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StudentDeleteManyArgs>(args?: SelectSubset<T, StudentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Students
     * const student = await prisma.student.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StudentUpdateManyArgs>(args: SelectSubset<T, StudentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Students and returns the data updated in the database.
     * @param {StudentUpdateManyAndReturnArgs} args - Arguments to update many Students.
     * @example
     * // Update many Students
     * const student = await prisma.student.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Students and only return the `id`
     * const studentWithIdOnly = await prisma.student.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends StudentUpdateManyAndReturnArgs>(args: SelectSubset<T, StudentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Student.
     * @param {StudentUpsertArgs} args - Arguments to update or create a Student.
     * @example
     * // Update or create a Student
     * const student = await prisma.student.upsert({
     *   create: {
     *     // ... data to create a Student
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Student we want to update
     *   }
     * })
     */
    upsert<T extends StudentUpsertArgs>(args: SelectSubset<T, StudentUpsertArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentCountArgs} args - Arguments to filter Students to count.
     * @example
     * // Count the number of Students
     * const count = await prisma.student.count({
     *   where: {
     *     // ... the filter for the Students we want to count
     *   }
     * })
    **/
    count<T extends StudentCountArgs>(
      args?: Subset<T, StudentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StudentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Student.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StudentAggregateArgs>(args: Subset<T, StudentAggregateArgs>): Prisma.PrismaPromise<GetStudentAggregateType<T>>

    /**
     * Group by Student.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StudentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StudentGroupByArgs['orderBy'] }
        : { orderBy?: StudentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StudentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStudentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Student model
   */
  readonly fields: StudentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Student.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StudentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    studyProgram<T extends Student$studyProgramArgs<ExtArgs> = {}>(args?: Subset<T, Student$studyProgramArgs<ExtArgs>>): Prisma__StudyProgramClient<$Result.GetResult<Prisma.$StudyProgramPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Student model
   */
  interface StudentFieldRefs {
    readonly id: FieldRef<"Student", 'String'>
    readonly nim: FieldRef<"Student", 'String'>
    readonly name: FieldRef<"Student", 'String'>
    readonly email: FieldRef<"Student", 'String'>
    readonly studyProgramId: FieldRef<"Student", 'String'>
    readonly semester: FieldRef<"Student", 'Int'>
    readonly phone: FieldRef<"Student", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Student findUnique
   */
  export type StudentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student findUniqueOrThrow
   */
  export type StudentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student findFirst
   */
  export type StudentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Students.
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Students.
     */
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Student findFirstOrThrow
   */
  export type StudentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Students.
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Students.
     */
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Student findMany
   */
  export type StudentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Students to fetch.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Students.
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Student create
   */
  export type StudentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * The data needed to create a Student.
     */
    data: XOR<StudentCreateInput, StudentUncheckedCreateInput>
  }

  /**
   * Student createMany
   */
  export type StudentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Students.
     */
    data: StudentCreateManyInput | StudentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Student createManyAndReturn
   */
  export type StudentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * The data used to create many Students.
     */
    data: StudentCreateManyInput | StudentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Student update
   */
  export type StudentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * The data needed to update a Student.
     */
    data: XOR<StudentUpdateInput, StudentUncheckedUpdateInput>
    /**
     * Choose, which Student to update.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student updateMany
   */
  export type StudentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Students.
     */
    data: XOR<StudentUpdateManyMutationInput, StudentUncheckedUpdateManyInput>
    /**
     * Filter which Students to update
     */
    where?: StudentWhereInput
    /**
     * Limit how many Students to update.
     */
    limit?: number
  }

  /**
   * Student updateManyAndReturn
   */
  export type StudentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * The data used to update Students.
     */
    data: XOR<StudentUpdateManyMutationInput, StudentUncheckedUpdateManyInput>
    /**
     * Filter which Students to update
     */
    where?: StudentWhereInput
    /**
     * Limit how many Students to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Student upsert
   */
  export type StudentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * The filter to search for the Student to update in case it exists.
     */
    where: StudentWhereUniqueInput
    /**
     * In case the Student found by the `where` argument doesn't exist, create a new Student with this data.
     */
    create: XOR<StudentCreateInput, StudentUncheckedCreateInput>
    /**
     * In case the Student was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StudentUpdateInput, StudentUncheckedUpdateInput>
  }

  /**
   * Student delete
   */
  export type StudentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter which Student to delete.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student deleteMany
   */
  export type StudentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Students to delete
     */
    where?: StudentWhereInput
    /**
     * Limit how many Students to delete.
     */
    limit?: number
  }

  /**
   * Student.studyProgram
   */
  export type Student$studyProgramArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudyProgram
     */
    select?: StudyProgramSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudyProgram
     */
    omit?: StudyProgramOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudyProgramInclude<ExtArgs> | null
    where?: StudyProgramWhereInput
  }

  /**
   * Student without action
   */
  export type StudentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
  }


  /**
   * Model Semester
   */

  export type AggregateSemester = {
    _count: SemesterCountAggregateOutputType | null
    _min: SemesterMinAggregateOutputType | null
    _max: SemesterMaxAggregateOutputType | null
  }

  export type SemesterMinAggregateOutputType = {
    id: string | null
    name: string | null
    startDate: Date | null
    endDate: Date | null
    isActive: boolean | null
    createdAt: Date | null
  }

  export type SemesterMaxAggregateOutputType = {
    id: string | null
    name: string | null
    startDate: Date | null
    endDate: Date | null
    isActive: boolean | null
    createdAt: Date | null
  }

  export type SemesterCountAggregateOutputType = {
    id: number
    name: number
    startDate: number
    endDate: number
    isActive: number
    createdAt: number
    _all: number
  }


  export type SemesterMinAggregateInputType = {
    id?: true
    name?: true
    startDate?: true
    endDate?: true
    isActive?: true
    createdAt?: true
  }

  export type SemesterMaxAggregateInputType = {
    id?: true
    name?: true
    startDate?: true
    endDate?: true
    isActive?: true
    createdAt?: true
  }

  export type SemesterCountAggregateInputType = {
    id?: true
    name?: true
    startDate?: true
    endDate?: true
    isActive?: true
    createdAt?: true
    _all?: true
  }

  export type SemesterAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Semester to aggregate.
     */
    where?: SemesterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Semesters to fetch.
     */
    orderBy?: SemesterOrderByWithRelationInput | SemesterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SemesterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Semesters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Semesters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Semesters
    **/
    _count?: true | SemesterCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SemesterMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SemesterMaxAggregateInputType
  }

  export type GetSemesterAggregateType<T extends SemesterAggregateArgs> = {
        [P in keyof T & keyof AggregateSemester]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSemester[P]>
      : GetScalarType<T[P], AggregateSemester[P]>
  }




  export type SemesterGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SemesterWhereInput
    orderBy?: SemesterOrderByWithAggregationInput | SemesterOrderByWithAggregationInput[]
    by: SemesterScalarFieldEnum[] | SemesterScalarFieldEnum
    having?: SemesterScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SemesterCountAggregateInputType | true
    _min?: SemesterMinAggregateInputType
    _max?: SemesterMaxAggregateInputType
  }

  export type SemesterGroupByOutputType = {
    id: string
    name: string
    startDate: Date
    endDate: Date
    isActive: boolean
    createdAt: Date
    _count: SemesterCountAggregateOutputType | null
    _min: SemesterMinAggregateOutputType | null
    _max: SemesterMaxAggregateOutputType | null
  }

  type GetSemesterGroupByPayload<T extends SemesterGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SemesterGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SemesterGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SemesterGroupByOutputType[P]>
            : GetScalarType<T[P], SemesterGroupByOutputType[P]>
        }
      >
    >


  export type SemesterSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    startDate?: boolean
    endDate?: boolean
    isActive?: boolean
    createdAt?: boolean
    availabilities?: boolean | Semester$availabilitiesArgs<ExtArgs>
    bookings?: boolean | Semester$bookingsArgs<ExtArgs>
    _count?: boolean | SemesterCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["semester"]>

  export type SemesterSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    startDate?: boolean
    endDate?: boolean
    isActive?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["semester"]>

  export type SemesterSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    startDate?: boolean
    endDate?: boolean
    isActive?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["semester"]>

  export type SemesterSelectScalar = {
    id?: boolean
    name?: boolean
    startDate?: boolean
    endDate?: boolean
    isActive?: boolean
    createdAt?: boolean
  }

  export type SemesterOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "startDate" | "endDate" | "isActive" | "createdAt", ExtArgs["result"]["semester"]>
  export type SemesterInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    availabilities?: boolean | Semester$availabilitiesArgs<ExtArgs>
    bookings?: boolean | Semester$bookingsArgs<ExtArgs>
    _count?: boolean | SemesterCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SemesterIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type SemesterIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SemesterPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Semester"
    objects: {
      availabilities: Prisma.$LecturerAvailabilityPayload<ExtArgs>[]
      bookings: Prisma.$ConsultationBookingPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      startDate: Date
      endDate: Date
      isActive: boolean
      createdAt: Date
    }, ExtArgs["result"]["semester"]>
    composites: {}
  }

  type SemesterGetPayload<S extends boolean | null | undefined | SemesterDefaultArgs> = $Result.GetResult<Prisma.$SemesterPayload, S>

  type SemesterCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SemesterFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SemesterCountAggregateInputType | true
    }

  export interface SemesterDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Semester'], meta: { name: 'Semester' } }
    /**
     * Find zero or one Semester that matches the filter.
     * @param {SemesterFindUniqueArgs} args - Arguments to find a Semester
     * @example
     * // Get one Semester
     * const semester = await prisma.semester.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SemesterFindUniqueArgs>(args: SelectSubset<T, SemesterFindUniqueArgs<ExtArgs>>): Prisma__SemesterClient<$Result.GetResult<Prisma.$SemesterPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Semester that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SemesterFindUniqueOrThrowArgs} args - Arguments to find a Semester
     * @example
     * // Get one Semester
     * const semester = await prisma.semester.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SemesterFindUniqueOrThrowArgs>(args: SelectSubset<T, SemesterFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SemesterClient<$Result.GetResult<Prisma.$SemesterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Semester that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SemesterFindFirstArgs} args - Arguments to find a Semester
     * @example
     * // Get one Semester
     * const semester = await prisma.semester.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SemesterFindFirstArgs>(args?: SelectSubset<T, SemesterFindFirstArgs<ExtArgs>>): Prisma__SemesterClient<$Result.GetResult<Prisma.$SemesterPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Semester that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SemesterFindFirstOrThrowArgs} args - Arguments to find a Semester
     * @example
     * // Get one Semester
     * const semester = await prisma.semester.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SemesterFindFirstOrThrowArgs>(args?: SelectSubset<T, SemesterFindFirstOrThrowArgs<ExtArgs>>): Prisma__SemesterClient<$Result.GetResult<Prisma.$SemesterPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Semesters that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SemesterFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Semesters
     * const semesters = await prisma.semester.findMany()
     * 
     * // Get first 10 Semesters
     * const semesters = await prisma.semester.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const semesterWithIdOnly = await prisma.semester.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SemesterFindManyArgs>(args?: SelectSubset<T, SemesterFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SemesterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Semester.
     * @param {SemesterCreateArgs} args - Arguments to create a Semester.
     * @example
     * // Create one Semester
     * const Semester = await prisma.semester.create({
     *   data: {
     *     // ... data to create a Semester
     *   }
     * })
     * 
     */
    create<T extends SemesterCreateArgs>(args: SelectSubset<T, SemesterCreateArgs<ExtArgs>>): Prisma__SemesterClient<$Result.GetResult<Prisma.$SemesterPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Semesters.
     * @param {SemesterCreateManyArgs} args - Arguments to create many Semesters.
     * @example
     * // Create many Semesters
     * const semester = await prisma.semester.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SemesterCreateManyArgs>(args?: SelectSubset<T, SemesterCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Semesters and returns the data saved in the database.
     * @param {SemesterCreateManyAndReturnArgs} args - Arguments to create many Semesters.
     * @example
     * // Create many Semesters
     * const semester = await prisma.semester.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Semesters and only return the `id`
     * const semesterWithIdOnly = await prisma.semester.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SemesterCreateManyAndReturnArgs>(args?: SelectSubset<T, SemesterCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SemesterPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Semester.
     * @param {SemesterDeleteArgs} args - Arguments to delete one Semester.
     * @example
     * // Delete one Semester
     * const Semester = await prisma.semester.delete({
     *   where: {
     *     // ... filter to delete one Semester
     *   }
     * })
     * 
     */
    delete<T extends SemesterDeleteArgs>(args: SelectSubset<T, SemesterDeleteArgs<ExtArgs>>): Prisma__SemesterClient<$Result.GetResult<Prisma.$SemesterPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Semester.
     * @param {SemesterUpdateArgs} args - Arguments to update one Semester.
     * @example
     * // Update one Semester
     * const semester = await prisma.semester.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SemesterUpdateArgs>(args: SelectSubset<T, SemesterUpdateArgs<ExtArgs>>): Prisma__SemesterClient<$Result.GetResult<Prisma.$SemesterPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Semesters.
     * @param {SemesterDeleteManyArgs} args - Arguments to filter Semesters to delete.
     * @example
     * // Delete a few Semesters
     * const { count } = await prisma.semester.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SemesterDeleteManyArgs>(args?: SelectSubset<T, SemesterDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Semesters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SemesterUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Semesters
     * const semester = await prisma.semester.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SemesterUpdateManyArgs>(args: SelectSubset<T, SemesterUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Semesters and returns the data updated in the database.
     * @param {SemesterUpdateManyAndReturnArgs} args - Arguments to update many Semesters.
     * @example
     * // Update many Semesters
     * const semester = await prisma.semester.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Semesters and only return the `id`
     * const semesterWithIdOnly = await prisma.semester.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SemesterUpdateManyAndReturnArgs>(args: SelectSubset<T, SemesterUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SemesterPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Semester.
     * @param {SemesterUpsertArgs} args - Arguments to update or create a Semester.
     * @example
     * // Update or create a Semester
     * const semester = await prisma.semester.upsert({
     *   create: {
     *     // ... data to create a Semester
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Semester we want to update
     *   }
     * })
     */
    upsert<T extends SemesterUpsertArgs>(args: SelectSubset<T, SemesterUpsertArgs<ExtArgs>>): Prisma__SemesterClient<$Result.GetResult<Prisma.$SemesterPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Semesters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SemesterCountArgs} args - Arguments to filter Semesters to count.
     * @example
     * // Count the number of Semesters
     * const count = await prisma.semester.count({
     *   where: {
     *     // ... the filter for the Semesters we want to count
     *   }
     * })
    **/
    count<T extends SemesterCountArgs>(
      args?: Subset<T, SemesterCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SemesterCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Semester.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SemesterAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SemesterAggregateArgs>(args: Subset<T, SemesterAggregateArgs>): Prisma.PrismaPromise<GetSemesterAggregateType<T>>

    /**
     * Group by Semester.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SemesterGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SemesterGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SemesterGroupByArgs['orderBy'] }
        : { orderBy?: SemesterGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SemesterGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSemesterGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Semester model
   */
  readonly fields: SemesterFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Semester.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SemesterClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    availabilities<T extends Semester$availabilitiesArgs<ExtArgs> = {}>(args?: Subset<T, Semester$availabilitiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LecturerAvailabilityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    bookings<T extends Semester$bookingsArgs<ExtArgs> = {}>(args?: Subset<T, Semester$bookingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConsultationBookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Semester model
   */
  interface SemesterFieldRefs {
    readonly id: FieldRef<"Semester", 'String'>
    readonly name: FieldRef<"Semester", 'String'>
    readonly startDate: FieldRef<"Semester", 'DateTime'>
    readonly endDate: FieldRef<"Semester", 'DateTime'>
    readonly isActive: FieldRef<"Semester", 'Boolean'>
    readonly createdAt: FieldRef<"Semester", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Semester findUnique
   */
  export type SemesterFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Semester
     */
    select?: SemesterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Semester
     */
    omit?: SemesterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SemesterInclude<ExtArgs> | null
    /**
     * Filter, which Semester to fetch.
     */
    where: SemesterWhereUniqueInput
  }

  /**
   * Semester findUniqueOrThrow
   */
  export type SemesterFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Semester
     */
    select?: SemesterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Semester
     */
    omit?: SemesterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SemesterInclude<ExtArgs> | null
    /**
     * Filter, which Semester to fetch.
     */
    where: SemesterWhereUniqueInput
  }

  /**
   * Semester findFirst
   */
  export type SemesterFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Semester
     */
    select?: SemesterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Semester
     */
    omit?: SemesterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SemesterInclude<ExtArgs> | null
    /**
     * Filter, which Semester to fetch.
     */
    where?: SemesterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Semesters to fetch.
     */
    orderBy?: SemesterOrderByWithRelationInput | SemesterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Semesters.
     */
    cursor?: SemesterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Semesters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Semesters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Semesters.
     */
    distinct?: SemesterScalarFieldEnum | SemesterScalarFieldEnum[]
  }

  /**
   * Semester findFirstOrThrow
   */
  export type SemesterFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Semester
     */
    select?: SemesterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Semester
     */
    omit?: SemesterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SemesterInclude<ExtArgs> | null
    /**
     * Filter, which Semester to fetch.
     */
    where?: SemesterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Semesters to fetch.
     */
    orderBy?: SemesterOrderByWithRelationInput | SemesterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Semesters.
     */
    cursor?: SemesterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Semesters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Semesters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Semesters.
     */
    distinct?: SemesterScalarFieldEnum | SemesterScalarFieldEnum[]
  }

  /**
   * Semester findMany
   */
  export type SemesterFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Semester
     */
    select?: SemesterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Semester
     */
    omit?: SemesterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SemesterInclude<ExtArgs> | null
    /**
     * Filter, which Semesters to fetch.
     */
    where?: SemesterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Semesters to fetch.
     */
    orderBy?: SemesterOrderByWithRelationInput | SemesterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Semesters.
     */
    cursor?: SemesterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Semesters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Semesters.
     */
    skip?: number
    distinct?: SemesterScalarFieldEnum | SemesterScalarFieldEnum[]
  }

  /**
   * Semester create
   */
  export type SemesterCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Semester
     */
    select?: SemesterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Semester
     */
    omit?: SemesterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SemesterInclude<ExtArgs> | null
    /**
     * The data needed to create a Semester.
     */
    data: XOR<SemesterCreateInput, SemesterUncheckedCreateInput>
  }

  /**
   * Semester createMany
   */
  export type SemesterCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Semesters.
     */
    data: SemesterCreateManyInput | SemesterCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Semester createManyAndReturn
   */
  export type SemesterCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Semester
     */
    select?: SemesterSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Semester
     */
    omit?: SemesterOmit<ExtArgs> | null
    /**
     * The data used to create many Semesters.
     */
    data: SemesterCreateManyInput | SemesterCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Semester update
   */
  export type SemesterUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Semester
     */
    select?: SemesterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Semester
     */
    omit?: SemesterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SemesterInclude<ExtArgs> | null
    /**
     * The data needed to update a Semester.
     */
    data: XOR<SemesterUpdateInput, SemesterUncheckedUpdateInput>
    /**
     * Choose, which Semester to update.
     */
    where: SemesterWhereUniqueInput
  }

  /**
   * Semester updateMany
   */
  export type SemesterUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Semesters.
     */
    data: XOR<SemesterUpdateManyMutationInput, SemesterUncheckedUpdateManyInput>
    /**
     * Filter which Semesters to update
     */
    where?: SemesterWhereInput
    /**
     * Limit how many Semesters to update.
     */
    limit?: number
  }

  /**
   * Semester updateManyAndReturn
   */
  export type SemesterUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Semester
     */
    select?: SemesterSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Semester
     */
    omit?: SemesterOmit<ExtArgs> | null
    /**
     * The data used to update Semesters.
     */
    data: XOR<SemesterUpdateManyMutationInput, SemesterUncheckedUpdateManyInput>
    /**
     * Filter which Semesters to update
     */
    where?: SemesterWhereInput
    /**
     * Limit how many Semesters to update.
     */
    limit?: number
  }

  /**
   * Semester upsert
   */
  export type SemesterUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Semester
     */
    select?: SemesterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Semester
     */
    omit?: SemesterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SemesterInclude<ExtArgs> | null
    /**
     * The filter to search for the Semester to update in case it exists.
     */
    where: SemesterWhereUniqueInput
    /**
     * In case the Semester found by the `where` argument doesn't exist, create a new Semester with this data.
     */
    create: XOR<SemesterCreateInput, SemesterUncheckedCreateInput>
    /**
     * In case the Semester was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SemesterUpdateInput, SemesterUncheckedUpdateInput>
  }

  /**
   * Semester delete
   */
  export type SemesterDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Semester
     */
    select?: SemesterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Semester
     */
    omit?: SemesterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SemesterInclude<ExtArgs> | null
    /**
     * Filter which Semester to delete.
     */
    where: SemesterWhereUniqueInput
  }

  /**
   * Semester deleteMany
   */
  export type SemesterDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Semesters to delete
     */
    where?: SemesterWhereInput
    /**
     * Limit how many Semesters to delete.
     */
    limit?: number
  }

  /**
   * Semester.availabilities
   */
  export type Semester$availabilitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LecturerAvailability
     */
    select?: LecturerAvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LecturerAvailability
     */
    omit?: LecturerAvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LecturerAvailabilityInclude<ExtArgs> | null
    where?: LecturerAvailabilityWhereInput
    orderBy?: LecturerAvailabilityOrderByWithRelationInput | LecturerAvailabilityOrderByWithRelationInput[]
    cursor?: LecturerAvailabilityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LecturerAvailabilityScalarFieldEnum | LecturerAvailabilityScalarFieldEnum[]
  }

  /**
   * Semester.bookings
   */
  export type Semester$bookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConsultationBooking
     */
    select?: ConsultationBookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConsultationBooking
     */
    omit?: ConsultationBookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultationBookingInclude<ExtArgs> | null
    where?: ConsultationBookingWhereInput
    orderBy?: ConsultationBookingOrderByWithRelationInput | ConsultationBookingOrderByWithRelationInput[]
    cursor?: ConsultationBookingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ConsultationBookingScalarFieldEnum | ConsultationBookingScalarFieldEnum[]
  }

  /**
   * Semester without action
   */
  export type SemesterDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Semester
     */
    select?: SemesterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Semester
     */
    omit?: SemesterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SemesterInclude<ExtArgs> | null
  }


  /**
   * Model LecturerAvailability
   */

  export type AggregateLecturerAvailability = {
    _count: LecturerAvailabilityCountAggregateOutputType | null
    _min: LecturerAvailabilityMinAggregateOutputType | null
    _max: LecturerAvailabilityMaxAggregateOutputType | null
  }

  export type LecturerAvailabilityMinAggregateOutputType = {
    id: string | null
    lecturerId: string | null
    semesterId: string | null
    dayOfWeek: string | null
    isActive: boolean | null
    createdAt: Date | null
  }

  export type LecturerAvailabilityMaxAggregateOutputType = {
    id: string | null
    lecturerId: string | null
    semesterId: string | null
    dayOfWeek: string | null
    isActive: boolean | null
    createdAt: Date | null
  }

  export type LecturerAvailabilityCountAggregateOutputType = {
    id: number
    lecturerId: number
    semesterId: number
    dayOfWeek: number
    timeSlots: number
    isActive: number
    createdAt: number
    _all: number
  }


  export type LecturerAvailabilityMinAggregateInputType = {
    id?: true
    lecturerId?: true
    semesterId?: true
    dayOfWeek?: true
    isActive?: true
    createdAt?: true
  }

  export type LecturerAvailabilityMaxAggregateInputType = {
    id?: true
    lecturerId?: true
    semesterId?: true
    dayOfWeek?: true
    isActive?: true
    createdAt?: true
  }

  export type LecturerAvailabilityCountAggregateInputType = {
    id?: true
    lecturerId?: true
    semesterId?: true
    dayOfWeek?: true
    timeSlots?: true
    isActive?: true
    createdAt?: true
    _all?: true
  }

  export type LecturerAvailabilityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LecturerAvailability to aggregate.
     */
    where?: LecturerAvailabilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LecturerAvailabilities to fetch.
     */
    orderBy?: LecturerAvailabilityOrderByWithRelationInput | LecturerAvailabilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LecturerAvailabilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LecturerAvailabilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LecturerAvailabilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LecturerAvailabilities
    **/
    _count?: true | LecturerAvailabilityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LecturerAvailabilityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LecturerAvailabilityMaxAggregateInputType
  }

  export type GetLecturerAvailabilityAggregateType<T extends LecturerAvailabilityAggregateArgs> = {
        [P in keyof T & keyof AggregateLecturerAvailability]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLecturerAvailability[P]>
      : GetScalarType<T[P], AggregateLecturerAvailability[P]>
  }




  export type LecturerAvailabilityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LecturerAvailabilityWhereInput
    orderBy?: LecturerAvailabilityOrderByWithAggregationInput | LecturerAvailabilityOrderByWithAggregationInput[]
    by: LecturerAvailabilityScalarFieldEnum[] | LecturerAvailabilityScalarFieldEnum
    having?: LecturerAvailabilityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LecturerAvailabilityCountAggregateInputType | true
    _min?: LecturerAvailabilityMinAggregateInputType
    _max?: LecturerAvailabilityMaxAggregateInputType
  }

  export type LecturerAvailabilityGroupByOutputType = {
    id: string
    lecturerId: string
    semesterId: string
    dayOfWeek: string
    timeSlots: JsonValue
    isActive: boolean
    createdAt: Date
    _count: LecturerAvailabilityCountAggregateOutputType | null
    _min: LecturerAvailabilityMinAggregateOutputType | null
    _max: LecturerAvailabilityMaxAggregateOutputType | null
  }

  type GetLecturerAvailabilityGroupByPayload<T extends LecturerAvailabilityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LecturerAvailabilityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LecturerAvailabilityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LecturerAvailabilityGroupByOutputType[P]>
            : GetScalarType<T[P], LecturerAvailabilityGroupByOutputType[P]>
        }
      >
    >


  export type LecturerAvailabilitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    lecturerId?: boolean
    semesterId?: boolean
    dayOfWeek?: boolean
    timeSlots?: boolean
    isActive?: boolean
    createdAt?: boolean
    lecturer?: boolean | LecturerDefaultArgs<ExtArgs>
    semester?: boolean | SemesterDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lecturerAvailability"]>

  export type LecturerAvailabilitySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    lecturerId?: boolean
    semesterId?: boolean
    dayOfWeek?: boolean
    timeSlots?: boolean
    isActive?: boolean
    createdAt?: boolean
    lecturer?: boolean | LecturerDefaultArgs<ExtArgs>
    semester?: boolean | SemesterDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lecturerAvailability"]>

  export type LecturerAvailabilitySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    lecturerId?: boolean
    semesterId?: boolean
    dayOfWeek?: boolean
    timeSlots?: boolean
    isActive?: boolean
    createdAt?: boolean
    lecturer?: boolean | LecturerDefaultArgs<ExtArgs>
    semester?: boolean | SemesterDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lecturerAvailability"]>

  export type LecturerAvailabilitySelectScalar = {
    id?: boolean
    lecturerId?: boolean
    semesterId?: boolean
    dayOfWeek?: boolean
    timeSlots?: boolean
    isActive?: boolean
    createdAt?: boolean
  }

  export type LecturerAvailabilityOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "lecturerId" | "semesterId" | "dayOfWeek" | "timeSlots" | "isActive" | "createdAt", ExtArgs["result"]["lecturerAvailability"]>
  export type LecturerAvailabilityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lecturer?: boolean | LecturerDefaultArgs<ExtArgs>
    semester?: boolean | SemesterDefaultArgs<ExtArgs>
  }
  export type LecturerAvailabilityIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lecturer?: boolean | LecturerDefaultArgs<ExtArgs>
    semester?: boolean | SemesterDefaultArgs<ExtArgs>
  }
  export type LecturerAvailabilityIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lecturer?: boolean | LecturerDefaultArgs<ExtArgs>
    semester?: boolean | SemesterDefaultArgs<ExtArgs>
  }

  export type $LecturerAvailabilityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LecturerAvailability"
    objects: {
      lecturer: Prisma.$LecturerPayload<ExtArgs>
      semester: Prisma.$SemesterPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      lecturerId: string
      semesterId: string
      dayOfWeek: string
      timeSlots: Prisma.JsonValue
      isActive: boolean
      createdAt: Date
    }, ExtArgs["result"]["lecturerAvailability"]>
    composites: {}
  }

  type LecturerAvailabilityGetPayload<S extends boolean | null | undefined | LecturerAvailabilityDefaultArgs> = $Result.GetResult<Prisma.$LecturerAvailabilityPayload, S>

  type LecturerAvailabilityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LecturerAvailabilityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LecturerAvailabilityCountAggregateInputType | true
    }

  export interface LecturerAvailabilityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LecturerAvailability'], meta: { name: 'LecturerAvailability' } }
    /**
     * Find zero or one LecturerAvailability that matches the filter.
     * @param {LecturerAvailabilityFindUniqueArgs} args - Arguments to find a LecturerAvailability
     * @example
     * // Get one LecturerAvailability
     * const lecturerAvailability = await prisma.lecturerAvailability.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LecturerAvailabilityFindUniqueArgs>(args: SelectSubset<T, LecturerAvailabilityFindUniqueArgs<ExtArgs>>): Prisma__LecturerAvailabilityClient<$Result.GetResult<Prisma.$LecturerAvailabilityPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LecturerAvailability that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LecturerAvailabilityFindUniqueOrThrowArgs} args - Arguments to find a LecturerAvailability
     * @example
     * // Get one LecturerAvailability
     * const lecturerAvailability = await prisma.lecturerAvailability.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LecturerAvailabilityFindUniqueOrThrowArgs>(args: SelectSubset<T, LecturerAvailabilityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LecturerAvailabilityClient<$Result.GetResult<Prisma.$LecturerAvailabilityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LecturerAvailability that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LecturerAvailabilityFindFirstArgs} args - Arguments to find a LecturerAvailability
     * @example
     * // Get one LecturerAvailability
     * const lecturerAvailability = await prisma.lecturerAvailability.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LecturerAvailabilityFindFirstArgs>(args?: SelectSubset<T, LecturerAvailabilityFindFirstArgs<ExtArgs>>): Prisma__LecturerAvailabilityClient<$Result.GetResult<Prisma.$LecturerAvailabilityPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LecturerAvailability that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LecturerAvailabilityFindFirstOrThrowArgs} args - Arguments to find a LecturerAvailability
     * @example
     * // Get one LecturerAvailability
     * const lecturerAvailability = await prisma.lecturerAvailability.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LecturerAvailabilityFindFirstOrThrowArgs>(args?: SelectSubset<T, LecturerAvailabilityFindFirstOrThrowArgs<ExtArgs>>): Prisma__LecturerAvailabilityClient<$Result.GetResult<Prisma.$LecturerAvailabilityPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LecturerAvailabilities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LecturerAvailabilityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LecturerAvailabilities
     * const lecturerAvailabilities = await prisma.lecturerAvailability.findMany()
     * 
     * // Get first 10 LecturerAvailabilities
     * const lecturerAvailabilities = await prisma.lecturerAvailability.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const lecturerAvailabilityWithIdOnly = await prisma.lecturerAvailability.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LecturerAvailabilityFindManyArgs>(args?: SelectSubset<T, LecturerAvailabilityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LecturerAvailabilityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LecturerAvailability.
     * @param {LecturerAvailabilityCreateArgs} args - Arguments to create a LecturerAvailability.
     * @example
     * // Create one LecturerAvailability
     * const LecturerAvailability = await prisma.lecturerAvailability.create({
     *   data: {
     *     // ... data to create a LecturerAvailability
     *   }
     * })
     * 
     */
    create<T extends LecturerAvailabilityCreateArgs>(args: SelectSubset<T, LecturerAvailabilityCreateArgs<ExtArgs>>): Prisma__LecturerAvailabilityClient<$Result.GetResult<Prisma.$LecturerAvailabilityPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LecturerAvailabilities.
     * @param {LecturerAvailabilityCreateManyArgs} args - Arguments to create many LecturerAvailabilities.
     * @example
     * // Create many LecturerAvailabilities
     * const lecturerAvailability = await prisma.lecturerAvailability.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LecturerAvailabilityCreateManyArgs>(args?: SelectSubset<T, LecturerAvailabilityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LecturerAvailabilities and returns the data saved in the database.
     * @param {LecturerAvailabilityCreateManyAndReturnArgs} args - Arguments to create many LecturerAvailabilities.
     * @example
     * // Create many LecturerAvailabilities
     * const lecturerAvailability = await prisma.lecturerAvailability.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LecturerAvailabilities and only return the `id`
     * const lecturerAvailabilityWithIdOnly = await prisma.lecturerAvailability.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LecturerAvailabilityCreateManyAndReturnArgs>(args?: SelectSubset<T, LecturerAvailabilityCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LecturerAvailabilityPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LecturerAvailability.
     * @param {LecturerAvailabilityDeleteArgs} args - Arguments to delete one LecturerAvailability.
     * @example
     * // Delete one LecturerAvailability
     * const LecturerAvailability = await prisma.lecturerAvailability.delete({
     *   where: {
     *     // ... filter to delete one LecturerAvailability
     *   }
     * })
     * 
     */
    delete<T extends LecturerAvailabilityDeleteArgs>(args: SelectSubset<T, LecturerAvailabilityDeleteArgs<ExtArgs>>): Prisma__LecturerAvailabilityClient<$Result.GetResult<Prisma.$LecturerAvailabilityPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LecturerAvailability.
     * @param {LecturerAvailabilityUpdateArgs} args - Arguments to update one LecturerAvailability.
     * @example
     * // Update one LecturerAvailability
     * const lecturerAvailability = await prisma.lecturerAvailability.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LecturerAvailabilityUpdateArgs>(args: SelectSubset<T, LecturerAvailabilityUpdateArgs<ExtArgs>>): Prisma__LecturerAvailabilityClient<$Result.GetResult<Prisma.$LecturerAvailabilityPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LecturerAvailabilities.
     * @param {LecturerAvailabilityDeleteManyArgs} args - Arguments to filter LecturerAvailabilities to delete.
     * @example
     * // Delete a few LecturerAvailabilities
     * const { count } = await prisma.lecturerAvailability.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LecturerAvailabilityDeleteManyArgs>(args?: SelectSubset<T, LecturerAvailabilityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LecturerAvailabilities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LecturerAvailabilityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LecturerAvailabilities
     * const lecturerAvailability = await prisma.lecturerAvailability.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LecturerAvailabilityUpdateManyArgs>(args: SelectSubset<T, LecturerAvailabilityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LecturerAvailabilities and returns the data updated in the database.
     * @param {LecturerAvailabilityUpdateManyAndReturnArgs} args - Arguments to update many LecturerAvailabilities.
     * @example
     * // Update many LecturerAvailabilities
     * const lecturerAvailability = await prisma.lecturerAvailability.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LecturerAvailabilities and only return the `id`
     * const lecturerAvailabilityWithIdOnly = await prisma.lecturerAvailability.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LecturerAvailabilityUpdateManyAndReturnArgs>(args: SelectSubset<T, LecturerAvailabilityUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LecturerAvailabilityPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LecturerAvailability.
     * @param {LecturerAvailabilityUpsertArgs} args - Arguments to update or create a LecturerAvailability.
     * @example
     * // Update or create a LecturerAvailability
     * const lecturerAvailability = await prisma.lecturerAvailability.upsert({
     *   create: {
     *     // ... data to create a LecturerAvailability
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LecturerAvailability we want to update
     *   }
     * })
     */
    upsert<T extends LecturerAvailabilityUpsertArgs>(args: SelectSubset<T, LecturerAvailabilityUpsertArgs<ExtArgs>>): Prisma__LecturerAvailabilityClient<$Result.GetResult<Prisma.$LecturerAvailabilityPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LecturerAvailabilities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LecturerAvailabilityCountArgs} args - Arguments to filter LecturerAvailabilities to count.
     * @example
     * // Count the number of LecturerAvailabilities
     * const count = await prisma.lecturerAvailability.count({
     *   where: {
     *     // ... the filter for the LecturerAvailabilities we want to count
     *   }
     * })
    **/
    count<T extends LecturerAvailabilityCountArgs>(
      args?: Subset<T, LecturerAvailabilityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LecturerAvailabilityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LecturerAvailability.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LecturerAvailabilityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LecturerAvailabilityAggregateArgs>(args: Subset<T, LecturerAvailabilityAggregateArgs>): Prisma.PrismaPromise<GetLecturerAvailabilityAggregateType<T>>

    /**
     * Group by LecturerAvailability.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LecturerAvailabilityGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LecturerAvailabilityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LecturerAvailabilityGroupByArgs['orderBy'] }
        : { orderBy?: LecturerAvailabilityGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LecturerAvailabilityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLecturerAvailabilityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LecturerAvailability model
   */
  readonly fields: LecturerAvailabilityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LecturerAvailability.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LecturerAvailabilityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    lecturer<T extends LecturerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LecturerDefaultArgs<ExtArgs>>): Prisma__LecturerClient<$Result.GetResult<Prisma.$LecturerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    semester<T extends SemesterDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SemesterDefaultArgs<ExtArgs>>): Prisma__SemesterClient<$Result.GetResult<Prisma.$SemesterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the LecturerAvailability model
   */
  interface LecturerAvailabilityFieldRefs {
    readonly id: FieldRef<"LecturerAvailability", 'String'>
    readonly lecturerId: FieldRef<"LecturerAvailability", 'String'>
    readonly semesterId: FieldRef<"LecturerAvailability", 'String'>
    readonly dayOfWeek: FieldRef<"LecturerAvailability", 'String'>
    readonly timeSlots: FieldRef<"LecturerAvailability", 'Json'>
    readonly isActive: FieldRef<"LecturerAvailability", 'Boolean'>
    readonly createdAt: FieldRef<"LecturerAvailability", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * LecturerAvailability findUnique
   */
  export type LecturerAvailabilityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LecturerAvailability
     */
    select?: LecturerAvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LecturerAvailability
     */
    omit?: LecturerAvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LecturerAvailabilityInclude<ExtArgs> | null
    /**
     * Filter, which LecturerAvailability to fetch.
     */
    where: LecturerAvailabilityWhereUniqueInput
  }

  /**
   * LecturerAvailability findUniqueOrThrow
   */
  export type LecturerAvailabilityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LecturerAvailability
     */
    select?: LecturerAvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LecturerAvailability
     */
    omit?: LecturerAvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LecturerAvailabilityInclude<ExtArgs> | null
    /**
     * Filter, which LecturerAvailability to fetch.
     */
    where: LecturerAvailabilityWhereUniqueInput
  }

  /**
   * LecturerAvailability findFirst
   */
  export type LecturerAvailabilityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LecturerAvailability
     */
    select?: LecturerAvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LecturerAvailability
     */
    omit?: LecturerAvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LecturerAvailabilityInclude<ExtArgs> | null
    /**
     * Filter, which LecturerAvailability to fetch.
     */
    where?: LecturerAvailabilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LecturerAvailabilities to fetch.
     */
    orderBy?: LecturerAvailabilityOrderByWithRelationInput | LecturerAvailabilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LecturerAvailabilities.
     */
    cursor?: LecturerAvailabilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LecturerAvailabilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LecturerAvailabilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LecturerAvailabilities.
     */
    distinct?: LecturerAvailabilityScalarFieldEnum | LecturerAvailabilityScalarFieldEnum[]
  }

  /**
   * LecturerAvailability findFirstOrThrow
   */
  export type LecturerAvailabilityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LecturerAvailability
     */
    select?: LecturerAvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LecturerAvailability
     */
    omit?: LecturerAvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LecturerAvailabilityInclude<ExtArgs> | null
    /**
     * Filter, which LecturerAvailability to fetch.
     */
    where?: LecturerAvailabilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LecturerAvailabilities to fetch.
     */
    orderBy?: LecturerAvailabilityOrderByWithRelationInput | LecturerAvailabilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LecturerAvailabilities.
     */
    cursor?: LecturerAvailabilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LecturerAvailabilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LecturerAvailabilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LecturerAvailabilities.
     */
    distinct?: LecturerAvailabilityScalarFieldEnum | LecturerAvailabilityScalarFieldEnum[]
  }

  /**
   * LecturerAvailability findMany
   */
  export type LecturerAvailabilityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LecturerAvailability
     */
    select?: LecturerAvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LecturerAvailability
     */
    omit?: LecturerAvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LecturerAvailabilityInclude<ExtArgs> | null
    /**
     * Filter, which LecturerAvailabilities to fetch.
     */
    where?: LecturerAvailabilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LecturerAvailabilities to fetch.
     */
    orderBy?: LecturerAvailabilityOrderByWithRelationInput | LecturerAvailabilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LecturerAvailabilities.
     */
    cursor?: LecturerAvailabilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LecturerAvailabilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LecturerAvailabilities.
     */
    skip?: number
    distinct?: LecturerAvailabilityScalarFieldEnum | LecturerAvailabilityScalarFieldEnum[]
  }

  /**
   * LecturerAvailability create
   */
  export type LecturerAvailabilityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LecturerAvailability
     */
    select?: LecturerAvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LecturerAvailability
     */
    omit?: LecturerAvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LecturerAvailabilityInclude<ExtArgs> | null
    /**
     * The data needed to create a LecturerAvailability.
     */
    data: XOR<LecturerAvailabilityCreateInput, LecturerAvailabilityUncheckedCreateInput>
  }

  /**
   * LecturerAvailability createMany
   */
  export type LecturerAvailabilityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LecturerAvailabilities.
     */
    data: LecturerAvailabilityCreateManyInput | LecturerAvailabilityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LecturerAvailability createManyAndReturn
   */
  export type LecturerAvailabilityCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LecturerAvailability
     */
    select?: LecturerAvailabilitySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LecturerAvailability
     */
    omit?: LecturerAvailabilityOmit<ExtArgs> | null
    /**
     * The data used to create many LecturerAvailabilities.
     */
    data: LecturerAvailabilityCreateManyInput | LecturerAvailabilityCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LecturerAvailabilityIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * LecturerAvailability update
   */
  export type LecturerAvailabilityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LecturerAvailability
     */
    select?: LecturerAvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LecturerAvailability
     */
    omit?: LecturerAvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LecturerAvailabilityInclude<ExtArgs> | null
    /**
     * The data needed to update a LecturerAvailability.
     */
    data: XOR<LecturerAvailabilityUpdateInput, LecturerAvailabilityUncheckedUpdateInput>
    /**
     * Choose, which LecturerAvailability to update.
     */
    where: LecturerAvailabilityWhereUniqueInput
  }

  /**
   * LecturerAvailability updateMany
   */
  export type LecturerAvailabilityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LecturerAvailabilities.
     */
    data: XOR<LecturerAvailabilityUpdateManyMutationInput, LecturerAvailabilityUncheckedUpdateManyInput>
    /**
     * Filter which LecturerAvailabilities to update
     */
    where?: LecturerAvailabilityWhereInput
    /**
     * Limit how many LecturerAvailabilities to update.
     */
    limit?: number
  }

  /**
   * LecturerAvailability updateManyAndReturn
   */
  export type LecturerAvailabilityUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LecturerAvailability
     */
    select?: LecturerAvailabilitySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LecturerAvailability
     */
    omit?: LecturerAvailabilityOmit<ExtArgs> | null
    /**
     * The data used to update LecturerAvailabilities.
     */
    data: XOR<LecturerAvailabilityUpdateManyMutationInput, LecturerAvailabilityUncheckedUpdateManyInput>
    /**
     * Filter which LecturerAvailabilities to update
     */
    where?: LecturerAvailabilityWhereInput
    /**
     * Limit how many LecturerAvailabilities to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LecturerAvailabilityIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * LecturerAvailability upsert
   */
  export type LecturerAvailabilityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LecturerAvailability
     */
    select?: LecturerAvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LecturerAvailability
     */
    omit?: LecturerAvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LecturerAvailabilityInclude<ExtArgs> | null
    /**
     * The filter to search for the LecturerAvailability to update in case it exists.
     */
    where: LecturerAvailabilityWhereUniqueInput
    /**
     * In case the LecturerAvailability found by the `where` argument doesn't exist, create a new LecturerAvailability with this data.
     */
    create: XOR<LecturerAvailabilityCreateInput, LecturerAvailabilityUncheckedCreateInput>
    /**
     * In case the LecturerAvailability was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LecturerAvailabilityUpdateInput, LecturerAvailabilityUncheckedUpdateInput>
  }

  /**
   * LecturerAvailability delete
   */
  export type LecturerAvailabilityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LecturerAvailability
     */
    select?: LecturerAvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LecturerAvailability
     */
    omit?: LecturerAvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LecturerAvailabilityInclude<ExtArgs> | null
    /**
     * Filter which LecturerAvailability to delete.
     */
    where: LecturerAvailabilityWhereUniqueInput
  }

  /**
   * LecturerAvailability deleteMany
   */
  export type LecturerAvailabilityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LecturerAvailabilities to delete
     */
    where?: LecturerAvailabilityWhereInput
    /**
     * Limit how many LecturerAvailabilities to delete.
     */
    limit?: number
  }

  /**
   * LecturerAvailability without action
   */
  export type LecturerAvailabilityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LecturerAvailability
     */
    select?: LecturerAvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LecturerAvailability
     */
    omit?: LecturerAvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LecturerAvailabilityInclude<ExtArgs> | null
  }


  /**
   * Model ConsultationBooking
   */

  export type AggregateConsultationBooking = {
    _count: ConsultationBookingCountAggregateOutputType | null
    _avg: ConsultationBookingAvgAggregateOutputType | null
    _sum: ConsultationBookingSumAggregateOutputType | null
    _min: ConsultationBookingMinAggregateOutputType | null
    _max: ConsultationBookingMaxAggregateOutputType | null
  }

  export type ConsultationBookingAvgAggregateOutputType = {
    rating: number | null
  }

  export type ConsultationBookingSumAggregateOutputType = {
    rating: number | null
  }

  export type ConsultationBookingMinAggregateOutputType = {
    id: string | null
    userId: string | null
    lecturerId: string | null
    semesterId: string | null
    sessionId: string | null
    consultationType: $Enums.ConsultationType | null
    title: string | null
    category: string | null
    priority: string | null
    description: string | null
    organization: string | null
    contactPerson: string | null
    phone: string | null
    email: string | null
    scheduledDate: Date | null
    scheduledDay: string | null
    startTime: string | null
    endTime: string | null
    status: $Enums.ConsultationStatus | null
    feedback: string | null
    rating: number | null
    zoomLink: string | null
    rescheduleNote: string | null
    attachmentFileName: string | null
    attachmentUrl: string | null
    completedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ConsultationBookingMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    lecturerId: string | null
    semesterId: string | null
    sessionId: string | null
    consultationType: $Enums.ConsultationType | null
    title: string | null
    category: string | null
    priority: string | null
    description: string | null
    organization: string | null
    contactPerson: string | null
    phone: string | null
    email: string | null
    scheduledDate: Date | null
    scheduledDay: string | null
    startTime: string | null
    endTime: string | null
    status: $Enums.ConsultationStatus | null
    feedback: string | null
    rating: number | null
    zoomLink: string | null
    rescheduleNote: string | null
    attachmentFileName: string | null
    attachmentUrl: string | null
    completedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ConsultationBookingCountAggregateOutputType = {
    id: number
    userId: number
    lecturerId: number
    semesterId: number
    sessionId: number
    consultationType: number
    title: number
    category: number
    priority: number
    description: number
    organization: number
    contactPerson: number
    phone: number
    email: number
    scheduledDate: number
    scheduledDay: number
    startTime: number
    endTime: number
    status: number
    feedback: number
    rating: number
    zoomLink: number
    rescheduleNote: number
    attachmentFileName: number
    attachmentUrl: number
    completedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ConsultationBookingAvgAggregateInputType = {
    rating?: true
  }

  export type ConsultationBookingSumAggregateInputType = {
    rating?: true
  }

  export type ConsultationBookingMinAggregateInputType = {
    id?: true
    userId?: true
    lecturerId?: true
    semesterId?: true
    sessionId?: true
    consultationType?: true
    title?: true
    category?: true
    priority?: true
    description?: true
    organization?: true
    contactPerson?: true
    phone?: true
    email?: true
    scheduledDate?: true
    scheduledDay?: true
    startTime?: true
    endTime?: true
    status?: true
    feedback?: true
    rating?: true
    zoomLink?: true
    rescheduleNote?: true
    attachmentFileName?: true
    attachmentUrl?: true
    completedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ConsultationBookingMaxAggregateInputType = {
    id?: true
    userId?: true
    lecturerId?: true
    semesterId?: true
    sessionId?: true
    consultationType?: true
    title?: true
    category?: true
    priority?: true
    description?: true
    organization?: true
    contactPerson?: true
    phone?: true
    email?: true
    scheduledDate?: true
    scheduledDay?: true
    startTime?: true
    endTime?: true
    status?: true
    feedback?: true
    rating?: true
    zoomLink?: true
    rescheduleNote?: true
    attachmentFileName?: true
    attachmentUrl?: true
    completedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ConsultationBookingCountAggregateInputType = {
    id?: true
    userId?: true
    lecturerId?: true
    semesterId?: true
    sessionId?: true
    consultationType?: true
    title?: true
    category?: true
    priority?: true
    description?: true
    organization?: true
    contactPerson?: true
    phone?: true
    email?: true
    scheduledDate?: true
    scheduledDay?: true
    startTime?: true
    endTime?: true
    status?: true
    feedback?: true
    rating?: true
    zoomLink?: true
    rescheduleNote?: true
    attachmentFileName?: true
    attachmentUrl?: true
    completedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ConsultationBookingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ConsultationBooking to aggregate.
     */
    where?: ConsultationBookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ConsultationBookings to fetch.
     */
    orderBy?: ConsultationBookingOrderByWithRelationInput | ConsultationBookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ConsultationBookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ConsultationBookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ConsultationBookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ConsultationBookings
    **/
    _count?: true | ConsultationBookingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ConsultationBookingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ConsultationBookingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ConsultationBookingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ConsultationBookingMaxAggregateInputType
  }

  export type GetConsultationBookingAggregateType<T extends ConsultationBookingAggregateArgs> = {
        [P in keyof T & keyof AggregateConsultationBooking]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateConsultationBooking[P]>
      : GetScalarType<T[P], AggregateConsultationBooking[P]>
  }




  export type ConsultationBookingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConsultationBookingWhereInput
    orderBy?: ConsultationBookingOrderByWithAggregationInput | ConsultationBookingOrderByWithAggregationInput[]
    by: ConsultationBookingScalarFieldEnum[] | ConsultationBookingScalarFieldEnum
    having?: ConsultationBookingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ConsultationBookingCountAggregateInputType | true
    _avg?: ConsultationBookingAvgAggregateInputType
    _sum?: ConsultationBookingSumAggregateInputType
    _min?: ConsultationBookingMinAggregateInputType
    _max?: ConsultationBookingMaxAggregateInputType
  }

  export type ConsultationBookingGroupByOutputType = {
    id: string
    userId: string
    lecturerId: string
    semesterId: string
    sessionId: string | null
    consultationType: $Enums.ConsultationType
    title: string
    category: string
    priority: string
    description: string
    organization: string
    contactPerson: string
    phone: string
    email: string
    scheduledDate: Date
    scheduledDay: string
    startTime: string
    endTime: string
    status: $Enums.ConsultationStatus
    feedback: string | null
    rating: number | null
    zoomLink: string | null
    rescheduleNote: string | null
    attachmentFileName: string | null
    attachmentUrl: string | null
    completedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: ConsultationBookingCountAggregateOutputType | null
    _avg: ConsultationBookingAvgAggregateOutputType | null
    _sum: ConsultationBookingSumAggregateOutputType | null
    _min: ConsultationBookingMinAggregateOutputType | null
    _max: ConsultationBookingMaxAggregateOutputType | null
  }

  type GetConsultationBookingGroupByPayload<T extends ConsultationBookingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ConsultationBookingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ConsultationBookingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ConsultationBookingGroupByOutputType[P]>
            : GetScalarType<T[P], ConsultationBookingGroupByOutputType[P]>
        }
      >
    >


  export type ConsultationBookingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    lecturerId?: boolean
    semesterId?: boolean
    sessionId?: boolean
    consultationType?: boolean
    title?: boolean
    category?: boolean
    priority?: boolean
    description?: boolean
    organization?: boolean
    contactPerson?: boolean
    phone?: boolean
    email?: boolean
    scheduledDate?: boolean
    scheduledDay?: boolean
    startTime?: boolean
    endTime?: boolean
    status?: boolean
    feedback?: boolean
    rating?: boolean
    zoomLink?: boolean
    rescheduleNote?: boolean
    attachmentFileName?: boolean
    attachmentUrl?: boolean
    completedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    lecturer?: boolean | LecturerDefaultArgs<ExtArgs>
    semester?: boolean | SemesterDefaultArgs<ExtArgs>
    session?: boolean | ConsultationBooking$sessionArgs<ExtArgs>
  }, ExtArgs["result"]["consultationBooking"]>

  export type ConsultationBookingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    lecturerId?: boolean
    semesterId?: boolean
    sessionId?: boolean
    consultationType?: boolean
    title?: boolean
    category?: boolean
    priority?: boolean
    description?: boolean
    organization?: boolean
    contactPerson?: boolean
    phone?: boolean
    email?: boolean
    scheduledDate?: boolean
    scheduledDay?: boolean
    startTime?: boolean
    endTime?: boolean
    status?: boolean
    feedback?: boolean
    rating?: boolean
    zoomLink?: boolean
    rescheduleNote?: boolean
    attachmentFileName?: boolean
    attachmentUrl?: boolean
    completedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    lecturer?: boolean | LecturerDefaultArgs<ExtArgs>
    semester?: boolean | SemesterDefaultArgs<ExtArgs>
    session?: boolean | ConsultationBooking$sessionArgs<ExtArgs>
  }, ExtArgs["result"]["consultationBooking"]>

  export type ConsultationBookingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    lecturerId?: boolean
    semesterId?: boolean
    sessionId?: boolean
    consultationType?: boolean
    title?: boolean
    category?: boolean
    priority?: boolean
    description?: boolean
    organization?: boolean
    contactPerson?: boolean
    phone?: boolean
    email?: boolean
    scheduledDate?: boolean
    scheduledDay?: boolean
    startTime?: boolean
    endTime?: boolean
    status?: boolean
    feedback?: boolean
    rating?: boolean
    zoomLink?: boolean
    rescheduleNote?: boolean
    attachmentFileName?: boolean
    attachmentUrl?: boolean
    completedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    lecturer?: boolean | LecturerDefaultArgs<ExtArgs>
    semester?: boolean | SemesterDefaultArgs<ExtArgs>
    session?: boolean | ConsultationBooking$sessionArgs<ExtArgs>
  }, ExtArgs["result"]["consultationBooking"]>

  export type ConsultationBookingSelectScalar = {
    id?: boolean
    userId?: boolean
    lecturerId?: boolean
    semesterId?: boolean
    sessionId?: boolean
    consultationType?: boolean
    title?: boolean
    category?: boolean
    priority?: boolean
    description?: boolean
    organization?: boolean
    contactPerson?: boolean
    phone?: boolean
    email?: boolean
    scheduledDate?: boolean
    scheduledDay?: boolean
    startTime?: boolean
    endTime?: boolean
    status?: boolean
    feedback?: boolean
    rating?: boolean
    zoomLink?: boolean
    rescheduleNote?: boolean
    attachmentFileName?: boolean
    attachmentUrl?: boolean
    completedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ConsultationBookingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "lecturerId" | "semesterId" | "sessionId" | "consultationType" | "title" | "category" | "priority" | "description" | "organization" | "contactPerson" | "phone" | "email" | "scheduledDate" | "scheduledDay" | "startTime" | "endTime" | "status" | "feedback" | "rating" | "zoomLink" | "rescheduleNote" | "attachmentFileName" | "attachmentUrl" | "completedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["consultationBooking"]>
  export type ConsultationBookingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    lecturer?: boolean | LecturerDefaultArgs<ExtArgs>
    semester?: boolean | SemesterDefaultArgs<ExtArgs>
    session?: boolean | ConsultationBooking$sessionArgs<ExtArgs>
  }
  export type ConsultationBookingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    lecturer?: boolean | LecturerDefaultArgs<ExtArgs>
    semester?: boolean | SemesterDefaultArgs<ExtArgs>
    session?: boolean | ConsultationBooking$sessionArgs<ExtArgs>
  }
  export type ConsultationBookingIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    lecturer?: boolean | LecturerDefaultArgs<ExtArgs>
    semester?: boolean | SemesterDefaultArgs<ExtArgs>
    session?: boolean | ConsultationBooking$sessionArgs<ExtArgs>
  }

  export type $ConsultationBookingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ConsultationBooking"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      lecturer: Prisma.$LecturerPayload<ExtArgs>
      semester: Prisma.$SemesterPayload<ExtArgs>
      session: Prisma.$ConsultationSessionPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      lecturerId: string
      semesterId: string
      sessionId: string | null
      consultationType: $Enums.ConsultationType
      title: string
      category: string
      priority: string
      description: string
      organization: string
      contactPerson: string
      phone: string
      email: string
      scheduledDate: Date
      scheduledDay: string
      startTime: string
      endTime: string
      status: $Enums.ConsultationStatus
      feedback: string | null
      rating: number | null
      zoomLink: string | null
      rescheduleNote: string | null
      attachmentFileName: string | null
      attachmentUrl: string | null
      completedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["consultationBooking"]>
    composites: {}
  }

  type ConsultationBookingGetPayload<S extends boolean | null | undefined | ConsultationBookingDefaultArgs> = $Result.GetResult<Prisma.$ConsultationBookingPayload, S>

  type ConsultationBookingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ConsultationBookingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ConsultationBookingCountAggregateInputType | true
    }

  export interface ConsultationBookingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ConsultationBooking'], meta: { name: 'ConsultationBooking' } }
    /**
     * Find zero or one ConsultationBooking that matches the filter.
     * @param {ConsultationBookingFindUniqueArgs} args - Arguments to find a ConsultationBooking
     * @example
     * // Get one ConsultationBooking
     * const consultationBooking = await prisma.consultationBooking.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ConsultationBookingFindUniqueArgs>(args: SelectSubset<T, ConsultationBookingFindUniqueArgs<ExtArgs>>): Prisma__ConsultationBookingClient<$Result.GetResult<Prisma.$ConsultationBookingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ConsultationBooking that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ConsultationBookingFindUniqueOrThrowArgs} args - Arguments to find a ConsultationBooking
     * @example
     * // Get one ConsultationBooking
     * const consultationBooking = await prisma.consultationBooking.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ConsultationBookingFindUniqueOrThrowArgs>(args: SelectSubset<T, ConsultationBookingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ConsultationBookingClient<$Result.GetResult<Prisma.$ConsultationBookingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ConsultationBooking that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultationBookingFindFirstArgs} args - Arguments to find a ConsultationBooking
     * @example
     * // Get one ConsultationBooking
     * const consultationBooking = await prisma.consultationBooking.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ConsultationBookingFindFirstArgs>(args?: SelectSubset<T, ConsultationBookingFindFirstArgs<ExtArgs>>): Prisma__ConsultationBookingClient<$Result.GetResult<Prisma.$ConsultationBookingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ConsultationBooking that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultationBookingFindFirstOrThrowArgs} args - Arguments to find a ConsultationBooking
     * @example
     * // Get one ConsultationBooking
     * const consultationBooking = await prisma.consultationBooking.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ConsultationBookingFindFirstOrThrowArgs>(args?: SelectSubset<T, ConsultationBookingFindFirstOrThrowArgs<ExtArgs>>): Prisma__ConsultationBookingClient<$Result.GetResult<Prisma.$ConsultationBookingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ConsultationBookings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultationBookingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ConsultationBookings
     * const consultationBookings = await prisma.consultationBooking.findMany()
     * 
     * // Get first 10 ConsultationBookings
     * const consultationBookings = await prisma.consultationBooking.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const consultationBookingWithIdOnly = await prisma.consultationBooking.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ConsultationBookingFindManyArgs>(args?: SelectSubset<T, ConsultationBookingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConsultationBookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ConsultationBooking.
     * @param {ConsultationBookingCreateArgs} args - Arguments to create a ConsultationBooking.
     * @example
     * // Create one ConsultationBooking
     * const ConsultationBooking = await prisma.consultationBooking.create({
     *   data: {
     *     // ... data to create a ConsultationBooking
     *   }
     * })
     * 
     */
    create<T extends ConsultationBookingCreateArgs>(args: SelectSubset<T, ConsultationBookingCreateArgs<ExtArgs>>): Prisma__ConsultationBookingClient<$Result.GetResult<Prisma.$ConsultationBookingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ConsultationBookings.
     * @param {ConsultationBookingCreateManyArgs} args - Arguments to create many ConsultationBookings.
     * @example
     * // Create many ConsultationBookings
     * const consultationBooking = await prisma.consultationBooking.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ConsultationBookingCreateManyArgs>(args?: SelectSubset<T, ConsultationBookingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ConsultationBookings and returns the data saved in the database.
     * @param {ConsultationBookingCreateManyAndReturnArgs} args - Arguments to create many ConsultationBookings.
     * @example
     * // Create many ConsultationBookings
     * const consultationBooking = await prisma.consultationBooking.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ConsultationBookings and only return the `id`
     * const consultationBookingWithIdOnly = await prisma.consultationBooking.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ConsultationBookingCreateManyAndReturnArgs>(args?: SelectSubset<T, ConsultationBookingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConsultationBookingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ConsultationBooking.
     * @param {ConsultationBookingDeleteArgs} args - Arguments to delete one ConsultationBooking.
     * @example
     * // Delete one ConsultationBooking
     * const ConsultationBooking = await prisma.consultationBooking.delete({
     *   where: {
     *     // ... filter to delete one ConsultationBooking
     *   }
     * })
     * 
     */
    delete<T extends ConsultationBookingDeleteArgs>(args: SelectSubset<T, ConsultationBookingDeleteArgs<ExtArgs>>): Prisma__ConsultationBookingClient<$Result.GetResult<Prisma.$ConsultationBookingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ConsultationBooking.
     * @param {ConsultationBookingUpdateArgs} args - Arguments to update one ConsultationBooking.
     * @example
     * // Update one ConsultationBooking
     * const consultationBooking = await prisma.consultationBooking.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ConsultationBookingUpdateArgs>(args: SelectSubset<T, ConsultationBookingUpdateArgs<ExtArgs>>): Prisma__ConsultationBookingClient<$Result.GetResult<Prisma.$ConsultationBookingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ConsultationBookings.
     * @param {ConsultationBookingDeleteManyArgs} args - Arguments to filter ConsultationBookings to delete.
     * @example
     * // Delete a few ConsultationBookings
     * const { count } = await prisma.consultationBooking.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ConsultationBookingDeleteManyArgs>(args?: SelectSubset<T, ConsultationBookingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ConsultationBookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultationBookingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ConsultationBookings
     * const consultationBooking = await prisma.consultationBooking.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ConsultationBookingUpdateManyArgs>(args: SelectSubset<T, ConsultationBookingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ConsultationBookings and returns the data updated in the database.
     * @param {ConsultationBookingUpdateManyAndReturnArgs} args - Arguments to update many ConsultationBookings.
     * @example
     * // Update many ConsultationBookings
     * const consultationBooking = await prisma.consultationBooking.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ConsultationBookings and only return the `id`
     * const consultationBookingWithIdOnly = await prisma.consultationBooking.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ConsultationBookingUpdateManyAndReturnArgs>(args: SelectSubset<T, ConsultationBookingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConsultationBookingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ConsultationBooking.
     * @param {ConsultationBookingUpsertArgs} args - Arguments to update or create a ConsultationBooking.
     * @example
     * // Update or create a ConsultationBooking
     * const consultationBooking = await prisma.consultationBooking.upsert({
     *   create: {
     *     // ... data to create a ConsultationBooking
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ConsultationBooking we want to update
     *   }
     * })
     */
    upsert<T extends ConsultationBookingUpsertArgs>(args: SelectSubset<T, ConsultationBookingUpsertArgs<ExtArgs>>): Prisma__ConsultationBookingClient<$Result.GetResult<Prisma.$ConsultationBookingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ConsultationBookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultationBookingCountArgs} args - Arguments to filter ConsultationBookings to count.
     * @example
     * // Count the number of ConsultationBookings
     * const count = await prisma.consultationBooking.count({
     *   where: {
     *     // ... the filter for the ConsultationBookings we want to count
     *   }
     * })
    **/
    count<T extends ConsultationBookingCountArgs>(
      args?: Subset<T, ConsultationBookingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ConsultationBookingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ConsultationBooking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultationBookingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ConsultationBookingAggregateArgs>(args: Subset<T, ConsultationBookingAggregateArgs>): Prisma.PrismaPromise<GetConsultationBookingAggregateType<T>>

    /**
     * Group by ConsultationBooking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultationBookingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ConsultationBookingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ConsultationBookingGroupByArgs['orderBy'] }
        : { orderBy?: ConsultationBookingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ConsultationBookingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConsultationBookingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ConsultationBooking model
   */
  readonly fields: ConsultationBookingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ConsultationBooking.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ConsultationBookingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    lecturer<T extends LecturerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LecturerDefaultArgs<ExtArgs>>): Prisma__LecturerClient<$Result.GetResult<Prisma.$LecturerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    semester<T extends SemesterDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SemesterDefaultArgs<ExtArgs>>): Prisma__SemesterClient<$Result.GetResult<Prisma.$SemesterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    session<T extends ConsultationBooking$sessionArgs<ExtArgs> = {}>(args?: Subset<T, ConsultationBooking$sessionArgs<ExtArgs>>): Prisma__ConsultationSessionClient<$Result.GetResult<Prisma.$ConsultationSessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ConsultationBooking model
   */
  interface ConsultationBookingFieldRefs {
    readonly id: FieldRef<"ConsultationBooking", 'String'>
    readonly userId: FieldRef<"ConsultationBooking", 'String'>
    readonly lecturerId: FieldRef<"ConsultationBooking", 'String'>
    readonly semesterId: FieldRef<"ConsultationBooking", 'String'>
    readonly sessionId: FieldRef<"ConsultationBooking", 'String'>
    readonly consultationType: FieldRef<"ConsultationBooking", 'ConsultationType'>
    readonly title: FieldRef<"ConsultationBooking", 'String'>
    readonly category: FieldRef<"ConsultationBooking", 'String'>
    readonly priority: FieldRef<"ConsultationBooking", 'String'>
    readonly description: FieldRef<"ConsultationBooking", 'String'>
    readonly organization: FieldRef<"ConsultationBooking", 'String'>
    readonly contactPerson: FieldRef<"ConsultationBooking", 'String'>
    readonly phone: FieldRef<"ConsultationBooking", 'String'>
    readonly email: FieldRef<"ConsultationBooking", 'String'>
    readonly scheduledDate: FieldRef<"ConsultationBooking", 'DateTime'>
    readonly scheduledDay: FieldRef<"ConsultationBooking", 'String'>
    readonly startTime: FieldRef<"ConsultationBooking", 'String'>
    readonly endTime: FieldRef<"ConsultationBooking", 'String'>
    readonly status: FieldRef<"ConsultationBooking", 'ConsultationStatus'>
    readonly feedback: FieldRef<"ConsultationBooking", 'String'>
    readonly rating: FieldRef<"ConsultationBooking", 'Int'>
    readonly zoomLink: FieldRef<"ConsultationBooking", 'String'>
    readonly rescheduleNote: FieldRef<"ConsultationBooking", 'String'>
    readonly attachmentFileName: FieldRef<"ConsultationBooking", 'String'>
    readonly attachmentUrl: FieldRef<"ConsultationBooking", 'String'>
    readonly completedAt: FieldRef<"ConsultationBooking", 'DateTime'>
    readonly createdAt: FieldRef<"ConsultationBooking", 'DateTime'>
    readonly updatedAt: FieldRef<"ConsultationBooking", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ConsultationBooking findUnique
   */
  export type ConsultationBookingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConsultationBooking
     */
    select?: ConsultationBookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConsultationBooking
     */
    omit?: ConsultationBookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultationBookingInclude<ExtArgs> | null
    /**
     * Filter, which ConsultationBooking to fetch.
     */
    where: ConsultationBookingWhereUniqueInput
  }

  /**
   * ConsultationBooking findUniqueOrThrow
   */
  export type ConsultationBookingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConsultationBooking
     */
    select?: ConsultationBookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConsultationBooking
     */
    omit?: ConsultationBookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultationBookingInclude<ExtArgs> | null
    /**
     * Filter, which ConsultationBooking to fetch.
     */
    where: ConsultationBookingWhereUniqueInput
  }

  /**
   * ConsultationBooking findFirst
   */
  export type ConsultationBookingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConsultationBooking
     */
    select?: ConsultationBookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConsultationBooking
     */
    omit?: ConsultationBookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultationBookingInclude<ExtArgs> | null
    /**
     * Filter, which ConsultationBooking to fetch.
     */
    where?: ConsultationBookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ConsultationBookings to fetch.
     */
    orderBy?: ConsultationBookingOrderByWithRelationInput | ConsultationBookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ConsultationBookings.
     */
    cursor?: ConsultationBookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ConsultationBookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ConsultationBookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ConsultationBookings.
     */
    distinct?: ConsultationBookingScalarFieldEnum | ConsultationBookingScalarFieldEnum[]
  }

  /**
   * ConsultationBooking findFirstOrThrow
   */
  export type ConsultationBookingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConsultationBooking
     */
    select?: ConsultationBookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConsultationBooking
     */
    omit?: ConsultationBookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultationBookingInclude<ExtArgs> | null
    /**
     * Filter, which ConsultationBooking to fetch.
     */
    where?: ConsultationBookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ConsultationBookings to fetch.
     */
    orderBy?: ConsultationBookingOrderByWithRelationInput | ConsultationBookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ConsultationBookings.
     */
    cursor?: ConsultationBookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ConsultationBookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ConsultationBookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ConsultationBookings.
     */
    distinct?: ConsultationBookingScalarFieldEnum | ConsultationBookingScalarFieldEnum[]
  }

  /**
   * ConsultationBooking findMany
   */
  export type ConsultationBookingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConsultationBooking
     */
    select?: ConsultationBookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConsultationBooking
     */
    omit?: ConsultationBookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultationBookingInclude<ExtArgs> | null
    /**
     * Filter, which ConsultationBookings to fetch.
     */
    where?: ConsultationBookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ConsultationBookings to fetch.
     */
    orderBy?: ConsultationBookingOrderByWithRelationInput | ConsultationBookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ConsultationBookings.
     */
    cursor?: ConsultationBookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ConsultationBookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ConsultationBookings.
     */
    skip?: number
    distinct?: ConsultationBookingScalarFieldEnum | ConsultationBookingScalarFieldEnum[]
  }

  /**
   * ConsultationBooking create
   */
  export type ConsultationBookingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConsultationBooking
     */
    select?: ConsultationBookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConsultationBooking
     */
    omit?: ConsultationBookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultationBookingInclude<ExtArgs> | null
    /**
     * The data needed to create a ConsultationBooking.
     */
    data: XOR<ConsultationBookingCreateInput, ConsultationBookingUncheckedCreateInput>
  }

  /**
   * ConsultationBooking createMany
   */
  export type ConsultationBookingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ConsultationBookings.
     */
    data: ConsultationBookingCreateManyInput | ConsultationBookingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ConsultationBooking createManyAndReturn
   */
  export type ConsultationBookingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConsultationBooking
     */
    select?: ConsultationBookingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ConsultationBooking
     */
    omit?: ConsultationBookingOmit<ExtArgs> | null
    /**
     * The data used to create many ConsultationBookings.
     */
    data: ConsultationBookingCreateManyInput | ConsultationBookingCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultationBookingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ConsultationBooking update
   */
  export type ConsultationBookingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConsultationBooking
     */
    select?: ConsultationBookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConsultationBooking
     */
    omit?: ConsultationBookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultationBookingInclude<ExtArgs> | null
    /**
     * The data needed to update a ConsultationBooking.
     */
    data: XOR<ConsultationBookingUpdateInput, ConsultationBookingUncheckedUpdateInput>
    /**
     * Choose, which ConsultationBooking to update.
     */
    where: ConsultationBookingWhereUniqueInput
  }

  /**
   * ConsultationBooking updateMany
   */
  export type ConsultationBookingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ConsultationBookings.
     */
    data: XOR<ConsultationBookingUpdateManyMutationInput, ConsultationBookingUncheckedUpdateManyInput>
    /**
     * Filter which ConsultationBookings to update
     */
    where?: ConsultationBookingWhereInput
    /**
     * Limit how many ConsultationBookings to update.
     */
    limit?: number
  }

  /**
   * ConsultationBooking updateManyAndReturn
   */
  export type ConsultationBookingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConsultationBooking
     */
    select?: ConsultationBookingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ConsultationBooking
     */
    omit?: ConsultationBookingOmit<ExtArgs> | null
    /**
     * The data used to update ConsultationBookings.
     */
    data: XOR<ConsultationBookingUpdateManyMutationInput, ConsultationBookingUncheckedUpdateManyInput>
    /**
     * Filter which ConsultationBookings to update
     */
    where?: ConsultationBookingWhereInput
    /**
     * Limit how many ConsultationBookings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultationBookingIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ConsultationBooking upsert
   */
  export type ConsultationBookingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConsultationBooking
     */
    select?: ConsultationBookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConsultationBooking
     */
    omit?: ConsultationBookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultationBookingInclude<ExtArgs> | null
    /**
     * The filter to search for the ConsultationBooking to update in case it exists.
     */
    where: ConsultationBookingWhereUniqueInput
    /**
     * In case the ConsultationBooking found by the `where` argument doesn't exist, create a new ConsultationBooking with this data.
     */
    create: XOR<ConsultationBookingCreateInput, ConsultationBookingUncheckedCreateInput>
    /**
     * In case the ConsultationBooking was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ConsultationBookingUpdateInput, ConsultationBookingUncheckedUpdateInput>
  }

  /**
   * ConsultationBooking delete
   */
  export type ConsultationBookingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConsultationBooking
     */
    select?: ConsultationBookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConsultationBooking
     */
    omit?: ConsultationBookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultationBookingInclude<ExtArgs> | null
    /**
     * Filter which ConsultationBooking to delete.
     */
    where: ConsultationBookingWhereUniqueInput
  }

  /**
   * ConsultationBooking deleteMany
   */
  export type ConsultationBookingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ConsultationBookings to delete
     */
    where?: ConsultationBookingWhereInput
    /**
     * Limit how many ConsultationBookings to delete.
     */
    limit?: number
  }

  /**
   * ConsultationBooking.session
   */
  export type ConsultationBooking$sessionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConsultationSession
     */
    select?: ConsultationSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConsultationSession
     */
    omit?: ConsultationSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultationSessionInclude<ExtArgs> | null
    where?: ConsultationSessionWhereInput
  }

  /**
   * ConsultationBooking without action
   */
  export type ConsultationBookingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConsultationBooking
     */
    select?: ConsultationBookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConsultationBooking
     */
    omit?: ConsultationBookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultationBookingInclude<ExtArgs> | null
  }


  /**
   * Model ConsultationSession
   */

  export type AggregateConsultationSession = {
    _count: ConsultationSessionCountAggregateOutputType | null
    _min: ConsultationSessionMinAggregateOutputType | null
    _max: ConsultationSessionMaxAggregateOutputType | null
  }

  export type ConsultationSessionMinAggregateOutputType = {
    id: string | null
    lecturerId: string | null
    scheduledDate: Date | null
    startTime: string | null
    endTime: string | null
    status: string | null
    zoomLink: string | null
    notes: string | null
    confirmedAt: Date | null
    confirmedBy: string | null
    evaluationLink: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ConsultationSessionMaxAggregateOutputType = {
    id: string | null
    lecturerId: string | null
    scheduledDate: Date | null
    startTime: string | null
    endTime: string | null
    status: string | null
    zoomLink: string | null
    notes: string | null
    confirmedAt: Date | null
    confirmedBy: string | null
    evaluationLink: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ConsultationSessionCountAggregateOutputType = {
    id: number
    lecturerId: number
    scheduledDate: number
    startTime: number
    endTime: number
    status: number
    zoomLink: number
    notes: number
    confirmedAt: number
    confirmedBy: number
    evaluationLink: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ConsultationSessionMinAggregateInputType = {
    id?: true
    lecturerId?: true
    scheduledDate?: true
    startTime?: true
    endTime?: true
    status?: true
    zoomLink?: true
    notes?: true
    confirmedAt?: true
    confirmedBy?: true
    evaluationLink?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ConsultationSessionMaxAggregateInputType = {
    id?: true
    lecturerId?: true
    scheduledDate?: true
    startTime?: true
    endTime?: true
    status?: true
    zoomLink?: true
    notes?: true
    confirmedAt?: true
    confirmedBy?: true
    evaluationLink?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ConsultationSessionCountAggregateInputType = {
    id?: true
    lecturerId?: true
    scheduledDate?: true
    startTime?: true
    endTime?: true
    status?: true
    zoomLink?: true
    notes?: true
    confirmedAt?: true
    confirmedBy?: true
    evaluationLink?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ConsultationSessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ConsultationSession to aggregate.
     */
    where?: ConsultationSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ConsultationSessions to fetch.
     */
    orderBy?: ConsultationSessionOrderByWithRelationInput | ConsultationSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ConsultationSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ConsultationSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ConsultationSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ConsultationSessions
    **/
    _count?: true | ConsultationSessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ConsultationSessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ConsultationSessionMaxAggregateInputType
  }

  export type GetConsultationSessionAggregateType<T extends ConsultationSessionAggregateArgs> = {
        [P in keyof T & keyof AggregateConsultationSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateConsultationSession[P]>
      : GetScalarType<T[P], AggregateConsultationSession[P]>
  }




  export type ConsultationSessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConsultationSessionWhereInput
    orderBy?: ConsultationSessionOrderByWithAggregationInput | ConsultationSessionOrderByWithAggregationInput[]
    by: ConsultationSessionScalarFieldEnum[] | ConsultationSessionScalarFieldEnum
    having?: ConsultationSessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ConsultationSessionCountAggregateInputType | true
    _min?: ConsultationSessionMinAggregateInputType
    _max?: ConsultationSessionMaxAggregateInputType
  }

  export type ConsultationSessionGroupByOutputType = {
    id: string
    lecturerId: string
    scheduledDate: Date
    startTime: string
    endTime: string
    status: string
    zoomLink: string | null
    notes: string | null
    confirmedAt: Date | null
    confirmedBy: string | null
    evaluationLink: string | null
    createdAt: Date
    updatedAt: Date
    _count: ConsultationSessionCountAggregateOutputType | null
    _min: ConsultationSessionMinAggregateOutputType | null
    _max: ConsultationSessionMaxAggregateOutputType | null
  }

  type GetConsultationSessionGroupByPayload<T extends ConsultationSessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ConsultationSessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ConsultationSessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ConsultationSessionGroupByOutputType[P]>
            : GetScalarType<T[P], ConsultationSessionGroupByOutputType[P]>
        }
      >
    >


  export type ConsultationSessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    lecturerId?: boolean
    scheduledDate?: boolean
    startTime?: boolean
    endTime?: boolean
    status?: boolean
    zoomLink?: boolean
    notes?: boolean
    confirmedAt?: boolean
    confirmedBy?: boolean
    evaluationLink?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lecturer?: boolean | LecturerDefaultArgs<ExtArgs>
    bookings?: boolean | ConsultationSession$bookingsArgs<ExtArgs>
    _count?: boolean | ConsultationSessionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["consultationSession"]>

  export type ConsultationSessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    lecturerId?: boolean
    scheduledDate?: boolean
    startTime?: boolean
    endTime?: boolean
    status?: boolean
    zoomLink?: boolean
    notes?: boolean
    confirmedAt?: boolean
    confirmedBy?: boolean
    evaluationLink?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lecturer?: boolean | LecturerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["consultationSession"]>

  export type ConsultationSessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    lecturerId?: boolean
    scheduledDate?: boolean
    startTime?: boolean
    endTime?: boolean
    status?: boolean
    zoomLink?: boolean
    notes?: boolean
    confirmedAt?: boolean
    confirmedBy?: boolean
    evaluationLink?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lecturer?: boolean | LecturerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["consultationSession"]>

  export type ConsultationSessionSelectScalar = {
    id?: boolean
    lecturerId?: boolean
    scheduledDate?: boolean
    startTime?: boolean
    endTime?: boolean
    status?: boolean
    zoomLink?: boolean
    notes?: boolean
    confirmedAt?: boolean
    confirmedBy?: boolean
    evaluationLink?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ConsultationSessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "lecturerId" | "scheduledDate" | "startTime" | "endTime" | "status" | "zoomLink" | "notes" | "confirmedAt" | "confirmedBy" | "evaluationLink" | "createdAt" | "updatedAt", ExtArgs["result"]["consultationSession"]>
  export type ConsultationSessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lecturer?: boolean | LecturerDefaultArgs<ExtArgs>
    bookings?: boolean | ConsultationSession$bookingsArgs<ExtArgs>
    _count?: boolean | ConsultationSessionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ConsultationSessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lecturer?: boolean | LecturerDefaultArgs<ExtArgs>
  }
  export type ConsultationSessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lecturer?: boolean | LecturerDefaultArgs<ExtArgs>
  }

  export type $ConsultationSessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ConsultationSession"
    objects: {
      lecturer: Prisma.$LecturerPayload<ExtArgs>
      bookings: Prisma.$ConsultationBookingPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      lecturerId: string
      scheduledDate: Date
      startTime: string
      endTime: string
      status: string
      zoomLink: string | null
      notes: string | null
      confirmedAt: Date | null
      confirmedBy: string | null
      evaluationLink: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["consultationSession"]>
    composites: {}
  }

  type ConsultationSessionGetPayload<S extends boolean | null | undefined | ConsultationSessionDefaultArgs> = $Result.GetResult<Prisma.$ConsultationSessionPayload, S>

  type ConsultationSessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ConsultationSessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ConsultationSessionCountAggregateInputType | true
    }

  export interface ConsultationSessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ConsultationSession'], meta: { name: 'ConsultationSession' } }
    /**
     * Find zero or one ConsultationSession that matches the filter.
     * @param {ConsultationSessionFindUniqueArgs} args - Arguments to find a ConsultationSession
     * @example
     * // Get one ConsultationSession
     * const consultationSession = await prisma.consultationSession.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ConsultationSessionFindUniqueArgs>(args: SelectSubset<T, ConsultationSessionFindUniqueArgs<ExtArgs>>): Prisma__ConsultationSessionClient<$Result.GetResult<Prisma.$ConsultationSessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ConsultationSession that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ConsultationSessionFindUniqueOrThrowArgs} args - Arguments to find a ConsultationSession
     * @example
     * // Get one ConsultationSession
     * const consultationSession = await prisma.consultationSession.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ConsultationSessionFindUniqueOrThrowArgs>(args: SelectSubset<T, ConsultationSessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ConsultationSessionClient<$Result.GetResult<Prisma.$ConsultationSessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ConsultationSession that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultationSessionFindFirstArgs} args - Arguments to find a ConsultationSession
     * @example
     * // Get one ConsultationSession
     * const consultationSession = await prisma.consultationSession.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ConsultationSessionFindFirstArgs>(args?: SelectSubset<T, ConsultationSessionFindFirstArgs<ExtArgs>>): Prisma__ConsultationSessionClient<$Result.GetResult<Prisma.$ConsultationSessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ConsultationSession that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultationSessionFindFirstOrThrowArgs} args - Arguments to find a ConsultationSession
     * @example
     * // Get one ConsultationSession
     * const consultationSession = await prisma.consultationSession.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ConsultationSessionFindFirstOrThrowArgs>(args?: SelectSubset<T, ConsultationSessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__ConsultationSessionClient<$Result.GetResult<Prisma.$ConsultationSessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ConsultationSessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultationSessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ConsultationSessions
     * const consultationSessions = await prisma.consultationSession.findMany()
     * 
     * // Get first 10 ConsultationSessions
     * const consultationSessions = await prisma.consultationSession.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const consultationSessionWithIdOnly = await prisma.consultationSession.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ConsultationSessionFindManyArgs>(args?: SelectSubset<T, ConsultationSessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConsultationSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ConsultationSession.
     * @param {ConsultationSessionCreateArgs} args - Arguments to create a ConsultationSession.
     * @example
     * // Create one ConsultationSession
     * const ConsultationSession = await prisma.consultationSession.create({
     *   data: {
     *     // ... data to create a ConsultationSession
     *   }
     * })
     * 
     */
    create<T extends ConsultationSessionCreateArgs>(args: SelectSubset<T, ConsultationSessionCreateArgs<ExtArgs>>): Prisma__ConsultationSessionClient<$Result.GetResult<Prisma.$ConsultationSessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ConsultationSessions.
     * @param {ConsultationSessionCreateManyArgs} args - Arguments to create many ConsultationSessions.
     * @example
     * // Create many ConsultationSessions
     * const consultationSession = await prisma.consultationSession.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ConsultationSessionCreateManyArgs>(args?: SelectSubset<T, ConsultationSessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ConsultationSessions and returns the data saved in the database.
     * @param {ConsultationSessionCreateManyAndReturnArgs} args - Arguments to create many ConsultationSessions.
     * @example
     * // Create many ConsultationSessions
     * const consultationSession = await prisma.consultationSession.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ConsultationSessions and only return the `id`
     * const consultationSessionWithIdOnly = await prisma.consultationSession.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ConsultationSessionCreateManyAndReturnArgs>(args?: SelectSubset<T, ConsultationSessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConsultationSessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ConsultationSession.
     * @param {ConsultationSessionDeleteArgs} args - Arguments to delete one ConsultationSession.
     * @example
     * // Delete one ConsultationSession
     * const ConsultationSession = await prisma.consultationSession.delete({
     *   where: {
     *     // ... filter to delete one ConsultationSession
     *   }
     * })
     * 
     */
    delete<T extends ConsultationSessionDeleteArgs>(args: SelectSubset<T, ConsultationSessionDeleteArgs<ExtArgs>>): Prisma__ConsultationSessionClient<$Result.GetResult<Prisma.$ConsultationSessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ConsultationSession.
     * @param {ConsultationSessionUpdateArgs} args - Arguments to update one ConsultationSession.
     * @example
     * // Update one ConsultationSession
     * const consultationSession = await prisma.consultationSession.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ConsultationSessionUpdateArgs>(args: SelectSubset<T, ConsultationSessionUpdateArgs<ExtArgs>>): Prisma__ConsultationSessionClient<$Result.GetResult<Prisma.$ConsultationSessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ConsultationSessions.
     * @param {ConsultationSessionDeleteManyArgs} args - Arguments to filter ConsultationSessions to delete.
     * @example
     * // Delete a few ConsultationSessions
     * const { count } = await prisma.consultationSession.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ConsultationSessionDeleteManyArgs>(args?: SelectSubset<T, ConsultationSessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ConsultationSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultationSessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ConsultationSessions
     * const consultationSession = await prisma.consultationSession.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ConsultationSessionUpdateManyArgs>(args: SelectSubset<T, ConsultationSessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ConsultationSessions and returns the data updated in the database.
     * @param {ConsultationSessionUpdateManyAndReturnArgs} args - Arguments to update many ConsultationSessions.
     * @example
     * // Update many ConsultationSessions
     * const consultationSession = await prisma.consultationSession.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ConsultationSessions and only return the `id`
     * const consultationSessionWithIdOnly = await prisma.consultationSession.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ConsultationSessionUpdateManyAndReturnArgs>(args: SelectSubset<T, ConsultationSessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConsultationSessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ConsultationSession.
     * @param {ConsultationSessionUpsertArgs} args - Arguments to update or create a ConsultationSession.
     * @example
     * // Update or create a ConsultationSession
     * const consultationSession = await prisma.consultationSession.upsert({
     *   create: {
     *     // ... data to create a ConsultationSession
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ConsultationSession we want to update
     *   }
     * })
     */
    upsert<T extends ConsultationSessionUpsertArgs>(args: SelectSubset<T, ConsultationSessionUpsertArgs<ExtArgs>>): Prisma__ConsultationSessionClient<$Result.GetResult<Prisma.$ConsultationSessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ConsultationSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultationSessionCountArgs} args - Arguments to filter ConsultationSessions to count.
     * @example
     * // Count the number of ConsultationSessions
     * const count = await prisma.consultationSession.count({
     *   where: {
     *     // ... the filter for the ConsultationSessions we want to count
     *   }
     * })
    **/
    count<T extends ConsultationSessionCountArgs>(
      args?: Subset<T, ConsultationSessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ConsultationSessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ConsultationSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultationSessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ConsultationSessionAggregateArgs>(args: Subset<T, ConsultationSessionAggregateArgs>): Prisma.PrismaPromise<GetConsultationSessionAggregateType<T>>

    /**
     * Group by ConsultationSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultationSessionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ConsultationSessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ConsultationSessionGroupByArgs['orderBy'] }
        : { orderBy?: ConsultationSessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ConsultationSessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConsultationSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ConsultationSession model
   */
  readonly fields: ConsultationSessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ConsultationSession.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ConsultationSessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    lecturer<T extends LecturerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LecturerDefaultArgs<ExtArgs>>): Prisma__LecturerClient<$Result.GetResult<Prisma.$LecturerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    bookings<T extends ConsultationSession$bookingsArgs<ExtArgs> = {}>(args?: Subset<T, ConsultationSession$bookingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConsultationBookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ConsultationSession model
   */
  interface ConsultationSessionFieldRefs {
    readonly id: FieldRef<"ConsultationSession", 'String'>
    readonly lecturerId: FieldRef<"ConsultationSession", 'String'>
    readonly scheduledDate: FieldRef<"ConsultationSession", 'DateTime'>
    readonly startTime: FieldRef<"ConsultationSession", 'String'>
    readonly endTime: FieldRef<"ConsultationSession", 'String'>
    readonly status: FieldRef<"ConsultationSession", 'String'>
    readonly zoomLink: FieldRef<"ConsultationSession", 'String'>
    readonly notes: FieldRef<"ConsultationSession", 'String'>
    readonly confirmedAt: FieldRef<"ConsultationSession", 'DateTime'>
    readonly confirmedBy: FieldRef<"ConsultationSession", 'String'>
    readonly evaluationLink: FieldRef<"ConsultationSession", 'String'>
    readonly createdAt: FieldRef<"ConsultationSession", 'DateTime'>
    readonly updatedAt: FieldRef<"ConsultationSession", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ConsultationSession findUnique
   */
  export type ConsultationSessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConsultationSession
     */
    select?: ConsultationSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConsultationSession
     */
    omit?: ConsultationSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultationSessionInclude<ExtArgs> | null
    /**
     * Filter, which ConsultationSession to fetch.
     */
    where: ConsultationSessionWhereUniqueInput
  }

  /**
   * ConsultationSession findUniqueOrThrow
   */
  export type ConsultationSessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConsultationSession
     */
    select?: ConsultationSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConsultationSession
     */
    omit?: ConsultationSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultationSessionInclude<ExtArgs> | null
    /**
     * Filter, which ConsultationSession to fetch.
     */
    where: ConsultationSessionWhereUniqueInput
  }

  /**
   * ConsultationSession findFirst
   */
  export type ConsultationSessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConsultationSession
     */
    select?: ConsultationSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConsultationSession
     */
    omit?: ConsultationSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultationSessionInclude<ExtArgs> | null
    /**
     * Filter, which ConsultationSession to fetch.
     */
    where?: ConsultationSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ConsultationSessions to fetch.
     */
    orderBy?: ConsultationSessionOrderByWithRelationInput | ConsultationSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ConsultationSessions.
     */
    cursor?: ConsultationSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ConsultationSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ConsultationSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ConsultationSessions.
     */
    distinct?: ConsultationSessionScalarFieldEnum | ConsultationSessionScalarFieldEnum[]
  }

  /**
   * ConsultationSession findFirstOrThrow
   */
  export type ConsultationSessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConsultationSession
     */
    select?: ConsultationSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConsultationSession
     */
    omit?: ConsultationSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultationSessionInclude<ExtArgs> | null
    /**
     * Filter, which ConsultationSession to fetch.
     */
    where?: ConsultationSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ConsultationSessions to fetch.
     */
    orderBy?: ConsultationSessionOrderByWithRelationInput | ConsultationSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ConsultationSessions.
     */
    cursor?: ConsultationSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ConsultationSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ConsultationSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ConsultationSessions.
     */
    distinct?: ConsultationSessionScalarFieldEnum | ConsultationSessionScalarFieldEnum[]
  }

  /**
   * ConsultationSession findMany
   */
  export type ConsultationSessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConsultationSession
     */
    select?: ConsultationSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConsultationSession
     */
    omit?: ConsultationSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultationSessionInclude<ExtArgs> | null
    /**
     * Filter, which ConsultationSessions to fetch.
     */
    where?: ConsultationSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ConsultationSessions to fetch.
     */
    orderBy?: ConsultationSessionOrderByWithRelationInput | ConsultationSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ConsultationSessions.
     */
    cursor?: ConsultationSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ConsultationSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ConsultationSessions.
     */
    skip?: number
    distinct?: ConsultationSessionScalarFieldEnum | ConsultationSessionScalarFieldEnum[]
  }

  /**
   * ConsultationSession create
   */
  export type ConsultationSessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConsultationSession
     */
    select?: ConsultationSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConsultationSession
     */
    omit?: ConsultationSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultationSessionInclude<ExtArgs> | null
    /**
     * The data needed to create a ConsultationSession.
     */
    data: XOR<ConsultationSessionCreateInput, ConsultationSessionUncheckedCreateInput>
  }

  /**
   * ConsultationSession createMany
   */
  export type ConsultationSessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ConsultationSessions.
     */
    data: ConsultationSessionCreateManyInput | ConsultationSessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ConsultationSession createManyAndReturn
   */
  export type ConsultationSessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConsultationSession
     */
    select?: ConsultationSessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ConsultationSession
     */
    omit?: ConsultationSessionOmit<ExtArgs> | null
    /**
     * The data used to create many ConsultationSessions.
     */
    data: ConsultationSessionCreateManyInput | ConsultationSessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultationSessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ConsultationSession update
   */
  export type ConsultationSessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConsultationSession
     */
    select?: ConsultationSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConsultationSession
     */
    omit?: ConsultationSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultationSessionInclude<ExtArgs> | null
    /**
     * The data needed to update a ConsultationSession.
     */
    data: XOR<ConsultationSessionUpdateInput, ConsultationSessionUncheckedUpdateInput>
    /**
     * Choose, which ConsultationSession to update.
     */
    where: ConsultationSessionWhereUniqueInput
  }

  /**
   * ConsultationSession updateMany
   */
  export type ConsultationSessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ConsultationSessions.
     */
    data: XOR<ConsultationSessionUpdateManyMutationInput, ConsultationSessionUncheckedUpdateManyInput>
    /**
     * Filter which ConsultationSessions to update
     */
    where?: ConsultationSessionWhereInput
    /**
     * Limit how many ConsultationSessions to update.
     */
    limit?: number
  }

  /**
   * ConsultationSession updateManyAndReturn
   */
  export type ConsultationSessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConsultationSession
     */
    select?: ConsultationSessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ConsultationSession
     */
    omit?: ConsultationSessionOmit<ExtArgs> | null
    /**
     * The data used to update ConsultationSessions.
     */
    data: XOR<ConsultationSessionUpdateManyMutationInput, ConsultationSessionUncheckedUpdateManyInput>
    /**
     * Filter which ConsultationSessions to update
     */
    where?: ConsultationSessionWhereInput
    /**
     * Limit how many ConsultationSessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultationSessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ConsultationSession upsert
   */
  export type ConsultationSessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConsultationSession
     */
    select?: ConsultationSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConsultationSession
     */
    omit?: ConsultationSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultationSessionInclude<ExtArgs> | null
    /**
     * The filter to search for the ConsultationSession to update in case it exists.
     */
    where: ConsultationSessionWhereUniqueInput
    /**
     * In case the ConsultationSession found by the `where` argument doesn't exist, create a new ConsultationSession with this data.
     */
    create: XOR<ConsultationSessionCreateInput, ConsultationSessionUncheckedCreateInput>
    /**
     * In case the ConsultationSession was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ConsultationSessionUpdateInput, ConsultationSessionUncheckedUpdateInput>
  }

  /**
   * ConsultationSession delete
   */
  export type ConsultationSessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConsultationSession
     */
    select?: ConsultationSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConsultationSession
     */
    omit?: ConsultationSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultationSessionInclude<ExtArgs> | null
    /**
     * Filter which ConsultationSession to delete.
     */
    where: ConsultationSessionWhereUniqueInput
  }

  /**
   * ConsultationSession deleteMany
   */
  export type ConsultationSessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ConsultationSessions to delete
     */
    where?: ConsultationSessionWhereInput
    /**
     * Limit how many ConsultationSessions to delete.
     */
    limit?: number
  }

  /**
   * ConsultationSession.bookings
   */
  export type ConsultationSession$bookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConsultationBooking
     */
    select?: ConsultationBookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConsultationBooking
     */
    omit?: ConsultationBookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultationBookingInclude<ExtArgs> | null
    where?: ConsultationBookingWhereInput
    orderBy?: ConsultationBookingOrderByWithRelationInput | ConsultationBookingOrderByWithRelationInput[]
    cursor?: ConsultationBookingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ConsultationBookingScalarFieldEnum | ConsultationBookingScalarFieldEnum[]
  }

  /**
   * ConsultationSession without action
   */
  export type ConsultationSessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConsultationSession
     */
    select?: ConsultationSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConsultationSession
     */
    omit?: ConsultationSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultationSessionInclude<ExtArgs> | null
  }


  /**
   * Model Seminar
   */

  export type AggregateSeminar = {
    _count: SeminarCountAggregateOutputType | null
    _avg: SeminarAvgAggregateOutputType | null
    _sum: SeminarSumAggregateOutputType | null
    _min: SeminarMinAggregateOutputType | null
    _max: SeminarMaxAggregateOutputType | null
  }

  export type SeminarAvgAggregateOutputType = {
    quota: number | null
  }

  export type SeminarSumAggregateOutputType = {
    quota: number | null
  }

  export type SeminarMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    host: string | null
    hostId: string | null
    eventDate: Date | null
    eventTime: string | null
    location: string | null
    zoomLink: string | null
    posterUrl: string | null
    status: $Enums.SeminarStatus | null
    quota: number | null
    category: $Enums.SeminarCategory | null
    createdBy: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SeminarMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    host: string | null
    hostId: string | null
    eventDate: Date | null
    eventTime: string | null
    location: string | null
    zoomLink: string | null
    posterUrl: string | null
    status: $Enums.SeminarStatus | null
    quota: number | null
    category: $Enums.SeminarCategory | null
    createdBy: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SeminarCountAggregateOutputType = {
    id: number
    title: number
    description: number
    host: number
    hostId: number
    eventDate: number
    eventTime: number
    location: number
    zoomLink: number
    posterUrl: number
    status: number
    quota: number
    category: number
    targetAudience: number
    createdBy: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SeminarAvgAggregateInputType = {
    quota?: true
  }

  export type SeminarSumAggregateInputType = {
    quota?: true
  }

  export type SeminarMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    host?: true
    hostId?: true
    eventDate?: true
    eventTime?: true
    location?: true
    zoomLink?: true
    posterUrl?: true
    status?: true
    quota?: true
    category?: true
    createdBy?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SeminarMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    host?: true
    hostId?: true
    eventDate?: true
    eventTime?: true
    location?: true
    zoomLink?: true
    posterUrl?: true
    status?: true
    quota?: true
    category?: true
    createdBy?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SeminarCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    host?: true
    hostId?: true
    eventDate?: true
    eventTime?: true
    location?: true
    zoomLink?: true
    posterUrl?: true
    status?: true
    quota?: true
    category?: true
    targetAudience?: true
    createdBy?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SeminarAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Seminar to aggregate.
     */
    where?: SeminarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Seminars to fetch.
     */
    orderBy?: SeminarOrderByWithRelationInput | SeminarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SeminarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Seminars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Seminars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Seminars
    **/
    _count?: true | SeminarCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SeminarAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SeminarSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SeminarMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SeminarMaxAggregateInputType
  }

  export type GetSeminarAggregateType<T extends SeminarAggregateArgs> = {
        [P in keyof T & keyof AggregateSeminar]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSeminar[P]>
      : GetScalarType<T[P], AggregateSeminar[P]>
  }




  export type SeminarGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SeminarWhereInput
    orderBy?: SeminarOrderByWithAggregationInput | SeminarOrderByWithAggregationInput[]
    by: SeminarScalarFieldEnum[] | SeminarScalarFieldEnum
    having?: SeminarScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SeminarCountAggregateInputType | true
    _avg?: SeminarAvgAggregateInputType
    _sum?: SeminarSumAggregateInputType
    _min?: SeminarMinAggregateInputType
    _max?: SeminarMaxAggregateInputType
  }

  export type SeminarGroupByOutputType = {
    id: string
    title: string
    description: string
    host: string
    hostId: string | null
    eventDate: Date
    eventTime: string
    location: string
    zoomLink: string | null
    posterUrl: string | null
    status: $Enums.SeminarStatus
    quota: number
    category: $Enums.SeminarCategory
    targetAudience: string[]
    createdBy: string
    createdAt: Date
    updatedAt: Date
    _count: SeminarCountAggregateOutputType | null
    _avg: SeminarAvgAggregateOutputType | null
    _sum: SeminarSumAggregateOutputType | null
    _min: SeminarMinAggregateOutputType | null
    _max: SeminarMaxAggregateOutputType | null
  }

  type GetSeminarGroupByPayload<T extends SeminarGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SeminarGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SeminarGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SeminarGroupByOutputType[P]>
            : GetScalarType<T[P], SeminarGroupByOutputType[P]>
        }
      >
    >


  export type SeminarSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    host?: boolean
    hostId?: boolean
    eventDate?: boolean
    eventTime?: boolean
    location?: boolean
    zoomLink?: boolean
    posterUrl?: boolean
    status?: boolean
    quota?: boolean
    category?: boolean
    targetAudience?: boolean
    createdBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    creator?: boolean | UserDefaultArgs<ExtArgs>
    lecturer?: boolean | Seminar$lecturerArgs<ExtArgs>
    registrations?: boolean | Seminar$registrationsArgs<ExtArgs>
    _count?: boolean | SeminarCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["seminar"]>

  export type SeminarSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    host?: boolean
    hostId?: boolean
    eventDate?: boolean
    eventTime?: boolean
    location?: boolean
    zoomLink?: boolean
    posterUrl?: boolean
    status?: boolean
    quota?: boolean
    category?: boolean
    targetAudience?: boolean
    createdBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    creator?: boolean | UserDefaultArgs<ExtArgs>
    lecturer?: boolean | Seminar$lecturerArgs<ExtArgs>
  }, ExtArgs["result"]["seminar"]>

  export type SeminarSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    host?: boolean
    hostId?: boolean
    eventDate?: boolean
    eventTime?: boolean
    location?: boolean
    zoomLink?: boolean
    posterUrl?: boolean
    status?: boolean
    quota?: boolean
    category?: boolean
    targetAudience?: boolean
    createdBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    creator?: boolean | UserDefaultArgs<ExtArgs>
    lecturer?: boolean | Seminar$lecturerArgs<ExtArgs>
  }, ExtArgs["result"]["seminar"]>

  export type SeminarSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    host?: boolean
    hostId?: boolean
    eventDate?: boolean
    eventTime?: boolean
    location?: boolean
    zoomLink?: boolean
    posterUrl?: boolean
    status?: boolean
    quota?: boolean
    category?: boolean
    targetAudience?: boolean
    createdBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SeminarOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "host" | "hostId" | "eventDate" | "eventTime" | "location" | "zoomLink" | "posterUrl" | "status" | "quota" | "category" | "targetAudience" | "createdBy" | "createdAt" | "updatedAt", ExtArgs["result"]["seminar"]>
  export type SeminarInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    creator?: boolean | UserDefaultArgs<ExtArgs>
    lecturer?: boolean | Seminar$lecturerArgs<ExtArgs>
    registrations?: boolean | Seminar$registrationsArgs<ExtArgs>
    _count?: boolean | SeminarCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SeminarIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    creator?: boolean | UserDefaultArgs<ExtArgs>
    lecturer?: boolean | Seminar$lecturerArgs<ExtArgs>
  }
  export type SeminarIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    creator?: boolean | UserDefaultArgs<ExtArgs>
    lecturer?: boolean | Seminar$lecturerArgs<ExtArgs>
  }

  export type $SeminarPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Seminar"
    objects: {
      creator: Prisma.$UserPayload<ExtArgs>
      lecturer: Prisma.$LecturerPayload<ExtArgs> | null
      registrations: Prisma.$SeminarRegistrationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string
      host: string
      hostId: string | null
      eventDate: Date
      eventTime: string
      location: string
      zoomLink: string | null
      posterUrl: string | null
      status: $Enums.SeminarStatus
      quota: number
      category: $Enums.SeminarCategory
      targetAudience: string[]
      createdBy: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["seminar"]>
    composites: {}
  }

  type SeminarGetPayload<S extends boolean | null | undefined | SeminarDefaultArgs> = $Result.GetResult<Prisma.$SeminarPayload, S>

  type SeminarCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SeminarFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SeminarCountAggregateInputType | true
    }

  export interface SeminarDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Seminar'], meta: { name: 'Seminar' } }
    /**
     * Find zero or one Seminar that matches the filter.
     * @param {SeminarFindUniqueArgs} args - Arguments to find a Seminar
     * @example
     * // Get one Seminar
     * const seminar = await prisma.seminar.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SeminarFindUniqueArgs>(args: SelectSubset<T, SeminarFindUniqueArgs<ExtArgs>>): Prisma__SeminarClient<$Result.GetResult<Prisma.$SeminarPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Seminar that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SeminarFindUniqueOrThrowArgs} args - Arguments to find a Seminar
     * @example
     * // Get one Seminar
     * const seminar = await prisma.seminar.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SeminarFindUniqueOrThrowArgs>(args: SelectSubset<T, SeminarFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SeminarClient<$Result.GetResult<Prisma.$SeminarPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Seminar that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeminarFindFirstArgs} args - Arguments to find a Seminar
     * @example
     * // Get one Seminar
     * const seminar = await prisma.seminar.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SeminarFindFirstArgs>(args?: SelectSubset<T, SeminarFindFirstArgs<ExtArgs>>): Prisma__SeminarClient<$Result.GetResult<Prisma.$SeminarPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Seminar that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeminarFindFirstOrThrowArgs} args - Arguments to find a Seminar
     * @example
     * // Get one Seminar
     * const seminar = await prisma.seminar.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SeminarFindFirstOrThrowArgs>(args?: SelectSubset<T, SeminarFindFirstOrThrowArgs<ExtArgs>>): Prisma__SeminarClient<$Result.GetResult<Prisma.$SeminarPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Seminars that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeminarFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Seminars
     * const seminars = await prisma.seminar.findMany()
     * 
     * // Get first 10 Seminars
     * const seminars = await prisma.seminar.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const seminarWithIdOnly = await prisma.seminar.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SeminarFindManyArgs>(args?: SelectSubset<T, SeminarFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SeminarPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Seminar.
     * @param {SeminarCreateArgs} args - Arguments to create a Seminar.
     * @example
     * // Create one Seminar
     * const Seminar = await prisma.seminar.create({
     *   data: {
     *     // ... data to create a Seminar
     *   }
     * })
     * 
     */
    create<T extends SeminarCreateArgs>(args: SelectSubset<T, SeminarCreateArgs<ExtArgs>>): Prisma__SeminarClient<$Result.GetResult<Prisma.$SeminarPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Seminars.
     * @param {SeminarCreateManyArgs} args - Arguments to create many Seminars.
     * @example
     * // Create many Seminars
     * const seminar = await prisma.seminar.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SeminarCreateManyArgs>(args?: SelectSubset<T, SeminarCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Seminars and returns the data saved in the database.
     * @param {SeminarCreateManyAndReturnArgs} args - Arguments to create many Seminars.
     * @example
     * // Create many Seminars
     * const seminar = await prisma.seminar.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Seminars and only return the `id`
     * const seminarWithIdOnly = await prisma.seminar.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SeminarCreateManyAndReturnArgs>(args?: SelectSubset<T, SeminarCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SeminarPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Seminar.
     * @param {SeminarDeleteArgs} args - Arguments to delete one Seminar.
     * @example
     * // Delete one Seminar
     * const Seminar = await prisma.seminar.delete({
     *   where: {
     *     // ... filter to delete one Seminar
     *   }
     * })
     * 
     */
    delete<T extends SeminarDeleteArgs>(args: SelectSubset<T, SeminarDeleteArgs<ExtArgs>>): Prisma__SeminarClient<$Result.GetResult<Prisma.$SeminarPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Seminar.
     * @param {SeminarUpdateArgs} args - Arguments to update one Seminar.
     * @example
     * // Update one Seminar
     * const seminar = await prisma.seminar.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SeminarUpdateArgs>(args: SelectSubset<T, SeminarUpdateArgs<ExtArgs>>): Prisma__SeminarClient<$Result.GetResult<Prisma.$SeminarPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Seminars.
     * @param {SeminarDeleteManyArgs} args - Arguments to filter Seminars to delete.
     * @example
     * // Delete a few Seminars
     * const { count } = await prisma.seminar.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SeminarDeleteManyArgs>(args?: SelectSubset<T, SeminarDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Seminars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeminarUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Seminars
     * const seminar = await prisma.seminar.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SeminarUpdateManyArgs>(args: SelectSubset<T, SeminarUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Seminars and returns the data updated in the database.
     * @param {SeminarUpdateManyAndReturnArgs} args - Arguments to update many Seminars.
     * @example
     * // Update many Seminars
     * const seminar = await prisma.seminar.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Seminars and only return the `id`
     * const seminarWithIdOnly = await prisma.seminar.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SeminarUpdateManyAndReturnArgs>(args: SelectSubset<T, SeminarUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SeminarPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Seminar.
     * @param {SeminarUpsertArgs} args - Arguments to update or create a Seminar.
     * @example
     * // Update or create a Seminar
     * const seminar = await prisma.seminar.upsert({
     *   create: {
     *     // ... data to create a Seminar
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Seminar we want to update
     *   }
     * })
     */
    upsert<T extends SeminarUpsertArgs>(args: SelectSubset<T, SeminarUpsertArgs<ExtArgs>>): Prisma__SeminarClient<$Result.GetResult<Prisma.$SeminarPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Seminars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeminarCountArgs} args - Arguments to filter Seminars to count.
     * @example
     * // Count the number of Seminars
     * const count = await prisma.seminar.count({
     *   where: {
     *     // ... the filter for the Seminars we want to count
     *   }
     * })
    **/
    count<T extends SeminarCountArgs>(
      args?: Subset<T, SeminarCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SeminarCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Seminar.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeminarAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SeminarAggregateArgs>(args: Subset<T, SeminarAggregateArgs>): Prisma.PrismaPromise<GetSeminarAggregateType<T>>

    /**
     * Group by Seminar.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeminarGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SeminarGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SeminarGroupByArgs['orderBy'] }
        : { orderBy?: SeminarGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SeminarGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSeminarGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Seminar model
   */
  readonly fields: SeminarFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Seminar.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SeminarClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    creator<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    lecturer<T extends Seminar$lecturerArgs<ExtArgs> = {}>(args?: Subset<T, Seminar$lecturerArgs<ExtArgs>>): Prisma__LecturerClient<$Result.GetResult<Prisma.$LecturerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    registrations<T extends Seminar$registrationsArgs<ExtArgs> = {}>(args?: Subset<T, Seminar$registrationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SeminarRegistrationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Seminar model
   */
  interface SeminarFieldRefs {
    readonly id: FieldRef<"Seminar", 'String'>
    readonly title: FieldRef<"Seminar", 'String'>
    readonly description: FieldRef<"Seminar", 'String'>
    readonly host: FieldRef<"Seminar", 'String'>
    readonly hostId: FieldRef<"Seminar", 'String'>
    readonly eventDate: FieldRef<"Seminar", 'DateTime'>
    readonly eventTime: FieldRef<"Seminar", 'String'>
    readonly location: FieldRef<"Seminar", 'String'>
    readonly zoomLink: FieldRef<"Seminar", 'String'>
    readonly posterUrl: FieldRef<"Seminar", 'String'>
    readonly status: FieldRef<"Seminar", 'SeminarStatus'>
    readonly quota: FieldRef<"Seminar", 'Int'>
    readonly category: FieldRef<"Seminar", 'SeminarCategory'>
    readonly targetAudience: FieldRef<"Seminar", 'String[]'>
    readonly createdBy: FieldRef<"Seminar", 'String'>
    readonly createdAt: FieldRef<"Seminar", 'DateTime'>
    readonly updatedAt: FieldRef<"Seminar", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Seminar findUnique
   */
  export type SeminarFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seminar
     */
    select?: SeminarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seminar
     */
    omit?: SeminarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeminarInclude<ExtArgs> | null
    /**
     * Filter, which Seminar to fetch.
     */
    where: SeminarWhereUniqueInput
  }

  /**
   * Seminar findUniqueOrThrow
   */
  export type SeminarFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seminar
     */
    select?: SeminarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seminar
     */
    omit?: SeminarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeminarInclude<ExtArgs> | null
    /**
     * Filter, which Seminar to fetch.
     */
    where: SeminarWhereUniqueInput
  }

  /**
   * Seminar findFirst
   */
  export type SeminarFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seminar
     */
    select?: SeminarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seminar
     */
    omit?: SeminarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeminarInclude<ExtArgs> | null
    /**
     * Filter, which Seminar to fetch.
     */
    where?: SeminarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Seminars to fetch.
     */
    orderBy?: SeminarOrderByWithRelationInput | SeminarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Seminars.
     */
    cursor?: SeminarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Seminars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Seminars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Seminars.
     */
    distinct?: SeminarScalarFieldEnum | SeminarScalarFieldEnum[]
  }

  /**
   * Seminar findFirstOrThrow
   */
  export type SeminarFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seminar
     */
    select?: SeminarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seminar
     */
    omit?: SeminarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeminarInclude<ExtArgs> | null
    /**
     * Filter, which Seminar to fetch.
     */
    where?: SeminarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Seminars to fetch.
     */
    orderBy?: SeminarOrderByWithRelationInput | SeminarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Seminars.
     */
    cursor?: SeminarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Seminars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Seminars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Seminars.
     */
    distinct?: SeminarScalarFieldEnum | SeminarScalarFieldEnum[]
  }

  /**
   * Seminar findMany
   */
  export type SeminarFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seminar
     */
    select?: SeminarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seminar
     */
    omit?: SeminarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeminarInclude<ExtArgs> | null
    /**
     * Filter, which Seminars to fetch.
     */
    where?: SeminarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Seminars to fetch.
     */
    orderBy?: SeminarOrderByWithRelationInput | SeminarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Seminars.
     */
    cursor?: SeminarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Seminars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Seminars.
     */
    skip?: number
    distinct?: SeminarScalarFieldEnum | SeminarScalarFieldEnum[]
  }

  /**
   * Seminar create
   */
  export type SeminarCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seminar
     */
    select?: SeminarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seminar
     */
    omit?: SeminarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeminarInclude<ExtArgs> | null
    /**
     * The data needed to create a Seminar.
     */
    data: XOR<SeminarCreateInput, SeminarUncheckedCreateInput>
  }

  /**
   * Seminar createMany
   */
  export type SeminarCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Seminars.
     */
    data: SeminarCreateManyInput | SeminarCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Seminar createManyAndReturn
   */
  export type SeminarCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seminar
     */
    select?: SeminarSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Seminar
     */
    omit?: SeminarOmit<ExtArgs> | null
    /**
     * The data used to create many Seminars.
     */
    data: SeminarCreateManyInput | SeminarCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeminarIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Seminar update
   */
  export type SeminarUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seminar
     */
    select?: SeminarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seminar
     */
    omit?: SeminarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeminarInclude<ExtArgs> | null
    /**
     * The data needed to update a Seminar.
     */
    data: XOR<SeminarUpdateInput, SeminarUncheckedUpdateInput>
    /**
     * Choose, which Seminar to update.
     */
    where: SeminarWhereUniqueInput
  }

  /**
   * Seminar updateMany
   */
  export type SeminarUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Seminars.
     */
    data: XOR<SeminarUpdateManyMutationInput, SeminarUncheckedUpdateManyInput>
    /**
     * Filter which Seminars to update
     */
    where?: SeminarWhereInput
    /**
     * Limit how many Seminars to update.
     */
    limit?: number
  }

  /**
   * Seminar updateManyAndReturn
   */
  export type SeminarUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seminar
     */
    select?: SeminarSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Seminar
     */
    omit?: SeminarOmit<ExtArgs> | null
    /**
     * The data used to update Seminars.
     */
    data: XOR<SeminarUpdateManyMutationInput, SeminarUncheckedUpdateManyInput>
    /**
     * Filter which Seminars to update
     */
    where?: SeminarWhereInput
    /**
     * Limit how many Seminars to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeminarIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Seminar upsert
   */
  export type SeminarUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seminar
     */
    select?: SeminarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seminar
     */
    omit?: SeminarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeminarInclude<ExtArgs> | null
    /**
     * The filter to search for the Seminar to update in case it exists.
     */
    where: SeminarWhereUniqueInput
    /**
     * In case the Seminar found by the `where` argument doesn't exist, create a new Seminar with this data.
     */
    create: XOR<SeminarCreateInput, SeminarUncheckedCreateInput>
    /**
     * In case the Seminar was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SeminarUpdateInput, SeminarUncheckedUpdateInput>
  }

  /**
   * Seminar delete
   */
  export type SeminarDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seminar
     */
    select?: SeminarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seminar
     */
    omit?: SeminarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeminarInclude<ExtArgs> | null
    /**
     * Filter which Seminar to delete.
     */
    where: SeminarWhereUniqueInput
  }

  /**
   * Seminar deleteMany
   */
  export type SeminarDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Seminars to delete
     */
    where?: SeminarWhereInput
    /**
     * Limit how many Seminars to delete.
     */
    limit?: number
  }

  /**
   * Seminar.lecturer
   */
  export type Seminar$lecturerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lecturer
     */
    select?: LecturerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lecturer
     */
    omit?: LecturerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LecturerInclude<ExtArgs> | null
    where?: LecturerWhereInput
  }

  /**
   * Seminar.registrations
   */
  export type Seminar$registrationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeminarRegistration
     */
    select?: SeminarRegistrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeminarRegistration
     */
    omit?: SeminarRegistrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeminarRegistrationInclude<ExtArgs> | null
    where?: SeminarRegistrationWhereInput
    orderBy?: SeminarRegistrationOrderByWithRelationInput | SeminarRegistrationOrderByWithRelationInput[]
    cursor?: SeminarRegistrationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SeminarRegistrationScalarFieldEnum | SeminarRegistrationScalarFieldEnum[]
  }

  /**
   * Seminar without action
   */
  export type SeminarDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seminar
     */
    select?: SeminarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seminar
     */
    omit?: SeminarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeminarInclude<ExtArgs> | null
  }


  /**
   * Model SeminarRegistration
   */

  export type AggregateSeminarRegistration = {
    _count: SeminarRegistrationCountAggregateOutputType | null
    _min: SeminarRegistrationMinAggregateOutputType | null
    _max: SeminarRegistrationMaxAggregateOutputType | null
  }

  export type SeminarRegistrationMinAggregateOutputType = {
    id: string | null
    seminarId: string | null
    userId: string | null
    createdAt: Date | null
  }

  export type SeminarRegistrationMaxAggregateOutputType = {
    id: string | null
    seminarId: string | null
    userId: string | null
    createdAt: Date | null
  }

  export type SeminarRegistrationCountAggregateOutputType = {
    id: number
    seminarId: number
    userId: number
    createdAt: number
    _all: number
  }


  export type SeminarRegistrationMinAggregateInputType = {
    id?: true
    seminarId?: true
    userId?: true
    createdAt?: true
  }

  export type SeminarRegistrationMaxAggregateInputType = {
    id?: true
    seminarId?: true
    userId?: true
    createdAt?: true
  }

  export type SeminarRegistrationCountAggregateInputType = {
    id?: true
    seminarId?: true
    userId?: true
    createdAt?: true
    _all?: true
  }

  export type SeminarRegistrationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SeminarRegistration to aggregate.
     */
    where?: SeminarRegistrationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SeminarRegistrations to fetch.
     */
    orderBy?: SeminarRegistrationOrderByWithRelationInput | SeminarRegistrationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SeminarRegistrationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SeminarRegistrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SeminarRegistrations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SeminarRegistrations
    **/
    _count?: true | SeminarRegistrationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SeminarRegistrationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SeminarRegistrationMaxAggregateInputType
  }

  export type GetSeminarRegistrationAggregateType<T extends SeminarRegistrationAggregateArgs> = {
        [P in keyof T & keyof AggregateSeminarRegistration]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSeminarRegistration[P]>
      : GetScalarType<T[P], AggregateSeminarRegistration[P]>
  }




  export type SeminarRegistrationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SeminarRegistrationWhereInput
    orderBy?: SeminarRegistrationOrderByWithAggregationInput | SeminarRegistrationOrderByWithAggregationInput[]
    by: SeminarRegistrationScalarFieldEnum[] | SeminarRegistrationScalarFieldEnum
    having?: SeminarRegistrationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SeminarRegistrationCountAggregateInputType | true
    _min?: SeminarRegistrationMinAggregateInputType
    _max?: SeminarRegistrationMaxAggregateInputType
  }

  export type SeminarRegistrationGroupByOutputType = {
    id: string
    seminarId: string
    userId: string
    createdAt: Date
    _count: SeminarRegistrationCountAggregateOutputType | null
    _min: SeminarRegistrationMinAggregateOutputType | null
    _max: SeminarRegistrationMaxAggregateOutputType | null
  }

  type GetSeminarRegistrationGroupByPayload<T extends SeminarRegistrationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SeminarRegistrationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SeminarRegistrationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SeminarRegistrationGroupByOutputType[P]>
            : GetScalarType<T[P], SeminarRegistrationGroupByOutputType[P]>
        }
      >
    >


  export type SeminarRegistrationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    seminarId?: boolean
    userId?: boolean
    createdAt?: boolean
    seminar?: boolean | SeminarDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["seminarRegistration"]>

  export type SeminarRegistrationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    seminarId?: boolean
    userId?: boolean
    createdAt?: boolean
    seminar?: boolean | SeminarDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["seminarRegistration"]>

  export type SeminarRegistrationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    seminarId?: boolean
    userId?: boolean
    createdAt?: boolean
    seminar?: boolean | SeminarDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["seminarRegistration"]>

  export type SeminarRegistrationSelectScalar = {
    id?: boolean
    seminarId?: boolean
    userId?: boolean
    createdAt?: boolean
  }

  export type SeminarRegistrationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "seminarId" | "userId" | "createdAt", ExtArgs["result"]["seminarRegistration"]>
  export type SeminarRegistrationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    seminar?: boolean | SeminarDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SeminarRegistrationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    seminar?: boolean | SeminarDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SeminarRegistrationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    seminar?: boolean | SeminarDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SeminarRegistrationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SeminarRegistration"
    objects: {
      seminar: Prisma.$SeminarPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      seminarId: string
      userId: string
      createdAt: Date
    }, ExtArgs["result"]["seminarRegistration"]>
    composites: {}
  }

  type SeminarRegistrationGetPayload<S extends boolean | null | undefined | SeminarRegistrationDefaultArgs> = $Result.GetResult<Prisma.$SeminarRegistrationPayload, S>

  type SeminarRegistrationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SeminarRegistrationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SeminarRegistrationCountAggregateInputType | true
    }

  export interface SeminarRegistrationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SeminarRegistration'], meta: { name: 'SeminarRegistration' } }
    /**
     * Find zero or one SeminarRegistration that matches the filter.
     * @param {SeminarRegistrationFindUniqueArgs} args - Arguments to find a SeminarRegistration
     * @example
     * // Get one SeminarRegistration
     * const seminarRegistration = await prisma.seminarRegistration.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SeminarRegistrationFindUniqueArgs>(args: SelectSubset<T, SeminarRegistrationFindUniqueArgs<ExtArgs>>): Prisma__SeminarRegistrationClient<$Result.GetResult<Prisma.$SeminarRegistrationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SeminarRegistration that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SeminarRegistrationFindUniqueOrThrowArgs} args - Arguments to find a SeminarRegistration
     * @example
     * // Get one SeminarRegistration
     * const seminarRegistration = await prisma.seminarRegistration.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SeminarRegistrationFindUniqueOrThrowArgs>(args: SelectSubset<T, SeminarRegistrationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SeminarRegistrationClient<$Result.GetResult<Prisma.$SeminarRegistrationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SeminarRegistration that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeminarRegistrationFindFirstArgs} args - Arguments to find a SeminarRegistration
     * @example
     * // Get one SeminarRegistration
     * const seminarRegistration = await prisma.seminarRegistration.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SeminarRegistrationFindFirstArgs>(args?: SelectSubset<T, SeminarRegistrationFindFirstArgs<ExtArgs>>): Prisma__SeminarRegistrationClient<$Result.GetResult<Prisma.$SeminarRegistrationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SeminarRegistration that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeminarRegistrationFindFirstOrThrowArgs} args - Arguments to find a SeminarRegistration
     * @example
     * // Get one SeminarRegistration
     * const seminarRegistration = await prisma.seminarRegistration.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SeminarRegistrationFindFirstOrThrowArgs>(args?: SelectSubset<T, SeminarRegistrationFindFirstOrThrowArgs<ExtArgs>>): Prisma__SeminarRegistrationClient<$Result.GetResult<Prisma.$SeminarRegistrationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SeminarRegistrations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeminarRegistrationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SeminarRegistrations
     * const seminarRegistrations = await prisma.seminarRegistration.findMany()
     * 
     * // Get first 10 SeminarRegistrations
     * const seminarRegistrations = await prisma.seminarRegistration.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const seminarRegistrationWithIdOnly = await prisma.seminarRegistration.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SeminarRegistrationFindManyArgs>(args?: SelectSubset<T, SeminarRegistrationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SeminarRegistrationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SeminarRegistration.
     * @param {SeminarRegistrationCreateArgs} args - Arguments to create a SeminarRegistration.
     * @example
     * // Create one SeminarRegistration
     * const SeminarRegistration = await prisma.seminarRegistration.create({
     *   data: {
     *     // ... data to create a SeminarRegistration
     *   }
     * })
     * 
     */
    create<T extends SeminarRegistrationCreateArgs>(args: SelectSubset<T, SeminarRegistrationCreateArgs<ExtArgs>>): Prisma__SeminarRegistrationClient<$Result.GetResult<Prisma.$SeminarRegistrationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SeminarRegistrations.
     * @param {SeminarRegistrationCreateManyArgs} args - Arguments to create many SeminarRegistrations.
     * @example
     * // Create many SeminarRegistrations
     * const seminarRegistration = await prisma.seminarRegistration.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SeminarRegistrationCreateManyArgs>(args?: SelectSubset<T, SeminarRegistrationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SeminarRegistrations and returns the data saved in the database.
     * @param {SeminarRegistrationCreateManyAndReturnArgs} args - Arguments to create many SeminarRegistrations.
     * @example
     * // Create many SeminarRegistrations
     * const seminarRegistration = await prisma.seminarRegistration.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SeminarRegistrations and only return the `id`
     * const seminarRegistrationWithIdOnly = await prisma.seminarRegistration.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SeminarRegistrationCreateManyAndReturnArgs>(args?: SelectSubset<T, SeminarRegistrationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SeminarRegistrationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SeminarRegistration.
     * @param {SeminarRegistrationDeleteArgs} args - Arguments to delete one SeminarRegistration.
     * @example
     * // Delete one SeminarRegistration
     * const SeminarRegistration = await prisma.seminarRegistration.delete({
     *   where: {
     *     // ... filter to delete one SeminarRegistration
     *   }
     * })
     * 
     */
    delete<T extends SeminarRegistrationDeleteArgs>(args: SelectSubset<T, SeminarRegistrationDeleteArgs<ExtArgs>>): Prisma__SeminarRegistrationClient<$Result.GetResult<Prisma.$SeminarRegistrationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SeminarRegistration.
     * @param {SeminarRegistrationUpdateArgs} args - Arguments to update one SeminarRegistration.
     * @example
     * // Update one SeminarRegistration
     * const seminarRegistration = await prisma.seminarRegistration.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SeminarRegistrationUpdateArgs>(args: SelectSubset<T, SeminarRegistrationUpdateArgs<ExtArgs>>): Prisma__SeminarRegistrationClient<$Result.GetResult<Prisma.$SeminarRegistrationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SeminarRegistrations.
     * @param {SeminarRegistrationDeleteManyArgs} args - Arguments to filter SeminarRegistrations to delete.
     * @example
     * // Delete a few SeminarRegistrations
     * const { count } = await prisma.seminarRegistration.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SeminarRegistrationDeleteManyArgs>(args?: SelectSubset<T, SeminarRegistrationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SeminarRegistrations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeminarRegistrationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SeminarRegistrations
     * const seminarRegistration = await prisma.seminarRegistration.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SeminarRegistrationUpdateManyArgs>(args: SelectSubset<T, SeminarRegistrationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SeminarRegistrations and returns the data updated in the database.
     * @param {SeminarRegistrationUpdateManyAndReturnArgs} args - Arguments to update many SeminarRegistrations.
     * @example
     * // Update many SeminarRegistrations
     * const seminarRegistration = await prisma.seminarRegistration.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SeminarRegistrations and only return the `id`
     * const seminarRegistrationWithIdOnly = await prisma.seminarRegistration.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SeminarRegistrationUpdateManyAndReturnArgs>(args: SelectSubset<T, SeminarRegistrationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SeminarRegistrationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SeminarRegistration.
     * @param {SeminarRegistrationUpsertArgs} args - Arguments to update or create a SeminarRegistration.
     * @example
     * // Update or create a SeminarRegistration
     * const seminarRegistration = await prisma.seminarRegistration.upsert({
     *   create: {
     *     // ... data to create a SeminarRegistration
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SeminarRegistration we want to update
     *   }
     * })
     */
    upsert<T extends SeminarRegistrationUpsertArgs>(args: SelectSubset<T, SeminarRegistrationUpsertArgs<ExtArgs>>): Prisma__SeminarRegistrationClient<$Result.GetResult<Prisma.$SeminarRegistrationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SeminarRegistrations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeminarRegistrationCountArgs} args - Arguments to filter SeminarRegistrations to count.
     * @example
     * // Count the number of SeminarRegistrations
     * const count = await prisma.seminarRegistration.count({
     *   where: {
     *     // ... the filter for the SeminarRegistrations we want to count
     *   }
     * })
    **/
    count<T extends SeminarRegistrationCountArgs>(
      args?: Subset<T, SeminarRegistrationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SeminarRegistrationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SeminarRegistration.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeminarRegistrationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SeminarRegistrationAggregateArgs>(args: Subset<T, SeminarRegistrationAggregateArgs>): Prisma.PrismaPromise<GetSeminarRegistrationAggregateType<T>>

    /**
     * Group by SeminarRegistration.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeminarRegistrationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SeminarRegistrationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SeminarRegistrationGroupByArgs['orderBy'] }
        : { orderBy?: SeminarRegistrationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SeminarRegistrationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSeminarRegistrationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SeminarRegistration model
   */
  readonly fields: SeminarRegistrationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SeminarRegistration.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SeminarRegistrationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    seminar<T extends SeminarDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SeminarDefaultArgs<ExtArgs>>): Prisma__SeminarClient<$Result.GetResult<Prisma.$SeminarPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SeminarRegistration model
   */
  interface SeminarRegistrationFieldRefs {
    readonly id: FieldRef<"SeminarRegistration", 'String'>
    readonly seminarId: FieldRef<"SeminarRegistration", 'String'>
    readonly userId: FieldRef<"SeminarRegistration", 'String'>
    readonly createdAt: FieldRef<"SeminarRegistration", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SeminarRegistration findUnique
   */
  export type SeminarRegistrationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeminarRegistration
     */
    select?: SeminarRegistrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeminarRegistration
     */
    omit?: SeminarRegistrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeminarRegistrationInclude<ExtArgs> | null
    /**
     * Filter, which SeminarRegistration to fetch.
     */
    where: SeminarRegistrationWhereUniqueInput
  }

  /**
   * SeminarRegistration findUniqueOrThrow
   */
  export type SeminarRegistrationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeminarRegistration
     */
    select?: SeminarRegistrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeminarRegistration
     */
    omit?: SeminarRegistrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeminarRegistrationInclude<ExtArgs> | null
    /**
     * Filter, which SeminarRegistration to fetch.
     */
    where: SeminarRegistrationWhereUniqueInput
  }

  /**
   * SeminarRegistration findFirst
   */
  export type SeminarRegistrationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeminarRegistration
     */
    select?: SeminarRegistrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeminarRegistration
     */
    omit?: SeminarRegistrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeminarRegistrationInclude<ExtArgs> | null
    /**
     * Filter, which SeminarRegistration to fetch.
     */
    where?: SeminarRegistrationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SeminarRegistrations to fetch.
     */
    orderBy?: SeminarRegistrationOrderByWithRelationInput | SeminarRegistrationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SeminarRegistrations.
     */
    cursor?: SeminarRegistrationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SeminarRegistrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SeminarRegistrations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SeminarRegistrations.
     */
    distinct?: SeminarRegistrationScalarFieldEnum | SeminarRegistrationScalarFieldEnum[]
  }

  /**
   * SeminarRegistration findFirstOrThrow
   */
  export type SeminarRegistrationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeminarRegistration
     */
    select?: SeminarRegistrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeminarRegistration
     */
    omit?: SeminarRegistrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeminarRegistrationInclude<ExtArgs> | null
    /**
     * Filter, which SeminarRegistration to fetch.
     */
    where?: SeminarRegistrationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SeminarRegistrations to fetch.
     */
    orderBy?: SeminarRegistrationOrderByWithRelationInput | SeminarRegistrationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SeminarRegistrations.
     */
    cursor?: SeminarRegistrationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SeminarRegistrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SeminarRegistrations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SeminarRegistrations.
     */
    distinct?: SeminarRegistrationScalarFieldEnum | SeminarRegistrationScalarFieldEnum[]
  }

  /**
   * SeminarRegistration findMany
   */
  export type SeminarRegistrationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeminarRegistration
     */
    select?: SeminarRegistrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeminarRegistration
     */
    omit?: SeminarRegistrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeminarRegistrationInclude<ExtArgs> | null
    /**
     * Filter, which SeminarRegistrations to fetch.
     */
    where?: SeminarRegistrationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SeminarRegistrations to fetch.
     */
    orderBy?: SeminarRegistrationOrderByWithRelationInput | SeminarRegistrationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SeminarRegistrations.
     */
    cursor?: SeminarRegistrationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SeminarRegistrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SeminarRegistrations.
     */
    skip?: number
    distinct?: SeminarRegistrationScalarFieldEnum | SeminarRegistrationScalarFieldEnum[]
  }

  /**
   * SeminarRegistration create
   */
  export type SeminarRegistrationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeminarRegistration
     */
    select?: SeminarRegistrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeminarRegistration
     */
    omit?: SeminarRegistrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeminarRegistrationInclude<ExtArgs> | null
    /**
     * The data needed to create a SeminarRegistration.
     */
    data: XOR<SeminarRegistrationCreateInput, SeminarRegistrationUncheckedCreateInput>
  }

  /**
   * SeminarRegistration createMany
   */
  export type SeminarRegistrationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SeminarRegistrations.
     */
    data: SeminarRegistrationCreateManyInput | SeminarRegistrationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SeminarRegistration createManyAndReturn
   */
  export type SeminarRegistrationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeminarRegistration
     */
    select?: SeminarRegistrationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SeminarRegistration
     */
    omit?: SeminarRegistrationOmit<ExtArgs> | null
    /**
     * The data used to create many SeminarRegistrations.
     */
    data: SeminarRegistrationCreateManyInput | SeminarRegistrationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeminarRegistrationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SeminarRegistration update
   */
  export type SeminarRegistrationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeminarRegistration
     */
    select?: SeminarRegistrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeminarRegistration
     */
    omit?: SeminarRegistrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeminarRegistrationInclude<ExtArgs> | null
    /**
     * The data needed to update a SeminarRegistration.
     */
    data: XOR<SeminarRegistrationUpdateInput, SeminarRegistrationUncheckedUpdateInput>
    /**
     * Choose, which SeminarRegistration to update.
     */
    where: SeminarRegistrationWhereUniqueInput
  }

  /**
   * SeminarRegistration updateMany
   */
  export type SeminarRegistrationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SeminarRegistrations.
     */
    data: XOR<SeminarRegistrationUpdateManyMutationInput, SeminarRegistrationUncheckedUpdateManyInput>
    /**
     * Filter which SeminarRegistrations to update
     */
    where?: SeminarRegistrationWhereInput
    /**
     * Limit how many SeminarRegistrations to update.
     */
    limit?: number
  }

  /**
   * SeminarRegistration updateManyAndReturn
   */
  export type SeminarRegistrationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeminarRegistration
     */
    select?: SeminarRegistrationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SeminarRegistration
     */
    omit?: SeminarRegistrationOmit<ExtArgs> | null
    /**
     * The data used to update SeminarRegistrations.
     */
    data: XOR<SeminarRegistrationUpdateManyMutationInput, SeminarRegistrationUncheckedUpdateManyInput>
    /**
     * Filter which SeminarRegistrations to update
     */
    where?: SeminarRegistrationWhereInput
    /**
     * Limit how many SeminarRegistrations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeminarRegistrationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SeminarRegistration upsert
   */
  export type SeminarRegistrationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeminarRegistration
     */
    select?: SeminarRegistrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeminarRegistration
     */
    omit?: SeminarRegistrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeminarRegistrationInclude<ExtArgs> | null
    /**
     * The filter to search for the SeminarRegistration to update in case it exists.
     */
    where: SeminarRegistrationWhereUniqueInput
    /**
     * In case the SeminarRegistration found by the `where` argument doesn't exist, create a new SeminarRegistration with this data.
     */
    create: XOR<SeminarRegistrationCreateInput, SeminarRegistrationUncheckedCreateInput>
    /**
     * In case the SeminarRegistration was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SeminarRegistrationUpdateInput, SeminarRegistrationUncheckedUpdateInput>
  }

  /**
   * SeminarRegistration delete
   */
  export type SeminarRegistrationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeminarRegistration
     */
    select?: SeminarRegistrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeminarRegistration
     */
    omit?: SeminarRegistrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeminarRegistrationInclude<ExtArgs> | null
    /**
     * Filter which SeminarRegistration to delete.
     */
    where: SeminarRegistrationWhereUniqueInput
  }

  /**
   * SeminarRegistration deleteMany
   */
  export type SeminarRegistrationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SeminarRegistrations to delete
     */
    where?: SeminarRegistrationWhereInput
    /**
     * Limit how many SeminarRegistrations to delete.
     */
    limit?: number
  }

  /**
   * SeminarRegistration without action
   */
  export type SeminarRegistrationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeminarRegistration
     */
    select?: SeminarRegistrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeminarRegistration
     */
    omit?: SeminarRegistrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeminarRegistrationInclude<ExtArgs> | null
  }


  /**
   * Model ActivityLog
   */

  export type AggregateActivityLog = {
    _count: ActivityLogCountAggregateOutputType | null
    _min: ActivityLogMinAggregateOutputType | null
    _max: ActivityLogMaxAggregateOutputType | null
  }

  export type ActivityLogMinAggregateOutputType = {
    id: string | null
    action: string | null
    description: string | null
    performedBy: string | null
    performedByRole: $Enums.UserRole | null
    relatedBookingId: string | null
    relatedSessionId: string | null
    timestamp: Date | null
  }

  export type ActivityLogMaxAggregateOutputType = {
    id: string | null
    action: string | null
    description: string | null
    performedBy: string | null
    performedByRole: $Enums.UserRole | null
    relatedBookingId: string | null
    relatedSessionId: string | null
    timestamp: Date | null
  }

  export type ActivityLogCountAggregateOutputType = {
    id: number
    action: number
    description: number
    performedBy: number
    performedByRole: number
    relatedBookingId: number
    relatedSessionId: number
    timestamp: number
    _all: number
  }


  export type ActivityLogMinAggregateInputType = {
    id?: true
    action?: true
    description?: true
    performedBy?: true
    performedByRole?: true
    relatedBookingId?: true
    relatedSessionId?: true
    timestamp?: true
  }

  export type ActivityLogMaxAggregateInputType = {
    id?: true
    action?: true
    description?: true
    performedBy?: true
    performedByRole?: true
    relatedBookingId?: true
    relatedSessionId?: true
    timestamp?: true
  }

  export type ActivityLogCountAggregateInputType = {
    id?: true
    action?: true
    description?: true
    performedBy?: true
    performedByRole?: true
    relatedBookingId?: true
    relatedSessionId?: true
    timestamp?: true
    _all?: true
  }

  export type ActivityLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ActivityLog to aggregate.
     */
    where?: ActivityLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActivityLogs to fetch.
     */
    orderBy?: ActivityLogOrderByWithRelationInput | ActivityLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ActivityLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActivityLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActivityLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ActivityLogs
    **/
    _count?: true | ActivityLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ActivityLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ActivityLogMaxAggregateInputType
  }

  export type GetActivityLogAggregateType<T extends ActivityLogAggregateArgs> = {
        [P in keyof T & keyof AggregateActivityLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateActivityLog[P]>
      : GetScalarType<T[P], AggregateActivityLog[P]>
  }




  export type ActivityLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActivityLogWhereInput
    orderBy?: ActivityLogOrderByWithAggregationInput | ActivityLogOrderByWithAggregationInput[]
    by: ActivityLogScalarFieldEnum[] | ActivityLogScalarFieldEnum
    having?: ActivityLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ActivityLogCountAggregateInputType | true
    _min?: ActivityLogMinAggregateInputType
    _max?: ActivityLogMaxAggregateInputType
  }

  export type ActivityLogGroupByOutputType = {
    id: string
    action: string
    description: string
    performedBy: string
    performedByRole: $Enums.UserRole
    relatedBookingId: string | null
    relatedSessionId: string | null
    timestamp: Date
    _count: ActivityLogCountAggregateOutputType | null
    _min: ActivityLogMinAggregateOutputType | null
    _max: ActivityLogMaxAggregateOutputType | null
  }

  type GetActivityLogGroupByPayload<T extends ActivityLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ActivityLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ActivityLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ActivityLogGroupByOutputType[P]>
            : GetScalarType<T[P], ActivityLogGroupByOutputType[P]>
        }
      >
    >


  export type ActivityLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    action?: boolean
    description?: boolean
    performedBy?: boolean
    performedByRole?: boolean
    relatedBookingId?: boolean
    relatedSessionId?: boolean
    timestamp?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["activityLog"]>

  export type ActivityLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    action?: boolean
    description?: boolean
    performedBy?: boolean
    performedByRole?: boolean
    relatedBookingId?: boolean
    relatedSessionId?: boolean
    timestamp?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["activityLog"]>

  export type ActivityLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    action?: boolean
    description?: boolean
    performedBy?: boolean
    performedByRole?: boolean
    relatedBookingId?: boolean
    relatedSessionId?: boolean
    timestamp?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["activityLog"]>

  export type ActivityLogSelectScalar = {
    id?: boolean
    action?: boolean
    description?: boolean
    performedBy?: boolean
    performedByRole?: boolean
    relatedBookingId?: boolean
    relatedSessionId?: boolean
    timestamp?: boolean
  }

  export type ActivityLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "action" | "description" | "performedBy" | "performedByRole" | "relatedBookingId" | "relatedSessionId" | "timestamp", ExtArgs["result"]["activityLog"]>
  export type ActivityLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ActivityLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ActivityLogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ActivityLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ActivityLog"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      action: string
      description: string
      performedBy: string
      performedByRole: $Enums.UserRole
      relatedBookingId: string | null
      relatedSessionId: string | null
      timestamp: Date
    }, ExtArgs["result"]["activityLog"]>
    composites: {}
  }

  type ActivityLogGetPayload<S extends boolean | null | undefined | ActivityLogDefaultArgs> = $Result.GetResult<Prisma.$ActivityLogPayload, S>

  type ActivityLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ActivityLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ActivityLogCountAggregateInputType | true
    }

  export interface ActivityLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ActivityLog'], meta: { name: 'ActivityLog' } }
    /**
     * Find zero or one ActivityLog that matches the filter.
     * @param {ActivityLogFindUniqueArgs} args - Arguments to find a ActivityLog
     * @example
     * // Get one ActivityLog
     * const activityLog = await prisma.activityLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ActivityLogFindUniqueArgs>(args: SelectSubset<T, ActivityLogFindUniqueArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ActivityLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ActivityLogFindUniqueOrThrowArgs} args - Arguments to find a ActivityLog
     * @example
     * // Get one ActivityLog
     * const activityLog = await prisma.activityLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ActivityLogFindUniqueOrThrowArgs>(args: SelectSubset<T, ActivityLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ActivityLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityLogFindFirstArgs} args - Arguments to find a ActivityLog
     * @example
     * // Get one ActivityLog
     * const activityLog = await prisma.activityLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ActivityLogFindFirstArgs>(args?: SelectSubset<T, ActivityLogFindFirstArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ActivityLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityLogFindFirstOrThrowArgs} args - Arguments to find a ActivityLog
     * @example
     * // Get one ActivityLog
     * const activityLog = await prisma.activityLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ActivityLogFindFirstOrThrowArgs>(args?: SelectSubset<T, ActivityLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ActivityLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ActivityLogs
     * const activityLogs = await prisma.activityLog.findMany()
     * 
     * // Get first 10 ActivityLogs
     * const activityLogs = await prisma.activityLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const activityLogWithIdOnly = await prisma.activityLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ActivityLogFindManyArgs>(args?: SelectSubset<T, ActivityLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ActivityLog.
     * @param {ActivityLogCreateArgs} args - Arguments to create a ActivityLog.
     * @example
     * // Create one ActivityLog
     * const ActivityLog = await prisma.activityLog.create({
     *   data: {
     *     // ... data to create a ActivityLog
     *   }
     * })
     * 
     */
    create<T extends ActivityLogCreateArgs>(args: SelectSubset<T, ActivityLogCreateArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ActivityLogs.
     * @param {ActivityLogCreateManyArgs} args - Arguments to create many ActivityLogs.
     * @example
     * // Create many ActivityLogs
     * const activityLog = await prisma.activityLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ActivityLogCreateManyArgs>(args?: SelectSubset<T, ActivityLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ActivityLogs and returns the data saved in the database.
     * @param {ActivityLogCreateManyAndReturnArgs} args - Arguments to create many ActivityLogs.
     * @example
     * // Create many ActivityLogs
     * const activityLog = await prisma.activityLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ActivityLogs and only return the `id`
     * const activityLogWithIdOnly = await prisma.activityLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ActivityLogCreateManyAndReturnArgs>(args?: SelectSubset<T, ActivityLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ActivityLog.
     * @param {ActivityLogDeleteArgs} args - Arguments to delete one ActivityLog.
     * @example
     * // Delete one ActivityLog
     * const ActivityLog = await prisma.activityLog.delete({
     *   where: {
     *     // ... filter to delete one ActivityLog
     *   }
     * })
     * 
     */
    delete<T extends ActivityLogDeleteArgs>(args: SelectSubset<T, ActivityLogDeleteArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ActivityLog.
     * @param {ActivityLogUpdateArgs} args - Arguments to update one ActivityLog.
     * @example
     * // Update one ActivityLog
     * const activityLog = await prisma.activityLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ActivityLogUpdateArgs>(args: SelectSubset<T, ActivityLogUpdateArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ActivityLogs.
     * @param {ActivityLogDeleteManyArgs} args - Arguments to filter ActivityLogs to delete.
     * @example
     * // Delete a few ActivityLogs
     * const { count } = await prisma.activityLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ActivityLogDeleteManyArgs>(args?: SelectSubset<T, ActivityLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ActivityLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ActivityLogs
     * const activityLog = await prisma.activityLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ActivityLogUpdateManyArgs>(args: SelectSubset<T, ActivityLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ActivityLogs and returns the data updated in the database.
     * @param {ActivityLogUpdateManyAndReturnArgs} args - Arguments to update many ActivityLogs.
     * @example
     * // Update many ActivityLogs
     * const activityLog = await prisma.activityLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ActivityLogs and only return the `id`
     * const activityLogWithIdOnly = await prisma.activityLog.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ActivityLogUpdateManyAndReturnArgs>(args: SelectSubset<T, ActivityLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ActivityLog.
     * @param {ActivityLogUpsertArgs} args - Arguments to update or create a ActivityLog.
     * @example
     * // Update or create a ActivityLog
     * const activityLog = await prisma.activityLog.upsert({
     *   create: {
     *     // ... data to create a ActivityLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ActivityLog we want to update
     *   }
     * })
     */
    upsert<T extends ActivityLogUpsertArgs>(args: SelectSubset<T, ActivityLogUpsertArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ActivityLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityLogCountArgs} args - Arguments to filter ActivityLogs to count.
     * @example
     * // Count the number of ActivityLogs
     * const count = await prisma.activityLog.count({
     *   where: {
     *     // ... the filter for the ActivityLogs we want to count
     *   }
     * })
    **/
    count<T extends ActivityLogCountArgs>(
      args?: Subset<T, ActivityLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ActivityLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ActivityLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ActivityLogAggregateArgs>(args: Subset<T, ActivityLogAggregateArgs>): Prisma.PrismaPromise<GetActivityLogAggregateType<T>>

    /**
     * Group by ActivityLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityLogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ActivityLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ActivityLogGroupByArgs['orderBy'] }
        : { orderBy?: ActivityLogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ActivityLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetActivityLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ActivityLog model
   */
  readonly fields: ActivityLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ActivityLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ActivityLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ActivityLog model
   */
  interface ActivityLogFieldRefs {
    readonly id: FieldRef<"ActivityLog", 'String'>
    readonly action: FieldRef<"ActivityLog", 'String'>
    readonly description: FieldRef<"ActivityLog", 'String'>
    readonly performedBy: FieldRef<"ActivityLog", 'String'>
    readonly performedByRole: FieldRef<"ActivityLog", 'UserRole'>
    readonly relatedBookingId: FieldRef<"ActivityLog", 'String'>
    readonly relatedSessionId: FieldRef<"ActivityLog", 'String'>
    readonly timestamp: FieldRef<"ActivityLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ActivityLog findUnique
   */
  export type ActivityLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    /**
     * Filter, which ActivityLog to fetch.
     */
    where: ActivityLogWhereUniqueInput
  }

  /**
   * ActivityLog findUniqueOrThrow
   */
  export type ActivityLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    /**
     * Filter, which ActivityLog to fetch.
     */
    where: ActivityLogWhereUniqueInput
  }

  /**
   * ActivityLog findFirst
   */
  export type ActivityLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    /**
     * Filter, which ActivityLog to fetch.
     */
    where?: ActivityLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActivityLogs to fetch.
     */
    orderBy?: ActivityLogOrderByWithRelationInput | ActivityLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ActivityLogs.
     */
    cursor?: ActivityLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActivityLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActivityLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ActivityLogs.
     */
    distinct?: ActivityLogScalarFieldEnum | ActivityLogScalarFieldEnum[]
  }

  /**
   * ActivityLog findFirstOrThrow
   */
  export type ActivityLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    /**
     * Filter, which ActivityLog to fetch.
     */
    where?: ActivityLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActivityLogs to fetch.
     */
    orderBy?: ActivityLogOrderByWithRelationInput | ActivityLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ActivityLogs.
     */
    cursor?: ActivityLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActivityLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActivityLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ActivityLogs.
     */
    distinct?: ActivityLogScalarFieldEnum | ActivityLogScalarFieldEnum[]
  }

  /**
   * ActivityLog findMany
   */
  export type ActivityLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    /**
     * Filter, which ActivityLogs to fetch.
     */
    where?: ActivityLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActivityLogs to fetch.
     */
    orderBy?: ActivityLogOrderByWithRelationInput | ActivityLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ActivityLogs.
     */
    cursor?: ActivityLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActivityLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActivityLogs.
     */
    skip?: number
    distinct?: ActivityLogScalarFieldEnum | ActivityLogScalarFieldEnum[]
  }

  /**
   * ActivityLog create
   */
  export type ActivityLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    /**
     * The data needed to create a ActivityLog.
     */
    data: XOR<ActivityLogCreateInput, ActivityLogUncheckedCreateInput>
  }

  /**
   * ActivityLog createMany
   */
  export type ActivityLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ActivityLogs.
     */
    data: ActivityLogCreateManyInput | ActivityLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ActivityLog createManyAndReturn
   */
  export type ActivityLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * The data used to create many ActivityLogs.
     */
    data: ActivityLogCreateManyInput | ActivityLogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ActivityLog update
   */
  export type ActivityLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    /**
     * The data needed to update a ActivityLog.
     */
    data: XOR<ActivityLogUpdateInput, ActivityLogUncheckedUpdateInput>
    /**
     * Choose, which ActivityLog to update.
     */
    where: ActivityLogWhereUniqueInput
  }

  /**
   * ActivityLog updateMany
   */
  export type ActivityLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ActivityLogs.
     */
    data: XOR<ActivityLogUpdateManyMutationInput, ActivityLogUncheckedUpdateManyInput>
    /**
     * Filter which ActivityLogs to update
     */
    where?: ActivityLogWhereInput
    /**
     * Limit how many ActivityLogs to update.
     */
    limit?: number
  }

  /**
   * ActivityLog updateManyAndReturn
   */
  export type ActivityLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * The data used to update ActivityLogs.
     */
    data: XOR<ActivityLogUpdateManyMutationInput, ActivityLogUncheckedUpdateManyInput>
    /**
     * Filter which ActivityLogs to update
     */
    where?: ActivityLogWhereInput
    /**
     * Limit how many ActivityLogs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ActivityLog upsert
   */
  export type ActivityLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    /**
     * The filter to search for the ActivityLog to update in case it exists.
     */
    where: ActivityLogWhereUniqueInput
    /**
     * In case the ActivityLog found by the `where` argument doesn't exist, create a new ActivityLog with this data.
     */
    create: XOR<ActivityLogCreateInput, ActivityLogUncheckedCreateInput>
    /**
     * In case the ActivityLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ActivityLogUpdateInput, ActivityLogUncheckedUpdateInput>
  }

  /**
   * ActivityLog delete
   */
  export type ActivityLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    /**
     * Filter which ActivityLog to delete.
     */
    where: ActivityLogWhereUniqueInput
  }

  /**
   * ActivityLog deleteMany
   */
  export type ActivityLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ActivityLogs to delete
     */
    where?: ActivityLogWhereInput
    /**
     * Limit how many ActivityLogs to delete.
     */
    limit?: number
  }

  /**
   * ActivityLog without action
   */
  export type ActivityLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    passwordHash: 'passwordHash',
    role: 'role',
    avatar: 'avatar',
    profilePictureUrl: 'profilePictureUrl',
    phone: 'phone',
    status: 'status',
    organization: 'organization',
    businessName: 'businessName',
    businessCategory: 'businessCategory',
    businessAddress: 'businessAddress',
    nim: 'nim',
    semester: 'semester',
    schoolName: 'schoolName',
    subject: 'subject',
    grade: 'grade',
    lastLogin: 'lastLogin',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const StudyProgramScalarFieldEnum: {
    id: 'id',
    code: 'code',
    name: 'name',
    faculty: 'faculty',
    createdAt: 'createdAt'
  };

  export type StudyProgramScalarFieldEnum = (typeof StudyProgramScalarFieldEnum)[keyof typeof StudyProgramScalarFieldEnum]


  export const LecturerScalarFieldEnum: {
    id: 'id',
    lecturerCode: 'lecturerCode',
    userId: 'userId',
    studyProgramId: 'studyProgramId',
    name: 'name',
    email: 'email',
    photo: 'photo',
    specialization: 'specialization',
    university: 'university',
    rating: 'rating',
    experience: 'experience',
    expertise: 'expertise',
    phone: 'phone',
    bio: 'bio',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type LecturerScalarFieldEnum = (typeof LecturerScalarFieldEnum)[keyof typeof LecturerScalarFieldEnum]


  export const StudentScalarFieldEnum: {
    id: 'id',
    nim: 'nim',
    name: 'name',
    email: 'email',
    studyProgramId: 'studyProgramId',
    semester: 'semester',
    phone: 'phone'
  };

  export type StudentScalarFieldEnum = (typeof StudentScalarFieldEnum)[keyof typeof StudentScalarFieldEnum]


  export const SemesterScalarFieldEnum: {
    id: 'id',
    name: 'name',
    startDate: 'startDate',
    endDate: 'endDate',
    isActive: 'isActive',
    createdAt: 'createdAt'
  };

  export type SemesterScalarFieldEnum = (typeof SemesterScalarFieldEnum)[keyof typeof SemesterScalarFieldEnum]


  export const LecturerAvailabilityScalarFieldEnum: {
    id: 'id',
    lecturerId: 'lecturerId',
    semesterId: 'semesterId',
    dayOfWeek: 'dayOfWeek',
    timeSlots: 'timeSlots',
    isActive: 'isActive',
    createdAt: 'createdAt'
  };

  export type LecturerAvailabilityScalarFieldEnum = (typeof LecturerAvailabilityScalarFieldEnum)[keyof typeof LecturerAvailabilityScalarFieldEnum]


  export const ConsultationBookingScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    lecturerId: 'lecturerId',
    semesterId: 'semesterId',
    sessionId: 'sessionId',
    consultationType: 'consultationType',
    title: 'title',
    category: 'category',
    priority: 'priority',
    description: 'description',
    organization: 'organization',
    contactPerson: 'contactPerson',
    phone: 'phone',
    email: 'email',
    scheduledDate: 'scheduledDate',
    scheduledDay: 'scheduledDay',
    startTime: 'startTime',
    endTime: 'endTime',
    status: 'status',
    feedback: 'feedback',
    rating: 'rating',
    zoomLink: 'zoomLink',
    rescheduleNote: 'rescheduleNote',
    attachmentFileName: 'attachmentFileName',
    attachmentUrl: 'attachmentUrl',
    completedAt: 'completedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ConsultationBookingScalarFieldEnum = (typeof ConsultationBookingScalarFieldEnum)[keyof typeof ConsultationBookingScalarFieldEnum]


  export const ConsultationSessionScalarFieldEnum: {
    id: 'id',
    lecturerId: 'lecturerId',
    scheduledDate: 'scheduledDate',
    startTime: 'startTime',
    endTime: 'endTime',
    status: 'status',
    zoomLink: 'zoomLink',
    notes: 'notes',
    confirmedAt: 'confirmedAt',
    confirmedBy: 'confirmedBy',
    evaluationLink: 'evaluationLink',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ConsultationSessionScalarFieldEnum = (typeof ConsultationSessionScalarFieldEnum)[keyof typeof ConsultationSessionScalarFieldEnum]


  export const SeminarScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    host: 'host',
    hostId: 'hostId',
    eventDate: 'eventDate',
    eventTime: 'eventTime',
    location: 'location',
    zoomLink: 'zoomLink',
    posterUrl: 'posterUrl',
    status: 'status',
    quota: 'quota',
    category: 'category',
    targetAudience: 'targetAudience',
    createdBy: 'createdBy',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SeminarScalarFieldEnum = (typeof SeminarScalarFieldEnum)[keyof typeof SeminarScalarFieldEnum]


  export const SeminarRegistrationScalarFieldEnum: {
    id: 'id',
    seminarId: 'seminarId',
    userId: 'userId',
    createdAt: 'createdAt'
  };

  export type SeminarRegistrationScalarFieldEnum = (typeof SeminarRegistrationScalarFieldEnum)[keyof typeof SeminarRegistrationScalarFieldEnum]


  export const ActivityLogScalarFieldEnum: {
    id: 'id',
    action: 'action',
    description: 'description',
    performedBy: 'performedBy',
    performedByRole: 'performedByRole',
    relatedBookingId: 'relatedBookingId',
    relatedSessionId: 'relatedSessionId',
    timestamp: 'timestamp'
  };

  export type ActivityLogScalarFieldEnum = (typeof ActivityLogScalarFieldEnum)[keyof typeof ActivityLogScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'UserRole[]'
   */
  export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'ConsultationType'
   */
  export type EnumConsultationTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ConsultationType'>
    


  /**
   * Reference to a field of type 'ConsultationType[]'
   */
  export type ListEnumConsultationTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ConsultationType[]'>
    


  /**
   * Reference to a field of type 'ConsultationStatus'
   */
  export type EnumConsultationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ConsultationStatus'>
    


  /**
   * Reference to a field of type 'ConsultationStatus[]'
   */
  export type ListEnumConsultationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ConsultationStatus[]'>
    


  /**
   * Reference to a field of type 'SeminarStatus'
   */
  export type EnumSeminarStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SeminarStatus'>
    


  /**
   * Reference to a field of type 'SeminarStatus[]'
   */
  export type ListEnumSeminarStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SeminarStatus[]'>
    


  /**
   * Reference to a field of type 'SeminarCategory'
   */
  export type EnumSeminarCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SeminarCategory'>
    


  /**
   * Reference to a field of type 'SeminarCategory[]'
   */
  export type ListEnumSeminarCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SeminarCategory[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: UuidFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    avatar?: StringFilter<"User"> | string
    profilePictureUrl?: StringNullableFilter<"User"> | string | null
    phone?: StringNullableFilter<"User"> | string | null
    status?: StringFilter<"User"> | string
    organization?: StringNullableFilter<"User"> | string | null
    businessName?: StringNullableFilter<"User"> | string | null
    businessCategory?: StringNullableFilter<"User"> | string | null
    businessAddress?: StringNullableFilter<"User"> | string | null
    nim?: StringNullableFilter<"User"> | string | null
    semester?: IntNullableFilter<"User"> | number | null
    schoolName?: StringNullableFilter<"User"> | string | null
    subject?: StringNullableFilter<"User"> | string | null
    grade?: StringNullableFilter<"User"> | string | null
    lastLogin?: DateTimeNullableFilter<"User"> | Date | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    lecturer?: XOR<LecturerNullableScalarRelationFilter, LecturerWhereInput> | null
    bookings?: ConsultationBookingListRelationFilter
    createdSeminars?: SeminarListRelationFilter
    seminarRegistrations?: SeminarRegistrationListRelationFilter
    activityLogs?: ActivityLogListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    avatar?: SortOrder
    profilePictureUrl?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    status?: SortOrder
    organization?: SortOrderInput | SortOrder
    businessName?: SortOrderInput | SortOrder
    businessCategory?: SortOrderInput | SortOrder
    businessAddress?: SortOrderInput | SortOrder
    nim?: SortOrderInput | SortOrder
    semester?: SortOrderInput | SortOrder
    schoolName?: SortOrderInput | SortOrder
    subject?: SortOrderInput | SortOrder
    grade?: SortOrderInput | SortOrder
    lastLogin?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lecturer?: LecturerOrderByWithRelationInput
    bookings?: ConsultationBookingOrderByRelationAggregateInput
    createdSeminars?: SeminarOrderByRelationAggregateInput
    seminarRegistrations?: SeminarRegistrationOrderByRelationAggregateInput
    activityLogs?: ActivityLogOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    avatar?: StringFilter<"User"> | string
    profilePictureUrl?: StringNullableFilter<"User"> | string | null
    phone?: StringNullableFilter<"User"> | string | null
    status?: StringFilter<"User"> | string
    organization?: StringNullableFilter<"User"> | string | null
    businessName?: StringNullableFilter<"User"> | string | null
    businessCategory?: StringNullableFilter<"User"> | string | null
    businessAddress?: StringNullableFilter<"User"> | string | null
    nim?: StringNullableFilter<"User"> | string | null
    semester?: IntNullableFilter<"User"> | number | null
    schoolName?: StringNullableFilter<"User"> | string | null
    subject?: StringNullableFilter<"User"> | string | null
    grade?: StringNullableFilter<"User"> | string | null
    lastLogin?: DateTimeNullableFilter<"User"> | Date | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    lecturer?: XOR<LecturerNullableScalarRelationFilter, LecturerWhereInput> | null
    bookings?: ConsultationBookingListRelationFilter
    createdSeminars?: SeminarListRelationFilter
    seminarRegistrations?: SeminarRegistrationListRelationFilter
    activityLogs?: ActivityLogListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    avatar?: SortOrder
    profilePictureUrl?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    status?: SortOrder
    organization?: SortOrderInput | SortOrder
    businessName?: SortOrderInput | SortOrder
    businessCategory?: SortOrderInput | SortOrder
    businessAddress?: SortOrderInput | SortOrder
    nim?: SortOrderInput | SortOrder
    semester?: SortOrderInput | SortOrder
    schoolName?: SortOrderInput | SortOrder
    subject?: SortOrderInput | SortOrder
    grade?: SortOrderInput | SortOrder
    lastLogin?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    passwordHash?: StringWithAggregatesFilter<"User"> | string
    role?: EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole
    avatar?: StringWithAggregatesFilter<"User"> | string
    profilePictureUrl?: StringNullableWithAggregatesFilter<"User"> | string | null
    phone?: StringNullableWithAggregatesFilter<"User"> | string | null
    status?: StringWithAggregatesFilter<"User"> | string
    organization?: StringNullableWithAggregatesFilter<"User"> | string | null
    businessName?: StringNullableWithAggregatesFilter<"User"> | string | null
    businessCategory?: StringNullableWithAggregatesFilter<"User"> | string | null
    businessAddress?: StringNullableWithAggregatesFilter<"User"> | string | null
    nim?: StringNullableWithAggregatesFilter<"User"> | string | null
    semester?: IntNullableWithAggregatesFilter<"User"> | number | null
    schoolName?: StringNullableWithAggregatesFilter<"User"> | string | null
    subject?: StringNullableWithAggregatesFilter<"User"> | string | null
    grade?: StringNullableWithAggregatesFilter<"User"> | string | null
    lastLogin?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type StudyProgramWhereInput = {
    AND?: StudyProgramWhereInput | StudyProgramWhereInput[]
    OR?: StudyProgramWhereInput[]
    NOT?: StudyProgramWhereInput | StudyProgramWhereInput[]
    id?: UuidFilter<"StudyProgram"> | string
    code?: StringFilter<"StudyProgram"> | string
    name?: StringFilter<"StudyProgram"> | string
    faculty?: StringFilter<"StudyProgram"> | string
    createdAt?: DateTimeFilter<"StudyProgram"> | Date | string
    lecturers?: LecturerListRelationFilter
    students?: StudentListRelationFilter
  }

  export type StudyProgramOrderByWithRelationInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    faculty?: SortOrder
    createdAt?: SortOrder
    lecturers?: LecturerOrderByRelationAggregateInput
    students?: StudentOrderByRelationAggregateInput
  }

  export type StudyProgramWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    code?: string
    AND?: StudyProgramWhereInput | StudyProgramWhereInput[]
    OR?: StudyProgramWhereInput[]
    NOT?: StudyProgramWhereInput | StudyProgramWhereInput[]
    name?: StringFilter<"StudyProgram"> | string
    faculty?: StringFilter<"StudyProgram"> | string
    createdAt?: DateTimeFilter<"StudyProgram"> | Date | string
    lecturers?: LecturerListRelationFilter
    students?: StudentListRelationFilter
  }, "id" | "code">

  export type StudyProgramOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    faculty?: SortOrder
    createdAt?: SortOrder
    _count?: StudyProgramCountOrderByAggregateInput
    _max?: StudyProgramMaxOrderByAggregateInput
    _min?: StudyProgramMinOrderByAggregateInput
  }

  export type StudyProgramScalarWhereWithAggregatesInput = {
    AND?: StudyProgramScalarWhereWithAggregatesInput | StudyProgramScalarWhereWithAggregatesInput[]
    OR?: StudyProgramScalarWhereWithAggregatesInput[]
    NOT?: StudyProgramScalarWhereWithAggregatesInput | StudyProgramScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"StudyProgram"> | string
    code?: StringWithAggregatesFilter<"StudyProgram"> | string
    name?: StringWithAggregatesFilter<"StudyProgram"> | string
    faculty?: StringWithAggregatesFilter<"StudyProgram"> | string
    createdAt?: DateTimeWithAggregatesFilter<"StudyProgram"> | Date | string
  }

  export type LecturerWhereInput = {
    AND?: LecturerWhereInput | LecturerWhereInput[]
    OR?: LecturerWhereInput[]
    NOT?: LecturerWhereInput | LecturerWhereInput[]
    id?: UuidFilter<"Lecturer"> | string
    lecturerCode?: StringFilter<"Lecturer"> | string
    userId?: UuidNullableFilter<"Lecturer"> | string | null
    studyProgramId?: UuidNullableFilter<"Lecturer"> | string | null
    name?: StringFilter<"Lecturer"> | string
    email?: StringFilter<"Lecturer"> | string
    photo?: StringFilter<"Lecturer"> | string
    specialization?: StringFilter<"Lecturer"> | string
    university?: StringFilter<"Lecturer"> | string
    rating?: FloatFilter<"Lecturer"> | number
    experience?: StringFilter<"Lecturer"> | string
    expertise?: StringNullableListFilter<"Lecturer">
    phone?: StringFilter<"Lecturer"> | string
    bio?: StringFilter<"Lecturer"> | string
    createdAt?: DateTimeFilter<"Lecturer"> | Date | string
    updatedAt?: DateTimeFilter<"Lecturer"> | Date | string
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    studyProgram?: XOR<StudyProgramNullableScalarRelationFilter, StudyProgramWhereInput> | null
    availabilities?: LecturerAvailabilityListRelationFilter
    bookings?: ConsultationBookingListRelationFilter
    sessions?: ConsultationSessionListRelationFilter
    seminars?: SeminarListRelationFilter
  }

  export type LecturerOrderByWithRelationInput = {
    id?: SortOrder
    lecturerCode?: SortOrder
    userId?: SortOrderInput | SortOrder
    studyProgramId?: SortOrderInput | SortOrder
    name?: SortOrder
    email?: SortOrder
    photo?: SortOrder
    specialization?: SortOrder
    university?: SortOrder
    rating?: SortOrder
    experience?: SortOrder
    expertise?: SortOrder
    phone?: SortOrder
    bio?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    studyProgram?: StudyProgramOrderByWithRelationInput
    availabilities?: LecturerAvailabilityOrderByRelationAggregateInput
    bookings?: ConsultationBookingOrderByRelationAggregateInput
    sessions?: ConsultationSessionOrderByRelationAggregateInput
    seminars?: SeminarOrderByRelationAggregateInput
  }

  export type LecturerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    lecturerCode?: string
    userId?: string
    email?: string
    AND?: LecturerWhereInput | LecturerWhereInput[]
    OR?: LecturerWhereInput[]
    NOT?: LecturerWhereInput | LecturerWhereInput[]
    studyProgramId?: UuidNullableFilter<"Lecturer"> | string | null
    name?: StringFilter<"Lecturer"> | string
    photo?: StringFilter<"Lecturer"> | string
    specialization?: StringFilter<"Lecturer"> | string
    university?: StringFilter<"Lecturer"> | string
    rating?: FloatFilter<"Lecturer"> | number
    experience?: StringFilter<"Lecturer"> | string
    expertise?: StringNullableListFilter<"Lecturer">
    phone?: StringFilter<"Lecturer"> | string
    bio?: StringFilter<"Lecturer"> | string
    createdAt?: DateTimeFilter<"Lecturer"> | Date | string
    updatedAt?: DateTimeFilter<"Lecturer"> | Date | string
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    studyProgram?: XOR<StudyProgramNullableScalarRelationFilter, StudyProgramWhereInput> | null
    availabilities?: LecturerAvailabilityListRelationFilter
    bookings?: ConsultationBookingListRelationFilter
    sessions?: ConsultationSessionListRelationFilter
    seminars?: SeminarListRelationFilter
  }, "id" | "lecturerCode" | "userId" | "email">

  export type LecturerOrderByWithAggregationInput = {
    id?: SortOrder
    lecturerCode?: SortOrder
    userId?: SortOrderInput | SortOrder
    studyProgramId?: SortOrderInput | SortOrder
    name?: SortOrder
    email?: SortOrder
    photo?: SortOrder
    specialization?: SortOrder
    university?: SortOrder
    rating?: SortOrder
    experience?: SortOrder
    expertise?: SortOrder
    phone?: SortOrder
    bio?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: LecturerCountOrderByAggregateInput
    _avg?: LecturerAvgOrderByAggregateInput
    _max?: LecturerMaxOrderByAggregateInput
    _min?: LecturerMinOrderByAggregateInput
    _sum?: LecturerSumOrderByAggregateInput
  }

  export type LecturerScalarWhereWithAggregatesInput = {
    AND?: LecturerScalarWhereWithAggregatesInput | LecturerScalarWhereWithAggregatesInput[]
    OR?: LecturerScalarWhereWithAggregatesInput[]
    NOT?: LecturerScalarWhereWithAggregatesInput | LecturerScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Lecturer"> | string
    lecturerCode?: StringWithAggregatesFilter<"Lecturer"> | string
    userId?: UuidNullableWithAggregatesFilter<"Lecturer"> | string | null
    studyProgramId?: UuidNullableWithAggregatesFilter<"Lecturer"> | string | null
    name?: StringWithAggregatesFilter<"Lecturer"> | string
    email?: StringWithAggregatesFilter<"Lecturer"> | string
    photo?: StringWithAggregatesFilter<"Lecturer"> | string
    specialization?: StringWithAggregatesFilter<"Lecturer"> | string
    university?: StringWithAggregatesFilter<"Lecturer"> | string
    rating?: FloatWithAggregatesFilter<"Lecturer"> | number
    experience?: StringWithAggregatesFilter<"Lecturer"> | string
    expertise?: StringNullableListFilter<"Lecturer">
    phone?: StringWithAggregatesFilter<"Lecturer"> | string
    bio?: StringWithAggregatesFilter<"Lecturer"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Lecturer"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Lecturer"> | Date | string
  }

  export type StudentWhereInput = {
    AND?: StudentWhereInput | StudentWhereInput[]
    OR?: StudentWhereInput[]
    NOT?: StudentWhereInput | StudentWhereInput[]
    id?: UuidFilter<"Student"> | string
    nim?: StringFilter<"Student"> | string
    name?: StringFilter<"Student"> | string
    email?: StringFilter<"Student"> | string
    studyProgramId?: UuidNullableFilter<"Student"> | string | null
    semester?: IntFilter<"Student"> | number
    phone?: StringFilter<"Student"> | string
    studyProgram?: XOR<StudyProgramNullableScalarRelationFilter, StudyProgramWhereInput> | null
  }

  export type StudentOrderByWithRelationInput = {
    id?: SortOrder
    nim?: SortOrder
    name?: SortOrder
    email?: SortOrder
    studyProgramId?: SortOrderInput | SortOrder
    semester?: SortOrder
    phone?: SortOrder
    studyProgram?: StudyProgramOrderByWithRelationInput
  }

  export type StudentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    nim?: string
    email?: string
    AND?: StudentWhereInput | StudentWhereInput[]
    OR?: StudentWhereInput[]
    NOT?: StudentWhereInput | StudentWhereInput[]
    name?: StringFilter<"Student"> | string
    studyProgramId?: UuidNullableFilter<"Student"> | string | null
    semester?: IntFilter<"Student"> | number
    phone?: StringFilter<"Student"> | string
    studyProgram?: XOR<StudyProgramNullableScalarRelationFilter, StudyProgramWhereInput> | null
  }, "id" | "nim" | "email">

  export type StudentOrderByWithAggregationInput = {
    id?: SortOrder
    nim?: SortOrder
    name?: SortOrder
    email?: SortOrder
    studyProgramId?: SortOrderInput | SortOrder
    semester?: SortOrder
    phone?: SortOrder
    _count?: StudentCountOrderByAggregateInput
    _avg?: StudentAvgOrderByAggregateInput
    _max?: StudentMaxOrderByAggregateInput
    _min?: StudentMinOrderByAggregateInput
    _sum?: StudentSumOrderByAggregateInput
  }

  export type StudentScalarWhereWithAggregatesInput = {
    AND?: StudentScalarWhereWithAggregatesInput | StudentScalarWhereWithAggregatesInput[]
    OR?: StudentScalarWhereWithAggregatesInput[]
    NOT?: StudentScalarWhereWithAggregatesInput | StudentScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Student"> | string
    nim?: StringWithAggregatesFilter<"Student"> | string
    name?: StringWithAggregatesFilter<"Student"> | string
    email?: StringWithAggregatesFilter<"Student"> | string
    studyProgramId?: UuidNullableWithAggregatesFilter<"Student"> | string | null
    semester?: IntWithAggregatesFilter<"Student"> | number
    phone?: StringWithAggregatesFilter<"Student"> | string
  }

  export type SemesterWhereInput = {
    AND?: SemesterWhereInput | SemesterWhereInput[]
    OR?: SemesterWhereInput[]
    NOT?: SemesterWhereInput | SemesterWhereInput[]
    id?: UuidFilter<"Semester"> | string
    name?: StringFilter<"Semester"> | string
    startDate?: DateTimeFilter<"Semester"> | Date | string
    endDate?: DateTimeFilter<"Semester"> | Date | string
    isActive?: BoolFilter<"Semester"> | boolean
    createdAt?: DateTimeFilter<"Semester"> | Date | string
    availabilities?: LecturerAvailabilityListRelationFilter
    bookings?: ConsultationBookingListRelationFilter
  }

  export type SemesterOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    availabilities?: LecturerAvailabilityOrderByRelationAggregateInput
    bookings?: ConsultationBookingOrderByRelationAggregateInput
  }

  export type SemesterWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: SemesterWhereInput | SemesterWhereInput[]
    OR?: SemesterWhereInput[]
    NOT?: SemesterWhereInput | SemesterWhereInput[]
    startDate?: DateTimeFilter<"Semester"> | Date | string
    endDate?: DateTimeFilter<"Semester"> | Date | string
    isActive?: BoolFilter<"Semester"> | boolean
    createdAt?: DateTimeFilter<"Semester"> | Date | string
    availabilities?: LecturerAvailabilityListRelationFilter
    bookings?: ConsultationBookingListRelationFilter
  }, "id" | "name">

  export type SemesterOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    _count?: SemesterCountOrderByAggregateInput
    _max?: SemesterMaxOrderByAggregateInput
    _min?: SemesterMinOrderByAggregateInput
  }

  export type SemesterScalarWhereWithAggregatesInput = {
    AND?: SemesterScalarWhereWithAggregatesInput | SemesterScalarWhereWithAggregatesInput[]
    OR?: SemesterScalarWhereWithAggregatesInput[]
    NOT?: SemesterScalarWhereWithAggregatesInput | SemesterScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Semester"> | string
    name?: StringWithAggregatesFilter<"Semester"> | string
    startDate?: DateTimeWithAggregatesFilter<"Semester"> | Date | string
    endDate?: DateTimeWithAggregatesFilter<"Semester"> | Date | string
    isActive?: BoolWithAggregatesFilter<"Semester"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Semester"> | Date | string
  }

  export type LecturerAvailabilityWhereInput = {
    AND?: LecturerAvailabilityWhereInput | LecturerAvailabilityWhereInput[]
    OR?: LecturerAvailabilityWhereInput[]
    NOT?: LecturerAvailabilityWhereInput | LecturerAvailabilityWhereInput[]
    id?: UuidFilter<"LecturerAvailability"> | string
    lecturerId?: UuidFilter<"LecturerAvailability"> | string
    semesterId?: UuidFilter<"LecturerAvailability"> | string
    dayOfWeek?: StringFilter<"LecturerAvailability"> | string
    timeSlots?: JsonFilter<"LecturerAvailability">
    isActive?: BoolFilter<"LecturerAvailability"> | boolean
    createdAt?: DateTimeFilter<"LecturerAvailability"> | Date | string
    lecturer?: XOR<LecturerScalarRelationFilter, LecturerWhereInput>
    semester?: XOR<SemesterScalarRelationFilter, SemesterWhereInput>
  }

  export type LecturerAvailabilityOrderByWithRelationInput = {
    id?: SortOrder
    lecturerId?: SortOrder
    semesterId?: SortOrder
    dayOfWeek?: SortOrder
    timeSlots?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    lecturer?: LecturerOrderByWithRelationInput
    semester?: SemesterOrderByWithRelationInput
  }

  export type LecturerAvailabilityWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    lecturerId_semesterId_dayOfWeek?: LecturerAvailabilityLecturerIdSemesterIdDayOfWeekCompoundUniqueInput
    AND?: LecturerAvailabilityWhereInput | LecturerAvailabilityWhereInput[]
    OR?: LecturerAvailabilityWhereInput[]
    NOT?: LecturerAvailabilityWhereInput | LecturerAvailabilityWhereInput[]
    lecturerId?: UuidFilter<"LecturerAvailability"> | string
    semesterId?: UuidFilter<"LecturerAvailability"> | string
    dayOfWeek?: StringFilter<"LecturerAvailability"> | string
    timeSlots?: JsonFilter<"LecturerAvailability">
    isActive?: BoolFilter<"LecturerAvailability"> | boolean
    createdAt?: DateTimeFilter<"LecturerAvailability"> | Date | string
    lecturer?: XOR<LecturerScalarRelationFilter, LecturerWhereInput>
    semester?: XOR<SemesterScalarRelationFilter, SemesterWhereInput>
  }, "id" | "lecturerId_semesterId_dayOfWeek">

  export type LecturerAvailabilityOrderByWithAggregationInput = {
    id?: SortOrder
    lecturerId?: SortOrder
    semesterId?: SortOrder
    dayOfWeek?: SortOrder
    timeSlots?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    _count?: LecturerAvailabilityCountOrderByAggregateInput
    _max?: LecturerAvailabilityMaxOrderByAggregateInput
    _min?: LecturerAvailabilityMinOrderByAggregateInput
  }

  export type LecturerAvailabilityScalarWhereWithAggregatesInput = {
    AND?: LecturerAvailabilityScalarWhereWithAggregatesInput | LecturerAvailabilityScalarWhereWithAggregatesInput[]
    OR?: LecturerAvailabilityScalarWhereWithAggregatesInput[]
    NOT?: LecturerAvailabilityScalarWhereWithAggregatesInput | LecturerAvailabilityScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"LecturerAvailability"> | string
    lecturerId?: UuidWithAggregatesFilter<"LecturerAvailability"> | string
    semesterId?: UuidWithAggregatesFilter<"LecturerAvailability"> | string
    dayOfWeek?: StringWithAggregatesFilter<"LecturerAvailability"> | string
    timeSlots?: JsonWithAggregatesFilter<"LecturerAvailability">
    isActive?: BoolWithAggregatesFilter<"LecturerAvailability"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"LecturerAvailability"> | Date | string
  }

  export type ConsultationBookingWhereInput = {
    AND?: ConsultationBookingWhereInput | ConsultationBookingWhereInput[]
    OR?: ConsultationBookingWhereInput[]
    NOT?: ConsultationBookingWhereInput | ConsultationBookingWhereInput[]
    id?: UuidFilter<"ConsultationBooking"> | string
    userId?: UuidFilter<"ConsultationBooking"> | string
    lecturerId?: UuidFilter<"ConsultationBooking"> | string
    semesterId?: UuidFilter<"ConsultationBooking"> | string
    sessionId?: UuidNullableFilter<"ConsultationBooking"> | string | null
    consultationType?: EnumConsultationTypeFilter<"ConsultationBooking"> | $Enums.ConsultationType
    title?: StringFilter<"ConsultationBooking"> | string
    category?: StringFilter<"ConsultationBooking"> | string
    priority?: StringFilter<"ConsultationBooking"> | string
    description?: StringFilter<"ConsultationBooking"> | string
    organization?: StringFilter<"ConsultationBooking"> | string
    contactPerson?: StringFilter<"ConsultationBooking"> | string
    phone?: StringFilter<"ConsultationBooking"> | string
    email?: StringFilter<"ConsultationBooking"> | string
    scheduledDate?: DateTimeFilter<"ConsultationBooking"> | Date | string
    scheduledDay?: StringFilter<"ConsultationBooking"> | string
    startTime?: StringFilter<"ConsultationBooking"> | string
    endTime?: StringFilter<"ConsultationBooking"> | string
    status?: EnumConsultationStatusFilter<"ConsultationBooking"> | $Enums.ConsultationStatus
    feedback?: StringNullableFilter<"ConsultationBooking"> | string | null
    rating?: IntNullableFilter<"ConsultationBooking"> | number | null
    zoomLink?: StringNullableFilter<"ConsultationBooking"> | string | null
    rescheduleNote?: StringNullableFilter<"ConsultationBooking"> | string | null
    attachmentFileName?: StringNullableFilter<"ConsultationBooking"> | string | null
    attachmentUrl?: StringNullableFilter<"ConsultationBooking"> | string | null
    completedAt?: DateTimeNullableFilter<"ConsultationBooking"> | Date | string | null
    createdAt?: DateTimeFilter<"ConsultationBooking"> | Date | string
    updatedAt?: DateTimeFilter<"ConsultationBooking"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    lecturer?: XOR<LecturerScalarRelationFilter, LecturerWhereInput>
    semester?: XOR<SemesterScalarRelationFilter, SemesterWhereInput>
    session?: XOR<ConsultationSessionNullableScalarRelationFilter, ConsultationSessionWhereInput> | null
  }

  export type ConsultationBookingOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    lecturerId?: SortOrder
    semesterId?: SortOrder
    sessionId?: SortOrderInput | SortOrder
    consultationType?: SortOrder
    title?: SortOrder
    category?: SortOrder
    priority?: SortOrder
    description?: SortOrder
    organization?: SortOrder
    contactPerson?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    scheduledDate?: SortOrder
    scheduledDay?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    status?: SortOrder
    feedback?: SortOrderInput | SortOrder
    rating?: SortOrderInput | SortOrder
    zoomLink?: SortOrderInput | SortOrder
    rescheduleNote?: SortOrderInput | SortOrder
    attachmentFileName?: SortOrderInput | SortOrder
    attachmentUrl?: SortOrderInput | SortOrder
    completedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    lecturer?: LecturerOrderByWithRelationInput
    semester?: SemesterOrderByWithRelationInput
    session?: ConsultationSessionOrderByWithRelationInput
  }

  export type ConsultationBookingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ConsultationBookingWhereInput | ConsultationBookingWhereInput[]
    OR?: ConsultationBookingWhereInput[]
    NOT?: ConsultationBookingWhereInput | ConsultationBookingWhereInput[]
    userId?: UuidFilter<"ConsultationBooking"> | string
    lecturerId?: UuidFilter<"ConsultationBooking"> | string
    semesterId?: UuidFilter<"ConsultationBooking"> | string
    sessionId?: UuidNullableFilter<"ConsultationBooking"> | string | null
    consultationType?: EnumConsultationTypeFilter<"ConsultationBooking"> | $Enums.ConsultationType
    title?: StringFilter<"ConsultationBooking"> | string
    category?: StringFilter<"ConsultationBooking"> | string
    priority?: StringFilter<"ConsultationBooking"> | string
    description?: StringFilter<"ConsultationBooking"> | string
    organization?: StringFilter<"ConsultationBooking"> | string
    contactPerson?: StringFilter<"ConsultationBooking"> | string
    phone?: StringFilter<"ConsultationBooking"> | string
    email?: StringFilter<"ConsultationBooking"> | string
    scheduledDate?: DateTimeFilter<"ConsultationBooking"> | Date | string
    scheduledDay?: StringFilter<"ConsultationBooking"> | string
    startTime?: StringFilter<"ConsultationBooking"> | string
    endTime?: StringFilter<"ConsultationBooking"> | string
    status?: EnumConsultationStatusFilter<"ConsultationBooking"> | $Enums.ConsultationStatus
    feedback?: StringNullableFilter<"ConsultationBooking"> | string | null
    rating?: IntNullableFilter<"ConsultationBooking"> | number | null
    zoomLink?: StringNullableFilter<"ConsultationBooking"> | string | null
    rescheduleNote?: StringNullableFilter<"ConsultationBooking"> | string | null
    attachmentFileName?: StringNullableFilter<"ConsultationBooking"> | string | null
    attachmentUrl?: StringNullableFilter<"ConsultationBooking"> | string | null
    completedAt?: DateTimeNullableFilter<"ConsultationBooking"> | Date | string | null
    createdAt?: DateTimeFilter<"ConsultationBooking"> | Date | string
    updatedAt?: DateTimeFilter<"ConsultationBooking"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    lecturer?: XOR<LecturerScalarRelationFilter, LecturerWhereInput>
    semester?: XOR<SemesterScalarRelationFilter, SemesterWhereInput>
    session?: XOR<ConsultationSessionNullableScalarRelationFilter, ConsultationSessionWhereInput> | null
  }, "id">

  export type ConsultationBookingOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    lecturerId?: SortOrder
    semesterId?: SortOrder
    sessionId?: SortOrderInput | SortOrder
    consultationType?: SortOrder
    title?: SortOrder
    category?: SortOrder
    priority?: SortOrder
    description?: SortOrder
    organization?: SortOrder
    contactPerson?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    scheduledDate?: SortOrder
    scheduledDay?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    status?: SortOrder
    feedback?: SortOrderInput | SortOrder
    rating?: SortOrderInput | SortOrder
    zoomLink?: SortOrderInput | SortOrder
    rescheduleNote?: SortOrderInput | SortOrder
    attachmentFileName?: SortOrderInput | SortOrder
    attachmentUrl?: SortOrderInput | SortOrder
    completedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ConsultationBookingCountOrderByAggregateInput
    _avg?: ConsultationBookingAvgOrderByAggregateInput
    _max?: ConsultationBookingMaxOrderByAggregateInput
    _min?: ConsultationBookingMinOrderByAggregateInput
    _sum?: ConsultationBookingSumOrderByAggregateInput
  }

  export type ConsultationBookingScalarWhereWithAggregatesInput = {
    AND?: ConsultationBookingScalarWhereWithAggregatesInput | ConsultationBookingScalarWhereWithAggregatesInput[]
    OR?: ConsultationBookingScalarWhereWithAggregatesInput[]
    NOT?: ConsultationBookingScalarWhereWithAggregatesInput | ConsultationBookingScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"ConsultationBooking"> | string
    userId?: UuidWithAggregatesFilter<"ConsultationBooking"> | string
    lecturerId?: UuidWithAggregatesFilter<"ConsultationBooking"> | string
    semesterId?: UuidWithAggregatesFilter<"ConsultationBooking"> | string
    sessionId?: UuidNullableWithAggregatesFilter<"ConsultationBooking"> | string | null
    consultationType?: EnumConsultationTypeWithAggregatesFilter<"ConsultationBooking"> | $Enums.ConsultationType
    title?: StringWithAggregatesFilter<"ConsultationBooking"> | string
    category?: StringWithAggregatesFilter<"ConsultationBooking"> | string
    priority?: StringWithAggregatesFilter<"ConsultationBooking"> | string
    description?: StringWithAggregatesFilter<"ConsultationBooking"> | string
    organization?: StringWithAggregatesFilter<"ConsultationBooking"> | string
    contactPerson?: StringWithAggregatesFilter<"ConsultationBooking"> | string
    phone?: StringWithAggregatesFilter<"ConsultationBooking"> | string
    email?: StringWithAggregatesFilter<"ConsultationBooking"> | string
    scheduledDate?: DateTimeWithAggregatesFilter<"ConsultationBooking"> | Date | string
    scheduledDay?: StringWithAggregatesFilter<"ConsultationBooking"> | string
    startTime?: StringWithAggregatesFilter<"ConsultationBooking"> | string
    endTime?: StringWithAggregatesFilter<"ConsultationBooking"> | string
    status?: EnumConsultationStatusWithAggregatesFilter<"ConsultationBooking"> | $Enums.ConsultationStatus
    feedback?: StringNullableWithAggregatesFilter<"ConsultationBooking"> | string | null
    rating?: IntNullableWithAggregatesFilter<"ConsultationBooking"> | number | null
    zoomLink?: StringNullableWithAggregatesFilter<"ConsultationBooking"> | string | null
    rescheduleNote?: StringNullableWithAggregatesFilter<"ConsultationBooking"> | string | null
    attachmentFileName?: StringNullableWithAggregatesFilter<"ConsultationBooking"> | string | null
    attachmentUrl?: StringNullableWithAggregatesFilter<"ConsultationBooking"> | string | null
    completedAt?: DateTimeNullableWithAggregatesFilter<"ConsultationBooking"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"ConsultationBooking"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ConsultationBooking"> | Date | string
  }

  export type ConsultationSessionWhereInput = {
    AND?: ConsultationSessionWhereInput | ConsultationSessionWhereInput[]
    OR?: ConsultationSessionWhereInput[]
    NOT?: ConsultationSessionWhereInput | ConsultationSessionWhereInput[]
    id?: UuidFilter<"ConsultationSession"> | string
    lecturerId?: UuidFilter<"ConsultationSession"> | string
    scheduledDate?: DateTimeFilter<"ConsultationSession"> | Date | string
    startTime?: StringFilter<"ConsultationSession"> | string
    endTime?: StringFilter<"ConsultationSession"> | string
    status?: StringFilter<"ConsultationSession"> | string
    zoomLink?: StringNullableFilter<"ConsultationSession"> | string | null
    notes?: StringNullableFilter<"ConsultationSession"> | string | null
    confirmedAt?: DateTimeNullableFilter<"ConsultationSession"> | Date | string | null
    confirmedBy?: UuidNullableFilter<"ConsultationSession"> | string | null
    evaluationLink?: StringNullableFilter<"ConsultationSession"> | string | null
    createdAt?: DateTimeFilter<"ConsultationSession"> | Date | string
    updatedAt?: DateTimeFilter<"ConsultationSession"> | Date | string
    lecturer?: XOR<LecturerScalarRelationFilter, LecturerWhereInput>
    bookings?: ConsultationBookingListRelationFilter
  }

  export type ConsultationSessionOrderByWithRelationInput = {
    id?: SortOrder
    lecturerId?: SortOrder
    scheduledDate?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    status?: SortOrder
    zoomLink?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    confirmedAt?: SortOrderInput | SortOrder
    confirmedBy?: SortOrderInput | SortOrder
    evaluationLink?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lecturer?: LecturerOrderByWithRelationInput
    bookings?: ConsultationBookingOrderByRelationAggregateInput
  }

  export type ConsultationSessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ConsultationSessionWhereInput | ConsultationSessionWhereInput[]
    OR?: ConsultationSessionWhereInput[]
    NOT?: ConsultationSessionWhereInput | ConsultationSessionWhereInput[]
    lecturerId?: UuidFilter<"ConsultationSession"> | string
    scheduledDate?: DateTimeFilter<"ConsultationSession"> | Date | string
    startTime?: StringFilter<"ConsultationSession"> | string
    endTime?: StringFilter<"ConsultationSession"> | string
    status?: StringFilter<"ConsultationSession"> | string
    zoomLink?: StringNullableFilter<"ConsultationSession"> | string | null
    notes?: StringNullableFilter<"ConsultationSession"> | string | null
    confirmedAt?: DateTimeNullableFilter<"ConsultationSession"> | Date | string | null
    confirmedBy?: UuidNullableFilter<"ConsultationSession"> | string | null
    evaluationLink?: StringNullableFilter<"ConsultationSession"> | string | null
    createdAt?: DateTimeFilter<"ConsultationSession"> | Date | string
    updatedAt?: DateTimeFilter<"ConsultationSession"> | Date | string
    lecturer?: XOR<LecturerScalarRelationFilter, LecturerWhereInput>
    bookings?: ConsultationBookingListRelationFilter
  }, "id">

  export type ConsultationSessionOrderByWithAggregationInput = {
    id?: SortOrder
    lecturerId?: SortOrder
    scheduledDate?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    status?: SortOrder
    zoomLink?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    confirmedAt?: SortOrderInput | SortOrder
    confirmedBy?: SortOrderInput | SortOrder
    evaluationLink?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ConsultationSessionCountOrderByAggregateInput
    _max?: ConsultationSessionMaxOrderByAggregateInput
    _min?: ConsultationSessionMinOrderByAggregateInput
  }

  export type ConsultationSessionScalarWhereWithAggregatesInput = {
    AND?: ConsultationSessionScalarWhereWithAggregatesInput | ConsultationSessionScalarWhereWithAggregatesInput[]
    OR?: ConsultationSessionScalarWhereWithAggregatesInput[]
    NOT?: ConsultationSessionScalarWhereWithAggregatesInput | ConsultationSessionScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"ConsultationSession"> | string
    lecturerId?: UuidWithAggregatesFilter<"ConsultationSession"> | string
    scheduledDate?: DateTimeWithAggregatesFilter<"ConsultationSession"> | Date | string
    startTime?: StringWithAggregatesFilter<"ConsultationSession"> | string
    endTime?: StringWithAggregatesFilter<"ConsultationSession"> | string
    status?: StringWithAggregatesFilter<"ConsultationSession"> | string
    zoomLink?: StringNullableWithAggregatesFilter<"ConsultationSession"> | string | null
    notes?: StringNullableWithAggregatesFilter<"ConsultationSession"> | string | null
    confirmedAt?: DateTimeNullableWithAggregatesFilter<"ConsultationSession"> | Date | string | null
    confirmedBy?: UuidNullableWithAggregatesFilter<"ConsultationSession"> | string | null
    evaluationLink?: StringNullableWithAggregatesFilter<"ConsultationSession"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"ConsultationSession"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ConsultationSession"> | Date | string
  }

  export type SeminarWhereInput = {
    AND?: SeminarWhereInput | SeminarWhereInput[]
    OR?: SeminarWhereInput[]
    NOT?: SeminarWhereInput | SeminarWhereInput[]
    id?: UuidFilter<"Seminar"> | string
    title?: StringFilter<"Seminar"> | string
    description?: StringFilter<"Seminar"> | string
    host?: StringFilter<"Seminar"> | string
    hostId?: UuidNullableFilter<"Seminar"> | string | null
    eventDate?: DateTimeFilter<"Seminar"> | Date | string
    eventTime?: StringFilter<"Seminar"> | string
    location?: StringFilter<"Seminar"> | string
    zoomLink?: StringNullableFilter<"Seminar"> | string | null
    posterUrl?: StringNullableFilter<"Seminar"> | string | null
    status?: EnumSeminarStatusFilter<"Seminar"> | $Enums.SeminarStatus
    quota?: IntFilter<"Seminar"> | number
    category?: EnumSeminarCategoryFilter<"Seminar"> | $Enums.SeminarCategory
    targetAudience?: StringNullableListFilter<"Seminar">
    createdBy?: UuidFilter<"Seminar"> | string
    createdAt?: DateTimeFilter<"Seminar"> | Date | string
    updatedAt?: DateTimeFilter<"Seminar"> | Date | string
    creator?: XOR<UserScalarRelationFilter, UserWhereInput>
    lecturer?: XOR<LecturerNullableScalarRelationFilter, LecturerWhereInput> | null
    registrations?: SeminarRegistrationListRelationFilter
  }

  export type SeminarOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    host?: SortOrder
    hostId?: SortOrderInput | SortOrder
    eventDate?: SortOrder
    eventTime?: SortOrder
    location?: SortOrder
    zoomLink?: SortOrderInput | SortOrder
    posterUrl?: SortOrderInput | SortOrder
    status?: SortOrder
    quota?: SortOrder
    category?: SortOrder
    targetAudience?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    creator?: UserOrderByWithRelationInput
    lecturer?: LecturerOrderByWithRelationInput
    registrations?: SeminarRegistrationOrderByRelationAggregateInput
  }

  export type SeminarWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SeminarWhereInput | SeminarWhereInput[]
    OR?: SeminarWhereInput[]
    NOT?: SeminarWhereInput | SeminarWhereInput[]
    title?: StringFilter<"Seminar"> | string
    description?: StringFilter<"Seminar"> | string
    host?: StringFilter<"Seminar"> | string
    hostId?: UuidNullableFilter<"Seminar"> | string | null
    eventDate?: DateTimeFilter<"Seminar"> | Date | string
    eventTime?: StringFilter<"Seminar"> | string
    location?: StringFilter<"Seminar"> | string
    zoomLink?: StringNullableFilter<"Seminar"> | string | null
    posterUrl?: StringNullableFilter<"Seminar"> | string | null
    status?: EnumSeminarStatusFilter<"Seminar"> | $Enums.SeminarStatus
    quota?: IntFilter<"Seminar"> | number
    category?: EnumSeminarCategoryFilter<"Seminar"> | $Enums.SeminarCategory
    targetAudience?: StringNullableListFilter<"Seminar">
    createdBy?: UuidFilter<"Seminar"> | string
    createdAt?: DateTimeFilter<"Seminar"> | Date | string
    updatedAt?: DateTimeFilter<"Seminar"> | Date | string
    creator?: XOR<UserScalarRelationFilter, UserWhereInput>
    lecturer?: XOR<LecturerNullableScalarRelationFilter, LecturerWhereInput> | null
    registrations?: SeminarRegistrationListRelationFilter
  }, "id">

  export type SeminarOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    host?: SortOrder
    hostId?: SortOrderInput | SortOrder
    eventDate?: SortOrder
    eventTime?: SortOrder
    location?: SortOrder
    zoomLink?: SortOrderInput | SortOrder
    posterUrl?: SortOrderInput | SortOrder
    status?: SortOrder
    quota?: SortOrder
    category?: SortOrder
    targetAudience?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SeminarCountOrderByAggregateInput
    _avg?: SeminarAvgOrderByAggregateInput
    _max?: SeminarMaxOrderByAggregateInput
    _min?: SeminarMinOrderByAggregateInput
    _sum?: SeminarSumOrderByAggregateInput
  }

  export type SeminarScalarWhereWithAggregatesInput = {
    AND?: SeminarScalarWhereWithAggregatesInput | SeminarScalarWhereWithAggregatesInput[]
    OR?: SeminarScalarWhereWithAggregatesInput[]
    NOT?: SeminarScalarWhereWithAggregatesInput | SeminarScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Seminar"> | string
    title?: StringWithAggregatesFilter<"Seminar"> | string
    description?: StringWithAggregatesFilter<"Seminar"> | string
    host?: StringWithAggregatesFilter<"Seminar"> | string
    hostId?: UuidNullableWithAggregatesFilter<"Seminar"> | string | null
    eventDate?: DateTimeWithAggregatesFilter<"Seminar"> | Date | string
    eventTime?: StringWithAggregatesFilter<"Seminar"> | string
    location?: StringWithAggregatesFilter<"Seminar"> | string
    zoomLink?: StringNullableWithAggregatesFilter<"Seminar"> | string | null
    posterUrl?: StringNullableWithAggregatesFilter<"Seminar"> | string | null
    status?: EnumSeminarStatusWithAggregatesFilter<"Seminar"> | $Enums.SeminarStatus
    quota?: IntWithAggregatesFilter<"Seminar"> | number
    category?: EnumSeminarCategoryWithAggregatesFilter<"Seminar"> | $Enums.SeminarCategory
    targetAudience?: StringNullableListFilter<"Seminar">
    createdBy?: UuidWithAggregatesFilter<"Seminar"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Seminar"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Seminar"> | Date | string
  }

  export type SeminarRegistrationWhereInput = {
    AND?: SeminarRegistrationWhereInput | SeminarRegistrationWhereInput[]
    OR?: SeminarRegistrationWhereInput[]
    NOT?: SeminarRegistrationWhereInput | SeminarRegistrationWhereInput[]
    id?: UuidFilter<"SeminarRegistration"> | string
    seminarId?: UuidFilter<"SeminarRegistration"> | string
    userId?: UuidFilter<"SeminarRegistration"> | string
    createdAt?: DateTimeFilter<"SeminarRegistration"> | Date | string
    seminar?: XOR<SeminarScalarRelationFilter, SeminarWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SeminarRegistrationOrderByWithRelationInput = {
    id?: SortOrder
    seminarId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    seminar?: SeminarOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type SeminarRegistrationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    seminarId_userId?: SeminarRegistrationSeminarIdUserIdCompoundUniqueInput
    AND?: SeminarRegistrationWhereInput | SeminarRegistrationWhereInput[]
    OR?: SeminarRegistrationWhereInput[]
    NOT?: SeminarRegistrationWhereInput | SeminarRegistrationWhereInput[]
    seminarId?: UuidFilter<"SeminarRegistration"> | string
    userId?: UuidFilter<"SeminarRegistration"> | string
    createdAt?: DateTimeFilter<"SeminarRegistration"> | Date | string
    seminar?: XOR<SeminarScalarRelationFilter, SeminarWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "seminarId_userId">

  export type SeminarRegistrationOrderByWithAggregationInput = {
    id?: SortOrder
    seminarId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    _count?: SeminarRegistrationCountOrderByAggregateInput
    _max?: SeminarRegistrationMaxOrderByAggregateInput
    _min?: SeminarRegistrationMinOrderByAggregateInput
  }

  export type SeminarRegistrationScalarWhereWithAggregatesInput = {
    AND?: SeminarRegistrationScalarWhereWithAggregatesInput | SeminarRegistrationScalarWhereWithAggregatesInput[]
    OR?: SeminarRegistrationScalarWhereWithAggregatesInput[]
    NOT?: SeminarRegistrationScalarWhereWithAggregatesInput | SeminarRegistrationScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"SeminarRegistration"> | string
    seminarId?: UuidWithAggregatesFilter<"SeminarRegistration"> | string
    userId?: UuidWithAggregatesFilter<"SeminarRegistration"> | string
    createdAt?: DateTimeWithAggregatesFilter<"SeminarRegistration"> | Date | string
  }

  export type ActivityLogWhereInput = {
    AND?: ActivityLogWhereInput | ActivityLogWhereInput[]
    OR?: ActivityLogWhereInput[]
    NOT?: ActivityLogWhereInput | ActivityLogWhereInput[]
    id?: UuidFilter<"ActivityLog"> | string
    action?: StringFilter<"ActivityLog"> | string
    description?: StringFilter<"ActivityLog"> | string
    performedBy?: UuidFilter<"ActivityLog"> | string
    performedByRole?: EnumUserRoleFilter<"ActivityLog"> | $Enums.UserRole
    relatedBookingId?: UuidNullableFilter<"ActivityLog"> | string | null
    relatedSessionId?: UuidNullableFilter<"ActivityLog"> | string | null
    timestamp?: DateTimeFilter<"ActivityLog"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ActivityLogOrderByWithRelationInput = {
    id?: SortOrder
    action?: SortOrder
    description?: SortOrder
    performedBy?: SortOrder
    performedByRole?: SortOrder
    relatedBookingId?: SortOrderInput | SortOrder
    relatedSessionId?: SortOrderInput | SortOrder
    timestamp?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type ActivityLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ActivityLogWhereInput | ActivityLogWhereInput[]
    OR?: ActivityLogWhereInput[]
    NOT?: ActivityLogWhereInput | ActivityLogWhereInput[]
    action?: StringFilter<"ActivityLog"> | string
    description?: StringFilter<"ActivityLog"> | string
    performedBy?: UuidFilter<"ActivityLog"> | string
    performedByRole?: EnumUserRoleFilter<"ActivityLog"> | $Enums.UserRole
    relatedBookingId?: UuidNullableFilter<"ActivityLog"> | string | null
    relatedSessionId?: UuidNullableFilter<"ActivityLog"> | string | null
    timestamp?: DateTimeFilter<"ActivityLog"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type ActivityLogOrderByWithAggregationInput = {
    id?: SortOrder
    action?: SortOrder
    description?: SortOrder
    performedBy?: SortOrder
    performedByRole?: SortOrder
    relatedBookingId?: SortOrderInput | SortOrder
    relatedSessionId?: SortOrderInput | SortOrder
    timestamp?: SortOrder
    _count?: ActivityLogCountOrderByAggregateInput
    _max?: ActivityLogMaxOrderByAggregateInput
    _min?: ActivityLogMinOrderByAggregateInput
  }

  export type ActivityLogScalarWhereWithAggregatesInput = {
    AND?: ActivityLogScalarWhereWithAggregatesInput | ActivityLogScalarWhereWithAggregatesInput[]
    OR?: ActivityLogScalarWhereWithAggregatesInput[]
    NOT?: ActivityLogScalarWhereWithAggregatesInput | ActivityLogScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"ActivityLog"> | string
    action?: StringWithAggregatesFilter<"ActivityLog"> | string
    description?: StringWithAggregatesFilter<"ActivityLog"> | string
    performedBy?: UuidWithAggregatesFilter<"ActivityLog"> | string
    performedByRole?: EnumUserRoleWithAggregatesFilter<"ActivityLog"> | $Enums.UserRole
    relatedBookingId?: UuidNullableWithAggregatesFilter<"ActivityLog"> | string | null
    relatedSessionId?: UuidNullableWithAggregatesFilter<"ActivityLog"> | string | null
    timestamp?: DateTimeWithAggregatesFilter<"ActivityLog"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    role: $Enums.UserRole
    avatar?: string
    profilePictureUrl?: string | null
    phone?: string | null
    status?: string
    organization?: string | null
    businessName?: string | null
    businessCategory?: string | null
    businessAddress?: string | null
    nim?: string | null
    semester?: number | null
    schoolName?: string | null
    subject?: string | null
    grade?: string | null
    lastLogin?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    lecturer?: LecturerCreateNestedOneWithoutUserInput
    bookings?: ConsultationBookingCreateNestedManyWithoutUserInput
    createdSeminars?: SeminarCreateNestedManyWithoutCreatorInput
    seminarRegistrations?: SeminarRegistrationCreateNestedManyWithoutUserInput
    activityLogs?: ActivityLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    role: $Enums.UserRole
    avatar?: string
    profilePictureUrl?: string | null
    phone?: string | null
    status?: string
    organization?: string | null
    businessName?: string | null
    businessCategory?: string | null
    businessAddress?: string | null
    nim?: string | null
    semester?: number | null
    schoolName?: string | null
    subject?: string | null
    grade?: string | null
    lastLogin?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    lecturer?: LecturerUncheckedCreateNestedOneWithoutUserInput
    bookings?: ConsultationBookingUncheckedCreateNestedManyWithoutUserInput
    createdSeminars?: SeminarUncheckedCreateNestedManyWithoutCreatorInput
    seminarRegistrations?: SeminarRegistrationUncheckedCreateNestedManyWithoutUserInput
    activityLogs?: ActivityLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    avatar?: StringFieldUpdateOperationsInput | string
    profilePictureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    organization?: NullableStringFieldUpdateOperationsInput | string | null
    businessName?: NullableStringFieldUpdateOperationsInput | string | null
    businessCategory?: NullableStringFieldUpdateOperationsInput | string | null
    businessAddress?: NullableStringFieldUpdateOperationsInput | string | null
    nim?: NullableStringFieldUpdateOperationsInput | string | null
    semester?: NullableIntFieldUpdateOperationsInput | number | null
    schoolName?: NullableStringFieldUpdateOperationsInput | string | null
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    grade?: NullableStringFieldUpdateOperationsInput | string | null
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lecturer?: LecturerUpdateOneWithoutUserNestedInput
    bookings?: ConsultationBookingUpdateManyWithoutUserNestedInput
    createdSeminars?: SeminarUpdateManyWithoutCreatorNestedInput
    seminarRegistrations?: SeminarRegistrationUpdateManyWithoutUserNestedInput
    activityLogs?: ActivityLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    avatar?: StringFieldUpdateOperationsInput | string
    profilePictureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    organization?: NullableStringFieldUpdateOperationsInput | string | null
    businessName?: NullableStringFieldUpdateOperationsInput | string | null
    businessCategory?: NullableStringFieldUpdateOperationsInput | string | null
    businessAddress?: NullableStringFieldUpdateOperationsInput | string | null
    nim?: NullableStringFieldUpdateOperationsInput | string | null
    semester?: NullableIntFieldUpdateOperationsInput | number | null
    schoolName?: NullableStringFieldUpdateOperationsInput | string | null
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    grade?: NullableStringFieldUpdateOperationsInput | string | null
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lecturer?: LecturerUncheckedUpdateOneWithoutUserNestedInput
    bookings?: ConsultationBookingUncheckedUpdateManyWithoutUserNestedInput
    createdSeminars?: SeminarUncheckedUpdateManyWithoutCreatorNestedInput
    seminarRegistrations?: SeminarRegistrationUncheckedUpdateManyWithoutUserNestedInput
    activityLogs?: ActivityLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    role: $Enums.UserRole
    avatar?: string
    profilePictureUrl?: string | null
    phone?: string | null
    status?: string
    organization?: string | null
    businessName?: string | null
    businessCategory?: string | null
    businessAddress?: string | null
    nim?: string | null
    semester?: number | null
    schoolName?: string | null
    subject?: string | null
    grade?: string | null
    lastLogin?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    avatar?: StringFieldUpdateOperationsInput | string
    profilePictureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    organization?: NullableStringFieldUpdateOperationsInput | string | null
    businessName?: NullableStringFieldUpdateOperationsInput | string | null
    businessCategory?: NullableStringFieldUpdateOperationsInput | string | null
    businessAddress?: NullableStringFieldUpdateOperationsInput | string | null
    nim?: NullableStringFieldUpdateOperationsInput | string | null
    semester?: NullableIntFieldUpdateOperationsInput | number | null
    schoolName?: NullableStringFieldUpdateOperationsInput | string | null
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    grade?: NullableStringFieldUpdateOperationsInput | string | null
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    avatar?: StringFieldUpdateOperationsInput | string
    profilePictureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    organization?: NullableStringFieldUpdateOperationsInput | string | null
    businessName?: NullableStringFieldUpdateOperationsInput | string | null
    businessCategory?: NullableStringFieldUpdateOperationsInput | string | null
    businessAddress?: NullableStringFieldUpdateOperationsInput | string | null
    nim?: NullableStringFieldUpdateOperationsInput | string | null
    semester?: NullableIntFieldUpdateOperationsInput | number | null
    schoolName?: NullableStringFieldUpdateOperationsInput | string | null
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    grade?: NullableStringFieldUpdateOperationsInput | string | null
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudyProgramCreateInput = {
    id?: string
    code: string
    name: string
    faculty: string
    createdAt?: Date | string
    lecturers?: LecturerCreateNestedManyWithoutStudyProgramInput
    students?: StudentCreateNestedManyWithoutStudyProgramInput
  }

  export type StudyProgramUncheckedCreateInput = {
    id?: string
    code: string
    name: string
    faculty: string
    createdAt?: Date | string
    lecturers?: LecturerUncheckedCreateNestedManyWithoutStudyProgramInput
    students?: StudentUncheckedCreateNestedManyWithoutStudyProgramInput
  }

  export type StudyProgramUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    faculty?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lecturers?: LecturerUpdateManyWithoutStudyProgramNestedInput
    students?: StudentUpdateManyWithoutStudyProgramNestedInput
  }

  export type StudyProgramUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    faculty?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lecturers?: LecturerUncheckedUpdateManyWithoutStudyProgramNestedInput
    students?: StudentUncheckedUpdateManyWithoutStudyProgramNestedInput
  }

  export type StudyProgramCreateManyInput = {
    id?: string
    code: string
    name: string
    faculty: string
    createdAt?: Date | string
  }

  export type StudyProgramUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    faculty?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudyProgramUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    faculty?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LecturerCreateInput = {
    id?: string
    lecturerCode: string
    name: string
    email: string
    photo?: string
    specialization: string
    university?: string
    rating?: number
    experience?: string
    expertise?: LecturerCreateexpertiseInput | string[]
    phone?: string
    bio?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: UserCreateNestedOneWithoutLecturerInput
    studyProgram?: StudyProgramCreateNestedOneWithoutLecturersInput
    availabilities?: LecturerAvailabilityCreateNestedManyWithoutLecturerInput
    bookings?: ConsultationBookingCreateNestedManyWithoutLecturerInput
    sessions?: ConsultationSessionCreateNestedManyWithoutLecturerInput
    seminars?: SeminarCreateNestedManyWithoutLecturerInput
  }

  export type LecturerUncheckedCreateInput = {
    id?: string
    lecturerCode: string
    userId?: string | null
    studyProgramId?: string | null
    name: string
    email: string
    photo?: string
    specialization: string
    university?: string
    rating?: number
    experience?: string
    expertise?: LecturerCreateexpertiseInput | string[]
    phone?: string
    bio?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    availabilities?: LecturerAvailabilityUncheckedCreateNestedManyWithoutLecturerInput
    bookings?: ConsultationBookingUncheckedCreateNestedManyWithoutLecturerInput
    sessions?: ConsultationSessionUncheckedCreateNestedManyWithoutLecturerInput
    seminars?: SeminarUncheckedCreateNestedManyWithoutLecturerInput
  }

  export type LecturerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    lecturerCode?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    photo?: StringFieldUpdateOperationsInput | string
    specialization?: StringFieldUpdateOperationsInput | string
    university?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    experience?: StringFieldUpdateOperationsInput | string
    expertise?: LecturerUpdateexpertiseInput | string[]
    phone?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutLecturerNestedInput
    studyProgram?: StudyProgramUpdateOneWithoutLecturersNestedInput
    availabilities?: LecturerAvailabilityUpdateManyWithoutLecturerNestedInput
    bookings?: ConsultationBookingUpdateManyWithoutLecturerNestedInput
    sessions?: ConsultationSessionUpdateManyWithoutLecturerNestedInput
    seminars?: SeminarUpdateManyWithoutLecturerNestedInput
  }

  export type LecturerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    lecturerCode?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    studyProgramId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    photo?: StringFieldUpdateOperationsInput | string
    specialization?: StringFieldUpdateOperationsInput | string
    university?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    experience?: StringFieldUpdateOperationsInput | string
    expertise?: LecturerUpdateexpertiseInput | string[]
    phone?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    availabilities?: LecturerAvailabilityUncheckedUpdateManyWithoutLecturerNestedInput
    bookings?: ConsultationBookingUncheckedUpdateManyWithoutLecturerNestedInput
    sessions?: ConsultationSessionUncheckedUpdateManyWithoutLecturerNestedInput
    seminars?: SeminarUncheckedUpdateManyWithoutLecturerNestedInput
  }

  export type LecturerCreateManyInput = {
    id?: string
    lecturerCode: string
    userId?: string | null
    studyProgramId?: string | null
    name: string
    email: string
    photo?: string
    specialization: string
    university?: string
    rating?: number
    experience?: string
    expertise?: LecturerCreateexpertiseInput | string[]
    phone?: string
    bio?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LecturerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    lecturerCode?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    photo?: StringFieldUpdateOperationsInput | string
    specialization?: StringFieldUpdateOperationsInput | string
    university?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    experience?: StringFieldUpdateOperationsInput | string
    expertise?: LecturerUpdateexpertiseInput | string[]
    phone?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LecturerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    lecturerCode?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    studyProgramId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    photo?: StringFieldUpdateOperationsInput | string
    specialization?: StringFieldUpdateOperationsInput | string
    university?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    experience?: StringFieldUpdateOperationsInput | string
    expertise?: LecturerUpdateexpertiseInput | string[]
    phone?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentCreateInput = {
    id?: string
    nim: string
    name: string
    email: string
    semester: number
    phone?: string
    studyProgram?: StudyProgramCreateNestedOneWithoutStudentsInput
  }

  export type StudentUncheckedCreateInput = {
    id?: string
    nim: string
    name: string
    email: string
    studyProgramId?: string | null
    semester: number
    phone?: string
  }

  export type StudentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nim?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    semester?: IntFieldUpdateOperationsInput | number
    phone?: StringFieldUpdateOperationsInput | string
    studyProgram?: StudyProgramUpdateOneWithoutStudentsNestedInput
  }

  export type StudentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nim?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    studyProgramId?: NullableStringFieldUpdateOperationsInput | string | null
    semester?: IntFieldUpdateOperationsInput | number
    phone?: StringFieldUpdateOperationsInput | string
  }

  export type StudentCreateManyInput = {
    id?: string
    nim: string
    name: string
    email: string
    studyProgramId?: string | null
    semester: number
    phone?: string
  }

  export type StudentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nim?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    semester?: IntFieldUpdateOperationsInput | number
    phone?: StringFieldUpdateOperationsInput | string
  }

  export type StudentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nim?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    studyProgramId?: NullableStringFieldUpdateOperationsInput | string | null
    semester?: IntFieldUpdateOperationsInput | number
    phone?: StringFieldUpdateOperationsInput | string
  }

  export type SemesterCreateInput = {
    id?: string
    name: string
    startDate: Date | string
    endDate: Date | string
    isActive?: boolean
    createdAt?: Date | string
    availabilities?: LecturerAvailabilityCreateNestedManyWithoutSemesterInput
    bookings?: ConsultationBookingCreateNestedManyWithoutSemesterInput
  }

  export type SemesterUncheckedCreateInput = {
    id?: string
    name: string
    startDate: Date | string
    endDate: Date | string
    isActive?: boolean
    createdAt?: Date | string
    availabilities?: LecturerAvailabilityUncheckedCreateNestedManyWithoutSemesterInput
    bookings?: ConsultationBookingUncheckedCreateNestedManyWithoutSemesterInput
  }

  export type SemesterUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    availabilities?: LecturerAvailabilityUpdateManyWithoutSemesterNestedInput
    bookings?: ConsultationBookingUpdateManyWithoutSemesterNestedInput
  }

  export type SemesterUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    availabilities?: LecturerAvailabilityUncheckedUpdateManyWithoutSemesterNestedInput
    bookings?: ConsultationBookingUncheckedUpdateManyWithoutSemesterNestedInput
  }

  export type SemesterCreateManyInput = {
    id?: string
    name: string
    startDate: Date | string
    endDate: Date | string
    isActive?: boolean
    createdAt?: Date | string
  }

  export type SemesterUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SemesterUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LecturerAvailabilityCreateInput = {
    id?: string
    dayOfWeek: string
    timeSlots: JsonNullValueInput | InputJsonValue
    isActive?: boolean
    createdAt?: Date | string
    lecturer: LecturerCreateNestedOneWithoutAvailabilitiesInput
    semester: SemesterCreateNestedOneWithoutAvailabilitiesInput
  }

  export type LecturerAvailabilityUncheckedCreateInput = {
    id?: string
    lecturerId: string
    semesterId: string
    dayOfWeek: string
    timeSlots: JsonNullValueInput | InputJsonValue
    isActive?: boolean
    createdAt?: Date | string
  }

  export type LecturerAvailabilityUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    dayOfWeek?: StringFieldUpdateOperationsInput | string
    timeSlots?: JsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lecturer?: LecturerUpdateOneRequiredWithoutAvailabilitiesNestedInput
    semester?: SemesterUpdateOneRequiredWithoutAvailabilitiesNestedInput
  }

  export type LecturerAvailabilityUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    lecturerId?: StringFieldUpdateOperationsInput | string
    semesterId?: StringFieldUpdateOperationsInput | string
    dayOfWeek?: StringFieldUpdateOperationsInput | string
    timeSlots?: JsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LecturerAvailabilityCreateManyInput = {
    id?: string
    lecturerId: string
    semesterId: string
    dayOfWeek: string
    timeSlots: JsonNullValueInput | InputJsonValue
    isActive?: boolean
    createdAt?: Date | string
  }

  export type LecturerAvailabilityUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    dayOfWeek?: StringFieldUpdateOperationsInput | string
    timeSlots?: JsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LecturerAvailabilityUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    lecturerId?: StringFieldUpdateOperationsInput | string
    semesterId?: StringFieldUpdateOperationsInput | string
    dayOfWeek?: StringFieldUpdateOperationsInput | string
    timeSlots?: JsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConsultationBookingCreateInput = {
    id?: string
    consultationType: $Enums.ConsultationType
    title: string
    category: string
    priority?: string
    description: string
    organization: string
    contactPerson: string
    phone: string
    email: string
    scheduledDate: Date | string
    scheduledDay: string
    startTime: string
    endTime: string
    status?: $Enums.ConsultationStatus
    feedback?: string | null
    rating?: number | null
    zoomLink?: string | null
    rescheduleNote?: string | null
    attachmentFileName?: string | null
    attachmentUrl?: string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutBookingsInput
    lecturer: LecturerCreateNestedOneWithoutBookingsInput
    semester: SemesterCreateNestedOneWithoutBookingsInput
    session?: ConsultationSessionCreateNestedOneWithoutBookingsInput
  }

  export type ConsultationBookingUncheckedCreateInput = {
    id?: string
    userId: string
    lecturerId: string
    semesterId: string
    sessionId?: string | null
    consultationType: $Enums.ConsultationType
    title: string
    category: string
    priority?: string
    description: string
    organization: string
    contactPerson: string
    phone: string
    email: string
    scheduledDate: Date | string
    scheduledDay: string
    startTime: string
    endTime: string
    status?: $Enums.ConsultationStatus
    feedback?: string | null
    rating?: number | null
    zoomLink?: string | null
    rescheduleNote?: string | null
    attachmentFileName?: string | null
    attachmentUrl?: string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ConsultationBookingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    consultationType?: EnumConsultationTypeFieldUpdateOperationsInput | $Enums.ConsultationType
    title?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    priority?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    organization?: StringFieldUpdateOperationsInput | string
    contactPerson?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    scheduledDate?: DateTimeFieldUpdateOperationsInput | Date | string
    scheduledDay?: StringFieldUpdateOperationsInput | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    status?: EnumConsultationStatusFieldUpdateOperationsInput | $Enums.ConsultationStatus
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    zoomLink?: NullableStringFieldUpdateOperationsInput | string | null
    rescheduleNote?: NullableStringFieldUpdateOperationsInput | string | null
    attachmentFileName?: NullableStringFieldUpdateOperationsInput | string | null
    attachmentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutBookingsNestedInput
    lecturer?: LecturerUpdateOneRequiredWithoutBookingsNestedInput
    semester?: SemesterUpdateOneRequiredWithoutBookingsNestedInput
    session?: ConsultationSessionUpdateOneWithoutBookingsNestedInput
  }

  export type ConsultationBookingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    lecturerId?: StringFieldUpdateOperationsInput | string
    semesterId?: StringFieldUpdateOperationsInput | string
    sessionId?: NullableStringFieldUpdateOperationsInput | string | null
    consultationType?: EnumConsultationTypeFieldUpdateOperationsInput | $Enums.ConsultationType
    title?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    priority?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    organization?: StringFieldUpdateOperationsInput | string
    contactPerson?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    scheduledDate?: DateTimeFieldUpdateOperationsInput | Date | string
    scheduledDay?: StringFieldUpdateOperationsInput | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    status?: EnumConsultationStatusFieldUpdateOperationsInput | $Enums.ConsultationStatus
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    zoomLink?: NullableStringFieldUpdateOperationsInput | string | null
    rescheduleNote?: NullableStringFieldUpdateOperationsInput | string | null
    attachmentFileName?: NullableStringFieldUpdateOperationsInput | string | null
    attachmentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConsultationBookingCreateManyInput = {
    id?: string
    userId: string
    lecturerId: string
    semesterId: string
    sessionId?: string | null
    consultationType: $Enums.ConsultationType
    title: string
    category: string
    priority?: string
    description: string
    organization: string
    contactPerson: string
    phone: string
    email: string
    scheduledDate: Date | string
    scheduledDay: string
    startTime: string
    endTime: string
    status?: $Enums.ConsultationStatus
    feedback?: string | null
    rating?: number | null
    zoomLink?: string | null
    rescheduleNote?: string | null
    attachmentFileName?: string | null
    attachmentUrl?: string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ConsultationBookingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    consultationType?: EnumConsultationTypeFieldUpdateOperationsInput | $Enums.ConsultationType
    title?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    priority?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    organization?: StringFieldUpdateOperationsInput | string
    contactPerson?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    scheduledDate?: DateTimeFieldUpdateOperationsInput | Date | string
    scheduledDay?: StringFieldUpdateOperationsInput | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    status?: EnumConsultationStatusFieldUpdateOperationsInput | $Enums.ConsultationStatus
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    zoomLink?: NullableStringFieldUpdateOperationsInput | string | null
    rescheduleNote?: NullableStringFieldUpdateOperationsInput | string | null
    attachmentFileName?: NullableStringFieldUpdateOperationsInput | string | null
    attachmentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConsultationBookingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    lecturerId?: StringFieldUpdateOperationsInput | string
    semesterId?: StringFieldUpdateOperationsInput | string
    sessionId?: NullableStringFieldUpdateOperationsInput | string | null
    consultationType?: EnumConsultationTypeFieldUpdateOperationsInput | $Enums.ConsultationType
    title?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    priority?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    organization?: StringFieldUpdateOperationsInput | string
    contactPerson?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    scheduledDate?: DateTimeFieldUpdateOperationsInput | Date | string
    scheduledDay?: StringFieldUpdateOperationsInput | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    status?: EnumConsultationStatusFieldUpdateOperationsInput | $Enums.ConsultationStatus
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    zoomLink?: NullableStringFieldUpdateOperationsInput | string | null
    rescheduleNote?: NullableStringFieldUpdateOperationsInput | string | null
    attachmentFileName?: NullableStringFieldUpdateOperationsInput | string | null
    attachmentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConsultationSessionCreateInput = {
    id?: string
    scheduledDate: Date | string
    startTime: string
    endTime: string
    status?: string
    zoomLink?: string | null
    notes?: string | null
    confirmedAt?: Date | string | null
    confirmedBy?: string | null
    evaluationLink?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    lecturer: LecturerCreateNestedOneWithoutSessionsInput
    bookings?: ConsultationBookingCreateNestedManyWithoutSessionInput
  }

  export type ConsultationSessionUncheckedCreateInput = {
    id?: string
    lecturerId: string
    scheduledDate: Date | string
    startTime: string
    endTime: string
    status?: string
    zoomLink?: string | null
    notes?: string | null
    confirmedAt?: Date | string | null
    confirmedBy?: string | null
    evaluationLink?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    bookings?: ConsultationBookingUncheckedCreateNestedManyWithoutSessionInput
  }

  export type ConsultationSessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    scheduledDate?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    zoomLink?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    confirmedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    confirmedBy?: NullableStringFieldUpdateOperationsInput | string | null
    evaluationLink?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lecturer?: LecturerUpdateOneRequiredWithoutSessionsNestedInput
    bookings?: ConsultationBookingUpdateManyWithoutSessionNestedInput
  }

  export type ConsultationSessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    lecturerId?: StringFieldUpdateOperationsInput | string
    scheduledDate?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    zoomLink?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    confirmedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    confirmedBy?: NullableStringFieldUpdateOperationsInput | string | null
    evaluationLink?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: ConsultationBookingUncheckedUpdateManyWithoutSessionNestedInput
  }

  export type ConsultationSessionCreateManyInput = {
    id?: string
    lecturerId: string
    scheduledDate: Date | string
    startTime: string
    endTime: string
    status?: string
    zoomLink?: string | null
    notes?: string | null
    confirmedAt?: Date | string | null
    confirmedBy?: string | null
    evaluationLink?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ConsultationSessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    scheduledDate?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    zoomLink?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    confirmedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    confirmedBy?: NullableStringFieldUpdateOperationsInput | string | null
    evaluationLink?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConsultationSessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    lecturerId?: StringFieldUpdateOperationsInput | string
    scheduledDate?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    zoomLink?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    confirmedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    confirmedBy?: NullableStringFieldUpdateOperationsInput | string | null
    evaluationLink?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SeminarCreateInput = {
    id?: string
    title: string
    description: string
    host: string
    eventDate: Date | string
    eventTime: string
    location: string
    zoomLink?: string | null
    posterUrl?: string | null
    status?: $Enums.SeminarStatus
    quota: number
    category?: $Enums.SeminarCategory
    targetAudience?: SeminarCreatetargetAudienceInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    creator: UserCreateNestedOneWithoutCreatedSeminarsInput
    lecturer?: LecturerCreateNestedOneWithoutSeminarsInput
    registrations?: SeminarRegistrationCreateNestedManyWithoutSeminarInput
  }

  export type SeminarUncheckedCreateInput = {
    id?: string
    title: string
    description: string
    host: string
    hostId?: string | null
    eventDate: Date | string
    eventTime: string
    location: string
    zoomLink?: string | null
    posterUrl?: string | null
    status?: $Enums.SeminarStatus
    quota: number
    category?: $Enums.SeminarCategory
    targetAudience?: SeminarCreatetargetAudienceInput | string[]
    createdBy: string
    createdAt?: Date | string
    updatedAt?: Date | string
    registrations?: SeminarRegistrationUncheckedCreateNestedManyWithoutSeminarInput
  }

  export type SeminarUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    host?: StringFieldUpdateOperationsInput | string
    eventDate?: DateTimeFieldUpdateOperationsInput | Date | string
    eventTime?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    zoomLink?: NullableStringFieldUpdateOperationsInput | string | null
    posterUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSeminarStatusFieldUpdateOperationsInput | $Enums.SeminarStatus
    quota?: IntFieldUpdateOperationsInput | number
    category?: EnumSeminarCategoryFieldUpdateOperationsInput | $Enums.SeminarCategory
    targetAudience?: SeminarUpdatetargetAudienceInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creator?: UserUpdateOneRequiredWithoutCreatedSeminarsNestedInput
    lecturer?: LecturerUpdateOneWithoutSeminarsNestedInput
    registrations?: SeminarRegistrationUpdateManyWithoutSeminarNestedInput
  }

  export type SeminarUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    host?: StringFieldUpdateOperationsInput | string
    hostId?: NullableStringFieldUpdateOperationsInput | string | null
    eventDate?: DateTimeFieldUpdateOperationsInput | Date | string
    eventTime?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    zoomLink?: NullableStringFieldUpdateOperationsInput | string | null
    posterUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSeminarStatusFieldUpdateOperationsInput | $Enums.SeminarStatus
    quota?: IntFieldUpdateOperationsInput | number
    category?: EnumSeminarCategoryFieldUpdateOperationsInput | $Enums.SeminarCategory
    targetAudience?: SeminarUpdatetargetAudienceInput | string[]
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    registrations?: SeminarRegistrationUncheckedUpdateManyWithoutSeminarNestedInput
  }

  export type SeminarCreateManyInput = {
    id?: string
    title: string
    description: string
    host: string
    hostId?: string | null
    eventDate: Date | string
    eventTime: string
    location: string
    zoomLink?: string | null
    posterUrl?: string | null
    status?: $Enums.SeminarStatus
    quota: number
    category?: $Enums.SeminarCategory
    targetAudience?: SeminarCreatetargetAudienceInput | string[]
    createdBy: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SeminarUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    host?: StringFieldUpdateOperationsInput | string
    eventDate?: DateTimeFieldUpdateOperationsInput | Date | string
    eventTime?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    zoomLink?: NullableStringFieldUpdateOperationsInput | string | null
    posterUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSeminarStatusFieldUpdateOperationsInput | $Enums.SeminarStatus
    quota?: IntFieldUpdateOperationsInput | number
    category?: EnumSeminarCategoryFieldUpdateOperationsInput | $Enums.SeminarCategory
    targetAudience?: SeminarUpdatetargetAudienceInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SeminarUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    host?: StringFieldUpdateOperationsInput | string
    hostId?: NullableStringFieldUpdateOperationsInput | string | null
    eventDate?: DateTimeFieldUpdateOperationsInput | Date | string
    eventTime?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    zoomLink?: NullableStringFieldUpdateOperationsInput | string | null
    posterUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSeminarStatusFieldUpdateOperationsInput | $Enums.SeminarStatus
    quota?: IntFieldUpdateOperationsInput | number
    category?: EnumSeminarCategoryFieldUpdateOperationsInput | $Enums.SeminarCategory
    targetAudience?: SeminarUpdatetargetAudienceInput | string[]
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SeminarRegistrationCreateInput = {
    id?: string
    createdAt?: Date | string
    seminar: SeminarCreateNestedOneWithoutRegistrationsInput
    user: UserCreateNestedOneWithoutSeminarRegistrationsInput
  }

  export type SeminarRegistrationUncheckedCreateInput = {
    id?: string
    seminarId: string
    userId: string
    createdAt?: Date | string
  }

  export type SeminarRegistrationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    seminar?: SeminarUpdateOneRequiredWithoutRegistrationsNestedInput
    user?: UserUpdateOneRequiredWithoutSeminarRegistrationsNestedInput
  }

  export type SeminarRegistrationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    seminarId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SeminarRegistrationCreateManyInput = {
    id?: string
    seminarId: string
    userId: string
    createdAt?: Date | string
  }

  export type SeminarRegistrationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SeminarRegistrationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    seminarId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityLogCreateInput = {
    id?: string
    action: string
    description: string
    performedByRole: $Enums.UserRole
    relatedBookingId?: string | null
    relatedSessionId?: string | null
    timestamp?: Date | string
    user: UserCreateNestedOneWithoutActivityLogsInput
  }

  export type ActivityLogUncheckedCreateInput = {
    id?: string
    action: string
    description: string
    performedBy: string
    performedByRole: $Enums.UserRole
    relatedBookingId?: string | null
    relatedSessionId?: string | null
    timestamp?: Date | string
  }

  export type ActivityLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    performedByRole?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    relatedBookingId?: NullableStringFieldUpdateOperationsInput | string | null
    relatedSessionId?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutActivityLogsNestedInput
  }

  export type ActivityLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    performedBy?: StringFieldUpdateOperationsInput | string
    performedByRole?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    relatedBookingId?: NullableStringFieldUpdateOperationsInput | string | null
    relatedSessionId?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityLogCreateManyInput = {
    id?: string
    action: string
    description: string
    performedBy: string
    performedByRole: $Enums.UserRole
    relatedBookingId?: string | null
    relatedSessionId?: string | null
    timestamp?: Date | string
  }

  export type ActivityLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    performedByRole?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    relatedBookingId?: NullableStringFieldUpdateOperationsInput | string | null
    relatedSessionId?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    performedBy?: StringFieldUpdateOperationsInput | string
    performedByRole?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    relatedBookingId?: NullableStringFieldUpdateOperationsInput | string | null
    relatedSessionId?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type LecturerNullableScalarRelationFilter = {
    is?: LecturerWhereInput | null
    isNot?: LecturerWhereInput | null
  }

  export type ConsultationBookingListRelationFilter = {
    every?: ConsultationBookingWhereInput
    some?: ConsultationBookingWhereInput
    none?: ConsultationBookingWhereInput
  }

  export type SeminarListRelationFilter = {
    every?: SeminarWhereInput
    some?: SeminarWhereInput
    none?: SeminarWhereInput
  }

  export type SeminarRegistrationListRelationFilter = {
    every?: SeminarRegistrationWhereInput
    some?: SeminarRegistrationWhereInput
    none?: SeminarRegistrationWhereInput
  }

  export type ActivityLogListRelationFilter = {
    every?: ActivityLogWhereInput
    some?: ActivityLogWhereInput
    none?: ActivityLogWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ConsultationBookingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SeminarOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SeminarRegistrationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ActivityLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    avatar?: SortOrder
    profilePictureUrl?: SortOrder
    phone?: SortOrder
    status?: SortOrder
    organization?: SortOrder
    businessName?: SortOrder
    businessCategory?: SortOrder
    businessAddress?: SortOrder
    nim?: SortOrder
    semester?: SortOrder
    schoolName?: SortOrder
    subject?: SortOrder
    grade?: SortOrder
    lastLogin?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    semester?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    avatar?: SortOrder
    profilePictureUrl?: SortOrder
    phone?: SortOrder
    status?: SortOrder
    organization?: SortOrder
    businessName?: SortOrder
    businessCategory?: SortOrder
    businessAddress?: SortOrder
    nim?: SortOrder
    semester?: SortOrder
    schoolName?: SortOrder
    subject?: SortOrder
    grade?: SortOrder
    lastLogin?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    avatar?: SortOrder
    profilePictureUrl?: SortOrder
    phone?: SortOrder
    status?: SortOrder
    organization?: SortOrder
    businessName?: SortOrder
    businessCategory?: SortOrder
    businessAddress?: SortOrder
    nim?: SortOrder
    semester?: SortOrder
    schoolName?: SortOrder
    subject?: SortOrder
    grade?: SortOrder
    lastLogin?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    semester?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type LecturerListRelationFilter = {
    every?: LecturerWhereInput
    some?: LecturerWhereInput
    none?: LecturerWhereInput
  }

  export type StudentListRelationFilter = {
    every?: StudentWhereInput
    some?: StudentWhereInput
    none?: StudentWhereInput
  }

  export type LecturerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StudentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StudyProgramCountOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    faculty?: SortOrder
    createdAt?: SortOrder
  }

  export type StudyProgramMaxOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    faculty?: SortOrder
    createdAt?: SortOrder
  }

  export type StudyProgramMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    faculty?: SortOrder
    createdAt?: SortOrder
  }

  export type UuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type StudyProgramNullableScalarRelationFilter = {
    is?: StudyProgramWhereInput | null
    isNot?: StudyProgramWhereInput | null
  }

  export type LecturerAvailabilityListRelationFilter = {
    every?: LecturerAvailabilityWhereInput
    some?: LecturerAvailabilityWhereInput
    none?: LecturerAvailabilityWhereInput
  }

  export type ConsultationSessionListRelationFilter = {
    every?: ConsultationSessionWhereInput
    some?: ConsultationSessionWhereInput
    none?: ConsultationSessionWhereInput
  }

  export type LecturerAvailabilityOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ConsultationSessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LecturerCountOrderByAggregateInput = {
    id?: SortOrder
    lecturerCode?: SortOrder
    userId?: SortOrder
    studyProgramId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    photo?: SortOrder
    specialization?: SortOrder
    university?: SortOrder
    rating?: SortOrder
    experience?: SortOrder
    expertise?: SortOrder
    phone?: SortOrder
    bio?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LecturerAvgOrderByAggregateInput = {
    rating?: SortOrder
  }

  export type LecturerMaxOrderByAggregateInput = {
    id?: SortOrder
    lecturerCode?: SortOrder
    userId?: SortOrder
    studyProgramId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    photo?: SortOrder
    specialization?: SortOrder
    university?: SortOrder
    rating?: SortOrder
    experience?: SortOrder
    phone?: SortOrder
    bio?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LecturerMinOrderByAggregateInput = {
    id?: SortOrder
    lecturerCode?: SortOrder
    userId?: SortOrder
    studyProgramId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    photo?: SortOrder
    specialization?: SortOrder
    university?: SortOrder
    rating?: SortOrder
    experience?: SortOrder
    phone?: SortOrder
    bio?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LecturerSumOrderByAggregateInput = {
    rating?: SortOrder
  }

  export type UuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StudentCountOrderByAggregateInput = {
    id?: SortOrder
    nim?: SortOrder
    name?: SortOrder
    email?: SortOrder
    studyProgramId?: SortOrder
    semester?: SortOrder
    phone?: SortOrder
  }

  export type StudentAvgOrderByAggregateInput = {
    semester?: SortOrder
  }

  export type StudentMaxOrderByAggregateInput = {
    id?: SortOrder
    nim?: SortOrder
    name?: SortOrder
    email?: SortOrder
    studyProgramId?: SortOrder
    semester?: SortOrder
    phone?: SortOrder
  }

  export type StudentMinOrderByAggregateInput = {
    id?: SortOrder
    nim?: SortOrder
    name?: SortOrder
    email?: SortOrder
    studyProgramId?: SortOrder
    semester?: SortOrder
    phone?: SortOrder
  }

  export type StudentSumOrderByAggregateInput = {
    semester?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type SemesterCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type SemesterMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type SemesterMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type LecturerScalarRelationFilter = {
    is?: LecturerWhereInput
    isNot?: LecturerWhereInput
  }

  export type SemesterScalarRelationFilter = {
    is?: SemesterWhereInput
    isNot?: SemesterWhereInput
  }

  export type LecturerAvailabilityLecturerIdSemesterIdDayOfWeekCompoundUniqueInput = {
    lecturerId: string
    semesterId: string
    dayOfWeek: string
  }

  export type LecturerAvailabilityCountOrderByAggregateInput = {
    id?: SortOrder
    lecturerId?: SortOrder
    semesterId?: SortOrder
    dayOfWeek?: SortOrder
    timeSlots?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type LecturerAvailabilityMaxOrderByAggregateInput = {
    id?: SortOrder
    lecturerId?: SortOrder
    semesterId?: SortOrder
    dayOfWeek?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type LecturerAvailabilityMinOrderByAggregateInput = {
    id?: SortOrder
    lecturerId?: SortOrder
    semesterId?: SortOrder
    dayOfWeek?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type EnumConsultationTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ConsultationType | EnumConsultationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ConsultationType[] | ListEnumConsultationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ConsultationType[] | ListEnumConsultationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumConsultationTypeFilter<$PrismaModel> | $Enums.ConsultationType
  }

  export type EnumConsultationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ConsultationStatus | EnumConsultationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ConsultationStatus[] | ListEnumConsultationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ConsultationStatus[] | ListEnumConsultationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumConsultationStatusFilter<$PrismaModel> | $Enums.ConsultationStatus
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ConsultationSessionNullableScalarRelationFilter = {
    is?: ConsultationSessionWhereInput | null
    isNot?: ConsultationSessionWhereInput | null
  }

  export type ConsultationBookingCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    lecturerId?: SortOrder
    semesterId?: SortOrder
    sessionId?: SortOrder
    consultationType?: SortOrder
    title?: SortOrder
    category?: SortOrder
    priority?: SortOrder
    description?: SortOrder
    organization?: SortOrder
    contactPerson?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    scheduledDate?: SortOrder
    scheduledDay?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    status?: SortOrder
    feedback?: SortOrder
    rating?: SortOrder
    zoomLink?: SortOrder
    rescheduleNote?: SortOrder
    attachmentFileName?: SortOrder
    attachmentUrl?: SortOrder
    completedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ConsultationBookingAvgOrderByAggregateInput = {
    rating?: SortOrder
  }

  export type ConsultationBookingMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    lecturerId?: SortOrder
    semesterId?: SortOrder
    sessionId?: SortOrder
    consultationType?: SortOrder
    title?: SortOrder
    category?: SortOrder
    priority?: SortOrder
    description?: SortOrder
    organization?: SortOrder
    contactPerson?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    scheduledDate?: SortOrder
    scheduledDay?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    status?: SortOrder
    feedback?: SortOrder
    rating?: SortOrder
    zoomLink?: SortOrder
    rescheduleNote?: SortOrder
    attachmentFileName?: SortOrder
    attachmentUrl?: SortOrder
    completedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ConsultationBookingMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    lecturerId?: SortOrder
    semesterId?: SortOrder
    sessionId?: SortOrder
    consultationType?: SortOrder
    title?: SortOrder
    category?: SortOrder
    priority?: SortOrder
    description?: SortOrder
    organization?: SortOrder
    contactPerson?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    scheduledDate?: SortOrder
    scheduledDay?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    status?: SortOrder
    feedback?: SortOrder
    rating?: SortOrder
    zoomLink?: SortOrder
    rescheduleNote?: SortOrder
    attachmentFileName?: SortOrder
    attachmentUrl?: SortOrder
    completedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ConsultationBookingSumOrderByAggregateInput = {
    rating?: SortOrder
  }

  export type EnumConsultationTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ConsultationType | EnumConsultationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ConsultationType[] | ListEnumConsultationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ConsultationType[] | ListEnumConsultationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumConsultationTypeWithAggregatesFilter<$PrismaModel> | $Enums.ConsultationType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumConsultationTypeFilter<$PrismaModel>
    _max?: NestedEnumConsultationTypeFilter<$PrismaModel>
  }

  export type EnumConsultationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ConsultationStatus | EnumConsultationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ConsultationStatus[] | ListEnumConsultationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ConsultationStatus[] | ListEnumConsultationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumConsultationStatusWithAggregatesFilter<$PrismaModel> | $Enums.ConsultationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumConsultationStatusFilter<$PrismaModel>
    _max?: NestedEnumConsultationStatusFilter<$PrismaModel>
  }

  export type ConsultationSessionCountOrderByAggregateInput = {
    id?: SortOrder
    lecturerId?: SortOrder
    scheduledDate?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    status?: SortOrder
    zoomLink?: SortOrder
    notes?: SortOrder
    confirmedAt?: SortOrder
    confirmedBy?: SortOrder
    evaluationLink?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ConsultationSessionMaxOrderByAggregateInput = {
    id?: SortOrder
    lecturerId?: SortOrder
    scheduledDate?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    status?: SortOrder
    zoomLink?: SortOrder
    notes?: SortOrder
    confirmedAt?: SortOrder
    confirmedBy?: SortOrder
    evaluationLink?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ConsultationSessionMinOrderByAggregateInput = {
    id?: SortOrder
    lecturerId?: SortOrder
    scheduledDate?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    status?: SortOrder
    zoomLink?: SortOrder
    notes?: SortOrder
    confirmedAt?: SortOrder
    confirmedBy?: SortOrder
    evaluationLink?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumSeminarStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SeminarStatus | EnumSeminarStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SeminarStatus[] | ListEnumSeminarStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SeminarStatus[] | ListEnumSeminarStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSeminarStatusFilter<$PrismaModel> | $Enums.SeminarStatus
  }

  export type EnumSeminarCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.SeminarCategory | EnumSeminarCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.SeminarCategory[] | ListEnumSeminarCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.SeminarCategory[] | ListEnumSeminarCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumSeminarCategoryFilter<$PrismaModel> | $Enums.SeminarCategory
  }

  export type SeminarCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    host?: SortOrder
    hostId?: SortOrder
    eventDate?: SortOrder
    eventTime?: SortOrder
    location?: SortOrder
    zoomLink?: SortOrder
    posterUrl?: SortOrder
    status?: SortOrder
    quota?: SortOrder
    category?: SortOrder
    targetAudience?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SeminarAvgOrderByAggregateInput = {
    quota?: SortOrder
  }

  export type SeminarMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    host?: SortOrder
    hostId?: SortOrder
    eventDate?: SortOrder
    eventTime?: SortOrder
    location?: SortOrder
    zoomLink?: SortOrder
    posterUrl?: SortOrder
    status?: SortOrder
    quota?: SortOrder
    category?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SeminarMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    host?: SortOrder
    hostId?: SortOrder
    eventDate?: SortOrder
    eventTime?: SortOrder
    location?: SortOrder
    zoomLink?: SortOrder
    posterUrl?: SortOrder
    status?: SortOrder
    quota?: SortOrder
    category?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SeminarSumOrderByAggregateInput = {
    quota?: SortOrder
  }

  export type EnumSeminarStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SeminarStatus | EnumSeminarStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SeminarStatus[] | ListEnumSeminarStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SeminarStatus[] | ListEnumSeminarStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSeminarStatusWithAggregatesFilter<$PrismaModel> | $Enums.SeminarStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSeminarStatusFilter<$PrismaModel>
    _max?: NestedEnumSeminarStatusFilter<$PrismaModel>
  }

  export type EnumSeminarCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SeminarCategory | EnumSeminarCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.SeminarCategory[] | ListEnumSeminarCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.SeminarCategory[] | ListEnumSeminarCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumSeminarCategoryWithAggregatesFilter<$PrismaModel> | $Enums.SeminarCategory
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSeminarCategoryFilter<$PrismaModel>
    _max?: NestedEnumSeminarCategoryFilter<$PrismaModel>
  }

  export type SeminarScalarRelationFilter = {
    is?: SeminarWhereInput
    isNot?: SeminarWhereInput
  }

  export type SeminarRegistrationSeminarIdUserIdCompoundUniqueInput = {
    seminarId: string
    userId: string
  }

  export type SeminarRegistrationCountOrderByAggregateInput = {
    id?: SortOrder
    seminarId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type SeminarRegistrationMaxOrderByAggregateInput = {
    id?: SortOrder
    seminarId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type SeminarRegistrationMinOrderByAggregateInput = {
    id?: SortOrder
    seminarId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type ActivityLogCountOrderByAggregateInput = {
    id?: SortOrder
    action?: SortOrder
    description?: SortOrder
    performedBy?: SortOrder
    performedByRole?: SortOrder
    relatedBookingId?: SortOrder
    relatedSessionId?: SortOrder
    timestamp?: SortOrder
  }

  export type ActivityLogMaxOrderByAggregateInput = {
    id?: SortOrder
    action?: SortOrder
    description?: SortOrder
    performedBy?: SortOrder
    performedByRole?: SortOrder
    relatedBookingId?: SortOrder
    relatedSessionId?: SortOrder
    timestamp?: SortOrder
  }

  export type ActivityLogMinOrderByAggregateInput = {
    id?: SortOrder
    action?: SortOrder
    description?: SortOrder
    performedBy?: SortOrder
    performedByRole?: SortOrder
    relatedBookingId?: SortOrder
    relatedSessionId?: SortOrder
    timestamp?: SortOrder
  }

  export type LecturerCreateNestedOneWithoutUserInput = {
    create?: XOR<LecturerCreateWithoutUserInput, LecturerUncheckedCreateWithoutUserInput>
    connectOrCreate?: LecturerCreateOrConnectWithoutUserInput
    connect?: LecturerWhereUniqueInput
  }

  export type ConsultationBookingCreateNestedManyWithoutUserInput = {
    create?: XOR<ConsultationBookingCreateWithoutUserInput, ConsultationBookingUncheckedCreateWithoutUserInput> | ConsultationBookingCreateWithoutUserInput[] | ConsultationBookingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ConsultationBookingCreateOrConnectWithoutUserInput | ConsultationBookingCreateOrConnectWithoutUserInput[]
    createMany?: ConsultationBookingCreateManyUserInputEnvelope
    connect?: ConsultationBookingWhereUniqueInput | ConsultationBookingWhereUniqueInput[]
  }

  export type SeminarCreateNestedManyWithoutCreatorInput = {
    create?: XOR<SeminarCreateWithoutCreatorInput, SeminarUncheckedCreateWithoutCreatorInput> | SeminarCreateWithoutCreatorInput[] | SeminarUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: SeminarCreateOrConnectWithoutCreatorInput | SeminarCreateOrConnectWithoutCreatorInput[]
    createMany?: SeminarCreateManyCreatorInputEnvelope
    connect?: SeminarWhereUniqueInput | SeminarWhereUniqueInput[]
  }

  export type SeminarRegistrationCreateNestedManyWithoutUserInput = {
    create?: XOR<SeminarRegistrationCreateWithoutUserInput, SeminarRegistrationUncheckedCreateWithoutUserInput> | SeminarRegistrationCreateWithoutUserInput[] | SeminarRegistrationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SeminarRegistrationCreateOrConnectWithoutUserInput | SeminarRegistrationCreateOrConnectWithoutUserInput[]
    createMany?: SeminarRegistrationCreateManyUserInputEnvelope
    connect?: SeminarRegistrationWhereUniqueInput | SeminarRegistrationWhereUniqueInput[]
  }

  export type ActivityLogCreateNestedManyWithoutUserInput = {
    create?: XOR<ActivityLogCreateWithoutUserInput, ActivityLogUncheckedCreateWithoutUserInput> | ActivityLogCreateWithoutUserInput[] | ActivityLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ActivityLogCreateOrConnectWithoutUserInput | ActivityLogCreateOrConnectWithoutUserInput[]
    createMany?: ActivityLogCreateManyUserInputEnvelope
    connect?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
  }

  export type LecturerUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<LecturerCreateWithoutUserInput, LecturerUncheckedCreateWithoutUserInput>
    connectOrCreate?: LecturerCreateOrConnectWithoutUserInput
    connect?: LecturerWhereUniqueInput
  }

  export type ConsultationBookingUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ConsultationBookingCreateWithoutUserInput, ConsultationBookingUncheckedCreateWithoutUserInput> | ConsultationBookingCreateWithoutUserInput[] | ConsultationBookingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ConsultationBookingCreateOrConnectWithoutUserInput | ConsultationBookingCreateOrConnectWithoutUserInput[]
    createMany?: ConsultationBookingCreateManyUserInputEnvelope
    connect?: ConsultationBookingWhereUniqueInput | ConsultationBookingWhereUniqueInput[]
  }

  export type SeminarUncheckedCreateNestedManyWithoutCreatorInput = {
    create?: XOR<SeminarCreateWithoutCreatorInput, SeminarUncheckedCreateWithoutCreatorInput> | SeminarCreateWithoutCreatorInput[] | SeminarUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: SeminarCreateOrConnectWithoutCreatorInput | SeminarCreateOrConnectWithoutCreatorInput[]
    createMany?: SeminarCreateManyCreatorInputEnvelope
    connect?: SeminarWhereUniqueInput | SeminarWhereUniqueInput[]
  }

  export type SeminarRegistrationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SeminarRegistrationCreateWithoutUserInput, SeminarRegistrationUncheckedCreateWithoutUserInput> | SeminarRegistrationCreateWithoutUserInput[] | SeminarRegistrationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SeminarRegistrationCreateOrConnectWithoutUserInput | SeminarRegistrationCreateOrConnectWithoutUserInput[]
    createMany?: SeminarRegistrationCreateManyUserInputEnvelope
    connect?: SeminarRegistrationWhereUniqueInput | SeminarRegistrationWhereUniqueInput[]
  }

  export type ActivityLogUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ActivityLogCreateWithoutUserInput, ActivityLogUncheckedCreateWithoutUserInput> | ActivityLogCreateWithoutUserInput[] | ActivityLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ActivityLogCreateOrConnectWithoutUserInput | ActivityLogCreateOrConnectWithoutUserInput[]
    createMany?: ActivityLogCreateManyUserInputEnvelope
    connect?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type LecturerUpdateOneWithoutUserNestedInput = {
    create?: XOR<LecturerCreateWithoutUserInput, LecturerUncheckedCreateWithoutUserInput>
    connectOrCreate?: LecturerCreateOrConnectWithoutUserInput
    upsert?: LecturerUpsertWithoutUserInput
    disconnect?: LecturerWhereInput | boolean
    delete?: LecturerWhereInput | boolean
    connect?: LecturerWhereUniqueInput
    update?: XOR<XOR<LecturerUpdateToOneWithWhereWithoutUserInput, LecturerUpdateWithoutUserInput>, LecturerUncheckedUpdateWithoutUserInput>
  }

  export type ConsultationBookingUpdateManyWithoutUserNestedInput = {
    create?: XOR<ConsultationBookingCreateWithoutUserInput, ConsultationBookingUncheckedCreateWithoutUserInput> | ConsultationBookingCreateWithoutUserInput[] | ConsultationBookingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ConsultationBookingCreateOrConnectWithoutUserInput | ConsultationBookingCreateOrConnectWithoutUserInput[]
    upsert?: ConsultationBookingUpsertWithWhereUniqueWithoutUserInput | ConsultationBookingUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ConsultationBookingCreateManyUserInputEnvelope
    set?: ConsultationBookingWhereUniqueInput | ConsultationBookingWhereUniqueInput[]
    disconnect?: ConsultationBookingWhereUniqueInput | ConsultationBookingWhereUniqueInput[]
    delete?: ConsultationBookingWhereUniqueInput | ConsultationBookingWhereUniqueInput[]
    connect?: ConsultationBookingWhereUniqueInput | ConsultationBookingWhereUniqueInput[]
    update?: ConsultationBookingUpdateWithWhereUniqueWithoutUserInput | ConsultationBookingUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ConsultationBookingUpdateManyWithWhereWithoutUserInput | ConsultationBookingUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ConsultationBookingScalarWhereInput | ConsultationBookingScalarWhereInput[]
  }

  export type SeminarUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<SeminarCreateWithoutCreatorInput, SeminarUncheckedCreateWithoutCreatorInput> | SeminarCreateWithoutCreatorInput[] | SeminarUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: SeminarCreateOrConnectWithoutCreatorInput | SeminarCreateOrConnectWithoutCreatorInput[]
    upsert?: SeminarUpsertWithWhereUniqueWithoutCreatorInput | SeminarUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: SeminarCreateManyCreatorInputEnvelope
    set?: SeminarWhereUniqueInput | SeminarWhereUniqueInput[]
    disconnect?: SeminarWhereUniqueInput | SeminarWhereUniqueInput[]
    delete?: SeminarWhereUniqueInput | SeminarWhereUniqueInput[]
    connect?: SeminarWhereUniqueInput | SeminarWhereUniqueInput[]
    update?: SeminarUpdateWithWhereUniqueWithoutCreatorInput | SeminarUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: SeminarUpdateManyWithWhereWithoutCreatorInput | SeminarUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: SeminarScalarWhereInput | SeminarScalarWhereInput[]
  }

  export type SeminarRegistrationUpdateManyWithoutUserNestedInput = {
    create?: XOR<SeminarRegistrationCreateWithoutUserInput, SeminarRegistrationUncheckedCreateWithoutUserInput> | SeminarRegistrationCreateWithoutUserInput[] | SeminarRegistrationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SeminarRegistrationCreateOrConnectWithoutUserInput | SeminarRegistrationCreateOrConnectWithoutUserInput[]
    upsert?: SeminarRegistrationUpsertWithWhereUniqueWithoutUserInput | SeminarRegistrationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SeminarRegistrationCreateManyUserInputEnvelope
    set?: SeminarRegistrationWhereUniqueInput | SeminarRegistrationWhereUniqueInput[]
    disconnect?: SeminarRegistrationWhereUniqueInput | SeminarRegistrationWhereUniqueInput[]
    delete?: SeminarRegistrationWhereUniqueInput | SeminarRegistrationWhereUniqueInput[]
    connect?: SeminarRegistrationWhereUniqueInput | SeminarRegistrationWhereUniqueInput[]
    update?: SeminarRegistrationUpdateWithWhereUniqueWithoutUserInput | SeminarRegistrationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SeminarRegistrationUpdateManyWithWhereWithoutUserInput | SeminarRegistrationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SeminarRegistrationScalarWhereInput | SeminarRegistrationScalarWhereInput[]
  }

  export type ActivityLogUpdateManyWithoutUserNestedInput = {
    create?: XOR<ActivityLogCreateWithoutUserInput, ActivityLogUncheckedCreateWithoutUserInput> | ActivityLogCreateWithoutUserInput[] | ActivityLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ActivityLogCreateOrConnectWithoutUserInput | ActivityLogCreateOrConnectWithoutUserInput[]
    upsert?: ActivityLogUpsertWithWhereUniqueWithoutUserInput | ActivityLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ActivityLogCreateManyUserInputEnvelope
    set?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    disconnect?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    delete?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    connect?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    update?: ActivityLogUpdateWithWhereUniqueWithoutUserInput | ActivityLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ActivityLogUpdateManyWithWhereWithoutUserInput | ActivityLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ActivityLogScalarWhereInput | ActivityLogScalarWhereInput[]
  }

  export type LecturerUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<LecturerCreateWithoutUserInput, LecturerUncheckedCreateWithoutUserInput>
    connectOrCreate?: LecturerCreateOrConnectWithoutUserInput
    upsert?: LecturerUpsertWithoutUserInput
    disconnect?: LecturerWhereInput | boolean
    delete?: LecturerWhereInput | boolean
    connect?: LecturerWhereUniqueInput
    update?: XOR<XOR<LecturerUpdateToOneWithWhereWithoutUserInput, LecturerUpdateWithoutUserInput>, LecturerUncheckedUpdateWithoutUserInput>
  }

  export type ConsultationBookingUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ConsultationBookingCreateWithoutUserInput, ConsultationBookingUncheckedCreateWithoutUserInput> | ConsultationBookingCreateWithoutUserInput[] | ConsultationBookingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ConsultationBookingCreateOrConnectWithoutUserInput | ConsultationBookingCreateOrConnectWithoutUserInput[]
    upsert?: ConsultationBookingUpsertWithWhereUniqueWithoutUserInput | ConsultationBookingUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ConsultationBookingCreateManyUserInputEnvelope
    set?: ConsultationBookingWhereUniqueInput | ConsultationBookingWhereUniqueInput[]
    disconnect?: ConsultationBookingWhereUniqueInput | ConsultationBookingWhereUniqueInput[]
    delete?: ConsultationBookingWhereUniqueInput | ConsultationBookingWhereUniqueInput[]
    connect?: ConsultationBookingWhereUniqueInput | ConsultationBookingWhereUniqueInput[]
    update?: ConsultationBookingUpdateWithWhereUniqueWithoutUserInput | ConsultationBookingUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ConsultationBookingUpdateManyWithWhereWithoutUserInput | ConsultationBookingUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ConsultationBookingScalarWhereInput | ConsultationBookingScalarWhereInput[]
  }

  export type SeminarUncheckedUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<SeminarCreateWithoutCreatorInput, SeminarUncheckedCreateWithoutCreatorInput> | SeminarCreateWithoutCreatorInput[] | SeminarUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: SeminarCreateOrConnectWithoutCreatorInput | SeminarCreateOrConnectWithoutCreatorInput[]
    upsert?: SeminarUpsertWithWhereUniqueWithoutCreatorInput | SeminarUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: SeminarCreateManyCreatorInputEnvelope
    set?: SeminarWhereUniqueInput | SeminarWhereUniqueInput[]
    disconnect?: SeminarWhereUniqueInput | SeminarWhereUniqueInput[]
    delete?: SeminarWhereUniqueInput | SeminarWhereUniqueInput[]
    connect?: SeminarWhereUniqueInput | SeminarWhereUniqueInput[]
    update?: SeminarUpdateWithWhereUniqueWithoutCreatorInput | SeminarUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: SeminarUpdateManyWithWhereWithoutCreatorInput | SeminarUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: SeminarScalarWhereInput | SeminarScalarWhereInput[]
  }

  export type SeminarRegistrationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SeminarRegistrationCreateWithoutUserInput, SeminarRegistrationUncheckedCreateWithoutUserInput> | SeminarRegistrationCreateWithoutUserInput[] | SeminarRegistrationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SeminarRegistrationCreateOrConnectWithoutUserInput | SeminarRegistrationCreateOrConnectWithoutUserInput[]
    upsert?: SeminarRegistrationUpsertWithWhereUniqueWithoutUserInput | SeminarRegistrationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SeminarRegistrationCreateManyUserInputEnvelope
    set?: SeminarRegistrationWhereUniqueInput | SeminarRegistrationWhereUniqueInput[]
    disconnect?: SeminarRegistrationWhereUniqueInput | SeminarRegistrationWhereUniqueInput[]
    delete?: SeminarRegistrationWhereUniqueInput | SeminarRegistrationWhereUniqueInput[]
    connect?: SeminarRegistrationWhereUniqueInput | SeminarRegistrationWhereUniqueInput[]
    update?: SeminarRegistrationUpdateWithWhereUniqueWithoutUserInput | SeminarRegistrationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SeminarRegistrationUpdateManyWithWhereWithoutUserInput | SeminarRegistrationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SeminarRegistrationScalarWhereInput | SeminarRegistrationScalarWhereInput[]
  }

  export type ActivityLogUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ActivityLogCreateWithoutUserInput, ActivityLogUncheckedCreateWithoutUserInput> | ActivityLogCreateWithoutUserInput[] | ActivityLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ActivityLogCreateOrConnectWithoutUserInput | ActivityLogCreateOrConnectWithoutUserInput[]
    upsert?: ActivityLogUpsertWithWhereUniqueWithoutUserInput | ActivityLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ActivityLogCreateManyUserInputEnvelope
    set?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    disconnect?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    delete?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    connect?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    update?: ActivityLogUpdateWithWhereUniqueWithoutUserInput | ActivityLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ActivityLogUpdateManyWithWhereWithoutUserInput | ActivityLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ActivityLogScalarWhereInput | ActivityLogScalarWhereInput[]
  }

  export type LecturerCreateNestedManyWithoutStudyProgramInput = {
    create?: XOR<LecturerCreateWithoutStudyProgramInput, LecturerUncheckedCreateWithoutStudyProgramInput> | LecturerCreateWithoutStudyProgramInput[] | LecturerUncheckedCreateWithoutStudyProgramInput[]
    connectOrCreate?: LecturerCreateOrConnectWithoutStudyProgramInput | LecturerCreateOrConnectWithoutStudyProgramInput[]
    createMany?: LecturerCreateManyStudyProgramInputEnvelope
    connect?: LecturerWhereUniqueInput | LecturerWhereUniqueInput[]
  }

  export type StudentCreateNestedManyWithoutStudyProgramInput = {
    create?: XOR<StudentCreateWithoutStudyProgramInput, StudentUncheckedCreateWithoutStudyProgramInput> | StudentCreateWithoutStudyProgramInput[] | StudentUncheckedCreateWithoutStudyProgramInput[]
    connectOrCreate?: StudentCreateOrConnectWithoutStudyProgramInput | StudentCreateOrConnectWithoutStudyProgramInput[]
    createMany?: StudentCreateManyStudyProgramInputEnvelope
    connect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
  }

  export type LecturerUncheckedCreateNestedManyWithoutStudyProgramInput = {
    create?: XOR<LecturerCreateWithoutStudyProgramInput, LecturerUncheckedCreateWithoutStudyProgramInput> | LecturerCreateWithoutStudyProgramInput[] | LecturerUncheckedCreateWithoutStudyProgramInput[]
    connectOrCreate?: LecturerCreateOrConnectWithoutStudyProgramInput | LecturerCreateOrConnectWithoutStudyProgramInput[]
    createMany?: LecturerCreateManyStudyProgramInputEnvelope
    connect?: LecturerWhereUniqueInput | LecturerWhereUniqueInput[]
  }

  export type StudentUncheckedCreateNestedManyWithoutStudyProgramInput = {
    create?: XOR<StudentCreateWithoutStudyProgramInput, StudentUncheckedCreateWithoutStudyProgramInput> | StudentCreateWithoutStudyProgramInput[] | StudentUncheckedCreateWithoutStudyProgramInput[]
    connectOrCreate?: StudentCreateOrConnectWithoutStudyProgramInput | StudentCreateOrConnectWithoutStudyProgramInput[]
    createMany?: StudentCreateManyStudyProgramInputEnvelope
    connect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
  }

  export type LecturerUpdateManyWithoutStudyProgramNestedInput = {
    create?: XOR<LecturerCreateWithoutStudyProgramInput, LecturerUncheckedCreateWithoutStudyProgramInput> | LecturerCreateWithoutStudyProgramInput[] | LecturerUncheckedCreateWithoutStudyProgramInput[]
    connectOrCreate?: LecturerCreateOrConnectWithoutStudyProgramInput | LecturerCreateOrConnectWithoutStudyProgramInput[]
    upsert?: LecturerUpsertWithWhereUniqueWithoutStudyProgramInput | LecturerUpsertWithWhereUniqueWithoutStudyProgramInput[]
    createMany?: LecturerCreateManyStudyProgramInputEnvelope
    set?: LecturerWhereUniqueInput | LecturerWhereUniqueInput[]
    disconnect?: LecturerWhereUniqueInput | LecturerWhereUniqueInput[]
    delete?: LecturerWhereUniqueInput | LecturerWhereUniqueInput[]
    connect?: LecturerWhereUniqueInput | LecturerWhereUniqueInput[]
    update?: LecturerUpdateWithWhereUniqueWithoutStudyProgramInput | LecturerUpdateWithWhereUniqueWithoutStudyProgramInput[]
    updateMany?: LecturerUpdateManyWithWhereWithoutStudyProgramInput | LecturerUpdateManyWithWhereWithoutStudyProgramInput[]
    deleteMany?: LecturerScalarWhereInput | LecturerScalarWhereInput[]
  }

  export type StudentUpdateManyWithoutStudyProgramNestedInput = {
    create?: XOR<StudentCreateWithoutStudyProgramInput, StudentUncheckedCreateWithoutStudyProgramInput> | StudentCreateWithoutStudyProgramInput[] | StudentUncheckedCreateWithoutStudyProgramInput[]
    connectOrCreate?: StudentCreateOrConnectWithoutStudyProgramInput | StudentCreateOrConnectWithoutStudyProgramInput[]
    upsert?: StudentUpsertWithWhereUniqueWithoutStudyProgramInput | StudentUpsertWithWhereUniqueWithoutStudyProgramInput[]
    createMany?: StudentCreateManyStudyProgramInputEnvelope
    set?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    disconnect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    delete?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    connect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    update?: StudentUpdateWithWhereUniqueWithoutStudyProgramInput | StudentUpdateWithWhereUniqueWithoutStudyProgramInput[]
    updateMany?: StudentUpdateManyWithWhereWithoutStudyProgramInput | StudentUpdateManyWithWhereWithoutStudyProgramInput[]
    deleteMany?: StudentScalarWhereInput | StudentScalarWhereInput[]
  }

  export type LecturerUncheckedUpdateManyWithoutStudyProgramNestedInput = {
    create?: XOR<LecturerCreateWithoutStudyProgramInput, LecturerUncheckedCreateWithoutStudyProgramInput> | LecturerCreateWithoutStudyProgramInput[] | LecturerUncheckedCreateWithoutStudyProgramInput[]
    connectOrCreate?: LecturerCreateOrConnectWithoutStudyProgramInput | LecturerCreateOrConnectWithoutStudyProgramInput[]
    upsert?: LecturerUpsertWithWhereUniqueWithoutStudyProgramInput | LecturerUpsertWithWhereUniqueWithoutStudyProgramInput[]
    createMany?: LecturerCreateManyStudyProgramInputEnvelope
    set?: LecturerWhereUniqueInput | LecturerWhereUniqueInput[]
    disconnect?: LecturerWhereUniqueInput | LecturerWhereUniqueInput[]
    delete?: LecturerWhereUniqueInput | LecturerWhereUniqueInput[]
    connect?: LecturerWhereUniqueInput | LecturerWhereUniqueInput[]
    update?: LecturerUpdateWithWhereUniqueWithoutStudyProgramInput | LecturerUpdateWithWhereUniqueWithoutStudyProgramInput[]
    updateMany?: LecturerUpdateManyWithWhereWithoutStudyProgramInput | LecturerUpdateManyWithWhereWithoutStudyProgramInput[]
    deleteMany?: LecturerScalarWhereInput | LecturerScalarWhereInput[]
  }

  export type StudentUncheckedUpdateManyWithoutStudyProgramNestedInput = {
    create?: XOR<StudentCreateWithoutStudyProgramInput, StudentUncheckedCreateWithoutStudyProgramInput> | StudentCreateWithoutStudyProgramInput[] | StudentUncheckedCreateWithoutStudyProgramInput[]
    connectOrCreate?: StudentCreateOrConnectWithoutStudyProgramInput | StudentCreateOrConnectWithoutStudyProgramInput[]
    upsert?: StudentUpsertWithWhereUniqueWithoutStudyProgramInput | StudentUpsertWithWhereUniqueWithoutStudyProgramInput[]
    createMany?: StudentCreateManyStudyProgramInputEnvelope
    set?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    disconnect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    delete?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    connect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    update?: StudentUpdateWithWhereUniqueWithoutStudyProgramInput | StudentUpdateWithWhereUniqueWithoutStudyProgramInput[]
    updateMany?: StudentUpdateManyWithWhereWithoutStudyProgramInput | StudentUpdateManyWithWhereWithoutStudyProgramInput[]
    deleteMany?: StudentScalarWhereInput | StudentScalarWhereInput[]
  }

  export type LecturerCreateexpertiseInput = {
    set: string[]
  }

  export type UserCreateNestedOneWithoutLecturerInput = {
    create?: XOR<UserCreateWithoutLecturerInput, UserUncheckedCreateWithoutLecturerInput>
    connectOrCreate?: UserCreateOrConnectWithoutLecturerInput
    connect?: UserWhereUniqueInput
  }

  export type StudyProgramCreateNestedOneWithoutLecturersInput = {
    create?: XOR<StudyProgramCreateWithoutLecturersInput, StudyProgramUncheckedCreateWithoutLecturersInput>
    connectOrCreate?: StudyProgramCreateOrConnectWithoutLecturersInput
    connect?: StudyProgramWhereUniqueInput
  }

  export type LecturerAvailabilityCreateNestedManyWithoutLecturerInput = {
    create?: XOR<LecturerAvailabilityCreateWithoutLecturerInput, LecturerAvailabilityUncheckedCreateWithoutLecturerInput> | LecturerAvailabilityCreateWithoutLecturerInput[] | LecturerAvailabilityUncheckedCreateWithoutLecturerInput[]
    connectOrCreate?: LecturerAvailabilityCreateOrConnectWithoutLecturerInput | LecturerAvailabilityCreateOrConnectWithoutLecturerInput[]
    createMany?: LecturerAvailabilityCreateManyLecturerInputEnvelope
    connect?: LecturerAvailabilityWhereUniqueInput | LecturerAvailabilityWhereUniqueInput[]
  }

  export type ConsultationBookingCreateNestedManyWithoutLecturerInput = {
    create?: XOR<ConsultationBookingCreateWithoutLecturerInput, ConsultationBookingUncheckedCreateWithoutLecturerInput> | ConsultationBookingCreateWithoutLecturerInput[] | ConsultationBookingUncheckedCreateWithoutLecturerInput[]
    connectOrCreate?: ConsultationBookingCreateOrConnectWithoutLecturerInput | ConsultationBookingCreateOrConnectWithoutLecturerInput[]
    createMany?: ConsultationBookingCreateManyLecturerInputEnvelope
    connect?: ConsultationBookingWhereUniqueInput | ConsultationBookingWhereUniqueInput[]
  }

  export type ConsultationSessionCreateNestedManyWithoutLecturerInput = {
    create?: XOR<ConsultationSessionCreateWithoutLecturerInput, ConsultationSessionUncheckedCreateWithoutLecturerInput> | ConsultationSessionCreateWithoutLecturerInput[] | ConsultationSessionUncheckedCreateWithoutLecturerInput[]
    connectOrCreate?: ConsultationSessionCreateOrConnectWithoutLecturerInput | ConsultationSessionCreateOrConnectWithoutLecturerInput[]
    createMany?: ConsultationSessionCreateManyLecturerInputEnvelope
    connect?: ConsultationSessionWhereUniqueInput | ConsultationSessionWhereUniqueInput[]
  }

  export type SeminarCreateNestedManyWithoutLecturerInput = {
    create?: XOR<SeminarCreateWithoutLecturerInput, SeminarUncheckedCreateWithoutLecturerInput> | SeminarCreateWithoutLecturerInput[] | SeminarUncheckedCreateWithoutLecturerInput[]
    connectOrCreate?: SeminarCreateOrConnectWithoutLecturerInput | SeminarCreateOrConnectWithoutLecturerInput[]
    createMany?: SeminarCreateManyLecturerInputEnvelope
    connect?: SeminarWhereUniqueInput | SeminarWhereUniqueInput[]
  }

  export type LecturerAvailabilityUncheckedCreateNestedManyWithoutLecturerInput = {
    create?: XOR<LecturerAvailabilityCreateWithoutLecturerInput, LecturerAvailabilityUncheckedCreateWithoutLecturerInput> | LecturerAvailabilityCreateWithoutLecturerInput[] | LecturerAvailabilityUncheckedCreateWithoutLecturerInput[]
    connectOrCreate?: LecturerAvailabilityCreateOrConnectWithoutLecturerInput | LecturerAvailabilityCreateOrConnectWithoutLecturerInput[]
    createMany?: LecturerAvailabilityCreateManyLecturerInputEnvelope
    connect?: LecturerAvailabilityWhereUniqueInput | LecturerAvailabilityWhereUniqueInput[]
  }

  export type ConsultationBookingUncheckedCreateNestedManyWithoutLecturerInput = {
    create?: XOR<ConsultationBookingCreateWithoutLecturerInput, ConsultationBookingUncheckedCreateWithoutLecturerInput> | ConsultationBookingCreateWithoutLecturerInput[] | ConsultationBookingUncheckedCreateWithoutLecturerInput[]
    connectOrCreate?: ConsultationBookingCreateOrConnectWithoutLecturerInput | ConsultationBookingCreateOrConnectWithoutLecturerInput[]
    createMany?: ConsultationBookingCreateManyLecturerInputEnvelope
    connect?: ConsultationBookingWhereUniqueInput | ConsultationBookingWhereUniqueInput[]
  }

  export type ConsultationSessionUncheckedCreateNestedManyWithoutLecturerInput = {
    create?: XOR<ConsultationSessionCreateWithoutLecturerInput, ConsultationSessionUncheckedCreateWithoutLecturerInput> | ConsultationSessionCreateWithoutLecturerInput[] | ConsultationSessionUncheckedCreateWithoutLecturerInput[]
    connectOrCreate?: ConsultationSessionCreateOrConnectWithoutLecturerInput | ConsultationSessionCreateOrConnectWithoutLecturerInput[]
    createMany?: ConsultationSessionCreateManyLecturerInputEnvelope
    connect?: ConsultationSessionWhereUniqueInput | ConsultationSessionWhereUniqueInput[]
  }

  export type SeminarUncheckedCreateNestedManyWithoutLecturerInput = {
    create?: XOR<SeminarCreateWithoutLecturerInput, SeminarUncheckedCreateWithoutLecturerInput> | SeminarCreateWithoutLecturerInput[] | SeminarUncheckedCreateWithoutLecturerInput[]
    connectOrCreate?: SeminarCreateOrConnectWithoutLecturerInput | SeminarCreateOrConnectWithoutLecturerInput[]
    createMany?: SeminarCreateManyLecturerInputEnvelope
    connect?: SeminarWhereUniqueInput | SeminarWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type LecturerUpdateexpertiseInput = {
    set?: string[]
    push?: string | string[]
  }

  export type UserUpdateOneWithoutLecturerNestedInput = {
    create?: XOR<UserCreateWithoutLecturerInput, UserUncheckedCreateWithoutLecturerInput>
    connectOrCreate?: UserCreateOrConnectWithoutLecturerInput
    upsert?: UserUpsertWithoutLecturerInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutLecturerInput, UserUpdateWithoutLecturerInput>, UserUncheckedUpdateWithoutLecturerInput>
  }

  export type StudyProgramUpdateOneWithoutLecturersNestedInput = {
    create?: XOR<StudyProgramCreateWithoutLecturersInput, StudyProgramUncheckedCreateWithoutLecturersInput>
    connectOrCreate?: StudyProgramCreateOrConnectWithoutLecturersInput
    upsert?: StudyProgramUpsertWithoutLecturersInput
    disconnect?: StudyProgramWhereInput | boolean
    delete?: StudyProgramWhereInput | boolean
    connect?: StudyProgramWhereUniqueInput
    update?: XOR<XOR<StudyProgramUpdateToOneWithWhereWithoutLecturersInput, StudyProgramUpdateWithoutLecturersInput>, StudyProgramUncheckedUpdateWithoutLecturersInput>
  }

  export type LecturerAvailabilityUpdateManyWithoutLecturerNestedInput = {
    create?: XOR<LecturerAvailabilityCreateWithoutLecturerInput, LecturerAvailabilityUncheckedCreateWithoutLecturerInput> | LecturerAvailabilityCreateWithoutLecturerInput[] | LecturerAvailabilityUncheckedCreateWithoutLecturerInput[]
    connectOrCreate?: LecturerAvailabilityCreateOrConnectWithoutLecturerInput | LecturerAvailabilityCreateOrConnectWithoutLecturerInput[]
    upsert?: LecturerAvailabilityUpsertWithWhereUniqueWithoutLecturerInput | LecturerAvailabilityUpsertWithWhereUniqueWithoutLecturerInput[]
    createMany?: LecturerAvailabilityCreateManyLecturerInputEnvelope
    set?: LecturerAvailabilityWhereUniqueInput | LecturerAvailabilityWhereUniqueInput[]
    disconnect?: LecturerAvailabilityWhereUniqueInput | LecturerAvailabilityWhereUniqueInput[]
    delete?: LecturerAvailabilityWhereUniqueInput | LecturerAvailabilityWhereUniqueInput[]
    connect?: LecturerAvailabilityWhereUniqueInput | LecturerAvailabilityWhereUniqueInput[]
    update?: LecturerAvailabilityUpdateWithWhereUniqueWithoutLecturerInput | LecturerAvailabilityUpdateWithWhereUniqueWithoutLecturerInput[]
    updateMany?: LecturerAvailabilityUpdateManyWithWhereWithoutLecturerInput | LecturerAvailabilityUpdateManyWithWhereWithoutLecturerInput[]
    deleteMany?: LecturerAvailabilityScalarWhereInput | LecturerAvailabilityScalarWhereInput[]
  }

  export type ConsultationBookingUpdateManyWithoutLecturerNestedInput = {
    create?: XOR<ConsultationBookingCreateWithoutLecturerInput, ConsultationBookingUncheckedCreateWithoutLecturerInput> | ConsultationBookingCreateWithoutLecturerInput[] | ConsultationBookingUncheckedCreateWithoutLecturerInput[]
    connectOrCreate?: ConsultationBookingCreateOrConnectWithoutLecturerInput | ConsultationBookingCreateOrConnectWithoutLecturerInput[]
    upsert?: ConsultationBookingUpsertWithWhereUniqueWithoutLecturerInput | ConsultationBookingUpsertWithWhereUniqueWithoutLecturerInput[]
    createMany?: ConsultationBookingCreateManyLecturerInputEnvelope
    set?: ConsultationBookingWhereUniqueInput | ConsultationBookingWhereUniqueInput[]
    disconnect?: ConsultationBookingWhereUniqueInput | ConsultationBookingWhereUniqueInput[]
    delete?: ConsultationBookingWhereUniqueInput | ConsultationBookingWhereUniqueInput[]
    connect?: ConsultationBookingWhereUniqueInput | ConsultationBookingWhereUniqueInput[]
    update?: ConsultationBookingUpdateWithWhereUniqueWithoutLecturerInput | ConsultationBookingUpdateWithWhereUniqueWithoutLecturerInput[]
    updateMany?: ConsultationBookingUpdateManyWithWhereWithoutLecturerInput | ConsultationBookingUpdateManyWithWhereWithoutLecturerInput[]
    deleteMany?: ConsultationBookingScalarWhereInput | ConsultationBookingScalarWhereInput[]
  }

  export type ConsultationSessionUpdateManyWithoutLecturerNestedInput = {
    create?: XOR<ConsultationSessionCreateWithoutLecturerInput, ConsultationSessionUncheckedCreateWithoutLecturerInput> | ConsultationSessionCreateWithoutLecturerInput[] | ConsultationSessionUncheckedCreateWithoutLecturerInput[]
    connectOrCreate?: ConsultationSessionCreateOrConnectWithoutLecturerInput | ConsultationSessionCreateOrConnectWithoutLecturerInput[]
    upsert?: ConsultationSessionUpsertWithWhereUniqueWithoutLecturerInput | ConsultationSessionUpsertWithWhereUniqueWithoutLecturerInput[]
    createMany?: ConsultationSessionCreateManyLecturerInputEnvelope
    set?: ConsultationSessionWhereUniqueInput | ConsultationSessionWhereUniqueInput[]
    disconnect?: ConsultationSessionWhereUniqueInput | ConsultationSessionWhereUniqueInput[]
    delete?: ConsultationSessionWhereUniqueInput | ConsultationSessionWhereUniqueInput[]
    connect?: ConsultationSessionWhereUniqueInput | ConsultationSessionWhereUniqueInput[]
    update?: ConsultationSessionUpdateWithWhereUniqueWithoutLecturerInput | ConsultationSessionUpdateWithWhereUniqueWithoutLecturerInput[]
    updateMany?: ConsultationSessionUpdateManyWithWhereWithoutLecturerInput | ConsultationSessionUpdateManyWithWhereWithoutLecturerInput[]
    deleteMany?: ConsultationSessionScalarWhereInput | ConsultationSessionScalarWhereInput[]
  }

  export type SeminarUpdateManyWithoutLecturerNestedInput = {
    create?: XOR<SeminarCreateWithoutLecturerInput, SeminarUncheckedCreateWithoutLecturerInput> | SeminarCreateWithoutLecturerInput[] | SeminarUncheckedCreateWithoutLecturerInput[]
    connectOrCreate?: SeminarCreateOrConnectWithoutLecturerInput | SeminarCreateOrConnectWithoutLecturerInput[]
    upsert?: SeminarUpsertWithWhereUniqueWithoutLecturerInput | SeminarUpsertWithWhereUniqueWithoutLecturerInput[]
    createMany?: SeminarCreateManyLecturerInputEnvelope
    set?: SeminarWhereUniqueInput | SeminarWhereUniqueInput[]
    disconnect?: SeminarWhereUniqueInput | SeminarWhereUniqueInput[]
    delete?: SeminarWhereUniqueInput | SeminarWhereUniqueInput[]
    connect?: SeminarWhereUniqueInput | SeminarWhereUniqueInput[]
    update?: SeminarUpdateWithWhereUniqueWithoutLecturerInput | SeminarUpdateWithWhereUniqueWithoutLecturerInput[]
    updateMany?: SeminarUpdateManyWithWhereWithoutLecturerInput | SeminarUpdateManyWithWhereWithoutLecturerInput[]
    deleteMany?: SeminarScalarWhereInput | SeminarScalarWhereInput[]
  }

  export type LecturerAvailabilityUncheckedUpdateManyWithoutLecturerNestedInput = {
    create?: XOR<LecturerAvailabilityCreateWithoutLecturerInput, LecturerAvailabilityUncheckedCreateWithoutLecturerInput> | LecturerAvailabilityCreateWithoutLecturerInput[] | LecturerAvailabilityUncheckedCreateWithoutLecturerInput[]
    connectOrCreate?: LecturerAvailabilityCreateOrConnectWithoutLecturerInput | LecturerAvailabilityCreateOrConnectWithoutLecturerInput[]
    upsert?: LecturerAvailabilityUpsertWithWhereUniqueWithoutLecturerInput | LecturerAvailabilityUpsertWithWhereUniqueWithoutLecturerInput[]
    createMany?: LecturerAvailabilityCreateManyLecturerInputEnvelope
    set?: LecturerAvailabilityWhereUniqueInput | LecturerAvailabilityWhereUniqueInput[]
    disconnect?: LecturerAvailabilityWhereUniqueInput | LecturerAvailabilityWhereUniqueInput[]
    delete?: LecturerAvailabilityWhereUniqueInput | LecturerAvailabilityWhereUniqueInput[]
    connect?: LecturerAvailabilityWhereUniqueInput | LecturerAvailabilityWhereUniqueInput[]
    update?: LecturerAvailabilityUpdateWithWhereUniqueWithoutLecturerInput | LecturerAvailabilityUpdateWithWhereUniqueWithoutLecturerInput[]
    updateMany?: LecturerAvailabilityUpdateManyWithWhereWithoutLecturerInput | LecturerAvailabilityUpdateManyWithWhereWithoutLecturerInput[]
    deleteMany?: LecturerAvailabilityScalarWhereInput | LecturerAvailabilityScalarWhereInput[]
  }

  export type ConsultationBookingUncheckedUpdateManyWithoutLecturerNestedInput = {
    create?: XOR<ConsultationBookingCreateWithoutLecturerInput, ConsultationBookingUncheckedCreateWithoutLecturerInput> | ConsultationBookingCreateWithoutLecturerInput[] | ConsultationBookingUncheckedCreateWithoutLecturerInput[]
    connectOrCreate?: ConsultationBookingCreateOrConnectWithoutLecturerInput | ConsultationBookingCreateOrConnectWithoutLecturerInput[]
    upsert?: ConsultationBookingUpsertWithWhereUniqueWithoutLecturerInput | ConsultationBookingUpsertWithWhereUniqueWithoutLecturerInput[]
    createMany?: ConsultationBookingCreateManyLecturerInputEnvelope
    set?: ConsultationBookingWhereUniqueInput | ConsultationBookingWhereUniqueInput[]
    disconnect?: ConsultationBookingWhereUniqueInput | ConsultationBookingWhereUniqueInput[]
    delete?: ConsultationBookingWhereUniqueInput | ConsultationBookingWhereUniqueInput[]
    connect?: ConsultationBookingWhereUniqueInput | ConsultationBookingWhereUniqueInput[]
    update?: ConsultationBookingUpdateWithWhereUniqueWithoutLecturerInput | ConsultationBookingUpdateWithWhereUniqueWithoutLecturerInput[]
    updateMany?: ConsultationBookingUpdateManyWithWhereWithoutLecturerInput | ConsultationBookingUpdateManyWithWhereWithoutLecturerInput[]
    deleteMany?: ConsultationBookingScalarWhereInput | ConsultationBookingScalarWhereInput[]
  }

  export type ConsultationSessionUncheckedUpdateManyWithoutLecturerNestedInput = {
    create?: XOR<ConsultationSessionCreateWithoutLecturerInput, ConsultationSessionUncheckedCreateWithoutLecturerInput> | ConsultationSessionCreateWithoutLecturerInput[] | ConsultationSessionUncheckedCreateWithoutLecturerInput[]
    connectOrCreate?: ConsultationSessionCreateOrConnectWithoutLecturerInput | ConsultationSessionCreateOrConnectWithoutLecturerInput[]
    upsert?: ConsultationSessionUpsertWithWhereUniqueWithoutLecturerInput | ConsultationSessionUpsertWithWhereUniqueWithoutLecturerInput[]
    createMany?: ConsultationSessionCreateManyLecturerInputEnvelope
    set?: ConsultationSessionWhereUniqueInput | ConsultationSessionWhereUniqueInput[]
    disconnect?: ConsultationSessionWhereUniqueInput | ConsultationSessionWhereUniqueInput[]
    delete?: ConsultationSessionWhereUniqueInput | ConsultationSessionWhereUniqueInput[]
    connect?: ConsultationSessionWhereUniqueInput | ConsultationSessionWhereUniqueInput[]
    update?: ConsultationSessionUpdateWithWhereUniqueWithoutLecturerInput | ConsultationSessionUpdateWithWhereUniqueWithoutLecturerInput[]
    updateMany?: ConsultationSessionUpdateManyWithWhereWithoutLecturerInput | ConsultationSessionUpdateManyWithWhereWithoutLecturerInput[]
    deleteMany?: ConsultationSessionScalarWhereInput | ConsultationSessionScalarWhereInput[]
  }

  export type SeminarUncheckedUpdateManyWithoutLecturerNestedInput = {
    create?: XOR<SeminarCreateWithoutLecturerInput, SeminarUncheckedCreateWithoutLecturerInput> | SeminarCreateWithoutLecturerInput[] | SeminarUncheckedCreateWithoutLecturerInput[]
    connectOrCreate?: SeminarCreateOrConnectWithoutLecturerInput | SeminarCreateOrConnectWithoutLecturerInput[]
    upsert?: SeminarUpsertWithWhereUniqueWithoutLecturerInput | SeminarUpsertWithWhereUniqueWithoutLecturerInput[]
    createMany?: SeminarCreateManyLecturerInputEnvelope
    set?: SeminarWhereUniqueInput | SeminarWhereUniqueInput[]
    disconnect?: SeminarWhereUniqueInput | SeminarWhereUniqueInput[]
    delete?: SeminarWhereUniqueInput | SeminarWhereUniqueInput[]
    connect?: SeminarWhereUniqueInput | SeminarWhereUniqueInput[]
    update?: SeminarUpdateWithWhereUniqueWithoutLecturerInput | SeminarUpdateWithWhereUniqueWithoutLecturerInput[]
    updateMany?: SeminarUpdateManyWithWhereWithoutLecturerInput | SeminarUpdateManyWithWhereWithoutLecturerInput[]
    deleteMany?: SeminarScalarWhereInput | SeminarScalarWhereInput[]
  }

  export type StudyProgramCreateNestedOneWithoutStudentsInput = {
    create?: XOR<StudyProgramCreateWithoutStudentsInput, StudyProgramUncheckedCreateWithoutStudentsInput>
    connectOrCreate?: StudyProgramCreateOrConnectWithoutStudentsInput
    connect?: StudyProgramWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type StudyProgramUpdateOneWithoutStudentsNestedInput = {
    create?: XOR<StudyProgramCreateWithoutStudentsInput, StudyProgramUncheckedCreateWithoutStudentsInput>
    connectOrCreate?: StudyProgramCreateOrConnectWithoutStudentsInput
    upsert?: StudyProgramUpsertWithoutStudentsInput
    disconnect?: StudyProgramWhereInput | boolean
    delete?: StudyProgramWhereInput | boolean
    connect?: StudyProgramWhereUniqueInput
    update?: XOR<XOR<StudyProgramUpdateToOneWithWhereWithoutStudentsInput, StudyProgramUpdateWithoutStudentsInput>, StudyProgramUncheckedUpdateWithoutStudentsInput>
  }

  export type LecturerAvailabilityCreateNestedManyWithoutSemesterInput = {
    create?: XOR<LecturerAvailabilityCreateWithoutSemesterInput, LecturerAvailabilityUncheckedCreateWithoutSemesterInput> | LecturerAvailabilityCreateWithoutSemesterInput[] | LecturerAvailabilityUncheckedCreateWithoutSemesterInput[]
    connectOrCreate?: LecturerAvailabilityCreateOrConnectWithoutSemesterInput | LecturerAvailabilityCreateOrConnectWithoutSemesterInput[]
    createMany?: LecturerAvailabilityCreateManySemesterInputEnvelope
    connect?: LecturerAvailabilityWhereUniqueInput | LecturerAvailabilityWhereUniqueInput[]
  }

  export type ConsultationBookingCreateNestedManyWithoutSemesterInput = {
    create?: XOR<ConsultationBookingCreateWithoutSemesterInput, ConsultationBookingUncheckedCreateWithoutSemesterInput> | ConsultationBookingCreateWithoutSemesterInput[] | ConsultationBookingUncheckedCreateWithoutSemesterInput[]
    connectOrCreate?: ConsultationBookingCreateOrConnectWithoutSemesterInput | ConsultationBookingCreateOrConnectWithoutSemesterInput[]
    createMany?: ConsultationBookingCreateManySemesterInputEnvelope
    connect?: ConsultationBookingWhereUniqueInput | ConsultationBookingWhereUniqueInput[]
  }

  export type LecturerAvailabilityUncheckedCreateNestedManyWithoutSemesterInput = {
    create?: XOR<LecturerAvailabilityCreateWithoutSemesterInput, LecturerAvailabilityUncheckedCreateWithoutSemesterInput> | LecturerAvailabilityCreateWithoutSemesterInput[] | LecturerAvailabilityUncheckedCreateWithoutSemesterInput[]
    connectOrCreate?: LecturerAvailabilityCreateOrConnectWithoutSemesterInput | LecturerAvailabilityCreateOrConnectWithoutSemesterInput[]
    createMany?: LecturerAvailabilityCreateManySemesterInputEnvelope
    connect?: LecturerAvailabilityWhereUniqueInput | LecturerAvailabilityWhereUniqueInput[]
  }

  export type ConsultationBookingUncheckedCreateNestedManyWithoutSemesterInput = {
    create?: XOR<ConsultationBookingCreateWithoutSemesterInput, ConsultationBookingUncheckedCreateWithoutSemesterInput> | ConsultationBookingCreateWithoutSemesterInput[] | ConsultationBookingUncheckedCreateWithoutSemesterInput[]
    connectOrCreate?: ConsultationBookingCreateOrConnectWithoutSemesterInput | ConsultationBookingCreateOrConnectWithoutSemesterInput[]
    createMany?: ConsultationBookingCreateManySemesterInputEnvelope
    connect?: ConsultationBookingWhereUniqueInput | ConsultationBookingWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type LecturerAvailabilityUpdateManyWithoutSemesterNestedInput = {
    create?: XOR<LecturerAvailabilityCreateWithoutSemesterInput, LecturerAvailabilityUncheckedCreateWithoutSemesterInput> | LecturerAvailabilityCreateWithoutSemesterInput[] | LecturerAvailabilityUncheckedCreateWithoutSemesterInput[]
    connectOrCreate?: LecturerAvailabilityCreateOrConnectWithoutSemesterInput | LecturerAvailabilityCreateOrConnectWithoutSemesterInput[]
    upsert?: LecturerAvailabilityUpsertWithWhereUniqueWithoutSemesterInput | LecturerAvailabilityUpsertWithWhereUniqueWithoutSemesterInput[]
    createMany?: LecturerAvailabilityCreateManySemesterInputEnvelope
    set?: LecturerAvailabilityWhereUniqueInput | LecturerAvailabilityWhereUniqueInput[]
    disconnect?: LecturerAvailabilityWhereUniqueInput | LecturerAvailabilityWhereUniqueInput[]
    delete?: LecturerAvailabilityWhereUniqueInput | LecturerAvailabilityWhereUniqueInput[]
    connect?: LecturerAvailabilityWhereUniqueInput | LecturerAvailabilityWhereUniqueInput[]
    update?: LecturerAvailabilityUpdateWithWhereUniqueWithoutSemesterInput | LecturerAvailabilityUpdateWithWhereUniqueWithoutSemesterInput[]
    updateMany?: LecturerAvailabilityUpdateManyWithWhereWithoutSemesterInput | LecturerAvailabilityUpdateManyWithWhereWithoutSemesterInput[]
    deleteMany?: LecturerAvailabilityScalarWhereInput | LecturerAvailabilityScalarWhereInput[]
  }

  export type ConsultationBookingUpdateManyWithoutSemesterNestedInput = {
    create?: XOR<ConsultationBookingCreateWithoutSemesterInput, ConsultationBookingUncheckedCreateWithoutSemesterInput> | ConsultationBookingCreateWithoutSemesterInput[] | ConsultationBookingUncheckedCreateWithoutSemesterInput[]
    connectOrCreate?: ConsultationBookingCreateOrConnectWithoutSemesterInput | ConsultationBookingCreateOrConnectWithoutSemesterInput[]
    upsert?: ConsultationBookingUpsertWithWhereUniqueWithoutSemesterInput | ConsultationBookingUpsertWithWhereUniqueWithoutSemesterInput[]
    createMany?: ConsultationBookingCreateManySemesterInputEnvelope
    set?: ConsultationBookingWhereUniqueInput | ConsultationBookingWhereUniqueInput[]
    disconnect?: ConsultationBookingWhereUniqueInput | ConsultationBookingWhereUniqueInput[]
    delete?: ConsultationBookingWhereUniqueInput | ConsultationBookingWhereUniqueInput[]
    connect?: ConsultationBookingWhereUniqueInput | ConsultationBookingWhereUniqueInput[]
    update?: ConsultationBookingUpdateWithWhereUniqueWithoutSemesterInput | ConsultationBookingUpdateWithWhereUniqueWithoutSemesterInput[]
    updateMany?: ConsultationBookingUpdateManyWithWhereWithoutSemesterInput | ConsultationBookingUpdateManyWithWhereWithoutSemesterInput[]
    deleteMany?: ConsultationBookingScalarWhereInput | ConsultationBookingScalarWhereInput[]
  }

  export type LecturerAvailabilityUncheckedUpdateManyWithoutSemesterNestedInput = {
    create?: XOR<LecturerAvailabilityCreateWithoutSemesterInput, LecturerAvailabilityUncheckedCreateWithoutSemesterInput> | LecturerAvailabilityCreateWithoutSemesterInput[] | LecturerAvailabilityUncheckedCreateWithoutSemesterInput[]
    connectOrCreate?: LecturerAvailabilityCreateOrConnectWithoutSemesterInput | LecturerAvailabilityCreateOrConnectWithoutSemesterInput[]
    upsert?: LecturerAvailabilityUpsertWithWhereUniqueWithoutSemesterInput | LecturerAvailabilityUpsertWithWhereUniqueWithoutSemesterInput[]
    createMany?: LecturerAvailabilityCreateManySemesterInputEnvelope
    set?: LecturerAvailabilityWhereUniqueInput | LecturerAvailabilityWhereUniqueInput[]
    disconnect?: LecturerAvailabilityWhereUniqueInput | LecturerAvailabilityWhereUniqueInput[]
    delete?: LecturerAvailabilityWhereUniqueInput | LecturerAvailabilityWhereUniqueInput[]
    connect?: LecturerAvailabilityWhereUniqueInput | LecturerAvailabilityWhereUniqueInput[]
    update?: LecturerAvailabilityUpdateWithWhereUniqueWithoutSemesterInput | LecturerAvailabilityUpdateWithWhereUniqueWithoutSemesterInput[]
    updateMany?: LecturerAvailabilityUpdateManyWithWhereWithoutSemesterInput | LecturerAvailabilityUpdateManyWithWhereWithoutSemesterInput[]
    deleteMany?: LecturerAvailabilityScalarWhereInput | LecturerAvailabilityScalarWhereInput[]
  }

  export type ConsultationBookingUncheckedUpdateManyWithoutSemesterNestedInput = {
    create?: XOR<ConsultationBookingCreateWithoutSemesterInput, ConsultationBookingUncheckedCreateWithoutSemesterInput> | ConsultationBookingCreateWithoutSemesterInput[] | ConsultationBookingUncheckedCreateWithoutSemesterInput[]
    connectOrCreate?: ConsultationBookingCreateOrConnectWithoutSemesterInput | ConsultationBookingCreateOrConnectWithoutSemesterInput[]
    upsert?: ConsultationBookingUpsertWithWhereUniqueWithoutSemesterInput | ConsultationBookingUpsertWithWhereUniqueWithoutSemesterInput[]
    createMany?: ConsultationBookingCreateManySemesterInputEnvelope
    set?: ConsultationBookingWhereUniqueInput | ConsultationBookingWhereUniqueInput[]
    disconnect?: ConsultationBookingWhereUniqueInput | ConsultationBookingWhereUniqueInput[]
    delete?: ConsultationBookingWhereUniqueInput | ConsultationBookingWhereUniqueInput[]
    connect?: ConsultationBookingWhereUniqueInput | ConsultationBookingWhereUniqueInput[]
    update?: ConsultationBookingUpdateWithWhereUniqueWithoutSemesterInput | ConsultationBookingUpdateWithWhereUniqueWithoutSemesterInput[]
    updateMany?: ConsultationBookingUpdateManyWithWhereWithoutSemesterInput | ConsultationBookingUpdateManyWithWhereWithoutSemesterInput[]
    deleteMany?: ConsultationBookingScalarWhereInput | ConsultationBookingScalarWhereInput[]
  }

  export type LecturerCreateNestedOneWithoutAvailabilitiesInput = {
    create?: XOR<LecturerCreateWithoutAvailabilitiesInput, LecturerUncheckedCreateWithoutAvailabilitiesInput>
    connectOrCreate?: LecturerCreateOrConnectWithoutAvailabilitiesInput
    connect?: LecturerWhereUniqueInput
  }

  export type SemesterCreateNestedOneWithoutAvailabilitiesInput = {
    create?: XOR<SemesterCreateWithoutAvailabilitiesInput, SemesterUncheckedCreateWithoutAvailabilitiesInput>
    connectOrCreate?: SemesterCreateOrConnectWithoutAvailabilitiesInput
    connect?: SemesterWhereUniqueInput
  }

  export type LecturerUpdateOneRequiredWithoutAvailabilitiesNestedInput = {
    create?: XOR<LecturerCreateWithoutAvailabilitiesInput, LecturerUncheckedCreateWithoutAvailabilitiesInput>
    connectOrCreate?: LecturerCreateOrConnectWithoutAvailabilitiesInput
    upsert?: LecturerUpsertWithoutAvailabilitiesInput
    connect?: LecturerWhereUniqueInput
    update?: XOR<XOR<LecturerUpdateToOneWithWhereWithoutAvailabilitiesInput, LecturerUpdateWithoutAvailabilitiesInput>, LecturerUncheckedUpdateWithoutAvailabilitiesInput>
  }

  export type SemesterUpdateOneRequiredWithoutAvailabilitiesNestedInput = {
    create?: XOR<SemesterCreateWithoutAvailabilitiesInput, SemesterUncheckedCreateWithoutAvailabilitiesInput>
    connectOrCreate?: SemesterCreateOrConnectWithoutAvailabilitiesInput
    upsert?: SemesterUpsertWithoutAvailabilitiesInput
    connect?: SemesterWhereUniqueInput
    update?: XOR<XOR<SemesterUpdateToOneWithWhereWithoutAvailabilitiesInput, SemesterUpdateWithoutAvailabilitiesInput>, SemesterUncheckedUpdateWithoutAvailabilitiesInput>
  }

  export type UserCreateNestedOneWithoutBookingsInput = {
    create?: XOR<UserCreateWithoutBookingsInput, UserUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBookingsInput
    connect?: UserWhereUniqueInput
  }

  export type LecturerCreateNestedOneWithoutBookingsInput = {
    create?: XOR<LecturerCreateWithoutBookingsInput, LecturerUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: LecturerCreateOrConnectWithoutBookingsInput
    connect?: LecturerWhereUniqueInput
  }

  export type SemesterCreateNestedOneWithoutBookingsInput = {
    create?: XOR<SemesterCreateWithoutBookingsInput, SemesterUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: SemesterCreateOrConnectWithoutBookingsInput
    connect?: SemesterWhereUniqueInput
  }

  export type ConsultationSessionCreateNestedOneWithoutBookingsInput = {
    create?: XOR<ConsultationSessionCreateWithoutBookingsInput, ConsultationSessionUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: ConsultationSessionCreateOrConnectWithoutBookingsInput
    connect?: ConsultationSessionWhereUniqueInput
  }

  export type EnumConsultationTypeFieldUpdateOperationsInput = {
    set?: $Enums.ConsultationType
  }

  export type EnumConsultationStatusFieldUpdateOperationsInput = {
    set?: $Enums.ConsultationStatus
  }

  export type UserUpdateOneRequiredWithoutBookingsNestedInput = {
    create?: XOR<UserCreateWithoutBookingsInput, UserUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBookingsInput
    upsert?: UserUpsertWithoutBookingsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBookingsInput, UserUpdateWithoutBookingsInput>, UserUncheckedUpdateWithoutBookingsInput>
  }

  export type LecturerUpdateOneRequiredWithoutBookingsNestedInput = {
    create?: XOR<LecturerCreateWithoutBookingsInput, LecturerUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: LecturerCreateOrConnectWithoutBookingsInput
    upsert?: LecturerUpsertWithoutBookingsInput
    connect?: LecturerWhereUniqueInput
    update?: XOR<XOR<LecturerUpdateToOneWithWhereWithoutBookingsInput, LecturerUpdateWithoutBookingsInput>, LecturerUncheckedUpdateWithoutBookingsInput>
  }

  export type SemesterUpdateOneRequiredWithoutBookingsNestedInput = {
    create?: XOR<SemesterCreateWithoutBookingsInput, SemesterUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: SemesterCreateOrConnectWithoutBookingsInput
    upsert?: SemesterUpsertWithoutBookingsInput
    connect?: SemesterWhereUniqueInput
    update?: XOR<XOR<SemesterUpdateToOneWithWhereWithoutBookingsInput, SemesterUpdateWithoutBookingsInput>, SemesterUncheckedUpdateWithoutBookingsInput>
  }

  export type ConsultationSessionUpdateOneWithoutBookingsNestedInput = {
    create?: XOR<ConsultationSessionCreateWithoutBookingsInput, ConsultationSessionUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: ConsultationSessionCreateOrConnectWithoutBookingsInput
    upsert?: ConsultationSessionUpsertWithoutBookingsInput
    disconnect?: ConsultationSessionWhereInput | boolean
    delete?: ConsultationSessionWhereInput | boolean
    connect?: ConsultationSessionWhereUniqueInput
    update?: XOR<XOR<ConsultationSessionUpdateToOneWithWhereWithoutBookingsInput, ConsultationSessionUpdateWithoutBookingsInput>, ConsultationSessionUncheckedUpdateWithoutBookingsInput>
  }

  export type LecturerCreateNestedOneWithoutSessionsInput = {
    create?: XOR<LecturerCreateWithoutSessionsInput, LecturerUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: LecturerCreateOrConnectWithoutSessionsInput
    connect?: LecturerWhereUniqueInput
  }

  export type ConsultationBookingCreateNestedManyWithoutSessionInput = {
    create?: XOR<ConsultationBookingCreateWithoutSessionInput, ConsultationBookingUncheckedCreateWithoutSessionInput> | ConsultationBookingCreateWithoutSessionInput[] | ConsultationBookingUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: ConsultationBookingCreateOrConnectWithoutSessionInput | ConsultationBookingCreateOrConnectWithoutSessionInput[]
    createMany?: ConsultationBookingCreateManySessionInputEnvelope
    connect?: ConsultationBookingWhereUniqueInput | ConsultationBookingWhereUniqueInput[]
  }

  export type ConsultationBookingUncheckedCreateNestedManyWithoutSessionInput = {
    create?: XOR<ConsultationBookingCreateWithoutSessionInput, ConsultationBookingUncheckedCreateWithoutSessionInput> | ConsultationBookingCreateWithoutSessionInput[] | ConsultationBookingUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: ConsultationBookingCreateOrConnectWithoutSessionInput | ConsultationBookingCreateOrConnectWithoutSessionInput[]
    createMany?: ConsultationBookingCreateManySessionInputEnvelope
    connect?: ConsultationBookingWhereUniqueInput | ConsultationBookingWhereUniqueInput[]
  }

  export type LecturerUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<LecturerCreateWithoutSessionsInput, LecturerUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: LecturerCreateOrConnectWithoutSessionsInput
    upsert?: LecturerUpsertWithoutSessionsInput
    connect?: LecturerWhereUniqueInput
    update?: XOR<XOR<LecturerUpdateToOneWithWhereWithoutSessionsInput, LecturerUpdateWithoutSessionsInput>, LecturerUncheckedUpdateWithoutSessionsInput>
  }

  export type ConsultationBookingUpdateManyWithoutSessionNestedInput = {
    create?: XOR<ConsultationBookingCreateWithoutSessionInput, ConsultationBookingUncheckedCreateWithoutSessionInput> | ConsultationBookingCreateWithoutSessionInput[] | ConsultationBookingUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: ConsultationBookingCreateOrConnectWithoutSessionInput | ConsultationBookingCreateOrConnectWithoutSessionInput[]
    upsert?: ConsultationBookingUpsertWithWhereUniqueWithoutSessionInput | ConsultationBookingUpsertWithWhereUniqueWithoutSessionInput[]
    createMany?: ConsultationBookingCreateManySessionInputEnvelope
    set?: ConsultationBookingWhereUniqueInput | ConsultationBookingWhereUniqueInput[]
    disconnect?: ConsultationBookingWhereUniqueInput | ConsultationBookingWhereUniqueInput[]
    delete?: ConsultationBookingWhereUniqueInput | ConsultationBookingWhereUniqueInput[]
    connect?: ConsultationBookingWhereUniqueInput | ConsultationBookingWhereUniqueInput[]
    update?: ConsultationBookingUpdateWithWhereUniqueWithoutSessionInput | ConsultationBookingUpdateWithWhereUniqueWithoutSessionInput[]
    updateMany?: ConsultationBookingUpdateManyWithWhereWithoutSessionInput | ConsultationBookingUpdateManyWithWhereWithoutSessionInput[]
    deleteMany?: ConsultationBookingScalarWhereInput | ConsultationBookingScalarWhereInput[]
  }

  export type ConsultationBookingUncheckedUpdateManyWithoutSessionNestedInput = {
    create?: XOR<ConsultationBookingCreateWithoutSessionInput, ConsultationBookingUncheckedCreateWithoutSessionInput> | ConsultationBookingCreateWithoutSessionInput[] | ConsultationBookingUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: ConsultationBookingCreateOrConnectWithoutSessionInput | ConsultationBookingCreateOrConnectWithoutSessionInput[]
    upsert?: ConsultationBookingUpsertWithWhereUniqueWithoutSessionInput | ConsultationBookingUpsertWithWhereUniqueWithoutSessionInput[]
    createMany?: ConsultationBookingCreateManySessionInputEnvelope
    set?: ConsultationBookingWhereUniqueInput | ConsultationBookingWhereUniqueInput[]
    disconnect?: ConsultationBookingWhereUniqueInput | ConsultationBookingWhereUniqueInput[]
    delete?: ConsultationBookingWhereUniqueInput | ConsultationBookingWhereUniqueInput[]
    connect?: ConsultationBookingWhereUniqueInput | ConsultationBookingWhereUniqueInput[]
    update?: ConsultationBookingUpdateWithWhereUniqueWithoutSessionInput | ConsultationBookingUpdateWithWhereUniqueWithoutSessionInput[]
    updateMany?: ConsultationBookingUpdateManyWithWhereWithoutSessionInput | ConsultationBookingUpdateManyWithWhereWithoutSessionInput[]
    deleteMany?: ConsultationBookingScalarWhereInput | ConsultationBookingScalarWhereInput[]
  }

  export type SeminarCreatetargetAudienceInput = {
    set: string[]
  }

  export type UserCreateNestedOneWithoutCreatedSeminarsInput = {
    create?: XOR<UserCreateWithoutCreatedSeminarsInput, UserUncheckedCreateWithoutCreatedSeminarsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedSeminarsInput
    connect?: UserWhereUniqueInput
  }

  export type LecturerCreateNestedOneWithoutSeminarsInput = {
    create?: XOR<LecturerCreateWithoutSeminarsInput, LecturerUncheckedCreateWithoutSeminarsInput>
    connectOrCreate?: LecturerCreateOrConnectWithoutSeminarsInput
    connect?: LecturerWhereUniqueInput
  }

  export type SeminarRegistrationCreateNestedManyWithoutSeminarInput = {
    create?: XOR<SeminarRegistrationCreateWithoutSeminarInput, SeminarRegistrationUncheckedCreateWithoutSeminarInput> | SeminarRegistrationCreateWithoutSeminarInput[] | SeminarRegistrationUncheckedCreateWithoutSeminarInput[]
    connectOrCreate?: SeminarRegistrationCreateOrConnectWithoutSeminarInput | SeminarRegistrationCreateOrConnectWithoutSeminarInput[]
    createMany?: SeminarRegistrationCreateManySeminarInputEnvelope
    connect?: SeminarRegistrationWhereUniqueInput | SeminarRegistrationWhereUniqueInput[]
  }

  export type SeminarRegistrationUncheckedCreateNestedManyWithoutSeminarInput = {
    create?: XOR<SeminarRegistrationCreateWithoutSeminarInput, SeminarRegistrationUncheckedCreateWithoutSeminarInput> | SeminarRegistrationCreateWithoutSeminarInput[] | SeminarRegistrationUncheckedCreateWithoutSeminarInput[]
    connectOrCreate?: SeminarRegistrationCreateOrConnectWithoutSeminarInput | SeminarRegistrationCreateOrConnectWithoutSeminarInput[]
    createMany?: SeminarRegistrationCreateManySeminarInputEnvelope
    connect?: SeminarRegistrationWhereUniqueInput | SeminarRegistrationWhereUniqueInput[]
  }

  export type EnumSeminarStatusFieldUpdateOperationsInput = {
    set?: $Enums.SeminarStatus
  }

  export type EnumSeminarCategoryFieldUpdateOperationsInput = {
    set?: $Enums.SeminarCategory
  }

  export type SeminarUpdatetargetAudienceInput = {
    set?: string[]
    push?: string | string[]
  }

  export type UserUpdateOneRequiredWithoutCreatedSeminarsNestedInput = {
    create?: XOR<UserCreateWithoutCreatedSeminarsInput, UserUncheckedCreateWithoutCreatedSeminarsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedSeminarsInput
    upsert?: UserUpsertWithoutCreatedSeminarsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCreatedSeminarsInput, UserUpdateWithoutCreatedSeminarsInput>, UserUncheckedUpdateWithoutCreatedSeminarsInput>
  }

  export type LecturerUpdateOneWithoutSeminarsNestedInput = {
    create?: XOR<LecturerCreateWithoutSeminarsInput, LecturerUncheckedCreateWithoutSeminarsInput>
    connectOrCreate?: LecturerCreateOrConnectWithoutSeminarsInput
    upsert?: LecturerUpsertWithoutSeminarsInput
    disconnect?: LecturerWhereInput | boolean
    delete?: LecturerWhereInput | boolean
    connect?: LecturerWhereUniqueInput
    update?: XOR<XOR<LecturerUpdateToOneWithWhereWithoutSeminarsInput, LecturerUpdateWithoutSeminarsInput>, LecturerUncheckedUpdateWithoutSeminarsInput>
  }

  export type SeminarRegistrationUpdateManyWithoutSeminarNestedInput = {
    create?: XOR<SeminarRegistrationCreateWithoutSeminarInput, SeminarRegistrationUncheckedCreateWithoutSeminarInput> | SeminarRegistrationCreateWithoutSeminarInput[] | SeminarRegistrationUncheckedCreateWithoutSeminarInput[]
    connectOrCreate?: SeminarRegistrationCreateOrConnectWithoutSeminarInput | SeminarRegistrationCreateOrConnectWithoutSeminarInput[]
    upsert?: SeminarRegistrationUpsertWithWhereUniqueWithoutSeminarInput | SeminarRegistrationUpsertWithWhereUniqueWithoutSeminarInput[]
    createMany?: SeminarRegistrationCreateManySeminarInputEnvelope
    set?: SeminarRegistrationWhereUniqueInput | SeminarRegistrationWhereUniqueInput[]
    disconnect?: SeminarRegistrationWhereUniqueInput | SeminarRegistrationWhereUniqueInput[]
    delete?: SeminarRegistrationWhereUniqueInput | SeminarRegistrationWhereUniqueInput[]
    connect?: SeminarRegistrationWhereUniqueInput | SeminarRegistrationWhereUniqueInput[]
    update?: SeminarRegistrationUpdateWithWhereUniqueWithoutSeminarInput | SeminarRegistrationUpdateWithWhereUniqueWithoutSeminarInput[]
    updateMany?: SeminarRegistrationUpdateManyWithWhereWithoutSeminarInput | SeminarRegistrationUpdateManyWithWhereWithoutSeminarInput[]
    deleteMany?: SeminarRegistrationScalarWhereInput | SeminarRegistrationScalarWhereInput[]
  }

  export type SeminarRegistrationUncheckedUpdateManyWithoutSeminarNestedInput = {
    create?: XOR<SeminarRegistrationCreateWithoutSeminarInput, SeminarRegistrationUncheckedCreateWithoutSeminarInput> | SeminarRegistrationCreateWithoutSeminarInput[] | SeminarRegistrationUncheckedCreateWithoutSeminarInput[]
    connectOrCreate?: SeminarRegistrationCreateOrConnectWithoutSeminarInput | SeminarRegistrationCreateOrConnectWithoutSeminarInput[]
    upsert?: SeminarRegistrationUpsertWithWhereUniqueWithoutSeminarInput | SeminarRegistrationUpsertWithWhereUniqueWithoutSeminarInput[]
    createMany?: SeminarRegistrationCreateManySeminarInputEnvelope
    set?: SeminarRegistrationWhereUniqueInput | SeminarRegistrationWhereUniqueInput[]
    disconnect?: SeminarRegistrationWhereUniqueInput | SeminarRegistrationWhereUniqueInput[]
    delete?: SeminarRegistrationWhereUniqueInput | SeminarRegistrationWhereUniqueInput[]
    connect?: SeminarRegistrationWhereUniqueInput | SeminarRegistrationWhereUniqueInput[]
    update?: SeminarRegistrationUpdateWithWhereUniqueWithoutSeminarInput | SeminarRegistrationUpdateWithWhereUniqueWithoutSeminarInput[]
    updateMany?: SeminarRegistrationUpdateManyWithWhereWithoutSeminarInput | SeminarRegistrationUpdateManyWithWhereWithoutSeminarInput[]
    deleteMany?: SeminarRegistrationScalarWhereInput | SeminarRegistrationScalarWhereInput[]
  }

  export type SeminarCreateNestedOneWithoutRegistrationsInput = {
    create?: XOR<SeminarCreateWithoutRegistrationsInput, SeminarUncheckedCreateWithoutRegistrationsInput>
    connectOrCreate?: SeminarCreateOrConnectWithoutRegistrationsInput
    connect?: SeminarWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutSeminarRegistrationsInput = {
    create?: XOR<UserCreateWithoutSeminarRegistrationsInput, UserUncheckedCreateWithoutSeminarRegistrationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSeminarRegistrationsInput
    connect?: UserWhereUniqueInput
  }

  export type SeminarUpdateOneRequiredWithoutRegistrationsNestedInput = {
    create?: XOR<SeminarCreateWithoutRegistrationsInput, SeminarUncheckedCreateWithoutRegistrationsInput>
    connectOrCreate?: SeminarCreateOrConnectWithoutRegistrationsInput
    upsert?: SeminarUpsertWithoutRegistrationsInput
    connect?: SeminarWhereUniqueInput
    update?: XOR<XOR<SeminarUpdateToOneWithWhereWithoutRegistrationsInput, SeminarUpdateWithoutRegistrationsInput>, SeminarUncheckedUpdateWithoutRegistrationsInput>
  }

  export type UserUpdateOneRequiredWithoutSeminarRegistrationsNestedInput = {
    create?: XOR<UserCreateWithoutSeminarRegistrationsInput, UserUncheckedCreateWithoutSeminarRegistrationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSeminarRegistrationsInput
    upsert?: UserUpsertWithoutSeminarRegistrationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSeminarRegistrationsInput, UserUpdateWithoutSeminarRegistrationsInput>, UserUncheckedUpdateWithoutSeminarRegistrationsInput>
  }

  export type UserCreateNestedOneWithoutActivityLogsInput = {
    create?: XOR<UserCreateWithoutActivityLogsInput, UserUncheckedCreateWithoutActivityLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutActivityLogsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutActivityLogsNestedInput = {
    create?: XOR<UserCreateWithoutActivityLogsInput, UserUncheckedCreateWithoutActivityLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutActivityLogsInput
    upsert?: UserUpsertWithoutActivityLogsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutActivityLogsInput, UserUpdateWithoutActivityLogsInput>, UserUncheckedUpdateWithoutActivityLogsInput>
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedUuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedUuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedEnumConsultationTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ConsultationType | EnumConsultationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ConsultationType[] | ListEnumConsultationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ConsultationType[] | ListEnumConsultationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumConsultationTypeFilter<$PrismaModel> | $Enums.ConsultationType
  }

  export type NestedEnumConsultationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ConsultationStatus | EnumConsultationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ConsultationStatus[] | ListEnumConsultationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ConsultationStatus[] | ListEnumConsultationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumConsultationStatusFilter<$PrismaModel> | $Enums.ConsultationStatus
  }

  export type NestedEnumConsultationTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ConsultationType | EnumConsultationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ConsultationType[] | ListEnumConsultationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ConsultationType[] | ListEnumConsultationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumConsultationTypeWithAggregatesFilter<$PrismaModel> | $Enums.ConsultationType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumConsultationTypeFilter<$PrismaModel>
    _max?: NestedEnumConsultationTypeFilter<$PrismaModel>
  }

  export type NestedEnumConsultationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ConsultationStatus | EnumConsultationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ConsultationStatus[] | ListEnumConsultationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ConsultationStatus[] | ListEnumConsultationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumConsultationStatusWithAggregatesFilter<$PrismaModel> | $Enums.ConsultationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumConsultationStatusFilter<$PrismaModel>
    _max?: NestedEnumConsultationStatusFilter<$PrismaModel>
  }

  export type NestedEnumSeminarStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SeminarStatus | EnumSeminarStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SeminarStatus[] | ListEnumSeminarStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SeminarStatus[] | ListEnumSeminarStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSeminarStatusFilter<$PrismaModel> | $Enums.SeminarStatus
  }

  export type NestedEnumSeminarCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.SeminarCategory | EnumSeminarCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.SeminarCategory[] | ListEnumSeminarCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.SeminarCategory[] | ListEnumSeminarCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumSeminarCategoryFilter<$PrismaModel> | $Enums.SeminarCategory
  }

  export type NestedEnumSeminarStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SeminarStatus | EnumSeminarStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SeminarStatus[] | ListEnumSeminarStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SeminarStatus[] | ListEnumSeminarStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSeminarStatusWithAggregatesFilter<$PrismaModel> | $Enums.SeminarStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSeminarStatusFilter<$PrismaModel>
    _max?: NestedEnumSeminarStatusFilter<$PrismaModel>
  }

  export type NestedEnumSeminarCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SeminarCategory | EnumSeminarCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.SeminarCategory[] | ListEnumSeminarCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.SeminarCategory[] | ListEnumSeminarCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumSeminarCategoryWithAggregatesFilter<$PrismaModel> | $Enums.SeminarCategory
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSeminarCategoryFilter<$PrismaModel>
    _max?: NestedEnumSeminarCategoryFilter<$PrismaModel>
  }

  export type LecturerCreateWithoutUserInput = {
    id?: string
    lecturerCode: string
    name: string
    email: string
    photo?: string
    specialization: string
    university?: string
    rating?: number
    experience?: string
    expertise?: LecturerCreateexpertiseInput | string[]
    phone?: string
    bio?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    studyProgram?: StudyProgramCreateNestedOneWithoutLecturersInput
    availabilities?: LecturerAvailabilityCreateNestedManyWithoutLecturerInput
    bookings?: ConsultationBookingCreateNestedManyWithoutLecturerInput
    sessions?: ConsultationSessionCreateNestedManyWithoutLecturerInput
    seminars?: SeminarCreateNestedManyWithoutLecturerInput
  }

  export type LecturerUncheckedCreateWithoutUserInput = {
    id?: string
    lecturerCode: string
    studyProgramId?: string | null
    name: string
    email: string
    photo?: string
    specialization: string
    university?: string
    rating?: number
    experience?: string
    expertise?: LecturerCreateexpertiseInput | string[]
    phone?: string
    bio?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    availabilities?: LecturerAvailabilityUncheckedCreateNestedManyWithoutLecturerInput
    bookings?: ConsultationBookingUncheckedCreateNestedManyWithoutLecturerInput
    sessions?: ConsultationSessionUncheckedCreateNestedManyWithoutLecturerInput
    seminars?: SeminarUncheckedCreateNestedManyWithoutLecturerInput
  }

  export type LecturerCreateOrConnectWithoutUserInput = {
    where: LecturerWhereUniqueInput
    create: XOR<LecturerCreateWithoutUserInput, LecturerUncheckedCreateWithoutUserInput>
  }

  export type ConsultationBookingCreateWithoutUserInput = {
    id?: string
    consultationType: $Enums.ConsultationType
    title: string
    category: string
    priority?: string
    description: string
    organization: string
    contactPerson: string
    phone: string
    email: string
    scheduledDate: Date | string
    scheduledDay: string
    startTime: string
    endTime: string
    status?: $Enums.ConsultationStatus
    feedback?: string | null
    rating?: number | null
    zoomLink?: string | null
    rescheduleNote?: string | null
    attachmentFileName?: string | null
    attachmentUrl?: string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    lecturer: LecturerCreateNestedOneWithoutBookingsInput
    semester: SemesterCreateNestedOneWithoutBookingsInput
    session?: ConsultationSessionCreateNestedOneWithoutBookingsInput
  }

  export type ConsultationBookingUncheckedCreateWithoutUserInput = {
    id?: string
    lecturerId: string
    semesterId: string
    sessionId?: string | null
    consultationType: $Enums.ConsultationType
    title: string
    category: string
    priority?: string
    description: string
    organization: string
    contactPerson: string
    phone: string
    email: string
    scheduledDate: Date | string
    scheduledDay: string
    startTime: string
    endTime: string
    status?: $Enums.ConsultationStatus
    feedback?: string | null
    rating?: number | null
    zoomLink?: string | null
    rescheduleNote?: string | null
    attachmentFileName?: string | null
    attachmentUrl?: string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ConsultationBookingCreateOrConnectWithoutUserInput = {
    where: ConsultationBookingWhereUniqueInput
    create: XOR<ConsultationBookingCreateWithoutUserInput, ConsultationBookingUncheckedCreateWithoutUserInput>
  }

  export type ConsultationBookingCreateManyUserInputEnvelope = {
    data: ConsultationBookingCreateManyUserInput | ConsultationBookingCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SeminarCreateWithoutCreatorInput = {
    id?: string
    title: string
    description: string
    host: string
    eventDate: Date | string
    eventTime: string
    location: string
    zoomLink?: string | null
    posterUrl?: string | null
    status?: $Enums.SeminarStatus
    quota: number
    category?: $Enums.SeminarCategory
    targetAudience?: SeminarCreatetargetAudienceInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    lecturer?: LecturerCreateNestedOneWithoutSeminarsInput
    registrations?: SeminarRegistrationCreateNestedManyWithoutSeminarInput
  }

  export type SeminarUncheckedCreateWithoutCreatorInput = {
    id?: string
    title: string
    description: string
    host: string
    hostId?: string | null
    eventDate: Date | string
    eventTime: string
    location: string
    zoomLink?: string | null
    posterUrl?: string | null
    status?: $Enums.SeminarStatus
    quota: number
    category?: $Enums.SeminarCategory
    targetAudience?: SeminarCreatetargetAudienceInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    registrations?: SeminarRegistrationUncheckedCreateNestedManyWithoutSeminarInput
  }

  export type SeminarCreateOrConnectWithoutCreatorInput = {
    where: SeminarWhereUniqueInput
    create: XOR<SeminarCreateWithoutCreatorInput, SeminarUncheckedCreateWithoutCreatorInput>
  }

  export type SeminarCreateManyCreatorInputEnvelope = {
    data: SeminarCreateManyCreatorInput | SeminarCreateManyCreatorInput[]
    skipDuplicates?: boolean
  }

  export type SeminarRegistrationCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    seminar: SeminarCreateNestedOneWithoutRegistrationsInput
  }

  export type SeminarRegistrationUncheckedCreateWithoutUserInput = {
    id?: string
    seminarId: string
    createdAt?: Date | string
  }

  export type SeminarRegistrationCreateOrConnectWithoutUserInput = {
    where: SeminarRegistrationWhereUniqueInput
    create: XOR<SeminarRegistrationCreateWithoutUserInput, SeminarRegistrationUncheckedCreateWithoutUserInput>
  }

  export type SeminarRegistrationCreateManyUserInputEnvelope = {
    data: SeminarRegistrationCreateManyUserInput | SeminarRegistrationCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ActivityLogCreateWithoutUserInput = {
    id?: string
    action: string
    description: string
    performedByRole: $Enums.UserRole
    relatedBookingId?: string | null
    relatedSessionId?: string | null
    timestamp?: Date | string
  }

  export type ActivityLogUncheckedCreateWithoutUserInput = {
    id?: string
    action: string
    description: string
    performedByRole: $Enums.UserRole
    relatedBookingId?: string | null
    relatedSessionId?: string | null
    timestamp?: Date | string
  }

  export type ActivityLogCreateOrConnectWithoutUserInput = {
    where: ActivityLogWhereUniqueInput
    create: XOR<ActivityLogCreateWithoutUserInput, ActivityLogUncheckedCreateWithoutUserInput>
  }

  export type ActivityLogCreateManyUserInputEnvelope = {
    data: ActivityLogCreateManyUserInput | ActivityLogCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type LecturerUpsertWithoutUserInput = {
    update: XOR<LecturerUpdateWithoutUserInput, LecturerUncheckedUpdateWithoutUserInput>
    create: XOR<LecturerCreateWithoutUserInput, LecturerUncheckedCreateWithoutUserInput>
    where?: LecturerWhereInput
  }

  export type LecturerUpdateToOneWithWhereWithoutUserInput = {
    where?: LecturerWhereInput
    data: XOR<LecturerUpdateWithoutUserInput, LecturerUncheckedUpdateWithoutUserInput>
  }

  export type LecturerUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    lecturerCode?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    photo?: StringFieldUpdateOperationsInput | string
    specialization?: StringFieldUpdateOperationsInput | string
    university?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    experience?: StringFieldUpdateOperationsInput | string
    expertise?: LecturerUpdateexpertiseInput | string[]
    phone?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    studyProgram?: StudyProgramUpdateOneWithoutLecturersNestedInput
    availabilities?: LecturerAvailabilityUpdateManyWithoutLecturerNestedInput
    bookings?: ConsultationBookingUpdateManyWithoutLecturerNestedInput
    sessions?: ConsultationSessionUpdateManyWithoutLecturerNestedInput
    seminars?: SeminarUpdateManyWithoutLecturerNestedInput
  }

  export type LecturerUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    lecturerCode?: StringFieldUpdateOperationsInput | string
    studyProgramId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    photo?: StringFieldUpdateOperationsInput | string
    specialization?: StringFieldUpdateOperationsInput | string
    university?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    experience?: StringFieldUpdateOperationsInput | string
    expertise?: LecturerUpdateexpertiseInput | string[]
    phone?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    availabilities?: LecturerAvailabilityUncheckedUpdateManyWithoutLecturerNestedInput
    bookings?: ConsultationBookingUncheckedUpdateManyWithoutLecturerNestedInput
    sessions?: ConsultationSessionUncheckedUpdateManyWithoutLecturerNestedInput
    seminars?: SeminarUncheckedUpdateManyWithoutLecturerNestedInput
  }

  export type ConsultationBookingUpsertWithWhereUniqueWithoutUserInput = {
    where: ConsultationBookingWhereUniqueInput
    update: XOR<ConsultationBookingUpdateWithoutUserInput, ConsultationBookingUncheckedUpdateWithoutUserInput>
    create: XOR<ConsultationBookingCreateWithoutUserInput, ConsultationBookingUncheckedCreateWithoutUserInput>
  }

  export type ConsultationBookingUpdateWithWhereUniqueWithoutUserInput = {
    where: ConsultationBookingWhereUniqueInput
    data: XOR<ConsultationBookingUpdateWithoutUserInput, ConsultationBookingUncheckedUpdateWithoutUserInput>
  }

  export type ConsultationBookingUpdateManyWithWhereWithoutUserInput = {
    where: ConsultationBookingScalarWhereInput
    data: XOR<ConsultationBookingUpdateManyMutationInput, ConsultationBookingUncheckedUpdateManyWithoutUserInput>
  }

  export type ConsultationBookingScalarWhereInput = {
    AND?: ConsultationBookingScalarWhereInput | ConsultationBookingScalarWhereInput[]
    OR?: ConsultationBookingScalarWhereInput[]
    NOT?: ConsultationBookingScalarWhereInput | ConsultationBookingScalarWhereInput[]
    id?: UuidFilter<"ConsultationBooking"> | string
    userId?: UuidFilter<"ConsultationBooking"> | string
    lecturerId?: UuidFilter<"ConsultationBooking"> | string
    semesterId?: UuidFilter<"ConsultationBooking"> | string
    sessionId?: UuidNullableFilter<"ConsultationBooking"> | string | null
    consultationType?: EnumConsultationTypeFilter<"ConsultationBooking"> | $Enums.ConsultationType
    title?: StringFilter<"ConsultationBooking"> | string
    category?: StringFilter<"ConsultationBooking"> | string
    priority?: StringFilter<"ConsultationBooking"> | string
    description?: StringFilter<"ConsultationBooking"> | string
    organization?: StringFilter<"ConsultationBooking"> | string
    contactPerson?: StringFilter<"ConsultationBooking"> | string
    phone?: StringFilter<"ConsultationBooking"> | string
    email?: StringFilter<"ConsultationBooking"> | string
    scheduledDate?: DateTimeFilter<"ConsultationBooking"> | Date | string
    scheduledDay?: StringFilter<"ConsultationBooking"> | string
    startTime?: StringFilter<"ConsultationBooking"> | string
    endTime?: StringFilter<"ConsultationBooking"> | string
    status?: EnumConsultationStatusFilter<"ConsultationBooking"> | $Enums.ConsultationStatus
    feedback?: StringNullableFilter<"ConsultationBooking"> | string | null
    rating?: IntNullableFilter<"ConsultationBooking"> | number | null
    zoomLink?: StringNullableFilter<"ConsultationBooking"> | string | null
    rescheduleNote?: StringNullableFilter<"ConsultationBooking"> | string | null
    attachmentFileName?: StringNullableFilter<"ConsultationBooking"> | string | null
    attachmentUrl?: StringNullableFilter<"ConsultationBooking"> | string | null
    completedAt?: DateTimeNullableFilter<"ConsultationBooking"> | Date | string | null
    createdAt?: DateTimeFilter<"ConsultationBooking"> | Date | string
    updatedAt?: DateTimeFilter<"ConsultationBooking"> | Date | string
  }

  export type SeminarUpsertWithWhereUniqueWithoutCreatorInput = {
    where: SeminarWhereUniqueInput
    update: XOR<SeminarUpdateWithoutCreatorInput, SeminarUncheckedUpdateWithoutCreatorInput>
    create: XOR<SeminarCreateWithoutCreatorInput, SeminarUncheckedCreateWithoutCreatorInput>
  }

  export type SeminarUpdateWithWhereUniqueWithoutCreatorInput = {
    where: SeminarWhereUniqueInput
    data: XOR<SeminarUpdateWithoutCreatorInput, SeminarUncheckedUpdateWithoutCreatorInput>
  }

  export type SeminarUpdateManyWithWhereWithoutCreatorInput = {
    where: SeminarScalarWhereInput
    data: XOR<SeminarUpdateManyMutationInput, SeminarUncheckedUpdateManyWithoutCreatorInput>
  }

  export type SeminarScalarWhereInput = {
    AND?: SeminarScalarWhereInput | SeminarScalarWhereInput[]
    OR?: SeminarScalarWhereInput[]
    NOT?: SeminarScalarWhereInput | SeminarScalarWhereInput[]
    id?: UuidFilter<"Seminar"> | string
    title?: StringFilter<"Seminar"> | string
    description?: StringFilter<"Seminar"> | string
    host?: StringFilter<"Seminar"> | string
    hostId?: UuidNullableFilter<"Seminar"> | string | null
    eventDate?: DateTimeFilter<"Seminar"> | Date | string
    eventTime?: StringFilter<"Seminar"> | string
    location?: StringFilter<"Seminar"> | string
    zoomLink?: StringNullableFilter<"Seminar"> | string | null
    posterUrl?: StringNullableFilter<"Seminar"> | string | null
    status?: EnumSeminarStatusFilter<"Seminar"> | $Enums.SeminarStatus
    quota?: IntFilter<"Seminar"> | number
    category?: EnumSeminarCategoryFilter<"Seminar"> | $Enums.SeminarCategory
    targetAudience?: StringNullableListFilter<"Seminar">
    createdBy?: UuidFilter<"Seminar"> | string
    createdAt?: DateTimeFilter<"Seminar"> | Date | string
    updatedAt?: DateTimeFilter<"Seminar"> | Date | string
  }

  export type SeminarRegistrationUpsertWithWhereUniqueWithoutUserInput = {
    where: SeminarRegistrationWhereUniqueInput
    update: XOR<SeminarRegistrationUpdateWithoutUserInput, SeminarRegistrationUncheckedUpdateWithoutUserInput>
    create: XOR<SeminarRegistrationCreateWithoutUserInput, SeminarRegistrationUncheckedCreateWithoutUserInput>
  }

  export type SeminarRegistrationUpdateWithWhereUniqueWithoutUserInput = {
    where: SeminarRegistrationWhereUniqueInput
    data: XOR<SeminarRegistrationUpdateWithoutUserInput, SeminarRegistrationUncheckedUpdateWithoutUserInput>
  }

  export type SeminarRegistrationUpdateManyWithWhereWithoutUserInput = {
    where: SeminarRegistrationScalarWhereInput
    data: XOR<SeminarRegistrationUpdateManyMutationInput, SeminarRegistrationUncheckedUpdateManyWithoutUserInput>
  }

  export type SeminarRegistrationScalarWhereInput = {
    AND?: SeminarRegistrationScalarWhereInput | SeminarRegistrationScalarWhereInput[]
    OR?: SeminarRegistrationScalarWhereInput[]
    NOT?: SeminarRegistrationScalarWhereInput | SeminarRegistrationScalarWhereInput[]
    id?: UuidFilter<"SeminarRegistration"> | string
    seminarId?: UuidFilter<"SeminarRegistration"> | string
    userId?: UuidFilter<"SeminarRegistration"> | string
    createdAt?: DateTimeFilter<"SeminarRegistration"> | Date | string
  }

  export type ActivityLogUpsertWithWhereUniqueWithoutUserInput = {
    where: ActivityLogWhereUniqueInput
    update: XOR<ActivityLogUpdateWithoutUserInput, ActivityLogUncheckedUpdateWithoutUserInput>
    create: XOR<ActivityLogCreateWithoutUserInput, ActivityLogUncheckedCreateWithoutUserInput>
  }

  export type ActivityLogUpdateWithWhereUniqueWithoutUserInput = {
    where: ActivityLogWhereUniqueInput
    data: XOR<ActivityLogUpdateWithoutUserInput, ActivityLogUncheckedUpdateWithoutUserInput>
  }

  export type ActivityLogUpdateManyWithWhereWithoutUserInput = {
    where: ActivityLogScalarWhereInput
    data: XOR<ActivityLogUpdateManyMutationInput, ActivityLogUncheckedUpdateManyWithoutUserInput>
  }

  export type ActivityLogScalarWhereInput = {
    AND?: ActivityLogScalarWhereInput | ActivityLogScalarWhereInput[]
    OR?: ActivityLogScalarWhereInput[]
    NOT?: ActivityLogScalarWhereInput | ActivityLogScalarWhereInput[]
    id?: UuidFilter<"ActivityLog"> | string
    action?: StringFilter<"ActivityLog"> | string
    description?: StringFilter<"ActivityLog"> | string
    performedBy?: UuidFilter<"ActivityLog"> | string
    performedByRole?: EnumUserRoleFilter<"ActivityLog"> | $Enums.UserRole
    relatedBookingId?: UuidNullableFilter<"ActivityLog"> | string | null
    relatedSessionId?: UuidNullableFilter<"ActivityLog"> | string | null
    timestamp?: DateTimeFilter<"ActivityLog"> | Date | string
  }

  export type LecturerCreateWithoutStudyProgramInput = {
    id?: string
    lecturerCode: string
    name: string
    email: string
    photo?: string
    specialization: string
    university?: string
    rating?: number
    experience?: string
    expertise?: LecturerCreateexpertiseInput | string[]
    phone?: string
    bio?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: UserCreateNestedOneWithoutLecturerInput
    availabilities?: LecturerAvailabilityCreateNestedManyWithoutLecturerInput
    bookings?: ConsultationBookingCreateNestedManyWithoutLecturerInput
    sessions?: ConsultationSessionCreateNestedManyWithoutLecturerInput
    seminars?: SeminarCreateNestedManyWithoutLecturerInput
  }

  export type LecturerUncheckedCreateWithoutStudyProgramInput = {
    id?: string
    lecturerCode: string
    userId?: string | null
    name: string
    email: string
    photo?: string
    specialization: string
    university?: string
    rating?: number
    experience?: string
    expertise?: LecturerCreateexpertiseInput | string[]
    phone?: string
    bio?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    availabilities?: LecturerAvailabilityUncheckedCreateNestedManyWithoutLecturerInput
    bookings?: ConsultationBookingUncheckedCreateNestedManyWithoutLecturerInput
    sessions?: ConsultationSessionUncheckedCreateNestedManyWithoutLecturerInput
    seminars?: SeminarUncheckedCreateNestedManyWithoutLecturerInput
  }

  export type LecturerCreateOrConnectWithoutStudyProgramInput = {
    where: LecturerWhereUniqueInput
    create: XOR<LecturerCreateWithoutStudyProgramInput, LecturerUncheckedCreateWithoutStudyProgramInput>
  }

  export type LecturerCreateManyStudyProgramInputEnvelope = {
    data: LecturerCreateManyStudyProgramInput | LecturerCreateManyStudyProgramInput[]
    skipDuplicates?: boolean
  }

  export type StudentCreateWithoutStudyProgramInput = {
    id?: string
    nim: string
    name: string
    email: string
    semester: number
    phone?: string
  }

  export type StudentUncheckedCreateWithoutStudyProgramInput = {
    id?: string
    nim: string
    name: string
    email: string
    semester: number
    phone?: string
  }

  export type StudentCreateOrConnectWithoutStudyProgramInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutStudyProgramInput, StudentUncheckedCreateWithoutStudyProgramInput>
  }

  export type StudentCreateManyStudyProgramInputEnvelope = {
    data: StudentCreateManyStudyProgramInput | StudentCreateManyStudyProgramInput[]
    skipDuplicates?: boolean
  }

  export type LecturerUpsertWithWhereUniqueWithoutStudyProgramInput = {
    where: LecturerWhereUniqueInput
    update: XOR<LecturerUpdateWithoutStudyProgramInput, LecturerUncheckedUpdateWithoutStudyProgramInput>
    create: XOR<LecturerCreateWithoutStudyProgramInput, LecturerUncheckedCreateWithoutStudyProgramInput>
  }

  export type LecturerUpdateWithWhereUniqueWithoutStudyProgramInput = {
    where: LecturerWhereUniqueInput
    data: XOR<LecturerUpdateWithoutStudyProgramInput, LecturerUncheckedUpdateWithoutStudyProgramInput>
  }

  export type LecturerUpdateManyWithWhereWithoutStudyProgramInput = {
    where: LecturerScalarWhereInput
    data: XOR<LecturerUpdateManyMutationInput, LecturerUncheckedUpdateManyWithoutStudyProgramInput>
  }

  export type LecturerScalarWhereInput = {
    AND?: LecturerScalarWhereInput | LecturerScalarWhereInput[]
    OR?: LecturerScalarWhereInput[]
    NOT?: LecturerScalarWhereInput | LecturerScalarWhereInput[]
    id?: UuidFilter<"Lecturer"> | string
    lecturerCode?: StringFilter<"Lecturer"> | string
    userId?: UuidNullableFilter<"Lecturer"> | string | null
    studyProgramId?: UuidNullableFilter<"Lecturer"> | string | null
    name?: StringFilter<"Lecturer"> | string
    email?: StringFilter<"Lecturer"> | string
    photo?: StringFilter<"Lecturer"> | string
    specialization?: StringFilter<"Lecturer"> | string
    university?: StringFilter<"Lecturer"> | string
    rating?: FloatFilter<"Lecturer"> | number
    experience?: StringFilter<"Lecturer"> | string
    expertise?: StringNullableListFilter<"Lecturer">
    phone?: StringFilter<"Lecturer"> | string
    bio?: StringFilter<"Lecturer"> | string
    createdAt?: DateTimeFilter<"Lecturer"> | Date | string
    updatedAt?: DateTimeFilter<"Lecturer"> | Date | string
  }

  export type StudentUpsertWithWhereUniqueWithoutStudyProgramInput = {
    where: StudentWhereUniqueInput
    update: XOR<StudentUpdateWithoutStudyProgramInput, StudentUncheckedUpdateWithoutStudyProgramInput>
    create: XOR<StudentCreateWithoutStudyProgramInput, StudentUncheckedCreateWithoutStudyProgramInput>
  }

  export type StudentUpdateWithWhereUniqueWithoutStudyProgramInput = {
    where: StudentWhereUniqueInput
    data: XOR<StudentUpdateWithoutStudyProgramInput, StudentUncheckedUpdateWithoutStudyProgramInput>
  }

  export type StudentUpdateManyWithWhereWithoutStudyProgramInput = {
    where: StudentScalarWhereInput
    data: XOR<StudentUpdateManyMutationInput, StudentUncheckedUpdateManyWithoutStudyProgramInput>
  }

  export type StudentScalarWhereInput = {
    AND?: StudentScalarWhereInput | StudentScalarWhereInput[]
    OR?: StudentScalarWhereInput[]
    NOT?: StudentScalarWhereInput | StudentScalarWhereInput[]
    id?: UuidFilter<"Student"> | string
    nim?: StringFilter<"Student"> | string
    name?: StringFilter<"Student"> | string
    email?: StringFilter<"Student"> | string
    studyProgramId?: UuidNullableFilter<"Student"> | string | null
    semester?: IntFilter<"Student"> | number
    phone?: StringFilter<"Student"> | string
  }

  export type UserCreateWithoutLecturerInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    role: $Enums.UserRole
    avatar?: string
    profilePictureUrl?: string | null
    phone?: string | null
    status?: string
    organization?: string | null
    businessName?: string | null
    businessCategory?: string | null
    businessAddress?: string | null
    nim?: string | null
    semester?: number | null
    schoolName?: string | null
    subject?: string | null
    grade?: string | null
    lastLogin?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    bookings?: ConsultationBookingCreateNestedManyWithoutUserInput
    createdSeminars?: SeminarCreateNestedManyWithoutCreatorInput
    seminarRegistrations?: SeminarRegistrationCreateNestedManyWithoutUserInput
    activityLogs?: ActivityLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutLecturerInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    role: $Enums.UserRole
    avatar?: string
    profilePictureUrl?: string | null
    phone?: string | null
    status?: string
    organization?: string | null
    businessName?: string | null
    businessCategory?: string | null
    businessAddress?: string | null
    nim?: string | null
    semester?: number | null
    schoolName?: string | null
    subject?: string | null
    grade?: string | null
    lastLogin?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    bookings?: ConsultationBookingUncheckedCreateNestedManyWithoutUserInput
    createdSeminars?: SeminarUncheckedCreateNestedManyWithoutCreatorInput
    seminarRegistrations?: SeminarRegistrationUncheckedCreateNestedManyWithoutUserInput
    activityLogs?: ActivityLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutLecturerInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutLecturerInput, UserUncheckedCreateWithoutLecturerInput>
  }

  export type StudyProgramCreateWithoutLecturersInput = {
    id?: string
    code: string
    name: string
    faculty: string
    createdAt?: Date | string
    students?: StudentCreateNestedManyWithoutStudyProgramInput
  }

  export type StudyProgramUncheckedCreateWithoutLecturersInput = {
    id?: string
    code: string
    name: string
    faculty: string
    createdAt?: Date | string
    students?: StudentUncheckedCreateNestedManyWithoutStudyProgramInput
  }

  export type StudyProgramCreateOrConnectWithoutLecturersInput = {
    where: StudyProgramWhereUniqueInput
    create: XOR<StudyProgramCreateWithoutLecturersInput, StudyProgramUncheckedCreateWithoutLecturersInput>
  }

  export type LecturerAvailabilityCreateWithoutLecturerInput = {
    id?: string
    dayOfWeek: string
    timeSlots: JsonNullValueInput | InputJsonValue
    isActive?: boolean
    createdAt?: Date | string
    semester: SemesterCreateNestedOneWithoutAvailabilitiesInput
  }

  export type LecturerAvailabilityUncheckedCreateWithoutLecturerInput = {
    id?: string
    semesterId: string
    dayOfWeek: string
    timeSlots: JsonNullValueInput | InputJsonValue
    isActive?: boolean
    createdAt?: Date | string
  }

  export type LecturerAvailabilityCreateOrConnectWithoutLecturerInput = {
    where: LecturerAvailabilityWhereUniqueInput
    create: XOR<LecturerAvailabilityCreateWithoutLecturerInput, LecturerAvailabilityUncheckedCreateWithoutLecturerInput>
  }

  export type LecturerAvailabilityCreateManyLecturerInputEnvelope = {
    data: LecturerAvailabilityCreateManyLecturerInput | LecturerAvailabilityCreateManyLecturerInput[]
    skipDuplicates?: boolean
  }

  export type ConsultationBookingCreateWithoutLecturerInput = {
    id?: string
    consultationType: $Enums.ConsultationType
    title: string
    category: string
    priority?: string
    description: string
    organization: string
    contactPerson: string
    phone: string
    email: string
    scheduledDate: Date | string
    scheduledDay: string
    startTime: string
    endTime: string
    status?: $Enums.ConsultationStatus
    feedback?: string | null
    rating?: number | null
    zoomLink?: string | null
    rescheduleNote?: string | null
    attachmentFileName?: string | null
    attachmentUrl?: string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutBookingsInput
    semester: SemesterCreateNestedOneWithoutBookingsInput
    session?: ConsultationSessionCreateNestedOneWithoutBookingsInput
  }

  export type ConsultationBookingUncheckedCreateWithoutLecturerInput = {
    id?: string
    userId: string
    semesterId: string
    sessionId?: string | null
    consultationType: $Enums.ConsultationType
    title: string
    category: string
    priority?: string
    description: string
    organization: string
    contactPerson: string
    phone: string
    email: string
    scheduledDate: Date | string
    scheduledDay: string
    startTime: string
    endTime: string
    status?: $Enums.ConsultationStatus
    feedback?: string | null
    rating?: number | null
    zoomLink?: string | null
    rescheduleNote?: string | null
    attachmentFileName?: string | null
    attachmentUrl?: string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ConsultationBookingCreateOrConnectWithoutLecturerInput = {
    where: ConsultationBookingWhereUniqueInput
    create: XOR<ConsultationBookingCreateWithoutLecturerInput, ConsultationBookingUncheckedCreateWithoutLecturerInput>
  }

  export type ConsultationBookingCreateManyLecturerInputEnvelope = {
    data: ConsultationBookingCreateManyLecturerInput | ConsultationBookingCreateManyLecturerInput[]
    skipDuplicates?: boolean
  }

  export type ConsultationSessionCreateWithoutLecturerInput = {
    id?: string
    scheduledDate: Date | string
    startTime: string
    endTime: string
    status?: string
    zoomLink?: string | null
    notes?: string | null
    confirmedAt?: Date | string | null
    confirmedBy?: string | null
    evaluationLink?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    bookings?: ConsultationBookingCreateNestedManyWithoutSessionInput
  }

  export type ConsultationSessionUncheckedCreateWithoutLecturerInput = {
    id?: string
    scheduledDate: Date | string
    startTime: string
    endTime: string
    status?: string
    zoomLink?: string | null
    notes?: string | null
    confirmedAt?: Date | string | null
    confirmedBy?: string | null
    evaluationLink?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    bookings?: ConsultationBookingUncheckedCreateNestedManyWithoutSessionInput
  }

  export type ConsultationSessionCreateOrConnectWithoutLecturerInput = {
    where: ConsultationSessionWhereUniqueInput
    create: XOR<ConsultationSessionCreateWithoutLecturerInput, ConsultationSessionUncheckedCreateWithoutLecturerInput>
  }

  export type ConsultationSessionCreateManyLecturerInputEnvelope = {
    data: ConsultationSessionCreateManyLecturerInput | ConsultationSessionCreateManyLecturerInput[]
    skipDuplicates?: boolean
  }

  export type SeminarCreateWithoutLecturerInput = {
    id?: string
    title: string
    description: string
    host: string
    eventDate: Date | string
    eventTime: string
    location: string
    zoomLink?: string | null
    posterUrl?: string | null
    status?: $Enums.SeminarStatus
    quota: number
    category?: $Enums.SeminarCategory
    targetAudience?: SeminarCreatetargetAudienceInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    creator: UserCreateNestedOneWithoutCreatedSeminarsInput
    registrations?: SeminarRegistrationCreateNestedManyWithoutSeminarInput
  }

  export type SeminarUncheckedCreateWithoutLecturerInput = {
    id?: string
    title: string
    description: string
    host: string
    eventDate: Date | string
    eventTime: string
    location: string
    zoomLink?: string | null
    posterUrl?: string | null
    status?: $Enums.SeminarStatus
    quota: number
    category?: $Enums.SeminarCategory
    targetAudience?: SeminarCreatetargetAudienceInput | string[]
    createdBy: string
    createdAt?: Date | string
    updatedAt?: Date | string
    registrations?: SeminarRegistrationUncheckedCreateNestedManyWithoutSeminarInput
  }

  export type SeminarCreateOrConnectWithoutLecturerInput = {
    where: SeminarWhereUniqueInput
    create: XOR<SeminarCreateWithoutLecturerInput, SeminarUncheckedCreateWithoutLecturerInput>
  }

  export type SeminarCreateManyLecturerInputEnvelope = {
    data: SeminarCreateManyLecturerInput | SeminarCreateManyLecturerInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutLecturerInput = {
    update: XOR<UserUpdateWithoutLecturerInput, UserUncheckedUpdateWithoutLecturerInput>
    create: XOR<UserCreateWithoutLecturerInput, UserUncheckedCreateWithoutLecturerInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutLecturerInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutLecturerInput, UserUncheckedUpdateWithoutLecturerInput>
  }

  export type UserUpdateWithoutLecturerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    avatar?: StringFieldUpdateOperationsInput | string
    profilePictureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    organization?: NullableStringFieldUpdateOperationsInput | string | null
    businessName?: NullableStringFieldUpdateOperationsInput | string | null
    businessCategory?: NullableStringFieldUpdateOperationsInput | string | null
    businessAddress?: NullableStringFieldUpdateOperationsInput | string | null
    nim?: NullableStringFieldUpdateOperationsInput | string | null
    semester?: NullableIntFieldUpdateOperationsInput | number | null
    schoolName?: NullableStringFieldUpdateOperationsInput | string | null
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    grade?: NullableStringFieldUpdateOperationsInput | string | null
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: ConsultationBookingUpdateManyWithoutUserNestedInput
    createdSeminars?: SeminarUpdateManyWithoutCreatorNestedInput
    seminarRegistrations?: SeminarRegistrationUpdateManyWithoutUserNestedInput
    activityLogs?: ActivityLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutLecturerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    avatar?: StringFieldUpdateOperationsInput | string
    profilePictureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    organization?: NullableStringFieldUpdateOperationsInput | string | null
    businessName?: NullableStringFieldUpdateOperationsInput | string | null
    businessCategory?: NullableStringFieldUpdateOperationsInput | string | null
    businessAddress?: NullableStringFieldUpdateOperationsInput | string | null
    nim?: NullableStringFieldUpdateOperationsInput | string | null
    semester?: NullableIntFieldUpdateOperationsInput | number | null
    schoolName?: NullableStringFieldUpdateOperationsInput | string | null
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    grade?: NullableStringFieldUpdateOperationsInput | string | null
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: ConsultationBookingUncheckedUpdateManyWithoutUserNestedInput
    createdSeminars?: SeminarUncheckedUpdateManyWithoutCreatorNestedInput
    seminarRegistrations?: SeminarRegistrationUncheckedUpdateManyWithoutUserNestedInput
    activityLogs?: ActivityLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type StudyProgramUpsertWithoutLecturersInput = {
    update: XOR<StudyProgramUpdateWithoutLecturersInput, StudyProgramUncheckedUpdateWithoutLecturersInput>
    create: XOR<StudyProgramCreateWithoutLecturersInput, StudyProgramUncheckedCreateWithoutLecturersInput>
    where?: StudyProgramWhereInput
  }

  export type StudyProgramUpdateToOneWithWhereWithoutLecturersInput = {
    where?: StudyProgramWhereInput
    data: XOR<StudyProgramUpdateWithoutLecturersInput, StudyProgramUncheckedUpdateWithoutLecturersInput>
  }

  export type StudyProgramUpdateWithoutLecturersInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    faculty?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    students?: StudentUpdateManyWithoutStudyProgramNestedInput
  }

  export type StudyProgramUncheckedUpdateWithoutLecturersInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    faculty?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    students?: StudentUncheckedUpdateManyWithoutStudyProgramNestedInput
  }

  export type LecturerAvailabilityUpsertWithWhereUniqueWithoutLecturerInput = {
    where: LecturerAvailabilityWhereUniqueInput
    update: XOR<LecturerAvailabilityUpdateWithoutLecturerInput, LecturerAvailabilityUncheckedUpdateWithoutLecturerInput>
    create: XOR<LecturerAvailabilityCreateWithoutLecturerInput, LecturerAvailabilityUncheckedCreateWithoutLecturerInput>
  }

  export type LecturerAvailabilityUpdateWithWhereUniqueWithoutLecturerInput = {
    where: LecturerAvailabilityWhereUniqueInput
    data: XOR<LecturerAvailabilityUpdateWithoutLecturerInput, LecturerAvailabilityUncheckedUpdateWithoutLecturerInput>
  }

  export type LecturerAvailabilityUpdateManyWithWhereWithoutLecturerInput = {
    where: LecturerAvailabilityScalarWhereInput
    data: XOR<LecturerAvailabilityUpdateManyMutationInput, LecturerAvailabilityUncheckedUpdateManyWithoutLecturerInput>
  }

  export type LecturerAvailabilityScalarWhereInput = {
    AND?: LecturerAvailabilityScalarWhereInput | LecturerAvailabilityScalarWhereInput[]
    OR?: LecturerAvailabilityScalarWhereInput[]
    NOT?: LecturerAvailabilityScalarWhereInput | LecturerAvailabilityScalarWhereInput[]
    id?: UuidFilter<"LecturerAvailability"> | string
    lecturerId?: UuidFilter<"LecturerAvailability"> | string
    semesterId?: UuidFilter<"LecturerAvailability"> | string
    dayOfWeek?: StringFilter<"LecturerAvailability"> | string
    timeSlots?: JsonFilter<"LecturerAvailability">
    isActive?: BoolFilter<"LecturerAvailability"> | boolean
    createdAt?: DateTimeFilter<"LecturerAvailability"> | Date | string
  }

  export type ConsultationBookingUpsertWithWhereUniqueWithoutLecturerInput = {
    where: ConsultationBookingWhereUniqueInput
    update: XOR<ConsultationBookingUpdateWithoutLecturerInput, ConsultationBookingUncheckedUpdateWithoutLecturerInput>
    create: XOR<ConsultationBookingCreateWithoutLecturerInput, ConsultationBookingUncheckedCreateWithoutLecturerInput>
  }

  export type ConsultationBookingUpdateWithWhereUniqueWithoutLecturerInput = {
    where: ConsultationBookingWhereUniqueInput
    data: XOR<ConsultationBookingUpdateWithoutLecturerInput, ConsultationBookingUncheckedUpdateWithoutLecturerInput>
  }

  export type ConsultationBookingUpdateManyWithWhereWithoutLecturerInput = {
    where: ConsultationBookingScalarWhereInput
    data: XOR<ConsultationBookingUpdateManyMutationInput, ConsultationBookingUncheckedUpdateManyWithoutLecturerInput>
  }

  export type ConsultationSessionUpsertWithWhereUniqueWithoutLecturerInput = {
    where: ConsultationSessionWhereUniqueInput
    update: XOR<ConsultationSessionUpdateWithoutLecturerInput, ConsultationSessionUncheckedUpdateWithoutLecturerInput>
    create: XOR<ConsultationSessionCreateWithoutLecturerInput, ConsultationSessionUncheckedCreateWithoutLecturerInput>
  }

  export type ConsultationSessionUpdateWithWhereUniqueWithoutLecturerInput = {
    where: ConsultationSessionWhereUniqueInput
    data: XOR<ConsultationSessionUpdateWithoutLecturerInput, ConsultationSessionUncheckedUpdateWithoutLecturerInput>
  }

  export type ConsultationSessionUpdateManyWithWhereWithoutLecturerInput = {
    where: ConsultationSessionScalarWhereInput
    data: XOR<ConsultationSessionUpdateManyMutationInput, ConsultationSessionUncheckedUpdateManyWithoutLecturerInput>
  }

  export type ConsultationSessionScalarWhereInput = {
    AND?: ConsultationSessionScalarWhereInput | ConsultationSessionScalarWhereInput[]
    OR?: ConsultationSessionScalarWhereInput[]
    NOT?: ConsultationSessionScalarWhereInput | ConsultationSessionScalarWhereInput[]
    id?: UuidFilter<"ConsultationSession"> | string
    lecturerId?: UuidFilter<"ConsultationSession"> | string
    scheduledDate?: DateTimeFilter<"ConsultationSession"> | Date | string
    startTime?: StringFilter<"ConsultationSession"> | string
    endTime?: StringFilter<"ConsultationSession"> | string
    status?: StringFilter<"ConsultationSession"> | string
    zoomLink?: StringNullableFilter<"ConsultationSession"> | string | null
    notes?: StringNullableFilter<"ConsultationSession"> | string | null
    confirmedAt?: DateTimeNullableFilter<"ConsultationSession"> | Date | string | null
    confirmedBy?: UuidNullableFilter<"ConsultationSession"> | string | null
    evaluationLink?: StringNullableFilter<"ConsultationSession"> | string | null
    createdAt?: DateTimeFilter<"ConsultationSession"> | Date | string
    updatedAt?: DateTimeFilter<"ConsultationSession"> | Date | string
  }

  export type SeminarUpsertWithWhereUniqueWithoutLecturerInput = {
    where: SeminarWhereUniqueInput
    update: XOR<SeminarUpdateWithoutLecturerInput, SeminarUncheckedUpdateWithoutLecturerInput>
    create: XOR<SeminarCreateWithoutLecturerInput, SeminarUncheckedCreateWithoutLecturerInput>
  }

  export type SeminarUpdateWithWhereUniqueWithoutLecturerInput = {
    where: SeminarWhereUniqueInput
    data: XOR<SeminarUpdateWithoutLecturerInput, SeminarUncheckedUpdateWithoutLecturerInput>
  }

  export type SeminarUpdateManyWithWhereWithoutLecturerInput = {
    where: SeminarScalarWhereInput
    data: XOR<SeminarUpdateManyMutationInput, SeminarUncheckedUpdateManyWithoutLecturerInput>
  }

  export type StudyProgramCreateWithoutStudentsInput = {
    id?: string
    code: string
    name: string
    faculty: string
    createdAt?: Date | string
    lecturers?: LecturerCreateNestedManyWithoutStudyProgramInput
  }

  export type StudyProgramUncheckedCreateWithoutStudentsInput = {
    id?: string
    code: string
    name: string
    faculty: string
    createdAt?: Date | string
    lecturers?: LecturerUncheckedCreateNestedManyWithoutStudyProgramInput
  }

  export type StudyProgramCreateOrConnectWithoutStudentsInput = {
    where: StudyProgramWhereUniqueInput
    create: XOR<StudyProgramCreateWithoutStudentsInput, StudyProgramUncheckedCreateWithoutStudentsInput>
  }

  export type StudyProgramUpsertWithoutStudentsInput = {
    update: XOR<StudyProgramUpdateWithoutStudentsInput, StudyProgramUncheckedUpdateWithoutStudentsInput>
    create: XOR<StudyProgramCreateWithoutStudentsInput, StudyProgramUncheckedCreateWithoutStudentsInput>
    where?: StudyProgramWhereInput
  }

  export type StudyProgramUpdateToOneWithWhereWithoutStudentsInput = {
    where?: StudyProgramWhereInput
    data: XOR<StudyProgramUpdateWithoutStudentsInput, StudyProgramUncheckedUpdateWithoutStudentsInput>
  }

  export type StudyProgramUpdateWithoutStudentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    faculty?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lecturers?: LecturerUpdateManyWithoutStudyProgramNestedInput
  }

  export type StudyProgramUncheckedUpdateWithoutStudentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    faculty?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lecturers?: LecturerUncheckedUpdateManyWithoutStudyProgramNestedInput
  }

  export type LecturerAvailabilityCreateWithoutSemesterInput = {
    id?: string
    dayOfWeek: string
    timeSlots: JsonNullValueInput | InputJsonValue
    isActive?: boolean
    createdAt?: Date | string
    lecturer: LecturerCreateNestedOneWithoutAvailabilitiesInput
  }

  export type LecturerAvailabilityUncheckedCreateWithoutSemesterInput = {
    id?: string
    lecturerId: string
    dayOfWeek: string
    timeSlots: JsonNullValueInput | InputJsonValue
    isActive?: boolean
    createdAt?: Date | string
  }

  export type LecturerAvailabilityCreateOrConnectWithoutSemesterInput = {
    where: LecturerAvailabilityWhereUniqueInput
    create: XOR<LecturerAvailabilityCreateWithoutSemesterInput, LecturerAvailabilityUncheckedCreateWithoutSemesterInput>
  }

  export type LecturerAvailabilityCreateManySemesterInputEnvelope = {
    data: LecturerAvailabilityCreateManySemesterInput | LecturerAvailabilityCreateManySemesterInput[]
    skipDuplicates?: boolean
  }

  export type ConsultationBookingCreateWithoutSemesterInput = {
    id?: string
    consultationType: $Enums.ConsultationType
    title: string
    category: string
    priority?: string
    description: string
    organization: string
    contactPerson: string
    phone: string
    email: string
    scheduledDate: Date | string
    scheduledDay: string
    startTime: string
    endTime: string
    status?: $Enums.ConsultationStatus
    feedback?: string | null
    rating?: number | null
    zoomLink?: string | null
    rescheduleNote?: string | null
    attachmentFileName?: string | null
    attachmentUrl?: string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutBookingsInput
    lecturer: LecturerCreateNestedOneWithoutBookingsInput
    session?: ConsultationSessionCreateNestedOneWithoutBookingsInput
  }

  export type ConsultationBookingUncheckedCreateWithoutSemesterInput = {
    id?: string
    userId: string
    lecturerId: string
    sessionId?: string | null
    consultationType: $Enums.ConsultationType
    title: string
    category: string
    priority?: string
    description: string
    organization: string
    contactPerson: string
    phone: string
    email: string
    scheduledDate: Date | string
    scheduledDay: string
    startTime: string
    endTime: string
    status?: $Enums.ConsultationStatus
    feedback?: string | null
    rating?: number | null
    zoomLink?: string | null
    rescheduleNote?: string | null
    attachmentFileName?: string | null
    attachmentUrl?: string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ConsultationBookingCreateOrConnectWithoutSemesterInput = {
    where: ConsultationBookingWhereUniqueInput
    create: XOR<ConsultationBookingCreateWithoutSemesterInput, ConsultationBookingUncheckedCreateWithoutSemesterInput>
  }

  export type ConsultationBookingCreateManySemesterInputEnvelope = {
    data: ConsultationBookingCreateManySemesterInput | ConsultationBookingCreateManySemesterInput[]
    skipDuplicates?: boolean
  }

  export type LecturerAvailabilityUpsertWithWhereUniqueWithoutSemesterInput = {
    where: LecturerAvailabilityWhereUniqueInput
    update: XOR<LecturerAvailabilityUpdateWithoutSemesterInput, LecturerAvailabilityUncheckedUpdateWithoutSemesterInput>
    create: XOR<LecturerAvailabilityCreateWithoutSemesterInput, LecturerAvailabilityUncheckedCreateWithoutSemesterInput>
  }

  export type LecturerAvailabilityUpdateWithWhereUniqueWithoutSemesterInput = {
    where: LecturerAvailabilityWhereUniqueInput
    data: XOR<LecturerAvailabilityUpdateWithoutSemesterInput, LecturerAvailabilityUncheckedUpdateWithoutSemesterInput>
  }

  export type LecturerAvailabilityUpdateManyWithWhereWithoutSemesterInput = {
    where: LecturerAvailabilityScalarWhereInput
    data: XOR<LecturerAvailabilityUpdateManyMutationInput, LecturerAvailabilityUncheckedUpdateManyWithoutSemesterInput>
  }

  export type ConsultationBookingUpsertWithWhereUniqueWithoutSemesterInput = {
    where: ConsultationBookingWhereUniqueInput
    update: XOR<ConsultationBookingUpdateWithoutSemesterInput, ConsultationBookingUncheckedUpdateWithoutSemesterInput>
    create: XOR<ConsultationBookingCreateWithoutSemesterInput, ConsultationBookingUncheckedCreateWithoutSemesterInput>
  }

  export type ConsultationBookingUpdateWithWhereUniqueWithoutSemesterInput = {
    where: ConsultationBookingWhereUniqueInput
    data: XOR<ConsultationBookingUpdateWithoutSemesterInput, ConsultationBookingUncheckedUpdateWithoutSemesterInput>
  }

  export type ConsultationBookingUpdateManyWithWhereWithoutSemesterInput = {
    where: ConsultationBookingScalarWhereInput
    data: XOR<ConsultationBookingUpdateManyMutationInput, ConsultationBookingUncheckedUpdateManyWithoutSemesterInput>
  }

  export type LecturerCreateWithoutAvailabilitiesInput = {
    id?: string
    lecturerCode: string
    name: string
    email: string
    photo?: string
    specialization: string
    university?: string
    rating?: number
    experience?: string
    expertise?: LecturerCreateexpertiseInput | string[]
    phone?: string
    bio?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: UserCreateNestedOneWithoutLecturerInput
    studyProgram?: StudyProgramCreateNestedOneWithoutLecturersInput
    bookings?: ConsultationBookingCreateNestedManyWithoutLecturerInput
    sessions?: ConsultationSessionCreateNestedManyWithoutLecturerInput
    seminars?: SeminarCreateNestedManyWithoutLecturerInput
  }

  export type LecturerUncheckedCreateWithoutAvailabilitiesInput = {
    id?: string
    lecturerCode: string
    userId?: string | null
    studyProgramId?: string | null
    name: string
    email: string
    photo?: string
    specialization: string
    university?: string
    rating?: number
    experience?: string
    expertise?: LecturerCreateexpertiseInput | string[]
    phone?: string
    bio?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    bookings?: ConsultationBookingUncheckedCreateNestedManyWithoutLecturerInput
    sessions?: ConsultationSessionUncheckedCreateNestedManyWithoutLecturerInput
    seminars?: SeminarUncheckedCreateNestedManyWithoutLecturerInput
  }

  export type LecturerCreateOrConnectWithoutAvailabilitiesInput = {
    where: LecturerWhereUniqueInput
    create: XOR<LecturerCreateWithoutAvailabilitiesInput, LecturerUncheckedCreateWithoutAvailabilitiesInput>
  }

  export type SemesterCreateWithoutAvailabilitiesInput = {
    id?: string
    name: string
    startDate: Date | string
    endDate: Date | string
    isActive?: boolean
    createdAt?: Date | string
    bookings?: ConsultationBookingCreateNestedManyWithoutSemesterInput
  }

  export type SemesterUncheckedCreateWithoutAvailabilitiesInput = {
    id?: string
    name: string
    startDate: Date | string
    endDate: Date | string
    isActive?: boolean
    createdAt?: Date | string
    bookings?: ConsultationBookingUncheckedCreateNestedManyWithoutSemesterInput
  }

  export type SemesterCreateOrConnectWithoutAvailabilitiesInput = {
    where: SemesterWhereUniqueInput
    create: XOR<SemesterCreateWithoutAvailabilitiesInput, SemesterUncheckedCreateWithoutAvailabilitiesInput>
  }

  export type LecturerUpsertWithoutAvailabilitiesInput = {
    update: XOR<LecturerUpdateWithoutAvailabilitiesInput, LecturerUncheckedUpdateWithoutAvailabilitiesInput>
    create: XOR<LecturerCreateWithoutAvailabilitiesInput, LecturerUncheckedCreateWithoutAvailabilitiesInput>
    where?: LecturerWhereInput
  }

  export type LecturerUpdateToOneWithWhereWithoutAvailabilitiesInput = {
    where?: LecturerWhereInput
    data: XOR<LecturerUpdateWithoutAvailabilitiesInput, LecturerUncheckedUpdateWithoutAvailabilitiesInput>
  }

  export type LecturerUpdateWithoutAvailabilitiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    lecturerCode?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    photo?: StringFieldUpdateOperationsInput | string
    specialization?: StringFieldUpdateOperationsInput | string
    university?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    experience?: StringFieldUpdateOperationsInput | string
    expertise?: LecturerUpdateexpertiseInput | string[]
    phone?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutLecturerNestedInput
    studyProgram?: StudyProgramUpdateOneWithoutLecturersNestedInput
    bookings?: ConsultationBookingUpdateManyWithoutLecturerNestedInput
    sessions?: ConsultationSessionUpdateManyWithoutLecturerNestedInput
    seminars?: SeminarUpdateManyWithoutLecturerNestedInput
  }

  export type LecturerUncheckedUpdateWithoutAvailabilitiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    lecturerCode?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    studyProgramId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    photo?: StringFieldUpdateOperationsInput | string
    specialization?: StringFieldUpdateOperationsInput | string
    university?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    experience?: StringFieldUpdateOperationsInput | string
    expertise?: LecturerUpdateexpertiseInput | string[]
    phone?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: ConsultationBookingUncheckedUpdateManyWithoutLecturerNestedInput
    sessions?: ConsultationSessionUncheckedUpdateManyWithoutLecturerNestedInput
    seminars?: SeminarUncheckedUpdateManyWithoutLecturerNestedInput
  }

  export type SemesterUpsertWithoutAvailabilitiesInput = {
    update: XOR<SemesterUpdateWithoutAvailabilitiesInput, SemesterUncheckedUpdateWithoutAvailabilitiesInput>
    create: XOR<SemesterCreateWithoutAvailabilitiesInput, SemesterUncheckedCreateWithoutAvailabilitiesInput>
    where?: SemesterWhereInput
  }

  export type SemesterUpdateToOneWithWhereWithoutAvailabilitiesInput = {
    where?: SemesterWhereInput
    data: XOR<SemesterUpdateWithoutAvailabilitiesInput, SemesterUncheckedUpdateWithoutAvailabilitiesInput>
  }

  export type SemesterUpdateWithoutAvailabilitiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: ConsultationBookingUpdateManyWithoutSemesterNestedInput
  }

  export type SemesterUncheckedUpdateWithoutAvailabilitiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: ConsultationBookingUncheckedUpdateManyWithoutSemesterNestedInput
  }

  export type UserCreateWithoutBookingsInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    role: $Enums.UserRole
    avatar?: string
    profilePictureUrl?: string | null
    phone?: string | null
    status?: string
    organization?: string | null
    businessName?: string | null
    businessCategory?: string | null
    businessAddress?: string | null
    nim?: string | null
    semester?: number | null
    schoolName?: string | null
    subject?: string | null
    grade?: string | null
    lastLogin?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    lecturer?: LecturerCreateNestedOneWithoutUserInput
    createdSeminars?: SeminarCreateNestedManyWithoutCreatorInput
    seminarRegistrations?: SeminarRegistrationCreateNestedManyWithoutUserInput
    activityLogs?: ActivityLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutBookingsInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    role: $Enums.UserRole
    avatar?: string
    profilePictureUrl?: string | null
    phone?: string | null
    status?: string
    organization?: string | null
    businessName?: string | null
    businessCategory?: string | null
    businessAddress?: string | null
    nim?: string | null
    semester?: number | null
    schoolName?: string | null
    subject?: string | null
    grade?: string | null
    lastLogin?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    lecturer?: LecturerUncheckedCreateNestedOneWithoutUserInput
    createdSeminars?: SeminarUncheckedCreateNestedManyWithoutCreatorInput
    seminarRegistrations?: SeminarRegistrationUncheckedCreateNestedManyWithoutUserInput
    activityLogs?: ActivityLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutBookingsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBookingsInput, UserUncheckedCreateWithoutBookingsInput>
  }

  export type LecturerCreateWithoutBookingsInput = {
    id?: string
    lecturerCode: string
    name: string
    email: string
    photo?: string
    specialization: string
    university?: string
    rating?: number
    experience?: string
    expertise?: LecturerCreateexpertiseInput | string[]
    phone?: string
    bio?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: UserCreateNestedOneWithoutLecturerInput
    studyProgram?: StudyProgramCreateNestedOneWithoutLecturersInput
    availabilities?: LecturerAvailabilityCreateNestedManyWithoutLecturerInput
    sessions?: ConsultationSessionCreateNestedManyWithoutLecturerInput
    seminars?: SeminarCreateNestedManyWithoutLecturerInput
  }

  export type LecturerUncheckedCreateWithoutBookingsInput = {
    id?: string
    lecturerCode: string
    userId?: string | null
    studyProgramId?: string | null
    name: string
    email: string
    photo?: string
    specialization: string
    university?: string
    rating?: number
    experience?: string
    expertise?: LecturerCreateexpertiseInput | string[]
    phone?: string
    bio?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    availabilities?: LecturerAvailabilityUncheckedCreateNestedManyWithoutLecturerInput
    sessions?: ConsultationSessionUncheckedCreateNestedManyWithoutLecturerInput
    seminars?: SeminarUncheckedCreateNestedManyWithoutLecturerInput
  }

  export type LecturerCreateOrConnectWithoutBookingsInput = {
    where: LecturerWhereUniqueInput
    create: XOR<LecturerCreateWithoutBookingsInput, LecturerUncheckedCreateWithoutBookingsInput>
  }

  export type SemesterCreateWithoutBookingsInput = {
    id?: string
    name: string
    startDate: Date | string
    endDate: Date | string
    isActive?: boolean
    createdAt?: Date | string
    availabilities?: LecturerAvailabilityCreateNestedManyWithoutSemesterInput
  }

  export type SemesterUncheckedCreateWithoutBookingsInput = {
    id?: string
    name: string
    startDate: Date | string
    endDate: Date | string
    isActive?: boolean
    createdAt?: Date | string
    availabilities?: LecturerAvailabilityUncheckedCreateNestedManyWithoutSemesterInput
  }

  export type SemesterCreateOrConnectWithoutBookingsInput = {
    where: SemesterWhereUniqueInput
    create: XOR<SemesterCreateWithoutBookingsInput, SemesterUncheckedCreateWithoutBookingsInput>
  }

  export type ConsultationSessionCreateWithoutBookingsInput = {
    id?: string
    scheduledDate: Date | string
    startTime: string
    endTime: string
    status?: string
    zoomLink?: string | null
    notes?: string | null
    confirmedAt?: Date | string | null
    confirmedBy?: string | null
    evaluationLink?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    lecturer: LecturerCreateNestedOneWithoutSessionsInput
  }

  export type ConsultationSessionUncheckedCreateWithoutBookingsInput = {
    id?: string
    lecturerId: string
    scheduledDate: Date | string
    startTime: string
    endTime: string
    status?: string
    zoomLink?: string | null
    notes?: string | null
    confirmedAt?: Date | string | null
    confirmedBy?: string | null
    evaluationLink?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ConsultationSessionCreateOrConnectWithoutBookingsInput = {
    where: ConsultationSessionWhereUniqueInput
    create: XOR<ConsultationSessionCreateWithoutBookingsInput, ConsultationSessionUncheckedCreateWithoutBookingsInput>
  }

  export type UserUpsertWithoutBookingsInput = {
    update: XOR<UserUpdateWithoutBookingsInput, UserUncheckedUpdateWithoutBookingsInput>
    create: XOR<UserCreateWithoutBookingsInput, UserUncheckedCreateWithoutBookingsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBookingsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBookingsInput, UserUncheckedUpdateWithoutBookingsInput>
  }

  export type UserUpdateWithoutBookingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    avatar?: StringFieldUpdateOperationsInput | string
    profilePictureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    organization?: NullableStringFieldUpdateOperationsInput | string | null
    businessName?: NullableStringFieldUpdateOperationsInput | string | null
    businessCategory?: NullableStringFieldUpdateOperationsInput | string | null
    businessAddress?: NullableStringFieldUpdateOperationsInput | string | null
    nim?: NullableStringFieldUpdateOperationsInput | string | null
    semester?: NullableIntFieldUpdateOperationsInput | number | null
    schoolName?: NullableStringFieldUpdateOperationsInput | string | null
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    grade?: NullableStringFieldUpdateOperationsInput | string | null
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lecturer?: LecturerUpdateOneWithoutUserNestedInput
    createdSeminars?: SeminarUpdateManyWithoutCreatorNestedInput
    seminarRegistrations?: SeminarRegistrationUpdateManyWithoutUserNestedInput
    activityLogs?: ActivityLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutBookingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    avatar?: StringFieldUpdateOperationsInput | string
    profilePictureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    organization?: NullableStringFieldUpdateOperationsInput | string | null
    businessName?: NullableStringFieldUpdateOperationsInput | string | null
    businessCategory?: NullableStringFieldUpdateOperationsInput | string | null
    businessAddress?: NullableStringFieldUpdateOperationsInput | string | null
    nim?: NullableStringFieldUpdateOperationsInput | string | null
    semester?: NullableIntFieldUpdateOperationsInput | number | null
    schoolName?: NullableStringFieldUpdateOperationsInput | string | null
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    grade?: NullableStringFieldUpdateOperationsInput | string | null
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lecturer?: LecturerUncheckedUpdateOneWithoutUserNestedInput
    createdSeminars?: SeminarUncheckedUpdateManyWithoutCreatorNestedInput
    seminarRegistrations?: SeminarRegistrationUncheckedUpdateManyWithoutUserNestedInput
    activityLogs?: ActivityLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type LecturerUpsertWithoutBookingsInput = {
    update: XOR<LecturerUpdateWithoutBookingsInput, LecturerUncheckedUpdateWithoutBookingsInput>
    create: XOR<LecturerCreateWithoutBookingsInput, LecturerUncheckedCreateWithoutBookingsInput>
    where?: LecturerWhereInput
  }

  export type LecturerUpdateToOneWithWhereWithoutBookingsInput = {
    where?: LecturerWhereInput
    data: XOR<LecturerUpdateWithoutBookingsInput, LecturerUncheckedUpdateWithoutBookingsInput>
  }

  export type LecturerUpdateWithoutBookingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    lecturerCode?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    photo?: StringFieldUpdateOperationsInput | string
    specialization?: StringFieldUpdateOperationsInput | string
    university?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    experience?: StringFieldUpdateOperationsInput | string
    expertise?: LecturerUpdateexpertiseInput | string[]
    phone?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutLecturerNestedInput
    studyProgram?: StudyProgramUpdateOneWithoutLecturersNestedInput
    availabilities?: LecturerAvailabilityUpdateManyWithoutLecturerNestedInput
    sessions?: ConsultationSessionUpdateManyWithoutLecturerNestedInput
    seminars?: SeminarUpdateManyWithoutLecturerNestedInput
  }

  export type LecturerUncheckedUpdateWithoutBookingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    lecturerCode?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    studyProgramId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    photo?: StringFieldUpdateOperationsInput | string
    specialization?: StringFieldUpdateOperationsInput | string
    university?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    experience?: StringFieldUpdateOperationsInput | string
    expertise?: LecturerUpdateexpertiseInput | string[]
    phone?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    availabilities?: LecturerAvailabilityUncheckedUpdateManyWithoutLecturerNestedInput
    sessions?: ConsultationSessionUncheckedUpdateManyWithoutLecturerNestedInput
    seminars?: SeminarUncheckedUpdateManyWithoutLecturerNestedInput
  }

  export type SemesterUpsertWithoutBookingsInput = {
    update: XOR<SemesterUpdateWithoutBookingsInput, SemesterUncheckedUpdateWithoutBookingsInput>
    create: XOR<SemesterCreateWithoutBookingsInput, SemesterUncheckedCreateWithoutBookingsInput>
    where?: SemesterWhereInput
  }

  export type SemesterUpdateToOneWithWhereWithoutBookingsInput = {
    where?: SemesterWhereInput
    data: XOR<SemesterUpdateWithoutBookingsInput, SemesterUncheckedUpdateWithoutBookingsInput>
  }

  export type SemesterUpdateWithoutBookingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    availabilities?: LecturerAvailabilityUpdateManyWithoutSemesterNestedInput
  }

  export type SemesterUncheckedUpdateWithoutBookingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    availabilities?: LecturerAvailabilityUncheckedUpdateManyWithoutSemesterNestedInput
  }

  export type ConsultationSessionUpsertWithoutBookingsInput = {
    update: XOR<ConsultationSessionUpdateWithoutBookingsInput, ConsultationSessionUncheckedUpdateWithoutBookingsInput>
    create: XOR<ConsultationSessionCreateWithoutBookingsInput, ConsultationSessionUncheckedCreateWithoutBookingsInput>
    where?: ConsultationSessionWhereInput
  }

  export type ConsultationSessionUpdateToOneWithWhereWithoutBookingsInput = {
    where?: ConsultationSessionWhereInput
    data: XOR<ConsultationSessionUpdateWithoutBookingsInput, ConsultationSessionUncheckedUpdateWithoutBookingsInput>
  }

  export type ConsultationSessionUpdateWithoutBookingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    scheduledDate?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    zoomLink?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    confirmedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    confirmedBy?: NullableStringFieldUpdateOperationsInput | string | null
    evaluationLink?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lecturer?: LecturerUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type ConsultationSessionUncheckedUpdateWithoutBookingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    lecturerId?: StringFieldUpdateOperationsInput | string
    scheduledDate?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    zoomLink?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    confirmedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    confirmedBy?: NullableStringFieldUpdateOperationsInput | string | null
    evaluationLink?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LecturerCreateWithoutSessionsInput = {
    id?: string
    lecturerCode: string
    name: string
    email: string
    photo?: string
    specialization: string
    university?: string
    rating?: number
    experience?: string
    expertise?: LecturerCreateexpertiseInput | string[]
    phone?: string
    bio?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: UserCreateNestedOneWithoutLecturerInput
    studyProgram?: StudyProgramCreateNestedOneWithoutLecturersInput
    availabilities?: LecturerAvailabilityCreateNestedManyWithoutLecturerInput
    bookings?: ConsultationBookingCreateNestedManyWithoutLecturerInput
    seminars?: SeminarCreateNestedManyWithoutLecturerInput
  }

  export type LecturerUncheckedCreateWithoutSessionsInput = {
    id?: string
    lecturerCode: string
    userId?: string | null
    studyProgramId?: string | null
    name: string
    email: string
    photo?: string
    specialization: string
    university?: string
    rating?: number
    experience?: string
    expertise?: LecturerCreateexpertiseInput | string[]
    phone?: string
    bio?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    availabilities?: LecturerAvailabilityUncheckedCreateNestedManyWithoutLecturerInput
    bookings?: ConsultationBookingUncheckedCreateNestedManyWithoutLecturerInput
    seminars?: SeminarUncheckedCreateNestedManyWithoutLecturerInput
  }

  export type LecturerCreateOrConnectWithoutSessionsInput = {
    where: LecturerWhereUniqueInput
    create: XOR<LecturerCreateWithoutSessionsInput, LecturerUncheckedCreateWithoutSessionsInput>
  }

  export type ConsultationBookingCreateWithoutSessionInput = {
    id?: string
    consultationType: $Enums.ConsultationType
    title: string
    category: string
    priority?: string
    description: string
    organization: string
    contactPerson: string
    phone: string
    email: string
    scheduledDate: Date | string
    scheduledDay: string
    startTime: string
    endTime: string
    status?: $Enums.ConsultationStatus
    feedback?: string | null
    rating?: number | null
    zoomLink?: string | null
    rescheduleNote?: string | null
    attachmentFileName?: string | null
    attachmentUrl?: string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutBookingsInput
    lecturer: LecturerCreateNestedOneWithoutBookingsInput
    semester: SemesterCreateNestedOneWithoutBookingsInput
  }

  export type ConsultationBookingUncheckedCreateWithoutSessionInput = {
    id?: string
    userId: string
    lecturerId: string
    semesterId: string
    consultationType: $Enums.ConsultationType
    title: string
    category: string
    priority?: string
    description: string
    organization: string
    contactPerson: string
    phone: string
    email: string
    scheduledDate: Date | string
    scheduledDay: string
    startTime: string
    endTime: string
    status?: $Enums.ConsultationStatus
    feedback?: string | null
    rating?: number | null
    zoomLink?: string | null
    rescheduleNote?: string | null
    attachmentFileName?: string | null
    attachmentUrl?: string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ConsultationBookingCreateOrConnectWithoutSessionInput = {
    where: ConsultationBookingWhereUniqueInput
    create: XOR<ConsultationBookingCreateWithoutSessionInput, ConsultationBookingUncheckedCreateWithoutSessionInput>
  }

  export type ConsultationBookingCreateManySessionInputEnvelope = {
    data: ConsultationBookingCreateManySessionInput | ConsultationBookingCreateManySessionInput[]
    skipDuplicates?: boolean
  }

  export type LecturerUpsertWithoutSessionsInput = {
    update: XOR<LecturerUpdateWithoutSessionsInput, LecturerUncheckedUpdateWithoutSessionsInput>
    create: XOR<LecturerCreateWithoutSessionsInput, LecturerUncheckedCreateWithoutSessionsInput>
    where?: LecturerWhereInput
  }

  export type LecturerUpdateToOneWithWhereWithoutSessionsInput = {
    where?: LecturerWhereInput
    data: XOR<LecturerUpdateWithoutSessionsInput, LecturerUncheckedUpdateWithoutSessionsInput>
  }

  export type LecturerUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    lecturerCode?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    photo?: StringFieldUpdateOperationsInput | string
    specialization?: StringFieldUpdateOperationsInput | string
    university?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    experience?: StringFieldUpdateOperationsInput | string
    expertise?: LecturerUpdateexpertiseInput | string[]
    phone?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutLecturerNestedInput
    studyProgram?: StudyProgramUpdateOneWithoutLecturersNestedInput
    availabilities?: LecturerAvailabilityUpdateManyWithoutLecturerNestedInput
    bookings?: ConsultationBookingUpdateManyWithoutLecturerNestedInput
    seminars?: SeminarUpdateManyWithoutLecturerNestedInput
  }

  export type LecturerUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    lecturerCode?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    studyProgramId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    photo?: StringFieldUpdateOperationsInput | string
    specialization?: StringFieldUpdateOperationsInput | string
    university?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    experience?: StringFieldUpdateOperationsInput | string
    expertise?: LecturerUpdateexpertiseInput | string[]
    phone?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    availabilities?: LecturerAvailabilityUncheckedUpdateManyWithoutLecturerNestedInput
    bookings?: ConsultationBookingUncheckedUpdateManyWithoutLecturerNestedInput
    seminars?: SeminarUncheckedUpdateManyWithoutLecturerNestedInput
  }

  export type ConsultationBookingUpsertWithWhereUniqueWithoutSessionInput = {
    where: ConsultationBookingWhereUniqueInput
    update: XOR<ConsultationBookingUpdateWithoutSessionInput, ConsultationBookingUncheckedUpdateWithoutSessionInput>
    create: XOR<ConsultationBookingCreateWithoutSessionInput, ConsultationBookingUncheckedCreateWithoutSessionInput>
  }

  export type ConsultationBookingUpdateWithWhereUniqueWithoutSessionInput = {
    where: ConsultationBookingWhereUniqueInput
    data: XOR<ConsultationBookingUpdateWithoutSessionInput, ConsultationBookingUncheckedUpdateWithoutSessionInput>
  }

  export type ConsultationBookingUpdateManyWithWhereWithoutSessionInput = {
    where: ConsultationBookingScalarWhereInput
    data: XOR<ConsultationBookingUpdateManyMutationInput, ConsultationBookingUncheckedUpdateManyWithoutSessionInput>
  }

  export type UserCreateWithoutCreatedSeminarsInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    role: $Enums.UserRole
    avatar?: string
    profilePictureUrl?: string | null
    phone?: string | null
    status?: string
    organization?: string | null
    businessName?: string | null
    businessCategory?: string | null
    businessAddress?: string | null
    nim?: string | null
    semester?: number | null
    schoolName?: string | null
    subject?: string | null
    grade?: string | null
    lastLogin?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    lecturer?: LecturerCreateNestedOneWithoutUserInput
    bookings?: ConsultationBookingCreateNestedManyWithoutUserInput
    seminarRegistrations?: SeminarRegistrationCreateNestedManyWithoutUserInput
    activityLogs?: ActivityLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCreatedSeminarsInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    role: $Enums.UserRole
    avatar?: string
    profilePictureUrl?: string | null
    phone?: string | null
    status?: string
    organization?: string | null
    businessName?: string | null
    businessCategory?: string | null
    businessAddress?: string | null
    nim?: string | null
    semester?: number | null
    schoolName?: string | null
    subject?: string | null
    grade?: string | null
    lastLogin?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    lecturer?: LecturerUncheckedCreateNestedOneWithoutUserInput
    bookings?: ConsultationBookingUncheckedCreateNestedManyWithoutUserInput
    seminarRegistrations?: SeminarRegistrationUncheckedCreateNestedManyWithoutUserInput
    activityLogs?: ActivityLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCreatedSeminarsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCreatedSeminarsInput, UserUncheckedCreateWithoutCreatedSeminarsInput>
  }

  export type LecturerCreateWithoutSeminarsInput = {
    id?: string
    lecturerCode: string
    name: string
    email: string
    photo?: string
    specialization: string
    university?: string
    rating?: number
    experience?: string
    expertise?: LecturerCreateexpertiseInput | string[]
    phone?: string
    bio?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: UserCreateNestedOneWithoutLecturerInput
    studyProgram?: StudyProgramCreateNestedOneWithoutLecturersInput
    availabilities?: LecturerAvailabilityCreateNestedManyWithoutLecturerInput
    bookings?: ConsultationBookingCreateNestedManyWithoutLecturerInput
    sessions?: ConsultationSessionCreateNestedManyWithoutLecturerInput
  }

  export type LecturerUncheckedCreateWithoutSeminarsInput = {
    id?: string
    lecturerCode: string
    userId?: string | null
    studyProgramId?: string | null
    name: string
    email: string
    photo?: string
    specialization: string
    university?: string
    rating?: number
    experience?: string
    expertise?: LecturerCreateexpertiseInput | string[]
    phone?: string
    bio?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    availabilities?: LecturerAvailabilityUncheckedCreateNestedManyWithoutLecturerInput
    bookings?: ConsultationBookingUncheckedCreateNestedManyWithoutLecturerInput
    sessions?: ConsultationSessionUncheckedCreateNestedManyWithoutLecturerInput
  }

  export type LecturerCreateOrConnectWithoutSeminarsInput = {
    where: LecturerWhereUniqueInput
    create: XOR<LecturerCreateWithoutSeminarsInput, LecturerUncheckedCreateWithoutSeminarsInput>
  }

  export type SeminarRegistrationCreateWithoutSeminarInput = {
    id?: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutSeminarRegistrationsInput
  }

  export type SeminarRegistrationUncheckedCreateWithoutSeminarInput = {
    id?: string
    userId: string
    createdAt?: Date | string
  }

  export type SeminarRegistrationCreateOrConnectWithoutSeminarInput = {
    where: SeminarRegistrationWhereUniqueInput
    create: XOR<SeminarRegistrationCreateWithoutSeminarInput, SeminarRegistrationUncheckedCreateWithoutSeminarInput>
  }

  export type SeminarRegistrationCreateManySeminarInputEnvelope = {
    data: SeminarRegistrationCreateManySeminarInput | SeminarRegistrationCreateManySeminarInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutCreatedSeminarsInput = {
    update: XOR<UserUpdateWithoutCreatedSeminarsInput, UserUncheckedUpdateWithoutCreatedSeminarsInput>
    create: XOR<UserCreateWithoutCreatedSeminarsInput, UserUncheckedCreateWithoutCreatedSeminarsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCreatedSeminarsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCreatedSeminarsInput, UserUncheckedUpdateWithoutCreatedSeminarsInput>
  }

  export type UserUpdateWithoutCreatedSeminarsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    avatar?: StringFieldUpdateOperationsInput | string
    profilePictureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    organization?: NullableStringFieldUpdateOperationsInput | string | null
    businessName?: NullableStringFieldUpdateOperationsInput | string | null
    businessCategory?: NullableStringFieldUpdateOperationsInput | string | null
    businessAddress?: NullableStringFieldUpdateOperationsInput | string | null
    nim?: NullableStringFieldUpdateOperationsInput | string | null
    semester?: NullableIntFieldUpdateOperationsInput | number | null
    schoolName?: NullableStringFieldUpdateOperationsInput | string | null
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    grade?: NullableStringFieldUpdateOperationsInput | string | null
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lecturer?: LecturerUpdateOneWithoutUserNestedInput
    bookings?: ConsultationBookingUpdateManyWithoutUserNestedInput
    seminarRegistrations?: SeminarRegistrationUpdateManyWithoutUserNestedInput
    activityLogs?: ActivityLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCreatedSeminarsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    avatar?: StringFieldUpdateOperationsInput | string
    profilePictureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    organization?: NullableStringFieldUpdateOperationsInput | string | null
    businessName?: NullableStringFieldUpdateOperationsInput | string | null
    businessCategory?: NullableStringFieldUpdateOperationsInput | string | null
    businessAddress?: NullableStringFieldUpdateOperationsInput | string | null
    nim?: NullableStringFieldUpdateOperationsInput | string | null
    semester?: NullableIntFieldUpdateOperationsInput | number | null
    schoolName?: NullableStringFieldUpdateOperationsInput | string | null
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    grade?: NullableStringFieldUpdateOperationsInput | string | null
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lecturer?: LecturerUncheckedUpdateOneWithoutUserNestedInput
    bookings?: ConsultationBookingUncheckedUpdateManyWithoutUserNestedInput
    seminarRegistrations?: SeminarRegistrationUncheckedUpdateManyWithoutUserNestedInput
    activityLogs?: ActivityLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type LecturerUpsertWithoutSeminarsInput = {
    update: XOR<LecturerUpdateWithoutSeminarsInput, LecturerUncheckedUpdateWithoutSeminarsInput>
    create: XOR<LecturerCreateWithoutSeminarsInput, LecturerUncheckedCreateWithoutSeminarsInput>
    where?: LecturerWhereInput
  }

  export type LecturerUpdateToOneWithWhereWithoutSeminarsInput = {
    where?: LecturerWhereInput
    data: XOR<LecturerUpdateWithoutSeminarsInput, LecturerUncheckedUpdateWithoutSeminarsInput>
  }

  export type LecturerUpdateWithoutSeminarsInput = {
    id?: StringFieldUpdateOperationsInput | string
    lecturerCode?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    photo?: StringFieldUpdateOperationsInput | string
    specialization?: StringFieldUpdateOperationsInput | string
    university?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    experience?: StringFieldUpdateOperationsInput | string
    expertise?: LecturerUpdateexpertiseInput | string[]
    phone?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutLecturerNestedInput
    studyProgram?: StudyProgramUpdateOneWithoutLecturersNestedInput
    availabilities?: LecturerAvailabilityUpdateManyWithoutLecturerNestedInput
    bookings?: ConsultationBookingUpdateManyWithoutLecturerNestedInput
    sessions?: ConsultationSessionUpdateManyWithoutLecturerNestedInput
  }

  export type LecturerUncheckedUpdateWithoutSeminarsInput = {
    id?: StringFieldUpdateOperationsInput | string
    lecturerCode?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    studyProgramId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    photo?: StringFieldUpdateOperationsInput | string
    specialization?: StringFieldUpdateOperationsInput | string
    university?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    experience?: StringFieldUpdateOperationsInput | string
    expertise?: LecturerUpdateexpertiseInput | string[]
    phone?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    availabilities?: LecturerAvailabilityUncheckedUpdateManyWithoutLecturerNestedInput
    bookings?: ConsultationBookingUncheckedUpdateManyWithoutLecturerNestedInput
    sessions?: ConsultationSessionUncheckedUpdateManyWithoutLecturerNestedInput
  }

  export type SeminarRegistrationUpsertWithWhereUniqueWithoutSeminarInput = {
    where: SeminarRegistrationWhereUniqueInput
    update: XOR<SeminarRegistrationUpdateWithoutSeminarInput, SeminarRegistrationUncheckedUpdateWithoutSeminarInput>
    create: XOR<SeminarRegistrationCreateWithoutSeminarInput, SeminarRegistrationUncheckedCreateWithoutSeminarInput>
  }

  export type SeminarRegistrationUpdateWithWhereUniqueWithoutSeminarInput = {
    where: SeminarRegistrationWhereUniqueInput
    data: XOR<SeminarRegistrationUpdateWithoutSeminarInput, SeminarRegistrationUncheckedUpdateWithoutSeminarInput>
  }

  export type SeminarRegistrationUpdateManyWithWhereWithoutSeminarInput = {
    where: SeminarRegistrationScalarWhereInput
    data: XOR<SeminarRegistrationUpdateManyMutationInput, SeminarRegistrationUncheckedUpdateManyWithoutSeminarInput>
  }

  export type SeminarCreateWithoutRegistrationsInput = {
    id?: string
    title: string
    description: string
    host: string
    eventDate: Date | string
    eventTime: string
    location: string
    zoomLink?: string | null
    posterUrl?: string | null
    status?: $Enums.SeminarStatus
    quota: number
    category?: $Enums.SeminarCategory
    targetAudience?: SeminarCreatetargetAudienceInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    creator: UserCreateNestedOneWithoutCreatedSeminarsInput
    lecturer?: LecturerCreateNestedOneWithoutSeminarsInput
  }

  export type SeminarUncheckedCreateWithoutRegistrationsInput = {
    id?: string
    title: string
    description: string
    host: string
    hostId?: string | null
    eventDate: Date | string
    eventTime: string
    location: string
    zoomLink?: string | null
    posterUrl?: string | null
    status?: $Enums.SeminarStatus
    quota: number
    category?: $Enums.SeminarCategory
    targetAudience?: SeminarCreatetargetAudienceInput | string[]
    createdBy: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SeminarCreateOrConnectWithoutRegistrationsInput = {
    where: SeminarWhereUniqueInput
    create: XOR<SeminarCreateWithoutRegistrationsInput, SeminarUncheckedCreateWithoutRegistrationsInput>
  }

  export type UserCreateWithoutSeminarRegistrationsInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    role: $Enums.UserRole
    avatar?: string
    profilePictureUrl?: string | null
    phone?: string | null
    status?: string
    organization?: string | null
    businessName?: string | null
    businessCategory?: string | null
    businessAddress?: string | null
    nim?: string | null
    semester?: number | null
    schoolName?: string | null
    subject?: string | null
    grade?: string | null
    lastLogin?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    lecturer?: LecturerCreateNestedOneWithoutUserInput
    bookings?: ConsultationBookingCreateNestedManyWithoutUserInput
    createdSeminars?: SeminarCreateNestedManyWithoutCreatorInput
    activityLogs?: ActivityLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSeminarRegistrationsInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    role: $Enums.UserRole
    avatar?: string
    profilePictureUrl?: string | null
    phone?: string | null
    status?: string
    organization?: string | null
    businessName?: string | null
    businessCategory?: string | null
    businessAddress?: string | null
    nim?: string | null
    semester?: number | null
    schoolName?: string | null
    subject?: string | null
    grade?: string | null
    lastLogin?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    lecturer?: LecturerUncheckedCreateNestedOneWithoutUserInput
    bookings?: ConsultationBookingUncheckedCreateNestedManyWithoutUserInput
    createdSeminars?: SeminarUncheckedCreateNestedManyWithoutCreatorInput
    activityLogs?: ActivityLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSeminarRegistrationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSeminarRegistrationsInput, UserUncheckedCreateWithoutSeminarRegistrationsInput>
  }

  export type SeminarUpsertWithoutRegistrationsInput = {
    update: XOR<SeminarUpdateWithoutRegistrationsInput, SeminarUncheckedUpdateWithoutRegistrationsInput>
    create: XOR<SeminarCreateWithoutRegistrationsInput, SeminarUncheckedCreateWithoutRegistrationsInput>
    where?: SeminarWhereInput
  }

  export type SeminarUpdateToOneWithWhereWithoutRegistrationsInput = {
    where?: SeminarWhereInput
    data: XOR<SeminarUpdateWithoutRegistrationsInput, SeminarUncheckedUpdateWithoutRegistrationsInput>
  }

  export type SeminarUpdateWithoutRegistrationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    host?: StringFieldUpdateOperationsInput | string
    eventDate?: DateTimeFieldUpdateOperationsInput | Date | string
    eventTime?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    zoomLink?: NullableStringFieldUpdateOperationsInput | string | null
    posterUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSeminarStatusFieldUpdateOperationsInput | $Enums.SeminarStatus
    quota?: IntFieldUpdateOperationsInput | number
    category?: EnumSeminarCategoryFieldUpdateOperationsInput | $Enums.SeminarCategory
    targetAudience?: SeminarUpdatetargetAudienceInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creator?: UserUpdateOneRequiredWithoutCreatedSeminarsNestedInput
    lecturer?: LecturerUpdateOneWithoutSeminarsNestedInput
  }

  export type SeminarUncheckedUpdateWithoutRegistrationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    host?: StringFieldUpdateOperationsInput | string
    hostId?: NullableStringFieldUpdateOperationsInput | string | null
    eventDate?: DateTimeFieldUpdateOperationsInput | Date | string
    eventTime?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    zoomLink?: NullableStringFieldUpdateOperationsInput | string | null
    posterUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSeminarStatusFieldUpdateOperationsInput | $Enums.SeminarStatus
    quota?: IntFieldUpdateOperationsInput | number
    category?: EnumSeminarCategoryFieldUpdateOperationsInput | $Enums.SeminarCategory
    targetAudience?: SeminarUpdatetargetAudienceInput | string[]
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpsertWithoutSeminarRegistrationsInput = {
    update: XOR<UserUpdateWithoutSeminarRegistrationsInput, UserUncheckedUpdateWithoutSeminarRegistrationsInput>
    create: XOR<UserCreateWithoutSeminarRegistrationsInput, UserUncheckedCreateWithoutSeminarRegistrationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSeminarRegistrationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSeminarRegistrationsInput, UserUncheckedUpdateWithoutSeminarRegistrationsInput>
  }

  export type UserUpdateWithoutSeminarRegistrationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    avatar?: StringFieldUpdateOperationsInput | string
    profilePictureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    organization?: NullableStringFieldUpdateOperationsInput | string | null
    businessName?: NullableStringFieldUpdateOperationsInput | string | null
    businessCategory?: NullableStringFieldUpdateOperationsInput | string | null
    businessAddress?: NullableStringFieldUpdateOperationsInput | string | null
    nim?: NullableStringFieldUpdateOperationsInput | string | null
    semester?: NullableIntFieldUpdateOperationsInput | number | null
    schoolName?: NullableStringFieldUpdateOperationsInput | string | null
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    grade?: NullableStringFieldUpdateOperationsInput | string | null
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lecturer?: LecturerUpdateOneWithoutUserNestedInput
    bookings?: ConsultationBookingUpdateManyWithoutUserNestedInput
    createdSeminars?: SeminarUpdateManyWithoutCreatorNestedInput
    activityLogs?: ActivityLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSeminarRegistrationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    avatar?: StringFieldUpdateOperationsInput | string
    profilePictureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    organization?: NullableStringFieldUpdateOperationsInput | string | null
    businessName?: NullableStringFieldUpdateOperationsInput | string | null
    businessCategory?: NullableStringFieldUpdateOperationsInput | string | null
    businessAddress?: NullableStringFieldUpdateOperationsInput | string | null
    nim?: NullableStringFieldUpdateOperationsInput | string | null
    semester?: NullableIntFieldUpdateOperationsInput | number | null
    schoolName?: NullableStringFieldUpdateOperationsInput | string | null
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    grade?: NullableStringFieldUpdateOperationsInput | string | null
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lecturer?: LecturerUncheckedUpdateOneWithoutUserNestedInput
    bookings?: ConsultationBookingUncheckedUpdateManyWithoutUserNestedInput
    createdSeminars?: SeminarUncheckedUpdateManyWithoutCreatorNestedInput
    activityLogs?: ActivityLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutActivityLogsInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    role: $Enums.UserRole
    avatar?: string
    profilePictureUrl?: string | null
    phone?: string | null
    status?: string
    organization?: string | null
    businessName?: string | null
    businessCategory?: string | null
    businessAddress?: string | null
    nim?: string | null
    semester?: number | null
    schoolName?: string | null
    subject?: string | null
    grade?: string | null
    lastLogin?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    lecturer?: LecturerCreateNestedOneWithoutUserInput
    bookings?: ConsultationBookingCreateNestedManyWithoutUserInput
    createdSeminars?: SeminarCreateNestedManyWithoutCreatorInput
    seminarRegistrations?: SeminarRegistrationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutActivityLogsInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    role: $Enums.UserRole
    avatar?: string
    profilePictureUrl?: string | null
    phone?: string | null
    status?: string
    organization?: string | null
    businessName?: string | null
    businessCategory?: string | null
    businessAddress?: string | null
    nim?: string | null
    semester?: number | null
    schoolName?: string | null
    subject?: string | null
    grade?: string | null
    lastLogin?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    lecturer?: LecturerUncheckedCreateNestedOneWithoutUserInput
    bookings?: ConsultationBookingUncheckedCreateNestedManyWithoutUserInput
    createdSeminars?: SeminarUncheckedCreateNestedManyWithoutCreatorInput
    seminarRegistrations?: SeminarRegistrationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutActivityLogsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutActivityLogsInput, UserUncheckedCreateWithoutActivityLogsInput>
  }

  export type UserUpsertWithoutActivityLogsInput = {
    update: XOR<UserUpdateWithoutActivityLogsInput, UserUncheckedUpdateWithoutActivityLogsInput>
    create: XOR<UserCreateWithoutActivityLogsInput, UserUncheckedCreateWithoutActivityLogsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutActivityLogsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutActivityLogsInput, UserUncheckedUpdateWithoutActivityLogsInput>
  }

  export type UserUpdateWithoutActivityLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    avatar?: StringFieldUpdateOperationsInput | string
    profilePictureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    organization?: NullableStringFieldUpdateOperationsInput | string | null
    businessName?: NullableStringFieldUpdateOperationsInput | string | null
    businessCategory?: NullableStringFieldUpdateOperationsInput | string | null
    businessAddress?: NullableStringFieldUpdateOperationsInput | string | null
    nim?: NullableStringFieldUpdateOperationsInput | string | null
    semester?: NullableIntFieldUpdateOperationsInput | number | null
    schoolName?: NullableStringFieldUpdateOperationsInput | string | null
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    grade?: NullableStringFieldUpdateOperationsInput | string | null
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lecturer?: LecturerUpdateOneWithoutUserNestedInput
    bookings?: ConsultationBookingUpdateManyWithoutUserNestedInput
    createdSeminars?: SeminarUpdateManyWithoutCreatorNestedInput
    seminarRegistrations?: SeminarRegistrationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutActivityLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    avatar?: StringFieldUpdateOperationsInput | string
    profilePictureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    organization?: NullableStringFieldUpdateOperationsInput | string | null
    businessName?: NullableStringFieldUpdateOperationsInput | string | null
    businessCategory?: NullableStringFieldUpdateOperationsInput | string | null
    businessAddress?: NullableStringFieldUpdateOperationsInput | string | null
    nim?: NullableStringFieldUpdateOperationsInput | string | null
    semester?: NullableIntFieldUpdateOperationsInput | number | null
    schoolName?: NullableStringFieldUpdateOperationsInput | string | null
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    grade?: NullableStringFieldUpdateOperationsInput | string | null
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lecturer?: LecturerUncheckedUpdateOneWithoutUserNestedInput
    bookings?: ConsultationBookingUncheckedUpdateManyWithoutUserNestedInput
    createdSeminars?: SeminarUncheckedUpdateManyWithoutCreatorNestedInput
    seminarRegistrations?: SeminarRegistrationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ConsultationBookingCreateManyUserInput = {
    id?: string
    lecturerId: string
    semesterId: string
    sessionId?: string | null
    consultationType: $Enums.ConsultationType
    title: string
    category: string
    priority?: string
    description: string
    organization: string
    contactPerson: string
    phone: string
    email: string
    scheduledDate: Date | string
    scheduledDay: string
    startTime: string
    endTime: string
    status?: $Enums.ConsultationStatus
    feedback?: string | null
    rating?: number | null
    zoomLink?: string | null
    rescheduleNote?: string | null
    attachmentFileName?: string | null
    attachmentUrl?: string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SeminarCreateManyCreatorInput = {
    id?: string
    title: string
    description: string
    host: string
    hostId?: string | null
    eventDate: Date | string
    eventTime: string
    location: string
    zoomLink?: string | null
    posterUrl?: string | null
    status?: $Enums.SeminarStatus
    quota: number
    category?: $Enums.SeminarCategory
    targetAudience?: SeminarCreatetargetAudienceInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SeminarRegistrationCreateManyUserInput = {
    id?: string
    seminarId: string
    createdAt?: Date | string
  }

  export type ActivityLogCreateManyUserInput = {
    id?: string
    action: string
    description: string
    performedByRole: $Enums.UserRole
    relatedBookingId?: string | null
    relatedSessionId?: string | null
    timestamp?: Date | string
  }

  export type ConsultationBookingUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    consultationType?: EnumConsultationTypeFieldUpdateOperationsInput | $Enums.ConsultationType
    title?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    priority?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    organization?: StringFieldUpdateOperationsInput | string
    contactPerson?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    scheduledDate?: DateTimeFieldUpdateOperationsInput | Date | string
    scheduledDay?: StringFieldUpdateOperationsInput | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    status?: EnumConsultationStatusFieldUpdateOperationsInput | $Enums.ConsultationStatus
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    zoomLink?: NullableStringFieldUpdateOperationsInput | string | null
    rescheduleNote?: NullableStringFieldUpdateOperationsInput | string | null
    attachmentFileName?: NullableStringFieldUpdateOperationsInput | string | null
    attachmentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lecturer?: LecturerUpdateOneRequiredWithoutBookingsNestedInput
    semester?: SemesterUpdateOneRequiredWithoutBookingsNestedInput
    session?: ConsultationSessionUpdateOneWithoutBookingsNestedInput
  }

  export type ConsultationBookingUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    lecturerId?: StringFieldUpdateOperationsInput | string
    semesterId?: StringFieldUpdateOperationsInput | string
    sessionId?: NullableStringFieldUpdateOperationsInput | string | null
    consultationType?: EnumConsultationTypeFieldUpdateOperationsInput | $Enums.ConsultationType
    title?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    priority?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    organization?: StringFieldUpdateOperationsInput | string
    contactPerson?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    scheduledDate?: DateTimeFieldUpdateOperationsInput | Date | string
    scheduledDay?: StringFieldUpdateOperationsInput | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    status?: EnumConsultationStatusFieldUpdateOperationsInput | $Enums.ConsultationStatus
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    zoomLink?: NullableStringFieldUpdateOperationsInput | string | null
    rescheduleNote?: NullableStringFieldUpdateOperationsInput | string | null
    attachmentFileName?: NullableStringFieldUpdateOperationsInput | string | null
    attachmentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConsultationBookingUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    lecturerId?: StringFieldUpdateOperationsInput | string
    semesterId?: StringFieldUpdateOperationsInput | string
    sessionId?: NullableStringFieldUpdateOperationsInput | string | null
    consultationType?: EnumConsultationTypeFieldUpdateOperationsInput | $Enums.ConsultationType
    title?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    priority?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    organization?: StringFieldUpdateOperationsInput | string
    contactPerson?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    scheduledDate?: DateTimeFieldUpdateOperationsInput | Date | string
    scheduledDay?: StringFieldUpdateOperationsInput | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    status?: EnumConsultationStatusFieldUpdateOperationsInput | $Enums.ConsultationStatus
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    zoomLink?: NullableStringFieldUpdateOperationsInput | string | null
    rescheduleNote?: NullableStringFieldUpdateOperationsInput | string | null
    attachmentFileName?: NullableStringFieldUpdateOperationsInput | string | null
    attachmentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SeminarUpdateWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    host?: StringFieldUpdateOperationsInput | string
    eventDate?: DateTimeFieldUpdateOperationsInput | Date | string
    eventTime?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    zoomLink?: NullableStringFieldUpdateOperationsInput | string | null
    posterUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSeminarStatusFieldUpdateOperationsInput | $Enums.SeminarStatus
    quota?: IntFieldUpdateOperationsInput | number
    category?: EnumSeminarCategoryFieldUpdateOperationsInput | $Enums.SeminarCategory
    targetAudience?: SeminarUpdatetargetAudienceInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lecturer?: LecturerUpdateOneWithoutSeminarsNestedInput
    registrations?: SeminarRegistrationUpdateManyWithoutSeminarNestedInput
  }

  export type SeminarUncheckedUpdateWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    host?: StringFieldUpdateOperationsInput | string
    hostId?: NullableStringFieldUpdateOperationsInput | string | null
    eventDate?: DateTimeFieldUpdateOperationsInput | Date | string
    eventTime?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    zoomLink?: NullableStringFieldUpdateOperationsInput | string | null
    posterUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSeminarStatusFieldUpdateOperationsInput | $Enums.SeminarStatus
    quota?: IntFieldUpdateOperationsInput | number
    category?: EnumSeminarCategoryFieldUpdateOperationsInput | $Enums.SeminarCategory
    targetAudience?: SeminarUpdatetargetAudienceInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    registrations?: SeminarRegistrationUncheckedUpdateManyWithoutSeminarNestedInput
  }

  export type SeminarUncheckedUpdateManyWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    host?: StringFieldUpdateOperationsInput | string
    hostId?: NullableStringFieldUpdateOperationsInput | string | null
    eventDate?: DateTimeFieldUpdateOperationsInput | Date | string
    eventTime?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    zoomLink?: NullableStringFieldUpdateOperationsInput | string | null
    posterUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSeminarStatusFieldUpdateOperationsInput | $Enums.SeminarStatus
    quota?: IntFieldUpdateOperationsInput | number
    category?: EnumSeminarCategoryFieldUpdateOperationsInput | $Enums.SeminarCategory
    targetAudience?: SeminarUpdatetargetAudienceInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SeminarRegistrationUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    seminar?: SeminarUpdateOneRequiredWithoutRegistrationsNestedInput
  }

  export type SeminarRegistrationUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    seminarId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SeminarRegistrationUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    seminarId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityLogUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    performedByRole?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    relatedBookingId?: NullableStringFieldUpdateOperationsInput | string | null
    relatedSessionId?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityLogUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    performedByRole?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    relatedBookingId?: NullableStringFieldUpdateOperationsInput | string | null
    relatedSessionId?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityLogUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    performedByRole?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    relatedBookingId?: NullableStringFieldUpdateOperationsInput | string | null
    relatedSessionId?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LecturerCreateManyStudyProgramInput = {
    id?: string
    lecturerCode: string
    userId?: string | null
    name: string
    email: string
    photo?: string
    specialization: string
    university?: string
    rating?: number
    experience?: string
    expertise?: LecturerCreateexpertiseInput | string[]
    phone?: string
    bio?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StudentCreateManyStudyProgramInput = {
    id?: string
    nim: string
    name: string
    email: string
    semester: number
    phone?: string
  }

  export type LecturerUpdateWithoutStudyProgramInput = {
    id?: StringFieldUpdateOperationsInput | string
    lecturerCode?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    photo?: StringFieldUpdateOperationsInput | string
    specialization?: StringFieldUpdateOperationsInput | string
    university?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    experience?: StringFieldUpdateOperationsInput | string
    expertise?: LecturerUpdateexpertiseInput | string[]
    phone?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutLecturerNestedInput
    availabilities?: LecturerAvailabilityUpdateManyWithoutLecturerNestedInput
    bookings?: ConsultationBookingUpdateManyWithoutLecturerNestedInput
    sessions?: ConsultationSessionUpdateManyWithoutLecturerNestedInput
    seminars?: SeminarUpdateManyWithoutLecturerNestedInput
  }

  export type LecturerUncheckedUpdateWithoutStudyProgramInput = {
    id?: StringFieldUpdateOperationsInput | string
    lecturerCode?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    photo?: StringFieldUpdateOperationsInput | string
    specialization?: StringFieldUpdateOperationsInput | string
    university?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    experience?: StringFieldUpdateOperationsInput | string
    expertise?: LecturerUpdateexpertiseInput | string[]
    phone?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    availabilities?: LecturerAvailabilityUncheckedUpdateManyWithoutLecturerNestedInput
    bookings?: ConsultationBookingUncheckedUpdateManyWithoutLecturerNestedInput
    sessions?: ConsultationSessionUncheckedUpdateManyWithoutLecturerNestedInput
    seminars?: SeminarUncheckedUpdateManyWithoutLecturerNestedInput
  }

  export type LecturerUncheckedUpdateManyWithoutStudyProgramInput = {
    id?: StringFieldUpdateOperationsInput | string
    lecturerCode?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    photo?: StringFieldUpdateOperationsInput | string
    specialization?: StringFieldUpdateOperationsInput | string
    university?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    experience?: StringFieldUpdateOperationsInput | string
    expertise?: LecturerUpdateexpertiseInput | string[]
    phone?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentUpdateWithoutStudyProgramInput = {
    id?: StringFieldUpdateOperationsInput | string
    nim?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    semester?: IntFieldUpdateOperationsInput | number
    phone?: StringFieldUpdateOperationsInput | string
  }

  export type StudentUncheckedUpdateWithoutStudyProgramInput = {
    id?: StringFieldUpdateOperationsInput | string
    nim?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    semester?: IntFieldUpdateOperationsInput | number
    phone?: StringFieldUpdateOperationsInput | string
  }

  export type StudentUncheckedUpdateManyWithoutStudyProgramInput = {
    id?: StringFieldUpdateOperationsInput | string
    nim?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    semester?: IntFieldUpdateOperationsInput | number
    phone?: StringFieldUpdateOperationsInput | string
  }

  export type LecturerAvailabilityCreateManyLecturerInput = {
    id?: string
    semesterId: string
    dayOfWeek: string
    timeSlots: JsonNullValueInput | InputJsonValue
    isActive?: boolean
    createdAt?: Date | string
  }

  export type ConsultationBookingCreateManyLecturerInput = {
    id?: string
    userId: string
    semesterId: string
    sessionId?: string | null
    consultationType: $Enums.ConsultationType
    title: string
    category: string
    priority?: string
    description: string
    organization: string
    contactPerson: string
    phone: string
    email: string
    scheduledDate: Date | string
    scheduledDay: string
    startTime: string
    endTime: string
    status?: $Enums.ConsultationStatus
    feedback?: string | null
    rating?: number | null
    zoomLink?: string | null
    rescheduleNote?: string | null
    attachmentFileName?: string | null
    attachmentUrl?: string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ConsultationSessionCreateManyLecturerInput = {
    id?: string
    scheduledDate: Date | string
    startTime: string
    endTime: string
    status?: string
    zoomLink?: string | null
    notes?: string | null
    confirmedAt?: Date | string | null
    confirmedBy?: string | null
    evaluationLink?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SeminarCreateManyLecturerInput = {
    id?: string
    title: string
    description: string
    host: string
    eventDate: Date | string
    eventTime: string
    location: string
    zoomLink?: string | null
    posterUrl?: string | null
    status?: $Enums.SeminarStatus
    quota: number
    category?: $Enums.SeminarCategory
    targetAudience?: SeminarCreatetargetAudienceInput | string[]
    createdBy: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LecturerAvailabilityUpdateWithoutLecturerInput = {
    id?: StringFieldUpdateOperationsInput | string
    dayOfWeek?: StringFieldUpdateOperationsInput | string
    timeSlots?: JsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    semester?: SemesterUpdateOneRequiredWithoutAvailabilitiesNestedInput
  }

  export type LecturerAvailabilityUncheckedUpdateWithoutLecturerInput = {
    id?: StringFieldUpdateOperationsInput | string
    semesterId?: StringFieldUpdateOperationsInput | string
    dayOfWeek?: StringFieldUpdateOperationsInput | string
    timeSlots?: JsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LecturerAvailabilityUncheckedUpdateManyWithoutLecturerInput = {
    id?: StringFieldUpdateOperationsInput | string
    semesterId?: StringFieldUpdateOperationsInput | string
    dayOfWeek?: StringFieldUpdateOperationsInput | string
    timeSlots?: JsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConsultationBookingUpdateWithoutLecturerInput = {
    id?: StringFieldUpdateOperationsInput | string
    consultationType?: EnumConsultationTypeFieldUpdateOperationsInput | $Enums.ConsultationType
    title?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    priority?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    organization?: StringFieldUpdateOperationsInput | string
    contactPerson?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    scheduledDate?: DateTimeFieldUpdateOperationsInput | Date | string
    scheduledDay?: StringFieldUpdateOperationsInput | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    status?: EnumConsultationStatusFieldUpdateOperationsInput | $Enums.ConsultationStatus
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    zoomLink?: NullableStringFieldUpdateOperationsInput | string | null
    rescheduleNote?: NullableStringFieldUpdateOperationsInput | string | null
    attachmentFileName?: NullableStringFieldUpdateOperationsInput | string | null
    attachmentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutBookingsNestedInput
    semester?: SemesterUpdateOneRequiredWithoutBookingsNestedInput
    session?: ConsultationSessionUpdateOneWithoutBookingsNestedInput
  }

  export type ConsultationBookingUncheckedUpdateWithoutLecturerInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    semesterId?: StringFieldUpdateOperationsInput | string
    sessionId?: NullableStringFieldUpdateOperationsInput | string | null
    consultationType?: EnumConsultationTypeFieldUpdateOperationsInput | $Enums.ConsultationType
    title?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    priority?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    organization?: StringFieldUpdateOperationsInput | string
    contactPerson?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    scheduledDate?: DateTimeFieldUpdateOperationsInput | Date | string
    scheduledDay?: StringFieldUpdateOperationsInput | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    status?: EnumConsultationStatusFieldUpdateOperationsInput | $Enums.ConsultationStatus
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    zoomLink?: NullableStringFieldUpdateOperationsInput | string | null
    rescheduleNote?: NullableStringFieldUpdateOperationsInput | string | null
    attachmentFileName?: NullableStringFieldUpdateOperationsInput | string | null
    attachmentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConsultationBookingUncheckedUpdateManyWithoutLecturerInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    semesterId?: StringFieldUpdateOperationsInput | string
    sessionId?: NullableStringFieldUpdateOperationsInput | string | null
    consultationType?: EnumConsultationTypeFieldUpdateOperationsInput | $Enums.ConsultationType
    title?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    priority?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    organization?: StringFieldUpdateOperationsInput | string
    contactPerson?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    scheduledDate?: DateTimeFieldUpdateOperationsInput | Date | string
    scheduledDay?: StringFieldUpdateOperationsInput | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    status?: EnumConsultationStatusFieldUpdateOperationsInput | $Enums.ConsultationStatus
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    zoomLink?: NullableStringFieldUpdateOperationsInput | string | null
    rescheduleNote?: NullableStringFieldUpdateOperationsInput | string | null
    attachmentFileName?: NullableStringFieldUpdateOperationsInput | string | null
    attachmentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConsultationSessionUpdateWithoutLecturerInput = {
    id?: StringFieldUpdateOperationsInput | string
    scheduledDate?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    zoomLink?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    confirmedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    confirmedBy?: NullableStringFieldUpdateOperationsInput | string | null
    evaluationLink?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: ConsultationBookingUpdateManyWithoutSessionNestedInput
  }

  export type ConsultationSessionUncheckedUpdateWithoutLecturerInput = {
    id?: StringFieldUpdateOperationsInput | string
    scheduledDate?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    zoomLink?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    confirmedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    confirmedBy?: NullableStringFieldUpdateOperationsInput | string | null
    evaluationLink?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: ConsultationBookingUncheckedUpdateManyWithoutSessionNestedInput
  }

  export type ConsultationSessionUncheckedUpdateManyWithoutLecturerInput = {
    id?: StringFieldUpdateOperationsInput | string
    scheduledDate?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    zoomLink?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    confirmedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    confirmedBy?: NullableStringFieldUpdateOperationsInput | string | null
    evaluationLink?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SeminarUpdateWithoutLecturerInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    host?: StringFieldUpdateOperationsInput | string
    eventDate?: DateTimeFieldUpdateOperationsInput | Date | string
    eventTime?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    zoomLink?: NullableStringFieldUpdateOperationsInput | string | null
    posterUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSeminarStatusFieldUpdateOperationsInput | $Enums.SeminarStatus
    quota?: IntFieldUpdateOperationsInput | number
    category?: EnumSeminarCategoryFieldUpdateOperationsInput | $Enums.SeminarCategory
    targetAudience?: SeminarUpdatetargetAudienceInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creator?: UserUpdateOneRequiredWithoutCreatedSeminarsNestedInput
    registrations?: SeminarRegistrationUpdateManyWithoutSeminarNestedInput
  }

  export type SeminarUncheckedUpdateWithoutLecturerInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    host?: StringFieldUpdateOperationsInput | string
    eventDate?: DateTimeFieldUpdateOperationsInput | Date | string
    eventTime?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    zoomLink?: NullableStringFieldUpdateOperationsInput | string | null
    posterUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSeminarStatusFieldUpdateOperationsInput | $Enums.SeminarStatus
    quota?: IntFieldUpdateOperationsInput | number
    category?: EnumSeminarCategoryFieldUpdateOperationsInput | $Enums.SeminarCategory
    targetAudience?: SeminarUpdatetargetAudienceInput | string[]
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    registrations?: SeminarRegistrationUncheckedUpdateManyWithoutSeminarNestedInput
  }

  export type SeminarUncheckedUpdateManyWithoutLecturerInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    host?: StringFieldUpdateOperationsInput | string
    eventDate?: DateTimeFieldUpdateOperationsInput | Date | string
    eventTime?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    zoomLink?: NullableStringFieldUpdateOperationsInput | string | null
    posterUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSeminarStatusFieldUpdateOperationsInput | $Enums.SeminarStatus
    quota?: IntFieldUpdateOperationsInput | number
    category?: EnumSeminarCategoryFieldUpdateOperationsInput | $Enums.SeminarCategory
    targetAudience?: SeminarUpdatetargetAudienceInput | string[]
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LecturerAvailabilityCreateManySemesterInput = {
    id?: string
    lecturerId: string
    dayOfWeek: string
    timeSlots: JsonNullValueInput | InputJsonValue
    isActive?: boolean
    createdAt?: Date | string
  }

  export type ConsultationBookingCreateManySemesterInput = {
    id?: string
    userId: string
    lecturerId: string
    sessionId?: string | null
    consultationType: $Enums.ConsultationType
    title: string
    category: string
    priority?: string
    description: string
    organization: string
    contactPerson: string
    phone: string
    email: string
    scheduledDate: Date | string
    scheduledDay: string
    startTime: string
    endTime: string
    status?: $Enums.ConsultationStatus
    feedback?: string | null
    rating?: number | null
    zoomLink?: string | null
    rescheduleNote?: string | null
    attachmentFileName?: string | null
    attachmentUrl?: string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LecturerAvailabilityUpdateWithoutSemesterInput = {
    id?: StringFieldUpdateOperationsInput | string
    dayOfWeek?: StringFieldUpdateOperationsInput | string
    timeSlots?: JsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lecturer?: LecturerUpdateOneRequiredWithoutAvailabilitiesNestedInput
  }

  export type LecturerAvailabilityUncheckedUpdateWithoutSemesterInput = {
    id?: StringFieldUpdateOperationsInput | string
    lecturerId?: StringFieldUpdateOperationsInput | string
    dayOfWeek?: StringFieldUpdateOperationsInput | string
    timeSlots?: JsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LecturerAvailabilityUncheckedUpdateManyWithoutSemesterInput = {
    id?: StringFieldUpdateOperationsInput | string
    lecturerId?: StringFieldUpdateOperationsInput | string
    dayOfWeek?: StringFieldUpdateOperationsInput | string
    timeSlots?: JsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConsultationBookingUpdateWithoutSemesterInput = {
    id?: StringFieldUpdateOperationsInput | string
    consultationType?: EnumConsultationTypeFieldUpdateOperationsInput | $Enums.ConsultationType
    title?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    priority?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    organization?: StringFieldUpdateOperationsInput | string
    contactPerson?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    scheduledDate?: DateTimeFieldUpdateOperationsInput | Date | string
    scheduledDay?: StringFieldUpdateOperationsInput | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    status?: EnumConsultationStatusFieldUpdateOperationsInput | $Enums.ConsultationStatus
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    zoomLink?: NullableStringFieldUpdateOperationsInput | string | null
    rescheduleNote?: NullableStringFieldUpdateOperationsInput | string | null
    attachmentFileName?: NullableStringFieldUpdateOperationsInput | string | null
    attachmentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutBookingsNestedInput
    lecturer?: LecturerUpdateOneRequiredWithoutBookingsNestedInput
    session?: ConsultationSessionUpdateOneWithoutBookingsNestedInput
  }

  export type ConsultationBookingUncheckedUpdateWithoutSemesterInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    lecturerId?: StringFieldUpdateOperationsInput | string
    sessionId?: NullableStringFieldUpdateOperationsInput | string | null
    consultationType?: EnumConsultationTypeFieldUpdateOperationsInput | $Enums.ConsultationType
    title?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    priority?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    organization?: StringFieldUpdateOperationsInput | string
    contactPerson?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    scheduledDate?: DateTimeFieldUpdateOperationsInput | Date | string
    scheduledDay?: StringFieldUpdateOperationsInput | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    status?: EnumConsultationStatusFieldUpdateOperationsInput | $Enums.ConsultationStatus
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    zoomLink?: NullableStringFieldUpdateOperationsInput | string | null
    rescheduleNote?: NullableStringFieldUpdateOperationsInput | string | null
    attachmentFileName?: NullableStringFieldUpdateOperationsInput | string | null
    attachmentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConsultationBookingUncheckedUpdateManyWithoutSemesterInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    lecturerId?: StringFieldUpdateOperationsInput | string
    sessionId?: NullableStringFieldUpdateOperationsInput | string | null
    consultationType?: EnumConsultationTypeFieldUpdateOperationsInput | $Enums.ConsultationType
    title?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    priority?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    organization?: StringFieldUpdateOperationsInput | string
    contactPerson?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    scheduledDate?: DateTimeFieldUpdateOperationsInput | Date | string
    scheduledDay?: StringFieldUpdateOperationsInput | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    status?: EnumConsultationStatusFieldUpdateOperationsInput | $Enums.ConsultationStatus
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    zoomLink?: NullableStringFieldUpdateOperationsInput | string | null
    rescheduleNote?: NullableStringFieldUpdateOperationsInput | string | null
    attachmentFileName?: NullableStringFieldUpdateOperationsInput | string | null
    attachmentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConsultationBookingCreateManySessionInput = {
    id?: string
    userId: string
    lecturerId: string
    semesterId: string
    consultationType: $Enums.ConsultationType
    title: string
    category: string
    priority?: string
    description: string
    organization: string
    contactPerson: string
    phone: string
    email: string
    scheduledDate: Date | string
    scheduledDay: string
    startTime: string
    endTime: string
    status?: $Enums.ConsultationStatus
    feedback?: string | null
    rating?: number | null
    zoomLink?: string | null
    rescheduleNote?: string | null
    attachmentFileName?: string | null
    attachmentUrl?: string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ConsultationBookingUpdateWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    consultationType?: EnumConsultationTypeFieldUpdateOperationsInput | $Enums.ConsultationType
    title?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    priority?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    organization?: StringFieldUpdateOperationsInput | string
    contactPerson?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    scheduledDate?: DateTimeFieldUpdateOperationsInput | Date | string
    scheduledDay?: StringFieldUpdateOperationsInput | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    status?: EnumConsultationStatusFieldUpdateOperationsInput | $Enums.ConsultationStatus
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    zoomLink?: NullableStringFieldUpdateOperationsInput | string | null
    rescheduleNote?: NullableStringFieldUpdateOperationsInput | string | null
    attachmentFileName?: NullableStringFieldUpdateOperationsInput | string | null
    attachmentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutBookingsNestedInput
    lecturer?: LecturerUpdateOneRequiredWithoutBookingsNestedInput
    semester?: SemesterUpdateOneRequiredWithoutBookingsNestedInput
  }

  export type ConsultationBookingUncheckedUpdateWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    lecturerId?: StringFieldUpdateOperationsInput | string
    semesterId?: StringFieldUpdateOperationsInput | string
    consultationType?: EnumConsultationTypeFieldUpdateOperationsInput | $Enums.ConsultationType
    title?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    priority?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    organization?: StringFieldUpdateOperationsInput | string
    contactPerson?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    scheduledDate?: DateTimeFieldUpdateOperationsInput | Date | string
    scheduledDay?: StringFieldUpdateOperationsInput | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    status?: EnumConsultationStatusFieldUpdateOperationsInput | $Enums.ConsultationStatus
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    zoomLink?: NullableStringFieldUpdateOperationsInput | string | null
    rescheduleNote?: NullableStringFieldUpdateOperationsInput | string | null
    attachmentFileName?: NullableStringFieldUpdateOperationsInput | string | null
    attachmentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConsultationBookingUncheckedUpdateManyWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    lecturerId?: StringFieldUpdateOperationsInput | string
    semesterId?: StringFieldUpdateOperationsInput | string
    consultationType?: EnumConsultationTypeFieldUpdateOperationsInput | $Enums.ConsultationType
    title?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    priority?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    organization?: StringFieldUpdateOperationsInput | string
    contactPerson?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    scheduledDate?: DateTimeFieldUpdateOperationsInput | Date | string
    scheduledDay?: StringFieldUpdateOperationsInput | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    status?: EnumConsultationStatusFieldUpdateOperationsInput | $Enums.ConsultationStatus
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    zoomLink?: NullableStringFieldUpdateOperationsInput | string | null
    rescheduleNote?: NullableStringFieldUpdateOperationsInput | string | null
    attachmentFileName?: NullableStringFieldUpdateOperationsInput | string | null
    attachmentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SeminarRegistrationCreateManySeminarInput = {
    id?: string
    userId: string
    createdAt?: Date | string
  }

  export type SeminarRegistrationUpdateWithoutSeminarInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSeminarRegistrationsNestedInput
  }

  export type SeminarRegistrationUncheckedUpdateWithoutSeminarInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SeminarRegistrationUncheckedUpdateManyWithoutSeminarInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}