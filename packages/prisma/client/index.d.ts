
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
 * Model Category
 * 
 */
export type Category = $Result.DefaultSelection<Prisma.$CategoryPayload>
/**
 * Model Movie
 * 
 */
export type Movie = $Result.DefaultSelection<Prisma.$MoviePayload>
/**
 * Model Book
 * 
 */
export type Book = $Result.DefaultSelection<Prisma.$BookPayload>
/**
 * Model Series
 * 
 */
export type Series = $Result.DefaultSelection<Prisma.$SeriesPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const CategoryType: {
  movie: 'movie',
  book: 'book',
  series: 'series'
};

export type CategoryType = (typeof CategoryType)[keyof typeof CategoryType]


export const MovieStatus: {
  assistido: 'assistido',
  na_fila: 'na_fila',
  proximo: 'proximo'
};

export type MovieStatus = (typeof MovieStatus)[keyof typeof MovieStatus]


export const BookStatus: {
  lido: 'lido',
  lendo: 'lendo',
  na_fila: 'na_fila',
  proximo: 'proximo'
};

export type BookStatus = (typeof BookStatus)[keyof typeof BookStatus]


export const SeriesStatus: {
  assistindo: 'assistindo',
  finalizada: 'finalizada',
  na_fila: 'na_fila',
  proximo: 'proximo'
};

export type SeriesStatus = (typeof SeriesStatus)[keyof typeof SeriesStatus]

}

export type CategoryType = $Enums.CategoryType

export const CategoryType: typeof $Enums.CategoryType

export type MovieStatus = $Enums.MovieStatus

export const MovieStatus: typeof $Enums.MovieStatus

export type BookStatus = $Enums.BookStatus

export const BookStatus: typeof $Enums.BookStatus

export type SeriesStatus = $Enums.SeriesStatus

