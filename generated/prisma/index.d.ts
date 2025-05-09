
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
 * Model Portfolio
 * 
 */
export type Portfolio = $Result.DefaultSelection<Prisma.$PortfolioPayload>
/**
 * Model Holding
 * 
 */
export type Holding = $Result.DefaultSelection<Prisma.$HoldingPayload>
/**
 * Model SharedPortfolioAccess
 * 
 */
export type SharedPortfolioAccess = $Result.DefaultSelection<Prisma.$SharedPortfolioAccessPayload>
/**
 * Model TokenAccessLog
 * 
 */
export type TokenAccessLog = $Result.DefaultSelection<Prisma.$TokenAccessLogPayload>
/**
 * Model AIInsight
 * 
 */
export type AIInsight = $Result.DefaultSelection<Prisma.$AIInsightPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const PortfolioVisibility: {
  PRIVATE: 'PRIVATE',
  PUBLIC: 'PUBLIC',
  SMART_SHARED: 'SMART_SHARED'
};

export type PortfolioVisibility = (typeof PortfolioVisibility)[keyof typeof PortfolioVisibility]

}

export type PortfolioVisibility = $Enums.PortfolioVisibility

export const PortfolioVisibility: typeof $Enums.PortfolioVisibility

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
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P]): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number }): $Utils.JsPromise<R>

  /**
   * Executes a raw MongoDB command and returns the result of it.
   * @example
   * ```
   * const user = await prisma.$runCommandRaw({
   *   aggregate: 'User',
   *   pipeline: [{ $match: { name: 'Bob' } }, { $project: { email: true, _id: false } }],
   *   explain: false,
   * })
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $runCommandRaw(command: Prisma.InputJsonObject): Prisma.PrismaPromise<Prisma.JsonObject>

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
   * `prisma.portfolio`: Exposes CRUD operations for the **Portfolio** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Portfolios
    * const portfolios = await prisma.portfolio.findMany()
    * ```
    */
  get portfolio(): Prisma.PortfolioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.holding`: Exposes CRUD operations for the **Holding** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Holdings
    * const holdings = await prisma.holding.findMany()
    * ```
    */
  get holding(): Prisma.HoldingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sharedPortfolioAccess`: Exposes CRUD operations for the **SharedPortfolioAccess** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SharedPortfolioAccesses
    * const sharedPortfolioAccesses = await prisma.sharedPortfolioAccess.findMany()
    * ```
    */
  get sharedPortfolioAccess(): Prisma.SharedPortfolioAccessDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tokenAccessLog`: Exposes CRUD operations for the **TokenAccessLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TokenAccessLogs
    * const tokenAccessLogs = await prisma.tokenAccessLog.findMany()
    * ```
    */
  get tokenAccessLog(): Prisma.TokenAccessLogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.aIInsight`: Exposes CRUD operations for the **AIInsight** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AIInsights
    * const aIInsights = await prisma.aIInsight.findMany()
    * ```
    */
  get aIInsight(): Prisma.AIInsightDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
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
    Portfolio: 'Portfolio',
    Holding: 'Holding',
    SharedPortfolioAccess: 'SharedPortfolioAccess',
    TokenAccessLog: 'TokenAccessLog',
    AIInsight: 'AIInsight'
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
      modelProps: "user" | "portfolio" | "holding" | "sharedPortfolioAccess" | "tokenAccessLog" | "aIInsight"
      txIsolationLevel: never
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
          findRaw: {
            args: Prisma.UserFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.UserAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Portfolio: {
        payload: Prisma.$PortfolioPayload<ExtArgs>
        fields: Prisma.PortfolioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PortfolioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PortfolioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioPayload>
          }
          findFirst: {
            args: Prisma.PortfolioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PortfolioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioPayload>
          }
          findMany: {
            args: Prisma.PortfolioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioPayload>[]
          }
          create: {
            args: Prisma.PortfolioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioPayload>
          }
          createMany: {
            args: Prisma.PortfolioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PortfolioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioPayload>
          }
          update: {
            args: Prisma.PortfolioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioPayload>
          }
          deleteMany: {
            args: Prisma.PortfolioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PortfolioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PortfolioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioPayload>
          }
          aggregate: {
            args: Prisma.PortfolioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePortfolio>
          }
          groupBy: {
            args: Prisma.PortfolioGroupByArgs<ExtArgs>
            result: $Utils.Optional<PortfolioGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.PortfolioFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.PortfolioAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.PortfolioCountArgs<ExtArgs>
            result: $Utils.Optional<PortfolioCountAggregateOutputType> | number
          }
        }
      }
      Holding: {
        payload: Prisma.$HoldingPayload<ExtArgs>
        fields: Prisma.HoldingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HoldingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HoldingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HoldingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HoldingPayload>
          }
          findFirst: {
            args: Prisma.HoldingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HoldingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HoldingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HoldingPayload>
          }
          findMany: {
            args: Prisma.HoldingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HoldingPayload>[]
          }
          create: {
            args: Prisma.HoldingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HoldingPayload>
          }
          createMany: {
            args: Prisma.HoldingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.HoldingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HoldingPayload>
          }
          update: {
            args: Prisma.HoldingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HoldingPayload>
          }
          deleteMany: {
            args: Prisma.HoldingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HoldingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.HoldingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HoldingPayload>
          }
          aggregate: {
            args: Prisma.HoldingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHolding>
          }
          groupBy: {
            args: Prisma.HoldingGroupByArgs<ExtArgs>
            result: $Utils.Optional<HoldingGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.HoldingFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.HoldingAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.HoldingCountArgs<ExtArgs>
            result: $Utils.Optional<HoldingCountAggregateOutputType> | number
          }
        }
      }
      SharedPortfolioAccess: {
        payload: Prisma.$SharedPortfolioAccessPayload<ExtArgs>
        fields: Prisma.SharedPortfolioAccessFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SharedPortfolioAccessFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SharedPortfolioAccessPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SharedPortfolioAccessFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SharedPortfolioAccessPayload>
          }
          findFirst: {
            args: Prisma.SharedPortfolioAccessFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SharedPortfolioAccessPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SharedPortfolioAccessFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SharedPortfolioAccessPayload>
          }
          findMany: {
            args: Prisma.SharedPortfolioAccessFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SharedPortfolioAccessPayload>[]
          }
          create: {
            args: Prisma.SharedPortfolioAccessCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SharedPortfolioAccessPayload>
          }
          createMany: {
            args: Prisma.SharedPortfolioAccessCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.SharedPortfolioAccessDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SharedPortfolioAccessPayload>
          }
          update: {
            args: Prisma.SharedPortfolioAccessUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SharedPortfolioAccessPayload>
          }
          deleteMany: {
            args: Prisma.SharedPortfolioAccessDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SharedPortfolioAccessUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SharedPortfolioAccessUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SharedPortfolioAccessPayload>
          }
          aggregate: {
            args: Prisma.SharedPortfolioAccessAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSharedPortfolioAccess>
          }
          groupBy: {
            args: Prisma.SharedPortfolioAccessGroupByArgs<ExtArgs>
            result: $Utils.Optional<SharedPortfolioAccessGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.SharedPortfolioAccessFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.SharedPortfolioAccessAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.SharedPortfolioAccessCountArgs<ExtArgs>
            result: $Utils.Optional<SharedPortfolioAccessCountAggregateOutputType> | number
          }
        }
      }
      TokenAccessLog: {
        payload: Prisma.$TokenAccessLogPayload<ExtArgs>
        fields: Prisma.TokenAccessLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TokenAccessLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenAccessLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TokenAccessLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenAccessLogPayload>
          }
          findFirst: {
            args: Prisma.TokenAccessLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenAccessLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TokenAccessLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenAccessLogPayload>
          }
          findMany: {
            args: Prisma.TokenAccessLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenAccessLogPayload>[]
          }
          create: {
            args: Prisma.TokenAccessLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenAccessLogPayload>
          }
          createMany: {
            args: Prisma.TokenAccessLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TokenAccessLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenAccessLogPayload>
          }
          update: {
            args: Prisma.TokenAccessLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenAccessLogPayload>
          }
          deleteMany: {
            args: Prisma.TokenAccessLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TokenAccessLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TokenAccessLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenAccessLogPayload>
          }
          aggregate: {
            args: Prisma.TokenAccessLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTokenAccessLog>
          }
          groupBy: {
            args: Prisma.TokenAccessLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<TokenAccessLogGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.TokenAccessLogFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.TokenAccessLogAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.TokenAccessLogCountArgs<ExtArgs>
            result: $Utils.Optional<TokenAccessLogCountAggregateOutputType> | number
          }
        }
      }
      AIInsight: {
        payload: Prisma.$AIInsightPayload<ExtArgs>
        fields: Prisma.AIInsightFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AIInsightFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIInsightPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AIInsightFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIInsightPayload>
          }
          findFirst: {
            args: Prisma.AIInsightFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIInsightPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AIInsightFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIInsightPayload>
          }
          findMany: {
            args: Prisma.AIInsightFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIInsightPayload>[]
          }
          create: {
            args: Prisma.AIInsightCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIInsightPayload>
          }
          createMany: {
            args: Prisma.AIInsightCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AIInsightDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIInsightPayload>
          }
          update: {
            args: Prisma.AIInsightUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIInsightPayload>
          }
          deleteMany: {
            args: Prisma.AIInsightDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AIInsightUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AIInsightUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIInsightPayload>
          }
          aggregate: {
            args: Prisma.AIInsightAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAIInsight>
          }
          groupBy: {
            args: Prisma.AIInsightGroupByArgs<ExtArgs>
            result: $Utils.Optional<AIInsightGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.AIInsightFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.AIInsightAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.AIInsightCountArgs<ExtArgs>
            result: $Utils.Optional<AIInsightCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $runCommandRaw: {
          args: Prisma.InputJsonObject,
          result: Prisma.JsonObject
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
    }
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
    portfolio?: PortfolioOmit
    holding?: HoldingOmit
    sharedPortfolioAccess?: SharedPortfolioAccessOmit
    tokenAccessLog?: TokenAccessLogOmit
    aIInsight?: AIInsightOmit
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
    portfolios: number
    accessedShares: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    portfolios?: boolean | UserCountOutputTypeCountPortfoliosArgs
    accessedShares?: boolean | UserCountOutputTypeCountAccessedSharesArgs
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
  export type UserCountOutputTypeCountPortfoliosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PortfolioWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAccessedSharesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SharedPortfolioAccessWhereInput
  }


  /**
   * Count Type PortfolioCountOutputType
   */

  export type PortfolioCountOutputType = {
    holdings: number
    sharedAccess: number
    aiInsights: number
  }

  export type PortfolioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    holdings?: boolean | PortfolioCountOutputTypeCountHoldingsArgs
    sharedAccess?: boolean | PortfolioCountOutputTypeCountSharedAccessArgs
    aiInsights?: boolean | PortfolioCountOutputTypeCountAiInsightsArgs
  }

  // Custom InputTypes
  /**
   * PortfolioCountOutputType without action
   */
  export type PortfolioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortfolioCountOutputType
     */
    select?: PortfolioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PortfolioCountOutputType without action
   */
  export type PortfolioCountOutputTypeCountHoldingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HoldingWhereInput
  }

  /**
   * PortfolioCountOutputType without action
   */
  export type PortfolioCountOutputTypeCountSharedAccessArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SharedPortfolioAccessWhereInput
  }

  /**
   * PortfolioCountOutputType without action
   */
  export type PortfolioCountOutputTypeCountAiInsightsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AIInsightWhereInput
  }


  /**
   * Count Type SharedPortfolioAccessCountOutputType
   */

  export type SharedPortfolioAccessCountOutputType = {
    accessLogs: number
  }

  export type SharedPortfolioAccessCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accessLogs?: boolean | SharedPortfolioAccessCountOutputTypeCountAccessLogsArgs
  }

  // Custom InputTypes
  /**
   * SharedPortfolioAccessCountOutputType without action
   */
  export type SharedPortfolioAccessCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SharedPortfolioAccessCountOutputType
     */
    select?: SharedPortfolioAccessCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SharedPortfolioAccessCountOutputType without action
   */
  export type SharedPortfolioAccessCountOutputTypeCountAccessLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TokenAccessLogWhereInput
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
    email: string | null
    name: string | null
    image: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    image: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    name: number
    image: number
    password: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    image?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    image?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    image?: true
    password?: true
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
    email: string
    name: string | null
    image: string | null
    password: string | null
    createdAt: Date
    updatedAt: Date
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
    email?: boolean
    name?: boolean
    image?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    portfolios?: boolean | User$portfoliosArgs<ExtArgs>
    accessedShares?: boolean | User$accessedSharesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    image?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "name" | "image" | "password" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    portfolios?: boolean | User$portfoliosArgs<ExtArgs>
    accessedShares?: boolean | User$accessedSharesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      portfolios: Prisma.$PortfolioPayload<ExtArgs>[]
      accessedShares: Prisma.$SharedPortfolioAccessPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      name: string | null
      image: string | null
      password: string | null
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
     * Find zero or more Users that matches the filter.
     * @param {UserFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const user = await prisma.user.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: UserFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a User.
     * @param {UserAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const user = await prisma.user.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: UserAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


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
    portfolios<T extends User$portfoliosArgs<ExtArgs> = {}>(args?: Subset<T, User$portfoliosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PortfolioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    accessedShares<T extends User$accessedSharesArgs<ExtArgs> = {}>(args?: Subset<T, User$accessedSharesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SharedPortfolioAccessPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly image: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
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
   * User findRaw
   */
  export type UserFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * User aggregateRaw
   */
  export type UserAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * User.portfolios
   */
  export type User$portfoliosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Portfolio
     */
    select?: PortfolioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Portfolio
     */
    omit?: PortfolioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioInclude<ExtArgs> | null
    where?: PortfolioWhereInput
    orderBy?: PortfolioOrderByWithRelationInput | PortfolioOrderByWithRelationInput[]
    cursor?: PortfolioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PortfolioScalarFieldEnum | PortfolioScalarFieldEnum[]
  }

  /**
   * User.accessedShares
   */
  export type User$accessedSharesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SharedPortfolioAccess
     */
    select?: SharedPortfolioAccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SharedPortfolioAccess
     */
    omit?: SharedPortfolioAccessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SharedPortfolioAccessInclude<ExtArgs> | null
    where?: SharedPortfolioAccessWhereInput
    orderBy?: SharedPortfolioAccessOrderByWithRelationInput | SharedPortfolioAccessOrderByWithRelationInput[]
    cursor?: SharedPortfolioAccessWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SharedPortfolioAccessScalarFieldEnum | SharedPortfolioAccessScalarFieldEnum[]
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
   * Model Portfolio
   */

  export type AggregatePortfolio = {
    _count: PortfolioCountAggregateOutputType | null
    _avg: PortfolioAvgAggregateOutputType | null
    _sum: PortfolioSumAggregateOutputType | null
    _min: PortfolioMinAggregateOutputType | null
    _max: PortfolioMaxAggregateOutputType | null
  }

  export type PortfolioAvgAggregateOutputType = {
    cash: number | null
  }

  export type PortfolioSumAggregateOutputType = {
    cash: number | null
  }

  export type PortfolioMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    visibility: $Enums.PortfolioVisibility | null
    userId: string | null
    cash: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PortfolioMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    visibility: $Enums.PortfolioVisibility | null
    userId: string | null
    cash: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PortfolioCountAggregateOutputType = {
    id: number
    name: number
    description: number
    visibility: number
    userId: number
    cash: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PortfolioAvgAggregateInputType = {
    cash?: true
  }

  export type PortfolioSumAggregateInputType = {
    cash?: true
  }

  export type PortfolioMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    visibility?: true
    userId?: true
    cash?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PortfolioMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    visibility?: true
    userId?: true
    cash?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PortfolioCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    visibility?: true
    userId?: true
    cash?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PortfolioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Portfolio to aggregate.
     */
    where?: PortfolioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Portfolios to fetch.
     */
    orderBy?: PortfolioOrderByWithRelationInput | PortfolioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PortfolioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Portfolios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Portfolios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Portfolios
    **/
    _count?: true | PortfolioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PortfolioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PortfolioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PortfolioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PortfolioMaxAggregateInputType
  }

  export type GetPortfolioAggregateType<T extends PortfolioAggregateArgs> = {
        [P in keyof T & keyof AggregatePortfolio]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePortfolio[P]>
      : GetScalarType<T[P], AggregatePortfolio[P]>
  }




  export type PortfolioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PortfolioWhereInput
    orderBy?: PortfolioOrderByWithAggregationInput | PortfolioOrderByWithAggregationInput[]
    by: PortfolioScalarFieldEnum[] | PortfolioScalarFieldEnum
    having?: PortfolioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PortfolioCountAggregateInputType | true
    _avg?: PortfolioAvgAggregateInputType
    _sum?: PortfolioSumAggregateInputType
    _min?: PortfolioMinAggregateInputType
    _max?: PortfolioMaxAggregateInputType
  }

  export type PortfolioGroupByOutputType = {
    id: string
    name: string
    description: string | null
    visibility: $Enums.PortfolioVisibility
    userId: string
    cash: number
    createdAt: Date
    updatedAt: Date
    _count: PortfolioCountAggregateOutputType | null
    _avg: PortfolioAvgAggregateOutputType | null
    _sum: PortfolioSumAggregateOutputType | null
    _min: PortfolioMinAggregateOutputType | null
    _max: PortfolioMaxAggregateOutputType | null
  }

  type GetPortfolioGroupByPayload<T extends PortfolioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PortfolioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PortfolioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PortfolioGroupByOutputType[P]>
            : GetScalarType<T[P], PortfolioGroupByOutputType[P]>
        }
      >
    >


  export type PortfolioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    visibility?: boolean
    userId?: boolean
    cash?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    holdings?: boolean | Portfolio$holdingsArgs<ExtArgs>
    sharedAccess?: boolean | Portfolio$sharedAccessArgs<ExtArgs>
    aiInsights?: boolean | Portfolio$aiInsightsArgs<ExtArgs>
    _count?: boolean | PortfolioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["portfolio"]>



  export type PortfolioSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    visibility?: boolean
    userId?: boolean
    cash?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PortfolioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "visibility" | "userId" | "cash" | "createdAt" | "updatedAt", ExtArgs["result"]["portfolio"]>
  export type PortfolioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    holdings?: boolean | Portfolio$holdingsArgs<ExtArgs>
    sharedAccess?: boolean | Portfolio$sharedAccessArgs<ExtArgs>
    aiInsights?: boolean | Portfolio$aiInsightsArgs<ExtArgs>
    _count?: boolean | PortfolioCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $PortfolioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Portfolio"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      holdings: Prisma.$HoldingPayload<ExtArgs>[]
      sharedAccess: Prisma.$SharedPortfolioAccessPayload<ExtArgs>[]
      aiInsights: Prisma.$AIInsightPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      visibility: $Enums.PortfolioVisibility
      userId: string
      cash: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["portfolio"]>
    composites: {}
  }

  type PortfolioGetPayload<S extends boolean | null | undefined | PortfolioDefaultArgs> = $Result.GetResult<Prisma.$PortfolioPayload, S>

  type PortfolioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PortfolioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PortfolioCountAggregateInputType | true
    }

  export interface PortfolioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Portfolio'], meta: { name: 'Portfolio' } }
    /**
     * Find zero or one Portfolio that matches the filter.
     * @param {PortfolioFindUniqueArgs} args - Arguments to find a Portfolio
     * @example
     * // Get one Portfolio
     * const portfolio = await prisma.portfolio.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PortfolioFindUniqueArgs>(args: SelectSubset<T, PortfolioFindUniqueArgs<ExtArgs>>): Prisma__PortfolioClient<$Result.GetResult<Prisma.$PortfolioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Portfolio that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PortfolioFindUniqueOrThrowArgs} args - Arguments to find a Portfolio
     * @example
     * // Get one Portfolio
     * const portfolio = await prisma.portfolio.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PortfolioFindUniqueOrThrowArgs>(args: SelectSubset<T, PortfolioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PortfolioClient<$Result.GetResult<Prisma.$PortfolioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Portfolio that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortfolioFindFirstArgs} args - Arguments to find a Portfolio
     * @example
     * // Get one Portfolio
     * const portfolio = await prisma.portfolio.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PortfolioFindFirstArgs>(args?: SelectSubset<T, PortfolioFindFirstArgs<ExtArgs>>): Prisma__PortfolioClient<$Result.GetResult<Prisma.$PortfolioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Portfolio that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortfolioFindFirstOrThrowArgs} args - Arguments to find a Portfolio
     * @example
     * // Get one Portfolio
     * const portfolio = await prisma.portfolio.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PortfolioFindFirstOrThrowArgs>(args?: SelectSubset<T, PortfolioFindFirstOrThrowArgs<ExtArgs>>): Prisma__PortfolioClient<$Result.GetResult<Prisma.$PortfolioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Portfolios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortfolioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Portfolios
     * const portfolios = await prisma.portfolio.findMany()
     * 
     * // Get first 10 Portfolios
     * const portfolios = await prisma.portfolio.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const portfolioWithIdOnly = await prisma.portfolio.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PortfolioFindManyArgs>(args?: SelectSubset<T, PortfolioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PortfolioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Portfolio.
     * @param {PortfolioCreateArgs} args - Arguments to create a Portfolio.
     * @example
     * // Create one Portfolio
     * const Portfolio = await prisma.portfolio.create({
     *   data: {
     *     // ... data to create a Portfolio
     *   }
     * })
     * 
     */
    create<T extends PortfolioCreateArgs>(args: SelectSubset<T, PortfolioCreateArgs<ExtArgs>>): Prisma__PortfolioClient<$Result.GetResult<Prisma.$PortfolioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Portfolios.
     * @param {PortfolioCreateManyArgs} args - Arguments to create many Portfolios.
     * @example
     * // Create many Portfolios
     * const portfolio = await prisma.portfolio.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PortfolioCreateManyArgs>(args?: SelectSubset<T, PortfolioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Portfolio.
     * @param {PortfolioDeleteArgs} args - Arguments to delete one Portfolio.
     * @example
     * // Delete one Portfolio
     * const Portfolio = await prisma.portfolio.delete({
     *   where: {
     *     // ... filter to delete one Portfolio
     *   }
     * })
     * 
     */
    delete<T extends PortfolioDeleteArgs>(args: SelectSubset<T, PortfolioDeleteArgs<ExtArgs>>): Prisma__PortfolioClient<$Result.GetResult<Prisma.$PortfolioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Portfolio.
     * @param {PortfolioUpdateArgs} args - Arguments to update one Portfolio.
     * @example
     * // Update one Portfolio
     * const portfolio = await prisma.portfolio.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PortfolioUpdateArgs>(args: SelectSubset<T, PortfolioUpdateArgs<ExtArgs>>): Prisma__PortfolioClient<$Result.GetResult<Prisma.$PortfolioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Portfolios.
     * @param {PortfolioDeleteManyArgs} args - Arguments to filter Portfolios to delete.
     * @example
     * // Delete a few Portfolios
     * const { count } = await prisma.portfolio.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PortfolioDeleteManyArgs>(args?: SelectSubset<T, PortfolioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Portfolios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortfolioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Portfolios
     * const portfolio = await prisma.portfolio.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PortfolioUpdateManyArgs>(args: SelectSubset<T, PortfolioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Portfolio.
     * @param {PortfolioUpsertArgs} args - Arguments to update or create a Portfolio.
     * @example
     * // Update or create a Portfolio
     * const portfolio = await prisma.portfolio.upsert({
     *   create: {
     *     // ... data to create a Portfolio
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Portfolio we want to update
     *   }
     * })
     */
    upsert<T extends PortfolioUpsertArgs>(args: SelectSubset<T, PortfolioUpsertArgs<ExtArgs>>): Prisma__PortfolioClient<$Result.GetResult<Prisma.$PortfolioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Portfolios that matches the filter.
     * @param {PortfolioFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const portfolio = await prisma.portfolio.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: PortfolioFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Portfolio.
     * @param {PortfolioAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const portfolio = await prisma.portfolio.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: PortfolioAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Portfolios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortfolioCountArgs} args - Arguments to filter Portfolios to count.
     * @example
     * // Count the number of Portfolios
     * const count = await prisma.portfolio.count({
     *   where: {
     *     // ... the filter for the Portfolios we want to count
     *   }
     * })
    **/
    count<T extends PortfolioCountArgs>(
      args?: Subset<T, PortfolioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PortfolioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Portfolio.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortfolioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PortfolioAggregateArgs>(args: Subset<T, PortfolioAggregateArgs>): Prisma.PrismaPromise<GetPortfolioAggregateType<T>>

    /**
     * Group by Portfolio.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortfolioGroupByArgs} args - Group by arguments.
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
      T extends PortfolioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PortfolioGroupByArgs['orderBy'] }
        : { orderBy?: PortfolioGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PortfolioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPortfolioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Portfolio model
   */
  readonly fields: PortfolioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Portfolio.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PortfolioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    holdings<T extends Portfolio$holdingsArgs<ExtArgs> = {}>(args?: Subset<T, Portfolio$holdingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HoldingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sharedAccess<T extends Portfolio$sharedAccessArgs<ExtArgs> = {}>(args?: Subset<T, Portfolio$sharedAccessArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SharedPortfolioAccessPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    aiInsights<T extends Portfolio$aiInsightsArgs<ExtArgs> = {}>(args?: Subset<T, Portfolio$aiInsightsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AIInsightPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Portfolio model
   */
  interface PortfolioFieldRefs {
    readonly id: FieldRef<"Portfolio", 'String'>
    readonly name: FieldRef<"Portfolio", 'String'>
    readonly description: FieldRef<"Portfolio", 'String'>
    readonly visibility: FieldRef<"Portfolio", 'PortfolioVisibility'>
    readonly userId: FieldRef<"Portfolio", 'String'>
    readonly cash: FieldRef<"Portfolio", 'Float'>
    readonly createdAt: FieldRef<"Portfolio", 'DateTime'>
    readonly updatedAt: FieldRef<"Portfolio", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Portfolio findUnique
   */
  export type PortfolioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Portfolio
     */
    select?: PortfolioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Portfolio
     */
    omit?: PortfolioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioInclude<ExtArgs> | null
    /**
     * Filter, which Portfolio to fetch.
     */
    where: PortfolioWhereUniqueInput
  }

  /**
   * Portfolio findUniqueOrThrow
   */
  export type PortfolioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Portfolio
     */
    select?: PortfolioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Portfolio
     */
    omit?: PortfolioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioInclude<ExtArgs> | null
    /**
     * Filter, which Portfolio to fetch.
     */
    where: PortfolioWhereUniqueInput
  }

  /**
   * Portfolio findFirst
   */
  export type PortfolioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Portfolio
     */
    select?: PortfolioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Portfolio
     */
    omit?: PortfolioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioInclude<ExtArgs> | null
    /**
     * Filter, which Portfolio to fetch.
     */
    where?: PortfolioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Portfolios to fetch.
     */
    orderBy?: PortfolioOrderByWithRelationInput | PortfolioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Portfolios.
     */
    cursor?: PortfolioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Portfolios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Portfolios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Portfolios.
     */
    distinct?: PortfolioScalarFieldEnum | PortfolioScalarFieldEnum[]
  }

  /**
   * Portfolio findFirstOrThrow
   */
  export type PortfolioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Portfolio
     */
    select?: PortfolioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Portfolio
     */
    omit?: PortfolioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioInclude<ExtArgs> | null
    /**
     * Filter, which Portfolio to fetch.
     */
    where?: PortfolioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Portfolios to fetch.
     */
    orderBy?: PortfolioOrderByWithRelationInput | PortfolioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Portfolios.
     */
    cursor?: PortfolioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Portfolios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Portfolios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Portfolios.
     */
    distinct?: PortfolioScalarFieldEnum | PortfolioScalarFieldEnum[]
  }

  /**
   * Portfolio findMany
   */
  export type PortfolioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Portfolio
     */
    select?: PortfolioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Portfolio
     */
    omit?: PortfolioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioInclude<ExtArgs> | null
    /**
     * Filter, which Portfolios to fetch.
     */
    where?: PortfolioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Portfolios to fetch.
     */
    orderBy?: PortfolioOrderByWithRelationInput | PortfolioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Portfolios.
     */
    cursor?: PortfolioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Portfolios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Portfolios.
     */
    skip?: number
    distinct?: PortfolioScalarFieldEnum | PortfolioScalarFieldEnum[]
  }

  /**
   * Portfolio create
   */
  export type PortfolioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Portfolio
     */
    select?: PortfolioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Portfolio
     */
    omit?: PortfolioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioInclude<ExtArgs> | null
    /**
     * The data needed to create a Portfolio.
     */
    data: XOR<PortfolioCreateInput, PortfolioUncheckedCreateInput>
  }

  /**
   * Portfolio createMany
   */
  export type PortfolioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Portfolios.
     */
    data: PortfolioCreateManyInput | PortfolioCreateManyInput[]
  }

  /**
   * Portfolio update
   */
  export type PortfolioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Portfolio
     */
    select?: PortfolioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Portfolio
     */
    omit?: PortfolioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioInclude<ExtArgs> | null
    /**
     * The data needed to update a Portfolio.
     */
    data: XOR<PortfolioUpdateInput, PortfolioUncheckedUpdateInput>
    /**
     * Choose, which Portfolio to update.
     */
    where: PortfolioWhereUniqueInput
  }

  /**
   * Portfolio updateMany
   */
  export type PortfolioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Portfolios.
     */
    data: XOR<PortfolioUpdateManyMutationInput, PortfolioUncheckedUpdateManyInput>
    /**
     * Filter which Portfolios to update
     */
    where?: PortfolioWhereInput
    /**
     * Limit how many Portfolios to update.
     */
    limit?: number
  }

  /**
   * Portfolio upsert
   */
  export type PortfolioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Portfolio
     */
    select?: PortfolioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Portfolio
     */
    omit?: PortfolioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioInclude<ExtArgs> | null
    /**
     * The filter to search for the Portfolio to update in case it exists.
     */
    where: PortfolioWhereUniqueInput
    /**
     * In case the Portfolio found by the `where` argument doesn't exist, create a new Portfolio with this data.
     */
    create: XOR<PortfolioCreateInput, PortfolioUncheckedCreateInput>
    /**
     * In case the Portfolio was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PortfolioUpdateInput, PortfolioUncheckedUpdateInput>
  }

  /**
   * Portfolio delete
   */
  export type PortfolioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Portfolio
     */
    select?: PortfolioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Portfolio
     */
    omit?: PortfolioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioInclude<ExtArgs> | null
    /**
     * Filter which Portfolio to delete.
     */
    where: PortfolioWhereUniqueInput
  }

  /**
   * Portfolio deleteMany
   */
  export type PortfolioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Portfolios to delete
     */
    where?: PortfolioWhereInput
    /**
     * Limit how many Portfolios to delete.
     */
    limit?: number
  }

  /**
   * Portfolio findRaw
   */
  export type PortfolioFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Portfolio aggregateRaw
   */
  export type PortfolioAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Portfolio.holdings
   */
  export type Portfolio$holdingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Holding
     */
    select?: HoldingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Holding
     */
    omit?: HoldingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HoldingInclude<ExtArgs> | null
    where?: HoldingWhereInput
    orderBy?: HoldingOrderByWithRelationInput | HoldingOrderByWithRelationInput[]
    cursor?: HoldingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HoldingScalarFieldEnum | HoldingScalarFieldEnum[]
  }

  /**
   * Portfolio.sharedAccess
   */
  export type Portfolio$sharedAccessArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SharedPortfolioAccess
     */
    select?: SharedPortfolioAccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SharedPortfolioAccess
     */
    omit?: SharedPortfolioAccessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SharedPortfolioAccessInclude<ExtArgs> | null
    where?: SharedPortfolioAccessWhereInput
    orderBy?: SharedPortfolioAccessOrderByWithRelationInput | SharedPortfolioAccessOrderByWithRelationInput[]
    cursor?: SharedPortfolioAccessWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SharedPortfolioAccessScalarFieldEnum | SharedPortfolioAccessScalarFieldEnum[]
  }

  /**
   * Portfolio.aiInsights
   */
  export type Portfolio$aiInsightsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIInsight
     */
    select?: AIInsightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIInsight
     */
    omit?: AIInsightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIInsightInclude<ExtArgs> | null
    where?: AIInsightWhereInput
    orderBy?: AIInsightOrderByWithRelationInput | AIInsightOrderByWithRelationInput[]
    cursor?: AIInsightWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AIInsightScalarFieldEnum | AIInsightScalarFieldEnum[]
  }

  /**
   * Portfolio without action
   */
  export type PortfolioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Portfolio
     */
    select?: PortfolioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Portfolio
     */
    omit?: PortfolioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioInclude<ExtArgs> | null
  }


  /**
   * Model Holding
   */

  export type AggregateHolding = {
    _count: HoldingCountAggregateOutputType | null
    _avg: HoldingAvgAggregateOutputType | null
    _sum: HoldingSumAggregateOutputType | null
    _min: HoldingMinAggregateOutputType | null
    _max: HoldingMaxAggregateOutputType | null
  }

  export type HoldingAvgAggregateOutputType = {
    quantity: number | null
  }

  export type HoldingSumAggregateOutputType = {
    quantity: number | null
  }

  export type HoldingMinAggregateOutputType = {
    id: string | null
    ticker: string | null
    quantity: number | null
    portfolioId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type HoldingMaxAggregateOutputType = {
    id: string | null
    ticker: string | null
    quantity: number | null
    portfolioId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type HoldingCountAggregateOutputType = {
    id: number
    ticker: number
    quantity: number
    portfolioId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type HoldingAvgAggregateInputType = {
    quantity?: true
  }

  export type HoldingSumAggregateInputType = {
    quantity?: true
  }

  export type HoldingMinAggregateInputType = {
    id?: true
    ticker?: true
    quantity?: true
    portfolioId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type HoldingMaxAggregateInputType = {
    id?: true
    ticker?: true
    quantity?: true
    portfolioId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type HoldingCountAggregateInputType = {
    id?: true
    ticker?: true
    quantity?: true
    portfolioId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type HoldingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Holding to aggregate.
     */
    where?: HoldingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Holdings to fetch.
     */
    orderBy?: HoldingOrderByWithRelationInput | HoldingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HoldingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Holdings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Holdings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Holdings
    **/
    _count?: true | HoldingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HoldingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HoldingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HoldingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HoldingMaxAggregateInputType
  }

  export type GetHoldingAggregateType<T extends HoldingAggregateArgs> = {
        [P in keyof T & keyof AggregateHolding]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHolding[P]>
      : GetScalarType<T[P], AggregateHolding[P]>
  }




  export type HoldingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HoldingWhereInput
    orderBy?: HoldingOrderByWithAggregationInput | HoldingOrderByWithAggregationInput[]
    by: HoldingScalarFieldEnum[] | HoldingScalarFieldEnum
    having?: HoldingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HoldingCountAggregateInputType | true
    _avg?: HoldingAvgAggregateInputType
    _sum?: HoldingSumAggregateInputType
    _min?: HoldingMinAggregateInputType
    _max?: HoldingMaxAggregateInputType
  }

  export type HoldingGroupByOutputType = {
    id: string
    ticker: string
    quantity: number
    portfolioId: string
    createdAt: Date
    updatedAt: Date
    _count: HoldingCountAggregateOutputType | null
    _avg: HoldingAvgAggregateOutputType | null
    _sum: HoldingSumAggregateOutputType | null
    _min: HoldingMinAggregateOutputType | null
    _max: HoldingMaxAggregateOutputType | null
  }

  type GetHoldingGroupByPayload<T extends HoldingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HoldingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HoldingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HoldingGroupByOutputType[P]>
            : GetScalarType<T[P], HoldingGroupByOutputType[P]>
        }
      >
    >


  export type HoldingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ticker?: boolean
    quantity?: boolean
    portfolioId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    portfolio?: boolean | PortfolioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["holding"]>



  export type HoldingSelectScalar = {
    id?: boolean
    ticker?: boolean
    quantity?: boolean
    portfolioId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type HoldingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "ticker" | "quantity" | "portfolioId" | "createdAt" | "updatedAt", ExtArgs["result"]["holding"]>
  export type HoldingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    portfolio?: boolean | PortfolioDefaultArgs<ExtArgs>
  }

  export type $HoldingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Holding"
    objects: {
      portfolio: Prisma.$PortfolioPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      ticker: string
      quantity: number
      portfolioId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["holding"]>
    composites: {}
  }

  type HoldingGetPayload<S extends boolean | null | undefined | HoldingDefaultArgs> = $Result.GetResult<Prisma.$HoldingPayload, S>

  type HoldingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HoldingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HoldingCountAggregateInputType | true
    }

  export interface HoldingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Holding'], meta: { name: 'Holding' } }
    /**
     * Find zero or one Holding that matches the filter.
     * @param {HoldingFindUniqueArgs} args - Arguments to find a Holding
     * @example
     * // Get one Holding
     * const holding = await prisma.holding.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HoldingFindUniqueArgs>(args: SelectSubset<T, HoldingFindUniqueArgs<ExtArgs>>): Prisma__HoldingClient<$Result.GetResult<Prisma.$HoldingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Holding that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HoldingFindUniqueOrThrowArgs} args - Arguments to find a Holding
     * @example
     * // Get one Holding
     * const holding = await prisma.holding.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HoldingFindUniqueOrThrowArgs>(args: SelectSubset<T, HoldingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HoldingClient<$Result.GetResult<Prisma.$HoldingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Holding that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HoldingFindFirstArgs} args - Arguments to find a Holding
     * @example
     * // Get one Holding
     * const holding = await prisma.holding.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HoldingFindFirstArgs>(args?: SelectSubset<T, HoldingFindFirstArgs<ExtArgs>>): Prisma__HoldingClient<$Result.GetResult<Prisma.$HoldingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Holding that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HoldingFindFirstOrThrowArgs} args - Arguments to find a Holding
     * @example
     * // Get one Holding
     * const holding = await prisma.holding.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HoldingFindFirstOrThrowArgs>(args?: SelectSubset<T, HoldingFindFirstOrThrowArgs<ExtArgs>>): Prisma__HoldingClient<$Result.GetResult<Prisma.$HoldingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Holdings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HoldingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Holdings
     * const holdings = await prisma.holding.findMany()
     * 
     * // Get first 10 Holdings
     * const holdings = await prisma.holding.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const holdingWithIdOnly = await prisma.holding.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HoldingFindManyArgs>(args?: SelectSubset<T, HoldingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HoldingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Holding.
     * @param {HoldingCreateArgs} args - Arguments to create a Holding.
     * @example
     * // Create one Holding
     * const Holding = await prisma.holding.create({
     *   data: {
     *     // ... data to create a Holding
     *   }
     * })
     * 
     */
    create<T extends HoldingCreateArgs>(args: SelectSubset<T, HoldingCreateArgs<ExtArgs>>): Prisma__HoldingClient<$Result.GetResult<Prisma.$HoldingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Holdings.
     * @param {HoldingCreateManyArgs} args - Arguments to create many Holdings.
     * @example
     * // Create many Holdings
     * const holding = await prisma.holding.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HoldingCreateManyArgs>(args?: SelectSubset<T, HoldingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Holding.
     * @param {HoldingDeleteArgs} args - Arguments to delete one Holding.
     * @example
     * // Delete one Holding
     * const Holding = await prisma.holding.delete({
     *   where: {
     *     // ... filter to delete one Holding
     *   }
     * })
     * 
     */
    delete<T extends HoldingDeleteArgs>(args: SelectSubset<T, HoldingDeleteArgs<ExtArgs>>): Prisma__HoldingClient<$Result.GetResult<Prisma.$HoldingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Holding.
     * @param {HoldingUpdateArgs} args - Arguments to update one Holding.
     * @example
     * // Update one Holding
     * const holding = await prisma.holding.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HoldingUpdateArgs>(args: SelectSubset<T, HoldingUpdateArgs<ExtArgs>>): Prisma__HoldingClient<$Result.GetResult<Prisma.$HoldingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Holdings.
     * @param {HoldingDeleteManyArgs} args - Arguments to filter Holdings to delete.
     * @example
     * // Delete a few Holdings
     * const { count } = await prisma.holding.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HoldingDeleteManyArgs>(args?: SelectSubset<T, HoldingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Holdings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HoldingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Holdings
     * const holding = await prisma.holding.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HoldingUpdateManyArgs>(args: SelectSubset<T, HoldingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Holding.
     * @param {HoldingUpsertArgs} args - Arguments to update or create a Holding.
     * @example
     * // Update or create a Holding
     * const holding = await prisma.holding.upsert({
     *   create: {
     *     // ... data to create a Holding
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Holding we want to update
     *   }
     * })
     */
    upsert<T extends HoldingUpsertArgs>(args: SelectSubset<T, HoldingUpsertArgs<ExtArgs>>): Prisma__HoldingClient<$Result.GetResult<Prisma.$HoldingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Holdings that matches the filter.
     * @param {HoldingFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const holding = await prisma.holding.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: HoldingFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Holding.
     * @param {HoldingAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const holding = await prisma.holding.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: HoldingAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Holdings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HoldingCountArgs} args - Arguments to filter Holdings to count.
     * @example
     * // Count the number of Holdings
     * const count = await prisma.holding.count({
     *   where: {
     *     // ... the filter for the Holdings we want to count
     *   }
     * })
    **/
    count<T extends HoldingCountArgs>(
      args?: Subset<T, HoldingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HoldingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Holding.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HoldingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends HoldingAggregateArgs>(args: Subset<T, HoldingAggregateArgs>): Prisma.PrismaPromise<GetHoldingAggregateType<T>>

    /**
     * Group by Holding.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HoldingGroupByArgs} args - Group by arguments.
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
      T extends HoldingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HoldingGroupByArgs['orderBy'] }
        : { orderBy?: HoldingGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, HoldingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHoldingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Holding model
   */
  readonly fields: HoldingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Holding.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HoldingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    portfolio<T extends PortfolioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PortfolioDefaultArgs<ExtArgs>>): Prisma__PortfolioClient<$Result.GetResult<Prisma.$PortfolioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Holding model
   */
  interface HoldingFieldRefs {
    readonly id: FieldRef<"Holding", 'String'>
    readonly ticker: FieldRef<"Holding", 'String'>
    readonly quantity: FieldRef<"Holding", 'Float'>
    readonly portfolioId: FieldRef<"Holding", 'String'>
    readonly createdAt: FieldRef<"Holding", 'DateTime'>
    readonly updatedAt: FieldRef<"Holding", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Holding findUnique
   */
  export type HoldingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Holding
     */
    select?: HoldingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Holding
     */
    omit?: HoldingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HoldingInclude<ExtArgs> | null
    /**
     * Filter, which Holding to fetch.
     */
    where: HoldingWhereUniqueInput
  }

  /**
   * Holding findUniqueOrThrow
   */
  export type HoldingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Holding
     */
    select?: HoldingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Holding
     */
    omit?: HoldingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HoldingInclude<ExtArgs> | null
    /**
     * Filter, which Holding to fetch.
     */
    where: HoldingWhereUniqueInput
  }

  /**
   * Holding findFirst
   */
  export type HoldingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Holding
     */
    select?: HoldingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Holding
     */
    omit?: HoldingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HoldingInclude<ExtArgs> | null
    /**
     * Filter, which Holding to fetch.
     */
    where?: HoldingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Holdings to fetch.
     */
    orderBy?: HoldingOrderByWithRelationInput | HoldingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Holdings.
     */
    cursor?: HoldingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Holdings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Holdings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Holdings.
     */
    distinct?: HoldingScalarFieldEnum | HoldingScalarFieldEnum[]
  }

  /**
   * Holding findFirstOrThrow
   */
  export type HoldingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Holding
     */
    select?: HoldingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Holding
     */
    omit?: HoldingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HoldingInclude<ExtArgs> | null
    /**
     * Filter, which Holding to fetch.
     */
    where?: HoldingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Holdings to fetch.
     */
    orderBy?: HoldingOrderByWithRelationInput | HoldingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Holdings.
     */
    cursor?: HoldingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Holdings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Holdings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Holdings.
     */
    distinct?: HoldingScalarFieldEnum | HoldingScalarFieldEnum[]
  }

  /**
   * Holding findMany
   */
  export type HoldingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Holding
     */
    select?: HoldingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Holding
     */
    omit?: HoldingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HoldingInclude<ExtArgs> | null
    /**
     * Filter, which Holdings to fetch.
     */
    where?: HoldingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Holdings to fetch.
     */
    orderBy?: HoldingOrderByWithRelationInput | HoldingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Holdings.
     */
    cursor?: HoldingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Holdings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Holdings.
     */
    skip?: number
    distinct?: HoldingScalarFieldEnum | HoldingScalarFieldEnum[]
  }

  /**
   * Holding create
   */
  export type HoldingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Holding
     */
    select?: HoldingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Holding
     */
    omit?: HoldingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HoldingInclude<ExtArgs> | null
    /**
     * The data needed to create a Holding.
     */
    data: XOR<HoldingCreateInput, HoldingUncheckedCreateInput>
  }

  /**
   * Holding createMany
   */
  export type HoldingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Holdings.
     */
    data: HoldingCreateManyInput | HoldingCreateManyInput[]
  }

  /**
   * Holding update
   */
  export type HoldingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Holding
     */
    select?: HoldingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Holding
     */
    omit?: HoldingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HoldingInclude<ExtArgs> | null
    /**
     * The data needed to update a Holding.
     */
    data: XOR<HoldingUpdateInput, HoldingUncheckedUpdateInput>
    /**
     * Choose, which Holding to update.
     */
    where: HoldingWhereUniqueInput
  }

  /**
   * Holding updateMany
   */
  export type HoldingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Holdings.
     */
    data: XOR<HoldingUpdateManyMutationInput, HoldingUncheckedUpdateManyInput>
    /**
     * Filter which Holdings to update
     */
    where?: HoldingWhereInput
    /**
     * Limit how many Holdings to update.
     */
    limit?: number
  }

  /**
   * Holding upsert
   */
  export type HoldingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Holding
     */
    select?: HoldingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Holding
     */
    omit?: HoldingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HoldingInclude<ExtArgs> | null
    /**
     * The filter to search for the Holding to update in case it exists.
     */
    where: HoldingWhereUniqueInput
    /**
     * In case the Holding found by the `where` argument doesn't exist, create a new Holding with this data.
     */
    create: XOR<HoldingCreateInput, HoldingUncheckedCreateInput>
    /**
     * In case the Holding was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HoldingUpdateInput, HoldingUncheckedUpdateInput>
  }

  /**
   * Holding delete
   */
  export type HoldingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Holding
     */
    select?: HoldingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Holding
     */
    omit?: HoldingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HoldingInclude<ExtArgs> | null
    /**
     * Filter which Holding to delete.
     */
    where: HoldingWhereUniqueInput
  }

  /**
   * Holding deleteMany
   */
  export type HoldingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Holdings to delete
     */
    where?: HoldingWhereInput
    /**
     * Limit how many Holdings to delete.
     */
    limit?: number
  }

  /**
   * Holding findRaw
   */
  export type HoldingFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Holding aggregateRaw
   */
  export type HoldingAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Holding without action
   */
  export type HoldingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Holding
     */
    select?: HoldingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Holding
     */
    omit?: HoldingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HoldingInclude<ExtArgs> | null
  }


  /**
   * Model SharedPortfolioAccess
   */

  export type AggregateSharedPortfolioAccess = {
    _count: SharedPortfolioAccessCountAggregateOutputType | null
    _avg: SharedPortfolioAccessAvgAggregateOutputType | null
    _sum: SharedPortfolioAccessSumAggregateOutputType | null
    _min: SharedPortfolioAccessMinAggregateOutputType | null
    _max: SharedPortfolioAccessMaxAggregateOutputType | null
  }

  export type SharedPortfolioAccessAvgAggregateOutputType = {
    viewCount: number | null
  }

  export type SharedPortfolioAccessSumAggregateOutputType = {
    viewCount: number | null
  }

  export type SharedPortfolioAccessMinAggregateOutputType = {
    id: string | null
    token: string | null
    portfolioId: string | null
    viewerId: string | null
    fingerprint: string | null
    isActive: boolean | null
    expiresAt: Date | null
    viewCount: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SharedPortfolioAccessMaxAggregateOutputType = {
    id: string | null
    token: string | null
    portfolioId: string | null
    viewerId: string | null
    fingerprint: string | null
    isActive: boolean | null
    expiresAt: Date | null
    viewCount: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SharedPortfolioAccessCountAggregateOutputType = {
    id: number
    token: number
    portfolioId: number
    viewerId: number
    fingerprint: number
    isActive: number
    expiresAt: number
    viewCount: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SharedPortfolioAccessAvgAggregateInputType = {
    viewCount?: true
  }

  export type SharedPortfolioAccessSumAggregateInputType = {
    viewCount?: true
  }

  export type SharedPortfolioAccessMinAggregateInputType = {
    id?: true
    token?: true
    portfolioId?: true
    viewerId?: true
    fingerprint?: true
    isActive?: true
    expiresAt?: true
    viewCount?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SharedPortfolioAccessMaxAggregateInputType = {
    id?: true
    token?: true
    portfolioId?: true
    viewerId?: true
    fingerprint?: true
    isActive?: true
    expiresAt?: true
    viewCount?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SharedPortfolioAccessCountAggregateInputType = {
    id?: true
    token?: true
    portfolioId?: true
    viewerId?: true
    fingerprint?: true
    isActive?: true
    expiresAt?: true
    viewCount?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SharedPortfolioAccessAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SharedPortfolioAccess to aggregate.
     */
    where?: SharedPortfolioAccessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SharedPortfolioAccesses to fetch.
     */
    orderBy?: SharedPortfolioAccessOrderByWithRelationInput | SharedPortfolioAccessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SharedPortfolioAccessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SharedPortfolioAccesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SharedPortfolioAccesses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SharedPortfolioAccesses
    **/
    _count?: true | SharedPortfolioAccessCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SharedPortfolioAccessAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SharedPortfolioAccessSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SharedPortfolioAccessMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SharedPortfolioAccessMaxAggregateInputType
  }

  export type GetSharedPortfolioAccessAggregateType<T extends SharedPortfolioAccessAggregateArgs> = {
        [P in keyof T & keyof AggregateSharedPortfolioAccess]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSharedPortfolioAccess[P]>
      : GetScalarType<T[P], AggregateSharedPortfolioAccess[P]>
  }




  export type SharedPortfolioAccessGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SharedPortfolioAccessWhereInput
    orderBy?: SharedPortfolioAccessOrderByWithAggregationInput | SharedPortfolioAccessOrderByWithAggregationInput[]
    by: SharedPortfolioAccessScalarFieldEnum[] | SharedPortfolioAccessScalarFieldEnum
    having?: SharedPortfolioAccessScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SharedPortfolioAccessCountAggregateInputType | true
    _avg?: SharedPortfolioAccessAvgAggregateInputType
    _sum?: SharedPortfolioAccessSumAggregateInputType
    _min?: SharedPortfolioAccessMinAggregateInputType
    _max?: SharedPortfolioAccessMaxAggregateInputType
  }

  export type SharedPortfolioAccessGroupByOutputType = {
    id: string
    token: string
    portfolioId: string
    viewerId: string | null
    fingerprint: string | null
    isActive: boolean
    expiresAt: Date | null
    viewCount: number
    createdAt: Date
    updatedAt: Date
    _count: SharedPortfolioAccessCountAggregateOutputType | null
    _avg: SharedPortfolioAccessAvgAggregateOutputType | null
    _sum: SharedPortfolioAccessSumAggregateOutputType | null
    _min: SharedPortfolioAccessMinAggregateOutputType | null
    _max: SharedPortfolioAccessMaxAggregateOutputType | null
  }

  type GetSharedPortfolioAccessGroupByPayload<T extends SharedPortfolioAccessGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SharedPortfolioAccessGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SharedPortfolioAccessGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SharedPortfolioAccessGroupByOutputType[P]>
            : GetScalarType<T[P], SharedPortfolioAccessGroupByOutputType[P]>
        }
      >
    >


  export type SharedPortfolioAccessSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token?: boolean
    portfolioId?: boolean
    viewerId?: boolean
    fingerprint?: boolean
    isActive?: boolean
    expiresAt?: boolean
    viewCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    portfolio?: boolean | PortfolioDefaultArgs<ExtArgs>
    viewer?: boolean | SharedPortfolioAccess$viewerArgs<ExtArgs>
    accessLogs?: boolean | SharedPortfolioAccess$accessLogsArgs<ExtArgs>
    _count?: boolean | SharedPortfolioAccessCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sharedPortfolioAccess"]>



  export type SharedPortfolioAccessSelectScalar = {
    id?: boolean
    token?: boolean
    portfolioId?: boolean
    viewerId?: boolean
    fingerprint?: boolean
    isActive?: boolean
    expiresAt?: boolean
    viewCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SharedPortfolioAccessOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "token" | "portfolioId" | "viewerId" | "fingerprint" | "isActive" | "expiresAt" | "viewCount" | "createdAt" | "updatedAt", ExtArgs["result"]["sharedPortfolioAccess"]>
  export type SharedPortfolioAccessInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    portfolio?: boolean | PortfolioDefaultArgs<ExtArgs>
    viewer?: boolean | SharedPortfolioAccess$viewerArgs<ExtArgs>
    accessLogs?: boolean | SharedPortfolioAccess$accessLogsArgs<ExtArgs>
    _count?: boolean | SharedPortfolioAccessCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $SharedPortfolioAccessPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SharedPortfolioAccess"
    objects: {
      portfolio: Prisma.$PortfolioPayload<ExtArgs>
      viewer: Prisma.$UserPayload<ExtArgs> | null
      accessLogs: Prisma.$TokenAccessLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      token: string
      portfolioId: string
      viewerId: string | null
      fingerprint: string | null
      isActive: boolean
      expiresAt: Date | null
      viewCount: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["sharedPortfolioAccess"]>
    composites: {}
  }

  type SharedPortfolioAccessGetPayload<S extends boolean | null | undefined | SharedPortfolioAccessDefaultArgs> = $Result.GetResult<Prisma.$SharedPortfolioAccessPayload, S>

  type SharedPortfolioAccessCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SharedPortfolioAccessFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SharedPortfolioAccessCountAggregateInputType | true
    }

  export interface SharedPortfolioAccessDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SharedPortfolioAccess'], meta: { name: 'SharedPortfolioAccess' } }
    /**
     * Find zero or one SharedPortfolioAccess that matches the filter.
     * @param {SharedPortfolioAccessFindUniqueArgs} args - Arguments to find a SharedPortfolioAccess
     * @example
     * // Get one SharedPortfolioAccess
     * const sharedPortfolioAccess = await prisma.sharedPortfolioAccess.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SharedPortfolioAccessFindUniqueArgs>(args: SelectSubset<T, SharedPortfolioAccessFindUniqueArgs<ExtArgs>>): Prisma__SharedPortfolioAccessClient<$Result.GetResult<Prisma.$SharedPortfolioAccessPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SharedPortfolioAccess that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SharedPortfolioAccessFindUniqueOrThrowArgs} args - Arguments to find a SharedPortfolioAccess
     * @example
     * // Get one SharedPortfolioAccess
     * const sharedPortfolioAccess = await prisma.sharedPortfolioAccess.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SharedPortfolioAccessFindUniqueOrThrowArgs>(args: SelectSubset<T, SharedPortfolioAccessFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SharedPortfolioAccessClient<$Result.GetResult<Prisma.$SharedPortfolioAccessPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SharedPortfolioAccess that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SharedPortfolioAccessFindFirstArgs} args - Arguments to find a SharedPortfolioAccess
     * @example
     * // Get one SharedPortfolioAccess
     * const sharedPortfolioAccess = await prisma.sharedPortfolioAccess.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SharedPortfolioAccessFindFirstArgs>(args?: SelectSubset<T, SharedPortfolioAccessFindFirstArgs<ExtArgs>>): Prisma__SharedPortfolioAccessClient<$Result.GetResult<Prisma.$SharedPortfolioAccessPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SharedPortfolioAccess that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SharedPortfolioAccessFindFirstOrThrowArgs} args - Arguments to find a SharedPortfolioAccess
     * @example
     * // Get one SharedPortfolioAccess
     * const sharedPortfolioAccess = await prisma.sharedPortfolioAccess.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SharedPortfolioAccessFindFirstOrThrowArgs>(args?: SelectSubset<T, SharedPortfolioAccessFindFirstOrThrowArgs<ExtArgs>>): Prisma__SharedPortfolioAccessClient<$Result.GetResult<Prisma.$SharedPortfolioAccessPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SharedPortfolioAccesses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SharedPortfolioAccessFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SharedPortfolioAccesses
     * const sharedPortfolioAccesses = await prisma.sharedPortfolioAccess.findMany()
     * 
     * // Get first 10 SharedPortfolioAccesses
     * const sharedPortfolioAccesses = await prisma.sharedPortfolioAccess.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sharedPortfolioAccessWithIdOnly = await prisma.sharedPortfolioAccess.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SharedPortfolioAccessFindManyArgs>(args?: SelectSubset<T, SharedPortfolioAccessFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SharedPortfolioAccessPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SharedPortfolioAccess.
     * @param {SharedPortfolioAccessCreateArgs} args - Arguments to create a SharedPortfolioAccess.
     * @example
     * // Create one SharedPortfolioAccess
     * const SharedPortfolioAccess = await prisma.sharedPortfolioAccess.create({
     *   data: {
     *     // ... data to create a SharedPortfolioAccess
     *   }
     * })
     * 
     */
    create<T extends SharedPortfolioAccessCreateArgs>(args: SelectSubset<T, SharedPortfolioAccessCreateArgs<ExtArgs>>): Prisma__SharedPortfolioAccessClient<$Result.GetResult<Prisma.$SharedPortfolioAccessPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SharedPortfolioAccesses.
     * @param {SharedPortfolioAccessCreateManyArgs} args - Arguments to create many SharedPortfolioAccesses.
     * @example
     * // Create many SharedPortfolioAccesses
     * const sharedPortfolioAccess = await prisma.sharedPortfolioAccess.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SharedPortfolioAccessCreateManyArgs>(args?: SelectSubset<T, SharedPortfolioAccessCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a SharedPortfolioAccess.
     * @param {SharedPortfolioAccessDeleteArgs} args - Arguments to delete one SharedPortfolioAccess.
     * @example
     * // Delete one SharedPortfolioAccess
     * const SharedPortfolioAccess = await prisma.sharedPortfolioAccess.delete({
     *   where: {
     *     // ... filter to delete one SharedPortfolioAccess
     *   }
     * })
     * 
     */
    delete<T extends SharedPortfolioAccessDeleteArgs>(args: SelectSubset<T, SharedPortfolioAccessDeleteArgs<ExtArgs>>): Prisma__SharedPortfolioAccessClient<$Result.GetResult<Prisma.$SharedPortfolioAccessPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SharedPortfolioAccess.
     * @param {SharedPortfolioAccessUpdateArgs} args - Arguments to update one SharedPortfolioAccess.
     * @example
     * // Update one SharedPortfolioAccess
     * const sharedPortfolioAccess = await prisma.sharedPortfolioAccess.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SharedPortfolioAccessUpdateArgs>(args: SelectSubset<T, SharedPortfolioAccessUpdateArgs<ExtArgs>>): Prisma__SharedPortfolioAccessClient<$Result.GetResult<Prisma.$SharedPortfolioAccessPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SharedPortfolioAccesses.
     * @param {SharedPortfolioAccessDeleteManyArgs} args - Arguments to filter SharedPortfolioAccesses to delete.
     * @example
     * // Delete a few SharedPortfolioAccesses
     * const { count } = await prisma.sharedPortfolioAccess.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SharedPortfolioAccessDeleteManyArgs>(args?: SelectSubset<T, SharedPortfolioAccessDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SharedPortfolioAccesses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SharedPortfolioAccessUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SharedPortfolioAccesses
     * const sharedPortfolioAccess = await prisma.sharedPortfolioAccess.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SharedPortfolioAccessUpdateManyArgs>(args: SelectSubset<T, SharedPortfolioAccessUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SharedPortfolioAccess.
     * @param {SharedPortfolioAccessUpsertArgs} args - Arguments to update or create a SharedPortfolioAccess.
     * @example
     * // Update or create a SharedPortfolioAccess
     * const sharedPortfolioAccess = await prisma.sharedPortfolioAccess.upsert({
     *   create: {
     *     // ... data to create a SharedPortfolioAccess
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SharedPortfolioAccess we want to update
     *   }
     * })
     */
    upsert<T extends SharedPortfolioAccessUpsertArgs>(args: SelectSubset<T, SharedPortfolioAccessUpsertArgs<ExtArgs>>): Prisma__SharedPortfolioAccessClient<$Result.GetResult<Prisma.$SharedPortfolioAccessPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SharedPortfolioAccesses that matches the filter.
     * @param {SharedPortfolioAccessFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const sharedPortfolioAccess = await prisma.sharedPortfolioAccess.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: SharedPortfolioAccessFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a SharedPortfolioAccess.
     * @param {SharedPortfolioAccessAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const sharedPortfolioAccess = await prisma.sharedPortfolioAccess.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: SharedPortfolioAccessAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of SharedPortfolioAccesses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SharedPortfolioAccessCountArgs} args - Arguments to filter SharedPortfolioAccesses to count.
     * @example
     * // Count the number of SharedPortfolioAccesses
     * const count = await prisma.sharedPortfolioAccess.count({
     *   where: {
     *     // ... the filter for the SharedPortfolioAccesses we want to count
     *   }
     * })
    **/
    count<T extends SharedPortfolioAccessCountArgs>(
      args?: Subset<T, SharedPortfolioAccessCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SharedPortfolioAccessCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SharedPortfolioAccess.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SharedPortfolioAccessAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SharedPortfolioAccessAggregateArgs>(args: Subset<T, SharedPortfolioAccessAggregateArgs>): Prisma.PrismaPromise<GetSharedPortfolioAccessAggregateType<T>>

    /**
     * Group by SharedPortfolioAccess.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SharedPortfolioAccessGroupByArgs} args - Group by arguments.
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
      T extends SharedPortfolioAccessGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SharedPortfolioAccessGroupByArgs['orderBy'] }
        : { orderBy?: SharedPortfolioAccessGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SharedPortfolioAccessGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSharedPortfolioAccessGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SharedPortfolioAccess model
   */
  readonly fields: SharedPortfolioAccessFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SharedPortfolioAccess.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SharedPortfolioAccessClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    portfolio<T extends PortfolioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PortfolioDefaultArgs<ExtArgs>>): Prisma__PortfolioClient<$Result.GetResult<Prisma.$PortfolioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    viewer<T extends SharedPortfolioAccess$viewerArgs<ExtArgs> = {}>(args?: Subset<T, SharedPortfolioAccess$viewerArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    accessLogs<T extends SharedPortfolioAccess$accessLogsArgs<ExtArgs> = {}>(args?: Subset<T, SharedPortfolioAccess$accessLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TokenAccessLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the SharedPortfolioAccess model
   */
  interface SharedPortfolioAccessFieldRefs {
    readonly id: FieldRef<"SharedPortfolioAccess", 'String'>
    readonly token: FieldRef<"SharedPortfolioAccess", 'String'>
    readonly portfolioId: FieldRef<"SharedPortfolioAccess", 'String'>
    readonly viewerId: FieldRef<"SharedPortfolioAccess", 'String'>
    readonly fingerprint: FieldRef<"SharedPortfolioAccess", 'String'>
    readonly isActive: FieldRef<"SharedPortfolioAccess", 'Boolean'>
    readonly expiresAt: FieldRef<"SharedPortfolioAccess", 'DateTime'>
    readonly viewCount: FieldRef<"SharedPortfolioAccess", 'Int'>
    readonly createdAt: FieldRef<"SharedPortfolioAccess", 'DateTime'>
    readonly updatedAt: FieldRef<"SharedPortfolioAccess", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SharedPortfolioAccess findUnique
   */
  export type SharedPortfolioAccessFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SharedPortfolioAccess
     */
    select?: SharedPortfolioAccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SharedPortfolioAccess
     */
    omit?: SharedPortfolioAccessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SharedPortfolioAccessInclude<ExtArgs> | null
    /**
     * Filter, which SharedPortfolioAccess to fetch.
     */
    where: SharedPortfolioAccessWhereUniqueInput
  }

  /**
   * SharedPortfolioAccess findUniqueOrThrow
   */
  export type SharedPortfolioAccessFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SharedPortfolioAccess
     */
    select?: SharedPortfolioAccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SharedPortfolioAccess
     */
    omit?: SharedPortfolioAccessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SharedPortfolioAccessInclude<ExtArgs> | null
    /**
     * Filter, which SharedPortfolioAccess to fetch.
     */
    where: SharedPortfolioAccessWhereUniqueInput
  }

  /**
   * SharedPortfolioAccess findFirst
   */
  export type SharedPortfolioAccessFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SharedPortfolioAccess
     */
    select?: SharedPortfolioAccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SharedPortfolioAccess
     */
    omit?: SharedPortfolioAccessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SharedPortfolioAccessInclude<ExtArgs> | null
    /**
     * Filter, which SharedPortfolioAccess to fetch.
     */
    where?: SharedPortfolioAccessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SharedPortfolioAccesses to fetch.
     */
    orderBy?: SharedPortfolioAccessOrderByWithRelationInput | SharedPortfolioAccessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SharedPortfolioAccesses.
     */
    cursor?: SharedPortfolioAccessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SharedPortfolioAccesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SharedPortfolioAccesses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SharedPortfolioAccesses.
     */
    distinct?: SharedPortfolioAccessScalarFieldEnum | SharedPortfolioAccessScalarFieldEnum[]
  }

  /**
   * SharedPortfolioAccess findFirstOrThrow
   */
  export type SharedPortfolioAccessFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SharedPortfolioAccess
     */
    select?: SharedPortfolioAccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SharedPortfolioAccess
     */
    omit?: SharedPortfolioAccessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SharedPortfolioAccessInclude<ExtArgs> | null
    /**
     * Filter, which SharedPortfolioAccess to fetch.
     */
    where?: SharedPortfolioAccessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SharedPortfolioAccesses to fetch.
     */
    orderBy?: SharedPortfolioAccessOrderByWithRelationInput | SharedPortfolioAccessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SharedPortfolioAccesses.
     */
    cursor?: SharedPortfolioAccessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SharedPortfolioAccesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SharedPortfolioAccesses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SharedPortfolioAccesses.
     */
    distinct?: SharedPortfolioAccessScalarFieldEnum | SharedPortfolioAccessScalarFieldEnum[]
  }

  /**
   * SharedPortfolioAccess findMany
   */
  export type SharedPortfolioAccessFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SharedPortfolioAccess
     */
    select?: SharedPortfolioAccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SharedPortfolioAccess
     */
    omit?: SharedPortfolioAccessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SharedPortfolioAccessInclude<ExtArgs> | null
    /**
     * Filter, which SharedPortfolioAccesses to fetch.
     */
    where?: SharedPortfolioAccessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SharedPortfolioAccesses to fetch.
     */
    orderBy?: SharedPortfolioAccessOrderByWithRelationInput | SharedPortfolioAccessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SharedPortfolioAccesses.
     */
    cursor?: SharedPortfolioAccessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SharedPortfolioAccesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SharedPortfolioAccesses.
     */
    skip?: number
    distinct?: SharedPortfolioAccessScalarFieldEnum | SharedPortfolioAccessScalarFieldEnum[]
  }

  /**
   * SharedPortfolioAccess create
   */
  export type SharedPortfolioAccessCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SharedPortfolioAccess
     */
    select?: SharedPortfolioAccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SharedPortfolioAccess
     */
    omit?: SharedPortfolioAccessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SharedPortfolioAccessInclude<ExtArgs> | null
    /**
     * The data needed to create a SharedPortfolioAccess.
     */
    data: XOR<SharedPortfolioAccessCreateInput, SharedPortfolioAccessUncheckedCreateInput>
  }

  /**
   * SharedPortfolioAccess createMany
   */
  export type SharedPortfolioAccessCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SharedPortfolioAccesses.
     */
    data: SharedPortfolioAccessCreateManyInput | SharedPortfolioAccessCreateManyInput[]
  }

  /**
   * SharedPortfolioAccess update
   */
  export type SharedPortfolioAccessUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SharedPortfolioAccess
     */
    select?: SharedPortfolioAccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SharedPortfolioAccess
     */
    omit?: SharedPortfolioAccessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SharedPortfolioAccessInclude<ExtArgs> | null
    /**
     * The data needed to update a SharedPortfolioAccess.
     */
    data: XOR<SharedPortfolioAccessUpdateInput, SharedPortfolioAccessUncheckedUpdateInput>
    /**
     * Choose, which SharedPortfolioAccess to update.
     */
    where: SharedPortfolioAccessWhereUniqueInput
  }

  /**
   * SharedPortfolioAccess updateMany
   */
  export type SharedPortfolioAccessUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SharedPortfolioAccesses.
     */
    data: XOR<SharedPortfolioAccessUpdateManyMutationInput, SharedPortfolioAccessUncheckedUpdateManyInput>
    /**
     * Filter which SharedPortfolioAccesses to update
     */
    where?: SharedPortfolioAccessWhereInput
    /**
     * Limit how many SharedPortfolioAccesses to update.
     */
    limit?: number
  }

  /**
   * SharedPortfolioAccess upsert
   */
  export type SharedPortfolioAccessUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SharedPortfolioAccess
     */
    select?: SharedPortfolioAccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SharedPortfolioAccess
     */
    omit?: SharedPortfolioAccessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SharedPortfolioAccessInclude<ExtArgs> | null
    /**
     * The filter to search for the SharedPortfolioAccess to update in case it exists.
     */
    where: SharedPortfolioAccessWhereUniqueInput
    /**
     * In case the SharedPortfolioAccess found by the `where` argument doesn't exist, create a new SharedPortfolioAccess with this data.
     */
    create: XOR<SharedPortfolioAccessCreateInput, SharedPortfolioAccessUncheckedCreateInput>
    /**
     * In case the SharedPortfolioAccess was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SharedPortfolioAccessUpdateInput, SharedPortfolioAccessUncheckedUpdateInput>
  }

  /**
   * SharedPortfolioAccess delete
   */
  export type SharedPortfolioAccessDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SharedPortfolioAccess
     */
    select?: SharedPortfolioAccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SharedPortfolioAccess
     */
    omit?: SharedPortfolioAccessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SharedPortfolioAccessInclude<ExtArgs> | null
    /**
     * Filter which SharedPortfolioAccess to delete.
     */
    where: SharedPortfolioAccessWhereUniqueInput
  }

  /**
   * SharedPortfolioAccess deleteMany
   */
  export type SharedPortfolioAccessDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SharedPortfolioAccesses to delete
     */
    where?: SharedPortfolioAccessWhereInput
    /**
     * Limit how many SharedPortfolioAccesses to delete.
     */
    limit?: number
  }

  /**
   * SharedPortfolioAccess findRaw
   */
  export type SharedPortfolioAccessFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * SharedPortfolioAccess aggregateRaw
   */
  export type SharedPortfolioAccessAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * SharedPortfolioAccess.viewer
   */
  export type SharedPortfolioAccess$viewerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * SharedPortfolioAccess.accessLogs
   */
  export type SharedPortfolioAccess$accessLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenAccessLog
     */
    select?: TokenAccessLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TokenAccessLog
     */
    omit?: TokenAccessLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenAccessLogInclude<ExtArgs> | null
    where?: TokenAccessLogWhereInput
    orderBy?: TokenAccessLogOrderByWithRelationInput | TokenAccessLogOrderByWithRelationInput[]
    cursor?: TokenAccessLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TokenAccessLogScalarFieldEnum | TokenAccessLogScalarFieldEnum[]
  }

  /**
   * SharedPortfolioAccess without action
   */
  export type SharedPortfolioAccessDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SharedPortfolioAccess
     */
    select?: SharedPortfolioAccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SharedPortfolioAccess
     */
    omit?: SharedPortfolioAccessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SharedPortfolioAccessInclude<ExtArgs> | null
  }


  /**
   * Model TokenAccessLog
   */

  export type AggregateTokenAccessLog = {
    _count: TokenAccessLogCountAggregateOutputType | null
    _min: TokenAccessLogMinAggregateOutputType | null
    _max: TokenAccessLogMaxAggregateOutputType | null
  }

  export type TokenAccessLogMinAggregateOutputType = {
    id: string | null
    accessId: string | null
    ip: string | null
    userAgent: string | null
    viewedAt: Date | null
  }

  export type TokenAccessLogMaxAggregateOutputType = {
    id: string | null
    accessId: string | null
    ip: string | null
    userAgent: string | null
    viewedAt: Date | null
  }

  export type TokenAccessLogCountAggregateOutputType = {
    id: number
    accessId: number
    ip: number
    userAgent: number
    viewedAt: number
    _all: number
  }


  export type TokenAccessLogMinAggregateInputType = {
    id?: true
    accessId?: true
    ip?: true
    userAgent?: true
    viewedAt?: true
  }

  export type TokenAccessLogMaxAggregateInputType = {
    id?: true
    accessId?: true
    ip?: true
    userAgent?: true
    viewedAt?: true
  }

  export type TokenAccessLogCountAggregateInputType = {
    id?: true
    accessId?: true
    ip?: true
    userAgent?: true
    viewedAt?: true
    _all?: true
  }

  export type TokenAccessLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TokenAccessLog to aggregate.
     */
    where?: TokenAccessLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TokenAccessLogs to fetch.
     */
    orderBy?: TokenAccessLogOrderByWithRelationInput | TokenAccessLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TokenAccessLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TokenAccessLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TokenAccessLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TokenAccessLogs
    **/
    _count?: true | TokenAccessLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TokenAccessLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TokenAccessLogMaxAggregateInputType
  }

  export type GetTokenAccessLogAggregateType<T extends TokenAccessLogAggregateArgs> = {
        [P in keyof T & keyof AggregateTokenAccessLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTokenAccessLog[P]>
      : GetScalarType<T[P], AggregateTokenAccessLog[P]>
  }




  export type TokenAccessLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TokenAccessLogWhereInput
    orderBy?: TokenAccessLogOrderByWithAggregationInput | TokenAccessLogOrderByWithAggregationInput[]
    by: TokenAccessLogScalarFieldEnum[] | TokenAccessLogScalarFieldEnum
    having?: TokenAccessLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TokenAccessLogCountAggregateInputType | true
    _min?: TokenAccessLogMinAggregateInputType
    _max?: TokenAccessLogMaxAggregateInputType
  }

  export type TokenAccessLogGroupByOutputType = {
    id: string
    accessId: string
    ip: string | null
    userAgent: string | null
    viewedAt: Date
    _count: TokenAccessLogCountAggregateOutputType | null
    _min: TokenAccessLogMinAggregateOutputType | null
    _max: TokenAccessLogMaxAggregateOutputType | null
  }

  type GetTokenAccessLogGroupByPayload<T extends TokenAccessLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TokenAccessLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TokenAccessLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TokenAccessLogGroupByOutputType[P]>
            : GetScalarType<T[P], TokenAccessLogGroupByOutputType[P]>
        }
      >
    >


  export type TokenAccessLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accessId?: boolean
    ip?: boolean
    userAgent?: boolean
    viewedAt?: boolean
    access?: boolean | SharedPortfolioAccessDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tokenAccessLog"]>



  export type TokenAccessLogSelectScalar = {
    id?: boolean
    accessId?: boolean
    ip?: boolean
    userAgent?: boolean
    viewedAt?: boolean
  }

  export type TokenAccessLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "accessId" | "ip" | "userAgent" | "viewedAt", ExtArgs["result"]["tokenAccessLog"]>
  export type TokenAccessLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    access?: boolean | SharedPortfolioAccessDefaultArgs<ExtArgs>
  }

  export type $TokenAccessLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TokenAccessLog"
    objects: {
      access: Prisma.$SharedPortfolioAccessPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      accessId: string
      ip: string | null
      userAgent: string | null
      viewedAt: Date
    }, ExtArgs["result"]["tokenAccessLog"]>
    composites: {}
  }

  type TokenAccessLogGetPayload<S extends boolean | null | undefined | TokenAccessLogDefaultArgs> = $Result.GetResult<Prisma.$TokenAccessLogPayload, S>

  type TokenAccessLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TokenAccessLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TokenAccessLogCountAggregateInputType | true
    }

  export interface TokenAccessLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TokenAccessLog'], meta: { name: 'TokenAccessLog' } }
    /**
     * Find zero or one TokenAccessLog that matches the filter.
     * @param {TokenAccessLogFindUniqueArgs} args - Arguments to find a TokenAccessLog
     * @example
     * // Get one TokenAccessLog
     * const tokenAccessLog = await prisma.tokenAccessLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TokenAccessLogFindUniqueArgs>(args: SelectSubset<T, TokenAccessLogFindUniqueArgs<ExtArgs>>): Prisma__TokenAccessLogClient<$Result.GetResult<Prisma.$TokenAccessLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TokenAccessLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TokenAccessLogFindUniqueOrThrowArgs} args - Arguments to find a TokenAccessLog
     * @example
     * // Get one TokenAccessLog
     * const tokenAccessLog = await prisma.tokenAccessLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TokenAccessLogFindUniqueOrThrowArgs>(args: SelectSubset<T, TokenAccessLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TokenAccessLogClient<$Result.GetResult<Prisma.$TokenAccessLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TokenAccessLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenAccessLogFindFirstArgs} args - Arguments to find a TokenAccessLog
     * @example
     * // Get one TokenAccessLog
     * const tokenAccessLog = await prisma.tokenAccessLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TokenAccessLogFindFirstArgs>(args?: SelectSubset<T, TokenAccessLogFindFirstArgs<ExtArgs>>): Prisma__TokenAccessLogClient<$Result.GetResult<Prisma.$TokenAccessLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TokenAccessLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenAccessLogFindFirstOrThrowArgs} args - Arguments to find a TokenAccessLog
     * @example
     * // Get one TokenAccessLog
     * const tokenAccessLog = await prisma.tokenAccessLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TokenAccessLogFindFirstOrThrowArgs>(args?: SelectSubset<T, TokenAccessLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__TokenAccessLogClient<$Result.GetResult<Prisma.$TokenAccessLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TokenAccessLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenAccessLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TokenAccessLogs
     * const tokenAccessLogs = await prisma.tokenAccessLog.findMany()
     * 
     * // Get first 10 TokenAccessLogs
     * const tokenAccessLogs = await prisma.tokenAccessLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tokenAccessLogWithIdOnly = await prisma.tokenAccessLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TokenAccessLogFindManyArgs>(args?: SelectSubset<T, TokenAccessLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TokenAccessLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TokenAccessLog.
     * @param {TokenAccessLogCreateArgs} args - Arguments to create a TokenAccessLog.
     * @example
     * // Create one TokenAccessLog
     * const TokenAccessLog = await prisma.tokenAccessLog.create({
     *   data: {
     *     // ... data to create a TokenAccessLog
     *   }
     * })
     * 
     */
    create<T extends TokenAccessLogCreateArgs>(args: SelectSubset<T, TokenAccessLogCreateArgs<ExtArgs>>): Prisma__TokenAccessLogClient<$Result.GetResult<Prisma.$TokenAccessLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TokenAccessLogs.
     * @param {TokenAccessLogCreateManyArgs} args - Arguments to create many TokenAccessLogs.
     * @example
     * // Create many TokenAccessLogs
     * const tokenAccessLog = await prisma.tokenAccessLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TokenAccessLogCreateManyArgs>(args?: SelectSubset<T, TokenAccessLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a TokenAccessLog.
     * @param {TokenAccessLogDeleteArgs} args - Arguments to delete one TokenAccessLog.
     * @example
     * // Delete one TokenAccessLog
     * const TokenAccessLog = await prisma.tokenAccessLog.delete({
     *   where: {
     *     // ... filter to delete one TokenAccessLog
     *   }
     * })
     * 
     */
    delete<T extends TokenAccessLogDeleteArgs>(args: SelectSubset<T, TokenAccessLogDeleteArgs<ExtArgs>>): Prisma__TokenAccessLogClient<$Result.GetResult<Prisma.$TokenAccessLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TokenAccessLog.
     * @param {TokenAccessLogUpdateArgs} args - Arguments to update one TokenAccessLog.
     * @example
     * // Update one TokenAccessLog
     * const tokenAccessLog = await prisma.tokenAccessLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TokenAccessLogUpdateArgs>(args: SelectSubset<T, TokenAccessLogUpdateArgs<ExtArgs>>): Prisma__TokenAccessLogClient<$Result.GetResult<Prisma.$TokenAccessLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TokenAccessLogs.
     * @param {TokenAccessLogDeleteManyArgs} args - Arguments to filter TokenAccessLogs to delete.
     * @example
     * // Delete a few TokenAccessLogs
     * const { count } = await prisma.tokenAccessLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TokenAccessLogDeleteManyArgs>(args?: SelectSubset<T, TokenAccessLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TokenAccessLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenAccessLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TokenAccessLogs
     * const tokenAccessLog = await prisma.tokenAccessLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TokenAccessLogUpdateManyArgs>(args: SelectSubset<T, TokenAccessLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TokenAccessLog.
     * @param {TokenAccessLogUpsertArgs} args - Arguments to update or create a TokenAccessLog.
     * @example
     * // Update or create a TokenAccessLog
     * const tokenAccessLog = await prisma.tokenAccessLog.upsert({
     *   create: {
     *     // ... data to create a TokenAccessLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TokenAccessLog we want to update
     *   }
     * })
     */
    upsert<T extends TokenAccessLogUpsertArgs>(args: SelectSubset<T, TokenAccessLogUpsertArgs<ExtArgs>>): Prisma__TokenAccessLogClient<$Result.GetResult<Prisma.$TokenAccessLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TokenAccessLogs that matches the filter.
     * @param {TokenAccessLogFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const tokenAccessLog = await prisma.tokenAccessLog.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: TokenAccessLogFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a TokenAccessLog.
     * @param {TokenAccessLogAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const tokenAccessLog = await prisma.tokenAccessLog.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: TokenAccessLogAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of TokenAccessLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenAccessLogCountArgs} args - Arguments to filter TokenAccessLogs to count.
     * @example
     * // Count the number of TokenAccessLogs
     * const count = await prisma.tokenAccessLog.count({
     *   where: {
     *     // ... the filter for the TokenAccessLogs we want to count
     *   }
     * })
    **/
    count<T extends TokenAccessLogCountArgs>(
      args?: Subset<T, TokenAccessLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TokenAccessLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TokenAccessLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenAccessLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TokenAccessLogAggregateArgs>(args: Subset<T, TokenAccessLogAggregateArgs>): Prisma.PrismaPromise<GetTokenAccessLogAggregateType<T>>

    /**
     * Group by TokenAccessLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenAccessLogGroupByArgs} args - Group by arguments.
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
      T extends TokenAccessLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TokenAccessLogGroupByArgs['orderBy'] }
        : { orderBy?: TokenAccessLogGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TokenAccessLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTokenAccessLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TokenAccessLog model
   */
  readonly fields: TokenAccessLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TokenAccessLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TokenAccessLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    access<T extends SharedPortfolioAccessDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SharedPortfolioAccessDefaultArgs<ExtArgs>>): Prisma__SharedPortfolioAccessClient<$Result.GetResult<Prisma.$SharedPortfolioAccessPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the TokenAccessLog model
   */
  interface TokenAccessLogFieldRefs {
    readonly id: FieldRef<"TokenAccessLog", 'String'>
    readonly accessId: FieldRef<"TokenAccessLog", 'String'>
    readonly ip: FieldRef<"TokenAccessLog", 'String'>
    readonly userAgent: FieldRef<"TokenAccessLog", 'String'>
    readonly viewedAt: FieldRef<"TokenAccessLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TokenAccessLog findUnique
   */
  export type TokenAccessLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenAccessLog
     */
    select?: TokenAccessLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TokenAccessLog
     */
    omit?: TokenAccessLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenAccessLogInclude<ExtArgs> | null
    /**
     * Filter, which TokenAccessLog to fetch.
     */
    where: TokenAccessLogWhereUniqueInput
  }

  /**
   * TokenAccessLog findUniqueOrThrow
   */
  export type TokenAccessLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenAccessLog
     */
    select?: TokenAccessLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TokenAccessLog
     */
    omit?: TokenAccessLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenAccessLogInclude<ExtArgs> | null
    /**
     * Filter, which TokenAccessLog to fetch.
     */
    where: TokenAccessLogWhereUniqueInput
  }

  /**
   * TokenAccessLog findFirst
   */
  export type TokenAccessLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenAccessLog
     */
    select?: TokenAccessLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TokenAccessLog
     */
    omit?: TokenAccessLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenAccessLogInclude<ExtArgs> | null
    /**
     * Filter, which TokenAccessLog to fetch.
     */
    where?: TokenAccessLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TokenAccessLogs to fetch.
     */
    orderBy?: TokenAccessLogOrderByWithRelationInput | TokenAccessLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TokenAccessLogs.
     */
    cursor?: TokenAccessLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TokenAccessLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TokenAccessLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TokenAccessLogs.
     */
    distinct?: TokenAccessLogScalarFieldEnum | TokenAccessLogScalarFieldEnum[]
  }

  /**
   * TokenAccessLog findFirstOrThrow
   */
  export type TokenAccessLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenAccessLog
     */
    select?: TokenAccessLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TokenAccessLog
     */
    omit?: TokenAccessLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenAccessLogInclude<ExtArgs> | null
    /**
     * Filter, which TokenAccessLog to fetch.
     */
    where?: TokenAccessLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TokenAccessLogs to fetch.
     */
    orderBy?: TokenAccessLogOrderByWithRelationInput | TokenAccessLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TokenAccessLogs.
     */
    cursor?: TokenAccessLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TokenAccessLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TokenAccessLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TokenAccessLogs.
     */
    distinct?: TokenAccessLogScalarFieldEnum | TokenAccessLogScalarFieldEnum[]
  }

  /**
   * TokenAccessLog findMany
   */
  export type TokenAccessLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenAccessLog
     */
    select?: TokenAccessLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TokenAccessLog
     */
    omit?: TokenAccessLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenAccessLogInclude<ExtArgs> | null
    /**
     * Filter, which TokenAccessLogs to fetch.
     */
    where?: TokenAccessLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TokenAccessLogs to fetch.
     */
    orderBy?: TokenAccessLogOrderByWithRelationInput | TokenAccessLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TokenAccessLogs.
     */
    cursor?: TokenAccessLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TokenAccessLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TokenAccessLogs.
     */
    skip?: number
    distinct?: TokenAccessLogScalarFieldEnum | TokenAccessLogScalarFieldEnum[]
  }

  /**
   * TokenAccessLog create
   */
  export type TokenAccessLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenAccessLog
     */
    select?: TokenAccessLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TokenAccessLog
     */
    omit?: TokenAccessLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenAccessLogInclude<ExtArgs> | null
    /**
     * The data needed to create a TokenAccessLog.
     */
    data: XOR<TokenAccessLogCreateInput, TokenAccessLogUncheckedCreateInput>
  }

  /**
   * TokenAccessLog createMany
   */
  export type TokenAccessLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TokenAccessLogs.
     */
    data: TokenAccessLogCreateManyInput | TokenAccessLogCreateManyInput[]
  }

  /**
   * TokenAccessLog update
   */
  export type TokenAccessLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenAccessLog
     */
    select?: TokenAccessLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TokenAccessLog
     */
    omit?: TokenAccessLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenAccessLogInclude<ExtArgs> | null
    /**
     * The data needed to update a TokenAccessLog.
     */
    data: XOR<TokenAccessLogUpdateInput, TokenAccessLogUncheckedUpdateInput>
    /**
     * Choose, which TokenAccessLog to update.
     */
    where: TokenAccessLogWhereUniqueInput
  }

  /**
   * TokenAccessLog updateMany
   */
  export type TokenAccessLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TokenAccessLogs.
     */
    data: XOR<TokenAccessLogUpdateManyMutationInput, TokenAccessLogUncheckedUpdateManyInput>
    /**
     * Filter which TokenAccessLogs to update
     */
    where?: TokenAccessLogWhereInput
    /**
     * Limit how many TokenAccessLogs to update.
     */
    limit?: number
  }

  /**
   * TokenAccessLog upsert
   */
  export type TokenAccessLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenAccessLog
     */
    select?: TokenAccessLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TokenAccessLog
     */
    omit?: TokenAccessLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenAccessLogInclude<ExtArgs> | null
    /**
     * The filter to search for the TokenAccessLog to update in case it exists.
     */
    where: TokenAccessLogWhereUniqueInput
    /**
     * In case the TokenAccessLog found by the `where` argument doesn't exist, create a new TokenAccessLog with this data.
     */
    create: XOR<TokenAccessLogCreateInput, TokenAccessLogUncheckedCreateInput>
    /**
     * In case the TokenAccessLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TokenAccessLogUpdateInput, TokenAccessLogUncheckedUpdateInput>
  }

  /**
   * TokenAccessLog delete
   */
  export type TokenAccessLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenAccessLog
     */
    select?: TokenAccessLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TokenAccessLog
     */
    omit?: TokenAccessLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenAccessLogInclude<ExtArgs> | null
    /**
     * Filter which TokenAccessLog to delete.
     */
    where: TokenAccessLogWhereUniqueInput
  }

  /**
   * TokenAccessLog deleteMany
   */
  export type TokenAccessLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TokenAccessLogs to delete
     */
    where?: TokenAccessLogWhereInput
    /**
     * Limit how many TokenAccessLogs to delete.
     */
    limit?: number
  }

  /**
   * TokenAccessLog findRaw
   */
  export type TokenAccessLogFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * TokenAccessLog aggregateRaw
   */
  export type TokenAccessLogAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * TokenAccessLog without action
   */
  export type TokenAccessLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenAccessLog
     */
    select?: TokenAccessLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TokenAccessLog
     */
    omit?: TokenAccessLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenAccessLogInclude<ExtArgs> | null
  }


  /**
   * Model AIInsight
   */

  export type AggregateAIInsight = {
    _count: AIInsightCountAggregateOutputType | null
    _min: AIInsightMinAggregateOutputType | null
    _max: AIInsightMaxAggregateOutputType | null
  }

  export type AIInsightMinAggregateOutputType = {
    id: string | null
    portfolioId: string | null
    summary: string | null
    diversification: string | null
    sectorExposure: string | null
    investmentThesis: string | null
    fullAnalysis: string | null
    generatedAt: Date | null
  }

  export type AIInsightMaxAggregateOutputType = {
    id: string | null
    portfolioId: string | null
    summary: string | null
    diversification: string | null
    sectorExposure: string | null
    investmentThesis: string | null
    fullAnalysis: string | null
    generatedAt: Date | null
  }

  export type AIInsightCountAggregateOutputType = {
    id: number
    portfolioId: number
    summary: number
    diversification: number
    sectorExposure: number
    investmentThesis: number
    fullAnalysis: number
    generatedAt: number
    _all: number
  }


  export type AIInsightMinAggregateInputType = {
    id?: true
    portfolioId?: true
    summary?: true
    diversification?: true
    sectorExposure?: true
    investmentThesis?: true
    fullAnalysis?: true
    generatedAt?: true
  }

  export type AIInsightMaxAggregateInputType = {
    id?: true
    portfolioId?: true
    summary?: true
    diversification?: true
    sectorExposure?: true
    investmentThesis?: true
    fullAnalysis?: true
    generatedAt?: true
  }

  export type AIInsightCountAggregateInputType = {
    id?: true
    portfolioId?: true
    summary?: true
    diversification?: true
    sectorExposure?: true
    investmentThesis?: true
    fullAnalysis?: true
    generatedAt?: true
    _all?: true
  }

  export type AIInsightAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AIInsight to aggregate.
     */
    where?: AIInsightWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AIInsights to fetch.
     */
    orderBy?: AIInsightOrderByWithRelationInput | AIInsightOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AIInsightWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AIInsights from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AIInsights.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AIInsights
    **/
    _count?: true | AIInsightCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AIInsightMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AIInsightMaxAggregateInputType
  }

  export type GetAIInsightAggregateType<T extends AIInsightAggregateArgs> = {
        [P in keyof T & keyof AggregateAIInsight]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAIInsight[P]>
      : GetScalarType<T[P], AggregateAIInsight[P]>
  }




  export type AIInsightGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AIInsightWhereInput
    orderBy?: AIInsightOrderByWithAggregationInput | AIInsightOrderByWithAggregationInput[]
    by: AIInsightScalarFieldEnum[] | AIInsightScalarFieldEnum
    having?: AIInsightScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AIInsightCountAggregateInputType | true
    _min?: AIInsightMinAggregateInputType
    _max?: AIInsightMaxAggregateInputType
  }

  export type AIInsightGroupByOutputType = {
    id: string
    portfolioId: string
    summary: string
    diversification: string
    sectorExposure: string
    investmentThesis: string
    fullAnalysis: string | null
    generatedAt: Date
    _count: AIInsightCountAggregateOutputType | null
    _min: AIInsightMinAggregateOutputType | null
    _max: AIInsightMaxAggregateOutputType | null
  }

  type GetAIInsightGroupByPayload<T extends AIInsightGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AIInsightGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AIInsightGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AIInsightGroupByOutputType[P]>
            : GetScalarType<T[P], AIInsightGroupByOutputType[P]>
        }
      >
    >


  export type AIInsightSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    portfolioId?: boolean
    summary?: boolean
    diversification?: boolean
    sectorExposure?: boolean
    investmentThesis?: boolean
    fullAnalysis?: boolean
    generatedAt?: boolean
    portfolio?: boolean | PortfolioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["aIInsight"]>



  export type AIInsightSelectScalar = {
    id?: boolean
    portfolioId?: boolean
    summary?: boolean
    diversification?: boolean
    sectorExposure?: boolean
    investmentThesis?: boolean
    fullAnalysis?: boolean
    generatedAt?: boolean
  }

  export type AIInsightOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "portfolioId" | "summary" | "diversification" | "sectorExposure" | "investmentThesis" | "fullAnalysis" | "generatedAt", ExtArgs["result"]["aIInsight"]>
  export type AIInsightInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    portfolio?: boolean | PortfolioDefaultArgs<ExtArgs>
  }

  export type $AIInsightPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AIInsight"
    objects: {
      portfolio: Prisma.$PortfolioPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      portfolioId: string
      summary: string
      diversification: string
      sectorExposure: string
      investmentThesis: string
      fullAnalysis: string | null
      generatedAt: Date
    }, ExtArgs["result"]["aIInsight"]>
    composites: {}
  }

  type AIInsightGetPayload<S extends boolean | null | undefined | AIInsightDefaultArgs> = $Result.GetResult<Prisma.$AIInsightPayload, S>

  type AIInsightCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AIInsightFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AIInsightCountAggregateInputType | true
    }

  export interface AIInsightDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AIInsight'], meta: { name: 'AIInsight' } }
    /**
     * Find zero or one AIInsight that matches the filter.
     * @param {AIInsightFindUniqueArgs} args - Arguments to find a AIInsight
     * @example
     * // Get one AIInsight
     * const aIInsight = await prisma.aIInsight.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AIInsightFindUniqueArgs>(args: SelectSubset<T, AIInsightFindUniqueArgs<ExtArgs>>): Prisma__AIInsightClient<$Result.GetResult<Prisma.$AIInsightPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AIInsight that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AIInsightFindUniqueOrThrowArgs} args - Arguments to find a AIInsight
     * @example
     * // Get one AIInsight
     * const aIInsight = await prisma.aIInsight.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AIInsightFindUniqueOrThrowArgs>(args: SelectSubset<T, AIInsightFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AIInsightClient<$Result.GetResult<Prisma.$AIInsightPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AIInsight that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AIInsightFindFirstArgs} args - Arguments to find a AIInsight
     * @example
     * // Get one AIInsight
     * const aIInsight = await prisma.aIInsight.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AIInsightFindFirstArgs>(args?: SelectSubset<T, AIInsightFindFirstArgs<ExtArgs>>): Prisma__AIInsightClient<$Result.GetResult<Prisma.$AIInsightPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AIInsight that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AIInsightFindFirstOrThrowArgs} args - Arguments to find a AIInsight
     * @example
     * // Get one AIInsight
     * const aIInsight = await prisma.aIInsight.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AIInsightFindFirstOrThrowArgs>(args?: SelectSubset<T, AIInsightFindFirstOrThrowArgs<ExtArgs>>): Prisma__AIInsightClient<$Result.GetResult<Prisma.$AIInsightPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AIInsights that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AIInsightFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AIInsights
     * const aIInsights = await prisma.aIInsight.findMany()
     * 
     * // Get first 10 AIInsights
     * const aIInsights = await prisma.aIInsight.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const aIInsightWithIdOnly = await prisma.aIInsight.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AIInsightFindManyArgs>(args?: SelectSubset<T, AIInsightFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AIInsightPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AIInsight.
     * @param {AIInsightCreateArgs} args - Arguments to create a AIInsight.
     * @example
     * // Create one AIInsight
     * const AIInsight = await prisma.aIInsight.create({
     *   data: {
     *     // ... data to create a AIInsight
     *   }
     * })
     * 
     */
    create<T extends AIInsightCreateArgs>(args: SelectSubset<T, AIInsightCreateArgs<ExtArgs>>): Prisma__AIInsightClient<$Result.GetResult<Prisma.$AIInsightPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AIInsights.
     * @param {AIInsightCreateManyArgs} args - Arguments to create many AIInsights.
     * @example
     * // Create many AIInsights
     * const aIInsight = await prisma.aIInsight.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AIInsightCreateManyArgs>(args?: SelectSubset<T, AIInsightCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a AIInsight.
     * @param {AIInsightDeleteArgs} args - Arguments to delete one AIInsight.
     * @example
     * // Delete one AIInsight
     * const AIInsight = await prisma.aIInsight.delete({
     *   where: {
     *     // ... filter to delete one AIInsight
     *   }
     * })
     * 
     */
    delete<T extends AIInsightDeleteArgs>(args: SelectSubset<T, AIInsightDeleteArgs<ExtArgs>>): Prisma__AIInsightClient<$Result.GetResult<Prisma.$AIInsightPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AIInsight.
     * @param {AIInsightUpdateArgs} args - Arguments to update one AIInsight.
     * @example
     * // Update one AIInsight
     * const aIInsight = await prisma.aIInsight.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AIInsightUpdateArgs>(args: SelectSubset<T, AIInsightUpdateArgs<ExtArgs>>): Prisma__AIInsightClient<$Result.GetResult<Prisma.$AIInsightPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AIInsights.
     * @param {AIInsightDeleteManyArgs} args - Arguments to filter AIInsights to delete.
     * @example
     * // Delete a few AIInsights
     * const { count } = await prisma.aIInsight.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AIInsightDeleteManyArgs>(args?: SelectSubset<T, AIInsightDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AIInsights.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AIInsightUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AIInsights
     * const aIInsight = await prisma.aIInsight.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AIInsightUpdateManyArgs>(args: SelectSubset<T, AIInsightUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AIInsight.
     * @param {AIInsightUpsertArgs} args - Arguments to update or create a AIInsight.
     * @example
     * // Update or create a AIInsight
     * const aIInsight = await prisma.aIInsight.upsert({
     *   create: {
     *     // ... data to create a AIInsight
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AIInsight we want to update
     *   }
     * })
     */
    upsert<T extends AIInsightUpsertArgs>(args: SelectSubset<T, AIInsightUpsertArgs<ExtArgs>>): Prisma__AIInsightClient<$Result.GetResult<Prisma.$AIInsightPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AIInsights that matches the filter.
     * @param {AIInsightFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const aIInsight = await prisma.aIInsight.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: AIInsightFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a AIInsight.
     * @param {AIInsightAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const aIInsight = await prisma.aIInsight.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: AIInsightAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of AIInsights.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AIInsightCountArgs} args - Arguments to filter AIInsights to count.
     * @example
     * // Count the number of AIInsights
     * const count = await prisma.aIInsight.count({
     *   where: {
     *     // ... the filter for the AIInsights we want to count
     *   }
     * })
    **/
    count<T extends AIInsightCountArgs>(
      args?: Subset<T, AIInsightCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AIInsightCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AIInsight.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AIInsightAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AIInsightAggregateArgs>(args: Subset<T, AIInsightAggregateArgs>): Prisma.PrismaPromise<GetAIInsightAggregateType<T>>

    /**
     * Group by AIInsight.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AIInsightGroupByArgs} args - Group by arguments.
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
      T extends AIInsightGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AIInsightGroupByArgs['orderBy'] }
        : { orderBy?: AIInsightGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AIInsightGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAIInsightGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AIInsight model
   */
  readonly fields: AIInsightFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AIInsight.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AIInsightClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    portfolio<T extends PortfolioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PortfolioDefaultArgs<ExtArgs>>): Prisma__PortfolioClient<$Result.GetResult<Prisma.$PortfolioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the AIInsight model
   */
  interface AIInsightFieldRefs {
    readonly id: FieldRef<"AIInsight", 'String'>
    readonly portfolioId: FieldRef<"AIInsight", 'String'>
    readonly summary: FieldRef<"AIInsight", 'String'>
    readonly diversification: FieldRef<"AIInsight", 'String'>
    readonly sectorExposure: FieldRef<"AIInsight", 'String'>
    readonly investmentThesis: FieldRef<"AIInsight", 'String'>
    readonly fullAnalysis: FieldRef<"AIInsight", 'String'>
    readonly generatedAt: FieldRef<"AIInsight", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AIInsight findUnique
   */
  export type AIInsightFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIInsight
     */
    select?: AIInsightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIInsight
     */
    omit?: AIInsightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIInsightInclude<ExtArgs> | null
    /**
     * Filter, which AIInsight to fetch.
     */
    where: AIInsightWhereUniqueInput
  }

  /**
   * AIInsight findUniqueOrThrow
   */
  export type AIInsightFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIInsight
     */
    select?: AIInsightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIInsight
     */
    omit?: AIInsightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIInsightInclude<ExtArgs> | null
    /**
     * Filter, which AIInsight to fetch.
     */
    where: AIInsightWhereUniqueInput
  }

  /**
   * AIInsight findFirst
   */
  export type AIInsightFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIInsight
     */
    select?: AIInsightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIInsight
     */
    omit?: AIInsightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIInsightInclude<ExtArgs> | null
    /**
     * Filter, which AIInsight to fetch.
     */
    where?: AIInsightWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AIInsights to fetch.
     */
    orderBy?: AIInsightOrderByWithRelationInput | AIInsightOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AIInsights.
     */
    cursor?: AIInsightWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AIInsights from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AIInsights.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AIInsights.
     */
    distinct?: AIInsightScalarFieldEnum | AIInsightScalarFieldEnum[]
  }

  /**
   * AIInsight findFirstOrThrow
   */
  export type AIInsightFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIInsight
     */
    select?: AIInsightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIInsight
     */
    omit?: AIInsightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIInsightInclude<ExtArgs> | null
    /**
     * Filter, which AIInsight to fetch.
     */
    where?: AIInsightWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AIInsights to fetch.
     */
    orderBy?: AIInsightOrderByWithRelationInput | AIInsightOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AIInsights.
     */
    cursor?: AIInsightWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AIInsights from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AIInsights.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AIInsights.
     */
    distinct?: AIInsightScalarFieldEnum | AIInsightScalarFieldEnum[]
  }

  /**
   * AIInsight findMany
   */
  export type AIInsightFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIInsight
     */
    select?: AIInsightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIInsight
     */
    omit?: AIInsightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIInsightInclude<ExtArgs> | null
    /**
     * Filter, which AIInsights to fetch.
     */
    where?: AIInsightWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AIInsights to fetch.
     */
    orderBy?: AIInsightOrderByWithRelationInput | AIInsightOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AIInsights.
     */
    cursor?: AIInsightWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AIInsights from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AIInsights.
     */
    skip?: number
    distinct?: AIInsightScalarFieldEnum | AIInsightScalarFieldEnum[]
  }

  /**
   * AIInsight create
   */
  export type AIInsightCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIInsight
     */
    select?: AIInsightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIInsight
     */
    omit?: AIInsightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIInsightInclude<ExtArgs> | null
    /**
     * The data needed to create a AIInsight.
     */
    data: XOR<AIInsightCreateInput, AIInsightUncheckedCreateInput>
  }

  /**
   * AIInsight createMany
   */
  export type AIInsightCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AIInsights.
     */
    data: AIInsightCreateManyInput | AIInsightCreateManyInput[]
  }

  /**
   * AIInsight update
   */
  export type AIInsightUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIInsight
     */
    select?: AIInsightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIInsight
     */
    omit?: AIInsightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIInsightInclude<ExtArgs> | null
    /**
     * The data needed to update a AIInsight.
     */
    data: XOR<AIInsightUpdateInput, AIInsightUncheckedUpdateInput>
    /**
     * Choose, which AIInsight to update.
     */
    where: AIInsightWhereUniqueInput
  }

  /**
   * AIInsight updateMany
   */
  export type AIInsightUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AIInsights.
     */
    data: XOR<AIInsightUpdateManyMutationInput, AIInsightUncheckedUpdateManyInput>
    /**
     * Filter which AIInsights to update
     */
    where?: AIInsightWhereInput
    /**
     * Limit how many AIInsights to update.
     */
    limit?: number
  }

  /**
   * AIInsight upsert
   */
  export type AIInsightUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIInsight
     */
    select?: AIInsightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIInsight
     */
    omit?: AIInsightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIInsightInclude<ExtArgs> | null
    /**
     * The filter to search for the AIInsight to update in case it exists.
     */
    where: AIInsightWhereUniqueInput
    /**
     * In case the AIInsight found by the `where` argument doesn't exist, create a new AIInsight with this data.
     */
    create: XOR<AIInsightCreateInput, AIInsightUncheckedCreateInput>
    /**
     * In case the AIInsight was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AIInsightUpdateInput, AIInsightUncheckedUpdateInput>
  }

  /**
   * AIInsight delete
   */
  export type AIInsightDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIInsight
     */
    select?: AIInsightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIInsight
     */
    omit?: AIInsightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIInsightInclude<ExtArgs> | null
    /**
     * Filter which AIInsight to delete.
     */
    where: AIInsightWhereUniqueInput
  }

  /**
   * AIInsight deleteMany
   */
  export type AIInsightDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AIInsights to delete
     */
    where?: AIInsightWhereInput
    /**
     * Limit how many AIInsights to delete.
     */
    limit?: number
  }

  /**
   * AIInsight findRaw
   */
  export type AIInsightFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * AIInsight aggregateRaw
   */
  export type AIInsightAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * AIInsight without action
   */
  export type AIInsightDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIInsight
     */
    select?: AIInsightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIInsight
     */
    omit?: AIInsightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIInsightInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name',
    image: 'image',
    password: 'password',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const PortfolioScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    visibility: 'visibility',
    userId: 'userId',
    cash: 'cash',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PortfolioScalarFieldEnum = (typeof PortfolioScalarFieldEnum)[keyof typeof PortfolioScalarFieldEnum]


  export const HoldingScalarFieldEnum: {
    id: 'id',
    ticker: 'ticker',
    quantity: 'quantity',
    portfolioId: 'portfolioId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type HoldingScalarFieldEnum = (typeof HoldingScalarFieldEnum)[keyof typeof HoldingScalarFieldEnum]


  export const SharedPortfolioAccessScalarFieldEnum: {
    id: 'id',
    token: 'token',
    portfolioId: 'portfolioId',
    viewerId: 'viewerId',
    fingerprint: 'fingerprint',
    isActive: 'isActive',
    expiresAt: 'expiresAt',
    viewCount: 'viewCount',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SharedPortfolioAccessScalarFieldEnum = (typeof SharedPortfolioAccessScalarFieldEnum)[keyof typeof SharedPortfolioAccessScalarFieldEnum]


  export const TokenAccessLogScalarFieldEnum: {
    id: 'id',
    accessId: 'accessId',
    ip: 'ip',
    userAgent: 'userAgent',
    viewedAt: 'viewedAt'
  };

  export type TokenAccessLogScalarFieldEnum = (typeof TokenAccessLogScalarFieldEnum)[keyof typeof TokenAccessLogScalarFieldEnum]


  export const AIInsightScalarFieldEnum: {
    id: 'id',
    portfolioId: 'portfolioId',
    summary: 'summary',
    diversification: 'diversification',
    sectorExposure: 'sectorExposure',
    investmentThesis: 'investmentThesis',
    fullAnalysis: 'fullAnalysis',
    generatedAt: 'generatedAt'
  };

  export type AIInsightScalarFieldEnum = (typeof AIInsightScalarFieldEnum)[keyof typeof AIInsightScalarFieldEnum]


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
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'PortfolioVisibility'
   */
  export type EnumPortfolioVisibilityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PortfolioVisibility'>
    


  /**
   * Reference to a field of type 'PortfolioVisibility[]'
   */
  export type ListEnumPortfolioVisibilityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PortfolioVisibility[]'>
    


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    image?: StringNullableFilter<"User"> | string | null
    password?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    portfolios?: PortfolioListRelationFilter
    accessedShares?: SharedPortfolioAccessListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    image?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    portfolios?: PortfolioOrderByRelationAggregateInput
    accessedShares?: SharedPortfolioAccessOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    image?: StringNullableFilter<"User"> | string | null
    password?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    portfolios?: PortfolioListRelationFilter
    accessedShares?: SharedPortfolioAccessListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    image?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    image?: StringNullableWithAggregatesFilter<"User"> | string | null
    password?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type PortfolioWhereInput = {
    AND?: PortfolioWhereInput | PortfolioWhereInput[]
    OR?: PortfolioWhereInput[]
    NOT?: PortfolioWhereInput | PortfolioWhereInput[]
    id?: StringFilter<"Portfolio"> | string
    name?: StringFilter<"Portfolio"> | string
    description?: StringNullableFilter<"Portfolio"> | string | null
    visibility?: EnumPortfolioVisibilityFilter<"Portfolio"> | $Enums.PortfolioVisibility
    userId?: StringFilter<"Portfolio"> | string
    cash?: FloatFilter<"Portfolio"> | number
    createdAt?: DateTimeFilter<"Portfolio"> | Date | string
    updatedAt?: DateTimeFilter<"Portfolio"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    holdings?: HoldingListRelationFilter
    sharedAccess?: SharedPortfolioAccessListRelationFilter
    aiInsights?: AIInsightListRelationFilter
  }

  export type PortfolioOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    visibility?: SortOrder
    userId?: SortOrder
    cash?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    holdings?: HoldingOrderByRelationAggregateInput
    sharedAccess?: SharedPortfolioAccessOrderByRelationAggregateInput
    aiInsights?: AIInsightOrderByRelationAggregateInput
  }

  export type PortfolioWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PortfolioWhereInput | PortfolioWhereInput[]
    OR?: PortfolioWhereInput[]
    NOT?: PortfolioWhereInput | PortfolioWhereInput[]
    name?: StringFilter<"Portfolio"> | string
    description?: StringNullableFilter<"Portfolio"> | string | null
    visibility?: EnumPortfolioVisibilityFilter<"Portfolio"> | $Enums.PortfolioVisibility
    userId?: StringFilter<"Portfolio"> | string
    cash?: FloatFilter<"Portfolio"> | number
    createdAt?: DateTimeFilter<"Portfolio"> | Date | string
    updatedAt?: DateTimeFilter<"Portfolio"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    holdings?: HoldingListRelationFilter
    sharedAccess?: SharedPortfolioAccessListRelationFilter
    aiInsights?: AIInsightListRelationFilter
  }, "id">

  export type PortfolioOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    visibility?: SortOrder
    userId?: SortOrder
    cash?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PortfolioCountOrderByAggregateInput
    _avg?: PortfolioAvgOrderByAggregateInput
    _max?: PortfolioMaxOrderByAggregateInput
    _min?: PortfolioMinOrderByAggregateInput
    _sum?: PortfolioSumOrderByAggregateInput
  }

  export type PortfolioScalarWhereWithAggregatesInput = {
    AND?: PortfolioScalarWhereWithAggregatesInput | PortfolioScalarWhereWithAggregatesInput[]
    OR?: PortfolioScalarWhereWithAggregatesInput[]
    NOT?: PortfolioScalarWhereWithAggregatesInput | PortfolioScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Portfolio"> | string
    name?: StringWithAggregatesFilter<"Portfolio"> | string
    description?: StringNullableWithAggregatesFilter<"Portfolio"> | string | null
    visibility?: EnumPortfolioVisibilityWithAggregatesFilter<"Portfolio"> | $Enums.PortfolioVisibility
    userId?: StringWithAggregatesFilter<"Portfolio"> | string
    cash?: FloatWithAggregatesFilter<"Portfolio"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Portfolio"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Portfolio"> | Date | string
  }

  export type HoldingWhereInput = {
    AND?: HoldingWhereInput | HoldingWhereInput[]
    OR?: HoldingWhereInput[]
    NOT?: HoldingWhereInput | HoldingWhereInput[]
    id?: StringFilter<"Holding"> | string
    ticker?: StringFilter<"Holding"> | string
    quantity?: FloatFilter<"Holding"> | number
    portfolioId?: StringFilter<"Holding"> | string
    createdAt?: DateTimeFilter<"Holding"> | Date | string
    updatedAt?: DateTimeFilter<"Holding"> | Date | string
    portfolio?: XOR<PortfolioScalarRelationFilter, PortfolioWhereInput>
  }

  export type HoldingOrderByWithRelationInput = {
    id?: SortOrder
    ticker?: SortOrder
    quantity?: SortOrder
    portfolioId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    portfolio?: PortfolioOrderByWithRelationInput
  }

  export type HoldingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: HoldingWhereInput | HoldingWhereInput[]
    OR?: HoldingWhereInput[]
    NOT?: HoldingWhereInput | HoldingWhereInput[]
    ticker?: StringFilter<"Holding"> | string
    quantity?: FloatFilter<"Holding"> | number
    portfolioId?: StringFilter<"Holding"> | string
    createdAt?: DateTimeFilter<"Holding"> | Date | string
    updatedAt?: DateTimeFilter<"Holding"> | Date | string
    portfolio?: XOR<PortfolioScalarRelationFilter, PortfolioWhereInput>
  }, "id">

  export type HoldingOrderByWithAggregationInput = {
    id?: SortOrder
    ticker?: SortOrder
    quantity?: SortOrder
    portfolioId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: HoldingCountOrderByAggregateInput
    _avg?: HoldingAvgOrderByAggregateInput
    _max?: HoldingMaxOrderByAggregateInput
    _min?: HoldingMinOrderByAggregateInput
    _sum?: HoldingSumOrderByAggregateInput
  }

  export type HoldingScalarWhereWithAggregatesInput = {
    AND?: HoldingScalarWhereWithAggregatesInput | HoldingScalarWhereWithAggregatesInput[]
    OR?: HoldingScalarWhereWithAggregatesInput[]
    NOT?: HoldingScalarWhereWithAggregatesInput | HoldingScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Holding"> | string
    ticker?: StringWithAggregatesFilter<"Holding"> | string
    quantity?: FloatWithAggregatesFilter<"Holding"> | number
    portfolioId?: StringWithAggregatesFilter<"Holding"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Holding"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Holding"> | Date | string
  }

  export type SharedPortfolioAccessWhereInput = {
    AND?: SharedPortfolioAccessWhereInput | SharedPortfolioAccessWhereInput[]
    OR?: SharedPortfolioAccessWhereInput[]
    NOT?: SharedPortfolioAccessWhereInput | SharedPortfolioAccessWhereInput[]
    id?: StringFilter<"SharedPortfolioAccess"> | string
    token?: StringFilter<"SharedPortfolioAccess"> | string
    portfolioId?: StringFilter<"SharedPortfolioAccess"> | string
    viewerId?: StringNullableFilter<"SharedPortfolioAccess"> | string | null
    fingerprint?: StringNullableFilter<"SharedPortfolioAccess"> | string | null
    isActive?: BoolFilter<"SharedPortfolioAccess"> | boolean
    expiresAt?: DateTimeNullableFilter<"SharedPortfolioAccess"> | Date | string | null
    viewCount?: IntFilter<"SharedPortfolioAccess"> | number
    createdAt?: DateTimeFilter<"SharedPortfolioAccess"> | Date | string
    updatedAt?: DateTimeFilter<"SharedPortfolioAccess"> | Date | string
    portfolio?: XOR<PortfolioScalarRelationFilter, PortfolioWhereInput>
    viewer?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    accessLogs?: TokenAccessLogListRelationFilter
  }

  export type SharedPortfolioAccessOrderByWithRelationInput = {
    id?: SortOrder
    token?: SortOrder
    portfolioId?: SortOrder
    viewerId?: SortOrder
    fingerprint?: SortOrder
    isActive?: SortOrder
    expiresAt?: SortOrder
    viewCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    portfolio?: PortfolioOrderByWithRelationInput
    viewer?: UserOrderByWithRelationInput
    accessLogs?: TokenAccessLogOrderByRelationAggregateInput
  }

  export type SharedPortfolioAccessWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    token?: string
    AND?: SharedPortfolioAccessWhereInput | SharedPortfolioAccessWhereInput[]
    OR?: SharedPortfolioAccessWhereInput[]
    NOT?: SharedPortfolioAccessWhereInput | SharedPortfolioAccessWhereInput[]
    portfolioId?: StringFilter<"SharedPortfolioAccess"> | string
    viewerId?: StringNullableFilter<"SharedPortfolioAccess"> | string | null
    fingerprint?: StringNullableFilter<"SharedPortfolioAccess"> | string | null
    isActive?: BoolFilter<"SharedPortfolioAccess"> | boolean
    expiresAt?: DateTimeNullableFilter<"SharedPortfolioAccess"> | Date | string | null
    viewCount?: IntFilter<"SharedPortfolioAccess"> | number
    createdAt?: DateTimeFilter<"SharedPortfolioAccess"> | Date | string
    updatedAt?: DateTimeFilter<"SharedPortfolioAccess"> | Date | string
    portfolio?: XOR<PortfolioScalarRelationFilter, PortfolioWhereInput>
    viewer?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    accessLogs?: TokenAccessLogListRelationFilter
  }, "id" | "token">

  export type SharedPortfolioAccessOrderByWithAggregationInput = {
    id?: SortOrder
    token?: SortOrder
    portfolioId?: SortOrder
    viewerId?: SortOrder
    fingerprint?: SortOrder
    isActive?: SortOrder
    expiresAt?: SortOrder
    viewCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SharedPortfolioAccessCountOrderByAggregateInput
    _avg?: SharedPortfolioAccessAvgOrderByAggregateInput
    _max?: SharedPortfolioAccessMaxOrderByAggregateInput
    _min?: SharedPortfolioAccessMinOrderByAggregateInput
    _sum?: SharedPortfolioAccessSumOrderByAggregateInput
  }

  export type SharedPortfolioAccessScalarWhereWithAggregatesInput = {
    AND?: SharedPortfolioAccessScalarWhereWithAggregatesInput | SharedPortfolioAccessScalarWhereWithAggregatesInput[]
    OR?: SharedPortfolioAccessScalarWhereWithAggregatesInput[]
    NOT?: SharedPortfolioAccessScalarWhereWithAggregatesInput | SharedPortfolioAccessScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SharedPortfolioAccess"> | string
    token?: StringWithAggregatesFilter<"SharedPortfolioAccess"> | string
    portfolioId?: StringWithAggregatesFilter<"SharedPortfolioAccess"> | string
    viewerId?: StringNullableWithAggregatesFilter<"SharedPortfolioAccess"> | string | null
    fingerprint?: StringNullableWithAggregatesFilter<"SharedPortfolioAccess"> | string | null
    isActive?: BoolWithAggregatesFilter<"SharedPortfolioAccess"> | boolean
    expiresAt?: DateTimeNullableWithAggregatesFilter<"SharedPortfolioAccess"> | Date | string | null
    viewCount?: IntWithAggregatesFilter<"SharedPortfolioAccess"> | number
    createdAt?: DateTimeWithAggregatesFilter<"SharedPortfolioAccess"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"SharedPortfolioAccess"> | Date | string
  }

  export type TokenAccessLogWhereInput = {
    AND?: TokenAccessLogWhereInput | TokenAccessLogWhereInput[]
    OR?: TokenAccessLogWhereInput[]
    NOT?: TokenAccessLogWhereInput | TokenAccessLogWhereInput[]
    id?: StringFilter<"TokenAccessLog"> | string
    accessId?: StringFilter<"TokenAccessLog"> | string
    ip?: StringNullableFilter<"TokenAccessLog"> | string | null
    userAgent?: StringNullableFilter<"TokenAccessLog"> | string | null
    viewedAt?: DateTimeFilter<"TokenAccessLog"> | Date | string
    access?: XOR<SharedPortfolioAccessScalarRelationFilter, SharedPortfolioAccessWhereInput>
  }

  export type TokenAccessLogOrderByWithRelationInput = {
    id?: SortOrder
    accessId?: SortOrder
    ip?: SortOrder
    userAgent?: SortOrder
    viewedAt?: SortOrder
    access?: SharedPortfolioAccessOrderByWithRelationInput
  }

  export type TokenAccessLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TokenAccessLogWhereInput | TokenAccessLogWhereInput[]
    OR?: TokenAccessLogWhereInput[]
    NOT?: TokenAccessLogWhereInput | TokenAccessLogWhereInput[]
    accessId?: StringFilter<"TokenAccessLog"> | string
    ip?: StringNullableFilter<"TokenAccessLog"> | string | null
    userAgent?: StringNullableFilter<"TokenAccessLog"> | string | null
    viewedAt?: DateTimeFilter<"TokenAccessLog"> | Date | string
    access?: XOR<SharedPortfolioAccessScalarRelationFilter, SharedPortfolioAccessWhereInput>
  }, "id">

  export type TokenAccessLogOrderByWithAggregationInput = {
    id?: SortOrder
    accessId?: SortOrder
    ip?: SortOrder
    userAgent?: SortOrder
    viewedAt?: SortOrder
    _count?: TokenAccessLogCountOrderByAggregateInput
    _max?: TokenAccessLogMaxOrderByAggregateInput
    _min?: TokenAccessLogMinOrderByAggregateInput
  }

  export type TokenAccessLogScalarWhereWithAggregatesInput = {
    AND?: TokenAccessLogScalarWhereWithAggregatesInput | TokenAccessLogScalarWhereWithAggregatesInput[]
    OR?: TokenAccessLogScalarWhereWithAggregatesInput[]
    NOT?: TokenAccessLogScalarWhereWithAggregatesInput | TokenAccessLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TokenAccessLog"> | string
    accessId?: StringWithAggregatesFilter<"TokenAccessLog"> | string
    ip?: StringNullableWithAggregatesFilter<"TokenAccessLog"> | string | null
    userAgent?: StringNullableWithAggregatesFilter<"TokenAccessLog"> | string | null
    viewedAt?: DateTimeWithAggregatesFilter<"TokenAccessLog"> | Date | string
  }

  export type AIInsightWhereInput = {
    AND?: AIInsightWhereInput | AIInsightWhereInput[]
    OR?: AIInsightWhereInput[]
    NOT?: AIInsightWhereInput | AIInsightWhereInput[]
    id?: StringFilter<"AIInsight"> | string
    portfolioId?: StringFilter<"AIInsight"> | string
    summary?: StringFilter<"AIInsight"> | string
    diversification?: StringFilter<"AIInsight"> | string
    sectorExposure?: StringFilter<"AIInsight"> | string
    investmentThesis?: StringFilter<"AIInsight"> | string
    fullAnalysis?: StringNullableFilter<"AIInsight"> | string | null
    generatedAt?: DateTimeFilter<"AIInsight"> | Date | string
    portfolio?: XOR<PortfolioScalarRelationFilter, PortfolioWhereInput>
  }

  export type AIInsightOrderByWithRelationInput = {
    id?: SortOrder
    portfolioId?: SortOrder
    summary?: SortOrder
    diversification?: SortOrder
    sectorExposure?: SortOrder
    investmentThesis?: SortOrder
    fullAnalysis?: SortOrder
    generatedAt?: SortOrder
    portfolio?: PortfolioOrderByWithRelationInput
  }

  export type AIInsightWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AIInsightWhereInput | AIInsightWhereInput[]
    OR?: AIInsightWhereInput[]
    NOT?: AIInsightWhereInput | AIInsightWhereInput[]
    portfolioId?: StringFilter<"AIInsight"> | string
    summary?: StringFilter<"AIInsight"> | string
    diversification?: StringFilter<"AIInsight"> | string
    sectorExposure?: StringFilter<"AIInsight"> | string
    investmentThesis?: StringFilter<"AIInsight"> | string
    fullAnalysis?: StringNullableFilter<"AIInsight"> | string | null
    generatedAt?: DateTimeFilter<"AIInsight"> | Date | string
    portfolio?: XOR<PortfolioScalarRelationFilter, PortfolioWhereInput>
  }, "id">

  export type AIInsightOrderByWithAggregationInput = {
    id?: SortOrder
    portfolioId?: SortOrder
    summary?: SortOrder
    diversification?: SortOrder
    sectorExposure?: SortOrder
    investmentThesis?: SortOrder
    fullAnalysis?: SortOrder
    generatedAt?: SortOrder
    _count?: AIInsightCountOrderByAggregateInput
    _max?: AIInsightMaxOrderByAggregateInput
    _min?: AIInsightMinOrderByAggregateInput
  }

  export type AIInsightScalarWhereWithAggregatesInput = {
    AND?: AIInsightScalarWhereWithAggregatesInput | AIInsightScalarWhereWithAggregatesInput[]
    OR?: AIInsightScalarWhereWithAggregatesInput[]
    NOT?: AIInsightScalarWhereWithAggregatesInput | AIInsightScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AIInsight"> | string
    portfolioId?: StringWithAggregatesFilter<"AIInsight"> | string
    summary?: StringWithAggregatesFilter<"AIInsight"> | string
    diversification?: StringWithAggregatesFilter<"AIInsight"> | string
    sectorExposure?: StringWithAggregatesFilter<"AIInsight"> | string
    investmentThesis?: StringWithAggregatesFilter<"AIInsight"> | string
    fullAnalysis?: StringNullableWithAggregatesFilter<"AIInsight"> | string | null
    generatedAt?: DateTimeWithAggregatesFilter<"AIInsight"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    name?: string | null
    image?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    portfolios?: PortfolioCreateNestedManyWithoutUserInput
    accessedShares?: SharedPortfolioAccessCreateNestedManyWithoutViewerInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    name?: string | null
    image?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    portfolios?: PortfolioUncheckedCreateNestedManyWithoutUserInput
    accessedShares?: SharedPortfolioAccessUncheckedCreateNestedManyWithoutViewerInput
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    portfolios?: PortfolioUpdateManyWithoutUserNestedInput
    accessedShares?: SharedPortfolioAccessUpdateManyWithoutViewerNestedInput
  }

  export type UserUncheckedUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    portfolios?: PortfolioUncheckedUpdateManyWithoutUserNestedInput
    accessedShares?: SharedPortfolioAccessUncheckedUpdateManyWithoutViewerNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    name?: string | null
    image?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PortfolioCreateInput = {
    id?: string
    name: string
    description?: string | null
    visibility?: $Enums.PortfolioVisibility
    cash?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutPortfoliosInput
    holdings?: HoldingCreateNestedManyWithoutPortfolioInput
    sharedAccess?: SharedPortfolioAccessCreateNestedManyWithoutPortfolioInput
    aiInsights?: AIInsightCreateNestedManyWithoutPortfolioInput
  }

  export type PortfolioUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    visibility?: $Enums.PortfolioVisibility
    userId: string
    cash?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    holdings?: HoldingUncheckedCreateNestedManyWithoutPortfolioInput
    sharedAccess?: SharedPortfolioAccessUncheckedCreateNestedManyWithoutPortfolioInput
    aiInsights?: AIInsightUncheckedCreateNestedManyWithoutPortfolioInput
  }

  export type PortfolioUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    visibility?: EnumPortfolioVisibilityFieldUpdateOperationsInput | $Enums.PortfolioVisibility
    cash?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPortfoliosNestedInput
    holdings?: HoldingUpdateManyWithoutPortfolioNestedInput
    sharedAccess?: SharedPortfolioAccessUpdateManyWithoutPortfolioNestedInput
    aiInsights?: AIInsightUpdateManyWithoutPortfolioNestedInput
  }

  export type PortfolioUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    visibility?: EnumPortfolioVisibilityFieldUpdateOperationsInput | $Enums.PortfolioVisibility
    userId?: StringFieldUpdateOperationsInput | string
    cash?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    holdings?: HoldingUncheckedUpdateManyWithoutPortfolioNestedInput
    sharedAccess?: SharedPortfolioAccessUncheckedUpdateManyWithoutPortfolioNestedInput
    aiInsights?: AIInsightUncheckedUpdateManyWithoutPortfolioNestedInput
  }

  export type PortfolioCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    visibility?: $Enums.PortfolioVisibility
    userId: string
    cash?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PortfolioUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    visibility?: EnumPortfolioVisibilityFieldUpdateOperationsInput | $Enums.PortfolioVisibility
    cash?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PortfolioUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    visibility?: EnumPortfolioVisibilityFieldUpdateOperationsInput | $Enums.PortfolioVisibility
    userId?: StringFieldUpdateOperationsInput | string
    cash?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HoldingCreateInput = {
    id?: string
    ticker: string
    quantity: number
    createdAt?: Date | string
    updatedAt?: Date | string
    portfolio: PortfolioCreateNestedOneWithoutHoldingsInput
  }

  export type HoldingUncheckedCreateInput = {
    id?: string
    ticker: string
    quantity: number
    portfolioId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HoldingUpdateInput = {
    ticker?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    portfolio?: PortfolioUpdateOneRequiredWithoutHoldingsNestedInput
  }

  export type HoldingUncheckedUpdateInput = {
    ticker?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    portfolioId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HoldingCreateManyInput = {
    id?: string
    ticker: string
    quantity: number
    portfolioId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HoldingUpdateManyMutationInput = {
    ticker?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HoldingUncheckedUpdateManyInput = {
    ticker?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    portfolioId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SharedPortfolioAccessCreateInput = {
    id?: string
    token: string
    fingerprint?: string | null
    isActive?: boolean
    expiresAt?: Date | string | null
    viewCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    portfolio: PortfolioCreateNestedOneWithoutSharedAccessInput
    viewer?: UserCreateNestedOneWithoutAccessedSharesInput
    accessLogs?: TokenAccessLogCreateNestedManyWithoutAccessInput
  }

  export type SharedPortfolioAccessUncheckedCreateInput = {
    id?: string
    token: string
    portfolioId: string
    viewerId?: string | null
    fingerprint?: string | null
    isActive?: boolean
    expiresAt?: Date | string | null
    viewCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    accessLogs?: TokenAccessLogUncheckedCreateNestedManyWithoutAccessInput
  }

  export type SharedPortfolioAccessUpdateInput = {
    token?: StringFieldUpdateOperationsInput | string
    fingerprint?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    viewCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    portfolio?: PortfolioUpdateOneRequiredWithoutSharedAccessNestedInput
    viewer?: UserUpdateOneWithoutAccessedSharesNestedInput
    accessLogs?: TokenAccessLogUpdateManyWithoutAccessNestedInput
  }

  export type SharedPortfolioAccessUncheckedUpdateInput = {
    token?: StringFieldUpdateOperationsInput | string
    portfolioId?: StringFieldUpdateOperationsInput | string
    viewerId?: NullableStringFieldUpdateOperationsInput | string | null
    fingerprint?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    viewCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accessLogs?: TokenAccessLogUncheckedUpdateManyWithoutAccessNestedInput
  }

  export type SharedPortfolioAccessCreateManyInput = {
    id?: string
    token: string
    portfolioId: string
    viewerId?: string | null
    fingerprint?: string | null
    isActive?: boolean
    expiresAt?: Date | string | null
    viewCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SharedPortfolioAccessUpdateManyMutationInput = {
    token?: StringFieldUpdateOperationsInput | string
    fingerprint?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    viewCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SharedPortfolioAccessUncheckedUpdateManyInput = {
    token?: StringFieldUpdateOperationsInput | string
    portfolioId?: StringFieldUpdateOperationsInput | string
    viewerId?: NullableStringFieldUpdateOperationsInput | string | null
    fingerprint?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    viewCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TokenAccessLogCreateInput = {
    id?: string
    ip?: string | null
    userAgent?: string | null
    viewedAt?: Date | string
    access: SharedPortfolioAccessCreateNestedOneWithoutAccessLogsInput
  }

  export type TokenAccessLogUncheckedCreateInput = {
    id?: string
    accessId: string
    ip?: string | null
    userAgent?: string | null
    viewedAt?: Date | string
  }

  export type TokenAccessLogUpdateInput = {
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    viewedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    access?: SharedPortfolioAccessUpdateOneRequiredWithoutAccessLogsNestedInput
  }

  export type TokenAccessLogUncheckedUpdateInput = {
    accessId?: StringFieldUpdateOperationsInput | string
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    viewedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TokenAccessLogCreateManyInput = {
    id?: string
    accessId: string
    ip?: string | null
    userAgent?: string | null
    viewedAt?: Date | string
  }

  export type TokenAccessLogUpdateManyMutationInput = {
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    viewedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TokenAccessLogUncheckedUpdateManyInput = {
    accessId?: StringFieldUpdateOperationsInput | string
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    viewedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AIInsightCreateInput = {
    id?: string
    summary: string
    diversification: string
    sectorExposure: string
    investmentThesis: string
    fullAnalysis?: string | null
    generatedAt?: Date | string
    portfolio: PortfolioCreateNestedOneWithoutAiInsightsInput
  }

  export type AIInsightUncheckedCreateInput = {
    id?: string
    portfolioId: string
    summary: string
    diversification: string
    sectorExposure: string
    investmentThesis: string
    fullAnalysis?: string | null
    generatedAt?: Date | string
  }

  export type AIInsightUpdateInput = {
    summary?: StringFieldUpdateOperationsInput | string
    diversification?: StringFieldUpdateOperationsInput | string
    sectorExposure?: StringFieldUpdateOperationsInput | string
    investmentThesis?: StringFieldUpdateOperationsInput | string
    fullAnalysis?: NullableStringFieldUpdateOperationsInput | string | null
    generatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    portfolio?: PortfolioUpdateOneRequiredWithoutAiInsightsNestedInput
  }

  export type AIInsightUncheckedUpdateInput = {
    portfolioId?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    diversification?: StringFieldUpdateOperationsInput | string
    sectorExposure?: StringFieldUpdateOperationsInput | string
    investmentThesis?: StringFieldUpdateOperationsInput | string
    fullAnalysis?: NullableStringFieldUpdateOperationsInput | string | null
    generatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AIInsightCreateManyInput = {
    id?: string
    portfolioId: string
    summary: string
    diversification: string
    sectorExposure: string
    investmentThesis: string
    fullAnalysis?: string | null
    generatedAt?: Date | string
  }

  export type AIInsightUpdateManyMutationInput = {
    summary?: StringFieldUpdateOperationsInput | string
    diversification?: StringFieldUpdateOperationsInput | string
    sectorExposure?: StringFieldUpdateOperationsInput | string
    investmentThesis?: StringFieldUpdateOperationsInput | string
    fullAnalysis?: NullableStringFieldUpdateOperationsInput | string | null
    generatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AIInsightUncheckedUpdateManyInput = {
    portfolioId?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    diversification?: StringFieldUpdateOperationsInput | string
    sectorExposure?: StringFieldUpdateOperationsInput | string
    investmentThesis?: StringFieldUpdateOperationsInput | string
    fullAnalysis?: NullableStringFieldUpdateOperationsInput | string | null
    generatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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
    isSet?: boolean
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

  export type PortfolioListRelationFilter = {
    every?: PortfolioWhereInput
    some?: PortfolioWhereInput
    none?: PortfolioWhereInput
  }

  export type SharedPortfolioAccessListRelationFilter = {
    every?: SharedPortfolioAccessWhereInput
    some?: SharedPortfolioAccessWhereInput
    none?: SharedPortfolioAccessWhereInput
  }

  export type PortfolioOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SharedPortfolioAccessOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    image?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    image?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    image?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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
    isSet?: boolean
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

  export type EnumPortfolioVisibilityFilter<$PrismaModel = never> = {
    equals?: $Enums.PortfolioVisibility | EnumPortfolioVisibilityFieldRefInput<$PrismaModel>
    in?: $Enums.PortfolioVisibility[] | ListEnumPortfolioVisibilityFieldRefInput<$PrismaModel>
    notIn?: $Enums.PortfolioVisibility[] | ListEnumPortfolioVisibilityFieldRefInput<$PrismaModel>
    not?: NestedEnumPortfolioVisibilityFilter<$PrismaModel> | $Enums.PortfolioVisibility
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

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type HoldingListRelationFilter = {
    every?: HoldingWhereInput
    some?: HoldingWhereInput
    none?: HoldingWhereInput
  }

  export type AIInsightListRelationFilter = {
    every?: AIInsightWhereInput
    some?: AIInsightWhereInput
    none?: AIInsightWhereInput
  }

  export type HoldingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AIInsightOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PortfolioCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    visibility?: SortOrder
    userId?: SortOrder
    cash?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PortfolioAvgOrderByAggregateInput = {
    cash?: SortOrder
  }

  export type PortfolioMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    visibility?: SortOrder
    userId?: SortOrder
    cash?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PortfolioMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    visibility?: SortOrder
    userId?: SortOrder
    cash?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PortfolioSumOrderByAggregateInput = {
    cash?: SortOrder
  }

  export type EnumPortfolioVisibilityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PortfolioVisibility | EnumPortfolioVisibilityFieldRefInput<$PrismaModel>
    in?: $Enums.PortfolioVisibility[] | ListEnumPortfolioVisibilityFieldRefInput<$PrismaModel>
    notIn?: $Enums.PortfolioVisibility[] | ListEnumPortfolioVisibilityFieldRefInput<$PrismaModel>
    not?: NestedEnumPortfolioVisibilityWithAggregatesFilter<$PrismaModel> | $Enums.PortfolioVisibility
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPortfolioVisibilityFilter<$PrismaModel>
    _max?: NestedEnumPortfolioVisibilityFilter<$PrismaModel>
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

  export type PortfolioScalarRelationFilter = {
    is?: PortfolioWhereInput
    isNot?: PortfolioWhereInput
  }

  export type HoldingCountOrderByAggregateInput = {
    id?: SortOrder
    ticker?: SortOrder
    quantity?: SortOrder
    portfolioId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HoldingAvgOrderByAggregateInput = {
    quantity?: SortOrder
  }

  export type HoldingMaxOrderByAggregateInput = {
    id?: SortOrder
    ticker?: SortOrder
    quantity?: SortOrder
    portfolioId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HoldingMinOrderByAggregateInput = {
    id?: SortOrder
    ticker?: SortOrder
    quantity?: SortOrder
    portfolioId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HoldingSumOrderByAggregateInput = {
    quantity?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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
    isSet?: boolean
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

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type TokenAccessLogListRelationFilter = {
    every?: TokenAccessLogWhereInput
    some?: TokenAccessLogWhereInput
    none?: TokenAccessLogWhereInput
  }

  export type TokenAccessLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SharedPortfolioAccessCountOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    portfolioId?: SortOrder
    viewerId?: SortOrder
    fingerprint?: SortOrder
    isActive?: SortOrder
    expiresAt?: SortOrder
    viewCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SharedPortfolioAccessAvgOrderByAggregateInput = {
    viewCount?: SortOrder
  }

  export type SharedPortfolioAccessMaxOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    portfolioId?: SortOrder
    viewerId?: SortOrder
    fingerprint?: SortOrder
    isActive?: SortOrder
    expiresAt?: SortOrder
    viewCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SharedPortfolioAccessMinOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    portfolioId?: SortOrder
    viewerId?: SortOrder
    fingerprint?: SortOrder
    isActive?: SortOrder
    expiresAt?: SortOrder
    viewCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SharedPortfolioAccessSumOrderByAggregateInput = {
    viewCount?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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
    isSet?: boolean
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

  export type SharedPortfolioAccessScalarRelationFilter = {
    is?: SharedPortfolioAccessWhereInput
    isNot?: SharedPortfolioAccessWhereInput
  }

  export type TokenAccessLogCountOrderByAggregateInput = {
    id?: SortOrder
    accessId?: SortOrder
    ip?: SortOrder
    userAgent?: SortOrder
    viewedAt?: SortOrder
  }

  export type TokenAccessLogMaxOrderByAggregateInput = {
    id?: SortOrder
    accessId?: SortOrder
    ip?: SortOrder
    userAgent?: SortOrder
    viewedAt?: SortOrder
  }

  export type TokenAccessLogMinOrderByAggregateInput = {
    id?: SortOrder
    accessId?: SortOrder
    ip?: SortOrder
    userAgent?: SortOrder
    viewedAt?: SortOrder
  }

  export type AIInsightCountOrderByAggregateInput = {
    id?: SortOrder
    portfolioId?: SortOrder
    summary?: SortOrder
    diversification?: SortOrder
    sectorExposure?: SortOrder
    investmentThesis?: SortOrder
    fullAnalysis?: SortOrder
    generatedAt?: SortOrder
  }

  export type AIInsightMaxOrderByAggregateInput = {
    id?: SortOrder
    portfolioId?: SortOrder
    summary?: SortOrder
    diversification?: SortOrder
    sectorExposure?: SortOrder
    investmentThesis?: SortOrder
    fullAnalysis?: SortOrder
    generatedAt?: SortOrder
  }

  export type AIInsightMinOrderByAggregateInput = {
    id?: SortOrder
    portfolioId?: SortOrder
    summary?: SortOrder
    diversification?: SortOrder
    sectorExposure?: SortOrder
    investmentThesis?: SortOrder
    fullAnalysis?: SortOrder
    generatedAt?: SortOrder
  }

  export type PortfolioCreateNestedManyWithoutUserInput = {
    create?: XOR<PortfolioCreateWithoutUserInput, PortfolioUncheckedCreateWithoutUserInput> | PortfolioCreateWithoutUserInput[] | PortfolioUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PortfolioCreateOrConnectWithoutUserInput | PortfolioCreateOrConnectWithoutUserInput[]
    createMany?: PortfolioCreateManyUserInputEnvelope
    connect?: PortfolioWhereUniqueInput | PortfolioWhereUniqueInput[]
  }

  export type SharedPortfolioAccessCreateNestedManyWithoutViewerInput = {
    create?: XOR<SharedPortfolioAccessCreateWithoutViewerInput, SharedPortfolioAccessUncheckedCreateWithoutViewerInput> | SharedPortfolioAccessCreateWithoutViewerInput[] | SharedPortfolioAccessUncheckedCreateWithoutViewerInput[]
    connectOrCreate?: SharedPortfolioAccessCreateOrConnectWithoutViewerInput | SharedPortfolioAccessCreateOrConnectWithoutViewerInput[]
    createMany?: SharedPortfolioAccessCreateManyViewerInputEnvelope
    connect?: SharedPortfolioAccessWhereUniqueInput | SharedPortfolioAccessWhereUniqueInput[]
  }

  export type PortfolioUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PortfolioCreateWithoutUserInput, PortfolioUncheckedCreateWithoutUserInput> | PortfolioCreateWithoutUserInput[] | PortfolioUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PortfolioCreateOrConnectWithoutUserInput | PortfolioCreateOrConnectWithoutUserInput[]
    createMany?: PortfolioCreateManyUserInputEnvelope
    connect?: PortfolioWhereUniqueInput | PortfolioWhereUniqueInput[]
  }

  export type SharedPortfolioAccessUncheckedCreateNestedManyWithoutViewerInput = {
    create?: XOR<SharedPortfolioAccessCreateWithoutViewerInput, SharedPortfolioAccessUncheckedCreateWithoutViewerInput> | SharedPortfolioAccessCreateWithoutViewerInput[] | SharedPortfolioAccessUncheckedCreateWithoutViewerInput[]
    connectOrCreate?: SharedPortfolioAccessCreateOrConnectWithoutViewerInput | SharedPortfolioAccessCreateOrConnectWithoutViewerInput[]
    createMany?: SharedPortfolioAccessCreateManyViewerInputEnvelope
    connect?: SharedPortfolioAccessWhereUniqueInput | SharedPortfolioAccessWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
    unset?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type PortfolioUpdateManyWithoutUserNestedInput = {
    create?: XOR<PortfolioCreateWithoutUserInput, PortfolioUncheckedCreateWithoutUserInput> | PortfolioCreateWithoutUserInput[] | PortfolioUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PortfolioCreateOrConnectWithoutUserInput | PortfolioCreateOrConnectWithoutUserInput[]
    upsert?: PortfolioUpsertWithWhereUniqueWithoutUserInput | PortfolioUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PortfolioCreateManyUserInputEnvelope
    set?: PortfolioWhereUniqueInput | PortfolioWhereUniqueInput[]
    disconnect?: PortfolioWhereUniqueInput | PortfolioWhereUniqueInput[]
    delete?: PortfolioWhereUniqueInput | PortfolioWhereUniqueInput[]
    connect?: PortfolioWhereUniqueInput | PortfolioWhereUniqueInput[]
    update?: PortfolioUpdateWithWhereUniqueWithoutUserInput | PortfolioUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PortfolioUpdateManyWithWhereWithoutUserInput | PortfolioUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PortfolioScalarWhereInput | PortfolioScalarWhereInput[]
  }

  export type SharedPortfolioAccessUpdateManyWithoutViewerNestedInput = {
    create?: XOR<SharedPortfolioAccessCreateWithoutViewerInput, SharedPortfolioAccessUncheckedCreateWithoutViewerInput> | SharedPortfolioAccessCreateWithoutViewerInput[] | SharedPortfolioAccessUncheckedCreateWithoutViewerInput[]
    connectOrCreate?: SharedPortfolioAccessCreateOrConnectWithoutViewerInput | SharedPortfolioAccessCreateOrConnectWithoutViewerInput[]
    upsert?: SharedPortfolioAccessUpsertWithWhereUniqueWithoutViewerInput | SharedPortfolioAccessUpsertWithWhereUniqueWithoutViewerInput[]
    createMany?: SharedPortfolioAccessCreateManyViewerInputEnvelope
    set?: SharedPortfolioAccessWhereUniqueInput | SharedPortfolioAccessWhereUniqueInput[]
    disconnect?: SharedPortfolioAccessWhereUniqueInput | SharedPortfolioAccessWhereUniqueInput[]
    delete?: SharedPortfolioAccessWhereUniqueInput | SharedPortfolioAccessWhereUniqueInput[]
    connect?: SharedPortfolioAccessWhereUniqueInput | SharedPortfolioAccessWhereUniqueInput[]
    update?: SharedPortfolioAccessUpdateWithWhereUniqueWithoutViewerInput | SharedPortfolioAccessUpdateWithWhereUniqueWithoutViewerInput[]
    updateMany?: SharedPortfolioAccessUpdateManyWithWhereWithoutViewerInput | SharedPortfolioAccessUpdateManyWithWhereWithoutViewerInput[]
    deleteMany?: SharedPortfolioAccessScalarWhereInput | SharedPortfolioAccessScalarWhereInput[]
  }

  export type PortfolioUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PortfolioCreateWithoutUserInput, PortfolioUncheckedCreateWithoutUserInput> | PortfolioCreateWithoutUserInput[] | PortfolioUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PortfolioCreateOrConnectWithoutUserInput | PortfolioCreateOrConnectWithoutUserInput[]
    upsert?: PortfolioUpsertWithWhereUniqueWithoutUserInput | PortfolioUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PortfolioCreateManyUserInputEnvelope
    set?: PortfolioWhereUniqueInput | PortfolioWhereUniqueInput[]
    disconnect?: PortfolioWhereUniqueInput | PortfolioWhereUniqueInput[]
    delete?: PortfolioWhereUniqueInput | PortfolioWhereUniqueInput[]
    connect?: PortfolioWhereUniqueInput | PortfolioWhereUniqueInput[]
    update?: PortfolioUpdateWithWhereUniqueWithoutUserInput | PortfolioUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PortfolioUpdateManyWithWhereWithoutUserInput | PortfolioUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PortfolioScalarWhereInput | PortfolioScalarWhereInput[]
  }

  export type SharedPortfolioAccessUncheckedUpdateManyWithoutViewerNestedInput = {
    create?: XOR<SharedPortfolioAccessCreateWithoutViewerInput, SharedPortfolioAccessUncheckedCreateWithoutViewerInput> | SharedPortfolioAccessCreateWithoutViewerInput[] | SharedPortfolioAccessUncheckedCreateWithoutViewerInput[]
    connectOrCreate?: SharedPortfolioAccessCreateOrConnectWithoutViewerInput | SharedPortfolioAccessCreateOrConnectWithoutViewerInput[]
    upsert?: SharedPortfolioAccessUpsertWithWhereUniqueWithoutViewerInput | SharedPortfolioAccessUpsertWithWhereUniqueWithoutViewerInput[]
    createMany?: SharedPortfolioAccessCreateManyViewerInputEnvelope
    set?: SharedPortfolioAccessWhereUniqueInput | SharedPortfolioAccessWhereUniqueInput[]
    disconnect?: SharedPortfolioAccessWhereUniqueInput | SharedPortfolioAccessWhereUniqueInput[]
    delete?: SharedPortfolioAccessWhereUniqueInput | SharedPortfolioAccessWhereUniqueInput[]
    connect?: SharedPortfolioAccessWhereUniqueInput | SharedPortfolioAccessWhereUniqueInput[]
    update?: SharedPortfolioAccessUpdateWithWhereUniqueWithoutViewerInput | SharedPortfolioAccessUpdateWithWhereUniqueWithoutViewerInput[]
    updateMany?: SharedPortfolioAccessUpdateManyWithWhereWithoutViewerInput | SharedPortfolioAccessUpdateManyWithWhereWithoutViewerInput[]
    deleteMany?: SharedPortfolioAccessScalarWhereInput | SharedPortfolioAccessScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutPortfoliosInput = {
    create?: XOR<UserCreateWithoutPortfoliosInput, UserUncheckedCreateWithoutPortfoliosInput>
    connectOrCreate?: UserCreateOrConnectWithoutPortfoliosInput
    connect?: UserWhereUniqueInput
  }

  export type HoldingCreateNestedManyWithoutPortfolioInput = {
    create?: XOR<HoldingCreateWithoutPortfolioInput, HoldingUncheckedCreateWithoutPortfolioInput> | HoldingCreateWithoutPortfolioInput[] | HoldingUncheckedCreateWithoutPortfolioInput[]
    connectOrCreate?: HoldingCreateOrConnectWithoutPortfolioInput | HoldingCreateOrConnectWithoutPortfolioInput[]
    createMany?: HoldingCreateManyPortfolioInputEnvelope
    connect?: HoldingWhereUniqueInput | HoldingWhereUniqueInput[]
  }

  export type SharedPortfolioAccessCreateNestedManyWithoutPortfolioInput = {
    create?: XOR<SharedPortfolioAccessCreateWithoutPortfolioInput, SharedPortfolioAccessUncheckedCreateWithoutPortfolioInput> | SharedPortfolioAccessCreateWithoutPortfolioInput[] | SharedPortfolioAccessUncheckedCreateWithoutPortfolioInput[]
    connectOrCreate?: SharedPortfolioAccessCreateOrConnectWithoutPortfolioInput | SharedPortfolioAccessCreateOrConnectWithoutPortfolioInput[]
    createMany?: SharedPortfolioAccessCreateManyPortfolioInputEnvelope
    connect?: SharedPortfolioAccessWhereUniqueInput | SharedPortfolioAccessWhereUniqueInput[]
  }

  export type AIInsightCreateNestedManyWithoutPortfolioInput = {
    create?: XOR<AIInsightCreateWithoutPortfolioInput, AIInsightUncheckedCreateWithoutPortfolioInput> | AIInsightCreateWithoutPortfolioInput[] | AIInsightUncheckedCreateWithoutPortfolioInput[]
    connectOrCreate?: AIInsightCreateOrConnectWithoutPortfolioInput | AIInsightCreateOrConnectWithoutPortfolioInput[]
    createMany?: AIInsightCreateManyPortfolioInputEnvelope
    connect?: AIInsightWhereUniqueInput | AIInsightWhereUniqueInput[]
  }

  export type HoldingUncheckedCreateNestedManyWithoutPortfolioInput = {
    create?: XOR<HoldingCreateWithoutPortfolioInput, HoldingUncheckedCreateWithoutPortfolioInput> | HoldingCreateWithoutPortfolioInput[] | HoldingUncheckedCreateWithoutPortfolioInput[]
    connectOrCreate?: HoldingCreateOrConnectWithoutPortfolioInput | HoldingCreateOrConnectWithoutPortfolioInput[]
    createMany?: HoldingCreateManyPortfolioInputEnvelope
    connect?: HoldingWhereUniqueInput | HoldingWhereUniqueInput[]
  }

  export type SharedPortfolioAccessUncheckedCreateNestedManyWithoutPortfolioInput = {
    create?: XOR<SharedPortfolioAccessCreateWithoutPortfolioInput, SharedPortfolioAccessUncheckedCreateWithoutPortfolioInput> | SharedPortfolioAccessCreateWithoutPortfolioInput[] | SharedPortfolioAccessUncheckedCreateWithoutPortfolioInput[]
    connectOrCreate?: SharedPortfolioAccessCreateOrConnectWithoutPortfolioInput | SharedPortfolioAccessCreateOrConnectWithoutPortfolioInput[]
    createMany?: SharedPortfolioAccessCreateManyPortfolioInputEnvelope
    connect?: SharedPortfolioAccessWhereUniqueInput | SharedPortfolioAccessWhereUniqueInput[]
  }

  export type AIInsightUncheckedCreateNestedManyWithoutPortfolioInput = {
    create?: XOR<AIInsightCreateWithoutPortfolioInput, AIInsightUncheckedCreateWithoutPortfolioInput> | AIInsightCreateWithoutPortfolioInput[] | AIInsightUncheckedCreateWithoutPortfolioInput[]
    connectOrCreate?: AIInsightCreateOrConnectWithoutPortfolioInput | AIInsightCreateOrConnectWithoutPortfolioInput[]
    createMany?: AIInsightCreateManyPortfolioInputEnvelope
    connect?: AIInsightWhereUniqueInput | AIInsightWhereUniqueInput[]
  }

  export type EnumPortfolioVisibilityFieldUpdateOperationsInput = {
    set?: $Enums.PortfolioVisibility
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutPortfoliosNestedInput = {
    create?: XOR<UserCreateWithoutPortfoliosInput, UserUncheckedCreateWithoutPortfoliosInput>
    connectOrCreate?: UserCreateOrConnectWithoutPortfoliosInput
    upsert?: UserUpsertWithoutPortfoliosInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPortfoliosInput, UserUpdateWithoutPortfoliosInput>, UserUncheckedUpdateWithoutPortfoliosInput>
  }

  export type HoldingUpdateManyWithoutPortfolioNestedInput = {
    create?: XOR<HoldingCreateWithoutPortfolioInput, HoldingUncheckedCreateWithoutPortfolioInput> | HoldingCreateWithoutPortfolioInput[] | HoldingUncheckedCreateWithoutPortfolioInput[]
    connectOrCreate?: HoldingCreateOrConnectWithoutPortfolioInput | HoldingCreateOrConnectWithoutPortfolioInput[]
    upsert?: HoldingUpsertWithWhereUniqueWithoutPortfolioInput | HoldingUpsertWithWhereUniqueWithoutPortfolioInput[]
    createMany?: HoldingCreateManyPortfolioInputEnvelope
    set?: HoldingWhereUniqueInput | HoldingWhereUniqueInput[]
    disconnect?: HoldingWhereUniqueInput | HoldingWhereUniqueInput[]
    delete?: HoldingWhereUniqueInput | HoldingWhereUniqueInput[]
    connect?: HoldingWhereUniqueInput | HoldingWhereUniqueInput[]
    update?: HoldingUpdateWithWhereUniqueWithoutPortfolioInput | HoldingUpdateWithWhereUniqueWithoutPortfolioInput[]
    updateMany?: HoldingUpdateManyWithWhereWithoutPortfolioInput | HoldingUpdateManyWithWhereWithoutPortfolioInput[]
    deleteMany?: HoldingScalarWhereInput | HoldingScalarWhereInput[]
  }

  export type SharedPortfolioAccessUpdateManyWithoutPortfolioNestedInput = {
    create?: XOR<SharedPortfolioAccessCreateWithoutPortfolioInput, SharedPortfolioAccessUncheckedCreateWithoutPortfolioInput> | SharedPortfolioAccessCreateWithoutPortfolioInput[] | SharedPortfolioAccessUncheckedCreateWithoutPortfolioInput[]
    connectOrCreate?: SharedPortfolioAccessCreateOrConnectWithoutPortfolioInput | SharedPortfolioAccessCreateOrConnectWithoutPortfolioInput[]
    upsert?: SharedPortfolioAccessUpsertWithWhereUniqueWithoutPortfolioInput | SharedPortfolioAccessUpsertWithWhereUniqueWithoutPortfolioInput[]
    createMany?: SharedPortfolioAccessCreateManyPortfolioInputEnvelope
    set?: SharedPortfolioAccessWhereUniqueInput | SharedPortfolioAccessWhereUniqueInput[]
    disconnect?: SharedPortfolioAccessWhereUniqueInput | SharedPortfolioAccessWhereUniqueInput[]
    delete?: SharedPortfolioAccessWhereUniqueInput | SharedPortfolioAccessWhereUniqueInput[]
    connect?: SharedPortfolioAccessWhereUniqueInput | SharedPortfolioAccessWhereUniqueInput[]
    update?: SharedPortfolioAccessUpdateWithWhereUniqueWithoutPortfolioInput | SharedPortfolioAccessUpdateWithWhereUniqueWithoutPortfolioInput[]
    updateMany?: SharedPortfolioAccessUpdateManyWithWhereWithoutPortfolioInput | SharedPortfolioAccessUpdateManyWithWhereWithoutPortfolioInput[]
    deleteMany?: SharedPortfolioAccessScalarWhereInput | SharedPortfolioAccessScalarWhereInput[]
  }

  export type AIInsightUpdateManyWithoutPortfolioNestedInput = {
    create?: XOR<AIInsightCreateWithoutPortfolioInput, AIInsightUncheckedCreateWithoutPortfolioInput> | AIInsightCreateWithoutPortfolioInput[] | AIInsightUncheckedCreateWithoutPortfolioInput[]
    connectOrCreate?: AIInsightCreateOrConnectWithoutPortfolioInput | AIInsightCreateOrConnectWithoutPortfolioInput[]
    upsert?: AIInsightUpsertWithWhereUniqueWithoutPortfolioInput | AIInsightUpsertWithWhereUniqueWithoutPortfolioInput[]
    createMany?: AIInsightCreateManyPortfolioInputEnvelope
    set?: AIInsightWhereUniqueInput | AIInsightWhereUniqueInput[]
    disconnect?: AIInsightWhereUniqueInput | AIInsightWhereUniqueInput[]
    delete?: AIInsightWhereUniqueInput | AIInsightWhereUniqueInput[]
    connect?: AIInsightWhereUniqueInput | AIInsightWhereUniqueInput[]
    update?: AIInsightUpdateWithWhereUniqueWithoutPortfolioInput | AIInsightUpdateWithWhereUniqueWithoutPortfolioInput[]
    updateMany?: AIInsightUpdateManyWithWhereWithoutPortfolioInput | AIInsightUpdateManyWithWhereWithoutPortfolioInput[]
    deleteMany?: AIInsightScalarWhereInput | AIInsightScalarWhereInput[]
  }

  export type HoldingUncheckedUpdateManyWithoutPortfolioNestedInput = {
    create?: XOR<HoldingCreateWithoutPortfolioInput, HoldingUncheckedCreateWithoutPortfolioInput> | HoldingCreateWithoutPortfolioInput[] | HoldingUncheckedCreateWithoutPortfolioInput[]
    connectOrCreate?: HoldingCreateOrConnectWithoutPortfolioInput | HoldingCreateOrConnectWithoutPortfolioInput[]
    upsert?: HoldingUpsertWithWhereUniqueWithoutPortfolioInput | HoldingUpsertWithWhereUniqueWithoutPortfolioInput[]
    createMany?: HoldingCreateManyPortfolioInputEnvelope
    set?: HoldingWhereUniqueInput | HoldingWhereUniqueInput[]
    disconnect?: HoldingWhereUniqueInput | HoldingWhereUniqueInput[]
    delete?: HoldingWhereUniqueInput | HoldingWhereUniqueInput[]
    connect?: HoldingWhereUniqueInput | HoldingWhereUniqueInput[]
    update?: HoldingUpdateWithWhereUniqueWithoutPortfolioInput | HoldingUpdateWithWhereUniqueWithoutPortfolioInput[]
    updateMany?: HoldingUpdateManyWithWhereWithoutPortfolioInput | HoldingUpdateManyWithWhereWithoutPortfolioInput[]
    deleteMany?: HoldingScalarWhereInput | HoldingScalarWhereInput[]
  }

  export type SharedPortfolioAccessUncheckedUpdateManyWithoutPortfolioNestedInput = {
    create?: XOR<SharedPortfolioAccessCreateWithoutPortfolioInput, SharedPortfolioAccessUncheckedCreateWithoutPortfolioInput> | SharedPortfolioAccessCreateWithoutPortfolioInput[] | SharedPortfolioAccessUncheckedCreateWithoutPortfolioInput[]
    connectOrCreate?: SharedPortfolioAccessCreateOrConnectWithoutPortfolioInput | SharedPortfolioAccessCreateOrConnectWithoutPortfolioInput[]
    upsert?: SharedPortfolioAccessUpsertWithWhereUniqueWithoutPortfolioInput | SharedPortfolioAccessUpsertWithWhereUniqueWithoutPortfolioInput[]
    createMany?: SharedPortfolioAccessCreateManyPortfolioInputEnvelope
    set?: SharedPortfolioAccessWhereUniqueInput | SharedPortfolioAccessWhereUniqueInput[]
    disconnect?: SharedPortfolioAccessWhereUniqueInput | SharedPortfolioAccessWhereUniqueInput[]
    delete?: SharedPortfolioAccessWhereUniqueInput | SharedPortfolioAccessWhereUniqueInput[]
    connect?: SharedPortfolioAccessWhereUniqueInput | SharedPortfolioAccessWhereUniqueInput[]
    update?: SharedPortfolioAccessUpdateWithWhereUniqueWithoutPortfolioInput | SharedPortfolioAccessUpdateWithWhereUniqueWithoutPortfolioInput[]
    updateMany?: SharedPortfolioAccessUpdateManyWithWhereWithoutPortfolioInput | SharedPortfolioAccessUpdateManyWithWhereWithoutPortfolioInput[]
    deleteMany?: SharedPortfolioAccessScalarWhereInput | SharedPortfolioAccessScalarWhereInput[]
  }

  export type AIInsightUncheckedUpdateManyWithoutPortfolioNestedInput = {
    create?: XOR<AIInsightCreateWithoutPortfolioInput, AIInsightUncheckedCreateWithoutPortfolioInput> | AIInsightCreateWithoutPortfolioInput[] | AIInsightUncheckedCreateWithoutPortfolioInput[]
    connectOrCreate?: AIInsightCreateOrConnectWithoutPortfolioInput | AIInsightCreateOrConnectWithoutPortfolioInput[]
    upsert?: AIInsightUpsertWithWhereUniqueWithoutPortfolioInput | AIInsightUpsertWithWhereUniqueWithoutPortfolioInput[]
    createMany?: AIInsightCreateManyPortfolioInputEnvelope
    set?: AIInsightWhereUniqueInput | AIInsightWhereUniqueInput[]
    disconnect?: AIInsightWhereUniqueInput | AIInsightWhereUniqueInput[]
    delete?: AIInsightWhereUniqueInput | AIInsightWhereUniqueInput[]
    connect?: AIInsightWhereUniqueInput | AIInsightWhereUniqueInput[]
    update?: AIInsightUpdateWithWhereUniqueWithoutPortfolioInput | AIInsightUpdateWithWhereUniqueWithoutPortfolioInput[]
    updateMany?: AIInsightUpdateManyWithWhereWithoutPortfolioInput | AIInsightUpdateManyWithWhereWithoutPortfolioInput[]
    deleteMany?: AIInsightScalarWhereInput | AIInsightScalarWhereInput[]
  }

  export type PortfolioCreateNestedOneWithoutHoldingsInput = {
    create?: XOR<PortfolioCreateWithoutHoldingsInput, PortfolioUncheckedCreateWithoutHoldingsInput>
    connectOrCreate?: PortfolioCreateOrConnectWithoutHoldingsInput
    connect?: PortfolioWhereUniqueInput
  }

  export type PortfolioUpdateOneRequiredWithoutHoldingsNestedInput = {
    create?: XOR<PortfolioCreateWithoutHoldingsInput, PortfolioUncheckedCreateWithoutHoldingsInput>
    connectOrCreate?: PortfolioCreateOrConnectWithoutHoldingsInput
    upsert?: PortfolioUpsertWithoutHoldingsInput
    connect?: PortfolioWhereUniqueInput
    update?: XOR<XOR<PortfolioUpdateToOneWithWhereWithoutHoldingsInput, PortfolioUpdateWithoutHoldingsInput>, PortfolioUncheckedUpdateWithoutHoldingsInput>
  }

  export type PortfolioCreateNestedOneWithoutSharedAccessInput = {
    create?: XOR<PortfolioCreateWithoutSharedAccessInput, PortfolioUncheckedCreateWithoutSharedAccessInput>
    connectOrCreate?: PortfolioCreateOrConnectWithoutSharedAccessInput
    connect?: PortfolioWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutAccessedSharesInput = {
    create?: XOR<UserCreateWithoutAccessedSharesInput, UserUncheckedCreateWithoutAccessedSharesInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccessedSharesInput
    connect?: UserWhereUniqueInput
  }

  export type TokenAccessLogCreateNestedManyWithoutAccessInput = {
    create?: XOR<TokenAccessLogCreateWithoutAccessInput, TokenAccessLogUncheckedCreateWithoutAccessInput> | TokenAccessLogCreateWithoutAccessInput[] | TokenAccessLogUncheckedCreateWithoutAccessInput[]
    connectOrCreate?: TokenAccessLogCreateOrConnectWithoutAccessInput | TokenAccessLogCreateOrConnectWithoutAccessInput[]
    createMany?: TokenAccessLogCreateManyAccessInputEnvelope
    connect?: TokenAccessLogWhereUniqueInput | TokenAccessLogWhereUniqueInput[]
  }

  export type TokenAccessLogUncheckedCreateNestedManyWithoutAccessInput = {
    create?: XOR<TokenAccessLogCreateWithoutAccessInput, TokenAccessLogUncheckedCreateWithoutAccessInput> | TokenAccessLogCreateWithoutAccessInput[] | TokenAccessLogUncheckedCreateWithoutAccessInput[]
    connectOrCreate?: TokenAccessLogCreateOrConnectWithoutAccessInput | TokenAccessLogCreateOrConnectWithoutAccessInput[]
    createMany?: TokenAccessLogCreateManyAccessInputEnvelope
    connect?: TokenAccessLogWhereUniqueInput | TokenAccessLogWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
    unset?: boolean
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PortfolioUpdateOneRequiredWithoutSharedAccessNestedInput = {
    create?: XOR<PortfolioCreateWithoutSharedAccessInput, PortfolioUncheckedCreateWithoutSharedAccessInput>
    connectOrCreate?: PortfolioCreateOrConnectWithoutSharedAccessInput
    upsert?: PortfolioUpsertWithoutSharedAccessInput
    connect?: PortfolioWhereUniqueInput
    update?: XOR<XOR<PortfolioUpdateToOneWithWhereWithoutSharedAccessInput, PortfolioUpdateWithoutSharedAccessInput>, PortfolioUncheckedUpdateWithoutSharedAccessInput>
  }

  export type UserUpdateOneWithoutAccessedSharesNestedInput = {
    create?: XOR<UserCreateWithoutAccessedSharesInput, UserUncheckedCreateWithoutAccessedSharesInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccessedSharesInput
    upsert?: UserUpsertWithoutAccessedSharesInput
    disconnect?: boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAccessedSharesInput, UserUpdateWithoutAccessedSharesInput>, UserUncheckedUpdateWithoutAccessedSharesInput>
  }

  export type TokenAccessLogUpdateManyWithoutAccessNestedInput = {
    create?: XOR<TokenAccessLogCreateWithoutAccessInput, TokenAccessLogUncheckedCreateWithoutAccessInput> | TokenAccessLogCreateWithoutAccessInput[] | TokenAccessLogUncheckedCreateWithoutAccessInput[]
    connectOrCreate?: TokenAccessLogCreateOrConnectWithoutAccessInput | TokenAccessLogCreateOrConnectWithoutAccessInput[]
    upsert?: TokenAccessLogUpsertWithWhereUniqueWithoutAccessInput | TokenAccessLogUpsertWithWhereUniqueWithoutAccessInput[]
    createMany?: TokenAccessLogCreateManyAccessInputEnvelope
    set?: TokenAccessLogWhereUniqueInput | TokenAccessLogWhereUniqueInput[]
    disconnect?: TokenAccessLogWhereUniqueInput | TokenAccessLogWhereUniqueInput[]
    delete?: TokenAccessLogWhereUniqueInput | TokenAccessLogWhereUniqueInput[]
    connect?: TokenAccessLogWhereUniqueInput | TokenAccessLogWhereUniqueInput[]
    update?: TokenAccessLogUpdateWithWhereUniqueWithoutAccessInput | TokenAccessLogUpdateWithWhereUniqueWithoutAccessInput[]
    updateMany?: TokenAccessLogUpdateManyWithWhereWithoutAccessInput | TokenAccessLogUpdateManyWithWhereWithoutAccessInput[]
    deleteMany?: TokenAccessLogScalarWhereInput | TokenAccessLogScalarWhereInput[]
  }

  export type TokenAccessLogUncheckedUpdateManyWithoutAccessNestedInput = {
    create?: XOR<TokenAccessLogCreateWithoutAccessInput, TokenAccessLogUncheckedCreateWithoutAccessInput> | TokenAccessLogCreateWithoutAccessInput[] | TokenAccessLogUncheckedCreateWithoutAccessInput[]
    connectOrCreate?: TokenAccessLogCreateOrConnectWithoutAccessInput | TokenAccessLogCreateOrConnectWithoutAccessInput[]
    upsert?: TokenAccessLogUpsertWithWhereUniqueWithoutAccessInput | TokenAccessLogUpsertWithWhereUniqueWithoutAccessInput[]
    createMany?: TokenAccessLogCreateManyAccessInputEnvelope
    set?: TokenAccessLogWhereUniqueInput | TokenAccessLogWhereUniqueInput[]
    disconnect?: TokenAccessLogWhereUniqueInput | TokenAccessLogWhereUniqueInput[]
    delete?: TokenAccessLogWhereUniqueInput | TokenAccessLogWhereUniqueInput[]
    connect?: TokenAccessLogWhereUniqueInput | TokenAccessLogWhereUniqueInput[]
    update?: TokenAccessLogUpdateWithWhereUniqueWithoutAccessInput | TokenAccessLogUpdateWithWhereUniqueWithoutAccessInput[]
    updateMany?: TokenAccessLogUpdateManyWithWhereWithoutAccessInput | TokenAccessLogUpdateManyWithWhereWithoutAccessInput[]
    deleteMany?: TokenAccessLogScalarWhereInput | TokenAccessLogScalarWhereInput[]
  }

  export type SharedPortfolioAccessCreateNestedOneWithoutAccessLogsInput = {
    create?: XOR<SharedPortfolioAccessCreateWithoutAccessLogsInput, SharedPortfolioAccessUncheckedCreateWithoutAccessLogsInput>
    connectOrCreate?: SharedPortfolioAccessCreateOrConnectWithoutAccessLogsInput
    connect?: SharedPortfolioAccessWhereUniqueInput
  }

  export type SharedPortfolioAccessUpdateOneRequiredWithoutAccessLogsNestedInput = {
    create?: XOR<SharedPortfolioAccessCreateWithoutAccessLogsInput, SharedPortfolioAccessUncheckedCreateWithoutAccessLogsInput>
    connectOrCreate?: SharedPortfolioAccessCreateOrConnectWithoutAccessLogsInput
    upsert?: SharedPortfolioAccessUpsertWithoutAccessLogsInput
    connect?: SharedPortfolioAccessWhereUniqueInput
    update?: XOR<XOR<SharedPortfolioAccessUpdateToOneWithWhereWithoutAccessLogsInput, SharedPortfolioAccessUpdateWithoutAccessLogsInput>, SharedPortfolioAccessUncheckedUpdateWithoutAccessLogsInput>
  }

  export type PortfolioCreateNestedOneWithoutAiInsightsInput = {
    create?: XOR<PortfolioCreateWithoutAiInsightsInput, PortfolioUncheckedCreateWithoutAiInsightsInput>
    connectOrCreate?: PortfolioCreateOrConnectWithoutAiInsightsInput
    connect?: PortfolioWhereUniqueInput
  }

  export type PortfolioUpdateOneRequiredWithoutAiInsightsNestedInput = {
    create?: XOR<PortfolioCreateWithoutAiInsightsInput, PortfolioUncheckedCreateWithoutAiInsightsInput>
    connectOrCreate?: PortfolioCreateOrConnectWithoutAiInsightsInput
    upsert?: PortfolioUpsertWithoutAiInsightsInput
    connect?: PortfolioWhereUniqueInput
    update?: XOR<XOR<PortfolioUpdateToOneWithWhereWithoutAiInsightsInput, PortfolioUpdateWithoutAiInsightsInput>, PortfolioUncheckedUpdateWithoutAiInsightsInput>
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
    isSet?: boolean
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
    isSet?: boolean
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
    isSet?: boolean
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

  export type NestedEnumPortfolioVisibilityFilter<$PrismaModel = never> = {
    equals?: $Enums.PortfolioVisibility | EnumPortfolioVisibilityFieldRefInput<$PrismaModel>
    in?: $Enums.PortfolioVisibility[] | ListEnumPortfolioVisibilityFieldRefInput<$PrismaModel>
    notIn?: $Enums.PortfolioVisibility[] | ListEnumPortfolioVisibilityFieldRefInput<$PrismaModel>
    not?: NestedEnumPortfolioVisibilityFilter<$PrismaModel> | $Enums.PortfolioVisibility
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

  export type NestedEnumPortfolioVisibilityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PortfolioVisibility | EnumPortfolioVisibilityFieldRefInput<$PrismaModel>
    in?: $Enums.PortfolioVisibility[] | ListEnumPortfolioVisibilityFieldRefInput<$PrismaModel>
    notIn?: $Enums.PortfolioVisibility[] | ListEnumPortfolioVisibilityFieldRefInput<$PrismaModel>
    not?: NestedEnumPortfolioVisibilityWithAggregatesFilter<$PrismaModel> | $Enums.PortfolioVisibility
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPortfolioVisibilityFilter<$PrismaModel>
    _max?: NestedEnumPortfolioVisibilityFilter<$PrismaModel>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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
    isSet?: boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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
    isSet?: boolean
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

  export type PortfolioCreateWithoutUserInput = {
    id?: string
    name: string
    description?: string | null
    visibility?: $Enums.PortfolioVisibility
    cash?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    holdings?: HoldingCreateNestedManyWithoutPortfolioInput
    sharedAccess?: SharedPortfolioAccessCreateNestedManyWithoutPortfolioInput
    aiInsights?: AIInsightCreateNestedManyWithoutPortfolioInput
  }

  export type PortfolioUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    description?: string | null
    visibility?: $Enums.PortfolioVisibility
    cash?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    holdings?: HoldingUncheckedCreateNestedManyWithoutPortfolioInput
    sharedAccess?: SharedPortfolioAccessUncheckedCreateNestedManyWithoutPortfolioInput
    aiInsights?: AIInsightUncheckedCreateNestedManyWithoutPortfolioInput
  }

  export type PortfolioCreateOrConnectWithoutUserInput = {
    where: PortfolioWhereUniqueInput
    create: XOR<PortfolioCreateWithoutUserInput, PortfolioUncheckedCreateWithoutUserInput>
  }

  export type PortfolioCreateManyUserInputEnvelope = {
    data: PortfolioCreateManyUserInput | PortfolioCreateManyUserInput[]
  }

  export type SharedPortfolioAccessCreateWithoutViewerInput = {
    id?: string
    token: string
    fingerprint?: string | null
    isActive?: boolean
    expiresAt?: Date | string | null
    viewCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    portfolio: PortfolioCreateNestedOneWithoutSharedAccessInput
    accessLogs?: TokenAccessLogCreateNestedManyWithoutAccessInput
  }

  export type SharedPortfolioAccessUncheckedCreateWithoutViewerInput = {
    id?: string
    token: string
    portfolioId: string
    fingerprint?: string | null
    isActive?: boolean
    expiresAt?: Date | string | null
    viewCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    accessLogs?: TokenAccessLogUncheckedCreateNestedManyWithoutAccessInput
  }

  export type SharedPortfolioAccessCreateOrConnectWithoutViewerInput = {
    where: SharedPortfolioAccessWhereUniqueInput
    create: XOR<SharedPortfolioAccessCreateWithoutViewerInput, SharedPortfolioAccessUncheckedCreateWithoutViewerInput>
  }

  export type SharedPortfolioAccessCreateManyViewerInputEnvelope = {
    data: SharedPortfolioAccessCreateManyViewerInput | SharedPortfolioAccessCreateManyViewerInput[]
  }

  export type PortfolioUpsertWithWhereUniqueWithoutUserInput = {
    where: PortfolioWhereUniqueInput
    update: XOR<PortfolioUpdateWithoutUserInput, PortfolioUncheckedUpdateWithoutUserInput>
    create: XOR<PortfolioCreateWithoutUserInput, PortfolioUncheckedCreateWithoutUserInput>
  }

  export type PortfolioUpdateWithWhereUniqueWithoutUserInput = {
    where: PortfolioWhereUniqueInput
    data: XOR<PortfolioUpdateWithoutUserInput, PortfolioUncheckedUpdateWithoutUserInput>
  }

  export type PortfolioUpdateManyWithWhereWithoutUserInput = {
    where: PortfolioScalarWhereInput
    data: XOR<PortfolioUpdateManyMutationInput, PortfolioUncheckedUpdateManyWithoutUserInput>
  }

  export type PortfolioScalarWhereInput = {
    AND?: PortfolioScalarWhereInput | PortfolioScalarWhereInput[]
    OR?: PortfolioScalarWhereInput[]
    NOT?: PortfolioScalarWhereInput | PortfolioScalarWhereInput[]
    id?: StringFilter<"Portfolio"> | string
    name?: StringFilter<"Portfolio"> | string
    description?: StringNullableFilter<"Portfolio"> | string | null
    visibility?: EnumPortfolioVisibilityFilter<"Portfolio"> | $Enums.PortfolioVisibility
    userId?: StringFilter<"Portfolio"> | string
    cash?: FloatFilter<"Portfolio"> | number
    createdAt?: DateTimeFilter<"Portfolio"> | Date | string
    updatedAt?: DateTimeFilter<"Portfolio"> | Date | string
  }

  export type SharedPortfolioAccessUpsertWithWhereUniqueWithoutViewerInput = {
    where: SharedPortfolioAccessWhereUniqueInput
    update: XOR<SharedPortfolioAccessUpdateWithoutViewerInput, SharedPortfolioAccessUncheckedUpdateWithoutViewerInput>
    create: XOR<SharedPortfolioAccessCreateWithoutViewerInput, SharedPortfolioAccessUncheckedCreateWithoutViewerInput>
  }

  export type SharedPortfolioAccessUpdateWithWhereUniqueWithoutViewerInput = {
    where: SharedPortfolioAccessWhereUniqueInput
    data: XOR<SharedPortfolioAccessUpdateWithoutViewerInput, SharedPortfolioAccessUncheckedUpdateWithoutViewerInput>
  }

  export type SharedPortfolioAccessUpdateManyWithWhereWithoutViewerInput = {
    where: SharedPortfolioAccessScalarWhereInput
    data: XOR<SharedPortfolioAccessUpdateManyMutationInput, SharedPortfolioAccessUncheckedUpdateManyWithoutViewerInput>
  }

  export type SharedPortfolioAccessScalarWhereInput = {
    AND?: SharedPortfolioAccessScalarWhereInput | SharedPortfolioAccessScalarWhereInput[]
    OR?: SharedPortfolioAccessScalarWhereInput[]
    NOT?: SharedPortfolioAccessScalarWhereInput | SharedPortfolioAccessScalarWhereInput[]
    id?: StringFilter<"SharedPortfolioAccess"> | string
    token?: StringFilter<"SharedPortfolioAccess"> | string
    portfolioId?: StringFilter<"SharedPortfolioAccess"> | string
    viewerId?: StringNullableFilter<"SharedPortfolioAccess"> | string | null
    fingerprint?: StringNullableFilter<"SharedPortfolioAccess"> | string | null
    isActive?: BoolFilter<"SharedPortfolioAccess"> | boolean
    expiresAt?: DateTimeNullableFilter<"SharedPortfolioAccess"> | Date | string | null
    viewCount?: IntFilter<"SharedPortfolioAccess"> | number
    createdAt?: DateTimeFilter<"SharedPortfolioAccess"> | Date | string
    updatedAt?: DateTimeFilter<"SharedPortfolioAccess"> | Date | string
  }

  export type UserCreateWithoutPortfoliosInput = {
    id?: string
    email: string
    name?: string | null
    image?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accessedShares?: SharedPortfolioAccessCreateNestedManyWithoutViewerInput
  }

  export type UserUncheckedCreateWithoutPortfoliosInput = {
    id?: string
    email: string
    name?: string | null
    image?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accessedShares?: SharedPortfolioAccessUncheckedCreateNestedManyWithoutViewerInput
  }

  export type UserCreateOrConnectWithoutPortfoliosInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPortfoliosInput, UserUncheckedCreateWithoutPortfoliosInput>
  }

  export type HoldingCreateWithoutPortfolioInput = {
    id?: string
    ticker: string
    quantity: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HoldingUncheckedCreateWithoutPortfolioInput = {
    id?: string
    ticker: string
    quantity: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HoldingCreateOrConnectWithoutPortfolioInput = {
    where: HoldingWhereUniqueInput
    create: XOR<HoldingCreateWithoutPortfolioInput, HoldingUncheckedCreateWithoutPortfolioInput>
  }

  export type HoldingCreateManyPortfolioInputEnvelope = {
    data: HoldingCreateManyPortfolioInput | HoldingCreateManyPortfolioInput[]
  }

  export type SharedPortfolioAccessCreateWithoutPortfolioInput = {
    id?: string
    token: string
    fingerprint?: string | null
    isActive?: boolean
    expiresAt?: Date | string | null
    viewCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    viewer?: UserCreateNestedOneWithoutAccessedSharesInput
    accessLogs?: TokenAccessLogCreateNestedManyWithoutAccessInput
  }

  export type SharedPortfolioAccessUncheckedCreateWithoutPortfolioInput = {
    id?: string
    token: string
    viewerId?: string | null
    fingerprint?: string | null
    isActive?: boolean
    expiresAt?: Date | string | null
    viewCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    accessLogs?: TokenAccessLogUncheckedCreateNestedManyWithoutAccessInput
  }

  export type SharedPortfolioAccessCreateOrConnectWithoutPortfolioInput = {
    where: SharedPortfolioAccessWhereUniqueInput
    create: XOR<SharedPortfolioAccessCreateWithoutPortfolioInput, SharedPortfolioAccessUncheckedCreateWithoutPortfolioInput>
  }

  export type SharedPortfolioAccessCreateManyPortfolioInputEnvelope = {
    data: SharedPortfolioAccessCreateManyPortfolioInput | SharedPortfolioAccessCreateManyPortfolioInput[]
  }

  export type AIInsightCreateWithoutPortfolioInput = {
    id?: string
    summary: string
    diversification: string
    sectorExposure: string
    investmentThesis: string
    fullAnalysis?: string | null
    generatedAt?: Date | string
  }

  export type AIInsightUncheckedCreateWithoutPortfolioInput = {
    id?: string
    summary: string
    diversification: string
    sectorExposure: string
    investmentThesis: string
    fullAnalysis?: string | null
    generatedAt?: Date | string
  }

  export type AIInsightCreateOrConnectWithoutPortfolioInput = {
    where: AIInsightWhereUniqueInput
    create: XOR<AIInsightCreateWithoutPortfolioInput, AIInsightUncheckedCreateWithoutPortfolioInput>
  }

  export type AIInsightCreateManyPortfolioInputEnvelope = {
    data: AIInsightCreateManyPortfolioInput | AIInsightCreateManyPortfolioInput[]
  }

  export type UserUpsertWithoutPortfoliosInput = {
    update: XOR<UserUpdateWithoutPortfoliosInput, UserUncheckedUpdateWithoutPortfoliosInput>
    create: XOR<UserCreateWithoutPortfoliosInput, UserUncheckedCreateWithoutPortfoliosInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPortfoliosInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPortfoliosInput, UserUncheckedUpdateWithoutPortfoliosInput>
  }

  export type UserUpdateWithoutPortfoliosInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accessedShares?: SharedPortfolioAccessUpdateManyWithoutViewerNestedInput
  }

  export type UserUncheckedUpdateWithoutPortfoliosInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accessedShares?: SharedPortfolioAccessUncheckedUpdateManyWithoutViewerNestedInput
  }

  export type HoldingUpsertWithWhereUniqueWithoutPortfolioInput = {
    where: HoldingWhereUniqueInput
    update: XOR<HoldingUpdateWithoutPortfolioInput, HoldingUncheckedUpdateWithoutPortfolioInput>
    create: XOR<HoldingCreateWithoutPortfolioInput, HoldingUncheckedCreateWithoutPortfolioInput>
  }

  export type HoldingUpdateWithWhereUniqueWithoutPortfolioInput = {
    where: HoldingWhereUniqueInput
    data: XOR<HoldingUpdateWithoutPortfolioInput, HoldingUncheckedUpdateWithoutPortfolioInput>
  }

  export type HoldingUpdateManyWithWhereWithoutPortfolioInput = {
    where: HoldingScalarWhereInput
    data: XOR<HoldingUpdateManyMutationInput, HoldingUncheckedUpdateManyWithoutPortfolioInput>
  }

  export type HoldingScalarWhereInput = {
    AND?: HoldingScalarWhereInput | HoldingScalarWhereInput[]
    OR?: HoldingScalarWhereInput[]
    NOT?: HoldingScalarWhereInput | HoldingScalarWhereInput[]
    id?: StringFilter<"Holding"> | string
    ticker?: StringFilter<"Holding"> | string
    quantity?: FloatFilter<"Holding"> | number
    portfolioId?: StringFilter<"Holding"> | string
    createdAt?: DateTimeFilter<"Holding"> | Date | string
    updatedAt?: DateTimeFilter<"Holding"> | Date | string
  }

  export type SharedPortfolioAccessUpsertWithWhereUniqueWithoutPortfolioInput = {
    where: SharedPortfolioAccessWhereUniqueInput
    update: XOR<SharedPortfolioAccessUpdateWithoutPortfolioInput, SharedPortfolioAccessUncheckedUpdateWithoutPortfolioInput>
    create: XOR<SharedPortfolioAccessCreateWithoutPortfolioInput, SharedPortfolioAccessUncheckedCreateWithoutPortfolioInput>
  }

  export type SharedPortfolioAccessUpdateWithWhereUniqueWithoutPortfolioInput = {
    where: SharedPortfolioAccessWhereUniqueInput
    data: XOR<SharedPortfolioAccessUpdateWithoutPortfolioInput, SharedPortfolioAccessUncheckedUpdateWithoutPortfolioInput>
  }

  export type SharedPortfolioAccessUpdateManyWithWhereWithoutPortfolioInput = {
    where: SharedPortfolioAccessScalarWhereInput
    data: XOR<SharedPortfolioAccessUpdateManyMutationInput, SharedPortfolioAccessUncheckedUpdateManyWithoutPortfolioInput>
  }

  export type AIInsightUpsertWithWhereUniqueWithoutPortfolioInput = {
    where: AIInsightWhereUniqueInput
    update: XOR<AIInsightUpdateWithoutPortfolioInput, AIInsightUncheckedUpdateWithoutPortfolioInput>
    create: XOR<AIInsightCreateWithoutPortfolioInput, AIInsightUncheckedCreateWithoutPortfolioInput>
  }

  export type AIInsightUpdateWithWhereUniqueWithoutPortfolioInput = {
    where: AIInsightWhereUniqueInput
    data: XOR<AIInsightUpdateWithoutPortfolioInput, AIInsightUncheckedUpdateWithoutPortfolioInput>
  }

  export type AIInsightUpdateManyWithWhereWithoutPortfolioInput = {
    where: AIInsightScalarWhereInput
    data: XOR<AIInsightUpdateManyMutationInput, AIInsightUncheckedUpdateManyWithoutPortfolioInput>
  }

  export type AIInsightScalarWhereInput = {
    AND?: AIInsightScalarWhereInput | AIInsightScalarWhereInput[]
    OR?: AIInsightScalarWhereInput[]
    NOT?: AIInsightScalarWhereInput | AIInsightScalarWhereInput[]
    id?: StringFilter<"AIInsight"> | string
    portfolioId?: StringFilter<"AIInsight"> | string
    summary?: StringFilter<"AIInsight"> | string
    diversification?: StringFilter<"AIInsight"> | string
    sectorExposure?: StringFilter<"AIInsight"> | string
    investmentThesis?: StringFilter<"AIInsight"> | string
    fullAnalysis?: StringNullableFilter<"AIInsight"> | string | null
    generatedAt?: DateTimeFilter<"AIInsight"> | Date | string
  }

  export type PortfolioCreateWithoutHoldingsInput = {
    id?: string
    name: string
    description?: string | null
    visibility?: $Enums.PortfolioVisibility
    cash?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutPortfoliosInput
    sharedAccess?: SharedPortfolioAccessCreateNestedManyWithoutPortfolioInput
    aiInsights?: AIInsightCreateNestedManyWithoutPortfolioInput
  }

  export type PortfolioUncheckedCreateWithoutHoldingsInput = {
    id?: string
    name: string
    description?: string | null
    visibility?: $Enums.PortfolioVisibility
    userId: string
    cash?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    sharedAccess?: SharedPortfolioAccessUncheckedCreateNestedManyWithoutPortfolioInput
    aiInsights?: AIInsightUncheckedCreateNestedManyWithoutPortfolioInput
  }

  export type PortfolioCreateOrConnectWithoutHoldingsInput = {
    where: PortfolioWhereUniqueInput
    create: XOR<PortfolioCreateWithoutHoldingsInput, PortfolioUncheckedCreateWithoutHoldingsInput>
  }

  export type PortfolioUpsertWithoutHoldingsInput = {
    update: XOR<PortfolioUpdateWithoutHoldingsInput, PortfolioUncheckedUpdateWithoutHoldingsInput>
    create: XOR<PortfolioCreateWithoutHoldingsInput, PortfolioUncheckedCreateWithoutHoldingsInput>
    where?: PortfolioWhereInput
  }

  export type PortfolioUpdateToOneWithWhereWithoutHoldingsInput = {
    where?: PortfolioWhereInput
    data: XOR<PortfolioUpdateWithoutHoldingsInput, PortfolioUncheckedUpdateWithoutHoldingsInput>
  }

  export type PortfolioUpdateWithoutHoldingsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    visibility?: EnumPortfolioVisibilityFieldUpdateOperationsInput | $Enums.PortfolioVisibility
    cash?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPortfoliosNestedInput
    sharedAccess?: SharedPortfolioAccessUpdateManyWithoutPortfolioNestedInput
    aiInsights?: AIInsightUpdateManyWithoutPortfolioNestedInput
  }

  export type PortfolioUncheckedUpdateWithoutHoldingsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    visibility?: EnumPortfolioVisibilityFieldUpdateOperationsInput | $Enums.PortfolioVisibility
    userId?: StringFieldUpdateOperationsInput | string
    cash?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sharedAccess?: SharedPortfolioAccessUncheckedUpdateManyWithoutPortfolioNestedInput
    aiInsights?: AIInsightUncheckedUpdateManyWithoutPortfolioNestedInput
  }

  export type PortfolioCreateWithoutSharedAccessInput = {
    id?: string
    name: string
    description?: string | null
    visibility?: $Enums.PortfolioVisibility
    cash?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutPortfoliosInput
    holdings?: HoldingCreateNestedManyWithoutPortfolioInput
    aiInsights?: AIInsightCreateNestedManyWithoutPortfolioInput
  }

  export type PortfolioUncheckedCreateWithoutSharedAccessInput = {
    id?: string
    name: string
    description?: string | null
    visibility?: $Enums.PortfolioVisibility
    userId: string
    cash?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    holdings?: HoldingUncheckedCreateNestedManyWithoutPortfolioInput
    aiInsights?: AIInsightUncheckedCreateNestedManyWithoutPortfolioInput
  }

  export type PortfolioCreateOrConnectWithoutSharedAccessInput = {
    where: PortfolioWhereUniqueInput
    create: XOR<PortfolioCreateWithoutSharedAccessInput, PortfolioUncheckedCreateWithoutSharedAccessInput>
  }

  export type UserCreateWithoutAccessedSharesInput = {
    id?: string
    email: string
    name?: string | null
    image?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    portfolios?: PortfolioCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAccessedSharesInput = {
    id?: string
    email: string
    name?: string | null
    image?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    portfolios?: PortfolioUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAccessedSharesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAccessedSharesInput, UserUncheckedCreateWithoutAccessedSharesInput>
  }

  export type TokenAccessLogCreateWithoutAccessInput = {
    id?: string
    ip?: string | null
    userAgent?: string | null
    viewedAt?: Date | string
  }

  export type TokenAccessLogUncheckedCreateWithoutAccessInput = {
    id?: string
    ip?: string | null
    userAgent?: string | null
    viewedAt?: Date | string
  }

  export type TokenAccessLogCreateOrConnectWithoutAccessInput = {
    where: TokenAccessLogWhereUniqueInput
    create: XOR<TokenAccessLogCreateWithoutAccessInput, TokenAccessLogUncheckedCreateWithoutAccessInput>
  }

  export type TokenAccessLogCreateManyAccessInputEnvelope = {
    data: TokenAccessLogCreateManyAccessInput | TokenAccessLogCreateManyAccessInput[]
  }

  export type PortfolioUpsertWithoutSharedAccessInput = {
    update: XOR<PortfolioUpdateWithoutSharedAccessInput, PortfolioUncheckedUpdateWithoutSharedAccessInput>
    create: XOR<PortfolioCreateWithoutSharedAccessInput, PortfolioUncheckedCreateWithoutSharedAccessInput>
    where?: PortfolioWhereInput
  }

  export type PortfolioUpdateToOneWithWhereWithoutSharedAccessInput = {
    where?: PortfolioWhereInput
    data: XOR<PortfolioUpdateWithoutSharedAccessInput, PortfolioUncheckedUpdateWithoutSharedAccessInput>
  }

  export type PortfolioUpdateWithoutSharedAccessInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    visibility?: EnumPortfolioVisibilityFieldUpdateOperationsInput | $Enums.PortfolioVisibility
    cash?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPortfoliosNestedInput
    holdings?: HoldingUpdateManyWithoutPortfolioNestedInput
    aiInsights?: AIInsightUpdateManyWithoutPortfolioNestedInput
  }

  export type PortfolioUncheckedUpdateWithoutSharedAccessInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    visibility?: EnumPortfolioVisibilityFieldUpdateOperationsInput | $Enums.PortfolioVisibility
    userId?: StringFieldUpdateOperationsInput | string
    cash?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    holdings?: HoldingUncheckedUpdateManyWithoutPortfolioNestedInput
    aiInsights?: AIInsightUncheckedUpdateManyWithoutPortfolioNestedInput
  }

  export type UserUpsertWithoutAccessedSharesInput = {
    update: XOR<UserUpdateWithoutAccessedSharesInput, UserUncheckedUpdateWithoutAccessedSharesInput>
    create: XOR<UserCreateWithoutAccessedSharesInput, UserUncheckedCreateWithoutAccessedSharesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAccessedSharesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAccessedSharesInput, UserUncheckedUpdateWithoutAccessedSharesInput>
  }

  export type UserUpdateWithoutAccessedSharesInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    portfolios?: PortfolioUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAccessedSharesInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    portfolios?: PortfolioUncheckedUpdateManyWithoutUserNestedInput
  }

  export type TokenAccessLogUpsertWithWhereUniqueWithoutAccessInput = {
    where: TokenAccessLogWhereUniqueInput
    update: XOR<TokenAccessLogUpdateWithoutAccessInput, TokenAccessLogUncheckedUpdateWithoutAccessInput>
    create: XOR<TokenAccessLogCreateWithoutAccessInput, TokenAccessLogUncheckedCreateWithoutAccessInput>
  }

  export type TokenAccessLogUpdateWithWhereUniqueWithoutAccessInput = {
    where: TokenAccessLogWhereUniqueInput
    data: XOR<TokenAccessLogUpdateWithoutAccessInput, TokenAccessLogUncheckedUpdateWithoutAccessInput>
  }

  export type TokenAccessLogUpdateManyWithWhereWithoutAccessInput = {
    where: TokenAccessLogScalarWhereInput
    data: XOR<TokenAccessLogUpdateManyMutationInput, TokenAccessLogUncheckedUpdateManyWithoutAccessInput>
  }

  export type TokenAccessLogScalarWhereInput = {
    AND?: TokenAccessLogScalarWhereInput | TokenAccessLogScalarWhereInput[]
    OR?: TokenAccessLogScalarWhereInput[]
    NOT?: TokenAccessLogScalarWhereInput | TokenAccessLogScalarWhereInput[]
    id?: StringFilter<"TokenAccessLog"> | string
    accessId?: StringFilter<"TokenAccessLog"> | string
    ip?: StringNullableFilter<"TokenAccessLog"> | string | null
    userAgent?: StringNullableFilter<"TokenAccessLog"> | string | null
    viewedAt?: DateTimeFilter<"TokenAccessLog"> | Date | string
  }

  export type SharedPortfolioAccessCreateWithoutAccessLogsInput = {
    id?: string
    token: string
    fingerprint?: string | null
    isActive?: boolean
    expiresAt?: Date | string | null
    viewCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    portfolio: PortfolioCreateNestedOneWithoutSharedAccessInput
    viewer?: UserCreateNestedOneWithoutAccessedSharesInput
  }

  export type SharedPortfolioAccessUncheckedCreateWithoutAccessLogsInput = {
    id?: string
    token: string
    portfolioId: string
    viewerId?: string | null
    fingerprint?: string | null
    isActive?: boolean
    expiresAt?: Date | string | null
    viewCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SharedPortfolioAccessCreateOrConnectWithoutAccessLogsInput = {
    where: SharedPortfolioAccessWhereUniqueInput
    create: XOR<SharedPortfolioAccessCreateWithoutAccessLogsInput, SharedPortfolioAccessUncheckedCreateWithoutAccessLogsInput>
  }

  export type SharedPortfolioAccessUpsertWithoutAccessLogsInput = {
    update: XOR<SharedPortfolioAccessUpdateWithoutAccessLogsInput, SharedPortfolioAccessUncheckedUpdateWithoutAccessLogsInput>
    create: XOR<SharedPortfolioAccessCreateWithoutAccessLogsInput, SharedPortfolioAccessUncheckedCreateWithoutAccessLogsInput>
    where?: SharedPortfolioAccessWhereInput
  }

  export type SharedPortfolioAccessUpdateToOneWithWhereWithoutAccessLogsInput = {
    where?: SharedPortfolioAccessWhereInput
    data: XOR<SharedPortfolioAccessUpdateWithoutAccessLogsInput, SharedPortfolioAccessUncheckedUpdateWithoutAccessLogsInput>
  }

  export type SharedPortfolioAccessUpdateWithoutAccessLogsInput = {
    token?: StringFieldUpdateOperationsInput | string
    fingerprint?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    viewCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    portfolio?: PortfolioUpdateOneRequiredWithoutSharedAccessNestedInput
    viewer?: UserUpdateOneWithoutAccessedSharesNestedInput
  }

  export type SharedPortfolioAccessUncheckedUpdateWithoutAccessLogsInput = {
    token?: StringFieldUpdateOperationsInput | string
    portfolioId?: StringFieldUpdateOperationsInput | string
    viewerId?: NullableStringFieldUpdateOperationsInput | string | null
    fingerprint?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    viewCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PortfolioCreateWithoutAiInsightsInput = {
    id?: string
    name: string
    description?: string | null
    visibility?: $Enums.PortfolioVisibility
    cash?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutPortfoliosInput
    holdings?: HoldingCreateNestedManyWithoutPortfolioInput
    sharedAccess?: SharedPortfolioAccessCreateNestedManyWithoutPortfolioInput
  }

  export type PortfolioUncheckedCreateWithoutAiInsightsInput = {
    id?: string
    name: string
    description?: string | null
    visibility?: $Enums.PortfolioVisibility
    userId: string
    cash?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    holdings?: HoldingUncheckedCreateNestedManyWithoutPortfolioInput
    sharedAccess?: SharedPortfolioAccessUncheckedCreateNestedManyWithoutPortfolioInput
  }

  export type PortfolioCreateOrConnectWithoutAiInsightsInput = {
    where: PortfolioWhereUniqueInput
    create: XOR<PortfolioCreateWithoutAiInsightsInput, PortfolioUncheckedCreateWithoutAiInsightsInput>
  }

  export type PortfolioUpsertWithoutAiInsightsInput = {
    update: XOR<PortfolioUpdateWithoutAiInsightsInput, PortfolioUncheckedUpdateWithoutAiInsightsInput>
    create: XOR<PortfolioCreateWithoutAiInsightsInput, PortfolioUncheckedCreateWithoutAiInsightsInput>
    where?: PortfolioWhereInput
  }

  export type PortfolioUpdateToOneWithWhereWithoutAiInsightsInput = {
    where?: PortfolioWhereInput
    data: XOR<PortfolioUpdateWithoutAiInsightsInput, PortfolioUncheckedUpdateWithoutAiInsightsInput>
  }

  export type PortfolioUpdateWithoutAiInsightsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    visibility?: EnumPortfolioVisibilityFieldUpdateOperationsInput | $Enums.PortfolioVisibility
    cash?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPortfoliosNestedInput
    holdings?: HoldingUpdateManyWithoutPortfolioNestedInput
    sharedAccess?: SharedPortfolioAccessUpdateManyWithoutPortfolioNestedInput
  }

  export type PortfolioUncheckedUpdateWithoutAiInsightsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    visibility?: EnumPortfolioVisibilityFieldUpdateOperationsInput | $Enums.PortfolioVisibility
    userId?: StringFieldUpdateOperationsInput | string
    cash?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    holdings?: HoldingUncheckedUpdateManyWithoutPortfolioNestedInput
    sharedAccess?: SharedPortfolioAccessUncheckedUpdateManyWithoutPortfolioNestedInput
  }

  export type PortfolioCreateManyUserInput = {
    id?: string
    name: string
    description?: string | null
    visibility?: $Enums.PortfolioVisibility
    cash?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SharedPortfolioAccessCreateManyViewerInput = {
    id?: string
    token: string
    portfolioId: string
    fingerprint?: string | null
    isActive?: boolean
    expiresAt?: Date | string | null
    viewCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PortfolioUpdateWithoutUserInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    visibility?: EnumPortfolioVisibilityFieldUpdateOperationsInput | $Enums.PortfolioVisibility
    cash?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    holdings?: HoldingUpdateManyWithoutPortfolioNestedInput
    sharedAccess?: SharedPortfolioAccessUpdateManyWithoutPortfolioNestedInput
    aiInsights?: AIInsightUpdateManyWithoutPortfolioNestedInput
  }

  export type PortfolioUncheckedUpdateWithoutUserInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    visibility?: EnumPortfolioVisibilityFieldUpdateOperationsInput | $Enums.PortfolioVisibility
    cash?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    holdings?: HoldingUncheckedUpdateManyWithoutPortfolioNestedInput
    sharedAccess?: SharedPortfolioAccessUncheckedUpdateManyWithoutPortfolioNestedInput
    aiInsights?: AIInsightUncheckedUpdateManyWithoutPortfolioNestedInput
  }

  export type PortfolioUncheckedUpdateManyWithoutUserInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    visibility?: EnumPortfolioVisibilityFieldUpdateOperationsInput | $Enums.PortfolioVisibility
    cash?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SharedPortfolioAccessUpdateWithoutViewerInput = {
    token?: StringFieldUpdateOperationsInput | string
    fingerprint?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    viewCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    portfolio?: PortfolioUpdateOneRequiredWithoutSharedAccessNestedInput
    accessLogs?: TokenAccessLogUpdateManyWithoutAccessNestedInput
  }

  export type SharedPortfolioAccessUncheckedUpdateWithoutViewerInput = {
    token?: StringFieldUpdateOperationsInput | string
    portfolioId?: StringFieldUpdateOperationsInput | string
    fingerprint?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    viewCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accessLogs?: TokenAccessLogUncheckedUpdateManyWithoutAccessNestedInput
  }

  export type SharedPortfolioAccessUncheckedUpdateManyWithoutViewerInput = {
    token?: StringFieldUpdateOperationsInput | string
    portfolioId?: StringFieldUpdateOperationsInput | string
    fingerprint?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    viewCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HoldingCreateManyPortfolioInput = {
    id?: string
    ticker: string
    quantity: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SharedPortfolioAccessCreateManyPortfolioInput = {
    id?: string
    token: string
    viewerId?: string | null
    fingerprint?: string | null
    isActive?: boolean
    expiresAt?: Date | string | null
    viewCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AIInsightCreateManyPortfolioInput = {
    id?: string
    summary: string
    diversification: string
    sectorExposure: string
    investmentThesis: string
    fullAnalysis?: string | null
    generatedAt?: Date | string
  }

  export type HoldingUpdateWithoutPortfolioInput = {
    ticker?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HoldingUncheckedUpdateWithoutPortfolioInput = {
    ticker?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HoldingUncheckedUpdateManyWithoutPortfolioInput = {
    ticker?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SharedPortfolioAccessUpdateWithoutPortfolioInput = {
    token?: StringFieldUpdateOperationsInput | string
    fingerprint?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    viewCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    viewer?: UserUpdateOneWithoutAccessedSharesNestedInput
    accessLogs?: TokenAccessLogUpdateManyWithoutAccessNestedInput
  }

  export type SharedPortfolioAccessUncheckedUpdateWithoutPortfolioInput = {
    token?: StringFieldUpdateOperationsInput | string
    viewerId?: NullableStringFieldUpdateOperationsInput | string | null
    fingerprint?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    viewCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accessLogs?: TokenAccessLogUncheckedUpdateManyWithoutAccessNestedInput
  }

  export type SharedPortfolioAccessUncheckedUpdateManyWithoutPortfolioInput = {
    token?: StringFieldUpdateOperationsInput | string
    viewerId?: NullableStringFieldUpdateOperationsInput | string | null
    fingerprint?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    viewCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AIInsightUpdateWithoutPortfolioInput = {
    summary?: StringFieldUpdateOperationsInput | string
    diversification?: StringFieldUpdateOperationsInput | string
    sectorExposure?: StringFieldUpdateOperationsInput | string
    investmentThesis?: StringFieldUpdateOperationsInput | string
    fullAnalysis?: NullableStringFieldUpdateOperationsInput | string | null
    generatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AIInsightUncheckedUpdateWithoutPortfolioInput = {
    summary?: StringFieldUpdateOperationsInput | string
    diversification?: StringFieldUpdateOperationsInput | string
    sectorExposure?: StringFieldUpdateOperationsInput | string
    investmentThesis?: StringFieldUpdateOperationsInput | string
    fullAnalysis?: NullableStringFieldUpdateOperationsInput | string | null
    generatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AIInsightUncheckedUpdateManyWithoutPortfolioInput = {
    summary?: StringFieldUpdateOperationsInput | string
    diversification?: StringFieldUpdateOperationsInput | string
    sectorExposure?: StringFieldUpdateOperationsInput | string
    investmentThesis?: StringFieldUpdateOperationsInput | string
    fullAnalysis?: NullableStringFieldUpdateOperationsInput | string | null
    generatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TokenAccessLogCreateManyAccessInput = {
    id?: string
    ip?: string | null
    userAgent?: string | null
    viewedAt?: Date | string
  }

  export type TokenAccessLogUpdateWithoutAccessInput = {
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    viewedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TokenAccessLogUncheckedUpdateWithoutAccessInput = {
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    viewedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TokenAccessLogUncheckedUpdateManyWithoutAccessInput = {
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    viewedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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