export const SeriesStatus: typeof $Enums.SeriesStatus

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
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.category`: Exposes CRUD operations for the **Category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.CategoryDelegate<ExtArgs>;

  /**
   * `prisma.movie`: Exposes CRUD operations for the **Movie** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Movies
    * const movies = await prisma.movie.findMany()
    * ```
    */
  get movie(): Prisma.MovieDelegate<ExtArgs>;

  /**
   * `prisma.book`: Exposes CRUD operations for the **Book** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Books
    * const books = await prisma.book.findMany()
    * ```
    */
  get book(): Prisma.BookDelegate<ExtArgs>;

  /**
   * `prisma.series`: Exposes CRUD operations for the **Series** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Series
    * const series = await prisma.series.findMany()
    * ```
    */
  get series(): Prisma.SeriesDelegate<ExtArgs>;
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
  export import NotFoundError = runtime.NotFoundError

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
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
    Category: 'Category',
    Movie: 'Movie',
    Book: 'Book',
    Series: 'Series'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "user" | "category" | "movie" | "book" | "series"
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
      Category: {
        payload: Prisma.$CategoryPayload<ExtArgs>
        fields: Prisma.CategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findFirst: {
            args: Prisma.CategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findMany: {
            args: Prisma.CategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          create: {
            args: Prisma.CategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          createMany: {
            args: Prisma.CategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          delete: {
            args: Prisma.CategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          update: {
            args: Prisma.CategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          deleteMany: {
            args: Prisma.CategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategory>
          }
          groupBy: {
            args: Prisma.CategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoryCountArgs<ExtArgs>
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number
          }
        }
      }
      Movie: {
        payload: Prisma.$MoviePayload<ExtArgs>
        fields: Prisma.MovieFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MovieFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoviePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MovieFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoviePayload>
          }
          findFirst: {
            args: Prisma.MovieFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoviePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MovieFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoviePayload>
          }
          findMany: {
            args: Prisma.MovieFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoviePayload>[]
          }
          create: {
            args: Prisma.MovieCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoviePayload>
          }
          createMany: {
            args: Prisma.MovieCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MovieCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoviePayload>[]
          }
          delete: {
            args: Prisma.MovieDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoviePayload>
          }
          update: {
            args: Prisma.MovieUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoviePayload>
          }
          deleteMany: {
            args: Prisma.MovieDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MovieUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MovieUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoviePayload>
          }
          aggregate: {
            args: Prisma.MovieAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMovie>
          }
          groupBy: {
            args: Prisma.MovieGroupByArgs<ExtArgs>
            result: $Utils.Optional<MovieGroupByOutputType>[]
          }
          count: {
            args: Prisma.MovieCountArgs<ExtArgs>
            result: $Utils.Optional<MovieCountAggregateOutputType> | number
          }
        }
      }
      Book: {
        payload: Prisma.$BookPayload<ExtArgs>
        fields: Prisma.BookFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BookFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BookFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>
          }
          findFirst: {
            args: Prisma.BookFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BookFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>
          }
          findMany: {
            args: Prisma.BookFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>[]
          }
          create: {
            args: Prisma.BookCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>
          }
          createMany: {
            args: Prisma.BookCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BookCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>[]
          }
          delete: {
            args: Prisma.BookDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>
          }
          update: {
            args: Prisma.BookUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>
          }
          deleteMany: {
            args: Prisma.BookDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BookUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.BookUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>
          }
          aggregate: {
            args: Prisma.BookAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBook>
          }
          groupBy: {
            args: Prisma.BookGroupByArgs<ExtArgs>
            result: $Utils.Optional<BookGroupByOutputType>[]
          }
          count: {
            args: Prisma.BookCountArgs<ExtArgs>
            result: $Utils.Optional<BookCountAggregateOutputType> | number
          }
        }
      }
      Series: {
        payload: Prisma.$SeriesPayload<ExtArgs>
        fields: Prisma.SeriesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SeriesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeriesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SeriesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeriesPayload>
          }
          findFirst: {
            args: Prisma.SeriesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeriesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SeriesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeriesPayload>
          }
          findMany: {
            args: Prisma.SeriesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeriesPayload>[]
          }
          create: {
            args: Prisma.SeriesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeriesPayload>
          }
          createMany: {
            args: Prisma.SeriesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SeriesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeriesPayload>[]
          }
          delete: {
            args: Prisma.SeriesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeriesPayload>
          }
          update: {
            args: Prisma.SeriesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeriesPayload>
          }
          deleteMany: {
            args: Prisma.SeriesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SeriesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SeriesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeriesPayload>
          }
          aggregate: {
            args: Prisma.SeriesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSeries>
          }
          groupBy: {
            args: Prisma.SeriesGroupByArgs<ExtArgs>
            result: $Utils.Optional<SeriesGroupByOutputType>[]
          }
          count: {
            args: Prisma.SeriesCountArgs<ExtArgs>
            result: $Utils.Optional<SeriesCountAggregateOutputType> | number
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
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
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
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
    movies: number
    books: number
    series: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    movies?: boolean | UserCountOutputTypeCountMoviesArgs
    books?: boolean | UserCountOutputTypeCountBooksArgs
    series?: boolean | UserCountOutputTypeCountSeriesArgs
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
  export type UserCountOutputTypeCountMoviesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MovieWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBooksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSeriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SeriesWhereInput
  }


  /**
   * Count Type CategoryCountOutputType
   */

  export type CategoryCountOutputType = {
    movies: number
    books: number
    series: number
  }

  export type CategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    movies?: boolean | CategoryCountOutputTypeCountMoviesArgs
    books?: boolean | CategoryCountOutputTypeCountBooksArgs
    series?: boolean | CategoryCountOutputTypeCountSeriesArgs
  }

  // Custom InputTypes
  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryCountOutputType
     */
    select?: CategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountMoviesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MovieWhereInput
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountBooksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookWhereInput
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountSeriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SeriesWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    username: string | null
    is_public: boolean | null
    password_hash: string | null
    profile_picture_url: string | null
    created_at: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    username: string | null
    is_public: boolean | null
    password_hash: string | null
    profile_picture_url: string | null
    created_at: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    username: number
    is_public: number
    password_hash: number
    profile_picture_url: number
    created_at: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    username?: true
    is_public?: true
    password_hash?: true
    profile_picture_url?: true
    created_at?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    username?: true
    is_public?: true
    password_hash?: true
    profile_picture_url?: true
    created_at?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    username?: true
    is_public?: true
    password_hash?: true
    profile_picture_url?: true
    created_at?: true
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
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    email: string
    username: string | null
    is_public: boolean
    password_hash: string
    profile_picture_url: string | null
    created_at: Date
    _count: UserCountAggregateOutputType | null
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
    username?: boolean
    is_public?: boolean
    password_hash?: boolean
    profile_picture_url?: boolean
    created_at?: boolean
    movies?: boolean | User$moviesArgs<ExtArgs>
    books?: boolean | User$booksArgs<ExtArgs>
    series?: boolean | User$seriesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    username?: boolean
    is_public?: boolean
    password_hash?: boolean
    profile_picture_url?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    username?: boolean
    is_public?: boolean
    password_hash?: boolean
    profile_picture_url?: boolean
    created_at?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    movies?: boolean | User$moviesArgs<ExtArgs>
    books?: boolean | User$booksArgs<ExtArgs>
    series?: boolean | User$seriesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      movies: Prisma.$MoviePayload<ExtArgs>[]
      books: Prisma.$BookPayload<ExtArgs>[]
      series: Prisma.$SeriesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      username: string | null
      is_public: boolean
      password_hash: string
      profile_picture_url: string | null
      created_at: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
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
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

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
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

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
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

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
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

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
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany">>

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
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create">, never, ExtArgs>

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
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn">>

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
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete">, never, ExtArgs>

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
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update">, never, ExtArgs>

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
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


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
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    movies<T extends User$moviesArgs<ExtArgs> = {}>(args?: Subset<T, User$moviesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, "findMany"> | Null>
    books<T extends User$booksArgs<ExtArgs> = {}>(args?: Subset<T, User$booksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findMany"> | Null>
    series<T extends User$seriesArgs<ExtArgs> = {}>(args?: Subset<T, User$seriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SeriesPayload<ExtArgs>, T, "findMany"> | Null>
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
    readonly username: FieldRef<"User", 'String'>
    readonly is_public: FieldRef<"User", 'Boolean'>
    readonly password_hash: FieldRef<"User", 'String'>
    readonly profile_picture_url: FieldRef<"User", 'String'>
    readonly created_at: FieldRef<"User", 'DateTime'>
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
  }

  /**
   * User.movies
   */
  export type User$moviesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie
     */
    select?: MovieSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieInclude<ExtArgs> | null
    where?: MovieWhereInput
    orderBy?: MovieOrderByWithRelationInput | MovieOrderByWithRelationInput[]
    cursor?: MovieWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MovieScalarFieldEnum | MovieScalarFieldEnum[]
  }

  /**
   * User.books
   */
  export type User$booksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    where?: BookWhereInput
    orderBy?: BookOrderByWithRelationInput | BookOrderByWithRelationInput[]
    cursor?: BookWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookScalarFieldEnum | BookScalarFieldEnum[]
  }

  /**
   * User.series
   */
  export type User$seriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Series
     */
    select?: SeriesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeriesInclude<ExtArgs> | null
    where?: SeriesWhereInput
    orderBy?: SeriesOrderByWithRelationInput | SeriesOrderByWithRelationInput[]
    cursor?: SeriesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SeriesScalarFieldEnum | SeriesScalarFieldEnum[]
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Category
   */

  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryAvgAggregateOutputType = {
    id: number | null
  }

  export type CategorySumAggregateOutputType = {
    id: number | null
  }

  export type CategoryMinAggregateOutputType = {
    id: number | null
    name: string | null
    type: $Enums.CategoryType | null
  }

  export type CategoryMaxAggregateOutputType = {
    id: number | null
    name: string | null
    type: $Enums.CategoryType | null
  }

  export type CategoryCountAggregateOutputType = {
    id: number
    name: number
    type: number
    _all: number
  }


  export type CategoryAvgAggregateInputType = {
    id?: true
  }

  export type CategorySumAggregateInputType = {
    id?: true
  }

  export type CategoryMinAggregateInputType = {
    id?: true
    name?: true
    type?: true
  }

  export type CategoryMaxAggregateInputType = {
    id?: true
    name?: true
    type?: true
  }

  export type CategoryCountAggregateInputType = {
    id?: true
    name?: true
    type?: true
    _all?: true
  }

  export type CategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Category to aggregate.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }




  export type CategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithAggregationInput | CategoryOrderByWithAggregationInput[]
    by: CategoryScalarFieldEnum[] | CategoryScalarFieldEnum
    having?: CategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _avg?: CategoryAvgAggregateInputType
    _sum?: CategorySumAggregateInputType
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }

  export type CategoryGroupByOutputType = {
    id: number
    name: string
    type: $Enums.CategoryType
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends CategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      >
    >


  export type CategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    movies?: boolean | Category$moviesArgs<ExtArgs>
    books?: boolean | Category$booksArgs<ExtArgs>
    series?: boolean | Category$seriesArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
  }, ExtArgs["result"]["category"]>

  export type CategorySelectScalar = {
    id?: boolean
    name?: boolean
    type?: boolean
  }

  export type CategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    movies?: boolean | Category$moviesArgs<ExtArgs>
    books?: boolean | Category$booksArgs<ExtArgs>
    series?: boolean | Category$seriesArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Category"
    objects: {
      movies: Prisma.$MoviePayload<ExtArgs>[]
      books: Prisma.$BookPayload<ExtArgs>[]
      series: Prisma.$SeriesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      type: $Enums.CategoryType
    }, ExtArgs["result"]["category"]>
    composites: {}
  }

  type CategoryGetPayload<S extends boolean | null | undefined | CategoryDefaultArgs> = $Result.GetResult<Prisma.$CategoryPayload, S>

  type CategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CategoryFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CategoryCountAggregateInputType | true
    }

  export interface CategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Category'], meta: { name: 'Category' } }
    /**
     * Find zero or one Category that matches the filter.
     * @param {CategoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoryFindUniqueArgs>(args: SelectSubset<T, CategoryFindUniqueArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Category that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CategoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoryFindFirstArgs>(args?: SelectSubset<T, CategoryFindFirstArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoryWithIdOnly = await prisma.category.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategoryFindManyArgs>(args?: SelectSubset<T, CategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Category.
     * @param {CategoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
     */
    create<T extends CategoryCreateArgs>(args: SelectSubset<T, CategoryCreateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Categories.
     * @param {CategoryCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoryCreateManyArgs>(args?: SelectSubset<T, CategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categories and returns the data saved in the database.
     * @param {CategoryCreateManyAndReturnArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, CategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Category.
     * @param {CategoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
     */
    delete<T extends CategoryDeleteArgs>(args: SelectSubset<T, CategoryDeleteArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Category.
     * @param {CategoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoryUpdateArgs>(args: SelectSubset<T, CategoryUpdateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Categories.
     * @param {CategoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoryDeleteManyArgs>(args?: SelectSubset<T, CategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoryUpdateManyArgs>(args: SelectSubset<T, CategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Category.
     * @param {CategoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
     */
    upsert<T extends CategoryUpsertArgs>(args: SelectSubset<T, CategoryUpsertArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoryCountArgs>(
      args?: Subset<T, CategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): Prisma.PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryGroupByArgs} args - Group by arguments.
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
      T extends CategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryGroupByArgs['orderBy'] }
        : { orderBy?: CategoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Category model
   */
  readonly fields: CategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    movies<T extends Category$moviesArgs<ExtArgs> = {}>(args?: Subset<T, Category$moviesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, "findMany"> | Null>
    books<T extends Category$booksArgs<ExtArgs> = {}>(args?: Subset<T, Category$booksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findMany"> | Null>
    series<T extends Category$seriesArgs<ExtArgs> = {}>(args?: Subset<T, Category$seriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SeriesPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Category model
   */ 
  interface CategoryFieldRefs {
    readonly id: FieldRef<"Category", 'Int'>
    readonly name: FieldRef<"Category", 'String'>
    readonly type: FieldRef<"Category", 'CategoryType'>
  }
    

  // Custom InputTypes
  /**
   * Category findUnique
   */
  export type CategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findUniqueOrThrow
   */
  export type CategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findFirst
   */
  export type CategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findFirstOrThrow
   */
  export type CategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findMany
   */
  export type CategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category create
   */
  export type CategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Category.
     */
    data: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
  }

  /**
   * Category createMany
   */
  export type CategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Category createManyAndReturn
   */
  export type CategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Category update
   */
  export type CategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Category.
     */
    data: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
    /**
     * Choose, which Category to update.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category updateMany
   */
  export type CategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
  }

  /**
   * Category upsert
   */
  export type CategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Category to update in case it exists.
     */
    where: CategoryWhereUniqueInput
    /**
     * In case the Category found by the `where` argument doesn't exist, create a new Category with this data.
     */
    create: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
    /**
     * In case the Category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
  }

  /**
   * Category delete
   */
  export type CategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter which Category to delete.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category deleteMany
   */
  export type CategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoryWhereInput
  }

  /**
   * Category.movies
   */
  export type Category$moviesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie
     */
    select?: MovieSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieInclude<ExtArgs> | null
    where?: MovieWhereInput
    orderBy?: MovieOrderByWithRelationInput | MovieOrderByWithRelationInput[]
    cursor?: MovieWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MovieScalarFieldEnum | MovieScalarFieldEnum[]
  }

  /**
   * Category.books
   */
  export type Category$booksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    where?: BookWhereInput
    orderBy?: BookOrderByWithRelationInput | BookOrderByWithRelationInput[]
    cursor?: BookWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookScalarFieldEnum | BookScalarFieldEnum[]
  }

  /**
   * Category.series
   */
  export type Category$seriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Series
     */
    select?: SeriesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeriesInclude<ExtArgs> | null
    where?: SeriesWhereInput
    orderBy?: SeriesOrderByWithRelationInput | SeriesOrderByWithRelationInput[]
    cursor?: SeriesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SeriesScalarFieldEnum | SeriesScalarFieldEnum[]
  }

  /**
   * Category without action
   */
  export type CategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
  }


  /**
   * Model Movie
   */

  export type AggregateMovie = {
    _count: MovieCountAggregateOutputType | null
    _avg: MovieAvgAggregateOutputType | null
    _sum: MovieSumAggregateOutputType | null
    _min: MovieMinAggregateOutputType | null
    _max: MovieMaxAggregateOutputType | null
  }

  export type MovieAvgAggregateOutputType = {
    release_year: number | null
    category_id: number | null
  }

  export type MovieSumAggregateOutputType = {
    release_year: number | null
    category_id: number | null
  }

  export type MovieMinAggregateOutputType = {
    id: string | null
    user_id: string | null
    title: string | null
    release_year: number | null
    director: string | null
    category_id: number | null
    poster_url: string | null
    status: $Enums.MovieStatus | null
    watched_at: Date | null
    created_at: Date | null
  }

  export type MovieMaxAggregateOutputType = {
    id: string | null
    user_id: string | null
    title: string | null
    release_year: number | null
    director: string | null
    category_id: number | null
    poster_url: string | null
    status: $Enums.MovieStatus | null
    watched_at: Date | null
    created_at: Date | null
  }

  export type MovieCountAggregateOutputType = {
    id: number
    user_id: number
    title: number
    release_year: number
    director: number
    category_id: number
    poster_url: number
    status: number
    watched_at: number
    created_at: number
    _all: number
  }


  export type MovieAvgAggregateInputType = {
    release_year?: true
    category_id?: true
  }

  export type MovieSumAggregateInputType = {
    release_year?: true
    category_id?: true
  }

  export type MovieMinAggregateInputType = {
    id?: true
    user_id?: true
    title?: true
    release_year?: true
    director?: true
    category_id?: true
    poster_url?: true
    status?: true
    watched_at?: true
    created_at?: true
  }

  export type MovieMaxAggregateInputType = {
    id?: true
    user_id?: true
    title?: true
    release_year?: true
    director?: true
    category_id?: true
    poster_url?: true
    status?: true
    watched_at?: true
    created_at?: true
  }

  export type MovieCountAggregateInputType = {
    id?: true
    user_id?: true
    title?: true
    release_year?: true
    director?: true
    category_id?: true
    poster_url?: true
    status?: true
    watched_at?: true
    created_at?: true
    _all?: true
  }

  export type MovieAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Movie to aggregate.
     */
    where?: MovieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Movies to fetch.
     */
    orderBy?: MovieOrderByWithRelationInput | MovieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MovieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Movies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Movies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Movies
    **/
    _count?: true | MovieCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MovieAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MovieSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MovieMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MovieMaxAggregateInputType
  }

  export type GetMovieAggregateType<T extends MovieAggregateArgs> = {
        [P in keyof T & keyof AggregateMovie]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMovie[P]>
      : GetScalarType<T[P], AggregateMovie[P]>
  }




  export type MovieGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MovieWhereInput
    orderBy?: MovieOrderByWithAggregationInput | MovieOrderByWithAggregationInput[]
    by: MovieScalarFieldEnum[] | MovieScalarFieldEnum
    having?: MovieScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MovieCountAggregateInputType | true
    _avg?: MovieAvgAggregateInputType
    _sum?: MovieSumAggregateInputType
    _min?: MovieMinAggregateInputType
    _max?: MovieMaxAggregateInputType
  }

  export type MovieGroupByOutputType = {
    id: string
    user_id: string
    title: string
    release_year: number | null
    director: string | null
    category_id: number | null
    poster_url: string | null
    status: $Enums.MovieStatus | null
    watched_at: Date | null
    created_at: Date
    _count: MovieCountAggregateOutputType | null
    _avg: MovieAvgAggregateOutputType | null
    _sum: MovieSumAggregateOutputType | null
    _min: MovieMinAggregateOutputType | null
    _max: MovieMaxAggregateOutputType | null
  }

  type GetMovieGroupByPayload<T extends MovieGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MovieGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MovieGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MovieGroupByOutputType[P]>
            : GetScalarType<T[P], MovieGroupByOutputType[P]>
        }
      >
    >


  export type MovieSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    title?: boolean
    release_year?: boolean
    director?: boolean
    category_id?: boolean
    poster_url?: boolean
    status?: boolean
    watched_at?: boolean
    created_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    category?: boolean | Movie$categoryArgs<ExtArgs>
  }, ExtArgs["result"]["movie"]>

  export type MovieSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    title?: boolean
    release_year?: boolean
    director?: boolean
    category_id?: boolean
    poster_url?: boolean
    status?: boolean
    watched_at?: boolean
    created_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    category?: boolean | Movie$categoryArgs<ExtArgs>
  }, ExtArgs["result"]["movie"]>

  export type MovieSelectScalar = {
    id?: boolean
    user_id?: boolean
    title?: boolean
    release_year?: boolean
    director?: boolean
    category_id?: boolean
    poster_url?: boolean
    status?: boolean
    watched_at?: boolean
    created_at?: boolean
  }

  export type MovieInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    category?: boolean | Movie$categoryArgs<ExtArgs>
  }
  export type MovieIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    category?: boolean | Movie$categoryArgs<ExtArgs>
  }

  export type $MoviePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Movie"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      category: Prisma.$CategoryPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      user_id: string
      title: string
      release_year: number | null
      director: string | null
      category_id: number | null
      poster_url: string | null
      status: $Enums.MovieStatus | null
      watched_at: Date | null
      created_at: Date
    }, ExtArgs["result"]["movie"]>
    composites: {}
  }

  type MovieGetPayload<S extends boolean | null | undefined | MovieDefaultArgs> = $Result.GetResult<Prisma.$MoviePayload, S>

  type MovieCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<MovieFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: MovieCountAggregateInputType | true
    }

  export interface MovieDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Movie'], meta: { name: 'Movie' } }
    /**
     * Find zero or one Movie that matches the filter.
     * @param {MovieFindUniqueArgs} args - Arguments to find a Movie
     * @example
     * // Get one Movie
     * const movie = await prisma.movie.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MovieFindUniqueArgs>(args: SelectSubset<T, MovieFindUniqueArgs<ExtArgs>>): Prisma__MovieClient<$Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Movie that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {MovieFindUniqueOrThrowArgs} args - Arguments to find a Movie
     * @example
     * // Get one Movie
     * const movie = await prisma.movie.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MovieFindUniqueOrThrowArgs>(args: SelectSubset<T, MovieFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MovieClient<$Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Movie that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieFindFirstArgs} args - Arguments to find a Movie
     * @example
     * // Get one Movie
     * const movie = await prisma.movie.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MovieFindFirstArgs>(args?: SelectSubset<T, MovieFindFirstArgs<ExtArgs>>): Prisma__MovieClient<$Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Movie that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieFindFirstOrThrowArgs} args - Arguments to find a Movie
     * @example
     * // Get one Movie
     * const movie = await prisma.movie.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MovieFindFirstOrThrowArgs>(args?: SelectSubset<T, MovieFindFirstOrThrowArgs<ExtArgs>>): Prisma__MovieClient<$Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Movies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Movies
     * const movies = await prisma.movie.findMany()
     * 
     * // Get first 10 Movies
     * const movies = await prisma.movie.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const movieWithIdOnly = await prisma.movie.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MovieFindManyArgs>(args?: SelectSubset<T, MovieFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Movie.
     * @param {MovieCreateArgs} args - Arguments to create a Movie.
     * @example
     * // Create one Movie
     * const Movie = await prisma.movie.create({
     *   data: {
     *     // ... data to create a Movie
     *   }
     * })
     * 
     */
    create<T extends MovieCreateArgs>(args: SelectSubset<T, MovieCreateArgs<ExtArgs>>): Prisma__MovieClient<$Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Movies.
     * @param {MovieCreateManyArgs} args - Arguments to create many Movies.
     * @example
     * // Create many Movies
     * const movie = await prisma.movie.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MovieCreateManyArgs>(args?: SelectSubset<T, MovieCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Movies and returns the data saved in the database.
     * @param {MovieCreateManyAndReturnArgs} args - Arguments to create many Movies.
     * @example
     * // Create many Movies
     * const movie = await prisma.movie.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Movies and only return the `id`
     * const movieWithIdOnly = await prisma.movie.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MovieCreateManyAndReturnArgs>(args?: SelectSubset<T, MovieCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Movie.
     * @param {MovieDeleteArgs} args - Arguments to delete one Movie.
     * @example
     * // Delete one Movie
     * const Movie = await prisma.movie.delete({
     *   where: {
     *     // ... filter to delete one Movie
     *   }
     * })
     * 
     */
    delete<T extends MovieDeleteArgs>(args: SelectSubset<T, MovieDeleteArgs<ExtArgs>>): Prisma__MovieClient<$Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Movie.
     * @param {MovieUpdateArgs} args - Arguments to update one Movie.
     * @example
     * // Update one Movie
     * const movie = await prisma.movie.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MovieUpdateArgs>(args: SelectSubset<T, MovieUpdateArgs<ExtArgs>>): Prisma__MovieClient<$Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Movies.
     * @param {MovieDeleteManyArgs} args - Arguments to filter Movies to delete.
     * @example
     * // Delete a few Movies
     * const { count } = await prisma.movie.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MovieDeleteManyArgs>(args?: SelectSubset<T, MovieDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Movies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Movies
     * const movie = await prisma.movie.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MovieUpdateManyArgs>(args: SelectSubset<T, MovieUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Movie.
     * @param {MovieUpsertArgs} args - Arguments to update or create a Movie.
     * @example
     * // Update or create a Movie
     * const movie = await prisma.movie.upsert({
     *   create: {
     *     // ... data to create a Movie
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Movie we want to update
     *   }
     * })
     */
    upsert<T extends MovieUpsertArgs>(args: SelectSubset<T, MovieUpsertArgs<ExtArgs>>): Prisma__MovieClient<$Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Movies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieCountArgs} args - Arguments to filter Movies to count.
     * @example
     * // Count the number of Movies
     * const count = await prisma.movie.count({
     *   where: {
     *     // ... the filter for the Movies we want to count
     *   }
     * })
    **/
    count<T extends MovieCountArgs>(
      args?: Subset<T, MovieCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MovieCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Movie.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MovieAggregateArgs>(args: Subset<T, MovieAggregateArgs>): Prisma.PrismaPromise<GetMovieAggregateType<T>>

    /**
     * Group by Movie.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieGroupByArgs} args - Group by arguments.
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
      T extends MovieGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MovieGroupByArgs['orderBy'] }
        : { orderBy?: MovieGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MovieGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMovieGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Movie model
   */
  readonly fields: MovieFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Movie.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MovieClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    category<T extends Movie$categoryArgs<ExtArgs> = {}>(args?: Subset<T, Movie$categoryArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
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
   * Fields of the Movie model
   */ 
  interface MovieFieldRefs {
    readonly id: FieldRef<"Movie", 'String'>
    readonly user_id: FieldRef<"Movie", 'String'>
    readonly title: FieldRef<"Movie", 'String'>
    readonly release_year: FieldRef<"Movie", 'Int'>
    readonly director: FieldRef<"Movie", 'String'>
    readonly category_id: FieldRef<"Movie", 'Int'>
    readonly poster_url: FieldRef<"Movie", 'String'>
    readonly status: FieldRef<"Movie", 'MovieStatus'>
    readonly watched_at: FieldRef<"Movie", 'DateTime'>
    readonly created_at: FieldRef<"Movie", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Movie findUnique
   */
  export type MovieFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie
     */
    select?: MovieSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieInclude<ExtArgs> | null
    /**
     * Filter, which Movie to fetch.
     */
    where: MovieWhereUniqueInput
  }

  /**
   * Movie findUniqueOrThrow
   */
  export type MovieFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie
     */
    select?: MovieSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieInclude<ExtArgs> | null
    /**
     * Filter, which Movie to fetch.
     */
    where: MovieWhereUniqueInput
  }

  /**
   * Movie findFirst
   */
  export type MovieFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie
     */
    select?: MovieSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieInclude<ExtArgs> | null
    /**
     * Filter, which Movie to fetch.
     */
    where?: MovieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Movies to fetch.
     */
    orderBy?: MovieOrderByWithRelationInput | MovieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Movies.
     */
    cursor?: MovieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Movies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Movies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Movies.
     */
    distinct?: MovieScalarFieldEnum | MovieScalarFieldEnum[]
  }

  /**
   * Movie findFirstOrThrow
   */
  export type MovieFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie
     */
    select?: MovieSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieInclude<ExtArgs> | null
    /**
     * Filter, which Movie to fetch.
     */
    where?: MovieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Movies to fetch.
     */
    orderBy?: MovieOrderByWithRelationInput | MovieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Movies.
     */
    cursor?: MovieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Movies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Movies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Movies.
     */
    distinct?: MovieScalarFieldEnum | MovieScalarFieldEnum[]
  }

  /**
   * Movie findMany
   */
  export type MovieFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie
     */
    select?: MovieSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieInclude<ExtArgs> | null
    /**
     * Filter, which Movies to fetch.
     */
    where?: MovieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Movies to fetch.
     */
    orderBy?: MovieOrderByWithRelationInput | MovieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Movies.
     */
    cursor?: MovieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Movies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Movies.
     */
    skip?: number
    distinct?: MovieScalarFieldEnum | MovieScalarFieldEnum[]
  }

  /**
   * Movie create
   */
  export type MovieCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie
     */
    select?: MovieSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieInclude<ExtArgs> | null
    /**
     * The data needed to create a Movie.
     */
    data: XOR<MovieCreateInput, MovieUncheckedCreateInput>
  }

  /**
   * Movie createMany
   */
  export type MovieCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Movies.
     */
    data: MovieCreateManyInput | MovieCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Movie createManyAndReturn
   */
  export type MovieCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie
     */
    select?: MovieSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Movies.
     */
    data: MovieCreateManyInput | MovieCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Movie update
   */
  export type MovieUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie
     */
    select?: MovieSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieInclude<ExtArgs> | null
    /**
     * The data needed to update a Movie.
     */
    data: XOR<MovieUpdateInput, MovieUncheckedUpdateInput>
    /**
     * Choose, which Movie to update.
     */
    where: MovieWhereUniqueInput
  }

  /**
   * Movie updateMany
   */
  export type MovieUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Movies.
     */
    data: XOR<MovieUpdateManyMutationInput, MovieUncheckedUpdateManyInput>
    /**
     * Filter which Movies to update
     */
    where?: MovieWhereInput
  }

  /**
   * Movie upsert
   */
  export type MovieUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie
     */
    select?: MovieSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieInclude<ExtArgs> | null
    /**
     * The filter to search for the Movie to update in case it exists.
     */
    where: MovieWhereUniqueInput
    /**
     * In case the Movie found by the `where` argument doesn't exist, create a new Movie with this data.
     */
    create: XOR<MovieCreateInput, MovieUncheckedCreateInput>
    /**
     * In case the Movie was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MovieUpdateInput, MovieUncheckedUpdateInput>
  }

  /**
   * Movie delete
   */
  export type MovieDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie
     */
    select?: MovieSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieInclude<ExtArgs> | null
    /**
     * Filter which Movie to delete.
     */
    where: MovieWhereUniqueInput
  }

  /**
   * Movie deleteMany
   */
  export type MovieDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Movies to delete
     */
    where?: MovieWhereInput
  }

  /**
   * Movie.category
   */
  export type Movie$categoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    where?: CategoryWhereInput
  }

  /**
   * Movie without action
   */
  export type MovieDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie
     */
    select?: MovieSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieInclude<ExtArgs> | null
  }


  /**
   * Model Book
   */

  export type AggregateBook = {
    _count: BookCountAggregateOutputType | null
    _avg: BookAvgAggregateOutputType | null
    _sum: BookSumAggregateOutputType | null
    _min: BookMinAggregateOutputType | null
    _max: BookMaxAggregateOutputType | null
  }

  export type BookAvgAggregateOutputType = {
    release_year: number | null
    category_id: number | null
  }

  export type BookSumAggregateOutputType = {
    release_year: number | null
    category_id: number | null
  }

  export type BookMinAggregateOutputType = {
    id: string | null
    user_id: string | null
    title: string | null
    release_year: number | null
    author: string | null
    category_id: number | null
    cover_url: string | null
    status: $Enums.BookStatus | null
    started_reading_at: Date | null
    finished_reading_at: Date | null
    created_at: Date | null
  }

  export type BookMaxAggregateOutputType = {
    id: string | null
    user_id: string | null
    title: string | null
    release_year: number | null
    author: string | null
    category_id: number | null
    cover_url: string | null
    status: $Enums.BookStatus | null
    started_reading_at: Date | null
    finished_reading_at: Date | null
    created_at: Date | null
  }

  export type BookCountAggregateOutputType = {
    id: number
    user_id: number
    title: number
    release_year: number
    author: number
    category_id: number
    cover_url: number
    status: number
    started_reading_at: number
    finished_reading_at: number
    created_at: number
    _all: number
  }


  export type BookAvgAggregateInputType = {
    release_year?: true
    category_id?: true
  }

  export type BookSumAggregateInputType = {
    release_year?: true
    category_id?: true
  }

  export type BookMinAggregateInputType = {
    id?: true
    user_id?: true
    title?: true
    release_year?: true
    author?: true
    category_id?: true
    cover_url?: true
    status?: true
    started_reading_at?: true
    finished_reading_at?: true
    created_at?: true
  }

  export type BookMaxAggregateInputType = {
    id?: true
    user_id?: true
    title?: true
    release_year?: true
    author?: true
    category_id?: true
    cover_url?: true
    status?: true
    started_reading_at?: true
    finished_reading_at?: true
    created_at?: true
  }

  export type BookCountAggregateInputType = {
    id?: true
    user_id?: true
    title?: true
    release_year?: true
    author?: true
    category_id?: true
    cover_url?: true
    status?: true
    started_reading_at?: true
    finished_reading_at?: true
    created_at?: true
    _all?: true
  }

  export type BookAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Book to aggregate.
     */
    where?: BookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Books to fetch.
     */
    orderBy?: BookOrderByWithRelationInput | BookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Books from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Books.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Books
    **/
    _count?: true | BookCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BookAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BookSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BookMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BookMaxAggregateInputType
  }

  export type GetBookAggregateType<T extends BookAggregateArgs> = {
        [P in keyof T & keyof AggregateBook]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBook[P]>
      : GetScalarType<T[P], AggregateBook[P]>
  }




  export type BookGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookWhereInput
    orderBy?: BookOrderByWithAggregationInput | BookOrderByWithAggregationInput[]
    by: BookScalarFieldEnum[] | BookScalarFieldEnum
    having?: BookScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BookCountAggregateInputType | true
    _avg?: BookAvgAggregateInputType
    _sum?: BookSumAggregateInputType
    _min?: BookMinAggregateInputType
    _max?: BookMaxAggregateInputType
  }

  export type BookGroupByOutputType = {
    id: string
    user_id: string
    title: string
    release_year: number | null
    author: string | null
    category_id: number | null
    cover_url: string | null
    status: $Enums.BookStatus | null
    started_reading_at: Date | null
    finished_reading_at: Date | null
    created_at: Date
    _count: BookCountAggregateOutputType | null
    _avg: BookAvgAggregateOutputType | null
    _sum: BookSumAggregateOutputType | null
    _min: BookMinAggregateOutputType | null
    _max: BookMaxAggregateOutputType | null
  }

  type GetBookGroupByPayload<T extends BookGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BookGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BookGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BookGroupByOutputType[P]>
            : GetScalarType<T[P], BookGroupByOutputType[P]>
        }
      >
    >


  export type BookSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    title?: boolean
    release_year?: boolean
    author?: boolean
    category_id?: boolean
    cover_url?: boolean
    status?: boolean
    started_reading_at?: boolean
    finished_reading_at?: boolean
    created_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    category?: boolean | Book$categoryArgs<ExtArgs>
  }, ExtArgs["result"]["book"]>

  export type BookSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    title?: boolean
    release_year?: boolean
    author?: boolean
    category_id?: boolean
    cover_url?: boolean
    status?: boolean
    started_reading_at?: boolean
    finished_reading_at?: boolean
    created_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    category?: boolean | Book$categoryArgs<ExtArgs>
  }, ExtArgs["result"]["book"]>

  export type BookSelectScalar = {
    id?: boolean
    user_id?: boolean
    title?: boolean
    release_year?: boolean
    author?: boolean
    category_id?: boolean
    cover_url?: boolean
    status?: boolean
    started_reading_at?: boolean
    finished_reading_at?: boolean
    created_at?: boolean
  }

  export type BookInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    category?: boolean | Book$categoryArgs<ExtArgs>
  }
  export type BookIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    category?: boolean | Book$categoryArgs<ExtArgs>
  }

  export type $BookPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Book"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      category: Prisma.$CategoryPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      user_id: string
      title: string
      release_year: number | null
      author: string | null
      category_id: number | null
      cover_url: string | null
      status: $Enums.BookStatus | null
      started_reading_at: Date | null
      finished_reading_at: Date | null
      created_at: Date
    }, ExtArgs["result"]["book"]>
    composites: {}
  }

  type BookGetPayload<S extends boolean | null | undefined | BookDefaultArgs> = $Result.GetResult<Prisma.$BookPayload, S>

  type BookCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<BookFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: BookCountAggregateInputType | true
    }

  export interface BookDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Book'], meta: { name: 'Book' } }
    /**
     * Find zero or one Book that matches the filter.
     * @param {BookFindUniqueArgs} args - Arguments to find a Book
     * @example
     * // Get one Book
     * const book = await prisma.book.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BookFindUniqueArgs>(args: SelectSubset<T, BookFindUniqueArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Book that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {BookFindUniqueOrThrowArgs} args - Arguments to find a Book
     * @example
     * // Get one Book
     * const book = await prisma.book.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BookFindUniqueOrThrowArgs>(args: SelectSubset<T, BookFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Book that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookFindFirstArgs} args - Arguments to find a Book
     * @example
     * // Get one Book
     * const book = await prisma.book.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BookFindFirstArgs>(args?: SelectSubset<T, BookFindFirstArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Book that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookFindFirstOrThrowArgs} args - Arguments to find a Book
     * @example
     * // Get one Book
     * const book = await prisma.book.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BookFindFirstOrThrowArgs>(args?: SelectSubset<T, BookFindFirstOrThrowArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Books that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Books
     * const books = await prisma.book.findMany()
     * 
     * // Get first 10 Books
     * const books = await prisma.book.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bookWithIdOnly = await prisma.book.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BookFindManyArgs>(args?: SelectSubset<T, BookFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Book.
     * @param {BookCreateArgs} args - Arguments to create a Book.
     * @example
     * // Create one Book
     * const Book = await prisma.book.create({
     *   data: {
     *     // ... data to create a Book
     *   }
     * })
     * 
     */
    create<T extends BookCreateArgs>(args: SelectSubset<T, BookCreateArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Books.
     * @param {BookCreateManyArgs} args - Arguments to create many Books.
     * @example
     * // Create many Books
     * const book = await prisma.book.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BookCreateManyArgs>(args?: SelectSubset<T, BookCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Books and returns the data saved in the database.
     * @param {BookCreateManyAndReturnArgs} args - Arguments to create many Books.
     * @example
     * // Create many Books
     * const book = await prisma.book.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Books and only return the `id`
     * const bookWithIdOnly = await prisma.book.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BookCreateManyAndReturnArgs>(args?: SelectSubset<T, BookCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Book.
     * @param {BookDeleteArgs} args - Arguments to delete one Book.
     * @example
     * // Delete one Book
     * const Book = await prisma.book.delete({
     *   where: {
     *     // ... filter to delete one Book
     *   }
     * })
     * 
     */
    delete<T extends BookDeleteArgs>(args: SelectSubset<T, BookDeleteArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Book.
     * @param {BookUpdateArgs} args - Arguments to update one Book.
     * @example
     * // Update one Book
     * const book = await prisma.book.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BookUpdateArgs>(args: SelectSubset<T, BookUpdateArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Books.
     * @param {BookDeleteManyArgs} args - Arguments to filter Books to delete.
     * @example
     * // Delete a few Books
     * const { count } = await prisma.book.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BookDeleteManyArgs>(args?: SelectSubset<T, BookDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Books.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Books
     * const book = await prisma.book.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BookUpdateManyArgs>(args: SelectSubset<T, BookUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Book.
     * @param {BookUpsertArgs} args - Arguments to update or create a Book.
     * @example
     * // Update or create a Book
     * const book = await prisma.book.upsert({
     *   create: {
     *     // ... data to create a Book
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Book we want to update
     *   }
     * })
     */
    upsert<T extends BookUpsertArgs>(args: SelectSubset<T, BookUpsertArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Books.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookCountArgs} args - Arguments to filter Books to count.
     * @example
     * // Count the number of Books
     * const count = await prisma.book.count({
     *   where: {
     *     // ... the filter for the Books we want to count
     *   }
     * })
    **/
    count<T extends BookCountArgs>(
      args?: Subset<T, BookCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BookCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Book.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BookAggregateArgs>(args: Subset<T, BookAggregateArgs>): Prisma.PrismaPromise<GetBookAggregateType<T>>

    /**
     * Group by Book.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookGroupByArgs} args - Group by arguments.
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
      T extends BookGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BookGroupByArgs['orderBy'] }
        : { orderBy?: BookGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BookGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBookGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Book model
   */
  readonly fields: BookFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Book.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BookClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    category<T extends Book$categoryArgs<ExtArgs> = {}>(args?: Subset<T, Book$categoryArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
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
   * Fields of the Book model
   */ 
  interface BookFieldRefs {
    readonly id: FieldRef<"Book", 'String'>
    readonly user_id: FieldRef<"Book", 'String'>
    readonly title: FieldRef<"Book", 'String'>
    readonly release_year: FieldRef<"Book", 'Int'>
    readonly author: FieldRef<"Book", 'String'>
    readonly category_id: FieldRef<"Book", 'Int'>
    readonly cover_url: FieldRef<"Book", 'String'>
    readonly status: FieldRef<"Book", 'BookStatus'>
    readonly started_reading_at: FieldRef<"Book", 'DateTime'>
    readonly finished_reading_at: FieldRef<"Book", 'DateTime'>
    readonly created_at: FieldRef<"Book", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Book findUnique
   */
  export type BookFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * Filter, which Book to fetch.
     */
    where: BookWhereUniqueInput
  }

  /**
   * Book findUniqueOrThrow
   */
  export type BookFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * Filter, which Book to fetch.
     */
    where: BookWhereUniqueInput
  }

  /**
   * Book findFirst
   */
  export type BookFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * Filter, which Book to fetch.
     */
    where?: BookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Books to fetch.
     */
    orderBy?: BookOrderByWithRelationInput | BookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Books.
     */
    cursor?: BookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Books from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Books.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Books.
     */
    distinct?: BookScalarFieldEnum | BookScalarFieldEnum[]
  }

  /**
   * Book findFirstOrThrow
   */
  export type BookFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * Filter, which Book to fetch.
     */
    where?: BookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Books to fetch.
     */
    orderBy?: BookOrderByWithRelationInput | BookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Books.
     */
    cursor?: BookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Books from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Books.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Books.
     */
    distinct?: BookScalarFieldEnum | BookScalarFieldEnum[]
  }

  /**
   * Book findMany
   */
  export type BookFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * Filter, which Books to fetch.
     */
    where?: BookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Books to fetch.
     */
    orderBy?: BookOrderByWithRelationInput | BookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Books.
     */
    cursor?: BookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Books from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Books.
     */
    skip?: number
    distinct?: BookScalarFieldEnum | BookScalarFieldEnum[]
  }

  /**
   * Book create
   */
  export type BookCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * The data needed to create a Book.
     */
    data: XOR<BookCreateInput, BookUncheckedCreateInput>
  }

  /**
   * Book createMany
   */
  export type BookCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Books.
     */
    data: BookCreateManyInput | BookCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Book createManyAndReturn
   */
  export type BookCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Books.
     */
    data: BookCreateManyInput | BookCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Book update
   */
  export type BookUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * The data needed to update a Book.
     */
    data: XOR<BookUpdateInput, BookUncheckedUpdateInput>
    /**
     * Choose, which Book to update.
     */
    where: BookWhereUniqueInput
  }

  /**
   * Book updateMany
   */
  export type BookUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Books.
     */
    data: XOR<BookUpdateManyMutationInput, BookUncheckedUpdateManyInput>
    /**
     * Filter which Books to update
     */
    where?: BookWhereInput
  }

  /**
   * Book upsert
   */
  export type BookUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * The filter to search for the Book to update in case it exists.
     */
    where: BookWhereUniqueInput
    /**
     * In case the Book found by the `where` argument doesn't exist, create a new Book with this data.
     */
    create: XOR<BookCreateInput, BookUncheckedCreateInput>
    /**
     * In case the Book was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BookUpdateInput, BookUncheckedUpdateInput>
  }

  /**
   * Book delete
   */
  export type BookDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * Filter which Book to delete.
     */
    where: BookWhereUniqueInput
  }

  /**
   * Book deleteMany
   */
  export type BookDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Books to delete
     */
    where?: BookWhereInput
  }

  /**
   * Book.category
   */
  export type Book$categoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    where?: CategoryWhereInput
  }

  /**
   * Book without action
   */
  export type BookDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
  }


  /**
   * Model Series
   */

  export type AggregateSeries = {
    _count: SeriesCountAggregateOutputType | null
    _avg: SeriesAvgAggregateOutputType | null
    _sum: SeriesSumAggregateOutputType | null
    _min: SeriesMinAggregateOutputType | null
    _max: SeriesMaxAggregateOutputType | null
  }

  export type SeriesAvgAggregateOutputType = {
    release_year: number | null
    category_id: number | null
  }

  export type SeriesSumAggregateOutputType = {
    release_year: number | null
    category_id: number | null
  }

  export type SeriesMinAggregateOutputType = {
    id: string | null
    user_id: string | null
    title: string | null
    release_year: number | null
    category_id: number | null
    poster_url: string | null
    status: $Enums.SeriesStatus | null
    created_at: Date | null
  }

  export type SeriesMaxAggregateOutputType = {
    id: string | null
    user_id: string | null
    title: string | null
    release_year: number | null
    category_id: number | null
    poster_url: string | null
    status: $Enums.SeriesStatus | null
    created_at: Date | null
  }

  export type SeriesCountAggregateOutputType = {
    id: number
    user_id: number
    title: number
    release_year: number
    category_id: number
    poster_url: number
    status: number
    created_at: number
    _all: number
  }


  export type SeriesAvgAggregateInputType = {
    release_year?: true
    category_id?: true
  }

  export type SeriesSumAggregateInputType = {
    release_year?: true
    category_id?: true
  }

  export type SeriesMinAggregateInputType = {
    id?: true
    user_id?: true
    title?: true
    release_year?: true
    category_id?: true
    poster_url?: true
    status?: true
    created_at?: true
  }

  export type SeriesMaxAggregateInputType = {
    id?: true
    user_id?: true
    title?: true
    release_year?: true
    category_id?: true
    poster_url?: true
    status?: true
    created_at?: true
  }

  export type SeriesCountAggregateInputType = {
    id?: true
    user_id?: true
    title?: true
    release_year?: true
    category_id?: true
    poster_url?: true
    status?: true
    created_at?: true
    _all?: true
  }

  export type SeriesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Series to aggregate.
     */
    where?: SeriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Series to fetch.
     */
    orderBy?: SeriesOrderByWithRelationInput | SeriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SeriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Series from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Series.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Series
    **/
    _count?: true | SeriesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SeriesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SeriesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SeriesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SeriesMaxAggregateInputType
  }

  export type GetSeriesAggregateType<T extends SeriesAggregateArgs> = {
        [P in keyof T & keyof AggregateSeries]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSeries[P]>
      : GetScalarType<T[P], AggregateSeries[P]>
  }




  export type SeriesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SeriesWhereInput
    orderBy?: SeriesOrderByWithAggregationInput | SeriesOrderByWithAggregationInput[]
    by: SeriesScalarFieldEnum[] | SeriesScalarFieldEnum
    having?: SeriesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SeriesCountAggregateInputType | true
    _avg?: SeriesAvgAggregateInputType
    _sum?: SeriesSumAggregateInputType
    _min?: SeriesMinAggregateInputType
    _max?: SeriesMaxAggregateInputType
  }

  export type SeriesGroupByOutputType = {
    id: string
    user_id: string
    title: string
    release_year: number | null
    category_id: number | null
    poster_url: string | null
    status: $Enums.SeriesStatus | null
    created_at: Date
    _count: SeriesCountAggregateOutputType | null
    _avg: SeriesAvgAggregateOutputType | null
    _sum: SeriesSumAggregateOutputType | null
    _min: SeriesMinAggregateOutputType | null
    _max: SeriesMaxAggregateOutputType | null
  }

  type GetSeriesGroupByPayload<T extends SeriesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SeriesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SeriesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SeriesGroupByOutputType[P]>
            : GetScalarType<T[P], SeriesGroupByOutputType[P]>
        }
      >
    >


  export type SeriesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    title?: boolean
    release_year?: boolean
    category_id?: boolean
    poster_url?: boolean
    status?: boolean
    created_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    category?: boolean | Series$categoryArgs<ExtArgs>
  }, ExtArgs["result"]["series"]>

  export type SeriesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    title?: boolean
    release_year?: boolean
    category_id?: boolean
    poster_url?: boolean
    status?: boolean
    created_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    category?: boolean | Series$categoryArgs<ExtArgs>
  }, ExtArgs["result"]["series"]>

  export type SeriesSelectScalar = {
    id?: boolean
    user_id?: boolean
    title?: boolean
    release_year?: boolean
    category_id?: boolean
    poster_url?: boolean
    status?: boolean
    created_at?: boolean
  }

  export type SeriesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    category?: boolean | Series$categoryArgs<ExtArgs>
  }
  export type SeriesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    category?: boolean | Series$categoryArgs<ExtArgs>
  }

  export type $SeriesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Series"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      category: Prisma.$CategoryPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      user_id: string
      title: string
      release_year: number | null
      category_id: number | null
      poster_url: string | null
      status: $Enums.SeriesStatus | null
      created_at: Date
    }, ExtArgs["result"]["series"]>
    composites: {}
  }

  type SeriesGetPayload<S extends boolean | null | undefined | SeriesDefaultArgs> = $Result.GetResult<Prisma.$SeriesPayload, S>

  type SeriesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SeriesFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SeriesCountAggregateInputType | true
    }

  export interface SeriesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Series'], meta: { name: 'Series' } }
    /**
     * Find zero or one Series that matches the filter.
     * @param {SeriesFindUniqueArgs} args - Arguments to find a Series
     * @example
     * // Get one Series
     * const series = await prisma.series.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SeriesFindUniqueArgs>(args: SelectSubset<T, SeriesFindUniqueArgs<ExtArgs>>): Prisma__SeriesClient<$Result.GetResult<Prisma.$SeriesPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Series that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SeriesFindUniqueOrThrowArgs} args - Arguments to find a Series
     * @example
     * // Get one Series
     * const series = await prisma.series.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SeriesFindUniqueOrThrowArgs>(args: SelectSubset<T, SeriesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SeriesClient<$Result.GetResult<Prisma.$SeriesPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Series that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeriesFindFirstArgs} args - Arguments to find a Series
     * @example
     * // Get one Series
     * const series = await prisma.series.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SeriesFindFirstArgs>(args?: SelectSubset<T, SeriesFindFirstArgs<ExtArgs>>): Prisma__SeriesClient<$Result.GetResult<Prisma.$SeriesPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Series that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeriesFindFirstOrThrowArgs} args - Arguments to find a Series
     * @example
     * // Get one Series
     * const series = await prisma.series.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SeriesFindFirstOrThrowArgs>(args?: SelectSubset<T, SeriesFindFirstOrThrowArgs<ExtArgs>>): Prisma__SeriesClient<$Result.GetResult<Prisma.$SeriesPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Series that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeriesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Series
     * const series = await prisma.series.findMany()
     * 
     * // Get first 10 Series
     * const series = await prisma.series.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const seriesWithIdOnly = await prisma.series.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SeriesFindManyArgs>(args?: SelectSubset<T, SeriesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SeriesPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Series.
     * @param {SeriesCreateArgs} args - Arguments to create a Series.
     * @example
     * // Create one Series
     * const Series = await prisma.series.create({
     *   data: {
     *     // ... data to create a Series
     *   }
     * })
     * 
     */
    create<T extends SeriesCreateArgs>(args: SelectSubset<T, SeriesCreateArgs<ExtArgs>>): Prisma__SeriesClient<$Result.GetResult<Prisma.$SeriesPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Series.
     * @param {SeriesCreateManyArgs} args - Arguments to create many Series.
     * @example
     * // Create many Series
     * const series = await prisma.series.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SeriesCreateManyArgs>(args?: SelectSubset<T, SeriesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Series and returns the data saved in the database.
     * @param {SeriesCreateManyAndReturnArgs} args - Arguments to create many Series.
     * @example
     * // Create many Series
     * const series = await prisma.series.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Series and only return the `id`
     * const seriesWithIdOnly = await prisma.series.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SeriesCreateManyAndReturnArgs>(args?: SelectSubset<T, SeriesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SeriesPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Series.
     * @param {SeriesDeleteArgs} args - Arguments to delete one Series.
     * @example
     * // Delete one Series
     * const Series = await prisma.series.delete({
     *   where: {
     *     // ... filter to delete one Series
     *   }
     * })
     * 
     */
    delete<T extends SeriesDeleteArgs>(args: SelectSubset<T, SeriesDeleteArgs<ExtArgs>>): Prisma__SeriesClient<$Result.GetResult<Prisma.$SeriesPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Series.
     * @param {SeriesUpdateArgs} args - Arguments to update one Series.
     * @example
     * // Update one Series
     * const series = await prisma.series.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SeriesUpdateArgs>(args: SelectSubset<T, SeriesUpdateArgs<ExtArgs>>): Prisma__SeriesClient<$Result.GetResult<Prisma.$SeriesPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Series.
     * @param {SeriesDeleteManyArgs} args - Arguments to filter Series to delete.
     * @example
     * // Delete a few Series
     * const { count } = await prisma.series.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SeriesDeleteManyArgs>(args?: SelectSubset<T, SeriesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Series.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeriesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Series
     * const series = await prisma.series.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SeriesUpdateManyArgs>(args: SelectSubset<T, SeriesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Series.
     * @param {SeriesUpsertArgs} args - Arguments to update or create a Series.
     * @example
     * // Update or create a Series
     * const series = await prisma.series.upsert({
     *   create: {
     *     // ... data to create a Series
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Series we want to update
     *   }
     * })
     */
    upsert<T extends SeriesUpsertArgs>(args: SelectSubset<T, SeriesUpsertArgs<ExtArgs>>): Prisma__SeriesClient<$Result.GetResult<Prisma.$SeriesPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Series.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeriesCountArgs} args - Arguments to filter Series to count.
     * @example
     * // Count the number of Series
     * const count = await prisma.series.count({
     *   where: {
     *     // ... the filter for the Series we want to count
     *   }
     * })
    **/
    count<T extends SeriesCountArgs>(
      args?: Subset<T, SeriesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SeriesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Series.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeriesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SeriesAggregateArgs>(args: Subset<T, SeriesAggregateArgs>): Prisma.PrismaPromise<GetSeriesAggregateType<T>>

    /**
     * Group by Series.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeriesGroupByArgs} args - Group by arguments.
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
      T extends SeriesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SeriesGroupByArgs['orderBy'] }
        : { orderBy?: SeriesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SeriesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSeriesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Series model
   */
  readonly fields: SeriesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Series.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SeriesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    category<T extends Series$categoryArgs<ExtArgs> = {}>(args?: Subset<T, Series$categoryArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
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
   * Fields of the Series model
   */ 
  interface SeriesFieldRefs {
    readonly id: FieldRef<"Series", 'String'>
    readonly user_id: FieldRef<"Series", 'String'>
    readonly title: FieldRef<"Series", 'String'>
    readonly release_year: FieldRef<"Series", 'Int'>
    readonly category_id: FieldRef<"Series", 'Int'>
    readonly poster_url: FieldRef<"Series", 'String'>
    readonly status: FieldRef<"Series", 'SeriesStatus'>
    readonly created_at: FieldRef<"Series", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Series findUnique
   */
  export type SeriesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Series
     */
    select?: SeriesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeriesInclude<ExtArgs> | null
    /**
     * Filter, which Series to fetch.
     */
    where: SeriesWhereUniqueInput
  }

  /**
   * Series findUniqueOrThrow
   */
  export type SeriesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Series
     */
    select?: SeriesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeriesInclude<ExtArgs> | null
    /**
     * Filter, which Series to fetch.
     */
    where: SeriesWhereUniqueInput
  }

  /**
   * Series findFirst
   */
  export type SeriesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Series
     */
    select?: SeriesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeriesInclude<ExtArgs> | null
    /**
     * Filter, which Series to fetch.
     */
    where?: SeriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Series to fetch.
     */
    orderBy?: SeriesOrderByWithRelationInput | SeriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Series.
     */
    cursor?: SeriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Series from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Series.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Series.
     */
    distinct?: SeriesScalarFieldEnum | SeriesScalarFieldEnum[]
  }

  /**
   * Series findFirstOrThrow
   */
  export type SeriesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Series
     */
    select?: SeriesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeriesInclude<ExtArgs> | null
    /**
     * Filter, which Series to fetch.
     */
    where?: SeriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Series to fetch.
     */
    orderBy?: SeriesOrderByWithRelationInput | SeriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Series.
     */
    cursor?: SeriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Series from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Series.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Series.
     */
    distinct?: SeriesScalarFieldEnum | SeriesScalarFieldEnum[]
  }

  /**
   * Series findMany
   */
  export type SeriesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Series
     */
    select?: SeriesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeriesInclude<ExtArgs> | null
    /**
     * Filter, which Series to fetch.
     */
    where?: SeriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Series to fetch.
     */
    orderBy?: SeriesOrderByWithRelationInput | SeriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Series.
     */
    cursor?: SeriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Series from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Series.
     */
    skip?: number
    distinct?: SeriesScalarFieldEnum | SeriesScalarFieldEnum[]
  }

  /**
   * Series create
   */
  export type SeriesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Series
     */
    select?: SeriesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeriesInclude<ExtArgs> | null
    /**
     * The data needed to create a Series.
     */
    data: XOR<SeriesCreateInput, SeriesUncheckedCreateInput>
  }

  /**
   * Series createMany
   */
  export type SeriesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Series.
     */
    data: SeriesCreateManyInput | SeriesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Series createManyAndReturn
   */
  export type SeriesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Series
     */
    select?: SeriesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Series.
     */
    data: SeriesCreateManyInput | SeriesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeriesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Series update
   */
  export type SeriesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Series
     */
    select?: SeriesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeriesInclude<ExtArgs> | null
    /**
     * The data needed to update a Series.
     */
    data: XOR<SeriesUpdateInput, SeriesUncheckedUpdateInput>
    /**
     * Choose, which Series to update.
     */
    where: SeriesWhereUniqueInput
  }

  /**
   * Series updateMany
   */
  export type SeriesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Series.
     */
    data: XOR<SeriesUpdateManyMutationInput, SeriesUncheckedUpdateManyInput>
    /**
     * Filter which Series to update
     */
    where?: SeriesWhereInput
  }

  /**
   * Series upsert
   */
  export type SeriesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Series
     */
    select?: SeriesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeriesInclude<ExtArgs> | null
    /**
     * The filter to search for the Series to update in case it exists.
     */
    where: SeriesWhereUniqueInput
    /**
     * In case the Series found by the `where` argument doesn't exist, create a new Series with this data.
     */
    create: XOR<SeriesCreateInput, SeriesUncheckedCreateInput>
    /**
     * In case the Series was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SeriesUpdateInput, SeriesUncheckedUpdateInput>
  }

  /**
   * Series delete
   */
  export type SeriesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Series
     */
    select?: SeriesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeriesInclude<ExtArgs> | null
    /**
     * Filter which Series to delete.
     */
    where: SeriesWhereUniqueInput
  }

  /**
   * Series deleteMany
   */
  export type SeriesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Series to delete
     */
    where?: SeriesWhereInput
  }

  /**
   * Series.category
   */
  export type Series$categoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    where?: CategoryWhereInput
  }

  /**
   * Series without action
   */
  export type SeriesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Series
     */
    select?: SeriesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeriesInclude<ExtArgs> | null
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
    username: 'username',
    is_public: 'is_public',
    password_hash: 'password_hash',
    profile_picture_url: 'profile_picture_url',
    created_at: 'created_at'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const CategoryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    type: 'type'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const MovieScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    title: 'title',
    release_year: 'release_year',
    director: 'director',
    category_id: 'category_id',
    poster_url: 'poster_url',
    status: 'status',
    watched_at: 'watched_at',
    created_at: 'created_at'
  };

  export type MovieScalarFieldEnum = (typeof MovieScalarFieldEnum)[keyof typeof MovieScalarFieldEnum]


  export const BookScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    title: 'title',
    release_year: 'release_year',
    author: 'author',
    category_id: 'category_id',
    cover_url: 'cover_url',
    status: 'status',
    started_reading_at: 'started_reading_at',
    finished_reading_at: 'finished_reading_at',
    created_at: 'created_at'
  };

  export type BookScalarFieldEnum = (typeof BookScalarFieldEnum)[keyof typeof BookScalarFieldEnum]


  export const SeriesScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    title: 'title',
    release_year: 'release_year',
    category_id: 'category_id',
    poster_url: 'poster_url',
    status: 'status',
    created_at: 'created_at'
  };

  export type SeriesScalarFieldEnum = (typeof SeriesScalarFieldEnum)[keyof typeof SeriesScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


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
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'CategoryType'
   */
  export type EnumCategoryTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CategoryType'>
    


  /**
   * Reference to a field of type 'CategoryType[]'
   */
  export type ListEnumCategoryTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CategoryType[]'>
    


  /**
   * Reference to a field of type 'MovieStatus'
   */
  export type EnumMovieStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MovieStatus'>
    


  /**
   * Reference to a field of type 'MovieStatus[]'
   */
  export type ListEnumMovieStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MovieStatus[]'>
    


  /**
   * Reference to a field of type 'BookStatus'
   */
  export type EnumBookStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BookStatus'>
    


  /**
   * Reference to a field of type 'BookStatus[]'
   */
  export type ListEnumBookStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BookStatus[]'>
    


  /**
   * Reference to a field of type 'SeriesStatus'
   */
  export type EnumSeriesStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SeriesStatus'>
    


  /**
   * Reference to a field of type 'SeriesStatus[]'
   */
  export type ListEnumSeriesStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SeriesStatus[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
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
    username?: StringNullableFilter<"User"> | string | null
    is_public?: BoolFilter<"User"> | boolean
    password_hash?: StringFilter<"User"> | string
    profile_picture_url?: StringNullableFilter<"User"> | string | null
    created_at?: DateTimeFilter<"User"> | Date | string
    movies?: MovieListRelationFilter
    books?: BookListRelationFilter
    series?: SeriesListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    username?: SortOrderInput | SortOrder
    is_public?: SortOrder
    password_hash?: SortOrder
    profile_picture_url?: SortOrderInput | SortOrder
    created_at?: SortOrder
    movies?: MovieOrderByRelationAggregateInput
    books?: BookOrderByRelationAggregateInput
    series?: SeriesOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    username?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    is_public?: BoolFilter<"User"> | boolean
    password_hash?: StringFilter<"User"> | string
    profile_picture_url?: StringNullableFilter<"User"> | string | null
    created_at?: DateTimeFilter<"User"> | Date | string
    movies?: MovieListRelationFilter
    books?: BookListRelationFilter
    series?: SeriesListRelationFilter
  }, "id" | "email" | "username">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    username?: SortOrderInput | SortOrder
    is_public?: SortOrder
    password_hash?: SortOrder
    profile_picture_url?: SortOrderInput | SortOrder
    created_at?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    username?: StringNullableWithAggregatesFilter<"User"> | string | null
    is_public?: BoolWithAggregatesFilter<"User"> | boolean
    password_hash?: StringWithAggregatesFilter<"User"> | string
    profile_picture_url?: StringNullableWithAggregatesFilter<"User"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type CategoryWhereInput = {
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    id?: IntFilter<"Category"> | number
    name?: StringFilter<"Category"> | string
    type?: EnumCategoryTypeFilter<"Category"> | $Enums.CategoryType
    movies?: MovieListRelationFilter
    books?: BookListRelationFilter
    series?: SeriesListRelationFilter
  }

  export type CategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    movies?: MovieOrderByRelationAggregateInput
    books?: BookOrderByRelationAggregateInput
    series?: SeriesOrderByRelationAggregateInput
  }

  export type CategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name_type?: CategoryNameTypeCompoundUniqueInput
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    name?: StringFilter<"Category"> | string
    type?: EnumCategoryTypeFilter<"Category"> | $Enums.CategoryType
    movies?: MovieListRelationFilter
    books?: BookListRelationFilter
    series?: SeriesListRelationFilter
  }, "id" | "name_type">

  export type CategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    _count?: CategoryCountOrderByAggregateInput
    _avg?: CategoryAvgOrderByAggregateInput
    _max?: CategoryMaxOrderByAggregateInput
    _min?: CategoryMinOrderByAggregateInput
    _sum?: CategorySumOrderByAggregateInput
  }

  export type CategoryScalarWhereWithAggregatesInput = {
    AND?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    OR?: CategoryScalarWhereWithAggregatesInput[]
    NOT?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Category"> | number
    name?: StringWithAggregatesFilter<"Category"> | string
    type?: EnumCategoryTypeWithAggregatesFilter<"Category"> | $Enums.CategoryType
  }

  export type MovieWhereInput = {
    AND?: MovieWhereInput | MovieWhereInput[]
    OR?: MovieWhereInput[]
    NOT?: MovieWhereInput | MovieWhereInput[]
    id?: UuidFilter<"Movie"> | string
    user_id?: UuidFilter<"Movie"> | string
    title?: StringFilter<"Movie"> | string
    release_year?: IntNullableFilter<"Movie"> | number | null
    director?: StringNullableFilter<"Movie"> | string | null
    category_id?: IntNullableFilter<"Movie"> | number | null
    poster_url?: StringNullableFilter<"Movie"> | string | null
    status?: EnumMovieStatusNullableFilter<"Movie"> | $Enums.MovieStatus | null
    watched_at?: DateTimeNullableFilter<"Movie"> | Date | string | null
    created_at?: DateTimeFilter<"Movie"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    category?: XOR<CategoryNullableRelationFilter, CategoryWhereInput> | null
  }

  export type MovieOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    title?: SortOrder
    release_year?: SortOrderInput | SortOrder
    director?: SortOrderInput | SortOrder
    category_id?: SortOrderInput | SortOrder
    poster_url?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    watched_at?: SortOrderInput | SortOrder
    created_at?: SortOrder
    user?: UserOrderByWithRelationInput
    category?: CategoryOrderByWithRelationInput
  }

  export type MovieWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MovieWhereInput | MovieWhereInput[]
    OR?: MovieWhereInput[]
    NOT?: MovieWhereInput | MovieWhereInput[]
    user_id?: UuidFilter<"Movie"> | string
    title?: StringFilter<"Movie"> | string
    release_year?: IntNullableFilter<"Movie"> | number | null
    director?: StringNullableFilter<"Movie"> | string | null
    category_id?: IntNullableFilter<"Movie"> | number | null
    poster_url?: StringNullableFilter<"Movie"> | string | null
    status?: EnumMovieStatusNullableFilter<"Movie"> | $Enums.MovieStatus | null
    watched_at?: DateTimeNullableFilter<"Movie"> | Date | string | null
    created_at?: DateTimeFilter<"Movie"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    category?: XOR<CategoryNullableRelationFilter, CategoryWhereInput> | null
  }, "id">

  export type MovieOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    title?: SortOrder
    release_year?: SortOrderInput | SortOrder
    director?: SortOrderInput | SortOrder
    category_id?: SortOrderInput | SortOrder
    poster_url?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    watched_at?: SortOrderInput | SortOrder
    created_at?: SortOrder
    _count?: MovieCountOrderByAggregateInput
    _avg?: MovieAvgOrderByAggregateInput
    _max?: MovieMaxOrderByAggregateInput
    _min?: MovieMinOrderByAggregateInput
    _sum?: MovieSumOrderByAggregateInput
  }

  export type MovieScalarWhereWithAggregatesInput = {
    AND?: MovieScalarWhereWithAggregatesInput | MovieScalarWhereWithAggregatesInput[]
    OR?: MovieScalarWhereWithAggregatesInput[]
    NOT?: MovieScalarWhereWithAggregatesInput | MovieScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Movie"> | string
    user_id?: UuidWithAggregatesFilter<"Movie"> | string
    title?: StringWithAggregatesFilter<"Movie"> | string
    release_year?: IntNullableWithAggregatesFilter<"Movie"> | number | null
    director?: StringNullableWithAggregatesFilter<"Movie"> | string | null
    category_id?: IntNullableWithAggregatesFilter<"Movie"> | number | null
    poster_url?: StringNullableWithAggregatesFilter<"Movie"> | string | null
    status?: EnumMovieStatusNullableWithAggregatesFilter<"Movie"> | $Enums.MovieStatus | null
    watched_at?: DateTimeNullableWithAggregatesFilter<"Movie"> | Date | string | null
    created_at?: DateTimeWithAggregatesFilter<"Movie"> | Date | string
  }

  export type BookWhereInput = {
    AND?: BookWhereInput | BookWhereInput[]
    OR?: BookWhereInput[]
    NOT?: BookWhereInput | BookWhereInput[]
    id?: UuidFilter<"Book"> | string
    user_id?: UuidFilter<"Book"> | string
    title?: StringFilter<"Book"> | string
    release_year?: IntNullableFilter<"Book"> | number | null
    author?: StringNullableFilter<"Book"> | string | null
    category_id?: IntNullableFilter<"Book"> | number | null
    cover_url?: StringNullableFilter<"Book"> | string | null
    status?: EnumBookStatusNullableFilter<"Book"> | $Enums.BookStatus | null
    started_reading_at?: DateTimeNullableFilter<"Book"> | Date | string | null
    finished_reading_at?: DateTimeNullableFilter<"Book"> | Date | string | null
    created_at?: DateTimeFilter<"Book"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    category?: XOR<CategoryNullableRelationFilter, CategoryWhereInput> | null
  }

  export type BookOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    title?: SortOrder
    release_year?: SortOrderInput | SortOrder
    author?: SortOrderInput | SortOrder
    category_id?: SortOrderInput | SortOrder
    cover_url?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    started_reading_at?: SortOrderInput | SortOrder
    finished_reading_at?: SortOrderInput | SortOrder
    created_at?: SortOrder
    user?: UserOrderByWithRelationInput
    category?: CategoryOrderByWithRelationInput
  }

  export type BookWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BookWhereInput | BookWhereInput[]
    OR?: BookWhereInput[]
    NOT?: BookWhereInput | BookWhereInput[]
    user_id?: UuidFilter<"Book"> | string
    title?: StringFilter<"Book"> | string
    release_year?: IntNullableFilter<"Book"> | number | null
    author?: StringNullableFilter<"Book"> | string | null
    category_id?: IntNullableFilter<"Book"> | number | null
    cover_url?: StringNullableFilter<"Book"> | string | null
    status?: EnumBookStatusNullableFilter<"Book"> | $Enums.BookStatus | null
    started_reading_at?: DateTimeNullableFilter<"Book"> | Date | string | null
    finished_reading_at?: DateTimeNullableFilter<"Book"> | Date | string | null
    created_at?: DateTimeFilter<"Book"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    category?: XOR<CategoryNullableRelationFilter, CategoryWhereInput> | null
  }, "id">

  export type BookOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    title?: SortOrder
    release_year?: SortOrderInput | SortOrder
    author?: SortOrderInput | SortOrder
    category_id?: SortOrderInput | SortOrder
    cover_url?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    started_reading_at?: SortOrderInput | SortOrder
    finished_reading_at?: SortOrderInput | SortOrder
    created_at?: SortOrder
    _count?: BookCountOrderByAggregateInput
    _avg?: BookAvgOrderByAggregateInput
    _max?: BookMaxOrderByAggregateInput
    _min?: BookMinOrderByAggregateInput
    _sum?: BookSumOrderByAggregateInput
  }

  export type BookScalarWhereWithAggregatesInput = {
    AND?: BookScalarWhereWithAggregatesInput | BookScalarWhereWithAggregatesInput[]
    OR?: BookScalarWhereWithAggregatesInput[]
    NOT?: BookScalarWhereWithAggregatesInput | BookScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Book"> | string
    user_id?: UuidWithAggregatesFilter<"Book"> | string
    title?: StringWithAggregatesFilter<"Book"> | string
    release_year?: IntNullableWithAggregatesFilter<"Book"> | number | null
    author?: StringNullableWithAggregatesFilter<"Book"> | string | null
    category_id?: IntNullableWithAggregatesFilter<"Book"> | number | null
    cover_url?: StringNullableWithAggregatesFilter<"Book"> | string | null
    status?: EnumBookStatusNullableWithAggregatesFilter<"Book"> | $Enums.BookStatus | null
    started_reading_at?: DateTimeNullableWithAggregatesFilter<"Book"> | Date | string | null
    finished_reading_at?: DateTimeNullableWithAggregatesFilter<"Book"> | Date | string | null
    created_at?: DateTimeWithAggregatesFilter<"Book"> | Date | string
  }

  export type SeriesWhereInput = {
    AND?: SeriesWhereInput | SeriesWhereInput[]
    OR?: SeriesWhereInput[]
    NOT?: SeriesWhereInput | SeriesWhereInput[]
    id?: UuidFilter<"Series"> | string
    user_id?: UuidFilter<"Series"> | string
    title?: StringFilter<"Series"> | string
    release_year?: IntNullableFilter<"Series"> | number | null
    category_id?: IntNullableFilter<"Series"> | number | null
    poster_url?: StringNullableFilter<"Series"> | string | null
    status?: EnumSeriesStatusNullableFilter<"Series"> | $Enums.SeriesStatus | null
    created_at?: DateTimeFilter<"Series"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    category?: XOR<CategoryNullableRelationFilter, CategoryWhereInput> | null
  }

  export type SeriesOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    title?: SortOrder
    release_year?: SortOrderInput | SortOrder
    category_id?: SortOrderInput | SortOrder
    poster_url?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    created_at?: SortOrder
    user?: UserOrderByWithRelationInput
    category?: CategoryOrderByWithRelationInput
  }

  export type SeriesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SeriesWhereInput | SeriesWhereInput[]
    OR?: SeriesWhereInput[]
    NOT?: SeriesWhereInput | SeriesWhereInput[]
    user_id?: UuidFilter<"Series"> | string
    title?: StringFilter<"Series"> | string
    release_year?: IntNullableFilter<"Series"> | number | null
    category_id?: IntNullableFilter<"Series"> | number | null
    poster_url?: StringNullableFilter<"Series"> | string | null
    status?: EnumSeriesStatusNullableFilter<"Series"> | $Enums.SeriesStatus | null
    created_at?: DateTimeFilter<"Series"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    category?: XOR<CategoryNullableRelationFilter, CategoryWhereInput> | null
  }, "id">

  export type SeriesOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    title?: SortOrder
    release_year?: SortOrderInput | SortOrder
    category_id?: SortOrderInput | SortOrder
    poster_url?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    created_at?: SortOrder
    _count?: SeriesCountOrderByAggregateInput
    _avg?: SeriesAvgOrderByAggregateInput
    _max?: SeriesMaxOrderByAggregateInput
    _min?: SeriesMinOrderByAggregateInput
    _sum?: SeriesSumOrderByAggregateInput
  }

  export type SeriesScalarWhereWithAggregatesInput = {
    AND?: SeriesScalarWhereWithAggregatesInput | SeriesScalarWhereWithAggregatesInput[]
    OR?: SeriesScalarWhereWithAggregatesInput[]
    NOT?: SeriesScalarWhereWithAggregatesInput | SeriesScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Series"> | string
    user_id?: UuidWithAggregatesFilter<"Series"> | string
    title?: StringWithAggregatesFilter<"Series"> | string
    release_year?: IntNullableWithAggregatesFilter<"Series"> | number | null
    category_id?: IntNullableWithAggregatesFilter<"Series"> | number | null
    poster_url?: StringNullableWithAggregatesFilter<"Series"> | string | null
    status?: EnumSeriesStatusNullableWithAggregatesFilter<"Series"> | $Enums.SeriesStatus | null
    created_at?: DateTimeWithAggregatesFilter<"Series"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name: string
    email: string
    username?: string | null
    is_public?: boolean
    password_hash: string
    profile_picture_url?: string | null
    created_at?: Date | string
    movies?: MovieCreateNestedManyWithoutUserInput
    books?: BookCreateNestedManyWithoutUserInput
    series?: SeriesCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    username?: string | null
    is_public?: boolean
    password_hash: string
    profile_picture_url?: string | null
    created_at?: Date | string
    movies?: MovieUncheckedCreateNestedManyWithoutUserInput
    books?: BookUncheckedCreateNestedManyWithoutUserInput
    series?: SeriesUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    is_public?: BoolFieldUpdateOperationsInput | boolean
    password_hash?: StringFieldUpdateOperationsInput | string
    profile_picture_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    movies?: MovieUpdateManyWithoutUserNestedInput
    books?: BookUpdateManyWithoutUserNestedInput
    series?: SeriesUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    is_public?: BoolFieldUpdateOperationsInput | boolean
    password_hash?: StringFieldUpdateOperationsInput | string
    profile_picture_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    movies?: MovieUncheckedUpdateManyWithoutUserNestedInput
    books?: BookUncheckedUpdateManyWithoutUserNestedInput
    series?: SeriesUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    email: string
    username?: string | null
    is_public?: boolean
    password_hash: string
    profile_picture_url?: string | null
    created_at?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    is_public?: BoolFieldUpdateOperationsInput | boolean
    password_hash?: StringFieldUpdateOperationsInput | string
    profile_picture_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    is_public?: BoolFieldUpdateOperationsInput | boolean
    password_hash?: StringFieldUpdateOperationsInput | string
    profile_picture_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryCreateInput = {
    name: string
    type: $Enums.CategoryType
    movies?: MovieCreateNestedManyWithoutCategoryInput
    books?: BookCreateNestedManyWithoutCategoryInput
    series?: SeriesCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateInput = {
    id?: number
    name: string
    type: $Enums.CategoryType
    movies?: MovieUncheckedCreateNestedManyWithoutCategoryInput
    books?: BookUncheckedCreateNestedManyWithoutCategoryInput
    series?: SeriesUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumCategoryTypeFieldUpdateOperationsInput | $Enums.CategoryType
    movies?: MovieUpdateManyWithoutCategoryNestedInput
    books?: BookUpdateManyWithoutCategoryNestedInput
    series?: SeriesUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumCategoryTypeFieldUpdateOperationsInput | $Enums.CategoryType
    movies?: MovieUncheckedUpdateManyWithoutCategoryNestedInput
    books?: BookUncheckedUpdateManyWithoutCategoryNestedInput
    series?: SeriesUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryCreateManyInput = {
    id?: number
    name: string
    type: $Enums.CategoryType
  }

  export type CategoryUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumCategoryTypeFieldUpdateOperationsInput | $Enums.CategoryType
  }

  export type CategoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumCategoryTypeFieldUpdateOperationsInput | $Enums.CategoryType
  }

  export type MovieCreateInput = {
    id?: string
    title: string
    release_year?: number | null
    director?: string | null
    poster_url?: string | null
    status?: $Enums.MovieStatus | null
    watched_at?: Date | string | null
    created_at?: Date | string
    user: UserCreateNestedOneWithoutMoviesInput
    category?: CategoryCreateNestedOneWithoutMoviesInput
  }

  export type MovieUncheckedCreateInput = {
    id?: string
    user_id: string
    title: string
    release_year?: number | null
    director?: string | null
    category_id?: number | null
    poster_url?: string | null
    status?: $Enums.MovieStatus | null
    watched_at?: Date | string | null
    created_at?: Date | string
  }

  export type MovieUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    release_year?: NullableIntFieldUpdateOperationsInput | number | null
    director?: NullableStringFieldUpdateOperationsInput | string | null
    poster_url?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumMovieStatusFieldUpdateOperationsInput | $Enums.MovieStatus | null
    watched_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutMoviesNestedInput
    category?: CategoryUpdateOneWithoutMoviesNestedInput
  }

  export type MovieUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    release_year?: NullableIntFieldUpdateOperationsInput | number | null
    director?: NullableStringFieldUpdateOperationsInput | string | null
    category_id?: NullableIntFieldUpdateOperationsInput | number | null
    poster_url?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumMovieStatusFieldUpdateOperationsInput | $Enums.MovieStatus | null
    watched_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MovieCreateManyInput = {
    id?: string
    user_id: string
    title: string
    release_year?: number | null
    director?: string | null
    category_id?: number | null
    poster_url?: string | null
    status?: $Enums.MovieStatus | null
    watched_at?: Date | string | null
    created_at?: Date | string
  }

  export type MovieUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    release_year?: NullableIntFieldUpdateOperationsInput | number | null
    director?: NullableStringFieldUpdateOperationsInput | string | null
    poster_url?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumMovieStatusFieldUpdateOperationsInput | $Enums.MovieStatus | null
    watched_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MovieUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    release_year?: NullableIntFieldUpdateOperationsInput | number | null
    director?: NullableStringFieldUpdateOperationsInput | string | null
    category_id?: NullableIntFieldUpdateOperationsInput | number | null
    poster_url?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumMovieStatusFieldUpdateOperationsInput | $Enums.MovieStatus | null
    watched_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookCreateInput = {
    id?: string
    title: string
    release_year?: number | null
    author?: string | null
    cover_url?: string | null
    status?: $Enums.BookStatus | null
    started_reading_at?: Date | string | null
    finished_reading_at?: Date | string | null
    created_at?: Date | string
    user: UserCreateNestedOneWithoutBooksInput
    category?: CategoryCreateNestedOneWithoutBooksInput
  }

  export type BookUncheckedCreateInput = {
    id?: string
    user_id: string
    title: string
    release_year?: number | null
    author?: string | null
    category_id?: number | null
    cover_url?: string | null
    status?: $Enums.BookStatus | null
    started_reading_at?: Date | string | null
    finished_reading_at?: Date | string | null
    created_at?: Date | string
  }

  export type BookUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    release_year?: NullableIntFieldUpdateOperationsInput | number | null
    author?: NullableStringFieldUpdateOperationsInput | string | null
    cover_url?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumBookStatusFieldUpdateOperationsInput | $Enums.BookStatus | null
    started_reading_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finished_reading_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutBooksNestedInput
    category?: CategoryUpdateOneWithoutBooksNestedInput
  }

  export type BookUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    release_year?: NullableIntFieldUpdateOperationsInput | number | null
    author?: NullableStringFieldUpdateOperationsInput | string | null
    category_id?: NullableIntFieldUpdateOperationsInput | number | null
    cover_url?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumBookStatusFieldUpdateOperationsInput | $Enums.BookStatus | null
    started_reading_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finished_reading_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookCreateManyInput = {
    id?: string
    user_id: string
    title: string
    release_year?: number | null
    author?: string | null
    category_id?: number | null
    cover_url?: string | null
    status?: $Enums.BookStatus | null
    started_reading_at?: Date | string | null
    finished_reading_at?: Date | string | null
    created_at?: Date | string
  }

  export type BookUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    release_year?: NullableIntFieldUpdateOperationsInput | number | null
    author?: NullableStringFieldUpdateOperationsInput | string | null
    cover_url?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumBookStatusFieldUpdateOperationsInput | $Enums.BookStatus | null
    started_reading_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finished_reading_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    release_year?: NullableIntFieldUpdateOperationsInput | number | null
    author?: NullableStringFieldUpdateOperationsInput | string | null
    category_id?: NullableIntFieldUpdateOperationsInput | number | null
    cover_url?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumBookStatusFieldUpdateOperationsInput | $Enums.BookStatus | null
    started_reading_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finished_reading_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SeriesCreateInput = {
    id?: string
    title: string
    release_year?: number | null
    poster_url?: string | null
    status?: $Enums.SeriesStatus | null
    created_at?: Date | string
    user: UserCreateNestedOneWithoutSeriesInput
    category?: CategoryCreateNestedOneWithoutSeriesInput
  }

  export type SeriesUncheckedCreateInput = {
    id?: string
    user_id: string
    title: string
    release_year?: number | null
    category_id?: number | null
    poster_url?: string | null
    status?: $Enums.SeriesStatus | null
    created_at?: Date | string
  }

  export type SeriesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    release_year?: NullableIntFieldUpdateOperationsInput | number | null
    poster_url?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumSeriesStatusFieldUpdateOperationsInput | $Enums.SeriesStatus | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSeriesNestedInput
    category?: CategoryUpdateOneWithoutSeriesNestedInput
  }

  export type SeriesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    release_year?: NullableIntFieldUpdateOperationsInput | number | null
    category_id?: NullableIntFieldUpdateOperationsInput | number | null
    poster_url?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumSeriesStatusFieldUpdateOperationsInput | $Enums.SeriesStatus | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SeriesCreateManyInput = {
    id?: string
    user_id: string
    title: string
    release_year?: number | null
    category_id?: number | null
    poster_url?: string | null
    status?: $Enums.SeriesStatus | null
    created_at?: Date | string
  }

  export type SeriesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    release_year?: NullableIntFieldUpdateOperationsInput | number | null
    poster_url?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumSeriesStatusFieldUpdateOperationsInput | $Enums.SeriesStatus | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SeriesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    release_year?: NullableIntFieldUpdateOperationsInput | number | null
    category_id?: NullableIntFieldUpdateOperationsInput | number | null
    poster_url?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumSeriesStatusFieldUpdateOperationsInput | $Enums.SeriesStatus | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type MovieListRelationFilter = {
    every?: MovieWhereInput
    some?: MovieWhereInput
    none?: MovieWhereInput
  }

  export type BookListRelationFilter = {
    every?: BookWhereInput
    some?: BookWhereInput
    none?: BookWhereInput
  }

  export type SeriesListRelationFilter = {
    every?: SeriesWhereInput
    some?: SeriesWhereInput
    none?: SeriesWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type MovieOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BookOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SeriesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    username?: SortOrder
    is_public?: SortOrder
    password_hash?: SortOrder
    profile_picture_url?: SortOrder
    created_at?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    username?: SortOrder
    is_public?: SortOrder
    password_hash?: SortOrder
    profile_picture_url?: SortOrder
    created_at?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    username?: SortOrder
    is_public?: SortOrder
    password_hash?: SortOrder
    profile_picture_url?: SortOrder
    created_at?: SortOrder
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type EnumCategoryTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.CategoryType | EnumCategoryTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CategoryType[] | ListEnumCategoryTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CategoryType[] | ListEnumCategoryTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCategoryTypeFilter<$PrismaModel> | $Enums.CategoryType
  }

  export type CategoryNameTypeCompoundUniqueInput = {
    name: string
    type: $Enums.CategoryType
  }

  export type CategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
  }

  export type CategoryAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
  }

  export type CategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
  }

  export type CategorySumOrderByAggregateInput = {
    id?: SortOrder
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

  export type EnumCategoryTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CategoryType | EnumCategoryTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CategoryType[] | ListEnumCategoryTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CategoryType[] | ListEnumCategoryTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCategoryTypeWithAggregatesFilter<$PrismaModel> | $Enums.CategoryType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCategoryTypeFilter<$PrismaModel>
    _max?: NestedEnumCategoryTypeFilter<$PrismaModel>
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

  export type EnumMovieStatusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.MovieStatus | EnumMovieStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.MovieStatus[] | ListEnumMovieStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.MovieStatus[] | ListEnumMovieStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumMovieStatusNullableFilter<$PrismaModel> | $Enums.MovieStatus | null
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

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type CategoryNullableRelationFilter = {
    is?: CategoryWhereInput | null
    isNot?: CategoryWhereInput | null
  }

  export type MovieCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    title?: SortOrder
    release_year?: SortOrder
    director?: SortOrder
    category_id?: SortOrder
    poster_url?: SortOrder
    status?: SortOrder
    watched_at?: SortOrder
    created_at?: SortOrder
  }

  export type MovieAvgOrderByAggregateInput = {
    release_year?: SortOrder
    category_id?: SortOrder
  }

  export type MovieMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    title?: SortOrder
    release_year?: SortOrder
    director?: SortOrder
    category_id?: SortOrder
    poster_url?: SortOrder
    status?: SortOrder
    watched_at?: SortOrder
    created_at?: SortOrder
  }

  export type MovieMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    title?: SortOrder
    release_year?: SortOrder
    director?: SortOrder
    category_id?: SortOrder
    poster_url?: SortOrder
    status?: SortOrder
    watched_at?: SortOrder
    created_at?: SortOrder
  }

  export type MovieSumOrderByAggregateInput = {
    release_year?: SortOrder
    category_id?: SortOrder
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

  export type EnumMovieStatusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MovieStatus | EnumMovieStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.MovieStatus[] | ListEnumMovieStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.MovieStatus[] | ListEnumMovieStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumMovieStatusNullableWithAggregatesFilter<$PrismaModel> | $Enums.MovieStatus | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumMovieStatusNullableFilter<$PrismaModel>
    _max?: NestedEnumMovieStatusNullableFilter<$PrismaModel>
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

  export type EnumBookStatusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.BookStatus | EnumBookStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.BookStatus[] | ListEnumBookStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.BookStatus[] | ListEnumBookStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumBookStatusNullableFilter<$PrismaModel> | $Enums.BookStatus | null
  }

  export type BookCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    title?: SortOrder
    release_year?: SortOrder
    author?: SortOrder
    category_id?: SortOrder
    cover_url?: SortOrder
    status?: SortOrder
    started_reading_at?: SortOrder
    finished_reading_at?: SortOrder
    created_at?: SortOrder
  }

  export type BookAvgOrderByAggregateInput = {
    release_year?: SortOrder
    category_id?: SortOrder
  }

  export type BookMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    title?: SortOrder
    release_year?: SortOrder
    author?: SortOrder
    category_id?: SortOrder
    cover_url?: SortOrder
    status?: SortOrder
    started_reading_at?: SortOrder
    finished_reading_at?: SortOrder
    created_at?: SortOrder
  }

  export type BookMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    title?: SortOrder
    release_year?: SortOrder
    author?: SortOrder
    category_id?: SortOrder
    cover_url?: SortOrder
    status?: SortOrder
    started_reading_at?: SortOrder
    finished_reading_at?: SortOrder
    created_at?: SortOrder
  }

  export type BookSumOrderByAggregateInput = {
    release_year?: SortOrder
    category_id?: SortOrder
  }

  export type EnumBookStatusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BookStatus | EnumBookStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.BookStatus[] | ListEnumBookStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.BookStatus[] | ListEnumBookStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumBookStatusNullableWithAggregatesFilter<$PrismaModel> | $Enums.BookStatus | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumBookStatusNullableFilter<$PrismaModel>
    _max?: NestedEnumBookStatusNullableFilter<$PrismaModel>
  }

  export type EnumSeriesStatusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.SeriesStatus | EnumSeriesStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.SeriesStatus[] | ListEnumSeriesStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.SeriesStatus[] | ListEnumSeriesStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumSeriesStatusNullableFilter<$PrismaModel> | $Enums.SeriesStatus | null
  }

  export type SeriesCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    title?: SortOrder
    release_year?: SortOrder
    category_id?: SortOrder
    poster_url?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
  }

  export type SeriesAvgOrderByAggregateInput = {
    release_year?: SortOrder
    category_id?: SortOrder
  }

  export type SeriesMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    title?: SortOrder
    release_year?: SortOrder
    category_id?: SortOrder
    poster_url?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
  }

  export type SeriesMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    title?: SortOrder
    release_year?: SortOrder
    category_id?: SortOrder
    poster_url?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
  }

  export type SeriesSumOrderByAggregateInput = {
    release_year?: SortOrder
    category_id?: SortOrder
  }

  export type EnumSeriesStatusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SeriesStatus | EnumSeriesStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.SeriesStatus[] | ListEnumSeriesStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.SeriesStatus[] | ListEnumSeriesStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumSeriesStatusNullableWithAggregatesFilter<$PrismaModel> | $Enums.SeriesStatus | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumSeriesStatusNullableFilter<$PrismaModel>
    _max?: NestedEnumSeriesStatusNullableFilter<$PrismaModel>
  }

  export type MovieCreateNestedManyWithoutUserInput = {
    create?: XOR<MovieCreateWithoutUserInput, MovieUncheckedCreateWithoutUserInput> | MovieCreateWithoutUserInput[] | MovieUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MovieCreateOrConnectWithoutUserInput | MovieCreateOrConnectWithoutUserInput[]
    createMany?: MovieCreateManyUserInputEnvelope
    connect?: MovieWhereUniqueInput | MovieWhereUniqueInput[]
  }

  export type BookCreateNestedManyWithoutUserInput = {
    create?: XOR<BookCreateWithoutUserInput, BookUncheckedCreateWithoutUserInput> | BookCreateWithoutUserInput[] | BookUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BookCreateOrConnectWithoutUserInput | BookCreateOrConnectWithoutUserInput[]
    createMany?: BookCreateManyUserInputEnvelope
    connect?: BookWhereUniqueInput | BookWhereUniqueInput[]
  }

  export type SeriesCreateNestedManyWithoutUserInput = {
    create?: XOR<SeriesCreateWithoutUserInput, SeriesUncheckedCreateWithoutUserInput> | SeriesCreateWithoutUserInput[] | SeriesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SeriesCreateOrConnectWithoutUserInput | SeriesCreateOrConnectWithoutUserInput[]
    createMany?: SeriesCreateManyUserInputEnvelope
    connect?: SeriesWhereUniqueInput | SeriesWhereUniqueInput[]
  }

  export type MovieUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<MovieCreateWithoutUserInput, MovieUncheckedCreateWithoutUserInput> | MovieCreateWithoutUserInput[] | MovieUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MovieCreateOrConnectWithoutUserInput | MovieCreateOrConnectWithoutUserInput[]
    createMany?: MovieCreateManyUserInputEnvelope
    connect?: MovieWhereUniqueInput | MovieWhereUniqueInput[]
  }

  export type BookUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<BookCreateWithoutUserInput, BookUncheckedCreateWithoutUserInput> | BookCreateWithoutUserInput[] | BookUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BookCreateOrConnectWithoutUserInput | BookCreateOrConnectWithoutUserInput[]
    createMany?: BookCreateManyUserInputEnvelope
    connect?: BookWhereUniqueInput | BookWhereUniqueInput[]
  }

  export type SeriesUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SeriesCreateWithoutUserInput, SeriesUncheckedCreateWithoutUserInput> | SeriesCreateWithoutUserInput[] | SeriesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SeriesCreateOrConnectWithoutUserInput | SeriesCreateOrConnectWithoutUserInput[]
    createMany?: SeriesCreateManyUserInputEnvelope
    connect?: SeriesWhereUniqueInput | SeriesWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type MovieUpdateManyWithoutUserNestedInput = {
    create?: XOR<MovieCreateWithoutUserInput, MovieUncheckedCreateWithoutUserInput> | MovieCreateWithoutUserInput[] | MovieUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MovieCreateOrConnectWithoutUserInput | MovieCreateOrConnectWithoutUserInput[]
    upsert?: MovieUpsertWithWhereUniqueWithoutUserInput | MovieUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MovieCreateManyUserInputEnvelope
    set?: MovieWhereUniqueInput | MovieWhereUniqueInput[]
    disconnect?: MovieWhereUniqueInput | MovieWhereUniqueInput[]
    delete?: MovieWhereUniqueInput | MovieWhereUniqueInput[]
    connect?: MovieWhereUniqueInput | MovieWhereUniqueInput[]
    update?: MovieUpdateWithWhereUniqueWithoutUserInput | MovieUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MovieUpdateManyWithWhereWithoutUserInput | MovieUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MovieScalarWhereInput | MovieScalarWhereInput[]
  }

  export type BookUpdateManyWithoutUserNestedInput = {
    create?: XOR<BookCreateWithoutUserInput, BookUncheckedCreateWithoutUserInput> | BookCreateWithoutUserInput[] | BookUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BookCreateOrConnectWithoutUserInput | BookCreateOrConnectWithoutUserInput[]
    upsert?: BookUpsertWithWhereUniqueWithoutUserInput | BookUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BookCreateManyUserInputEnvelope
    set?: BookWhereUniqueInput | BookWhereUniqueInput[]
    disconnect?: BookWhereUniqueInput | BookWhereUniqueInput[]
    delete?: BookWhereUniqueInput | BookWhereUniqueInput[]
    connect?: BookWhereUniqueInput | BookWhereUniqueInput[]
    update?: BookUpdateWithWhereUniqueWithoutUserInput | BookUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BookUpdateManyWithWhereWithoutUserInput | BookUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BookScalarWhereInput | BookScalarWhereInput[]
  }

  export type SeriesUpdateManyWithoutUserNestedInput = {
    create?: XOR<SeriesCreateWithoutUserInput, SeriesUncheckedCreateWithoutUserInput> | SeriesCreateWithoutUserInput[] | SeriesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SeriesCreateOrConnectWithoutUserInput | SeriesCreateOrConnectWithoutUserInput[]
    upsert?: SeriesUpsertWithWhereUniqueWithoutUserInput | SeriesUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SeriesCreateManyUserInputEnvelope
    set?: SeriesWhereUniqueInput | SeriesWhereUniqueInput[]
    disconnect?: SeriesWhereUniqueInput | SeriesWhereUniqueInput[]
    delete?: SeriesWhereUniqueInput | SeriesWhereUniqueInput[]
    connect?: SeriesWhereUniqueInput | SeriesWhereUniqueInput[]
    update?: SeriesUpdateWithWhereUniqueWithoutUserInput | SeriesUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SeriesUpdateManyWithWhereWithoutUserInput | SeriesUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SeriesScalarWhereInput | SeriesScalarWhereInput[]
  }

  export type MovieUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<MovieCreateWithoutUserInput, MovieUncheckedCreateWithoutUserInput> | MovieCreateWithoutUserInput[] | MovieUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MovieCreateOrConnectWithoutUserInput | MovieCreateOrConnectWithoutUserInput[]
    upsert?: MovieUpsertWithWhereUniqueWithoutUserInput | MovieUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MovieCreateManyUserInputEnvelope
    set?: MovieWhereUniqueInput | MovieWhereUniqueInput[]
    disconnect?: MovieWhereUniqueInput | MovieWhereUniqueInput[]
    delete?: MovieWhereUniqueInput | MovieWhereUniqueInput[]
    connect?: MovieWhereUniqueInput | MovieWhereUniqueInput[]
    update?: MovieUpdateWithWhereUniqueWithoutUserInput | MovieUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MovieUpdateManyWithWhereWithoutUserInput | MovieUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MovieScalarWhereInput | MovieScalarWhereInput[]
  }

  export type BookUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<BookCreateWithoutUserInput, BookUncheckedCreateWithoutUserInput> | BookCreateWithoutUserInput[] | BookUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BookCreateOrConnectWithoutUserInput | BookCreateOrConnectWithoutUserInput[]
    upsert?: BookUpsertWithWhereUniqueWithoutUserInput | BookUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BookCreateManyUserInputEnvelope
    set?: BookWhereUniqueInput | BookWhereUniqueInput[]
    disconnect?: BookWhereUniqueInput | BookWhereUniqueInput[]
    delete?: BookWhereUniqueInput | BookWhereUniqueInput[]
    connect?: BookWhereUniqueInput | BookWhereUniqueInput[]
    update?: BookUpdateWithWhereUniqueWithoutUserInput | BookUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BookUpdateManyWithWhereWithoutUserInput | BookUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BookScalarWhereInput | BookScalarWhereInput[]
  }

  export type SeriesUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SeriesCreateWithoutUserInput, SeriesUncheckedCreateWithoutUserInput> | SeriesCreateWithoutUserInput[] | SeriesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SeriesCreateOrConnectWithoutUserInput | SeriesCreateOrConnectWithoutUserInput[]
    upsert?: SeriesUpsertWithWhereUniqueWithoutUserInput | SeriesUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SeriesCreateManyUserInputEnvelope
    set?: SeriesWhereUniqueInput | SeriesWhereUniqueInput[]
    disconnect?: SeriesWhereUniqueInput | SeriesWhereUniqueInput[]
    delete?: SeriesWhereUniqueInput | SeriesWhereUniqueInput[]
    connect?: SeriesWhereUniqueInput | SeriesWhereUniqueInput[]
    update?: SeriesUpdateWithWhereUniqueWithoutUserInput | SeriesUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SeriesUpdateManyWithWhereWithoutUserInput | SeriesUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SeriesScalarWhereInput | SeriesScalarWhereInput[]
  }

  export type MovieCreateNestedManyWithoutCategoryInput = {
    create?: XOR<MovieCreateWithoutCategoryInput, MovieUncheckedCreateWithoutCategoryInput> | MovieCreateWithoutCategoryInput[] | MovieUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: MovieCreateOrConnectWithoutCategoryInput | MovieCreateOrConnectWithoutCategoryInput[]
    createMany?: MovieCreateManyCategoryInputEnvelope
    connect?: MovieWhereUniqueInput | MovieWhereUniqueInput[]
  }

  export type BookCreateNestedManyWithoutCategoryInput = {
    create?: XOR<BookCreateWithoutCategoryInput, BookUncheckedCreateWithoutCategoryInput> | BookCreateWithoutCategoryInput[] | BookUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: BookCreateOrConnectWithoutCategoryInput | BookCreateOrConnectWithoutCategoryInput[]
    createMany?: BookCreateManyCategoryInputEnvelope
    connect?: BookWhereUniqueInput | BookWhereUniqueInput[]
  }

  export type SeriesCreateNestedManyWithoutCategoryInput = {
    create?: XOR<SeriesCreateWithoutCategoryInput, SeriesUncheckedCreateWithoutCategoryInput> | SeriesCreateWithoutCategoryInput[] | SeriesUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: SeriesCreateOrConnectWithoutCategoryInput | SeriesCreateOrConnectWithoutCategoryInput[]
    createMany?: SeriesCreateManyCategoryInputEnvelope
    connect?: SeriesWhereUniqueInput | SeriesWhereUniqueInput[]
  }

  export type MovieUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<MovieCreateWithoutCategoryInput, MovieUncheckedCreateWithoutCategoryInput> | MovieCreateWithoutCategoryInput[] | MovieUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: MovieCreateOrConnectWithoutCategoryInput | MovieCreateOrConnectWithoutCategoryInput[]
    createMany?: MovieCreateManyCategoryInputEnvelope
    connect?: MovieWhereUniqueInput | MovieWhereUniqueInput[]
  }

  export type BookUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<BookCreateWithoutCategoryInput, BookUncheckedCreateWithoutCategoryInput> | BookCreateWithoutCategoryInput[] | BookUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: BookCreateOrConnectWithoutCategoryInput | BookCreateOrConnectWithoutCategoryInput[]
    createMany?: BookCreateManyCategoryInputEnvelope
    connect?: BookWhereUniqueInput | BookWhereUniqueInput[]
  }

  export type SeriesUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<SeriesCreateWithoutCategoryInput, SeriesUncheckedCreateWithoutCategoryInput> | SeriesCreateWithoutCategoryInput[] | SeriesUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: SeriesCreateOrConnectWithoutCategoryInput | SeriesCreateOrConnectWithoutCategoryInput[]
    createMany?: SeriesCreateManyCategoryInputEnvelope
    connect?: SeriesWhereUniqueInput | SeriesWhereUniqueInput[]
  }

  export type EnumCategoryTypeFieldUpdateOperationsInput = {
    set?: $Enums.CategoryType
  }

  export type MovieUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<MovieCreateWithoutCategoryInput, MovieUncheckedCreateWithoutCategoryInput> | MovieCreateWithoutCategoryInput[] | MovieUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: MovieCreateOrConnectWithoutCategoryInput | MovieCreateOrConnectWithoutCategoryInput[]
    upsert?: MovieUpsertWithWhereUniqueWithoutCategoryInput | MovieUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: MovieCreateManyCategoryInputEnvelope
    set?: MovieWhereUniqueInput | MovieWhereUniqueInput[]
    disconnect?: MovieWhereUniqueInput | MovieWhereUniqueInput[]
    delete?: MovieWhereUniqueInput | MovieWhereUniqueInput[]
    connect?: MovieWhereUniqueInput | MovieWhereUniqueInput[]
    update?: MovieUpdateWithWhereUniqueWithoutCategoryInput | MovieUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: MovieUpdateManyWithWhereWithoutCategoryInput | MovieUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: MovieScalarWhereInput | MovieScalarWhereInput[]
  }

  export type BookUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<BookCreateWithoutCategoryInput, BookUncheckedCreateWithoutCategoryInput> | BookCreateWithoutCategoryInput[] | BookUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: BookCreateOrConnectWithoutCategoryInput | BookCreateOrConnectWithoutCategoryInput[]
    upsert?: BookUpsertWithWhereUniqueWithoutCategoryInput | BookUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: BookCreateManyCategoryInputEnvelope
    set?: BookWhereUniqueInput | BookWhereUniqueInput[]
    disconnect?: BookWhereUniqueInput | BookWhereUniqueInput[]
    delete?: BookWhereUniqueInput | BookWhereUniqueInput[]
    connect?: BookWhereUniqueInput | BookWhereUniqueInput[]
    update?: BookUpdateWithWhereUniqueWithoutCategoryInput | BookUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: BookUpdateManyWithWhereWithoutCategoryInput | BookUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: BookScalarWhereInput | BookScalarWhereInput[]
  }

  export type SeriesUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<SeriesCreateWithoutCategoryInput, SeriesUncheckedCreateWithoutCategoryInput> | SeriesCreateWithoutCategoryInput[] | SeriesUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: SeriesCreateOrConnectWithoutCategoryInput | SeriesCreateOrConnectWithoutCategoryInput[]
    upsert?: SeriesUpsertWithWhereUniqueWithoutCategoryInput | SeriesUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: SeriesCreateManyCategoryInputEnvelope
    set?: SeriesWhereUniqueInput | SeriesWhereUniqueInput[]
    disconnect?: SeriesWhereUniqueInput | SeriesWhereUniqueInput[]
    delete?: SeriesWhereUniqueInput | SeriesWhereUniqueInput[]
    connect?: SeriesWhereUniqueInput | SeriesWhereUniqueInput[]
    update?: SeriesUpdateWithWhereUniqueWithoutCategoryInput | SeriesUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: SeriesUpdateManyWithWhereWithoutCategoryInput | SeriesUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: SeriesScalarWhereInput | SeriesScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type MovieUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<MovieCreateWithoutCategoryInput, MovieUncheckedCreateWithoutCategoryInput> | MovieCreateWithoutCategoryInput[] | MovieUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: MovieCreateOrConnectWithoutCategoryInput | MovieCreateOrConnectWithoutCategoryInput[]
    upsert?: MovieUpsertWithWhereUniqueWithoutCategoryInput | MovieUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: MovieCreateManyCategoryInputEnvelope
    set?: MovieWhereUniqueInput | MovieWhereUniqueInput[]
    disconnect?: MovieWhereUniqueInput | MovieWhereUniqueInput[]
    delete?: MovieWhereUniqueInput | MovieWhereUniqueInput[]
    connect?: MovieWhereUniqueInput | MovieWhereUniqueInput[]
    update?: MovieUpdateWithWhereUniqueWithoutCategoryInput | MovieUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: MovieUpdateManyWithWhereWithoutCategoryInput | MovieUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: MovieScalarWhereInput | MovieScalarWhereInput[]
  }

  export type BookUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<BookCreateWithoutCategoryInput, BookUncheckedCreateWithoutCategoryInput> | BookCreateWithoutCategoryInput[] | BookUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: BookCreateOrConnectWithoutCategoryInput | BookCreateOrConnectWithoutCategoryInput[]
    upsert?: BookUpsertWithWhereUniqueWithoutCategoryInput | BookUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: BookCreateManyCategoryInputEnvelope
    set?: BookWhereUniqueInput | BookWhereUniqueInput[]
    disconnect?: BookWhereUniqueInput | BookWhereUniqueInput[]
    delete?: BookWhereUniqueInput | BookWhereUniqueInput[]
    connect?: BookWhereUniqueInput | BookWhereUniqueInput[]
    update?: BookUpdateWithWhereUniqueWithoutCategoryInput | BookUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: BookUpdateManyWithWhereWithoutCategoryInput | BookUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: BookScalarWhereInput | BookScalarWhereInput[]
  }

  export type SeriesUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<SeriesCreateWithoutCategoryInput, SeriesUncheckedCreateWithoutCategoryInput> | SeriesCreateWithoutCategoryInput[] | SeriesUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: SeriesCreateOrConnectWithoutCategoryInput | SeriesCreateOrConnectWithoutCategoryInput[]
    upsert?: SeriesUpsertWithWhereUniqueWithoutCategoryInput | SeriesUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: SeriesCreateManyCategoryInputEnvelope
    set?: SeriesWhereUniqueInput | SeriesWhereUniqueInput[]
    disconnect?: SeriesWhereUniqueInput | SeriesWhereUniqueInput[]
    delete?: SeriesWhereUniqueInput | SeriesWhereUniqueInput[]
    connect?: SeriesWhereUniqueInput | SeriesWhereUniqueInput[]
    update?: SeriesUpdateWithWhereUniqueWithoutCategoryInput | SeriesUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: SeriesUpdateManyWithWhereWithoutCategoryInput | SeriesUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: SeriesScalarWhereInput | SeriesScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutMoviesInput = {
    create?: XOR<UserCreateWithoutMoviesInput, UserUncheckedCreateWithoutMoviesInput>
    connectOrCreate?: UserCreateOrConnectWithoutMoviesInput
    connect?: UserWhereUniqueInput
  }

  export type CategoryCreateNestedOneWithoutMoviesInput = {
    create?: XOR<CategoryCreateWithoutMoviesInput, CategoryUncheckedCreateWithoutMoviesInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutMoviesInput
    connect?: CategoryWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableEnumMovieStatusFieldUpdateOperationsInput = {
    set?: $Enums.MovieStatus | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdateOneRequiredWithoutMoviesNestedInput = {
    create?: XOR<UserCreateWithoutMoviesInput, UserUncheckedCreateWithoutMoviesInput>
    connectOrCreate?: UserCreateOrConnectWithoutMoviesInput
    upsert?: UserUpsertWithoutMoviesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMoviesInput, UserUpdateWithoutMoviesInput>, UserUncheckedUpdateWithoutMoviesInput>
  }

  export type CategoryUpdateOneWithoutMoviesNestedInput = {
    create?: XOR<CategoryCreateWithoutMoviesInput, CategoryUncheckedCreateWithoutMoviesInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutMoviesInput
    upsert?: CategoryUpsertWithoutMoviesInput
    disconnect?: CategoryWhereInput | boolean
    delete?: CategoryWhereInput | boolean
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutMoviesInput, CategoryUpdateWithoutMoviesInput>, CategoryUncheckedUpdateWithoutMoviesInput>
  }

  export type UserCreateNestedOneWithoutBooksInput = {
    create?: XOR<UserCreateWithoutBooksInput, UserUncheckedCreateWithoutBooksInput>
    connectOrCreate?: UserCreateOrConnectWithoutBooksInput
    connect?: UserWhereUniqueInput
  }

  export type CategoryCreateNestedOneWithoutBooksInput = {
    create?: XOR<CategoryCreateWithoutBooksInput, CategoryUncheckedCreateWithoutBooksInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutBooksInput
    connect?: CategoryWhereUniqueInput
  }

  export type NullableEnumBookStatusFieldUpdateOperationsInput = {
    set?: $Enums.BookStatus | null
  }

  export type UserUpdateOneRequiredWithoutBooksNestedInput = {
    create?: XOR<UserCreateWithoutBooksInput, UserUncheckedCreateWithoutBooksInput>
    connectOrCreate?: UserCreateOrConnectWithoutBooksInput
    upsert?: UserUpsertWithoutBooksInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBooksInput, UserUpdateWithoutBooksInput>, UserUncheckedUpdateWithoutBooksInput>
  }

  export type CategoryUpdateOneWithoutBooksNestedInput = {
    create?: XOR<CategoryCreateWithoutBooksInput, CategoryUncheckedCreateWithoutBooksInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutBooksInput
    upsert?: CategoryUpsertWithoutBooksInput
    disconnect?: CategoryWhereInput | boolean
    delete?: CategoryWhereInput | boolean
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutBooksInput, CategoryUpdateWithoutBooksInput>, CategoryUncheckedUpdateWithoutBooksInput>
  }

  export type UserCreateNestedOneWithoutSeriesInput = {
    create?: XOR<UserCreateWithoutSeriesInput, UserUncheckedCreateWithoutSeriesInput>
    connectOrCreate?: UserCreateOrConnectWithoutSeriesInput
    connect?: UserWhereUniqueInput
  }

  export type CategoryCreateNestedOneWithoutSeriesInput = {
    create?: XOR<CategoryCreateWithoutSeriesInput, CategoryUncheckedCreateWithoutSeriesInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutSeriesInput
    connect?: CategoryWhereUniqueInput
  }

  export type NullableEnumSeriesStatusFieldUpdateOperationsInput = {
    set?: $Enums.SeriesStatus | null
  }

  export type UserUpdateOneRequiredWithoutSeriesNestedInput = {
    create?: XOR<UserCreateWithoutSeriesInput, UserUncheckedCreateWithoutSeriesInput>
    connectOrCreate?: UserCreateOrConnectWithoutSeriesInput
    upsert?: UserUpsertWithoutSeriesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSeriesInput, UserUpdateWithoutSeriesInput>, UserUncheckedUpdateWithoutSeriesInput>
  }

  export type CategoryUpdateOneWithoutSeriesNestedInput = {
    create?: XOR<CategoryCreateWithoutSeriesInput, CategoryUncheckedCreateWithoutSeriesInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutSeriesInput
    upsert?: CategoryUpsertWithoutSeriesInput
    disconnect?: CategoryWhereInput | boolean
    delete?: CategoryWhereInput | boolean
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutSeriesInput, CategoryUpdateWithoutSeriesInput>, CategoryUncheckedUpdateWithoutSeriesInput>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type NestedEnumCategoryTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.CategoryType | EnumCategoryTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CategoryType[] | ListEnumCategoryTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CategoryType[] | ListEnumCategoryTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCategoryTypeFilter<$PrismaModel> | $Enums.CategoryType
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

  export type NestedEnumCategoryTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CategoryType | EnumCategoryTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CategoryType[] | ListEnumCategoryTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CategoryType[] | ListEnumCategoryTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCategoryTypeWithAggregatesFilter<$PrismaModel> | $Enums.CategoryType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCategoryTypeFilter<$PrismaModel>
    _max?: NestedEnumCategoryTypeFilter<$PrismaModel>
  }

  export type NestedEnumMovieStatusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.MovieStatus | EnumMovieStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.MovieStatus[] | ListEnumMovieStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.MovieStatus[] | ListEnumMovieStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumMovieStatusNullableFilter<$PrismaModel> | $Enums.MovieStatus | null
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

  export type NestedEnumMovieStatusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MovieStatus | EnumMovieStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.MovieStatus[] | ListEnumMovieStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.MovieStatus[] | ListEnumMovieStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumMovieStatusNullableWithAggregatesFilter<$PrismaModel> | $Enums.MovieStatus | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumMovieStatusNullableFilter<$PrismaModel>
    _max?: NestedEnumMovieStatusNullableFilter<$PrismaModel>
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

  export type NestedEnumBookStatusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.BookStatus | EnumBookStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.BookStatus[] | ListEnumBookStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.BookStatus[] | ListEnumBookStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumBookStatusNullableFilter<$PrismaModel> | $Enums.BookStatus | null
  }

  export type NestedEnumBookStatusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BookStatus | EnumBookStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.BookStatus[] | ListEnumBookStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.BookStatus[] | ListEnumBookStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumBookStatusNullableWithAggregatesFilter<$PrismaModel> | $Enums.BookStatus | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumBookStatusNullableFilter<$PrismaModel>
    _max?: NestedEnumBookStatusNullableFilter<$PrismaModel>
  }

  export type NestedEnumSeriesStatusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.SeriesStatus | EnumSeriesStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.SeriesStatus[] | ListEnumSeriesStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.SeriesStatus[] | ListEnumSeriesStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumSeriesStatusNullableFilter<$PrismaModel> | $Enums.SeriesStatus | null
  }

  export type NestedEnumSeriesStatusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SeriesStatus | EnumSeriesStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.SeriesStatus[] | ListEnumSeriesStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.SeriesStatus[] | ListEnumSeriesStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumSeriesStatusNullableWithAggregatesFilter<$PrismaModel> | $Enums.SeriesStatus | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumSeriesStatusNullableFilter<$PrismaModel>
    _max?: NestedEnumSeriesStatusNullableFilter<$PrismaModel>
  }

  export type MovieCreateWithoutUserInput = {
    id?: string
    title: string
    release_year?: number | null
    director?: string | null
    poster_url?: string | null
    status?: $Enums.MovieStatus | null
    watched_at?: Date | string | null
    created_at?: Date | string
    category?: CategoryCreateNestedOneWithoutMoviesInput
  }

  export type MovieUncheckedCreateWithoutUserInput = {
    id?: string
    title: string
    release_year?: number | null
    director?: string | null
    category_id?: number | null
    poster_url?: string | null
    status?: $Enums.MovieStatus | null
    watched_at?: Date | string | null
    created_at?: Date | string
  }

  export type MovieCreateOrConnectWithoutUserInput = {
    where: MovieWhereUniqueInput
    create: XOR<MovieCreateWithoutUserInput, MovieUncheckedCreateWithoutUserInput>
  }

  export type MovieCreateManyUserInputEnvelope = {
    data: MovieCreateManyUserInput | MovieCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type BookCreateWithoutUserInput = {
    id?: string
    title: string
    release_year?: number | null
    author?: string | null
    cover_url?: string | null
    status?: $Enums.BookStatus | null
    started_reading_at?: Date | string | null
    finished_reading_at?: Date | string | null
    created_at?: Date | string
    category?: CategoryCreateNestedOneWithoutBooksInput
  }

  export type BookUncheckedCreateWithoutUserInput = {
    id?: string
    title: string
    release_year?: number | null
    author?: string | null
    category_id?: number | null
    cover_url?: string | null
    status?: $Enums.BookStatus | null
    started_reading_at?: Date | string | null
    finished_reading_at?: Date | string | null
    created_at?: Date | string
  }

  export type BookCreateOrConnectWithoutUserInput = {
    where: BookWhereUniqueInput
    create: XOR<BookCreateWithoutUserInput, BookUncheckedCreateWithoutUserInput>
  }

  export type BookCreateManyUserInputEnvelope = {
    data: BookCreateManyUserInput | BookCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SeriesCreateWithoutUserInput = {
    id?: string
    title: string
    release_year?: number | null
    poster_url?: string | null
    status?: $Enums.SeriesStatus | null
    created_at?: Date | string
    category?: CategoryCreateNestedOneWithoutSeriesInput
  }

  export type SeriesUncheckedCreateWithoutUserInput = {
    id?: string
    title: string
    release_year?: number | null
    category_id?: number | null
    poster_url?: string | null
    status?: $Enums.SeriesStatus | null
    created_at?: Date | string
  }

  export type SeriesCreateOrConnectWithoutUserInput = {
    where: SeriesWhereUniqueInput
    create: XOR<SeriesCreateWithoutUserInput, SeriesUncheckedCreateWithoutUserInput>
  }

  export type SeriesCreateManyUserInputEnvelope = {
    data: SeriesCreateManyUserInput | SeriesCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type MovieUpsertWithWhereUniqueWithoutUserInput = {
    where: MovieWhereUniqueInput
    update: XOR<MovieUpdateWithoutUserInput, MovieUncheckedUpdateWithoutUserInput>
    create: XOR<MovieCreateWithoutUserInput, MovieUncheckedCreateWithoutUserInput>
  }

  export type MovieUpdateWithWhereUniqueWithoutUserInput = {
    where: MovieWhereUniqueInput
    data: XOR<MovieUpdateWithoutUserInput, MovieUncheckedUpdateWithoutUserInput>
  }

  export type MovieUpdateManyWithWhereWithoutUserInput = {
    where: MovieScalarWhereInput
    data: XOR<MovieUpdateManyMutationInput, MovieUncheckedUpdateManyWithoutUserInput>
  }

  export type MovieScalarWhereInput = {
    AND?: MovieScalarWhereInput | MovieScalarWhereInput[]
    OR?: MovieScalarWhereInput[]
    NOT?: MovieScalarWhereInput | MovieScalarWhereInput[]
    id?: UuidFilter<"Movie"> | string
    user_id?: UuidFilter<"Movie"> | string
    title?: StringFilter<"Movie"> | string
    release_year?: IntNullableFilter<"Movie"> | number | null
    director?: StringNullableFilter<"Movie"> | string | null
    category_id?: IntNullableFilter<"Movie"> | number | null
    poster_url?: StringNullableFilter<"Movie"> | string | null
    status?: EnumMovieStatusNullableFilter<"Movie"> | $Enums.MovieStatus | null
    watched_at?: DateTimeNullableFilter<"Movie"> | Date | string | null
    created_at?: DateTimeFilter<"Movie"> | Date | string
  }

  export type BookUpsertWithWhereUniqueWithoutUserInput = {
    where: BookWhereUniqueInput
    update: XOR<BookUpdateWithoutUserInput, BookUncheckedUpdateWithoutUserInput>
    create: XOR<BookCreateWithoutUserInput, BookUncheckedCreateWithoutUserInput>
  }

  export type BookUpdateWithWhereUniqueWithoutUserInput = {
    where: BookWhereUniqueInput
    data: XOR<BookUpdateWithoutUserInput, BookUncheckedUpdateWithoutUserInput>
  }

  export type BookUpdateManyWithWhereWithoutUserInput = {
    where: BookScalarWhereInput
    data: XOR<BookUpdateManyMutationInput, BookUncheckedUpdateManyWithoutUserInput>
  }

  export type BookScalarWhereInput = {
    AND?: BookScalarWhereInput | BookScalarWhereInput[]
    OR?: BookScalarWhereInput[]
    NOT?: BookScalarWhereInput | BookScalarWhereInput[]
    id?: UuidFilter<"Book"> | string
    user_id?: UuidFilter<"Book"> | string
    title?: StringFilter<"Book"> | string
    release_year?: IntNullableFilter<"Book"> | number | null
    author?: StringNullableFilter<"Book"> | string | null
    category_id?: IntNullableFilter<"Book"> | number | null
    cover_url?: StringNullableFilter<"Book"> | string | null
    status?: EnumBookStatusNullableFilter<"Book"> | $Enums.BookStatus | null
    started_reading_at?: DateTimeNullableFilter<"Book"> | Date | string | null
    finished_reading_at?: DateTimeNullableFilter<"Book"> | Date | string | null
    created_at?: DateTimeFilter<"Book"> | Date | string
  }

  export type SeriesUpsertWithWhereUniqueWithoutUserInput = {
    where: SeriesWhereUniqueInput
    update: XOR<SeriesUpdateWithoutUserInput, SeriesUncheckedUpdateWithoutUserInput>
    create: XOR<SeriesCreateWithoutUserInput, SeriesUncheckedCreateWithoutUserInput>
  }

  export type SeriesUpdateWithWhereUniqueWithoutUserInput = {
    where: SeriesWhereUniqueInput
    data: XOR<SeriesUpdateWithoutUserInput, SeriesUncheckedUpdateWithoutUserInput>
  }

  export type SeriesUpdateManyWithWhereWithoutUserInput = {
    where: SeriesScalarWhereInput
    data: XOR<SeriesUpdateManyMutationInput, SeriesUncheckedUpdateManyWithoutUserInput>
  }

  export type SeriesScalarWhereInput = {
    AND?: SeriesScalarWhereInput | SeriesScalarWhereInput[]
    OR?: SeriesScalarWhereInput[]
    NOT?: SeriesScalarWhereInput | SeriesScalarWhereInput[]
    id?: UuidFilter<"Series"> | string
    user_id?: UuidFilter<"Series"> | string
    title?: StringFilter<"Series"> | string
    release_year?: IntNullableFilter<"Series"> | number | null
    category_id?: IntNullableFilter<"Series"> | number | null
    poster_url?: StringNullableFilter<"Series"> | string | null
    status?: EnumSeriesStatusNullableFilter<"Series"> | $Enums.SeriesStatus | null
    created_at?: DateTimeFilter<"Series"> | Date | string
  }

  export type MovieCreateWithoutCategoryInput = {
    id?: string
    title: string
    release_year?: number | null
    director?: string | null
    poster_url?: string | null
    status?: $Enums.MovieStatus | null
    watched_at?: Date | string | null
    created_at?: Date | string
    user: UserCreateNestedOneWithoutMoviesInput
  }

  export type MovieUncheckedCreateWithoutCategoryInput = {
    id?: string
    user_id: string
    title: string
    release_year?: number | null
    director?: string | null
    poster_url?: string | null
    status?: $Enums.MovieStatus | null
    watched_at?: Date | string | null
    created_at?: Date | string
  }

  export type MovieCreateOrConnectWithoutCategoryInput = {
    where: MovieWhereUniqueInput
    create: XOR<MovieCreateWithoutCategoryInput, MovieUncheckedCreateWithoutCategoryInput>
  }

  export type MovieCreateManyCategoryInputEnvelope = {
    data: MovieCreateManyCategoryInput | MovieCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type BookCreateWithoutCategoryInput = {
    id?: string
    title: string
    release_year?: number | null
    author?: string | null
    cover_url?: string | null
    status?: $Enums.BookStatus | null
    started_reading_at?: Date | string | null
    finished_reading_at?: Date | string | null
    created_at?: Date | string
    user: UserCreateNestedOneWithoutBooksInput
  }

  export type BookUncheckedCreateWithoutCategoryInput = {
    id?: string
    user_id: string
    title: string
    release_year?: number | null
    author?: string | null
    cover_url?: string | null
    status?: $Enums.BookStatus | null
    started_reading_at?: Date | string | null
    finished_reading_at?: Date | string | null
    created_at?: Date | string
  }

  export type BookCreateOrConnectWithoutCategoryInput = {
    where: BookWhereUniqueInput
    create: XOR<BookCreateWithoutCategoryInput, BookUncheckedCreateWithoutCategoryInput>
  }

  export type BookCreateManyCategoryInputEnvelope = {
    data: BookCreateManyCategoryInput | BookCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type SeriesCreateWithoutCategoryInput = {
    id?: string
    title: string
    release_year?: number | null
    poster_url?: string | null
    status?: $Enums.SeriesStatus | null
    created_at?: Date | string
    user: UserCreateNestedOneWithoutSeriesInput
  }

  export type SeriesUncheckedCreateWithoutCategoryInput = {
    id?: string
    user_id: string
    title: string
    release_year?: number | null
    poster_url?: string | null
    status?: $Enums.SeriesStatus | null
    created_at?: Date | string
  }

  export type SeriesCreateOrConnectWithoutCategoryInput = {
    where: SeriesWhereUniqueInput
    create: XOR<SeriesCreateWithoutCategoryInput, SeriesUncheckedCreateWithoutCategoryInput>
  }

  export type SeriesCreateManyCategoryInputEnvelope = {
    data: SeriesCreateManyCategoryInput | SeriesCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type MovieUpsertWithWhereUniqueWithoutCategoryInput = {
    where: MovieWhereUniqueInput
    update: XOR<MovieUpdateWithoutCategoryInput, MovieUncheckedUpdateWithoutCategoryInput>
    create: XOR<MovieCreateWithoutCategoryInput, MovieUncheckedCreateWithoutCategoryInput>
  }

  export type MovieUpdateWithWhereUniqueWithoutCategoryInput = {
    where: MovieWhereUniqueInput
    data: XOR<MovieUpdateWithoutCategoryInput, MovieUncheckedUpdateWithoutCategoryInput>
  }

  export type MovieUpdateManyWithWhereWithoutCategoryInput = {
    where: MovieScalarWhereInput
    data: XOR<MovieUpdateManyMutationInput, MovieUncheckedUpdateManyWithoutCategoryInput>
  }

  export type BookUpsertWithWhereUniqueWithoutCategoryInput = {
    where: BookWhereUniqueInput
    update: XOR<BookUpdateWithoutCategoryInput, BookUncheckedUpdateWithoutCategoryInput>
    create: XOR<BookCreateWithoutCategoryInput, BookUncheckedCreateWithoutCategoryInput>
  }

  export type BookUpdateWithWhereUniqueWithoutCategoryInput = {
    where: BookWhereUniqueInput
    data: XOR<BookUpdateWithoutCategoryInput, BookUncheckedUpdateWithoutCategoryInput>
  }

  export type BookUpdateManyWithWhereWithoutCategoryInput = {
    where: BookScalarWhereInput
    data: XOR<BookUpdateManyMutationInput, BookUncheckedUpdateManyWithoutCategoryInput>
  }

  export type SeriesUpsertWithWhereUniqueWithoutCategoryInput = {
    where: SeriesWhereUniqueInput
    update: XOR<SeriesUpdateWithoutCategoryInput, SeriesUncheckedUpdateWithoutCategoryInput>
    create: XOR<SeriesCreateWithoutCategoryInput, SeriesUncheckedCreateWithoutCategoryInput>
  }

  export type SeriesUpdateWithWhereUniqueWithoutCategoryInput = {
    where: SeriesWhereUniqueInput
    data: XOR<SeriesUpdateWithoutCategoryInput, SeriesUncheckedUpdateWithoutCategoryInput>
  }

  export type SeriesUpdateManyWithWhereWithoutCategoryInput = {
    where: SeriesScalarWhereInput
    data: XOR<SeriesUpdateManyMutationInput, SeriesUncheckedUpdateManyWithoutCategoryInput>
  }

  export type UserCreateWithoutMoviesInput = {
    id?: string
    name: string
    email: string
    username?: string | null
    is_public?: boolean
    password_hash: string
    profile_picture_url?: string | null
    created_at?: Date | string
    books?: BookCreateNestedManyWithoutUserInput
    series?: SeriesCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutMoviesInput = {
    id?: string
    name: string
    email: string
    username?: string | null
    is_public?: boolean
    password_hash: string
    profile_picture_url?: string | null
    created_at?: Date | string
    books?: BookUncheckedCreateNestedManyWithoutUserInput
    series?: SeriesUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutMoviesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMoviesInput, UserUncheckedCreateWithoutMoviesInput>
  }

  export type CategoryCreateWithoutMoviesInput = {
    name: string
    type: $Enums.CategoryType
    books?: BookCreateNestedManyWithoutCategoryInput
    series?: SeriesCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateWithoutMoviesInput = {
    id?: number
    name: string
    type: $Enums.CategoryType
    books?: BookUncheckedCreateNestedManyWithoutCategoryInput
    series?: SeriesUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryCreateOrConnectWithoutMoviesInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutMoviesInput, CategoryUncheckedCreateWithoutMoviesInput>
  }

  export type UserUpsertWithoutMoviesInput = {
    update: XOR<UserUpdateWithoutMoviesInput, UserUncheckedUpdateWithoutMoviesInput>
    create: XOR<UserCreateWithoutMoviesInput, UserUncheckedCreateWithoutMoviesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMoviesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMoviesInput, UserUncheckedUpdateWithoutMoviesInput>
  }

  export type UserUpdateWithoutMoviesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    is_public?: BoolFieldUpdateOperationsInput | boolean
    password_hash?: StringFieldUpdateOperationsInput | string
    profile_picture_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    books?: BookUpdateManyWithoutUserNestedInput
    series?: SeriesUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutMoviesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    is_public?: BoolFieldUpdateOperationsInput | boolean
    password_hash?: StringFieldUpdateOperationsInput | string
    profile_picture_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    books?: BookUncheckedUpdateManyWithoutUserNestedInput
    series?: SeriesUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CategoryUpsertWithoutMoviesInput = {
    update: XOR<CategoryUpdateWithoutMoviesInput, CategoryUncheckedUpdateWithoutMoviesInput>
    create: XOR<CategoryCreateWithoutMoviesInput, CategoryUncheckedCreateWithoutMoviesInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutMoviesInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutMoviesInput, CategoryUncheckedUpdateWithoutMoviesInput>
  }

  export type CategoryUpdateWithoutMoviesInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumCategoryTypeFieldUpdateOperationsInput | $Enums.CategoryType
    books?: BookUpdateManyWithoutCategoryNestedInput
    series?: SeriesUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateWithoutMoviesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumCategoryTypeFieldUpdateOperationsInput | $Enums.CategoryType
    books?: BookUncheckedUpdateManyWithoutCategoryNestedInput
    series?: SeriesUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type UserCreateWithoutBooksInput = {
    id?: string
    name: string
    email: string
    username?: string | null
    is_public?: boolean
    password_hash: string
    profile_picture_url?: string | null
    created_at?: Date | string
    movies?: MovieCreateNestedManyWithoutUserInput
    series?: SeriesCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutBooksInput = {
    id?: string
    name: string
    email: string
    username?: string | null
    is_public?: boolean
    password_hash: string
    profile_picture_url?: string | null
    created_at?: Date | string
    movies?: MovieUncheckedCreateNestedManyWithoutUserInput
    series?: SeriesUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutBooksInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBooksInput, UserUncheckedCreateWithoutBooksInput>
  }

  export type CategoryCreateWithoutBooksInput = {
    name: string
    type: $Enums.CategoryType
    movies?: MovieCreateNestedManyWithoutCategoryInput
    series?: SeriesCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateWithoutBooksInput = {
    id?: number
    name: string
    type: $Enums.CategoryType
    movies?: MovieUncheckedCreateNestedManyWithoutCategoryInput
    series?: SeriesUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryCreateOrConnectWithoutBooksInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutBooksInput, CategoryUncheckedCreateWithoutBooksInput>
  }

  export type UserUpsertWithoutBooksInput = {
    update: XOR<UserUpdateWithoutBooksInput, UserUncheckedUpdateWithoutBooksInput>
    create: XOR<UserCreateWithoutBooksInput, UserUncheckedCreateWithoutBooksInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBooksInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBooksInput, UserUncheckedUpdateWithoutBooksInput>
  }

  export type UserUpdateWithoutBooksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    is_public?: BoolFieldUpdateOperationsInput | boolean
    password_hash?: StringFieldUpdateOperationsInput | string
    profile_picture_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    movies?: MovieUpdateManyWithoutUserNestedInput
    series?: SeriesUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutBooksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    is_public?: BoolFieldUpdateOperationsInput | boolean
    password_hash?: StringFieldUpdateOperationsInput | string
    profile_picture_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    movies?: MovieUncheckedUpdateManyWithoutUserNestedInput
    series?: SeriesUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CategoryUpsertWithoutBooksInput = {
    update: XOR<CategoryUpdateWithoutBooksInput, CategoryUncheckedUpdateWithoutBooksInput>
    create: XOR<CategoryCreateWithoutBooksInput, CategoryUncheckedCreateWithoutBooksInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutBooksInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutBooksInput, CategoryUncheckedUpdateWithoutBooksInput>
  }

  export type CategoryUpdateWithoutBooksInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumCategoryTypeFieldUpdateOperationsInput | $Enums.CategoryType
    movies?: MovieUpdateManyWithoutCategoryNestedInput
    series?: SeriesUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateWithoutBooksInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumCategoryTypeFieldUpdateOperationsInput | $Enums.CategoryType
    movies?: MovieUncheckedUpdateManyWithoutCategoryNestedInput
    series?: SeriesUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type UserCreateWithoutSeriesInput = {
    id?: string
    name: string
    email: string
    username?: string | null
    is_public?: boolean
    password_hash: string
    profile_picture_url?: string | null
    created_at?: Date | string
    movies?: MovieCreateNestedManyWithoutUserInput
    books?: BookCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSeriesInput = {
    id?: string
    name: string
    email: string
    username?: string | null
    is_public?: boolean
    password_hash: string
    profile_picture_url?: string | null
    created_at?: Date | string
    movies?: MovieUncheckedCreateNestedManyWithoutUserInput
    books?: BookUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSeriesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSeriesInput, UserUncheckedCreateWithoutSeriesInput>
  }

  export type CategoryCreateWithoutSeriesInput = {
    name: string
    type: $Enums.CategoryType
    movies?: MovieCreateNestedManyWithoutCategoryInput
    books?: BookCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateWithoutSeriesInput = {
    id?: number
    name: string
    type: $Enums.CategoryType
    movies?: MovieUncheckedCreateNestedManyWithoutCategoryInput
    books?: BookUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryCreateOrConnectWithoutSeriesInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutSeriesInput, CategoryUncheckedCreateWithoutSeriesInput>
  }

  export type UserUpsertWithoutSeriesInput = {
    update: XOR<UserUpdateWithoutSeriesInput, UserUncheckedUpdateWithoutSeriesInput>
    create: XOR<UserCreateWithoutSeriesInput, UserUncheckedCreateWithoutSeriesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSeriesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSeriesInput, UserUncheckedUpdateWithoutSeriesInput>
  }

  export type UserUpdateWithoutSeriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    is_public?: BoolFieldUpdateOperationsInput | boolean
    password_hash?: StringFieldUpdateOperationsInput | string
    profile_picture_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    movies?: MovieUpdateManyWithoutUserNestedInput
    books?: BookUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSeriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    is_public?: BoolFieldUpdateOperationsInput | boolean
    password_hash?: StringFieldUpdateOperationsInput | string
    profile_picture_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    movies?: MovieUncheckedUpdateManyWithoutUserNestedInput
    books?: BookUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CategoryUpsertWithoutSeriesInput = {
    update: XOR<CategoryUpdateWithoutSeriesInput, CategoryUncheckedUpdateWithoutSeriesInput>
    create: XOR<CategoryCreateWithoutSeriesInput, CategoryUncheckedCreateWithoutSeriesInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutSeriesInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutSeriesInput, CategoryUncheckedUpdateWithoutSeriesInput>
  }

  export type CategoryUpdateWithoutSeriesInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumCategoryTypeFieldUpdateOperationsInput | $Enums.CategoryType
    movies?: MovieUpdateManyWithoutCategoryNestedInput
    books?: BookUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateWithoutSeriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumCategoryTypeFieldUpdateOperationsInput | $Enums.CategoryType
    movies?: MovieUncheckedUpdateManyWithoutCategoryNestedInput
    books?: BookUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type MovieCreateManyUserInput = {
    id?: string
    title: string
    release_year?: number | null
    director?: string | null
    category_id?: number | null
    poster_url?: string | null
    status?: $Enums.MovieStatus | null
    watched_at?: Date | string | null
    created_at?: Date | string
  }

  export type BookCreateManyUserInput = {
    id?: string
    title: string
    release_year?: number | null
    author?: string | null
    category_id?: number | null
    cover_url?: string | null
    status?: $Enums.BookStatus | null
    started_reading_at?: Date | string | null
    finished_reading_at?: Date | string | null
    created_at?: Date | string
  }

  export type SeriesCreateManyUserInput = {
    id?: string
    title: string
    release_year?: number | null
    category_id?: number | null
    poster_url?: string | null
    status?: $Enums.SeriesStatus | null
    created_at?: Date | string
  }

  export type MovieUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    release_year?: NullableIntFieldUpdateOperationsInput | number | null
    director?: NullableStringFieldUpdateOperationsInput | string | null
    poster_url?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumMovieStatusFieldUpdateOperationsInput | $Enums.MovieStatus | null
    watched_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneWithoutMoviesNestedInput
  }

  export type MovieUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    release_year?: NullableIntFieldUpdateOperationsInput | number | null
    director?: NullableStringFieldUpdateOperationsInput | string | null
    category_id?: NullableIntFieldUpdateOperationsInput | number | null
    poster_url?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumMovieStatusFieldUpdateOperationsInput | $Enums.MovieStatus | null
    watched_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MovieUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    release_year?: NullableIntFieldUpdateOperationsInput | number | null
    director?: NullableStringFieldUpdateOperationsInput | string | null
    category_id?: NullableIntFieldUpdateOperationsInput | number | null
    poster_url?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumMovieStatusFieldUpdateOperationsInput | $Enums.MovieStatus | null
    watched_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    release_year?: NullableIntFieldUpdateOperationsInput | number | null
    author?: NullableStringFieldUpdateOperationsInput | string | null
    cover_url?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumBookStatusFieldUpdateOperationsInput | $Enums.BookStatus | null
    started_reading_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finished_reading_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneWithoutBooksNestedInput
  }

  export type BookUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    release_year?: NullableIntFieldUpdateOperationsInput | number | null
    author?: NullableStringFieldUpdateOperationsInput | string | null
    category_id?: NullableIntFieldUpdateOperationsInput | number | null
    cover_url?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumBookStatusFieldUpdateOperationsInput | $Enums.BookStatus | null
    started_reading_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finished_reading_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    release_year?: NullableIntFieldUpdateOperationsInput | number | null
    author?: NullableStringFieldUpdateOperationsInput | string | null
    category_id?: NullableIntFieldUpdateOperationsInput | number | null
    cover_url?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumBookStatusFieldUpdateOperationsInput | $Enums.BookStatus | null
    started_reading_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finished_reading_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SeriesUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    release_year?: NullableIntFieldUpdateOperationsInput | number | null
    poster_url?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumSeriesStatusFieldUpdateOperationsInput | $Enums.SeriesStatus | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneWithoutSeriesNestedInput
  }

  export type SeriesUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    release_year?: NullableIntFieldUpdateOperationsInput | number | null
    category_id?: NullableIntFieldUpdateOperationsInput | number | null
    poster_url?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumSeriesStatusFieldUpdateOperationsInput | $Enums.SeriesStatus | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SeriesUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    release_year?: NullableIntFieldUpdateOperationsInput | number | null
    category_id?: NullableIntFieldUpdateOperationsInput | number | null
    poster_url?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumSeriesStatusFieldUpdateOperationsInput | $Enums.SeriesStatus | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MovieCreateManyCategoryInput = {
    id?: string
    user_id: string
    title: string
    release_year?: number | null
    director?: string | null
    poster_url?: string | null
    status?: $Enums.MovieStatus | null
    watched_at?: Date | string | null
    created_at?: Date | string
  }

  export type BookCreateManyCategoryInput = {
    id?: string
    user_id: string
    title: string
    release_year?: number | null
    author?: string | null
    cover_url?: string | null
    status?: $Enums.BookStatus | null
    started_reading_at?: Date | string | null
    finished_reading_at?: Date | string | null
    created_at?: Date | string
  }

  export type SeriesCreateManyCategoryInput = {
    id?: string
    user_id: string
    title: string
    release_year?: number | null
    poster_url?: string | null
    status?: $Enums.SeriesStatus | null
    created_at?: Date | string
  }

  export type MovieUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    release_year?: NullableIntFieldUpdateOperationsInput | number | null
    director?: NullableStringFieldUpdateOperationsInput | string | null
    poster_url?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumMovieStatusFieldUpdateOperationsInput | $Enums.MovieStatus | null
    watched_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutMoviesNestedInput
  }

  export type MovieUncheckedUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    release_year?: NullableIntFieldUpdateOperationsInput | number | null
    director?: NullableStringFieldUpdateOperationsInput | string | null
    poster_url?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumMovieStatusFieldUpdateOperationsInput | $Enums.MovieStatus | null
    watched_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MovieUncheckedUpdateManyWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    release_year?: NullableIntFieldUpdateOperationsInput | number | null
    director?: NullableStringFieldUpdateOperationsInput | string | null
    poster_url?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumMovieStatusFieldUpdateOperationsInput | $Enums.MovieStatus | null
    watched_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    release_year?: NullableIntFieldUpdateOperationsInput | number | null
    author?: NullableStringFieldUpdateOperationsInput | string | null
    cover_url?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumBookStatusFieldUpdateOperationsInput | $Enums.BookStatus | null
    started_reading_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finished_reading_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutBooksNestedInput
  }

  export type BookUncheckedUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    release_year?: NullableIntFieldUpdateOperationsInput | number | null
    author?: NullableStringFieldUpdateOperationsInput | string | null
    cover_url?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumBookStatusFieldUpdateOperationsInput | $Enums.BookStatus | null
    started_reading_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finished_reading_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookUncheckedUpdateManyWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    release_year?: NullableIntFieldUpdateOperationsInput | number | null
    author?: NullableStringFieldUpdateOperationsInput | string | null
    cover_url?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumBookStatusFieldUpdateOperationsInput | $Enums.BookStatus | null
    started_reading_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finished_reading_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SeriesUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    release_year?: NullableIntFieldUpdateOperationsInput | number | null
    poster_url?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumSeriesStatusFieldUpdateOperationsInput | $Enums.SeriesStatus | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSeriesNestedInput
  }

  export type SeriesUncheckedUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    release_year?: NullableIntFieldUpdateOperationsInput | number | null
    poster_url?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumSeriesStatusFieldUpdateOperationsInput | $Enums.SeriesStatus | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SeriesUncheckedUpdateManyWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    release_year?: NullableIntFieldUpdateOperationsInput | number | null
    poster_url?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumSeriesStatusFieldUpdateOperationsInput | $Enums.SeriesStatus | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CategoryCountOutputTypeDefaultArgs instead
     */
    export type CategoryCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CategoryCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CategoryDefaultArgs instead
     */
    export type CategoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CategoryDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MovieDefaultArgs instead
     */
    export type MovieArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MovieDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BookDefaultArgs instead
     */
    export type BookArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BookDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SeriesDefaultArgs instead
     */
    export type SeriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SeriesDefaultArgs<ExtArgs>

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