
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Category
 * 
 */
export type Category = $Result.DefaultSelection<Prisma.$CategoryPayload>
/**
 * Model Platform
 * 
 */
export type Platform = $Result.DefaultSelection<Prisma.$PlatformPayload>
/**
 * Model Tool
 * 
 */
export type Tool = $Result.DefaultSelection<Prisma.$ToolPayload>
/**
 * Model ToolCategory
 * 
 */
export type ToolCategory = $Result.DefaultSelection<Prisma.$ToolCategoryPayload>
/**
 * Model ToolPlatform
 * 
 */
export type ToolPlatform = $Result.DefaultSelection<Prisma.$ToolPlatformPayload>
/**
 * Model ToolCapability
 * 
 */
export type ToolCapability = $Result.DefaultSelection<Prisma.$ToolCapabilityPayload>
/**
 * Model ToolUseCase
 * 
 */
export type ToolUseCase = $Result.DefaultSelection<Prisma.$ToolUseCasePayload>
/**
 * Model ToolScreenshot
 * 
 */
export type ToolScreenshot = $Result.DefaultSelection<Prisma.$ToolScreenshotPayload>
/**
 * Model NewsArticle
 * 
 */
export type NewsArticle = $Result.DefaultSelection<Prisma.$NewsArticlePayload>
/**
 * Model NewsArticleTool
 * 
 */
export type NewsArticleTool = $Result.DefaultSelection<Prisma.$NewsArticleToolPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const PricingModel: {
  FREE: 'FREE',
  FREEMIUM: 'FREEMIUM',
  PAID: 'PAID',
  FREE_TRIAL: 'FREE_TRIAL',
  CONTACT: 'CONTACT'
};

export type PricingModel = (typeof PricingModel)[keyof typeof PricingModel]


export const ToolStatus: {
  DRAFT: 'DRAFT',
  PUBLISHED: 'PUBLISHED',
  ARCHIVED: 'ARCHIVED'
};

export type ToolStatus = (typeof ToolStatus)[keyof typeof ToolStatus]


export const NewsStatus: {
  DRAFT: 'DRAFT',
  PUBLISHED: 'PUBLISHED',
  ARCHIVED: 'ARCHIVED'
};

export type NewsStatus = (typeof NewsStatus)[keyof typeof NewsStatus]

}

export type PricingModel = $Enums.PricingModel

export const PricingModel: typeof $Enums.PricingModel

export type ToolStatus = $Enums.ToolStatus

export const ToolStatus: typeof $Enums.ToolStatus

export type NewsStatus = $Enums.NewsStatus

export const NewsStatus: typeof $Enums.NewsStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Categories
 * const categories = await prisma.category.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
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
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Categories
   * const categories = await prisma.category.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.PrismaClientConstructorArgs<ClientOptions>);
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.category`: Exposes CRUD operations for the **Category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.CategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.platform`: Exposes CRUD operations for the **Platform** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Platforms
    * const platforms = await prisma.platform.findMany()
    * ```
    */
  get platform(): Prisma.PlatformDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tool`: Exposes CRUD operations for the **Tool** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tools
    * const tools = await prisma.tool.findMany()
    * ```
    */
  get tool(): Prisma.ToolDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.toolCategory`: Exposes CRUD operations for the **ToolCategory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ToolCategories
    * const toolCategories = await prisma.toolCategory.findMany()
    * ```
    */
  get toolCategory(): Prisma.ToolCategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.toolPlatform`: Exposes CRUD operations for the **ToolPlatform** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ToolPlatforms
    * const toolPlatforms = await prisma.toolPlatform.findMany()
    * ```
    */
  get toolPlatform(): Prisma.ToolPlatformDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.toolCapability`: Exposes CRUD operations for the **ToolCapability** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ToolCapabilities
    * const toolCapabilities = await prisma.toolCapability.findMany()
    * ```
    */
  get toolCapability(): Prisma.ToolCapabilityDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.toolUseCase`: Exposes CRUD operations for the **ToolUseCase** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ToolUseCases
    * const toolUseCases = await prisma.toolUseCase.findMany()
    * ```
    */
  get toolUseCase(): Prisma.ToolUseCaseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.toolScreenshot`: Exposes CRUD operations for the **ToolScreenshot** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ToolScreenshots
    * const toolScreenshots = await prisma.toolScreenshot.findMany()
    * ```
    */
  get toolScreenshot(): Prisma.ToolScreenshotDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.newsArticle`: Exposes CRUD operations for the **NewsArticle** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more NewsArticles
    * const newsArticles = await prisma.newsArticle.findMany()
    * ```
    */
  get newsArticle(): Prisma.NewsArticleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.newsArticleTool`: Exposes CRUD operations for the **NewsArticleTool** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more NewsArticleTools
    * const newsArticleTools = await prisma.newsArticleTool.findMany()
    * ```
    */
  get newsArticleTool(): Prisma.NewsArticleToolDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.10.0
   * Query Engine version: 0edf323efd1d98336f3f0a68684b56f689b900d3
   */
  export type PrismaVersion = {
    client: string
    engine: string
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
   * Resolved type of the argument passed to the `PrismaClient` constructor.
   *
   * When called without a narrower options type (the common case), this resolves
   * to `PrismaClientOptions` directly, which produces a clear TypeScript error
   * message (`not assignable to parameter of type 'PrismaClientOptions'`) when
   * the argument is missing or incomplete. When the user supplies a narrower
   * options type (e.g. via a literal), it falls back to `Subset` to keep
   * filtering out unknown properties.
   */
  export type PrismaClientConstructorArgs<Options extends PrismaClientOptions> =
    [PrismaClientOptions] extends [Options] ? PrismaClientOptions : Subset<Options, PrismaClientOptions>;

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
      ((Without<T, U> & U) | (Without<U, T> & T)) & object
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
    Category: 'Category',
    Platform: 'Platform',
    Tool: 'Tool',
    ToolCategory: 'ToolCategory',
    ToolPlatform: 'ToolPlatform',
    ToolCapability: 'ToolCapability',
    ToolUseCase: 'ToolUseCase',
    ToolScreenshot: 'ToolScreenshot',
    NewsArticle: 'NewsArticle',
    NewsArticleTool: 'NewsArticleTool'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "category" | "platform" | "tool" | "toolCategory" | "toolPlatform" | "toolCapability" | "toolUseCase" | "toolScreenshot" | "newsArticle" | "newsArticleTool"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
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
          updateManyAndReturn: {
            args: Prisma.CategoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
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
      Platform: {
        payload: Prisma.$PlatformPayload<ExtArgs>
        fields: Prisma.PlatformFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PlatformFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlatformPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PlatformFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlatformPayload>
          }
          findFirst: {
            args: Prisma.PlatformFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlatformPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PlatformFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlatformPayload>
          }
          findMany: {
            args: Prisma.PlatformFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlatformPayload>[]
          }
          create: {
            args: Prisma.PlatformCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlatformPayload>
          }
          createMany: {
            args: Prisma.PlatformCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PlatformCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlatformPayload>[]
          }
          delete: {
            args: Prisma.PlatformDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlatformPayload>
          }
          update: {
            args: Prisma.PlatformUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlatformPayload>
          }
          deleteMany: {
            args: Prisma.PlatformDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PlatformUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PlatformUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlatformPayload>[]
          }
          upsert: {
            args: Prisma.PlatformUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlatformPayload>
          }
          aggregate: {
            args: Prisma.PlatformAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlatform>
          }
          groupBy: {
            args: Prisma.PlatformGroupByArgs<ExtArgs>
            result: $Utils.Optional<PlatformGroupByOutputType>[]
          }
          count: {
            args: Prisma.PlatformCountArgs<ExtArgs>
            result: $Utils.Optional<PlatformCountAggregateOutputType> | number
          }
        }
      }
      Tool: {
        payload: Prisma.$ToolPayload<ExtArgs>
        fields: Prisma.ToolFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ToolFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ToolPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ToolFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ToolPayload>
          }
          findFirst: {
            args: Prisma.ToolFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ToolPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ToolFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ToolPayload>
          }
          findMany: {
            args: Prisma.ToolFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ToolPayload>[]
          }
          create: {
            args: Prisma.ToolCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ToolPayload>
          }
          createMany: {
            args: Prisma.ToolCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ToolCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ToolPayload>[]
          }
          delete: {
            args: Prisma.ToolDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ToolPayload>
          }
          update: {
            args: Prisma.ToolUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ToolPayload>
          }
          deleteMany: {
            args: Prisma.ToolDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ToolUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ToolUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ToolPayload>[]
          }
          upsert: {
            args: Prisma.ToolUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ToolPayload>
          }
          aggregate: {
            args: Prisma.ToolAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTool>
          }
          groupBy: {
            args: Prisma.ToolGroupByArgs<ExtArgs>
            result: $Utils.Optional<ToolGroupByOutputType>[]
          }
          count: {
            args: Prisma.ToolCountArgs<ExtArgs>
            result: $Utils.Optional<ToolCountAggregateOutputType> | number
          }
        }
      }
      ToolCategory: {
        payload: Prisma.$ToolCategoryPayload<ExtArgs>
        fields: Prisma.ToolCategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ToolCategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ToolCategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ToolCategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ToolCategoryPayload>
          }
          findFirst: {
            args: Prisma.ToolCategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ToolCategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ToolCategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ToolCategoryPayload>
          }
          findMany: {
            args: Prisma.ToolCategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ToolCategoryPayload>[]
          }
          create: {
            args: Prisma.ToolCategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ToolCategoryPayload>
          }
          createMany: {
            args: Prisma.ToolCategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ToolCategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ToolCategoryPayload>[]
          }
          delete: {
            args: Prisma.ToolCategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ToolCategoryPayload>
          }
          update: {
            args: Prisma.ToolCategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ToolCategoryPayload>
          }
          deleteMany: {
            args: Prisma.ToolCategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ToolCategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ToolCategoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ToolCategoryPayload>[]
          }
          upsert: {
            args: Prisma.ToolCategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ToolCategoryPayload>
          }
          aggregate: {
            args: Prisma.ToolCategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateToolCategory>
          }
          groupBy: {
            args: Prisma.ToolCategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<ToolCategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.ToolCategoryCountArgs<ExtArgs>
            result: $Utils.Optional<ToolCategoryCountAggregateOutputType> | number
          }
        }
      }
      ToolPlatform: {
        payload: Prisma.$ToolPlatformPayload<ExtArgs>
        fields: Prisma.ToolPlatformFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ToolPlatformFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ToolPlatformPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ToolPlatformFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ToolPlatformPayload>
          }
          findFirst: {
            args: Prisma.ToolPlatformFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ToolPlatformPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ToolPlatformFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ToolPlatformPayload>
          }
          findMany: {
            args: Prisma.ToolPlatformFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ToolPlatformPayload>[]
          }
          create: {
            args: Prisma.ToolPlatformCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ToolPlatformPayload>
          }
          createMany: {
            args: Prisma.ToolPlatformCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ToolPlatformCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ToolPlatformPayload>[]
          }
          delete: {
            args: Prisma.ToolPlatformDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ToolPlatformPayload>
          }
          update: {
            args: Prisma.ToolPlatformUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ToolPlatformPayload>
          }
          deleteMany: {
            args: Prisma.ToolPlatformDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ToolPlatformUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ToolPlatformUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ToolPlatformPayload>[]
          }
          upsert: {
            args: Prisma.ToolPlatformUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ToolPlatformPayload>
          }
          aggregate: {
            args: Prisma.ToolPlatformAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateToolPlatform>
          }
          groupBy: {
            args: Prisma.ToolPlatformGroupByArgs<ExtArgs>
            result: $Utils.Optional<ToolPlatformGroupByOutputType>[]
          }
          count: {
            args: Prisma.ToolPlatformCountArgs<ExtArgs>
            result: $Utils.Optional<ToolPlatformCountAggregateOutputType> | number
          }
        }
      }
      ToolCapability: {
        payload: Prisma.$ToolCapabilityPayload<ExtArgs>
        fields: Prisma.ToolCapabilityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ToolCapabilityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ToolCapabilityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ToolCapabilityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ToolCapabilityPayload>
          }
          findFirst: {
            args: Prisma.ToolCapabilityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ToolCapabilityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ToolCapabilityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ToolCapabilityPayload>
          }
          findMany: {
            args: Prisma.ToolCapabilityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ToolCapabilityPayload>[]
          }
          create: {
            args: Prisma.ToolCapabilityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ToolCapabilityPayload>
          }
          createMany: {
            args: Prisma.ToolCapabilityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ToolCapabilityCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ToolCapabilityPayload>[]
          }
          delete: {
            args: Prisma.ToolCapabilityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ToolCapabilityPayload>
          }
          update: {
            args: Prisma.ToolCapabilityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ToolCapabilityPayload>
          }
          deleteMany: {
            args: Prisma.ToolCapabilityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ToolCapabilityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ToolCapabilityUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ToolCapabilityPayload>[]
          }
          upsert: {
            args: Prisma.ToolCapabilityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ToolCapabilityPayload>
          }
          aggregate: {
            args: Prisma.ToolCapabilityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateToolCapability>
          }
          groupBy: {
            args: Prisma.ToolCapabilityGroupByArgs<ExtArgs>
            result: $Utils.Optional<ToolCapabilityGroupByOutputType>[]
          }
          count: {
            args: Prisma.ToolCapabilityCountArgs<ExtArgs>
            result: $Utils.Optional<ToolCapabilityCountAggregateOutputType> | number
          }
        }
      }
      ToolUseCase: {
        payload: Prisma.$ToolUseCasePayload<ExtArgs>
        fields: Prisma.ToolUseCaseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ToolUseCaseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ToolUseCasePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ToolUseCaseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ToolUseCasePayload>
          }
          findFirst: {
            args: Prisma.ToolUseCaseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ToolUseCasePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ToolUseCaseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ToolUseCasePayload>
          }
          findMany: {
            args: Prisma.ToolUseCaseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ToolUseCasePayload>[]
          }
          create: {
            args: Prisma.ToolUseCaseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ToolUseCasePayload>
          }
          createMany: {
            args: Prisma.ToolUseCaseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ToolUseCaseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ToolUseCasePayload>[]
          }
          delete: {
            args: Prisma.ToolUseCaseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ToolUseCasePayload>
          }
          update: {
            args: Prisma.ToolUseCaseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ToolUseCasePayload>
          }
          deleteMany: {
            args: Prisma.ToolUseCaseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ToolUseCaseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ToolUseCaseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ToolUseCasePayload>[]
          }
          upsert: {
            args: Prisma.ToolUseCaseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ToolUseCasePayload>
          }
          aggregate: {
            args: Prisma.ToolUseCaseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateToolUseCase>
          }
          groupBy: {
            args: Prisma.ToolUseCaseGroupByArgs<ExtArgs>
            result: $Utils.Optional<ToolUseCaseGroupByOutputType>[]
          }
          count: {
            args: Prisma.ToolUseCaseCountArgs<ExtArgs>
            result: $Utils.Optional<ToolUseCaseCountAggregateOutputType> | number
          }
        }
      }
      ToolScreenshot: {
        payload: Prisma.$ToolScreenshotPayload<ExtArgs>
        fields: Prisma.ToolScreenshotFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ToolScreenshotFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ToolScreenshotPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ToolScreenshotFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ToolScreenshotPayload>
          }
          findFirst: {
            args: Prisma.ToolScreenshotFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ToolScreenshotPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ToolScreenshotFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ToolScreenshotPayload>
          }
          findMany: {
            args: Prisma.ToolScreenshotFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ToolScreenshotPayload>[]
          }
          create: {
            args: Prisma.ToolScreenshotCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ToolScreenshotPayload>
          }
          createMany: {
            args: Prisma.ToolScreenshotCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ToolScreenshotCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ToolScreenshotPayload>[]
          }
          delete: {
            args: Prisma.ToolScreenshotDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ToolScreenshotPayload>
          }
          update: {
            args: Prisma.ToolScreenshotUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ToolScreenshotPayload>
          }
          deleteMany: {
            args: Prisma.ToolScreenshotDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ToolScreenshotUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ToolScreenshotUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ToolScreenshotPayload>[]
          }
          upsert: {
            args: Prisma.ToolScreenshotUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ToolScreenshotPayload>
          }
          aggregate: {
            args: Prisma.ToolScreenshotAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateToolScreenshot>
          }
          groupBy: {
            args: Prisma.ToolScreenshotGroupByArgs<ExtArgs>
            result: $Utils.Optional<ToolScreenshotGroupByOutputType>[]
          }
          count: {
            args: Prisma.ToolScreenshotCountArgs<ExtArgs>
            result: $Utils.Optional<ToolScreenshotCountAggregateOutputType> | number
          }
        }
      }
      NewsArticle: {
        payload: Prisma.$NewsArticlePayload<ExtArgs>
        fields: Prisma.NewsArticleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NewsArticleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsArticlePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NewsArticleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsArticlePayload>
          }
          findFirst: {
            args: Prisma.NewsArticleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsArticlePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NewsArticleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsArticlePayload>
          }
          findMany: {
            args: Prisma.NewsArticleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsArticlePayload>[]
          }
          create: {
            args: Prisma.NewsArticleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsArticlePayload>
          }
          createMany: {
            args: Prisma.NewsArticleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NewsArticleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsArticlePayload>[]
          }
          delete: {
            args: Prisma.NewsArticleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsArticlePayload>
          }
          update: {
            args: Prisma.NewsArticleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsArticlePayload>
          }
          deleteMany: {
            args: Prisma.NewsArticleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NewsArticleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NewsArticleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsArticlePayload>[]
          }
          upsert: {
            args: Prisma.NewsArticleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsArticlePayload>
          }
          aggregate: {
            args: Prisma.NewsArticleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNewsArticle>
          }
          groupBy: {
            args: Prisma.NewsArticleGroupByArgs<ExtArgs>
            result: $Utils.Optional<NewsArticleGroupByOutputType>[]
          }
          count: {
            args: Prisma.NewsArticleCountArgs<ExtArgs>
            result: $Utils.Optional<NewsArticleCountAggregateOutputType> | number
          }
        }
      }
      NewsArticleTool: {
        payload: Prisma.$NewsArticleToolPayload<ExtArgs>
        fields: Prisma.NewsArticleToolFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NewsArticleToolFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsArticleToolPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NewsArticleToolFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsArticleToolPayload>
          }
          findFirst: {
            args: Prisma.NewsArticleToolFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsArticleToolPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NewsArticleToolFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsArticleToolPayload>
          }
          findMany: {
            args: Prisma.NewsArticleToolFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsArticleToolPayload>[]
          }
          create: {
            args: Prisma.NewsArticleToolCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsArticleToolPayload>
          }
          createMany: {
            args: Prisma.NewsArticleToolCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NewsArticleToolCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsArticleToolPayload>[]
          }
          delete: {
            args: Prisma.NewsArticleToolDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsArticleToolPayload>
          }
          update: {
            args: Prisma.NewsArticleToolUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsArticleToolPayload>
          }
          deleteMany: {
            args: Prisma.NewsArticleToolDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NewsArticleToolUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NewsArticleToolUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsArticleToolPayload>[]
          }
          upsert: {
            args: Prisma.NewsArticleToolUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsArticleToolPayload>
          }
          aggregate: {
            args: Prisma.NewsArticleToolAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNewsArticleTool>
          }
          groupBy: {
            args: Prisma.NewsArticleToolGroupByArgs<ExtArgs>
            result: $Utils.Optional<NewsArticleToolGroupByOutputType>[]
          }
          count: {
            args: Prisma.NewsArticleToolCountArgs<ExtArgs>
            result: $Utils.Optional<NewsArticleToolCountAggregateOutputType> | number
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
     * Read more in our [docs](https://pris.ly/d/logging).
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
     * A driver adapter that PrismaClient uses to connect to your database, such as the ones provided by `@prisma/adapter-pg`, `@prisma/adapter-libsql`, `@prisma/adapter-planetscale`, etc.
     * 
     * A driver adapter is **required** unless you connect to your database through Prisma Accelerate (in which case use `accelerateUrl` instead).
     * 
     * Learn more: https://pris.ly/d/driver-adapters
     * 
     * @example
     * ```ts
     * import { PrismaPg } from '@prisma/adapter-pg'
     * import { PrismaClient } from './generated/prisma/client'
     * 
     * const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL })
     * const prisma = new PrismaClient({ adapter })
     * ```
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * The Prisma Accelerate connection URL. Use this option to connect to your database through Prisma Accelerate instead of using a driver adapter to connect directly.
     * 
     * Learn more: https://pris.ly/d/accelerate
     */
    accelerateUrl?: string
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
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    category?: CategoryOmit
    platform?: PlatformOmit
    tool?: ToolOmit
    toolCategory?: ToolCategoryOmit
    toolPlatform?: ToolPlatformOmit
    toolCapability?: ToolCapabilityOmit
    toolUseCase?: ToolUseCaseOmit
    toolScreenshot?: ToolScreenshotOmit
    newsArticle?: NewsArticleOmit
    newsArticleTool?: NewsArticleToolOmit
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
   * Count Type CategoryCountOutputType
   */

  export type CategoryCountOutputType = {
    tools: number
    news: number
  }

  export type CategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tools?: boolean | CategoryCountOutputTypeCountToolsArgs
    news?: boolean | CategoryCountOutputTypeCountNewsArgs
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
  export type CategoryCountOutputTypeCountToolsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ToolCategoryWhereInput
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountNewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NewsArticleWhereInput
  }


  /**
   * Count Type PlatformCountOutputType
   */

  export type PlatformCountOutputType = {
    tools: number
  }

  export type PlatformCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tools?: boolean | PlatformCountOutputTypeCountToolsArgs
  }

  // Custom InputTypes
  /**
   * PlatformCountOutputType without action
   */
  export type PlatformCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlatformCountOutputType
     */
    select?: PlatformCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PlatformCountOutputType without action
   */
  export type PlatformCountOutputTypeCountToolsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ToolPlatformWhereInput
  }


  /**
   * Count Type ToolCountOutputType
   */

  export type ToolCountOutputType = {
    categories: number
    platforms: number
    capabilities: number
    useCases: number
    screenshots: number
    news: number
  }

  export type ToolCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categories?: boolean | ToolCountOutputTypeCountCategoriesArgs
    platforms?: boolean | ToolCountOutputTypeCountPlatformsArgs
    capabilities?: boolean | ToolCountOutputTypeCountCapabilitiesArgs
    useCases?: boolean | ToolCountOutputTypeCountUseCasesArgs
    screenshots?: boolean | ToolCountOutputTypeCountScreenshotsArgs
    news?: boolean | ToolCountOutputTypeCountNewsArgs
  }

  // Custom InputTypes
  /**
   * ToolCountOutputType without action
   */
  export type ToolCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ToolCountOutputType
     */
    select?: ToolCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ToolCountOutputType without action
   */
  export type ToolCountOutputTypeCountCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ToolCategoryWhereInput
  }

  /**
   * ToolCountOutputType without action
   */
  export type ToolCountOutputTypeCountPlatformsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ToolPlatformWhereInput
  }

  /**
   * ToolCountOutputType without action
   */
  export type ToolCountOutputTypeCountCapabilitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ToolCapabilityWhereInput
  }

  /**
   * ToolCountOutputType without action
   */
  export type ToolCountOutputTypeCountUseCasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ToolUseCaseWhereInput
  }

  /**
   * ToolCountOutputType without action
   */
  export type ToolCountOutputTypeCountScreenshotsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ToolScreenshotWhereInput
  }

  /**
   * ToolCountOutputType without action
   */
  export type ToolCountOutputTypeCountNewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NewsArticleToolWhereInput
  }


  /**
   * Count Type NewsArticleCountOutputType
   */

  export type NewsArticleCountOutputType = {
    tools: number
  }

  export type NewsArticleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tools?: boolean | NewsArticleCountOutputTypeCountToolsArgs
  }

  // Custom InputTypes
  /**
   * NewsArticleCountOutputType without action
   */
  export type NewsArticleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsArticleCountOutputType
     */
    select?: NewsArticleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * NewsArticleCountOutputType without action
   */
  export type NewsArticleCountOutputTypeCountToolsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NewsArticleToolWhereInput
  }


  /**
   * Models
   */

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
    sortOrder: number | null
  }

  export type CategorySumAggregateOutputType = {
    sortOrder: number | null
  }

  export type CategoryMinAggregateOutputType = {
    id: string | null
    slug: string | null
    name: string | null
    description: string | null
    accent: string | null
    sortOrder: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CategoryMaxAggregateOutputType = {
    id: string | null
    slug: string | null
    name: string | null
    description: string | null
    accent: string | null
    sortOrder: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CategoryCountAggregateOutputType = {
    id: number
    slug: number
    name: number
    description: number
    accent: number
    sortOrder: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CategoryAvgAggregateInputType = {
    sortOrder?: true
  }

  export type CategorySumAggregateInputType = {
    sortOrder?: true
  }

  export type CategoryMinAggregateInputType = {
    id?: true
    slug?: true
    name?: true
    description?: true
    accent?: true
    sortOrder?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CategoryMaxAggregateInputType = {
    id?: true
    slug?: true
    name?: true
    description?: true
    accent?: true
    sortOrder?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CategoryCountAggregateInputType = {
    id?: true
    slug?: true
    name?: true
    description?: true
    accent?: true
    sortOrder?: true
    createdAt?: true
    updatedAt?: true
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
    id: string
    slug: string
    name: string
    description: string | null
    accent: string | null
    sortOrder: number
    createdAt: Date
    updatedAt: Date
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
    slug?: boolean
    name?: boolean
    description?: boolean
    accent?: boolean
    sortOrder?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tools?: boolean | Category$toolsArgs<ExtArgs>
    news?: boolean | Category$newsArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    name?: boolean
    description?: boolean
    accent?: boolean
    sortOrder?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["category"]>

  export type CategorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    name?: boolean
    description?: boolean
    accent?: boolean
    sortOrder?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["category"]>

  export type CategorySelectScalar = {
    id?: boolean
    slug?: boolean
    name?: boolean
    description?: boolean
    accent?: boolean
    sortOrder?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "slug" | "name" | "description" | "accent" | "sortOrder" | "createdAt" | "updatedAt", ExtArgs["result"]["category"]>
  export type CategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tools?: boolean | Category$toolsArgs<ExtArgs>
    news?: boolean | Category$newsArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CategoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Category"
    objects: {
      tools: Prisma.$ToolCategoryPayload<ExtArgs>[]
      news: Prisma.$NewsArticlePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      slug: string
      name: string
      description: string | null
      accent: string | null
      sortOrder: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["category"]>
    composites: {}
  }

  type CategoryGetPayload<S extends boolean | null | undefined | CategoryDefaultArgs> = $Result.GetResult<Prisma.$CategoryPayload, S>

  type CategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoryCountAggregateInputType | true
    }

  export interface CategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
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
    findUnique<T extends CategoryFindUniqueArgs>(args: SelectSubset<T, CategoryFindUniqueArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
    findUniqueOrThrow<T extends CategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    findFirst<T extends CategoryFindFirstArgs>(args?: SelectSubset<T, CategoryFindFirstArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
    findFirstOrThrow<T extends CategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    findMany<T extends CategoryFindManyArgs>(args?: SelectSubset<T, CategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

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
    create<T extends CategoryCreateArgs>(args: SelectSubset<T, CategoryCreateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    createManyAndReturn<T extends CategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, CategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

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
    delete<T extends CategoryDeleteArgs>(args: SelectSubset<T, CategoryDeleteArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    update<T extends CategoryUpdateArgs>(args: SelectSubset<T, CategoryUpdateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     * Update zero or more Categories and returns the data updated in the database.
     * @param {CategoryUpdateManyAndReturnArgs} args - Arguments to update many Categories.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.updateManyAndReturn({
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
    updateManyAndReturn<T extends CategoryUpdateManyAndReturnArgs>(args: SelectSubset<T, CategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

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
    upsert<T extends CategoryUpsertArgs>(args: SelectSubset<T, CategoryUpsertArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


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
  export interface Prisma__CategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tools<T extends Category$toolsArgs<ExtArgs> = {}>(args?: Subset<T, Category$toolsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ToolCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    news<T extends Category$newsArgs<ExtArgs> = {}>(args?: Subset<T, Category$newsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsArticlePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly id: FieldRef<"Category", 'String'>
    readonly slug: FieldRef<"Category", 'String'>
    readonly name: FieldRef<"Category", 'String'>
    readonly description: FieldRef<"Category", 'String'>
    readonly accent: FieldRef<"Category", 'String'>
    readonly sortOrder: FieldRef<"Category", 'Int'>
    readonly createdAt: FieldRef<"Category", 'DateTime'>
    readonly updatedAt: FieldRef<"Category", 'DateTime'>
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
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
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
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
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
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
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
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
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
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
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
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
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
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
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
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
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
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
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
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Category updateManyAndReturn
   */
  export type CategoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
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
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
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
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
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
    /**
     * Limit how many Categories to delete.
     */
    limit?: number
  }

  /**
   * Category.tools
   */
  export type Category$toolsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ToolCategory
     */
    select?: ToolCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ToolCategory
     */
    omit?: ToolCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToolCategoryInclude<ExtArgs> | null
    where?: ToolCategoryWhereInput
    orderBy?: ToolCategoryOrderByWithRelationInput | ToolCategoryOrderByWithRelationInput[]
    cursor?: ToolCategoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ToolCategoryScalarFieldEnum | ToolCategoryScalarFieldEnum[]
  }

  /**
   * Category.news
   */
  export type Category$newsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsArticle
     */
    select?: NewsArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsArticle
     */
    omit?: NewsArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsArticleInclude<ExtArgs> | null
    where?: NewsArticleWhereInput
    orderBy?: NewsArticleOrderByWithRelationInput | NewsArticleOrderByWithRelationInput[]
    cursor?: NewsArticleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NewsArticleScalarFieldEnum | NewsArticleScalarFieldEnum[]
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
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
  }


  /**
   * Model Platform
   */

  export type AggregatePlatform = {
    _count: PlatformCountAggregateOutputType | null
    _avg: PlatformAvgAggregateOutputType | null
    _sum: PlatformSumAggregateOutputType | null
    _min: PlatformMinAggregateOutputType | null
    _max: PlatformMaxAggregateOutputType | null
  }

  export type PlatformAvgAggregateOutputType = {
    sortOrder: number | null
  }

  export type PlatformSumAggregateOutputType = {
    sortOrder: number | null
  }

  export type PlatformMinAggregateOutputType = {
    id: string | null
    slug: string | null
    name: string | null
    description: string | null
    sortOrder: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PlatformMaxAggregateOutputType = {
    id: string | null
    slug: string | null
    name: string | null
    description: string | null
    sortOrder: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PlatformCountAggregateOutputType = {
    id: number
    slug: number
    name: number
    description: number
    sortOrder: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PlatformAvgAggregateInputType = {
    sortOrder?: true
  }

  export type PlatformSumAggregateInputType = {
    sortOrder?: true
  }

  export type PlatformMinAggregateInputType = {
    id?: true
    slug?: true
    name?: true
    description?: true
    sortOrder?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PlatformMaxAggregateInputType = {
    id?: true
    slug?: true
    name?: true
    description?: true
    sortOrder?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PlatformCountAggregateInputType = {
    id?: true
    slug?: true
    name?: true
    description?: true
    sortOrder?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PlatformAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Platform to aggregate.
     */
    where?: PlatformWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Platforms to fetch.
     */
    orderBy?: PlatformOrderByWithRelationInput | PlatformOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PlatformWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Platforms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Platforms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Platforms
    **/
    _count?: true | PlatformCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PlatformAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PlatformSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlatformMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlatformMaxAggregateInputType
  }

  export type GetPlatformAggregateType<T extends PlatformAggregateArgs> = {
        [P in keyof T & keyof AggregatePlatform]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlatform[P]>
      : GetScalarType<T[P], AggregatePlatform[P]>
  }




  export type PlatformGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlatformWhereInput
    orderBy?: PlatformOrderByWithAggregationInput | PlatformOrderByWithAggregationInput[]
    by: PlatformScalarFieldEnum[] | PlatformScalarFieldEnum
    having?: PlatformScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlatformCountAggregateInputType | true
    _avg?: PlatformAvgAggregateInputType
    _sum?: PlatformSumAggregateInputType
    _min?: PlatformMinAggregateInputType
    _max?: PlatformMaxAggregateInputType
  }

  export type PlatformGroupByOutputType = {
    id: string
    slug: string
    name: string
    description: string | null
    sortOrder: number
    createdAt: Date
    updatedAt: Date
    _count: PlatformCountAggregateOutputType | null
    _avg: PlatformAvgAggregateOutputType | null
    _sum: PlatformSumAggregateOutputType | null
    _min: PlatformMinAggregateOutputType | null
    _max: PlatformMaxAggregateOutputType | null
  }

  type GetPlatformGroupByPayload<T extends PlatformGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlatformGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlatformGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlatformGroupByOutputType[P]>
            : GetScalarType<T[P], PlatformGroupByOutputType[P]>
        }
      >
    >


  export type PlatformSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    name?: boolean
    description?: boolean
    sortOrder?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tools?: boolean | Platform$toolsArgs<ExtArgs>
    _count?: boolean | PlatformCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["platform"]>

  export type PlatformSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    name?: boolean
    description?: boolean
    sortOrder?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["platform"]>

  export type PlatformSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    name?: boolean
    description?: boolean
    sortOrder?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["platform"]>

  export type PlatformSelectScalar = {
    id?: boolean
    slug?: boolean
    name?: boolean
    description?: boolean
    sortOrder?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PlatformOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "slug" | "name" | "description" | "sortOrder" | "createdAt" | "updatedAt", ExtArgs["result"]["platform"]>
  export type PlatformInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tools?: boolean | Platform$toolsArgs<ExtArgs>
    _count?: boolean | PlatformCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PlatformIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PlatformIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PlatformPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Platform"
    objects: {
      tools: Prisma.$ToolPlatformPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      slug: string
      name: string
      description: string | null
      sortOrder: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["platform"]>
    composites: {}
  }

  type PlatformGetPayload<S extends boolean | null | undefined | PlatformDefaultArgs> = $Result.GetResult<Prisma.$PlatformPayload, S>

  type PlatformCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PlatformFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PlatformCountAggregateInputType | true
    }

  export interface PlatformDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Platform'], meta: { name: 'Platform' } }
    /**
     * Find zero or one Platform that matches the filter.
     * @param {PlatformFindUniqueArgs} args - Arguments to find a Platform
     * @example
     * // Get one Platform
     * const platform = await prisma.platform.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PlatformFindUniqueArgs>(args: SelectSubset<T, PlatformFindUniqueArgs<ExtArgs>>): Prisma__PlatformClient<$Result.GetResult<Prisma.$PlatformPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Platform that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PlatformFindUniqueOrThrowArgs} args - Arguments to find a Platform
     * @example
     * // Get one Platform
     * const platform = await prisma.platform.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PlatformFindUniqueOrThrowArgs>(args: SelectSubset<T, PlatformFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PlatformClient<$Result.GetResult<Prisma.$PlatformPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Platform that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlatformFindFirstArgs} args - Arguments to find a Platform
     * @example
     * // Get one Platform
     * const platform = await prisma.platform.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PlatformFindFirstArgs>(args?: SelectSubset<T, PlatformFindFirstArgs<ExtArgs>>): Prisma__PlatformClient<$Result.GetResult<Prisma.$PlatformPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Platform that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlatformFindFirstOrThrowArgs} args - Arguments to find a Platform
     * @example
     * // Get one Platform
     * const platform = await prisma.platform.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PlatformFindFirstOrThrowArgs>(args?: SelectSubset<T, PlatformFindFirstOrThrowArgs<ExtArgs>>): Prisma__PlatformClient<$Result.GetResult<Prisma.$PlatformPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Platforms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlatformFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Platforms
     * const platforms = await prisma.platform.findMany()
     * 
     * // Get first 10 Platforms
     * const platforms = await prisma.platform.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const platformWithIdOnly = await prisma.platform.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PlatformFindManyArgs>(args?: SelectSubset<T, PlatformFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlatformPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Platform.
     * @param {PlatformCreateArgs} args - Arguments to create a Platform.
     * @example
     * // Create one Platform
     * const Platform = await prisma.platform.create({
     *   data: {
     *     // ... data to create a Platform
     *   }
     * })
     * 
     */
    create<T extends PlatformCreateArgs>(args: SelectSubset<T, PlatformCreateArgs<ExtArgs>>): Prisma__PlatformClient<$Result.GetResult<Prisma.$PlatformPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Platforms.
     * @param {PlatformCreateManyArgs} args - Arguments to create many Platforms.
     * @example
     * // Create many Platforms
     * const platform = await prisma.platform.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PlatformCreateManyArgs>(args?: SelectSubset<T, PlatformCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Platforms and returns the data saved in the database.
     * @param {PlatformCreateManyAndReturnArgs} args - Arguments to create many Platforms.
     * @example
     * // Create many Platforms
     * const platform = await prisma.platform.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Platforms and only return the `id`
     * const platformWithIdOnly = await prisma.platform.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PlatformCreateManyAndReturnArgs>(args?: SelectSubset<T, PlatformCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlatformPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Platform.
     * @param {PlatformDeleteArgs} args - Arguments to delete one Platform.
     * @example
     * // Delete one Platform
     * const Platform = await prisma.platform.delete({
     *   where: {
     *     // ... filter to delete one Platform
     *   }
     * })
     * 
     */
    delete<T extends PlatformDeleteArgs>(args: SelectSubset<T, PlatformDeleteArgs<ExtArgs>>): Prisma__PlatformClient<$Result.GetResult<Prisma.$PlatformPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Platform.
     * @param {PlatformUpdateArgs} args - Arguments to update one Platform.
     * @example
     * // Update one Platform
     * const platform = await prisma.platform.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PlatformUpdateArgs>(args: SelectSubset<T, PlatformUpdateArgs<ExtArgs>>): Prisma__PlatformClient<$Result.GetResult<Prisma.$PlatformPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Platforms.
     * @param {PlatformDeleteManyArgs} args - Arguments to filter Platforms to delete.
     * @example
     * // Delete a few Platforms
     * const { count } = await prisma.platform.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PlatformDeleteManyArgs>(args?: SelectSubset<T, PlatformDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Platforms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlatformUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Platforms
     * const platform = await prisma.platform.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PlatformUpdateManyArgs>(args: SelectSubset<T, PlatformUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Platforms and returns the data updated in the database.
     * @param {PlatformUpdateManyAndReturnArgs} args - Arguments to update many Platforms.
     * @example
     * // Update many Platforms
     * const platform = await prisma.platform.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Platforms and only return the `id`
     * const platformWithIdOnly = await prisma.platform.updateManyAndReturn({
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
    updateManyAndReturn<T extends PlatformUpdateManyAndReturnArgs>(args: SelectSubset<T, PlatformUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlatformPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Platform.
     * @param {PlatformUpsertArgs} args - Arguments to update or create a Platform.
     * @example
     * // Update or create a Platform
     * const platform = await prisma.platform.upsert({
     *   create: {
     *     // ... data to create a Platform
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Platform we want to update
     *   }
     * })
     */
    upsert<T extends PlatformUpsertArgs>(args: SelectSubset<T, PlatformUpsertArgs<ExtArgs>>): Prisma__PlatformClient<$Result.GetResult<Prisma.$PlatformPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Platforms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlatformCountArgs} args - Arguments to filter Platforms to count.
     * @example
     * // Count the number of Platforms
     * const count = await prisma.platform.count({
     *   where: {
     *     // ... the filter for the Platforms we want to count
     *   }
     * })
    **/
    count<T extends PlatformCountArgs>(
      args?: Subset<T, PlatformCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlatformCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Platform.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlatformAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PlatformAggregateArgs>(args: Subset<T, PlatformAggregateArgs>): Prisma.PrismaPromise<GetPlatformAggregateType<T>>

    /**
     * Group by Platform.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlatformGroupByArgs} args - Group by arguments.
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
      T extends PlatformGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlatformGroupByArgs['orderBy'] }
        : { orderBy?: PlatformGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PlatformGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlatformGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Platform model
   */
  readonly fields: PlatformFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Platform.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PlatformClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tools<T extends Platform$toolsArgs<ExtArgs> = {}>(args?: Subset<T, Platform$toolsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ToolPlatformPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Platform model
   */
  interface PlatformFieldRefs {
    readonly id: FieldRef<"Platform", 'String'>
    readonly slug: FieldRef<"Platform", 'String'>
    readonly name: FieldRef<"Platform", 'String'>
    readonly description: FieldRef<"Platform", 'String'>
    readonly sortOrder: FieldRef<"Platform", 'Int'>
    readonly createdAt: FieldRef<"Platform", 'DateTime'>
    readonly updatedAt: FieldRef<"Platform", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Platform findUnique
   */
  export type PlatformFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Platform
     */
    select?: PlatformSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Platform
     */
    omit?: PlatformOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlatformInclude<ExtArgs> | null
    /**
     * Filter, which Platform to fetch.
     */
    where: PlatformWhereUniqueInput
  }

  /**
   * Platform findUniqueOrThrow
   */
  export type PlatformFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Platform
     */
    select?: PlatformSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Platform
     */
    omit?: PlatformOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlatformInclude<ExtArgs> | null
    /**
     * Filter, which Platform to fetch.
     */
    where: PlatformWhereUniqueInput
  }

  /**
   * Platform findFirst
   */
  export type PlatformFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Platform
     */
    select?: PlatformSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Platform
     */
    omit?: PlatformOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlatformInclude<ExtArgs> | null
    /**
     * Filter, which Platform to fetch.
     */
    where?: PlatformWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Platforms to fetch.
     */
    orderBy?: PlatformOrderByWithRelationInput | PlatformOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Platforms.
     */
    cursor?: PlatformWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Platforms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Platforms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Platforms.
     */
    distinct?: PlatformScalarFieldEnum | PlatformScalarFieldEnum[]
  }

  /**
   * Platform findFirstOrThrow
   */
  export type PlatformFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Platform
     */
    select?: PlatformSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Platform
     */
    omit?: PlatformOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlatformInclude<ExtArgs> | null
    /**
     * Filter, which Platform to fetch.
     */
    where?: PlatformWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Platforms to fetch.
     */
    orderBy?: PlatformOrderByWithRelationInput | PlatformOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Platforms.
     */
    cursor?: PlatformWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Platforms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Platforms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Platforms.
     */
    distinct?: PlatformScalarFieldEnum | PlatformScalarFieldEnum[]
  }

  /**
   * Platform findMany
   */
  export type PlatformFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Platform
     */
    select?: PlatformSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Platform
     */
    omit?: PlatformOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlatformInclude<ExtArgs> | null
    /**
     * Filter, which Platforms to fetch.
     */
    where?: PlatformWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Platforms to fetch.
     */
    orderBy?: PlatformOrderByWithRelationInput | PlatformOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Platforms.
     */
    cursor?: PlatformWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Platforms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Platforms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Platforms.
     */
    distinct?: PlatformScalarFieldEnum | PlatformScalarFieldEnum[]
  }

  /**
   * Platform create
   */
  export type PlatformCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Platform
     */
    select?: PlatformSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Platform
     */
    omit?: PlatformOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlatformInclude<ExtArgs> | null
    /**
     * The data needed to create a Platform.
     */
    data: XOR<PlatformCreateInput, PlatformUncheckedCreateInput>
  }

  /**
   * Platform createMany
   */
  export type PlatformCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Platforms.
     */
    data: PlatformCreateManyInput | PlatformCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Platform createManyAndReturn
   */
  export type PlatformCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Platform
     */
    select?: PlatformSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Platform
     */
    omit?: PlatformOmit<ExtArgs> | null
    /**
     * The data used to create many Platforms.
     */
    data: PlatformCreateManyInput | PlatformCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Platform update
   */
  export type PlatformUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Platform
     */
    select?: PlatformSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Platform
     */
    omit?: PlatformOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlatformInclude<ExtArgs> | null
    /**
     * The data needed to update a Platform.
     */
    data: XOR<PlatformUpdateInput, PlatformUncheckedUpdateInput>
    /**
     * Choose, which Platform to update.
     */
    where: PlatformWhereUniqueInput
  }

  /**
   * Platform updateMany
   */
  export type PlatformUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Platforms.
     */
    data: XOR<PlatformUpdateManyMutationInput, PlatformUncheckedUpdateManyInput>
    /**
     * Filter which Platforms to update
     */
    where?: PlatformWhereInput
    /**
     * Limit how many Platforms to update.
     */
    limit?: number
  }

  /**
   * Platform updateManyAndReturn
   */
  export type PlatformUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Platform
     */
    select?: PlatformSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Platform
     */
    omit?: PlatformOmit<ExtArgs> | null
    /**
     * The data used to update Platforms.
     */
    data: XOR<PlatformUpdateManyMutationInput, PlatformUncheckedUpdateManyInput>
    /**
     * Filter which Platforms to update
     */
    where?: PlatformWhereInput
    /**
     * Limit how many Platforms to update.
     */
    limit?: number
  }

  /**
   * Platform upsert
   */
  export type PlatformUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Platform
     */
    select?: PlatformSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Platform
     */
    omit?: PlatformOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlatformInclude<ExtArgs> | null
    /**
     * The filter to search for the Platform to update in case it exists.
     */
    where: PlatformWhereUniqueInput
    /**
     * In case the Platform found by the `where` argument doesn't exist, create a new Platform with this data.
     */
    create: XOR<PlatformCreateInput, PlatformUncheckedCreateInput>
    /**
     * In case the Platform was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PlatformUpdateInput, PlatformUncheckedUpdateInput>
  }

  /**
   * Platform delete
   */
  export type PlatformDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Platform
     */
    select?: PlatformSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Platform
     */
    omit?: PlatformOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlatformInclude<ExtArgs> | null
    /**
     * Filter which Platform to delete.
     */
    where: PlatformWhereUniqueInput
  }

  /**
   * Platform deleteMany
   */
  export type PlatformDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Platforms to delete
     */
    where?: PlatformWhereInput
    /**
     * Limit how many Platforms to delete.
     */
    limit?: number
  }

  /**
   * Platform.tools
   */
  export type Platform$toolsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ToolPlatform
     */
    select?: ToolPlatformSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ToolPlatform
     */
    omit?: ToolPlatformOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToolPlatformInclude<ExtArgs> | null
    where?: ToolPlatformWhereInput
    orderBy?: ToolPlatformOrderByWithRelationInput | ToolPlatformOrderByWithRelationInput[]
    cursor?: ToolPlatformWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ToolPlatformScalarFieldEnum | ToolPlatformScalarFieldEnum[]
  }

  /**
   * Platform without action
   */
  export type PlatformDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Platform
     */
    select?: PlatformSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Platform
     */
    omit?: PlatformOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlatformInclude<ExtArgs> | null
  }


  /**
   * Model Tool
   */

  export type AggregateTool = {
    _count: ToolCountAggregateOutputType | null
    _avg: ToolAvgAggregateOutputType | null
    _sum: ToolSumAggregateOutputType | null
    _min: ToolMinAggregateOutputType | null
    _max: ToolMaxAggregateOutputType | null
  }

  export type ToolAvgAggregateOutputType = {
    popularityScore: number | null
  }

  export type ToolSumAggregateOutputType = {
    popularityScore: number | null
  }

  export type ToolMinAggregateOutputType = {
    id: string | null
    slug: string | null
    name: string | null
    tagline: string | null
    description: string | null
    logoUrl: string | null
    websiteUrl: string | null
    docsUrl: string | null
    companyName: string | null
    companyUrl: string | null
    companyLocation: string | null
    pricingModel: $Enums.PricingModel | null
    pricingNote: string | null
    status: $Enums.ToolStatus | null
    isFeatured: boolean | null
    isVerified: boolean | null
    popularityScore: number | null
    launchDate: Date | null
    publishedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ToolMaxAggregateOutputType = {
    id: string | null
    slug: string | null
    name: string | null
    tagline: string | null
    description: string | null
    logoUrl: string | null
    websiteUrl: string | null
    docsUrl: string | null
    companyName: string | null
    companyUrl: string | null
    companyLocation: string | null
    pricingModel: $Enums.PricingModel | null
    pricingNote: string | null
    status: $Enums.ToolStatus | null
    isFeatured: boolean | null
    isVerified: boolean | null
    popularityScore: number | null
    launchDate: Date | null
    publishedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ToolCountAggregateOutputType = {
    id: number
    slug: number
    name: number
    tagline: number
    description: number
    logoUrl: number
    websiteUrl: number
    docsUrl: number
    companyName: number
    companyUrl: number
    companyLocation: number
    pricingModel: number
    pricingNote: number
    status: number
    isFeatured: number
    isVerified: number
    popularityScore: number
    launchDate: number
    publishedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ToolAvgAggregateInputType = {
    popularityScore?: true
  }

  export type ToolSumAggregateInputType = {
    popularityScore?: true
  }

  export type ToolMinAggregateInputType = {
    id?: true
    slug?: true
    name?: true
    tagline?: true
    description?: true
    logoUrl?: true
    websiteUrl?: true
    docsUrl?: true
    companyName?: true
    companyUrl?: true
    companyLocation?: true
    pricingModel?: true
    pricingNote?: true
    status?: true
    isFeatured?: true
    isVerified?: true
    popularityScore?: true
    launchDate?: true
    publishedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ToolMaxAggregateInputType = {
    id?: true
    slug?: true
    name?: true
    tagline?: true
    description?: true
    logoUrl?: true
    websiteUrl?: true
    docsUrl?: true
    companyName?: true
    companyUrl?: true
    companyLocation?: true
    pricingModel?: true
    pricingNote?: true
    status?: true
    isFeatured?: true
    isVerified?: true
    popularityScore?: true
    launchDate?: true
    publishedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ToolCountAggregateInputType = {
    id?: true
    slug?: true
    name?: true
    tagline?: true
    description?: true
    logoUrl?: true
    websiteUrl?: true
    docsUrl?: true
    companyName?: true
    companyUrl?: true
    companyLocation?: true
    pricingModel?: true
    pricingNote?: true
    status?: true
    isFeatured?: true
    isVerified?: true
    popularityScore?: true
    launchDate?: true
    publishedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ToolAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tool to aggregate.
     */
    where?: ToolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tools to fetch.
     */
    orderBy?: ToolOrderByWithRelationInput | ToolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ToolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tools.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tools
    **/
    _count?: true | ToolCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ToolAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ToolSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ToolMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ToolMaxAggregateInputType
  }

  export type GetToolAggregateType<T extends ToolAggregateArgs> = {
        [P in keyof T & keyof AggregateTool]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTool[P]>
      : GetScalarType<T[P], AggregateTool[P]>
  }




  export type ToolGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ToolWhereInput
    orderBy?: ToolOrderByWithAggregationInput | ToolOrderByWithAggregationInput[]
    by: ToolScalarFieldEnum[] | ToolScalarFieldEnum
    having?: ToolScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ToolCountAggregateInputType | true
    _avg?: ToolAvgAggregateInputType
    _sum?: ToolSumAggregateInputType
    _min?: ToolMinAggregateInputType
    _max?: ToolMaxAggregateInputType
  }

  export type ToolGroupByOutputType = {
    id: string
    slug: string
    name: string
    tagline: string
    description: string
    logoUrl: string | null
    websiteUrl: string
    docsUrl: string | null
    companyName: string
    companyUrl: string | null
    companyLocation: string | null
    pricingModel: $Enums.PricingModel
    pricingNote: string | null
    status: $Enums.ToolStatus
    isFeatured: boolean
    isVerified: boolean
    popularityScore: number
    launchDate: Date | null
    publishedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: ToolCountAggregateOutputType | null
    _avg: ToolAvgAggregateOutputType | null
    _sum: ToolSumAggregateOutputType | null
    _min: ToolMinAggregateOutputType | null
    _max: ToolMaxAggregateOutputType | null
  }

  type GetToolGroupByPayload<T extends ToolGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ToolGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ToolGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ToolGroupByOutputType[P]>
            : GetScalarType<T[P], ToolGroupByOutputType[P]>
        }
      >
    >


  export type ToolSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    name?: boolean
    tagline?: boolean
    description?: boolean
    logoUrl?: boolean
    websiteUrl?: boolean
    docsUrl?: boolean
    companyName?: boolean
    companyUrl?: boolean
    companyLocation?: boolean
    pricingModel?: boolean
    pricingNote?: boolean
    status?: boolean
    isFeatured?: boolean
    isVerified?: boolean
    popularityScore?: boolean
    launchDate?: boolean
    publishedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    categories?: boolean | Tool$categoriesArgs<ExtArgs>
    platforms?: boolean | Tool$platformsArgs<ExtArgs>
    capabilities?: boolean | Tool$capabilitiesArgs<ExtArgs>
    useCases?: boolean | Tool$useCasesArgs<ExtArgs>
    screenshots?: boolean | Tool$screenshotsArgs<ExtArgs>
    news?: boolean | Tool$newsArgs<ExtArgs>
    _count?: boolean | ToolCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tool"]>

  export type ToolSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    name?: boolean
    tagline?: boolean
    description?: boolean
    logoUrl?: boolean
    websiteUrl?: boolean
    docsUrl?: boolean
    companyName?: boolean
    companyUrl?: boolean
    companyLocation?: boolean
    pricingModel?: boolean
    pricingNote?: boolean
    status?: boolean
    isFeatured?: boolean
    isVerified?: boolean
    popularityScore?: boolean
    launchDate?: boolean
    publishedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["tool"]>

  export type ToolSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    name?: boolean
    tagline?: boolean
    description?: boolean
    logoUrl?: boolean
    websiteUrl?: boolean
    docsUrl?: boolean
    companyName?: boolean
    companyUrl?: boolean
    companyLocation?: boolean
    pricingModel?: boolean
    pricingNote?: boolean
    status?: boolean
    isFeatured?: boolean
    isVerified?: boolean
    popularityScore?: boolean
    launchDate?: boolean
    publishedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["tool"]>

  export type ToolSelectScalar = {
    id?: boolean
    slug?: boolean
    name?: boolean
    tagline?: boolean
    description?: boolean
    logoUrl?: boolean
    websiteUrl?: boolean
    docsUrl?: boolean
    companyName?: boolean
    companyUrl?: boolean
    companyLocation?: boolean
    pricingModel?: boolean
    pricingNote?: boolean
    status?: boolean
    isFeatured?: boolean
    isVerified?: boolean
    popularityScore?: boolean
    launchDate?: boolean
    publishedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ToolOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "slug" | "name" | "tagline" | "description" | "logoUrl" | "websiteUrl" | "docsUrl" | "companyName" | "companyUrl" | "companyLocation" | "pricingModel" | "pricingNote" | "status" | "isFeatured" | "isVerified" | "popularityScore" | "launchDate" | "publishedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["tool"]>
  export type ToolInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categories?: boolean | Tool$categoriesArgs<ExtArgs>
    platforms?: boolean | Tool$platformsArgs<ExtArgs>
    capabilities?: boolean | Tool$capabilitiesArgs<ExtArgs>
    useCases?: boolean | Tool$useCasesArgs<ExtArgs>
    screenshots?: boolean | Tool$screenshotsArgs<ExtArgs>
    news?: boolean | Tool$newsArgs<ExtArgs>
    _count?: boolean | ToolCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ToolIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ToolIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ToolPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tool"
    objects: {
      categories: Prisma.$ToolCategoryPayload<ExtArgs>[]
      platforms: Prisma.$ToolPlatformPayload<ExtArgs>[]
      capabilities: Prisma.$ToolCapabilityPayload<ExtArgs>[]
      useCases: Prisma.$ToolUseCasePayload<ExtArgs>[]
      screenshots: Prisma.$ToolScreenshotPayload<ExtArgs>[]
      news: Prisma.$NewsArticleToolPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      slug: string
      name: string
      tagline: string
      description: string
      logoUrl: string | null
      websiteUrl: string
      docsUrl: string | null
      companyName: string
      companyUrl: string | null
      companyLocation: string | null
      pricingModel: $Enums.PricingModel
      pricingNote: string | null
      status: $Enums.ToolStatus
      isFeatured: boolean
      isVerified: boolean
      popularityScore: number
      launchDate: Date | null
      publishedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["tool"]>
    composites: {}
  }

  type ToolGetPayload<S extends boolean | null | undefined | ToolDefaultArgs> = $Result.GetResult<Prisma.$ToolPayload, S>

  type ToolCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ToolFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ToolCountAggregateInputType | true
    }

  export interface ToolDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tool'], meta: { name: 'Tool' } }
    /**
     * Find zero or one Tool that matches the filter.
     * @param {ToolFindUniqueArgs} args - Arguments to find a Tool
     * @example
     * // Get one Tool
     * const tool = await prisma.tool.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ToolFindUniqueArgs>(args: SelectSubset<T, ToolFindUniqueArgs<ExtArgs>>): Prisma__ToolClient<$Result.GetResult<Prisma.$ToolPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tool that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ToolFindUniqueOrThrowArgs} args - Arguments to find a Tool
     * @example
     * // Get one Tool
     * const tool = await prisma.tool.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ToolFindUniqueOrThrowArgs>(args: SelectSubset<T, ToolFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ToolClient<$Result.GetResult<Prisma.$ToolPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tool that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ToolFindFirstArgs} args - Arguments to find a Tool
     * @example
     * // Get one Tool
     * const tool = await prisma.tool.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ToolFindFirstArgs>(args?: SelectSubset<T, ToolFindFirstArgs<ExtArgs>>): Prisma__ToolClient<$Result.GetResult<Prisma.$ToolPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tool that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ToolFindFirstOrThrowArgs} args - Arguments to find a Tool
     * @example
     * // Get one Tool
     * const tool = await prisma.tool.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ToolFindFirstOrThrowArgs>(args?: SelectSubset<T, ToolFindFirstOrThrowArgs<ExtArgs>>): Prisma__ToolClient<$Result.GetResult<Prisma.$ToolPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tools that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ToolFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tools
     * const tools = await prisma.tool.findMany()
     * 
     * // Get first 10 Tools
     * const tools = await prisma.tool.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const toolWithIdOnly = await prisma.tool.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ToolFindManyArgs>(args?: SelectSubset<T, ToolFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ToolPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tool.
     * @param {ToolCreateArgs} args - Arguments to create a Tool.
     * @example
     * // Create one Tool
     * const Tool = await prisma.tool.create({
     *   data: {
     *     // ... data to create a Tool
     *   }
     * })
     * 
     */
    create<T extends ToolCreateArgs>(args: SelectSubset<T, ToolCreateArgs<ExtArgs>>): Prisma__ToolClient<$Result.GetResult<Prisma.$ToolPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tools.
     * @param {ToolCreateManyArgs} args - Arguments to create many Tools.
     * @example
     * // Create many Tools
     * const tool = await prisma.tool.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ToolCreateManyArgs>(args?: SelectSubset<T, ToolCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tools and returns the data saved in the database.
     * @param {ToolCreateManyAndReturnArgs} args - Arguments to create many Tools.
     * @example
     * // Create many Tools
     * const tool = await prisma.tool.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tools and only return the `id`
     * const toolWithIdOnly = await prisma.tool.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ToolCreateManyAndReturnArgs>(args?: SelectSubset<T, ToolCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ToolPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tool.
     * @param {ToolDeleteArgs} args - Arguments to delete one Tool.
     * @example
     * // Delete one Tool
     * const Tool = await prisma.tool.delete({
     *   where: {
     *     // ... filter to delete one Tool
     *   }
     * })
     * 
     */
    delete<T extends ToolDeleteArgs>(args: SelectSubset<T, ToolDeleteArgs<ExtArgs>>): Prisma__ToolClient<$Result.GetResult<Prisma.$ToolPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tool.
     * @param {ToolUpdateArgs} args - Arguments to update one Tool.
     * @example
     * // Update one Tool
     * const tool = await prisma.tool.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ToolUpdateArgs>(args: SelectSubset<T, ToolUpdateArgs<ExtArgs>>): Prisma__ToolClient<$Result.GetResult<Prisma.$ToolPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tools.
     * @param {ToolDeleteManyArgs} args - Arguments to filter Tools to delete.
     * @example
     * // Delete a few Tools
     * const { count } = await prisma.tool.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ToolDeleteManyArgs>(args?: SelectSubset<T, ToolDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tools.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ToolUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tools
     * const tool = await prisma.tool.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ToolUpdateManyArgs>(args: SelectSubset<T, ToolUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tools and returns the data updated in the database.
     * @param {ToolUpdateManyAndReturnArgs} args - Arguments to update many Tools.
     * @example
     * // Update many Tools
     * const tool = await prisma.tool.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tools and only return the `id`
     * const toolWithIdOnly = await prisma.tool.updateManyAndReturn({
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
    updateManyAndReturn<T extends ToolUpdateManyAndReturnArgs>(args: SelectSubset<T, ToolUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ToolPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tool.
     * @param {ToolUpsertArgs} args - Arguments to update or create a Tool.
     * @example
     * // Update or create a Tool
     * const tool = await prisma.tool.upsert({
     *   create: {
     *     // ... data to create a Tool
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tool we want to update
     *   }
     * })
     */
    upsert<T extends ToolUpsertArgs>(args: SelectSubset<T, ToolUpsertArgs<ExtArgs>>): Prisma__ToolClient<$Result.GetResult<Prisma.$ToolPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tools.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ToolCountArgs} args - Arguments to filter Tools to count.
     * @example
     * // Count the number of Tools
     * const count = await prisma.tool.count({
     *   where: {
     *     // ... the filter for the Tools we want to count
     *   }
     * })
    **/
    count<T extends ToolCountArgs>(
      args?: Subset<T, ToolCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ToolCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tool.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ToolAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ToolAggregateArgs>(args: Subset<T, ToolAggregateArgs>): Prisma.PrismaPromise<GetToolAggregateType<T>>

    /**
     * Group by Tool.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ToolGroupByArgs} args - Group by arguments.
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
      T extends ToolGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ToolGroupByArgs['orderBy'] }
        : { orderBy?: ToolGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ToolGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetToolGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tool model
   */
  readonly fields: ToolFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tool.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ToolClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    categories<T extends Tool$categoriesArgs<ExtArgs> = {}>(args?: Subset<T, Tool$categoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ToolCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    platforms<T extends Tool$platformsArgs<ExtArgs> = {}>(args?: Subset<T, Tool$platformsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ToolPlatformPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    capabilities<T extends Tool$capabilitiesArgs<ExtArgs> = {}>(args?: Subset<T, Tool$capabilitiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ToolCapabilityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    useCases<T extends Tool$useCasesArgs<ExtArgs> = {}>(args?: Subset<T, Tool$useCasesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ToolUseCasePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    screenshots<T extends Tool$screenshotsArgs<ExtArgs> = {}>(args?: Subset<T, Tool$screenshotsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ToolScreenshotPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    news<T extends Tool$newsArgs<ExtArgs> = {}>(args?: Subset<T, Tool$newsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsArticleToolPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Tool model
   */
  interface ToolFieldRefs {
    readonly id: FieldRef<"Tool", 'String'>
    readonly slug: FieldRef<"Tool", 'String'>
    readonly name: FieldRef<"Tool", 'String'>
    readonly tagline: FieldRef<"Tool", 'String'>
    readonly description: FieldRef<"Tool", 'String'>
    readonly logoUrl: FieldRef<"Tool", 'String'>
    readonly websiteUrl: FieldRef<"Tool", 'String'>
    readonly docsUrl: FieldRef<"Tool", 'String'>
    readonly companyName: FieldRef<"Tool", 'String'>
    readonly companyUrl: FieldRef<"Tool", 'String'>
    readonly companyLocation: FieldRef<"Tool", 'String'>
    readonly pricingModel: FieldRef<"Tool", 'PricingModel'>
    readonly pricingNote: FieldRef<"Tool", 'String'>
    readonly status: FieldRef<"Tool", 'ToolStatus'>
    readonly isFeatured: FieldRef<"Tool", 'Boolean'>
    readonly isVerified: FieldRef<"Tool", 'Boolean'>
    readonly popularityScore: FieldRef<"Tool", 'Int'>
    readonly launchDate: FieldRef<"Tool", 'DateTime'>
    readonly publishedAt: FieldRef<"Tool", 'DateTime'>
    readonly createdAt: FieldRef<"Tool", 'DateTime'>
    readonly updatedAt: FieldRef<"Tool", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Tool findUnique
   */
  export type ToolFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tool
     */
    select?: ToolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tool
     */
    omit?: ToolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToolInclude<ExtArgs> | null
    /**
     * Filter, which Tool to fetch.
     */
    where: ToolWhereUniqueInput
  }

  /**
   * Tool findUniqueOrThrow
   */
  export type ToolFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tool
     */
    select?: ToolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tool
     */
    omit?: ToolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToolInclude<ExtArgs> | null
    /**
     * Filter, which Tool to fetch.
     */
    where: ToolWhereUniqueInput
  }

  /**
   * Tool findFirst
   */
  export type ToolFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tool
     */
    select?: ToolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tool
     */
    omit?: ToolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToolInclude<ExtArgs> | null
    /**
     * Filter, which Tool to fetch.
     */
    where?: ToolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tools to fetch.
     */
    orderBy?: ToolOrderByWithRelationInput | ToolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tools.
     */
    cursor?: ToolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tools.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tools.
     */
    distinct?: ToolScalarFieldEnum | ToolScalarFieldEnum[]
  }

  /**
   * Tool findFirstOrThrow
   */
  export type ToolFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tool
     */
    select?: ToolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tool
     */
    omit?: ToolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToolInclude<ExtArgs> | null
    /**
     * Filter, which Tool to fetch.
     */
    where?: ToolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tools to fetch.
     */
    orderBy?: ToolOrderByWithRelationInput | ToolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tools.
     */
    cursor?: ToolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tools.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tools.
     */
    distinct?: ToolScalarFieldEnum | ToolScalarFieldEnum[]
  }

  /**
   * Tool findMany
   */
  export type ToolFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tool
     */
    select?: ToolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tool
     */
    omit?: ToolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToolInclude<ExtArgs> | null
    /**
     * Filter, which Tools to fetch.
     */
    where?: ToolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tools to fetch.
     */
    orderBy?: ToolOrderByWithRelationInput | ToolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tools.
     */
    cursor?: ToolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tools.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tools.
     */
    distinct?: ToolScalarFieldEnum | ToolScalarFieldEnum[]
  }

  /**
   * Tool create
   */
  export type ToolCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tool
     */
    select?: ToolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tool
     */
    omit?: ToolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToolInclude<ExtArgs> | null
    /**
     * The data needed to create a Tool.
     */
    data: XOR<ToolCreateInput, ToolUncheckedCreateInput>
  }

  /**
   * Tool createMany
   */
  export type ToolCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tools.
     */
    data: ToolCreateManyInput | ToolCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tool createManyAndReturn
   */
  export type ToolCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tool
     */
    select?: ToolSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tool
     */
    omit?: ToolOmit<ExtArgs> | null
    /**
     * The data used to create many Tools.
     */
    data: ToolCreateManyInput | ToolCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tool update
   */
  export type ToolUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tool
     */
    select?: ToolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tool
     */
    omit?: ToolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToolInclude<ExtArgs> | null
    /**
     * The data needed to update a Tool.
     */
    data: XOR<ToolUpdateInput, ToolUncheckedUpdateInput>
    /**
     * Choose, which Tool to update.
     */
    where: ToolWhereUniqueInput
  }

  /**
   * Tool updateMany
   */
  export type ToolUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tools.
     */
    data: XOR<ToolUpdateManyMutationInput, ToolUncheckedUpdateManyInput>
    /**
     * Filter which Tools to update
     */
    where?: ToolWhereInput
    /**
     * Limit how many Tools to update.
     */
    limit?: number
  }

  /**
   * Tool updateManyAndReturn
   */
  export type ToolUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tool
     */
    select?: ToolSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tool
     */
    omit?: ToolOmit<ExtArgs> | null
    /**
     * The data used to update Tools.
     */
    data: XOR<ToolUpdateManyMutationInput, ToolUncheckedUpdateManyInput>
    /**
     * Filter which Tools to update
     */
    where?: ToolWhereInput
    /**
     * Limit how many Tools to update.
     */
    limit?: number
  }

  /**
   * Tool upsert
   */
  export type ToolUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tool
     */
    select?: ToolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tool
     */
    omit?: ToolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToolInclude<ExtArgs> | null
    /**
     * The filter to search for the Tool to update in case it exists.
     */
    where: ToolWhereUniqueInput
    /**
     * In case the Tool found by the `where` argument doesn't exist, create a new Tool with this data.
     */
    create: XOR<ToolCreateInput, ToolUncheckedCreateInput>
    /**
     * In case the Tool was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ToolUpdateInput, ToolUncheckedUpdateInput>
  }

  /**
   * Tool delete
   */
  export type ToolDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tool
     */
    select?: ToolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tool
     */
    omit?: ToolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToolInclude<ExtArgs> | null
    /**
     * Filter which Tool to delete.
     */
    where: ToolWhereUniqueInput
  }

  /**
   * Tool deleteMany
   */
  export type ToolDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tools to delete
     */
    where?: ToolWhereInput
    /**
     * Limit how many Tools to delete.
     */
    limit?: number
  }

  /**
   * Tool.categories
   */
  export type Tool$categoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ToolCategory
     */
    select?: ToolCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ToolCategory
     */
    omit?: ToolCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToolCategoryInclude<ExtArgs> | null
    where?: ToolCategoryWhereInput
    orderBy?: ToolCategoryOrderByWithRelationInput | ToolCategoryOrderByWithRelationInput[]
    cursor?: ToolCategoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ToolCategoryScalarFieldEnum | ToolCategoryScalarFieldEnum[]
  }

  /**
   * Tool.platforms
   */
  export type Tool$platformsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ToolPlatform
     */
    select?: ToolPlatformSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ToolPlatform
     */
    omit?: ToolPlatformOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToolPlatformInclude<ExtArgs> | null
    where?: ToolPlatformWhereInput
    orderBy?: ToolPlatformOrderByWithRelationInput | ToolPlatformOrderByWithRelationInput[]
    cursor?: ToolPlatformWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ToolPlatformScalarFieldEnum | ToolPlatformScalarFieldEnum[]
  }

  /**
   * Tool.capabilities
   */
  export type Tool$capabilitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ToolCapability
     */
    select?: ToolCapabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ToolCapability
     */
    omit?: ToolCapabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToolCapabilityInclude<ExtArgs> | null
    where?: ToolCapabilityWhereInput
    orderBy?: ToolCapabilityOrderByWithRelationInput | ToolCapabilityOrderByWithRelationInput[]
    cursor?: ToolCapabilityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ToolCapabilityScalarFieldEnum | ToolCapabilityScalarFieldEnum[]
  }

  /**
   * Tool.useCases
   */
  export type Tool$useCasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ToolUseCase
     */
    select?: ToolUseCaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ToolUseCase
     */
    omit?: ToolUseCaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToolUseCaseInclude<ExtArgs> | null
    where?: ToolUseCaseWhereInput
    orderBy?: ToolUseCaseOrderByWithRelationInput | ToolUseCaseOrderByWithRelationInput[]
    cursor?: ToolUseCaseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ToolUseCaseScalarFieldEnum | ToolUseCaseScalarFieldEnum[]
  }

  /**
   * Tool.screenshots
   */
  export type Tool$screenshotsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ToolScreenshot
     */
    select?: ToolScreenshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ToolScreenshot
     */
    omit?: ToolScreenshotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToolScreenshotInclude<ExtArgs> | null
    where?: ToolScreenshotWhereInput
    orderBy?: ToolScreenshotOrderByWithRelationInput | ToolScreenshotOrderByWithRelationInput[]
    cursor?: ToolScreenshotWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ToolScreenshotScalarFieldEnum | ToolScreenshotScalarFieldEnum[]
  }

  /**
   * Tool.news
   */
  export type Tool$newsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsArticleTool
     */
    select?: NewsArticleToolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsArticleTool
     */
    omit?: NewsArticleToolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsArticleToolInclude<ExtArgs> | null
    where?: NewsArticleToolWhereInput
    orderBy?: NewsArticleToolOrderByWithRelationInput | NewsArticleToolOrderByWithRelationInput[]
    cursor?: NewsArticleToolWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NewsArticleToolScalarFieldEnum | NewsArticleToolScalarFieldEnum[]
  }

  /**
   * Tool without action
   */
  export type ToolDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tool
     */
    select?: ToolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tool
     */
    omit?: ToolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToolInclude<ExtArgs> | null
  }


  /**
   * Model ToolCategory
   */

  export type AggregateToolCategory = {
    _count: ToolCategoryCountAggregateOutputType | null
    _min: ToolCategoryMinAggregateOutputType | null
    _max: ToolCategoryMaxAggregateOutputType | null
  }

  export type ToolCategoryMinAggregateOutputType = {
    toolId: string | null
    categoryId: string | null
    createdAt: Date | null
  }

  export type ToolCategoryMaxAggregateOutputType = {
    toolId: string | null
    categoryId: string | null
    createdAt: Date | null
  }

  export type ToolCategoryCountAggregateOutputType = {
    toolId: number
    categoryId: number
    createdAt: number
    _all: number
  }


  export type ToolCategoryMinAggregateInputType = {
    toolId?: true
    categoryId?: true
    createdAt?: true
  }

  export type ToolCategoryMaxAggregateInputType = {
    toolId?: true
    categoryId?: true
    createdAt?: true
  }

  export type ToolCategoryCountAggregateInputType = {
    toolId?: true
    categoryId?: true
    createdAt?: true
    _all?: true
  }

  export type ToolCategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ToolCategory to aggregate.
     */
    where?: ToolCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ToolCategories to fetch.
     */
    orderBy?: ToolCategoryOrderByWithRelationInput | ToolCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ToolCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ToolCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ToolCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ToolCategories
    **/
    _count?: true | ToolCategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ToolCategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ToolCategoryMaxAggregateInputType
  }

  export type GetToolCategoryAggregateType<T extends ToolCategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateToolCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateToolCategory[P]>
      : GetScalarType<T[P], AggregateToolCategory[P]>
  }




  export type ToolCategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ToolCategoryWhereInput
    orderBy?: ToolCategoryOrderByWithAggregationInput | ToolCategoryOrderByWithAggregationInput[]
    by: ToolCategoryScalarFieldEnum[] | ToolCategoryScalarFieldEnum
    having?: ToolCategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ToolCategoryCountAggregateInputType | true
    _min?: ToolCategoryMinAggregateInputType
    _max?: ToolCategoryMaxAggregateInputType
  }

  export type ToolCategoryGroupByOutputType = {
    toolId: string
    categoryId: string
    createdAt: Date
    _count: ToolCategoryCountAggregateOutputType | null
    _min: ToolCategoryMinAggregateOutputType | null
    _max: ToolCategoryMaxAggregateOutputType | null
  }

  type GetToolCategoryGroupByPayload<T extends ToolCategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ToolCategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ToolCategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ToolCategoryGroupByOutputType[P]>
            : GetScalarType<T[P], ToolCategoryGroupByOutputType[P]>
        }
      >
    >


  export type ToolCategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    toolId?: boolean
    categoryId?: boolean
    createdAt?: boolean
    tool?: boolean | ToolDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["toolCategory"]>

  export type ToolCategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    toolId?: boolean
    categoryId?: boolean
    createdAt?: boolean
    tool?: boolean | ToolDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["toolCategory"]>

  export type ToolCategorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    toolId?: boolean
    categoryId?: boolean
    createdAt?: boolean
    tool?: boolean | ToolDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["toolCategory"]>

  export type ToolCategorySelectScalar = {
    toolId?: boolean
    categoryId?: boolean
    createdAt?: boolean
  }

  export type ToolCategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"toolId" | "categoryId" | "createdAt", ExtArgs["result"]["toolCategory"]>
  export type ToolCategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tool?: boolean | ToolDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }
  export type ToolCategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tool?: boolean | ToolDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }
  export type ToolCategoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tool?: boolean | ToolDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }

  export type $ToolCategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ToolCategory"
    objects: {
      tool: Prisma.$ToolPayload<ExtArgs>
      category: Prisma.$CategoryPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      toolId: string
      categoryId: string
      createdAt: Date
    }, ExtArgs["result"]["toolCategory"]>
    composites: {}
  }

  type ToolCategoryGetPayload<S extends boolean | null | undefined | ToolCategoryDefaultArgs> = $Result.GetResult<Prisma.$ToolCategoryPayload, S>

  type ToolCategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ToolCategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ToolCategoryCountAggregateInputType | true
    }

  export interface ToolCategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ToolCategory'], meta: { name: 'ToolCategory' } }
    /**
     * Find zero or one ToolCategory that matches the filter.
     * @param {ToolCategoryFindUniqueArgs} args - Arguments to find a ToolCategory
     * @example
     * // Get one ToolCategory
     * const toolCategory = await prisma.toolCategory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ToolCategoryFindUniqueArgs>(args: SelectSubset<T, ToolCategoryFindUniqueArgs<ExtArgs>>): Prisma__ToolCategoryClient<$Result.GetResult<Prisma.$ToolCategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ToolCategory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ToolCategoryFindUniqueOrThrowArgs} args - Arguments to find a ToolCategory
     * @example
     * // Get one ToolCategory
     * const toolCategory = await prisma.toolCategory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ToolCategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, ToolCategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ToolCategoryClient<$Result.GetResult<Prisma.$ToolCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ToolCategory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ToolCategoryFindFirstArgs} args - Arguments to find a ToolCategory
     * @example
     * // Get one ToolCategory
     * const toolCategory = await prisma.toolCategory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ToolCategoryFindFirstArgs>(args?: SelectSubset<T, ToolCategoryFindFirstArgs<ExtArgs>>): Prisma__ToolCategoryClient<$Result.GetResult<Prisma.$ToolCategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ToolCategory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ToolCategoryFindFirstOrThrowArgs} args - Arguments to find a ToolCategory
     * @example
     * // Get one ToolCategory
     * const toolCategory = await prisma.toolCategory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ToolCategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, ToolCategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__ToolCategoryClient<$Result.GetResult<Prisma.$ToolCategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ToolCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ToolCategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ToolCategories
     * const toolCategories = await prisma.toolCategory.findMany()
     * 
     * // Get first 10 ToolCategories
     * const toolCategories = await prisma.toolCategory.findMany({ take: 10 })
     * 
     * // Only select the `toolId`
     * const toolCategoryWithToolIdOnly = await prisma.toolCategory.findMany({ select: { toolId: true } })
     * 
     */
    findMany<T extends ToolCategoryFindManyArgs>(args?: SelectSubset<T, ToolCategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ToolCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ToolCategory.
     * @param {ToolCategoryCreateArgs} args - Arguments to create a ToolCategory.
     * @example
     * // Create one ToolCategory
     * const ToolCategory = await prisma.toolCategory.create({
     *   data: {
     *     // ... data to create a ToolCategory
     *   }
     * })
     * 
     */
    create<T extends ToolCategoryCreateArgs>(args: SelectSubset<T, ToolCategoryCreateArgs<ExtArgs>>): Prisma__ToolCategoryClient<$Result.GetResult<Prisma.$ToolCategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ToolCategories.
     * @param {ToolCategoryCreateManyArgs} args - Arguments to create many ToolCategories.
     * @example
     * // Create many ToolCategories
     * const toolCategory = await prisma.toolCategory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ToolCategoryCreateManyArgs>(args?: SelectSubset<T, ToolCategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ToolCategories and returns the data saved in the database.
     * @param {ToolCategoryCreateManyAndReturnArgs} args - Arguments to create many ToolCategories.
     * @example
     * // Create many ToolCategories
     * const toolCategory = await prisma.toolCategory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ToolCategories and only return the `toolId`
     * const toolCategoryWithToolIdOnly = await prisma.toolCategory.createManyAndReturn({
     *   select: { toolId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ToolCategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, ToolCategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ToolCategoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ToolCategory.
     * @param {ToolCategoryDeleteArgs} args - Arguments to delete one ToolCategory.
     * @example
     * // Delete one ToolCategory
     * const ToolCategory = await prisma.toolCategory.delete({
     *   where: {
     *     // ... filter to delete one ToolCategory
     *   }
     * })
     * 
     */
    delete<T extends ToolCategoryDeleteArgs>(args: SelectSubset<T, ToolCategoryDeleteArgs<ExtArgs>>): Prisma__ToolCategoryClient<$Result.GetResult<Prisma.$ToolCategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ToolCategory.
     * @param {ToolCategoryUpdateArgs} args - Arguments to update one ToolCategory.
     * @example
     * // Update one ToolCategory
     * const toolCategory = await prisma.toolCategory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ToolCategoryUpdateArgs>(args: SelectSubset<T, ToolCategoryUpdateArgs<ExtArgs>>): Prisma__ToolCategoryClient<$Result.GetResult<Prisma.$ToolCategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ToolCategories.
     * @param {ToolCategoryDeleteManyArgs} args - Arguments to filter ToolCategories to delete.
     * @example
     * // Delete a few ToolCategories
     * const { count } = await prisma.toolCategory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ToolCategoryDeleteManyArgs>(args?: SelectSubset<T, ToolCategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ToolCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ToolCategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ToolCategories
     * const toolCategory = await prisma.toolCategory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ToolCategoryUpdateManyArgs>(args: SelectSubset<T, ToolCategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ToolCategories and returns the data updated in the database.
     * @param {ToolCategoryUpdateManyAndReturnArgs} args - Arguments to update many ToolCategories.
     * @example
     * // Update many ToolCategories
     * const toolCategory = await prisma.toolCategory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ToolCategories and only return the `toolId`
     * const toolCategoryWithToolIdOnly = await prisma.toolCategory.updateManyAndReturn({
     *   select: { toolId: true },
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
    updateManyAndReturn<T extends ToolCategoryUpdateManyAndReturnArgs>(args: SelectSubset<T, ToolCategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ToolCategoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ToolCategory.
     * @param {ToolCategoryUpsertArgs} args - Arguments to update or create a ToolCategory.
     * @example
     * // Update or create a ToolCategory
     * const toolCategory = await prisma.toolCategory.upsert({
     *   create: {
     *     // ... data to create a ToolCategory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ToolCategory we want to update
     *   }
     * })
     */
    upsert<T extends ToolCategoryUpsertArgs>(args: SelectSubset<T, ToolCategoryUpsertArgs<ExtArgs>>): Prisma__ToolCategoryClient<$Result.GetResult<Prisma.$ToolCategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ToolCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ToolCategoryCountArgs} args - Arguments to filter ToolCategories to count.
     * @example
     * // Count the number of ToolCategories
     * const count = await prisma.toolCategory.count({
     *   where: {
     *     // ... the filter for the ToolCategories we want to count
     *   }
     * })
    **/
    count<T extends ToolCategoryCountArgs>(
      args?: Subset<T, ToolCategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ToolCategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ToolCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ToolCategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ToolCategoryAggregateArgs>(args: Subset<T, ToolCategoryAggregateArgs>): Prisma.PrismaPromise<GetToolCategoryAggregateType<T>>

    /**
     * Group by ToolCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ToolCategoryGroupByArgs} args - Group by arguments.
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
      T extends ToolCategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ToolCategoryGroupByArgs['orderBy'] }
        : { orderBy?: ToolCategoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ToolCategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetToolCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ToolCategory model
   */
  readonly fields: ToolCategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ToolCategory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ToolCategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tool<T extends ToolDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ToolDefaultArgs<ExtArgs>>): Prisma__ToolClient<$Result.GetResult<Prisma.$ToolPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    category<T extends CategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoryDefaultArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ToolCategory model
   */
  interface ToolCategoryFieldRefs {
    readonly toolId: FieldRef<"ToolCategory", 'String'>
    readonly categoryId: FieldRef<"ToolCategory", 'String'>
    readonly createdAt: FieldRef<"ToolCategory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ToolCategory findUnique
   */
  export type ToolCategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ToolCategory
     */
    select?: ToolCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ToolCategory
     */
    omit?: ToolCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToolCategoryInclude<ExtArgs> | null
    /**
     * Filter, which ToolCategory to fetch.
     */
    where: ToolCategoryWhereUniqueInput
  }

  /**
   * ToolCategory findUniqueOrThrow
   */
  export type ToolCategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ToolCategory
     */
    select?: ToolCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ToolCategory
     */
    omit?: ToolCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToolCategoryInclude<ExtArgs> | null
    /**
     * Filter, which ToolCategory to fetch.
     */
    where: ToolCategoryWhereUniqueInput
  }

  /**
   * ToolCategory findFirst
   */
  export type ToolCategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ToolCategory
     */
    select?: ToolCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ToolCategory
     */
    omit?: ToolCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToolCategoryInclude<ExtArgs> | null
    /**
     * Filter, which ToolCategory to fetch.
     */
    where?: ToolCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ToolCategories to fetch.
     */
    orderBy?: ToolCategoryOrderByWithRelationInput | ToolCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ToolCategories.
     */
    cursor?: ToolCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ToolCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ToolCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ToolCategories.
     */
    distinct?: ToolCategoryScalarFieldEnum | ToolCategoryScalarFieldEnum[]
  }

  /**
   * ToolCategory findFirstOrThrow
   */
  export type ToolCategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ToolCategory
     */
    select?: ToolCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ToolCategory
     */
    omit?: ToolCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToolCategoryInclude<ExtArgs> | null
    /**
     * Filter, which ToolCategory to fetch.
     */
    where?: ToolCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ToolCategories to fetch.
     */
    orderBy?: ToolCategoryOrderByWithRelationInput | ToolCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ToolCategories.
     */
    cursor?: ToolCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ToolCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ToolCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ToolCategories.
     */
    distinct?: ToolCategoryScalarFieldEnum | ToolCategoryScalarFieldEnum[]
  }

  /**
   * ToolCategory findMany
   */
  export type ToolCategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ToolCategory
     */
    select?: ToolCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ToolCategory
     */
    omit?: ToolCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToolCategoryInclude<ExtArgs> | null
    /**
     * Filter, which ToolCategories to fetch.
     */
    where?: ToolCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ToolCategories to fetch.
     */
    orderBy?: ToolCategoryOrderByWithRelationInput | ToolCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ToolCategories.
     */
    cursor?: ToolCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ToolCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ToolCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ToolCategories.
     */
    distinct?: ToolCategoryScalarFieldEnum | ToolCategoryScalarFieldEnum[]
  }

  /**
   * ToolCategory create
   */
  export type ToolCategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ToolCategory
     */
    select?: ToolCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ToolCategory
     */
    omit?: ToolCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToolCategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a ToolCategory.
     */
    data: XOR<ToolCategoryCreateInput, ToolCategoryUncheckedCreateInput>
  }

  /**
   * ToolCategory createMany
   */
  export type ToolCategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ToolCategories.
     */
    data: ToolCategoryCreateManyInput | ToolCategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ToolCategory createManyAndReturn
   */
  export type ToolCategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ToolCategory
     */
    select?: ToolCategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ToolCategory
     */
    omit?: ToolCategoryOmit<ExtArgs> | null
    /**
     * The data used to create many ToolCategories.
     */
    data: ToolCategoryCreateManyInput | ToolCategoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToolCategoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ToolCategory update
   */
  export type ToolCategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ToolCategory
     */
    select?: ToolCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ToolCategory
     */
    omit?: ToolCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToolCategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a ToolCategory.
     */
    data: XOR<ToolCategoryUpdateInput, ToolCategoryUncheckedUpdateInput>
    /**
     * Choose, which ToolCategory to update.
     */
    where: ToolCategoryWhereUniqueInput
  }

  /**
   * ToolCategory updateMany
   */
  export type ToolCategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ToolCategories.
     */
    data: XOR<ToolCategoryUpdateManyMutationInput, ToolCategoryUncheckedUpdateManyInput>
    /**
     * Filter which ToolCategories to update
     */
    where?: ToolCategoryWhereInput
    /**
     * Limit how many ToolCategories to update.
     */
    limit?: number
  }

  /**
   * ToolCategory updateManyAndReturn
   */
  export type ToolCategoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ToolCategory
     */
    select?: ToolCategorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ToolCategory
     */
    omit?: ToolCategoryOmit<ExtArgs> | null
    /**
     * The data used to update ToolCategories.
     */
    data: XOR<ToolCategoryUpdateManyMutationInput, ToolCategoryUncheckedUpdateManyInput>
    /**
     * Filter which ToolCategories to update
     */
    where?: ToolCategoryWhereInput
    /**
     * Limit how many ToolCategories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToolCategoryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ToolCategory upsert
   */
  export type ToolCategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ToolCategory
     */
    select?: ToolCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ToolCategory
     */
    omit?: ToolCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToolCategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the ToolCategory to update in case it exists.
     */
    where: ToolCategoryWhereUniqueInput
    /**
     * In case the ToolCategory found by the `where` argument doesn't exist, create a new ToolCategory with this data.
     */
    create: XOR<ToolCategoryCreateInput, ToolCategoryUncheckedCreateInput>
    /**
     * In case the ToolCategory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ToolCategoryUpdateInput, ToolCategoryUncheckedUpdateInput>
  }

  /**
   * ToolCategory delete
   */
  export type ToolCategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ToolCategory
     */
    select?: ToolCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ToolCategory
     */
    omit?: ToolCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToolCategoryInclude<ExtArgs> | null
    /**
     * Filter which ToolCategory to delete.
     */
    where: ToolCategoryWhereUniqueInput
  }

  /**
   * ToolCategory deleteMany
   */
  export type ToolCategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ToolCategories to delete
     */
    where?: ToolCategoryWhereInput
    /**
     * Limit how many ToolCategories to delete.
     */
    limit?: number
  }

  /**
   * ToolCategory without action
   */
  export type ToolCategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ToolCategory
     */
    select?: ToolCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ToolCategory
     */
    omit?: ToolCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToolCategoryInclude<ExtArgs> | null
  }


  /**
   * Model ToolPlatform
   */

  export type AggregateToolPlatform = {
    _count: ToolPlatformCountAggregateOutputType | null
    _min: ToolPlatformMinAggregateOutputType | null
    _max: ToolPlatformMaxAggregateOutputType | null
  }

  export type ToolPlatformMinAggregateOutputType = {
    toolId: string | null
    platformId: string | null
    createdAt: Date | null
  }

  export type ToolPlatformMaxAggregateOutputType = {
    toolId: string | null
    platformId: string | null
    createdAt: Date | null
  }

  export type ToolPlatformCountAggregateOutputType = {
    toolId: number
    platformId: number
    createdAt: number
    _all: number
  }


  export type ToolPlatformMinAggregateInputType = {
    toolId?: true
    platformId?: true
    createdAt?: true
  }

  export type ToolPlatformMaxAggregateInputType = {
    toolId?: true
    platformId?: true
    createdAt?: true
  }

  export type ToolPlatformCountAggregateInputType = {
    toolId?: true
    platformId?: true
    createdAt?: true
    _all?: true
  }

  export type ToolPlatformAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ToolPlatform to aggregate.
     */
    where?: ToolPlatformWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ToolPlatforms to fetch.
     */
    orderBy?: ToolPlatformOrderByWithRelationInput | ToolPlatformOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ToolPlatformWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ToolPlatforms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ToolPlatforms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ToolPlatforms
    **/
    _count?: true | ToolPlatformCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ToolPlatformMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ToolPlatformMaxAggregateInputType
  }

  export type GetToolPlatformAggregateType<T extends ToolPlatformAggregateArgs> = {
        [P in keyof T & keyof AggregateToolPlatform]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateToolPlatform[P]>
      : GetScalarType<T[P], AggregateToolPlatform[P]>
  }




  export type ToolPlatformGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ToolPlatformWhereInput
    orderBy?: ToolPlatformOrderByWithAggregationInput | ToolPlatformOrderByWithAggregationInput[]
    by: ToolPlatformScalarFieldEnum[] | ToolPlatformScalarFieldEnum
    having?: ToolPlatformScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ToolPlatformCountAggregateInputType | true
    _min?: ToolPlatformMinAggregateInputType
    _max?: ToolPlatformMaxAggregateInputType
  }

  export type ToolPlatformGroupByOutputType = {
    toolId: string
    platformId: string
    createdAt: Date
    _count: ToolPlatformCountAggregateOutputType | null
    _min: ToolPlatformMinAggregateOutputType | null
    _max: ToolPlatformMaxAggregateOutputType | null
  }

  type GetToolPlatformGroupByPayload<T extends ToolPlatformGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ToolPlatformGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ToolPlatformGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ToolPlatformGroupByOutputType[P]>
            : GetScalarType<T[P], ToolPlatformGroupByOutputType[P]>
        }
      >
    >


  export type ToolPlatformSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    toolId?: boolean
    platformId?: boolean
    createdAt?: boolean
    tool?: boolean | ToolDefaultArgs<ExtArgs>
    platform?: boolean | PlatformDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["toolPlatform"]>

  export type ToolPlatformSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    toolId?: boolean
    platformId?: boolean
    createdAt?: boolean
    tool?: boolean | ToolDefaultArgs<ExtArgs>
    platform?: boolean | PlatformDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["toolPlatform"]>

  export type ToolPlatformSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    toolId?: boolean
    platformId?: boolean
    createdAt?: boolean
    tool?: boolean | ToolDefaultArgs<ExtArgs>
    platform?: boolean | PlatformDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["toolPlatform"]>

  export type ToolPlatformSelectScalar = {
    toolId?: boolean
    platformId?: boolean
    createdAt?: boolean
  }

  export type ToolPlatformOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"toolId" | "platformId" | "createdAt", ExtArgs["result"]["toolPlatform"]>
  export type ToolPlatformInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tool?: boolean | ToolDefaultArgs<ExtArgs>
    platform?: boolean | PlatformDefaultArgs<ExtArgs>
  }
  export type ToolPlatformIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tool?: boolean | ToolDefaultArgs<ExtArgs>
    platform?: boolean | PlatformDefaultArgs<ExtArgs>
  }
  export type ToolPlatformIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tool?: boolean | ToolDefaultArgs<ExtArgs>
    platform?: boolean | PlatformDefaultArgs<ExtArgs>
  }

  export type $ToolPlatformPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ToolPlatform"
    objects: {
      tool: Prisma.$ToolPayload<ExtArgs>
      platform: Prisma.$PlatformPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      toolId: string
      platformId: string
      createdAt: Date
    }, ExtArgs["result"]["toolPlatform"]>
    composites: {}
  }

  type ToolPlatformGetPayload<S extends boolean | null | undefined | ToolPlatformDefaultArgs> = $Result.GetResult<Prisma.$ToolPlatformPayload, S>

  type ToolPlatformCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ToolPlatformFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ToolPlatformCountAggregateInputType | true
    }

  export interface ToolPlatformDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ToolPlatform'], meta: { name: 'ToolPlatform' } }
    /**
     * Find zero or one ToolPlatform that matches the filter.
     * @param {ToolPlatformFindUniqueArgs} args - Arguments to find a ToolPlatform
     * @example
     * // Get one ToolPlatform
     * const toolPlatform = await prisma.toolPlatform.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ToolPlatformFindUniqueArgs>(args: SelectSubset<T, ToolPlatformFindUniqueArgs<ExtArgs>>): Prisma__ToolPlatformClient<$Result.GetResult<Prisma.$ToolPlatformPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ToolPlatform that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ToolPlatformFindUniqueOrThrowArgs} args - Arguments to find a ToolPlatform
     * @example
     * // Get one ToolPlatform
     * const toolPlatform = await prisma.toolPlatform.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ToolPlatformFindUniqueOrThrowArgs>(args: SelectSubset<T, ToolPlatformFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ToolPlatformClient<$Result.GetResult<Prisma.$ToolPlatformPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ToolPlatform that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ToolPlatformFindFirstArgs} args - Arguments to find a ToolPlatform
     * @example
     * // Get one ToolPlatform
     * const toolPlatform = await prisma.toolPlatform.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ToolPlatformFindFirstArgs>(args?: SelectSubset<T, ToolPlatformFindFirstArgs<ExtArgs>>): Prisma__ToolPlatformClient<$Result.GetResult<Prisma.$ToolPlatformPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ToolPlatform that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ToolPlatformFindFirstOrThrowArgs} args - Arguments to find a ToolPlatform
     * @example
     * // Get one ToolPlatform
     * const toolPlatform = await prisma.toolPlatform.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ToolPlatformFindFirstOrThrowArgs>(args?: SelectSubset<T, ToolPlatformFindFirstOrThrowArgs<ExtArgs>>): Prisma__ToolPlatformClient<$Result.GetResult<Prisma.$ToolPlatformPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ToolPlatforms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ToolPlatformFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ToolPlatforms
     * const toolPlatforms = await prisma.toolPlatform.findMany()
     * 
     * // Get first 10 ToolPlatforms
     * const toolPlatforms = await prisma.toolPlatform.findMany({ take: 10 })
     * 
     * // Only select the `toolId`
     * const toolPlatformWithToolIdOnly = await prisma.toolPlatform.findMany({ select: { toolId: true } })
     * 
     */
    findMany<T extends ToolPlatformFindManyArgs>(args?: SelectSubset<T, ToolPlatformFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ToolPlatformPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ToolPlatform.
     * @param {ToolPlatformCreateArgs} args - Arguments to create a ToolPlatform.
     * @example
     * // Create one ToolPlatform
     * const ToolPlatform = await prisma.toolPlatform.create({
     *   data: {
     *     // ... data to create a ToolPlatform
     *   }
     * })
     * 
     */
    create<T extends ToolPlatformCreateArgs>(args: SelectSubset<T, ToolPlatformCreateArgs<ExtArgs>>): Prisma__ToolPlatformClient<$Result.GetResult<Prisma.$ToolPlatformPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ToolPlatforms.
     * @param {ToolPlatformCreateManyArgs} args - Arguments to create many ToolPlatforms.
     * @example
     * // Create many ToolPlatforms
     * const toolPlatform = await prisma.toolPlatform.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ToolPlatformCreateManyArgs>(args?: SelectSubset<T, ToolPlatformCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ToolPlatforms and returns the data saved in the database.
     * @param {ToolPlatformCreateManyAndReturnArgs} args - Arguments to create many ToolPlatforms.
     * @example
     * // Create many ToolPlatforms
     * const toolPlatform = await prisma.toolPlatform.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ToolPlatforms and only return the `toolId`
     * const toolPlatformWithToolIdOnly = await prisma.toolPlatform.createManyAndReturn({
     *   select: { toolId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ToolPlatformCreateManyAndReturnArgs>(args?: SelectSubset<T, ToolPlatformCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ToolPlatformPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ToolPlatform.
     * @param {ToolPlatformDeleteArgs} args - Arguments to delete one ToolPlatform.
     * @example
     * // Delete one ToolPlatform
     * const ToolPlatform = await prisma.toolPlatform.delete({
     *   where: {
     *     // ... filter to delete one ToolPlatform
     *   }
     * })
     * 
     */
    delete<T extends ToolPlatformDeleteArgs>(args: SelectSubset<T, ToolPlatformDeleteArgs<ExtArgs>>): Prisma__ToolPlatformClient<$Result.GetResult<Prisma.$ToolPlatformPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ToolPlatform.
     * @param {ToolPlatformUpdateArgs} args - Arguments to update one ToolPlatform.
     * @example
     * // Update one ToolPlatform
     * const toolPlatform = await prisma.toolPlatform.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ToolPlatformUpdateArgs>(args: SelectSubset<T, ToolPlatformUpdateArgs<ExtArgs>>): Prisma__ToolPlatformClient<$Result.GetResult<Prisma.$ToolPlatformPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ToolPlatforms.
     * @param {ToolPlatformDeleteManyArgs} args - Arguments to filter ToolPlatforms to delete.
     * @example
     * // Delete a few ToolPlatforms
     * const { count } = await prisma.toolPlatform.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ToolPlatformDeleteManyArgs>(args?: SelectSubset<T, ToolPlatformDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ToolPlatforms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ToolPlatformUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ToolPlatforms
     * const toolPlatform = await prisma.toolPlatform.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ToolPlatformUpdateManyArgs>(args: SelectSubset<T, ToolPlatformUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ToolPlatforms and returns the data updated in the database.
     * @param {ToolPlatformUpdateManyAndReturnArgs} args - Arguments to update many ToolPlatforms.
     * @example
     * // Update many ToolPlatforms
     * const toolPlatform = await prisma.toolPlatform.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ToolPlatforms and only return the `toolId`
     * const toolPlatformWithToolIdOnly = await prisma.toolPlatform.updateManyAndReturn({
     *   select: { toolId: true },
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
    updateManyAndReturn<T extends ToolPlatformUpdateManyAndReturnArgs>(args: SelectSubset<T, ToolPlatformUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ToolPlatformPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ToolPlatform.
     * @param {ToolPlatformUpsertArgs} args - Arguments to update or create a ToolPlatform.
     * @example
     * // Update or create a ToolPlatform
     * const toolPlatform = await prisma.toolPlatform.upsert({
     *   create: {
     *     // ... data to create a ToolPlatform
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ToolPlatform we want to update
     *   }
     * })
     */
    upsert<T extends ToolPlatformUpsertArgs>(args: SelectSubset<T, ToolPlatformUpsertArgs<ExtArgs>>): Prisma__ToolPlatformClient<$Result.GetResult<Prisma.$ToolPlatformPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ToolPlatforms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ToolPlatformCountArgs} args - Arguments to filter ToolPlatforms to count.
     * @example
     * // Count the number of ToolPlatforms
     * const count = await prisma.toolPlatform.count({
     *   where: {
     *     // ... the filter for the ToolPlatforms we want to count
     *   }
     * })
    **/
    count<T extends ToolPlatformCountArgs>(
      args?: Subset<T, ToolPlatformCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ToolPlatformCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ToolPlatform.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ToolPlatformAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ToolPlatformAggregateArgs>(args: Subset<T, ToolPlatformAggregateArgs>): Prisma.PrismaPromise<GetToolPlatformAggregateType<T>>

    /**
     * Group by ToolPlatform.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ToolPlatformGroupByArgs} args - Group by arguments.
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
      T extends ToolPlatformGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ToolPlatformGroupByArgs['orderBy'] }
        : { orderBy?: ToolPlatformGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ToolPlatformGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetToolPlatformGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ToolPlatform model
   */
  readonly fields: ToolPlatformFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ToolPlatform.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ToolPlatformClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tool<T extends ToolDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ToolDefaultArgs<ExtArgs>>): Prisma__ToolClient<$Result.GetResult<Prisma.$ToolPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    platform<T extends PlatformDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PlatformDefaultArgs<ExtArgs>>): Prisma__PlatformClient<$Result.GetResult<Prisma.$PlatformPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ToolPlatform model
   */
  interface ToolPlatformFieldRefs {
    readonly toolId: FieldRef<"ToolPlatform", 'String'>
    readonly platformId: FieldRef<"ToolPlatform", 'String'>
    readonly createdAt: FieldRef<"ToolPlatform", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ToolPlatform findUnique
   */
  export type ToolPlatformFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ToolPlatform
     */
    select?: ToolPlatformSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ToolPlatform
     */
    omit?: ToolPlatformOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToolPlatformInclude<ExtArgs> | null
    /**
     * Filter, which ToolPlatform to fetch.
     */
    where: ToolPlatformWhereUniqueInput
  }

  /**
   * ToolPlatform findUniqueOrThrow
   */
  export type ToolPlatformFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ToolPlatform
     */
    select?: ToolPlatformSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ToolPlatform
     */
    omit?: ToolPlatformOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToolPlatformInclude<ExtArgs> | null
    /**
     * Filter, which ToolPlatform to fetch.
     */
    where: ToolPlatformWhereUniqueInput
  }

  /**
   * ToolPlatform findFirst
   */
  export type ToolPlatformFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ToolPlatform
     */
    select?: ToolPlatformSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ToolPlatform
     */
    omit?: ToolPlatformOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToolPlatformInclude<ExtArgs> | null
    /**
     * Filter, which ToolPlatform to fetch.
     */
    where?: ToolPlatformWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ToolPlatforms to fetch.
     */
    orderBy?: ToolPlatformOrderByWithRelationInput | ToolPlatformOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ToolPlatforms.
     */
    cursor?: ToolPlatformWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ToolPlatforms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ToolPlatforms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ToolPlatforms.
     */
    distinct?: ToolPlatformScalarFieldEnum | ToolPlatformScalarFieldEnum[]
  }

  /**
   * ToolPlatform findFirstOrThrow
   */
  export type ToolPlatformFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ToolPlatform
     */
    select?: ToolPlatformSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ToolPlatform
     */
    omit?: ToolPlatformOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToolPlatformInclude<ExtArgs> | null
    /**
     * Filter, which ToolPlatform to fetch.
     */
    where?: ToolPlatformWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ToolPlatforms to fetch.
     */
    orderBy?: ToolPlatformOrderByWithRelationInput | ToolPlatformOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ToolPlatforms.
     */
    cursor?: ToolPlatformWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ToolPlatforms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ToolPlatforms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ToolPlatforms.
     */
    distinct?: ToolPlatformScalarFieldEnum | ToolPlatformScalarFieldEnum[]
  }

  /**
   * ToolPlatform findMany
   */
  export type ToolPlatformFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ToolPlatform
     */
    select?: ToolPlatformSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ToolPlatform
     */
    omit?: ToolPlatformOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToolPlatformInclude<ExtArgs> | null
    /**
     * Filter, which ToolPlatforms to fetch.
     */
    where?: ToolPlatformWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ToolPlatforms to fetch.
     */
    orderBy?: ToolPlatformOrderByWithRelationInput | ToolPlatformOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ToolPlatforms.
     */
    cursor?: ToolPlatformWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ToolPlatforms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ToolPlatforms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ToolPlatforms.
     */
    distinct?: ToolPlatformScalarFieldEnum | ToolPlatformScalarFieldEnum[]
  }

  /**
   * ToolPlatform create
   */
  export type ToolPlatformCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ToolPlatform
     */
    select?: ToolPlatformSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ToolPlatform
     */
    omit?: ToolPlatformOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToolPlatformInclude<ExtArgs> | null
    /**
     * The data needed to create a ToolPlatform.
     */
    data: XOR<ToolPlatformCreateInput, ToolPlatformUncheckedCreateInput>
  }

  /**
   * ToolPlatform createMany
   */
  export type ToolPlatformCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ToolPlatforms.
     */
    data: ToolPlatformCreateManyInput | ToolPlatformCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ToolPlatform createManyAndReturn
   */
  export type ToolPlatformCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ToolPlatform
     */
    select?: ToolPlatformSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ToolPlatform
     */
    omit?: ToolPlatformOmit<ExtArgs> | null
    /**
     * The data used to create many ToolPlatforms.
     */
    data: ToolPlatformCreateManyInput | ToolPlatformCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToolPlatformIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ToolPlatform update
   */
  export type ToolPlatformUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ToolPlatform
     */
    select?: ToolPlatformSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ToolPlatform
     */
    omit?: ToolPlatformOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToolPlatformInclude<ExtArgs> | null
    /**
     * The data needed to update a ToolPlatform.
     */
    data: XOR<ToolPlatformUpdateInput, ToolPlatformUncheckedUpdateInput>
    /**
     * Choose, which ToolPlatform to update.
     */
    where: ToolPlatformWhereUniqueInput
  }

  /**
   * ToolPlatform updateMany
   */
  export type ToolPlatformUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ToolPlatforms.
     */
    data: XOR<ToolPlatformUpdateManyMutationInput, ToolPlatformUncheckedUpdateManyInput>
    /**
     * Filter which ToolPlatforms to update
     */
    where?: ToolPlatformWhereInput
    /**
     * Limit how many ToolPlatforms to update.
     */
    limit?: number
  }

  /**
   * ToolPlatform updateManyAndReturn
   */
  export type ToolPlatformUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ToolPlatform
     */
    select?: ToolPlatformSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ToolPlatform
     */
    omit?: ToolPlatformOmit<ExtArgs> | null
    /**
     * The data used to update ToolPlatforms.
     */
    data: XOR<ToolPlatformUpdateManyMutationInput, ToolPlatformUncheckedUpdateManyInput>
    /**
     * Filter which ToolPlatforms to update
     */
    where?: ToolPlatformWhereInput
    /**
     * Limit how many ToolPlatforms to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToolPlatformIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ToolPlatform upsert
   */
  export type ToolPlatformUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ToolPlatform
     */
    select?: ToolPlatformSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ToolPlatform
     */
    omit?: ToolPlatformOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToolPlatformInclude<ExtArgs> | null
    /**
     * The filter to search for the ToolPlatform to update in case it exists.
     */
    where: ToolPlatformWhereUniqueInput
    /**
     * In case the ToolPlatform found by the `where` argument doesn't exist, create a new ToolPlatform with this data.
     */
    create: XOR<ToolPlatformCreateInput, ToolPlatformUncheckedCreateInput>
    /**
     * In case the ToolPlatform was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ToolPlatformUpdateInput, ToolPlatformUncheckedUpdateInput>
  }

  /**
   * ToolPlatform delete
   */
  export type ToolPlatformDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ToolPlatform
     */
    select?: ToolPlatformSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ToolPlatform
     */
    omit?: ToolPlatformOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToolPlatformInclude<ExtArgs> | null
    /**
     * Filter which ToolPlatform to delete.
     */
    where: ToolPlatformWhereUniqueInput
  }

  /**
   * ToolPlatform deleteMany
   */
  export type ToolPlatformDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ToolPlatforms to delete
     */
    where?: ToolPlatformWhereInput
    /**
     * Limit how many ToolPlatforms to delete.
     */
    limit?: number
  }

  /**
   * ToolPlatform without action
   */
  export type ToolPlatformDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ToolPlatform
     */
    select?: ToolPlatformSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ToolPlatform
     */
    omit?: ToolPlatformOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToolPlatformInclude<ExtArgs> | null
  }


  /**
   * Model ToolCapability
   */

  export type AggregateToolCapability = {
    _count: ToolCapabilityCountAggregateOutputType | null
    _avg: ToolCapabilityAvgAggregateOutputType | null
    _sum: ToolCapabilitySumAggregateOutputType | null
    _min: ToolCapabilityMinAggregateOutputType | null
    _max: ToolCapabilityMaxAggregateOutputType | null
  }

  export type ToolCapabilityAvgAggregateOutputType = {
    sortOrder: number | null
  }

  export type ToolCapabilitySumAggregateOutputType = {
    sortOrder: number | null
  }

  export type ToolCapabilityMinAggregateOutputType = {
    id: string | null
    toolId: string | null
    title: string | null
    summary: string | null
    sortOrder: number | null
    createdAt: Date | null
  }

  export type ToolCapabilityMaxAggregateOutputType = {
    id: string | null
    toolId: string | null
    title: string | null
    summary: string | null
    sortOrder: number | null
    createdAt: Date | null
  }

  export type ToolCapabilityCountAggregateOutputType = {
    id: number
    toolId: number
    title: number
    summary: number
    sortOrder: number
    createdAt: number
    _all: number
  }


  export type ToolCapabilityAvgAggregateInputType = {
    sortOrder?: true
  }

  export type ToolCapabilitySumAggregateInputType = {
    sortOrder?: true
  }

  export type ToolCapabilityMinAggregateInputType = {
    id?: true
    toolId?: true
    title?: true
    summary?: true
    sortOrder?: true
    createdAt?: true
  }

  export type ToolCapabilityMaxAggregateInputType = {
    id?: true
    toolId?: true
    title?: true
    summary?: true
    sortOrder?: true
    createdAt?: true
  }

  export type ToolCapabilityCountAggregateInputType = {
    id?: true
    toolId?: true
    title?: true
    summary?: true
    sortOrder?: true
    createdAt?: true
    _all?: true
  }

  export type ToolCapabilityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ToolCapability to aggregate.
     */
    where?: ToolCapabilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ToolCapabilities to fetch.
     */
    orderBy?: ToolCapabilityOrderByWithRelationInput | ToolCapabilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ToolCapabilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ToolCapabilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ToolCapabilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ToolCapabilities
    **/
    _count?: true | ToolCapabilityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ToolCapabilityAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ToolCapabilitySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ToolCapabilityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ToolCapabilityMaxAggregateInputType
  }

  export type GetToolCapabilityAggregateType<T extends ToolCapabilityAggregateArgs> = {
        [P in keyof T & keyof AggregateToolCapability]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateToolCapability[P]>
      : GetScalarType<T[P], AggregateToolCapability[P]>
  }




  export type ToolCapabilityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ToolCapabilityWhereInput
    orderBy?: ToolCapabilityOrderByWithAggregationInput | ToolCapabilityOrderByWithAggregationInput[]
    by: ToolCapabilityScalarFieldEnum[] | ToolCapabilityScalarFieldEnum
    having?: ToolCapabilityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ToolCapabilityCountAggregateInputType | true
    _avg?: ToolCapabilityAvgAggregateInputType
    _sum?: ToolCapabilitySumAggregateInputType
    _min?: ToolCapabilityMinAggregateInputType
    _max?: ToolCapabilityMaxAggregateInputType
  }

  export type ToolCapabilityGroupByOutputType = {
    id: string
    toolId: string
    title: string
    summary: string | null
    sortOrder: number
    createdAt: Date
    _count: ToolCapabilityCountAggregateOutputType | null
    _avg: ToolCapabilityAvgAggregateOutputType | null
    _sum: ToolCapabilitySumAggregateOutputType | null
    _min: ToolCapabilityMinAggregateOutputType | null
    _max: ToolCapabilityMaxAggregateOutputType | null
  }

  type GetToolCapabilityGroupByPayload<T extends ToolCapabilityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ToolCapabilityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ToolCapabilityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ToolCapabilityGroupByOutputType[P]>
            : GetScalarType<T[P], ToolCapabilityGroupByOutputType[P]>
        }
      >
    >


  export type ToolCapabilitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    toolId?: boolean
    title?: boolean
    summary?: boolean
    sortOrder?: boolean
    createdAt?: boolean
    tool?: boolean | ToolDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["toolCapability"]>

  export type ToolCapabilitySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    toolId?: boolean
    title?: boolean
    summary?: boolean
    sortOrder?: boolean
    createdAt?: boolean
    tool?: boolean | ToolDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["toolCapability"]>

  export type ToolCapabilitySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    toolId?: boolean
    title?: boolean
    summary?: boolean
    sortOrder?: boolean
    createdAt?: boolean
    tool?: boolean | ToolDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["toolCapability"]>

  export type ToolCapabilitySelectScalar = {
    id?: boolean
    toolId?: boolean
    title?: boolean
    summary?: boolean
    sortOrder?: boolean
    createdAt?: boolean
  }

  export type ToolCapabilityOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "toolId" | "title" | "summary" | "sortOrder" | "createdAt", ExtArgs["result"]["toolCapability"]>
  export type ToolCapabilityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tool?: boolean | ToolDefaultArgs<ExtArgs>
  }
  export type ToolCapabilityIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tool?: boolean | ToolDefaultArgs<ExtArgs>
  }
  export type ToolCapabilityIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tool?: boolean | ToolDefaultArgs<ExtArgs>
  }

  export type $ToolCapabilityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ToolCapability"
    objects: {
      tool: Prisma.$ToolPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      toolId: string
      title: string
      summary: string | null
      sortOrder: number
      createdAt: Date
    }, ExtArgs["result"]["toolCapability"]>
    composites: {}
  }

  type ToolCapabilityGetPayload<S extends boolean | null | undefined | ToolCapabilityDefaultArgs> = $Result.GetResult<Prisma.$ToolCapabilityPayload, S>

  type ToolCapabilityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ToolCapabilityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ToolCapabilityCountAggregateInputType | true
    }

  export interface ToolCapabilityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ToolCapability'], meta: { name: 'ToolCapability' } }
    /**
     * Find zero or one ToolCapability that matches the filter.
     * @param {ToolCapabilityFindUniqueArgs} args - Arguments to find a ToolCapability
     * @example
     * // Get one ToolCapability
     * const toolCapability = await prisma.toolCapability.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ToolCapabilityFindUniqueArgs>(args: SelectSubset<T, ToolCapabilityFindUniqueArgs<ExtArgs>>): Prisma__ToolCapabilityClient<$Result.GetResult<Prisma.$ToolCapabilityPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ToolCapability that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ToolCapabilityFindUniqueOrThrowArgs} args - Arguments to find a ToolCapability
     * @example
     * // Get one ToolCapability
     * const toolCapability = await prisma.toolCapability.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ToolCapabilityFindUniqueOrThrowArgs>(args: SelectSubset<T, ToolCapabilityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ToolCapabilityClient<$Result.GetResult<Prisma.$ToolCapabilityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ToolCapability that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ToolCapabilityFindFirstArgs} args - Arguments to find a ToolCapability
     * @example
     * // Get one ToolCapability
     * const toolCapability = await prisma.toolCapability.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ToolCapabilityFindFirstArgs>(args?: SelectSubset<T, ToolCapabilityFindFirstArgs<ExtArgs>>): Prisma__ToolCapabilityClient<$Result.GetResult<Prisma.$ToolCapabilityPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ToolCapability that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ToolCapabilityFindFirstOrThrowArgs} args - Arguments to find a ToolCapability
     * @example
     * // Get one ToolCapability
     * const toolCapability = await prisma.toolCapability.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ToolCapabilityFindFirstOrThrowArgs>(args?: SelectSubset<T, ToolCapabilityFindFirstOrThrowArgs<ExtArgs>>): Prisma__ToolCapabilityClient<$Result.GetResult<Prisma.$ToolCapabilityPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ToolCapabilities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ToolCapabilityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ToolCapabilities
     * const toolCapabilities = await prisma.toolCapability.findMany()
     * 
     * // Get first 10 ToolCapabilities
     * const toolCapabilities = await prisma.toolCapability.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const toolCapabilityWithIdOnly = await prisma.toolCapability.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ToolCapabilityFindManyArgs>(args?: SelectSubset<T, ToolCapabilityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ToolCapabilityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ToolCapability.
     * @param {ToolCapabilityCreateArgs} args - Arguments to create a ToolCapability.
     * @example
     * // Create one ToolCapability
     * const ToolCapability = await prisma.toolCapability.create({
     *   data: {
     *     // ... data to create a ToolCapability
     *   }
     * })
     * 
     */
    create<T extends ToolCapabilityCreateArgs>(args: SelectSubset<T, ToolCapabilityCreateArgs<ExtArgs>>): Prisma__ToolCapabilityClient<$Result.GetResult<Prisma.$ToolCapabilityPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ToolCapabilities.
     * @param {ToolCapabilityCreateManyArgs} args - Arguments to create many ToolCapabilities.
     * @example
     * // Create many ToolCapabilities
     * const toolCapability = await prisma.toolCapability.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ToolCapabilityCreateManyArgs>(args?: SelectSubset<T, ToolCapabilityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ToolCapabilities and returns the data saved in the database.
     * @param {ToolCapabilityCreateManyAndReturnArgs} args - Arguments to create many ToolCapabilities.
     * @example
     * // Create many ToolCapabilities
     * const toolCapability = await prisma.toolCapability.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ToolCapabilities and only return the `id`
     * const toolCapabilityWithIdOnly = await prisma.toolCapability.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ToolCapabilityCreateManyAndReturnArgs>(args?: SelectSubset<T, ToolCapabilityCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ToolCapabilityPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ToolCapability.
     * @param {ToolCapabilityDeleteArgs} args - Arguments to delete one ToolCapability.
     * @example
     * // Delete one ToolCapability
     * const ToolCapability = await prisma.toolCapability.delete({
     *   where: {
     *     // ... filter to delete one ToolCapability
     *   }
     * })
     * 
     */
    delete<T extends ToolCapabilityDeleteArgs>(args: SelectSubset<T, ToolCapabilityDeleteArgs<ExtArgs>>): Prisma__ToolCapabilityClient<$Result.GetResult<Prisma.$ToolCapabilityPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ToolCapability.
     * @param {ToolCapabilityUpdateArgs} args - Arguments to update one ToolCapability.
     * @example
     * // Update one ToolCapability
     * const toolCapability = await prisma.toolCapability.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ToolCapabilityUpdateArgs>(args: SelectSubset<T, ToolCapabilityUpdateArgs<ExtArgs>>): Prisma__ToolCapabilityClient<$Result.GetResult<Prisma.$ToolCapabilityPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ToolCapabilities.
     * @param {ToolCapabilityDeleteManyArgs} args - Arguments to filter ToolCapabilities to delete.
     * @example
     * // Delete a few ToolCapabilities
     * const { count } = await prisma.toolCapability.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ToolCapabilityDeleteManyArgs>(args?: SelectSubset<T, ToolCapabilityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ToolCapabilities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ToolCapabilityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ToolCapabilities
     * const toolCapability = await prisma.toolCapability.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ToolCapabilityUpdateManyArgs>(args: SelectSubset<T, ToolCapabilityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ToolCapabilities and returns the data updated in the database.
     * @param {ToolCapabilityUpdateManyAndReturnArgs} args - Arguments to update many ToolCapabilities.
     * @example
     * // Update many ToolCapabilities
     * const toolCapability = await prisma.toolCapability.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ToolCapabilities and only return the `id`
     * const toolCapabilityWithIdOnly = await prisma.toolCapability.updateManyAndReturn({
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
    updateManyAndReturn<T extends ToolCapabilityUpdateManyAndReturnArgs>(args: SelectSubset<T, ToolCapabilityUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ToolCapabilityPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ToolCapability.
     * @param {ToolCapabilityUpsertArgs} args - Arguments to update or create a ToolCapability.
     * @example
     * // Update or create a ToolCapability
     * const toolCapability = await prisma.toolCapability.upsert({
     *   create: {
     *     // ... data to create a ToolCapability
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ToolCapability we want to update
     *   }
     * })
     */
    upsert<T extends ToolCapabilityUpsertArgs>(args: SelectSubset<T, ToolCapabilityUpsertArgs<ExtArgs>>): Prisma__ToolCapabilityClient<$Result.GetResult<Prisma.$ToolCapabilityPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ToolCapabilities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ToolCapabilityCountArgs} args - Arguments to filter ToolCapabilities to count.
     * @example
     * // Count the number of ToolCapabilities
     * const count = await prisma.toolCapability.count({
     *   where: {
     *     // ... the filter for the ToolCapabilities we want to count
     *   }
     * })
    **/
    count<T extends ToolCapabilityCountArgs>(
      args?: Subset<T, ToolCapabilityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ToolCapabilityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ToolCapability.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ToolCapabilityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ToolCapabilityAggregateArgs>(args: Subset<T, ToolCapabilityAggregateArgs>): Prisma.PrismaPromise<GetToolCapabilityAggregateType<T>>

    /**
     * Group by ToolCapability.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ToolCapabilityGroupByArgs} args - Group by arguments.
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
      T extends ToolCapabilityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ToolCapabilityGroupByArgs['orderBy'] }
        : { orderBy?: ToolCapabilityGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ToolCapabilityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetToolCapabilityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ToolCapability model
   */
  readonly fields: ToolCapabilityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ToolCapability.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ToolCapabilityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tool<T extends ToolDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ToolDefaultArgs<ExtArgs>>): Prisma__ToolClient<$Result.GetResult<Prisma.$ToolPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ToolCapability model
   */
  interface ToolCapabilityFieldRefs {
    readonly id: FieldRef<"ToolCapability", 'String'>
    readonly toolId: FieldRef<"ToolCapability", 'String'>
    readonly title: FieldRef<"ToolCapability", 'String'>
    readonly summary: FieldRef<"ToolCapability", 'String'>
    readonly sortOrder: FieldRef<"ToolCapability", 'Int'>
    readonly createdAt: FieldRef<"ToolCapability", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ToolCapability findUnique
   */
  export type ToolCapabilityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ToolCapability
     */
    select?: ToolCapabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ToolCapability
     */
    omit?: ToolCapabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToolCapabilityInclude<ExtArgs> | null
    /**
     * Filter, which ToolCapability to fetch.
     */
    where: ToolCapabilityWhereUniqueInput
  }

  /**
   * ToolCapability findUniqueOrThrow
   */
  export type ToolCapabilityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ToolCapability
     */
    select?: ToolCapabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ToolCapability
     */
    omit?: ToolCapabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToolCapabilityInclude<ExtArgs> | null
    /**
     * Filter, which ToolCapability to fetch.
     */
    where: ToolCapabilityWhereUniqueInput
  }

  /**
   * ToolCapability findFirst
   */
  export type ToolCapabilityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ToolCapability
     */
    select?: ToolCapabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ToolCapability
     */
    omit?: ToolCapabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToolCapabilityInclude<ExtArgs> | null
    /**
     * Filter, which ToolCapability to fetch.
     */
    where?: ToolCapabilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ToolCapabilities to fetch.
     */
    orderBy?: ToolCapabilityOrderByWithRelationInput | ToolCapabilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ToolCapabilities.
     */
    cursor?: ToolCapabilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ToolCapabilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ToolCapabilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ToolCapabilities.
     */
    distinct?: ToolCapabilityScalarFieldEnum | ToolCapabilityScalarFieldEnum[]
  }

  /**
   * ToolCapability findFirstOrThrow
   */
  export type ToolCapabilityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ToolCapability
     */
    select?: ToolCapabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ToolCapability
     */
    omit?: ToolCapabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToolCapabilityInclude<ExtArgs> | null
    /**
     * Filter, which ToolCapability to fetch.
     */
    where?: ToolCapabilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ToolCapabilities to fetch.
     */
    orderBy?: ToolCapabilityOrderByWithRelationInput | ToolCapabilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ToolCapabilities.
     */
    cursor?: ToolCapabilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ToolCapabilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ToolCapabilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ToolCapabilities.
     */
    distinct?: ToolCapabilityScalarFieldEnum | ToolCapabilityScalarFieldEnum[]
  }

  /**
   * ToolCapability findMany
   */
  export type ToolCapabilityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ToolCapability
     */
    select?: ToolCapabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ToolCapability
     */
    omit?: ToolCapabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToolCapabilityInclude<ExtArgs> | null
    /**
     * Filter, which ToolCapabilities to fetch.
     */
    where?: ToolCapabilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ToolCapabilities to fetch.
     */
    orderBy?: ToolCapabilityOrderByWithRelationInput | ToolCapabilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ToolCapabilities.
     */
    cursor?: ToolCapabilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ToolCapabilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ToolCapabilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ToolCapabilities.
     */
    distinct?: ToolCapabilityScalarFieldEnum | ToolCapabilityScalarFieldEnum[]
  }

  /**
   * ToolCapability create
   */
  export type ToolCapabilityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ToolCapability
     */
    select?: ToolCapabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ToolCapability
     */
    omit?: ToolCapabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToolCapabilityInclude<ExtArgs> | null
    /**
     * The data needed to create a ToolCapability.
     */
    data: XOR<ToolCapabilityCreateInput, ToolCapabilityUncheckedCreateInput>
  }

  /**
   * ToolCapability createMany
   */
  export type ToolCapabilityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ToolCapabilities.
     */
    data: ToolCapabilityCreateManyInput | ToolCapabilityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ToolCapability createManyAndReturn
   */
  export type ToolCapabilityCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ToolCapability
     */
    select?: ToolCapabilitySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ToolCapability
     */
    omit?: ToolCapabilityOmit<ExtArgs> | null
    /**
     * The data used to create many ToolCapabilities.
     */
    data: ToolCapabilityCreateManyInput | ToolCapabilityCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToolCapabilityIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ToolCapability update
   */
  export type ToolCapabilityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ToolCapability
     */
    select?: ToolCapabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ToolCapability
     */
    omit?: ToolCapabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToolCapabilityInclude<ExtArgs> | null
    /**
     * The data needed to update a ToolCapability.
     */
    data: XOR<ToolCapabilityUpdateInput, ToolCapabilityUncheckedUpdateInput>
    /**
     * Choose, which ToolCapability to update.
     */
    where: ToolCapabilityWhereUniqueInput
  }

  /**
   * ToolCapability updateMany
   */
  export type ToolCapabilityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ToolCapabilities.
     */
    data: XOR<ToolCapabilityUpdateManyMutationInput, ToolCapabilityUncheckedUpdateManyInput>
    /**
     * Filter which ToolCapabilities to update
     */
    where?: ToolCapabilityWhereInput
    /**
     * Limit how many ToolCapabilities to update.
     */
    limit?: number
  }

  /**
   * ToolCapability updateManyAndReturn
   */
  export type ToolCapabilityUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ToolCapability
     */
    select?: ToolCapabilitySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ToolCapability
     */
    omit?: ToolCapabilityOmit<ExtArgs> | null
    /**
     * The data used to update ToolCapabilities.
     */
    data: XOR<ToolCapabilityUpdateManyMutationInput, ToolCapabilityUncheckedUpdateManyInput>
    /**
     * Filter which ToolCapabilities to update
     */
    where?: ToolCapabilityWhereInput
    /**
     * Limit how many ToolCapabilities to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToolCapabilityIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ToolCapability upsert
   */
  export type ToolCapabilityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ToolCapability
     */
    select?: ToolCapabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ToolCapability
     */
    omit?: ToolCapabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToolCapabilityInclude<ExtArgs> | null
    /**
     * The filter to search for the ToolCapability to update in case it exists.
     */
    where: ToolCapabilityWhereUniqueInput
    /**
     * In case the ToolCapability found by the `where` argument doesn't exist, create a new ToolCapability with this data.
     */
    create: XOR<ToolCapabilityCreateInput, ToolCapabilityUncheckedCreateInput>
    /**
     * In case the ToolCapability was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ToolCapabilityUpdateInput, ToolCapabilityUncheckedUpdateInput>
  }

  /**
   * ToolCapability delete
   */
  export type ToolCapabilityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ToolCapability
     */
    select?: ToolCapabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ToolCapability
     */
    omit?: ToolCapabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToolCapabilityInclude<ExtArgs> | null
    /**
     * Filter which ToolCapability to delete.
     */
    where: ToolCapabilityWhereUniqueInput
  }

  /**
   * ToolCapability deleteMany
   */
  export type ToolCapabilityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ToolCapabilities to delete
     */
    where?: ToolCapabilityWhereInput
    /**
     * Limit how many ToolCapabilities to delete.
     */
    limit?: number
  }

  /**
   * ToolCapability without action
   */
  export type ToolCapabilityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ToolCapability
     */
    select?: ToolCapabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ToolCapability
     */
    omit?: ToolCapabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToolCapabilityInclude<ExtArgs> | null
  }


  /**
   * Model ToolUseCase
   */

  export type AggregateToolUseCase = {
    _count: ToolUseCaseCountAggregateOutputType | null
    _avg: ToolUseCaseAvgAggregateOutputType | null
    _sum: ToolUseCaseSumAggregateOutputType | null
    _min: ToolUseCaseMinAggregateOutputType | null
    _max: ToolUseCaseMaxAggregateOutputType | null
  }

  export type ToolUseCaseAvgAggregateOutputType = {
    sortOrder: number | null
  }

  export type ToolUseCaseSumAggregateOutputType = {
    sortOrder: number | null
  }

  export type ToolUseCaseMinAggregateOutputType = {
    id: string | null
    toolId: string | null
    title: string | null
    summary: string | null
    sortOrder: number | null
    createdAt: Date | null
  }

  export type ToolUseCaseMaxAggregateOutputType = {
    id: string | null
    toolId: string | null
    title: string | null
    summary: string | null
    sortOrder: number | null
    createdAt: Date | null
  }

  export type ToolUseCaseCountAggregateOutputType = {
    id: number
    toolId: number
    title: number
    summary: number
    sortOrder: number
    createdAt: number
    _all: number
  }


  export type ToolUseCaseAvgAggregateInputType = {
    sortOrder?: true
  }

  export type ToolUseCaseSumAggregateInputType = {
    sortOrder?: true
  }

  export type ToolUseCaseMinAggregateInputType = {
    id?: true
    toolId?: true
    title?: true
    summary?: true
    sortOrder?: true
    createdAt?: true
  }

  export type ToolUseCaseMaxAggregateInputType = {
    id?: true
    toolId?: true
    title?: true
    summary?: true
    sortOrder?: true
    createdAt?: true
  }

  export type ToolUseCaseCountAggregateInputType = {
    id?: true
    toolId?: true
    title?: true
    summary?: true
    sortOrder?: true
    createdAt?: true
    _all?: true
  }

  export type ToolUseCaseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ToolUseCase to aggregate.
     */
    where?: ToolUseCaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ToolUseCases to fetch.
     */
    orderBy?: ToolUseCaseOrderByWithRelationInput | ToolUseCaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ToolUseCaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ToolUseCases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ToolUseCases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ToolUseCases
    **/
    _count?: true | ToolUseCaseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ToolUseCaseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ToolUseCaseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ToolUseCaseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ToolUseCaseMaxAggregateInputType
  }

  export type GetToolUseCaseAggregateType<T extends ToolUseCaseAggregateArgs> = {
        [P in keyof T & keyof AggregateToolUseCase]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateToolUseCase[P]>
      : GetScalarType<T[P], AggregateToolUseCase[P]>
  }




  export type ToolUseCaseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ToolUseCaseWhereInput
    orderBy?: ToolUseCaseOrderByWithAggregationInput | ToolUseCaseOrderByWithAggregationInput[]
    by: ToolUseCaseScalarFieldEnum[] | ToolUseCaseScalarFieldEnum
    having?: ToolUseCaseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ToolUseCaseCountAggregateInputType | true
    _avg?: ToolUseCaseAvgAggregateInputType
    _sum?: ToolUseCaseSumAggregateInputType
    _min?: ToolUseCaseMinAggregateInputType
    _max?: ToolUseCaseMaxAggregateInputType
  }

  export type ToolUseCaseGroupByOutputType = {
    id: string
    toolId: string
    title: string
    summary: string | null
    sortOrder: number
    createdAt: Date
    _count: ToolUseCaseCountAggregateOutputType | null
    _avg: ToolUseCaseAvgAggregateOutputType | null
    _sum: ToolUseCaseSumAggregateOutputType | null
    _min: ToolUseCaseMinAggregateOutputType | null
    _max: ToolUseCaseMaxAggregateOutputType | null
  }

  type GetToolUseCaseGroupByPayload<T extends ToolUseCaseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ToolUseCaseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ToolUseCaseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ToolUseCaseGroupByOutputType[P]>
            : GetScalarType<T[P], ToolUseCaseGroupByOutputType[P]>
        }
      >
    >


  export type ToolUseCaseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    toolId?: boolean
    title?: boolean
    summary?: boolean
    sortOrder?: boolean
    createdAt?: boolean
    tool?: boolean | ToolDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["toolUseCase"]>

  export type ToolUseCaseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    toolId?: boolean
    title?: boolean
    summary?: boolean
    sortOrder?: boolean
    createdAt?: boolean
    tool?: boolean | ToolDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["toolUseCase"]>

  export type ToolUseCaseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    toolId?: boolean
    title?: boolean
    summary?: boolean
    sortOrder?: boolean
    createdAt?: boolean
    tool?: boolean | ToolDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["toolUseCase"]>

  export type ToolUseCaseSelectScalar = {
    id?: boolean
    toolId?: boolean
    title?: boolean
    summary?: boolean
    sortOrder?: boolean
    createdAt?: boolean
  }

  export type ToolUseCaseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "toolId" | "title" | "summary" | "sortOrder" | "createdAt", ExtArgs["result"]["toolUseCase"]>
  export type ToolUseCaseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tool?: boolean | ToolDefaultArgs<ExtArgs>
  }
  export type ToolUseCaseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tool?: boolean | ToolDefaultArgs<ExtArgs>
  }
  export type ToolUseCaseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tool?: boolean | ToolDefaultArgs<ExtArgs>
  }

  export type $ToolUseCasePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ToolUseCase"
    objects: {
      tool: Prisma.$ToolPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      toolId: string
      title: string
      summary: string | null
      sortOrder: number
      createdAt: Date
    }, ExtArgs["result"]["toolUseCase"]>
    composites: {}
  }

  type ToolUseCaseGetPayload<S extends boolean | null | undefined | ToolUseCaseDefaultArgs> = $Result.GetResult<Prisma.$ToolUseCasePayload, S>

  type ToolUseCaseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ToolUseCaseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ToolUseCaseCountAggregateInputType | true
    }

  export interface ToolUseCaseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ToolUseCase'], meta: { name: 'ToolUseCase' } }
    /**
     * Find zero or one ToolUseCase that matches the filter.
     * @param {ToolUseCaseFindUniqueArgs} args - Arguments to find a ToolUseCase
     * @example
     * // Get one ToolUseCase
     * const toolUseCase = await prisma.toolUseCase.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ToolUseCaseFindUniqueArgs>(args: SelectSubset<T, ToolUseCaseFindUniqueArgs<ExtArgs>>): Prisma__ToolUseCaseClient<$Result.GetResult<Prisma.$ToolUseCasePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ToolUseCase that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ToolUseCaseFindUniqueOrThrowArgs} args - Arguments to find a ToolUseCase
     * @example
     * // Get one ToolUseCase
     * const toolUseCase = await prisma.toolUseCase.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ToolUseCaseFindUniqueOrThrowArgs>(args: SelectSubset<T, ToolUseCaseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ToolUseCaseClient<$Result.GetResult<Prisma.$ToolUseCasePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ToolUseCase that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ToolUseCaseFindFirstArgs} args - Arguments to find a ToolUseCase
     * @example
     * // Get one ToolUseCase
     * const toolUseCase = await prisma.toolUseCase.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ToolUseCaseFindFirstArgs>(args?: SelectSubset<T, ToolUseCaseFindFirstArgs<ExtArgs>>): Prisma__ToolUseCaseClient<$Result.GetResult<Prisma.$ToolUseCasePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ToolUseCase that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ToolUseCaseFindFirstOrThrowArgs} args - Arguments to find a ToolUseCase
     * @example
     * // Get one ToolUseCase
     * const toolUseCase = await prisma.toolUseCase.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ToolUseCaseFindFirstOrThrowArgs>(args?: SelectSubset<T, ToolUseCaseFindFirstOrThrowArgs<ExtArgs>>): Prisma__ToolUseCaseClient<$Result.GetResult<Prisma.$ToolUseCasePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ToolUseCases that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ToolUseCaseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ToolUseCases
     * const toolUseCases = await prisma.toolUseCase.findMany()
     * 
     * // Get first 10 ToolUseCases
     * const toolUseCases = await prisma.toolUseCase.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const toolUseCaseWithIdOnly = await prisma.toolUseCase.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ToolUseCaseFindManyArgs>(args?: SelectSubset<T, ToolUseCaseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ToolUseCasePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ToolUseCase.
     * @param {ToolUseCaseCreateArgs} args - Arguments to create a ToolUseCase.
     * @example
     * // Create one ToolUseCase
     * const ToolUseCase = await prisma.toolUseCase.create({
     *   data: {
     *     // ... data to create a ToolUseCase
     *   }
     * })
     * 
     */
    create<T extends ToolUseCaseCreateArgs>(args: SelectSubset<T, ToolUseCaseCreateArgs<ExtArgs>>): Prisma__ToolUseCaseClient<$Result.GetResult<Prisma.$ToolUseCasePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ToolUseCases.
     * @param {ToolUseCaseCreateManyArgs} args - Arguments to create many ToolUseCases.
     * @example
     * // Create many ToolUseCases
     * const toolUseCase = await prisma.toolUseCase.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ToolUseCaseCreateManyArgs>(args?: SelectSubset<T, ToolUseCaseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ToolUseCases and returns the data saved in the database.
     * @param {ToolUseCaseCreateManyAndReturnArgs} args - Arguments to create many ToolUseCases.
     * @example
     * // Create many ToolUseCases
     * const toolUseCase = await prisma.toolUseCase.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ToolUseCases and only return the `id`
     * const toolUseCaseWithIdOnly = await prisma.toolUseCase.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ToolUseCaseCreateManyAndReturnArgs>(args?: SelectSubset<T, ToolUseCaseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ToolUseCasePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ToolUseCase.
     * @param {ToolUseCaseDeleteArgs} args - Arguments to delete one ToolUseCase.
     * @example
     * // Delete one ToolUseCase
     * const ToolUseCase = await prisma.toolUseCase.delete({
     *   where: {
     *     // ... filter to delete one ToolUseCase
     *   }
     * })
     * 
     */
    delete<T extends ToolUseCaseDeleteArgs>(args: SelectSubset<T, ToolUseCaseDeleteArgs<ExtArgs>>): Prisma__ToolUseCaseClient<$Result.GetResult<Prisma.$ToolUseCasePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ToolUseCase.
     * @param {ToolUseCaseUpdateArgs} args - Arguments to update one ToolUseCase.
     * @example
     * // Update one ToolUseCase
     * const toolUseCase = await prisma.toolUseCase.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ToolUseCaseUpdateArgs>(args: SelectSubset<T, ToolUseCaseUpdateArgs<ExtArgs>>): Prisma__ToolUseCaseClient<$Result.GetResult<Prisma.$ToolUseCasePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ToolUseCases.
     * @param {ToolUseCaseDeleteManyArgs} args - Arguments to filter ToolUseCases to delete.
     * @example
     * // Delete a few ToolUseCases
     * const { count } = await prisma.toolUseCase.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ToolUseCaseDeleteManyArgs>(args?: SelectSubset<T, ToolUseCaseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ToolUseCases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ToolUseCaseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ToolUseCases
     * const toolUseCase = await prisma.toolUseCase.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ToolUseCaseUpdateManyArgs>(args: SelectSubset<T, ToolUseCaseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ToolUseCases and returns the data updated in the database.
     * @param {ToolUseCaseUpdateManyAndReturnArgs} args - Arguments to update many ToolUseCases.
     * @example
     * // Update many ToolUseCases
     * const toolUseCase = await prisma.toolUseCase.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ToolUseCases and only return the `id`
     * const toolUseCaseWithIdOnly = await prisma.toolUseCase.updateManyAndReturn({
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
    updateManyAndReturn<T extends ToolUseCaseUpdateManyAndReturnArgs>(args: SelectSubset<T, ToolUseCaseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ToolUseCasePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ToolUseCase.
     * @param {ToolUseCaseUpsertArgs} args - Arguments to update or create a ToolUseCase.
     * @example
     * // Update or create a ToolUseCase
     * const toolUseCase = await prisma.toolUseCase.upsert({
     *   create: {
     *     // ... data to create a ToolUseCase
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ToolUseCase we want to update
     *   }
     * })
     */
    upsert<T extends ToolUseCaseUpsertArgs>(args: SelectSubset<T, ToolUseCaseUpsertArgs<ExtArgs>>): Prisma__ToolUseCaseClient<$Result.GetResult<Prisma.$ToolUseCasePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ToolUseCases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ToolUseCaseCountArgs} args - Arguments to filter ToolUseCases to count.
     * @example
     * // Count the number of ToolUseCases
     * const count = await prisma.toolUseCase.count({
     *   where: {
     *     // ... the filter for the ToolUseCases we want to count
     *   }
     * })
    **/
    count<T extends ToolUseCaseCountArgs>(
      args?: Subset<T, ToolUseCaseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ToolUseCaseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ToolUseCase.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ToolUseCaseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ToolUseCaseAggregateArgs>(args: Subset<T, ToolUseCaseAggregateArgs>): Prisma.PrismaPromise<GetToolUseCaseAggregateType<T>>

    /**
     * Group by ToolUseCase.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ToolUseCaseGroupByArgs} args - Group by arguments.
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
      T extends ToolUseCaseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ToolUseCaseGroupByArgs['orderBy'] }
        : { orderBy?: ToolUseCaseGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ToolUseCaseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetToolUseCaseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ToolUseCase model
   */
  readonly fields: ToolUseCaseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ToolUseCase.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ToolUseCaseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tool<T extends ToolDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ToolDefaultArgs<ExtArgs>>): Prisma__ToolClient<$Result.GetResult<Prisma.$ToolPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ToolUseCase model
   */
  interface ToolUseCaseFieldRefs {
    readonly id: FieldRef<"ToolUseCase", 'String'>
    readonly toolId: FieldRef<"ToolUseCase", 'String'>
    readonly title: FieldRef<"ToolUseCase", 'String'>
    readonly summary: FieldRef<"ToolUseCase", 'String'>
    readonly sortOrder: FieldRef<"ToolUseCase", 'Int'>
    readonly createdAt: FieldRef<"ToolUseCase", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ToolUseCase findUnique
   */
  export type ToolUseCaseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ToolUseCase
     */
    select?: ToolUseCaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ToolUseCase
     */
    omit?: ToolUseCaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToolUseCaseInclude<ExtArgs> | null
    /**
     * Filter, which ToolUseCase to fetch.
     */
    where: ToolUseCaseWhereUniqueInput
  }

  /**
   * ToolUseCase findUniqueOrThrow
   */
  export type ToolUseCaseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ToolUseCase
     */
    select?: ToolUseCaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ToolUseCase
     */
    omit?: ToolUseCaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToolUseCaseInclude<ExtArgs> | null
    /**
     * Filter, which ToolUseCase to fetch.
     */
    where: ToolUseCaseWhereUniqueInput
  }

  /**
   * ToolUseCase findFirst
   */
  export type ToolUseCaseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ToolUseCase
     */
    select?: ToolUseCaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ToolUseCase
     */
    omit?: ToolUseCaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToolUseCaseInclude<ExtArgs> | null
    /**
     * Filter, which ToolUseCase to fetch.
     */
    where?: ToolUseCaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ToolUseCases to fetch.
     */
    orderBy?: ToolUseCaseOrderByWithRelationInput | ToolUseCaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ToolUseCases.
     */
    cursor?: ToolUseCaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ToolUseCases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ToolUseCases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ToolUseCases.
     */
    distinct?: ToolUseCaseScalarFieldEnum | ToolUseCaseScalarFieldEnum[]
  }

  /**
   * ToolUseCase findFirstOrThrow
   */
  export type ToolUseCaseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ToolUseCase
     */
    select?: ToolUseCaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ToolUseCase
     */
    omit?: ToolUseCaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToolUseCaseInclude<ExtArgs> | null
    /**
     * Filter, which ToolUseCase to fetch.
     */
    where?: ToolUseCaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ToolUseCases to fetch.
     */
    orderBy?: ToolUseCaseOrderByWithRelationInput | ToolUseCaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ToolUseCases.
     */
    cursor?: ToolUseCaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ToolUseCases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ToolUseCases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ToolUseCases.
     */
    distinct?: ToolUseCaseScalarFieldEnum | ToolUseCaseScalarFieldEnum[]
  }

  /**
   * ToolUseCase findMany
   */
  export type ToolUseCaseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ToolUseCase
     */
    select?: ToolUseCaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ToolUseCase
     */
    omit?: ToolUseCaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToolUseCaseInclude<ExtArgs> | null
    /**
     * Filter, which ToolUseCases to fetch.
     */
    where?: ToolUseCaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ToolUseCases to fetch.
     */
    orderBy?: ToolUseCaseOrderByWithRelationInput | ToolUseCaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ToolUseCases.
     */
    cursor?: ToolUseCaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ToolUseCases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ToolUseCases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ToolUseCases.
     */
    distinct?: ToolUseCaseScalarFieldEnum | ToolUseCaseScalarFieldEnum[]
  }

  /**
   * ToolUseCase create
   */
  export type ToolUseCaseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ToolUseCase
     */
    select?: ToolUseCaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ToolUseCase
     */
    omit?: ToolUseCaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToolUseCaseInclude<ExtArgs> | null
    /**
     * The data needed to create a ToolUseCase.
     */
    data: XOR<ToolUseCaseCreateInput, ToolUseCaseUncheckedCreateInput>
  }

  /**
   * ToolUseCase createMany
   */
  export type ToolUseCaseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ToolUseCases.
     */
    data: ToolUseCaseCreateManyInput | ToolUseCaseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ToolUseCase createManyAndReturn
   */
  export type ToolUseCaseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ToolUseCase
     */
    select?: ToolUseCaseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ToolUseCase
     */
    omit?: ToolUseCaseOmit<ExtArgs> | null
    /**
     * The data used to create many ToolUseCases.
     */
    data: ToolUseCaseCreateManyInput | ToolUseCaseCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToolUseCaseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ToolUseCase update
   */
  export type ToolUseCaseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ToolUseCase
     */
    select?: ToolUseCaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ToolUseCase
     */
    omit?: ToolUseCaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToolUseCaseInclude<ExtArgs> | null
    /**
     * The data needed to update a ToolUseCase.
     */
    data: XOR<ToolUseCaseUpdateInput, ToolUseCaseUncheckedUpdateInput>
    /**
     * Choose, which ToolUseCase to update.
     */
    where: ToolUseCaseWhereUniqueInput
  }

  /**
   * ToolUseCase updateMany
   */
  export type ToolUseCaseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ToolUseCases.
     */
    data: XOR<ToolUseCaseUpdateManyMutationInput, ToolUseCaseUncheckedUpdateManyInput>
    /**
     * Filter which ToolUseCases to update
     */
    where?: ToolUseCaseWhereInput
    /**
     * Limit how many ToolUseCases to update.
     */
    limit?: number
  }

  /**
   * ToolUseCase updateManyAndReturn
   */
  export type ToolUseCaseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ToolUseCase
     */
    select?: ToolUseCaseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ToolUseCase
     */
    omit?: ToolUseCaseOmit<ExtArgs> | null
    /**
     * The data used to update ToolUseCases.
     */
    data: XOR<ToolUseCaseUpdateManyMutationInput, ToolUseCaseUncheckedUpdateManyInput>
    /**
     * Filter which ToolUseCases to update
     */
    where?: ToolUseCaseWhereInput
    /**
     * Limit how many ToolUseCases to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToolUseCaseIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ToolUseCase upsert
   */
  export type ToolUseCaseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ToolUseCase
     */
    select?: ToolUseCaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ToolUseCase
     */
    omit?: ToolUseCaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToolUseCaseInclude<ExtArgs> | null
    /**
     * The filter to search for the ToolUseCase to update in case it exists.
     */
    where: ToolUseCaseWhereUniqueInput
    /**
     * In case the ToolUseCase found by the `where` argument doesn't exist, create a new ToolUseCase with this data.
     */
    create: XOR<ToolUseCaseCreateInput, ToolUseCaseUncheckedCreateInput>
    /**
     * In case the ToolUseCase was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ToolUseCaseUpdateInput, ToolUseCaseUncheckedUpdateInput>
  }

  /**
   * ToolUseCase delete
   */
  export type ToolUseCaseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ToolUseCase
     */
    select?: ToolUseCaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ToolUseCase
     */
    omit?: ToolUseCaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToolUseCaseInclude<ExtArgs> | null
    /**
     * Filter which ToolUseCase to delete.
     */
    where: ToolUseCaseWhereUniqueInput
  }

  /**
   * ToolUseCase deleteMany
   */
  export type ToolUseCaseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ToolUseCases to delete
     */
    where?: ToolUseCaseWhereInput
    /**
     * Limit how many ToolUseCases to delete.
     */
    limit?: number
  }

  /**
   * ToolUseCase without action
   */
  export type ToolUseCaseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ToolUseCase
     */
    select?: ToolUseCaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ToolUseCase
     */
    omit?: ToolUseCaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToolUseCaseInclude<ExtArgs> | null
  }


  /**
   * Model ToolScreenshot
   */

  export type AggregateToolScreenshot = {
    _count: ToolScreenshotCountAggregateOutputType | null
    _avg: ToolScreenshotAvgAggregateOutputType | null
    _sum: ToolScreenshotSumAggregateOutputType | null
    _min: ToolScreenshotMinAggregateOutputType | null
    _max: ToolScreenshotMaxAggregateOutputType | null
  }

  export type ToolScreenshotAvgAggregateOutputType = {
    sortOrder: number | null
  }

  export type ToolScreenshotSumAggregateOutputType = {
    sortOrder: number | null
  }

  export type ToolScreenshotMinAggregateOutputType = {
    id: string | null
    toolId: string | null
    imageUrl: string | null
    altText: string | null
    caption: string | null
    sortOrder: number | null
    createdAt: Date | null
  }

  export type ToolScreenshotMaxAggregateOutputType = {
    id: string | null
    toolId: string | null
    imageUrl: string | null
    altText: string | null
    caption: string | null
    sortOrder: number | null
    createdAt: Date | null
  }

  export type ToolScreenshotCountAggregateOutputType = {
    id: number
    toolId: number
    imageUrl: number
    altText: number
    caption: number
    sortOrder: number
    createdAt: number
    _all: number
  }


  export type ToolScreenshotAvgAggregateInputType = {
    sortOrder?: true
  }

  export type ToolScreenshotSumAggregateInputType = {
    sortOrder?: true
  }

  export type ToolScreenshotMinAggregateInputType = {
    id?: true
    toolId?: true
    imageUrl?: true
    altText?: true
    caption?: true
    sortOrder?: true
    createdAt?: true
  }

  export type ToolScreenshotMaxAggregateInputType = {
    id?: true
    toolId?: true
    imageUrl?: true
    altText?: true
    caption?: true
    sortOrder?: true
    createdAt?: true
  }

  export type ToolScreenshotCountAggregateInputType = {
    id?: true
    toolId?: true
    imageUrl?: true
    altText?: true
    caption?: true
    sortOrder?: true
    createdAt?: true
    _all?: true
  }

  export type ToolScreenshotAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ToolScreenshot to aggregate.
     */
    where?: ToolScreenshotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ToolScreenshots to fetch.
     */
    orderBy?: ToolScreenshotOrderByWithRelationInput | ToolScreenshotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ToolScreenshotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ToolScreenshots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ToolScreenshots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ToolScreenshots
    **/
    _count?: true | ToolScreenshotCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ToolScreenshotAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ToolScreenshotSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ToolScreenshotMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ToolScreenshotMaxAggregateInputType
  }

  export type GetToolScreenshotAggregateType<T extends ToolScreenshotAggregateArgs> = {
        [P in keyof T & keyof AggregateToolScreenshot]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateToolScreenshot[P]>
      : GetScalarType<T[P], AggregateToolScreenshot[P]>
  }




  export type ToolScreenshotGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ToolScreenshotWhereInput
    orderBy?: ToolScreenshotOrderByWithAggregationInput | ToolScreenshotOrderByWithAggregationInput[]
    by: ToolScreenshotScalarFieldEnum[] | ToolScreenshotScalarFieldEnum
    having?: ToolScreenshotScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ToolScreenshotCountAggregateInputType | true
    _avg?: ToolScreenshotAvgAggregateInputType
    _sum?: ToolScreenshotSumAggregateInputType
    _min?: ToolScreenshotMinAggregateInputType
    _max?: ToolScreenshotMaxAggregateInputType
  }

  export type ToolScreenshotGroupByOutputType = {
    id: string
    toolId: string
    imageUrl: string
    altText: string
    caption: string | null
    sortOrder: number
    createdAt: Date
    _count: ToolScreenshotCountAggregateOutputType | null
    _avg: ToolScreenshotAvgAggregateOutputType | null
    _sum: ToolScreenshotSumAggregateOutputType | null
    _min: ToolScreenshotMinAggregateOutputType | null
    _max: ToolScreenshotMaxAggregateOutputType | null
  }

  type GetToolScreenshotGroupByPayload<T extends ToolScreenshotGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ToolScreenshotGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ToolScreenshotGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ToolScreenshotGroupByOutputType[P]>
            : GetScalarType<T[P], ToolScreenshotGroupByOutputType[P]>
        }
      >
    >


  export type ToolScreenshotSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    toolId?: boolean
    imageUrl?: boolean
    altText?: boolean
    caption?: boolean
    sortOrder?: boolean
    createdAt?: boolean
    tool?: boolean | ToolDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["toolScreenshot"]>

  export type ToolScreenshotSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    toolId?: boolean
    imageUrl?: boolean
    altText?: boolean
    caption?: boolean
    sortOrder?: boolean
    createdAt?: boolean
    tool?: boolean | ToolDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["toolScreenshot"]>

  export type ToolScreenshotSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    toolId?: boolean
    imageUrl?: boolean
    altText?: boolean
    caption?: boolean
    sortOrder?: boolean
    createdAt?: boolean
    tool?: boolean | ToolDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["toolScreenshot"]>

  export type ToolScreenshotSelectScalar = {
    id?: boolean
    toolId?: boolean
    imageUrl?: boolean
    altText?: boolean
    caption?: boolean
    sortOrder?: boolean
    createdAt?: boolean
  }

  export type ToolScreenshotOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "toolId" | "imageUrl" | "altText" | "caption" | "sortOrder" | "createdAt", ExtArgs["result"]["toolScreenshot"]>
  export type ToolScreenshotInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tool?: boolean | ToolDefaultArgs<ExtArgs>
  }
  export type ToolScreenshotIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tool?: boolean | ToolDefaultArgs<ExtArgs>
  }
  export type ToolScreenshotIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tool?: boolean | ToolDefaultArgs<ExtArgs>
  }

  export type $ToolScreenshotPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ToolScreenshot"
    objects: {
      tool: Prisma.$ToolPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      toolId: string
      imageUrl: string
      altText: string
      caption: string | null
      sortOrder: number
      createdAt: Date
    }, ExtArgs["result"]["toolScreenshot"]>
    composites: {}
  }

  type ToolScreenshotGetPayload<S extends boolean | null | undefined | ToolScreenshotDefaultArgs> = $Result.GetResult<Prisma.$ToolScreenshotPayload, S>

  type ToolScreenshotCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ToolScreenshotFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ToolScreenshotCountAggregateInputType | true
    }

  export interface ToolScreenshotDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ToolScreenshot'], meta: { name: 'ToolScreenshot' } }
    /**
     * Find zero or one ToolScreenshot that matches the filter.
     * @param {ToolScreenshotFindUniqueArgs} args - Arguments to find a ToolScreenshot
     * @example
     * // Get one ToolScreenshot
     * const toolScreenshot = await prisma.toolScreenshot.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ToolScreenshotFindUniqueArgs>(args: SelectSubset<T, ToolScreenshotFindUniqueArgs<ExtArgs>>): Prisma__ToolScreenshotClient<$Result.GetResult<Prisma.$ToolScreenshotPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ToolScreenshot that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ToolScreenshotFindUniqueOrThrowArgs} args - Arguments to find a ToolScreenshot
     * @example
     * // Get one ToolScreenshot
     * const toolScreenshot = await prisma.toolScreenshot.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ToolScreenshotFindUniqueOrThrowArgs>(args: SelectSubset<T, ToolScreenshotFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ToolScreenshotClient<$Result.GetResult<Prisma.$ToolScreenshotPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ToolScreenshot that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ToolScreenshotFindFirstArgs} args - Arguments to find a ToolScreenshot
     * @example
     * // Get one ToolScreenshot
     * const toolScreenshot = await prisma.toolScreenshot.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ToolScreenshotFindFirstArgs>(args?: SelectSubset<T, ToolScreenshotFindFirstArgs<ExtArgs>>): Prisma__ToolScreenshotClient<$Result.GetResult<Prisma.$ToolScreenshotPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ToolScreenshot that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ToolScreenshotFindFirstOrThrowArgs} args - Arguments to find a ToolScreenshot
     * @example
     * // Get one ToolScreenshot
     * const toolScreenshot = await prisma.toolScreenshot.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ToolScreenshotFindFirstOrThrowArgs>(args?: SelectSubset<T, ToolScreenshotFindFirstOrThrowArgs<ExtArgs>>): Prisma__ToolScreenshotClient<$Result.GetResult<Prisma.$ToolScreenshotPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ToolScreenshots that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ToolScreenshotFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ToolScreenshots
     * const toolScreenshots = await prisma.toolScreenshot.findMany()
     * 
     * // Get first 10 ToolScreenshots
     * const toolScreenshots = await prisma.toolScreenshot.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const toolScreenshotWithIdOnly = await prisma.toolScreenshot.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ToolScreenshotFindManyArgs>(args?: SelectSubset<T, ToolScreenshotFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ToolScreenshotPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ToolScreenshot.
     * @param {ToolScreenshotCreateArgs} args - Arguments to create a ToolScreenshot.
     * @example
     * // Create one ToolScreenshot
     * const ToolScreenshot = await prisma.toolScreenshot.create({
     *   data: {
     *     // ... data to create a ToolScreenshot
     *   }
     * })
     * 
     */
    create<T extends ToolScreenshotCreateArgs>(args: SelectSubset<T, ToolScreenshotCreateArgs<ExtArgs>>): Prisma__ToolScreenshotClient<$Result.GetResult<Prisma.$ToolScreenshotPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ToolScreenshots.
     * @param {ToolScreenshotCreateManyArgs} args - Arguments to create many ToolScreenshots.
     * @example
     * // Create many ToolScreenshots
     * const toolScreenshot = await prisma.toolScreenshot.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ToolScreenshotCreateManyArgs>(args?: SelectSubset<T, ToolScreenshotCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ToolScreenshots and returns the data saved in the database.
     * @param {ToolScreenshotCreateManyAndReturnArgs} args - Arguments to create many ToolScreenshots.
     * @example
     * // Create many ToolScreenshots
     * const toolScreenshot = await prisma.toolScreenshot.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ToolScreenshots and only return the `id`
     * const toolScreenshotWithIdOnly = await prisma.toolScreenshot.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ToolScreenshotCreateManyAndReturnArgs>(args?: SelectSubset<T, ToolScreenshotCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ToolScreenshotPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ToolScreenshot.
     * @param {ToolScreenshotDeleteArgs} args - Arguments to delete one ToolScreenshot.
     * @example
     * // Delete one ToolScreenshot
     * const ToolScreenshot = await prisma.toolScreenshot.delete({
     *   where: {
     *     // ... filter to delete one ToolScreenshot
     *   }
     * })
     * 
     */
    delete<T extends ToolScreenshotDeleteArgs>(args: SelectSubset<T, ToolScreenshotDeleteArgs<ExtArgs>>): Prisma__ToolScreenshotClient<$Result.GetResult<Prisma.$ToolScreenshotPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ToolScreenshot.
     * @param {ToolScreenshotUpdateArgs} args - Arguments to update one ToolScreenshot.
     * @example
     * // Update one ToolScreenshot
     * const toolScreenshot = await prisma.toolScreenshot.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ToolScreenshotUpdateArgs>(args: SelectSubset<T, ToolScreenshotUpdateArgs<ExtArgs>>): Prisma__ToolScreenshotClient<$Result.GetResult<Prisma.$ToolScreenshotPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ToolScreenshots.
     * @param {ToolScreenshotDeleteManyArgs} args - Arguments to filter ToolScreenshots to delete.
     * @example
     * // Delete a few ToolScreenshots
     * const { count } = await prisma.toolScreenshot.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ToolScreenshotDeleteManyArgs>(args?: SelectSubset<T, ToolScreenshotDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ToolScreenshots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ToolScreenshotUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ToolScreenshots
     * const toolScreenshot = await prisma.toolScreenshot.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ToolScreenshotUpdateManyArgs>(args: SelectSubset<T, ToolScreenshotUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ToolScreenshots and returns the data updated in the database.
     * @param {ToolScreenshotUpdateManyAndReturnArgs} args - Arguments to update many ToolScreenshots.
     * @example
     * // Update many ToolScreenshots
     * const toolScreenshot = await prisma.toolScreenshot.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ToolScreenshots and only return the `id`
     * const toolScreenshotWithIdOnly = await prisma.toolScreenshot.updateManyAndReturn({
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
    updateManyAndReturn<T extends ToolScreenshotUpdateManyAndReturnArgs>(args: SelectSubset<T, ToolScreenshotUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ToolScreenshotPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ToolScreenshot.
     * @param {ToolScreenshotUpsertArgs} args - Arguments to update or create a ToolScreenshot.
     * @example
     * // Update or create a ToolScreenshot
     * const toolScreenshot = await prisma.toolScreenshot.upsert({
     *   create: {
     *     // ... data to create a ToolScreenshot
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ToolScreenshot we want to update
     *   }
     * })
     */
    upsert<T extends ToolScreenshotUpsertArgs>(args: SelectSubset<T, ToolScreenshotUpsertArgs<ExtArgs>>): Prisma__ToolScreenshotClient<$Result.GetResult<Prisma.$ToolScreenshotPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ToolScreenshots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ToolScreenshotCountArgs} args - Arguments to filter ToolScreenshots to count.
     * @example
     * // Count the number of ToolScreenshots
     * const count = await prisma.toolScreenshot.count({
     *   where: {
     *     // ... the filter for the ToolScreenshots we want to count
     *   }
     * })
    **/
    count<T extends ToolScreenshotCountArgs>(
      args?: Subset<T, ToolScreenshotCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ToolScreenshotCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ToolScreenshot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ToolScreenshotAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ToolScreenshotAggregateArgs>(args: Subset<T, ToolScreenshotAggregateArgs>): Prisma.PrismaPromise<GetToolScreenshotAggregateType<T>>

    /**
     * Group by ToolScreenshot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ToolScreenshotGroupByArgs} args - Group by arguments.
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
      T extends ToolScreenshotGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ToolScreenshotGroupByArgs['orderBy'] }
        : { orderBy?: ToolScreenshotGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ToolScreenshotGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetToolScreenshotGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ToolScreenshot model
   */
  readonly fields: ToolScreenshotFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ToolScreenshot.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ToolScreenshotClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tool<T extends ToolDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ToolDefaultArgs<ExtArgs>>): Prisma__ToolClient<$Result.GetResult<Prisma.$ToolPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ToolScreenshot model
   */
  interface ToolScreenshotFieldRefs {
    readonly id: FieldRef<"ToolScreenshot", 'String'>
    readonly toolId: FieldRef<"ToolScreenshot", 'String'>
    readonly imageUrl: FieldRef<"ToolScreenshot", 'String'>
    readonly altText: FieldRef<"ToolScreenshot", 'String'>
    readonly caption: FieldRef<"ToolScreenshot", 'String'>
    readonly sortOrder: FieldRef<"ToolScreenshot", 'Int'>
    readonly createdAt: FieldRef<"ToolScreenshot", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ToolScreenshot findUnique
   */
  export type ToolScreenshotFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ToolScreenshot
     */
    select?: ToolScreenshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ToolScreenshot
     */
    omit?: ToolScreenshotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToolScreenshotInclude<ExtArgs> | null
    /**
     * Filter, which ToolScreenshot to fetch.
     */
    where: ToolScreenshotWhereUniqueInput
  }

  /**
   * ToolScreenshot findUniqueOrThrow
   */
  export type ToolScreenshotFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ToolScreenshot
     */
    select?: ToolScreenshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ToolScreenshot
     */
    omit?: ToolScreenshotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToolScreenshotInclude<ExtArgs> | null
    /**
     * Filter, which ToolScreenshot to fetch.
     */
    where: ToolScreenshotWhereUniqueInput
  }

  /**
   * ToolScreenshot findFirst
   */
  export type ToolScreenshotFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ToolScreenshot
     */
    select?: ToolScreenshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ToolScreenshot
     */
    omit?: ToolScreenshotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToolScreenshotInclude<ExtArgs> | null
    /**
     * Filter, which ToolScreenshot to fetch.
     */
    where?: ToolScreenshotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ToolScreenshots to fetch.
     */
    orderBy?: ToolScreenshotOrderByWithRelationInput | ToolScreenshotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ToolScreenshots.
     */
    cursor?: ToolScreenshotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ToolScreenshots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ToolScreenshots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ToolScreenshots.
     */
    distinct?: ToolScreenshotScalarFieldEnum | ToolScreenshotScalarFieldEnum[]
  }

  /**
   * ToolScreenshot findFirstOrThrow
   */
  export type ToolScreenshotFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ToolScreenshot
     */
    select?: ToolScreenshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ToolScreenshot
     */
    omit?: ToolScreenshotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToolScreenshotInclude<ExtArgs> | null
    /**
     * Filter, which ToolScreenshot to fetch.
     */
    where?: ToolScreenshotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ToolScreenshots to fetch.
     */
    orderBy?: ToolScreenshotOrderByWithRelationInput | ToolScreenshotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ToolScreenshots.
     */
    cursor?: ToolScreenshotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ToolScreenshots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ToolScreenshots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ToolScreenshots.
     */
    distinct?: ToolScreenshotScalarFieldEnum | ToolScreenshotScalarFieldEnum[]
  }

  /**
   * ToolScreenshot findMany
   */
  export type ToolScreenshotFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ToolScreenshot
     */
    select?: ToolScreenshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ToolScreenshot
     */
    omit?: ToolScreenshotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToolScreenshotInclude<ExtArgs> | null
    /**
     * Filter, which ToolScreenshots to fetch.
     */
    where?: ToolScreenshotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ToolScreenshots to fetch.
     */
    orderBy?: ToolScreenshotOrderByWithRelationInput | ToolScreenshotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ToolScreenshots.
     */
    cursor?: ToolScreenshotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ToolScreenshots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ToolScreenshots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ToolScreenshots.
     */
    distinct?: ToolScreenshotScalarFieldEnum | ToolScreenshotScalarFieldEnum[]
  }

  /**
   * ToolScreenshot create
   */
  export type ToolScreenshotCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ToolScreenshot
     */
    select?: ToolScreenshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ToolScreenshot
     */
    omit?: ToolScreenshotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToolScreenshotInclude<ExtArgs> | null
    /**
     * The data needed to create a ToolScreenshot.
     */
    data: XOR<ToolScreenshotCreateInput, ToolScreenshotUncheckedCreateInput>
  }

  /**
   * ToolScreenshot createMany
   */
  export type ToolScreenshotCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ToolScreenshots.
     */
    data: ToolScreenshotCreateManyInput | ToolScreenshotCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ToolScreenshot createManyAndReturn
   */
  export type ToolScreenshotCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ToolScreenshot
     */
    select?: ToolScreenshotSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ToolScreenshot
     */
    omit?: ToolScreenshotOmit<ExtArgs> | null
    /**
     * The data used to create many ToolScreenshots.
     */
    data: ToolScreenshotCreateManyInput | ToolScreenshotCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToolScreenshotIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ToolScreenshot update
   */
  export type ToolScreenshotUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ToolScreenshot
     */
    select?: ToolScreenshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ToolScreenshot
     */
    omit?: ToolScreenshotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToolScreenshotInclude<ExtArgs> | null
    /**
     * The data needed to update a ToolScreenshot.
     */
    data: XOR<ToolScreenshotUpdateInput, ToolScreenshotUncheckedUpdateInput>
    /**
     * Choose, which ToolScreenshot to update.
     */
    where: ToolScreenshotWhereUniqueInput
  }

  /**
   * ToolScreenshot updateMany
   */
  export type ToolScreenshotUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ToolScreenshots.
     */
    data: XOR<ToolScreenshotUpdateManyMutationInput, ToolScreenshotUncheckedUpdateManyInput>
    /**
     * Filter which ToolScreenshots to update
     */
    where?: ToolScreenshotWhereInput
    /**
     * Limit how many ToolScreenshots to update.
     */
    limit?: number
  }

  /**
   * ToolScreenshot updateManyAndReturn
   */
  export type ToolScreenshotUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ToolScreenshot
     */
    select?: ToolScreenshotSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ToolScreenshot
     */
    omit?: ToolScreenshotOmit<ExtArgs> | null
    /**
     * The data used to update ToolScreenshots.
     */
    data: XOR<ToolScreenshotUpdateManyMutationInput, ToolScreenshotUncheckedUpdateManyInput>
    /**
     * Filter which ToolScreenshots to update
     */
    where?: ToolScreenshotWhereInput
    /**
     * Limit how many ToolScreenshots to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToolScreenshotIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ToolScreenshot upsert
   */
  export type ToolScreenshotUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ToolScreenshot
     */
    select?: ToolScreenshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ToolScreenshot
     */
    omit?: ToolScreenshotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToolScreenshotInclude<ExtArgs> | null
    /**
     * The filter to search for the ToolScreenshot to update in case it exists.
     */
    where: ToolScreenshotWhereUniqueInput
    /**
     * In case the ToolScreenshot found by the `where` argument doesn't exist, create a new ToolScreenshot with this data.
     */
    create: XOR<ToolScreenshotCreateInput, ToolScreenshotUncheckedCreateInput>
    /**
     * In case the ToolScreenshot was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ToolScreenshotUpdateInput, ToolScreenshotUncheckedUpdateInput>
  }

  /**
   * ToolScreenshot delete
   */
  export type ToolScreenshotDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ToolScreenshot
     */
    select?: ToolScreenshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ToolScreenshot
     */
    omit?: ToolScreenshotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToolScreenshotInclude<ExtArgs> | null
    /**
     * Filter which ToolScreenshot to delete.
     */
    where: ToolScreenshotWhereUniqueInput
  }

  /**
   * ToolScreenshot deleteMany
   */
  export type ToolScreenshotDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ToolScreenshots to delete
     */
    where?: ToolScreenshotWhereInput
    /**
     * Limit how many ToolScreenshots to delete.
     */
    limit?: number
  }

  /**
   * ToolScreenshot without action
   */
  export type ToolScreenshotDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ToolScreenshot
     */
    select?: ToolScreenshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ToolScreenshot
     */
    omit?: ToolScreenshotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToolScreenshotInclude<ExtArgs> | null
  }


  /**
   * Model NewsArticle
   */

  export type AggregateNewsArticle = {
    _count: NewsArticleCountAggregateOutputType | null
    _avg: NewsArticleAvgAggregateOutputType | null
    _sum: NewsArticleSumAggregateOutputType | null
    _min: NewsArticleMinAggregateOutputType | null
    _max: NewsArticleMaxAggregateOutputType | null
  }

  export type NewsArticleAvgAggregateOutputType = {
    readingMinutes: number | null
  }

  export type NewsArticleSumAggregateOutputType = {
    readingMinutes: number | null
  }

  export type NewsArticleMinAggregateOutputType = {
    id: string | null
    slug: string | null
    title: string | null
    excerpt: string | null
    body: string | null
    coverImageUrl: string | null
    sourceName: string | null
    sourceUrl: string | null
    authorName: string | null
    topic: string | null
    readingMinutes: number | null
    status: $Enums.NewsStatus | null
    isFeatured: boolean | null
    publishedAt: Date | null
    categoryId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NewsArticleMaxAggregateOutputType = {
    id: string | null
    slug: string | null
    title: string | null
    excerpt: string | null
    body: string | null
    coverImageUrl: string | null
    sourceName: string | null
    sourceUrl: string | null
    authorName: string | null
    topic: string | null
    readingMinutes: number | null
    status: $Enums.NewsStatus | null
    isFeatured: boolean | null
    publishedAt: Date | null
    categoryId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NewsArticleCountAggregateOutputType = {
    id: number
    slug: number
    title: number
    excerpt: number
    body: number
    coverImageUrl: number
    sourceName: number
    sourceUrl: number
    authorName: number
    topic: number
    readingMinutes: number
    status: number
    isFeatured: number
    publishedAt: number
    categoryId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type NewsArticleAvgAggregateInputType = {
    readingMinutes?: true
  }

  export type NewsArticleSumAggregateInputType = {
    readingMinutes?: true
  }

  export type NewsArticleMinAggregateInputType = {
    id?: true
    slug?: true
    title?: true
    excerpt?: true
    body?: true
    coverImageUrl?: true
    sourceName?: true
    sourceUrl?: true
    authorName?: true
    topic?: true
    readingMinutes?: true
    status?: true
    isFeatured?: true
    publishedAt?: true
    categoryId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NewsArticleMaxAggregateInputType = {
    id?: true
    slug?: true
    title?: true
    excerpt?: true
    body?: true
    coverImageUrl?: true
    sourceName?: true
    sourceUrl?: true
    authorName?: true
    topic?: true
    readingMinutes?: true
    status?: true
    isFeatured?: true
    publishedAt?: true
    categoryId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NewsArticleCountAggregateInputType = {
    id?: true
    slug?: true
    title?: true
    excerpt?: true
    body?: true
    coverImageUrl?: true
    sourceName?: true
    sourceUrl?: true
    authorName?: true
    topic?: true
    readingMinutes?: true
    status?: true
    isFeatured?: true
    publishedAt?: true
    categoryId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type NewsArticleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NewsArticle to aggregate.
     */
    where?: NewsArticleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NewsArticles to fetch.
     */
    orderBy?: NewsArticleOrderByWithRelationInput | NewsArticleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NewsArticleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NewsArticles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NewsArticles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned NewsArticles
    **/
    _count?: true | NewsArticleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NewsArticleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NewsArticleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NewsArticleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NewsArticleMaxAggregateInputType
  }

  export type GetNewsArticleAggregateType<T extends NewsArticleAggregateArgs> = {
        [P in keyof T & keyof AggregateNewsArticle]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNewsArticle[P]>
      : GetScalarType<T[P], AggregateNewsArticle[P]>
  }




  export type NewsArticleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NewsArticleWhereInput
    orderBy?: NewsArticleOrderByWithAggregationInput | NewsArticleOrderByWithAggregationInput[]
    by: NewsArticleScalarFieldEnum[] | NewsArticleScalarFieldEnum
    having?: NewsArticleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NewsArticleCountAggregateInputType | true
    _avg?: NewsArticleAvgAggregateInputType
    _sum?: NewsArticleSumAggregateInputType
    _min?: NewsArticleMinAggregateInputType
    _max?: NewsArticleMaxAggregateInputType
  }

  export type NewsArticleGroupByOutputType = {
    id: string
    slug: string
    title: string
    excerpt: string
    body: string
    coverImageUrl: string | null
    sourceName: string
    sourceUrl: string | null
    authorName: string | null
    topic: string
    readingMinutes: number
    status: $Enums.NewsStatus
    isFeatured: boolean
    publishedAt: Date | null
    categoryId: string | null
    createdAt: Date
    updatedAt: Date
    _count: NewsArticleCountAggregateOutputType | null
    _avg: NewsArticleAvgAggregateOutputType | null
    _sum: NewsArticleSumAggregateOutputType | null
    _min: NewsArticleMinAggregateOutputType | null
    _max: NewsArticleMaxAggregateOutputType | null
  }

  type GetNewsArticleGroupByPayload<T extends NewsArticleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NewsArticleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NewsArticleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NewsArticleGroupByOutputType[P]>
            : GetScalarType<T[P], NewsArticleGroupByOutputType[P]>
        }
      >
    >


  export type NewsArticleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    title?: boolean
    excerpt?: boolean
    body?: boolean
    coverImageUrl?: boolean
    sourceName?: boolean
    sourceUrl?: boolean
    authorName?: boolean
    topic?: boolean
    readingMinutes?: boolean
    status?: boolean
    isFeatured?: boolean
    publishedAt?: boolean
    categoryId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    category?: boolean | NewsArticle$categoryArgs<ExtArgs>
    tools?: boolean | NewsArticle$toolsArgs<ExtArgs>
    _count?: boolean | NewsArticleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["newsArticle"]>

  export type NewsArticleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    title?: boolean
    excerpt?: boolean
    body?: boolean
    coverImageUrl?: boolean
    sourceName?: boolean
    sourceUrl?: boolean
    authorName?: boolean
    topic?: boolean
    readingMinutes?: boolean
    status?: boolean
    isFeatured?: boolean
    publishedAt?: boolean
    categoryId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    category?: boolean | NewsArticle$categoryArgs<ExtArgs>
  }, ExtArgs["result"]["newsArticle"]>

  export type NewsArticleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    title?: boolean
    excerpt?: boolean
    body?: boolean
    coverImageUrl?: boolean
    sourceName?: boolean
    sourceUrl?: boolean
    authorName?: boolean
    topic?: boolean
    readingMinutes?: boolean
    status?: boolean
    isFeatured?: boolean
    publishedAt?: boolean
    categoryId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    category?: boolean | NewsArticle$categoryArgs<ExtArgs>
  }, ExtArgs["result"]["newsArticle"]>

  export type NewsArticleSelectScalar = {
    id?: boolean
    slug?: boolean
    title?: boolean
    excerpt?: boolean
    body?: boolean
    coverImageUrl?: boolean
    sourceName?: boolean
    sourceUrl?: boolean
    authorName?: boolean
    topic?: boolean
    readingMinutes?: boolean
    status?: boolean
    isFeatured?: boolean
    publishedAt?: boolean
    categoryId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type NewsArticleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "slug" | "title" | "excerpt" | "body" | "coverImageUrl" | "sourceName" | "sourceUrl" | "authorName" | "topic" | "readingMinutes" | "status" | "isFeatured" | "publishedAt" | "categoryId" | "createdAt" | "updatedAt", ExtArgs["result"]["newsArticle"]>
  export type NewsArticleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | NewsArticle$categoryArgs<ExtArgs>
    tools?: boolean | NewsArticle$toolsArgs<ExtArgs>
    _count?: boolean | NewsArticleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type NewsArticleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | NewsArticle$categoryArgs<ExtArgs>
  }
  export type NewsArticleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | NewsArticle$categoryArgs<ExtArgs>
  }

  export type $NewsArticlePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "NewsArticle"
    objects: {
      category: Prisma.$CategoryPayload<ExtArgs> | null
      tools: Prisma.$NewsArticleToolPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      slug: string
      title: string
      excerpt: string
      body: string
      coverImageUrl: string | null
      sourceName: string
      sourceUrl: string | null
      authorName: string | null
      topic: string
      readingMinutes: number
      status: $Enums.NewsStatus
      isFeatured: boolean
      publishedAt: Date | null
      categoryId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["newsArticle"]>
    composites: {}
  }

  type NewsArticleGetPayload<S extends boolean | null | undefined | NewsArticleDefaultArgs> = $Result.GetResult<Prisma.$NewsArticlePayload, S>

  type NewsArticleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NewsArticleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NewsArticleCountAggregateInputType | true
    }

  export interface NewsArticleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['NewsArticle'], meta: { name: 'NewsArticle' } }
    /**
     * Find zero or one NewsArticle that matches the filter.
     * @param {NewsArticleFindUniqueArgs} args - Arguments to find a NewsArticle
     * @example
     * // Get one NewsArticle
     * const newsArticle = await prisma.newsArticle.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NewsArticleFindUniqueArgs>(args: SelectSubset<T, NewsArticleFindUniqueArgs<ExtArgs>>): Prisma__NewsArticleClient<$Result.GetResult<Prisma.$NewsArticlePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one NewsArticle that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NewsArticleFindUniqueOrThrowArgs} args - Arguments to find a NewsArticle
     * @example
     * // Get one NewsArticle
     * const newsArticle = await prisma.newsArticle.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NewsArticleFindUniqueOrThrowArgs>(args: SelectSubset<T, NewsArticleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NewsArticleClient<$Result.GetResult<Prisma.$NewsArticlePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NewsArticle that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsArticleFindFirstArgs} args - Arguments to find a NewsArticle
     * @example
     * // Get one NewsArticle
     * const newsArticle = await prisma.newsArticle.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NewsArticleFindFirstArgs>(args?: SelectSubset<T, NewsArticleFindFirstArgs<ExtArgs>>): Prisma__NewsArticleClient<$Result.GetResult<Prisma.$NewsArticlePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NewsArticle that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsArticleFindFirstOrThrowArgs} args - Arguments to find a NewsArticle
     * @example
     * // Get one NewsArticle
     * const newsArticle = await prisma.newsArticle.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NewsArticleFindFirstOrThrowArgs>(args?: SelectSubset<T, NewsArticleFindFirstOrThrowArgs<ExtArgs>>): Prisma__NewsArticleClient<$Result.GetResult<Prisma.$NewsArticlePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more NewsArticles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsArticleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all NewsArticles
     * const newsArticles = await prisma.newsArticle.findMany()
     * 
     * // Get first 10 NewsArticles
     * const newsArticles = await prisma.newsArticle.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const newsArticleWithIdOnly = await prisma.newsArticle.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NewsArticleFindManyArgs>(args?: SelectSubset<T, NewsArticleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsArticlePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a NewsArticle.
     * @param {NewsArticleCreateArgs} args - Arguments to create a NewsArticle.
     * @example
     * // Create one NewsArticle
     * const NewsArticle = await prisma.newsArticle.create({
     *   data: {
     *     // ... data to create a NewsArticle
     *   }
     * })
     * 
     */
    create<T extends NewsArticleCreateArgs>(args: SelectSubset<T, NewsArticleCreateArgs<ExtArgs>>): Prisma__NewsArticleClient<$Result.GetResult<Prisma.$NewsArticlePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many NewsArticles.
     * @param {NewsArticleCreateManyArgs} args - Arguments to create many NewsArticles.
     * @example
     * // Create many NewsArticles
     * const newsArticle = await prisma.newsArticle.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NewsArticleCreateManyArgs>(args?: SelectSubset<T, NewsArticleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many NewsArticles and returns the data saved in the database.
     * @param {NewsArticleCreateManyAndReturnArgs} args - Arguments to create many NewsArticles.
     * @example
     * // Create many NewsArticles
     * const newsArticle = await prisma.newsArticle.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many NewsArticles and only return the `id`
     * const newsArticleWithIdOnly = await prisma.newsArticle.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NewsArticleCreateManyAndReturnArgs>(args?: SelectSubset<T, NewsArticleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsArticlePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a NewsArticle.
     * @param {NewsArticleDeleteArgs} args - Arguments to delete one NewsArticle.
     * @example
     * // Delete one NewsArticle
     * const NewsArticle = await prisma.newsArticle.delete({
     *   where: {
     *     // ... filter to delete one NewsArticle
     *   }
     * })
     * 
     */
    delete<T extends NewsArticleDeleteArgs>(args: SelectSubset<T, NewsArticleDeleteArgs<ExtArgs>>): Prisma__NewsArticleClient<$Result.GetResult<Prisma.$NewsArticlePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one NewsArticle.
     * @param {NewsArticleUpdateArgs} args - Arguments to update one NewsArticle.
     * @example
     * // Update one NewsArticle
     * const newsArticle = await prisma.newsArticle.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NewsArticleUpdateArgs>(args: SelectSubset<T, NewsArticleUpdateArgs<ExtArgs>>): Prisma__NewsArticleClient<$Result.GetResult<Prisma.$NewsArticlePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more NewsArticles.
     * @param {NewsArticleDeleteManyArgs} args - Arguments to filter NewsArticles to delete.
     * @example
     * // Delete a few NewsArticles
     * const { count } = await prisma.newsArticle.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NewsArticleDeleteManyArgs>(args?: SelectSubset<T, NewsArticleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NewsArticles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsArticleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many NewsArticles
     * const newsArticle = await prisma.newsArticle.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NewsArticleUpdateManyArgs>(args: SelectSubset<T, NewsArticleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NewsArticles and returns the data updated in the database.
     * @param {NewsArticleUpdateManyAndReturnArgs} args - Arguments to update many NewsArticles.
     * @example
     * // Update many NewsArticles
     * const newsArticle = await prisma.newsArticle.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more NewsArticles and only return the `id`
     * const newsArticleWithIdOnly = await prisma.newsArticle.updateManyAndReturn({
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
    updateManyAndReturn<T extends NewsArticleUpdateManyAndReturnArgs>(args: SelectSubset<T, NewsArticleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsArticlePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one NewsArticle.
     * @param {NewsArticleUpsertArgs} args - Arguments to update or create a NewsArticle.
     * @example
     * // Update or create a NewsArticle
     * const newsArticle = await prisma.newsArticle.upsert({
     *   create: {
     *     // ... data to create a NewsArticle
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the NewsArticle we want to update
     *   }
     * })
     */
    upsert<T extends NewsArticleUpsertArgs>(args: SelectSubset<T, NewsArticleUpsertArgs<ExtArgs>>): Prisma__NewsArticleClient<$Result.GetResult<Prisma.$NewsArticlePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of NewsArticles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsArticleCountArgs} args - Arguments to filter NewsArticles to count.
     * @example
     * // Count the number of NewsArticles
     * const count = await prisma.newsArticle.count({
     *   where: {
     *     // ... the filter for the NewsArticles we want to count
     *   }
     * })
    **/
    count<T extends NewsArticleCountArgs>(
      args?: Subset<T, NewsArticleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NewsArticleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a NewsArticle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsArticleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NewsArticleAggregateArgs>(args: Subset<T, NewsArticleAggregateArgs>): Prisma.PrismaPromise<GetNewsArticleAggregateType<T>>

    /**
     * Group by NewsArticle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsArticleGroupByArgs} args - Group by arguments.
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
      T extends NewsArticleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NewsArticleGroupByArgs['orderBy'] }
        : { orderBy?: NewsArticleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NewsArticleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNewsArticleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the NewsArticle model
   */
  readonly fields: NewsArticleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for NewsArticle.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NewsArticleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    category<T extends NewsArticle$categoryArgs<ExtArgs> = {}>(args?: Subset<T, NewsArticle$categoryArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    tools<T extends NewsArticle$toolsArgs<ExtArgs> = {}>(args?: Subset<T, NewsArticle$toolsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsArticleToolPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the NewsArticle model
   */
  interface NewsArticleFieldRefs {
    readonly id: FieldRef<"NewsArticle", 'String'>
    readonly slug: FieldRef<"NewsArticle", 'String'>
    readonly title: FieldRef<"NewsArticle", 'String'>
    readonly excerpt: FieldRef<"NewsArticle", 'String'>
    readonly body: FieldRef<"NewsArticle", 'String'>
    readonly coverImageUrl: FieldRef<"NewsArticle", 'String'>
    readonly sourceName: FieldRef<"NewsArticle", 'String'>
    readonly sourceUrl: FieldRef<"NewsArticle", 'String'>
    readonly authorName: FieldRef<"NewsArticle", 'String'>
    readonly topic: FieldRef<"NewsArticle", 'String'>
    readonly readingMinutes: FieldRef<"NewsArticle", 'Int'>
    readonly status: FieldRef<"NewsArticle", 'NewsStatus'>
    readonly isFeatured: FieldRef<"NewsArticle", 'Boolean'>
    readonly publishedAt: FieldRef<"NewsArticle", 'DateTime'>
    readonly categoryId: FieldRef<"NewsArticle", 'String'>
    readonly createdAt: FieldRef<"NewsArticle", 'DateTime'>
    readonly updatedAt: FieldRef<"NewsArticle", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * NewsArticle findUnique
   */
  export type NewsArticleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsArticle
     */
    select?: NewsArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsArticle
     */
    omit?: NewsArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsArticleInclude<ExtArgs> | null
    /**
     * Filter, which NewsArticle to fetch.
     */
    where: NewsArticleWhereUniqueInput
  }

  /**
   * NewsArticle findUniqueOrThrow
   */
  export type NewsArticleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsArticle
     */
    select?: NewsArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsArticle
     */
    omit?: NewsArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsArticleInclude<ExtArgs> | null
    /**
     * Filter, which NewsArticle to fetch.
     */
    where: NewsArticleWhereUniqueInput
  }

  /**
   * NewsArticle findFirst
   */
  export type NewsArticleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsArticle
     */
    select?: NewsArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsArticle
     */
    omit?: NewsArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsArticleInclude<ExtArgs> | null
    /**
     * Filter, which NewsArticle to fetch.
     */
    where?: NewsArticleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NewsArticles to fetch.
     */
    orderBy?: NewsArticleOrderByWithRelationInput | NewsArticleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NewsArticles.
     */
    cursor?: NewsArticleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NewsArticles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NewsArticles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NewsArticles.
     */
    distinct?: NewsArticleScalarFieldEnum | NewsArticleScalarFieldEnum[]
  }

  /**
   * NewsArticle findFirstOrThrow
   */
  export type NewsArticleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsArticle
     */
    select?: NewsArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsArticle
     */
    omit?: NewsArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsArticleInclude<ExtArgs> | null
    /**
     * Filter, which NewsArticle to fetch.
     */
    where?: NewsArticleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NewsArticles to fetch.
     */
    orderBy?: NewsArticleOrderByWithRelationInput | NewsArticleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NewsArticles.
     */
    cursor?: NewsArticleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NewsArticles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NewsArticles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NewsArticles.
     */
    distinct?: NewsArticleScalarFieldEnum | NewsArticleScalarFieldEnum[]
  }

  /**
   * NewsArticle findMany
   */
  export type NewsArticleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsArticle
     */
    select?: NewsArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsArticle
     */
    omit?: NewsArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsArticleInclude<ExtArgs> | null
    /**
     * Filter, which NewsArticles to fetch.
     */
    where?: NewsArticleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NewsArticles to fetch.
     */
    orderBy?: NewsArticleOrderByWithRelationInput | NewsArticleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing NewsArticles.
     */
    cursor?: NewsArticleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NewsArticles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NewsArticles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NewsArticles.
     */
    distinct?: NewsArticleScalarFieldEnum | NewsArticleScalarFieldEnum[]
  }

  /**
   * NewsArticle create
   */
  export type NewsArticleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsArticle
     */
    select?: NewsArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsArticle
     */
    omit?: NewsArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsArticleInclude<ExtArgs> | null
    /**
     * The data needed to create a NewsArticle.
     */
    data: XOR<NewsArticleCreateInput, NewsArticleUncheckedCreateInput>
  }

  /**
   * NewsArticle createMany
   */
  export type NewsArticleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many NewsArticles.
     */
    data: NewsArticleCreateManyInput | NewsArticleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * NewsArticle createManyAndReturn
   */
  export type NewsArticleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsArticle
     */
    select?: NewsArticleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NewsArticle
     */
    omit?: NewsArticleOmit<ExtArgs> | null
    /**
     * The data used to create many NewsArticles.
     */
    data: NewsArticleCreateManyInput | NewsArticleCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsArticleIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * NewsArticle update
   */
  export type NewsArticleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsArticle
     */
    select?: NewsArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsArticle
     */
    omit?: NewsArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsArticleInclude<ExtArgs> | null
    /**
     * The data needed to update a NewsArticle.
     */
    data: XOR<NewsArticleUpdateInput, NewsArticleUncheckedUpdateInput>
    /**
     * Choose, which NewsArticle to update.
     */
    where: NewsArticleWhereUniqueInput
  }

  /**
   * NewsArticle updateMany
   */
  export type NewsArticleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update NewsArticles.
     */
    data: XOR<NewsArticleUpdateManyMutationInput, NewsArticleUncheckedUpdateManyInput>
    /**
     * Filter which NewsArticles to update
     */
    where?: NewsArticleWhereInput
    /**
     * Limit how many NewsArticles to update.
     */
    limit?: number
  }

  /**
   * NewsArticle updateManyAndReturn
   */
  export type NewsArticleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsArticle
     */
    select?: NewsArticleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NewsArticle
     */
    omit?: NewsArticleOmit<ExtArgs> | null
    /**
     * The data used to update NewsArticles.
     */
    data: XOR<NewsArticleUpdateManyMutationInput, NewsArticleUncheckedUpdateManyInput>
    /**
     * Filter which NewsArticles to update
     */
    where?: NewsArticleWhereInput
    /**
     * Limit how many NewsArticles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsArticleIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * NewsArticle upsert
   */
  export type NewsArticleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsArticle
     */
    select?: NewsArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsArticle
     */
    omit?: NewsArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsArticleInclude<ExtArgs> | null
    /**
     * The filter to search for the NewsArticle to update in case it exists.
     */
    where: NewsArticleWhereUniqueInput
    /**
     * In case the NewsArticle found by the `where` argument doesn't exist, create a new NewsArticle with this data.
     */
    create: XOR<NewsArticleCreateInput, NewsArticleUncheckedCreateInput>
    /**
     * In case the NewsArticle was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NewsArticleUpdateInput, NewsArticleUncheckedUpdateInput>
  }

  /**
   * NewsArticle delete
   */
  export type NewsArticleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsArticle
     */
    select?: NewsArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsArticle
     */
    omit?: NewsArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsArticleInclude<ExtArgs> | null
    /**
     * Filter which NewsArticle to delete.
     */
    where: NewsArticleWhereUniqueInput
  }

  /**
   * NewsArticle deleteMany
   */
  export type NewsArticleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NewsArticles to delete
     */
    where?: NewsArticleWhereInput
    /**
     * Limit how many NewsArticles to delete.
     */
    limit?: number
  }

  /**
   * NewsArticle.category
   */
  export type NewsArticle$categoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    where?: CategoryWhereInput
  }

  /**
   * NewsArticle.tools
   */
  export type NewsArticle$toolsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsArticleTool
     */
    select?: NewsArticleToolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsArticleTool
     */
    omit?: NewsArticleToolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsArticleToolInclude<ExtArgs> | null
    where?: NewsArticleToolWhereInput
    orderBy?: NewsArticleToolOrderByWithRelationInput | NewsArticleToolOrderByWithRelationInput[]
    cursor?: NewsArticleToolWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NewsArticleToolScalarFieldEnum | NewsArticleToolScalarFieldEnum[]
  }

  /**
   * NewsArticle without action
   */
  export type NewsArticleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsArticle
     */
    select?: NewsArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsArticle
     */
    omit?: NewsArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsArticleInclude<ExtArgs> | null
  }


  /**
   * Model NewsArticleTool
   */

  export type AggregateNewsArticleTool = {
    _count: NewsArticleToolCountAggregateOutputType | null
    _min: NewsArticleToolMinAggregateOutputType | null
    _max: NewsArticleToolMaxAggregateOutputType | null
  }

  export type NewsArticleToolMinAggregateOutputType = {
    articleId: string | null
    toolId: string | null
    createdAt: Date | null
  }

  export type NewsArticleToolMaxAggregateOutputType = {
    articleId: string | null
    toolId: string | null
    createdAt: Date | null
  }

  export type NewsArticleToolCountAggregateOutputType = {
    articleId: number
    toolId: number
    createdAt: number
    _all: number
  }


  export type NewsArticleToolMinAggregateInputType = {
    articleId?: true
    toolId?: true
    createdAt?: true
  }

  export type NewsArticleToolMaxAggregateInputType = {
    articleId?: true
    toolId?: true
    createdAt?: true
  }

  export type NewsArticleToolCountAggregateInputType = {
    articleId?: true
    toolId?: true
    createdAt?: true
    _all?: true
  }

  export type NewsArticleToolAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NewsArticleTool to aggregate.
     */
    where?: NewsArticleToolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NewsArticleTools to fetch.
     */
    orderBy?: NewsArticleToolOrderByWithRelationInput | NewsArticleToolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NewsArticleToolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NewsArticleTools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NewsArticleTools.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned NewsArticleTools
    **/
    _count?: true | NewsArticleToolCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NewsArticleToolMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NewsArticleToolMaxAggregateInputType
  }

  export type GetNewsArticleToolAggregateType<T extends NewsArticleToolAggregateArgs> = {
        [P in keyof T & keyof AggregateNewsArticleTool]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNewsArticleTool[P]>
      : GetScalarType<T[P], AggregateNewsArticleTool[P]>
  }




  export type NewsArticleToolGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NewsArticleToolWhereInput
    orderBy?: NewsArticleToolOrderByWithAggregationInput | NewsArticleToolOrderByWithAggregationInput[]
    by: NewsArticleToolScalarFieldEnum[] | NewsArticleToolScalarFieldEnum
    having?: NewsArticleToolScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NewsArticleToolCountAggregateInputType | true
    _min?: NewsArticleToolMinAggregateInputType
    _max?: NewsArticleToolMaxAggregateInputType
  }

  export type NewsArticleToolGroupByOutputType = {
    articleId: string
    toolId: string
    createdAt: Date
    _count: NewsArticleToolCountAggregateOutputType | null
    _min: NewsArticleToolMinAggregateOutputType | null
    _max: NewsArticleToolMaxAggregateOutputType | null
  }

  type GetNewsArticleToolGroupByPayload<T extends NewsArticleToolGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NewsArticleToolGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NewsArticleToolGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NewsArticleToolGroupByOutputType[P]>
            : GetScalarType<T[P], NewsArticleToolGroupByOutputType[P]>
        }
      >
    >


  export type NewsArticleToolSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    articleId?: boolean
    toolId?: boolean
    createdAt?: boolean
    article?: boolean | NewsArticleDefaultArgs<ExtArgs>
    tool?: boolean | ToolDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["newsArticleTool"]>

  export type NewsArticleToolSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    articleId?: boolean
    toolId?: boolean
    createdAt?: boolean
    article?: boolean | NewsArticleDefaultArgs<ExtArgs>
    tool?: boolean | ToolDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["newsArticleTool"]>

  export type NewsArticleToolSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    articleId?: boolean
    toolId?: boolean
    createdAt?: boolean
    article?: boolean | NewsArticleDefaultArgs<ExtArgs>
    tool?: boolean | ToolDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["newsArticleTool"]>

  export type NewsArticleToolSelectScalar = {
    articleId?: boolean
    toolId?: boolean
    createdAt?: boolean
  }

  export type NewsArticleToolOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"articleId" | "toolId" | "createdAt", ExtArgs["result"]["newsArticleTool"]>
  export type NewsArticleToolInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    article?: boolean | NewsArticleDefaultArgs<ExtArgs>
    tool?: boolean | ToolDefaultArgs<ExtArgs>
  }
  export type NewsArticleToolIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    article?: boolean | NewsArticleDefaultArgs<ExtArgs>
    tool?: boolean | ToolDefaultArgs<ExtArgs>
  }
  export type NewsArticleToolIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    article?: boolean | NewsArticleDefaultArgs<ExtArgs>
    tool?: boolean | ToolDefaultArgs<ExtArgs>
  }

  export type $NewsArticleToolPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "NewsArticleTool"
    objects: {
      article: Prisma.$NewsArticlePayload<ExtArgs>
      tool: Prisma.$ToolPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      articleId: string
      toolId: string
      createdAt: Date
    }, ExtArgs["result"]["newsArticleTool"]>
    composites: {}
  }

  type NewsArticleToolGetPayload<S extends boolean | null | undefined | NewsArticleToolDefaultArgs> = $Result.GetResult<Prisma.$NewsArticleToolPayload, S>

  type NewsArticleToolCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NewsArticleToolFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NewsArticleToolCountAggregateInputType | true
    }

  export interface NewsArticleToolDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['NewsArticleTool'], meta: { name: 'NewsArticleTool' } }
    /**
     * Find zero or one NewsArticleTool that matches the filter.
     * @param {NewsArticleToolFindUniqueArgs} args - Arguments to find a NewsArticleTool
     * @example
     * // Get one NewsArticleTool
     * const newsArticleTool = await prisma.newsArticleTool.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NewsArticleToolFindUniqueArgs>(args: SelectSubset<T, NewsArticleToolFindUniqueArgs<ExtArgs>>): Prisma__NewsArticleToolClient<$Result.GetResult<Prisma.$NewsArticleToolPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one NewsArticleTool that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NewsArticleToolFindUniqueOrThrowArgs} args - Arguments to find a NewsArticleTool
     * @example
     * // Get one NewsArticleTool
     * const newsArticleTool = await prisma.newsArticleTool.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NewsArticleToolFindUniqueOrThrowArgs>(args: SelectSubset<T, NewsArticleToolFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NewsArticleToolClient<$Result.GetResult<Prisma.$NewsArticleToolPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NewsArticleTool that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsArticleToolFindFirstArgs} args - Arguments to find a NewsArticleTool
     * @example
     * // Get one NewsArticleTool
     * const newsArticleTool = await prisma.newsArticleTool.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NewsArticleToolFindFirstArgs>(args?: SelectSubset<T, NewsArticleToolFindFirstArgs<ExtArgs>>): Prisma__NewsArticleToolClient<$Result.GetResult<Prisma.$NewsArticleToolPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NewsArticleTool that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsArticleToolFindFirstOrThrowArgs} args - Arguments to find a NewsArticleTool
     * @example
     * // Get one NewsArticleTool
     * const newsArticleTool = await prisma.newsArticleTool.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NewsArticleToolFindFirstOrThrowArgs>(args?: SelectSubset<T, NewsArticleToolFindFirstOrThrowArgs<ExtArgs>>): Prisma__NewsArticleToolClient<$Result.GetResult<Prisma.$NewsArticleToolPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more NewsArticleTools that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsArticleToolFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all NewsArticleTools
     * const newsArticleTools = await prisma.newsArticleTool.findMany()
     * 
     * // Get first 10 NewsArticleTools
     * const newsArticleTools = await prisma.newsArticleTool.findMany({ take: 10 })
     * 
     * // Only select the `articleId`
     * const newsArticleToolWithArticleIdOnly = await prisma.newsArticleTool.findMany({ select: { articleId: true } })
     * 
     */
    findMany<T extends NewsArticleToolFindManyArgs>(args?: SelectSubset<T, NewsArticleToolFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsArticleToolPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a NewsArticleTool.
     * @param {NewsArticleToolCreateArgs} args - Arguments to create a NewsArticleTool.
     * @example
     * // Create one NewsArticleTool
     * const NewsArticleTool = await prisma.newsArticleTool.create({
     *   data: {
     *     // ... data to create a NewsArticleTool
     *   }
     * })
     * 
     */
    create<T extends NewsArticleToolCreateArgs>(args: SelectSubset<T, NewsArticleToolCreateArgs<ExtArgs>>): Prisma__NewsArticleToolClient<$Result.GetResult<Prisma.$NewsArticleToolPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many NewsArticleTools.
     * @param {NewsArticleToolCreateManyArgs} args - Arguments to create many NewsArticleTools.
     * @example
     * // Create many NewsArticleTools
     * const newsArticleTool = await prisma.newsArticleTool.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NewsArticleToolCreateManyArgs>(args?: SelectSubset<T, NewsArticleToolCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many NewsArticleTools and returns the data saved in the database.
     * @param {NewsArticleToolCreateManyAndReturnArgs} args - Arguments to create many NewsArticleTools.
     * @example
     * // Create many NewsArticleTools
     * const newsArticleTool = await prisma.newsArticleTool.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many NewsArticleTools and only return the `articleId`
     * const newsArticleToolWithArticleIdOnly = await prisma.newsArticleTool.createManyAndReturn({
     *   select: { articleId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NewsArticleToolCreateManyAndReturnArgs>(args?: SelectSubset<T, NewsArticleToolCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsArticleToolPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a NewsArticleTool.
     * @param {NewsArticleToolDeleteArgs} args - Arguments to delete one NewsArticleTool.
     * @example
     * // Delete one NewsArticleTool
     * const NewsArticleTool = await prisma.newsArticleTool.delete({
     *   where: {
     *     // ... filter to delete one NewsArticleTool
     *   }
     * })
     * 
     */
    delete<T extends NewsArticleToolDeleteArgs>(args: SelectSubset<T, NewsArticleToolDeleteArgs<ExtArgs>>): Prisma__NewsArticleToolClient<$Result.GetResult<Prisma.$NewsArticleToolPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one NewsArticleTool.
     * @param {NewsArticleToolUpdateArgs} args - Arguments to update one NewsArticleTool.
     * @example
     * // Update one NewsArticleTool
     * const newsArticleTool = await prisma.newsArticleTool.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NewsArticleToolUpdateArgs>(args: SelectSubset<T, NewsArticleToolUpdateArgs<ExtArgs>>): Prisma__NewsArticleToolClient<$Result.GetResult<Prisma.$NewsArticleToolPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more NewsArticleTools.
     * @param {NewsArticleToolDeleteManyArgs} args - Arguments to filter NewsArticleTools to delete.
     * @example
     * // Delete a few NewsArticleTools
     * const { count } = await prisma.newsArticleTool.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NewsArticleToolDeleteManyArgs>(args?: SelectSubset<T, NewsArticleToolDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NewsArticleTools.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsArticleToolUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many NewsArticleTools
     * const newsArticleTool = await prisma.newsArticleTool.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NewsArticleToolUpdateManyArgs>(args: SelectSubset<T, NewsArticleToolUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NewsArticleTools and returns the data updated in the database.
     * @param {NewsArticleToolUpdateManyAndReturnArgs} args - Arguments to update many NewsArticleTools.
     * @example
     * // Update many NewsArticleTools
     * const newsArticleTool = await prisma.newsArticleTool.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more NewsArticleTools and only return the `articleId`
     * const newsArticleToolWithArticleIdOnly = await prisma.newsArticleTool.updateManyAndReturn({
     *   select: { articleId: true },
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
    updateManyAndReturn<T extends NewsArticleToolUpdateManyAndReturnArgs>(args: SelectSubset<T, NewsArticleToolUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsArticleToolPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one NewsArticleTool.
     * @param {NewsArticleToolUpsertArgs} args - Arguments to update or create a NewsArticleTool.
     * @example
     * // Update or create a NewsArticleTool
     * const newsArticleTool = await prisma.newsArticleTool.upsert({
     *   create: {
     *     // ... data to create a NewsArticleTool
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the NewsArticleTool we want to update
     *   }
     * })
     */
    upsert<T extends NewsArticleToolUpsertArgs>(args: SelectSubset<T, NewsArticleToolUpsertArgs<ExtArgs>>): Prisma__NewsArticleToolClient<$Result.GetResult<Prisma.$NewsArticleToolPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of NewsArticleTools.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsArticleToolCountArgs} args - Arguments to filter NewsArticleTools to count.
     * @example
     * // Count the number of NewsArticleTools
     * const count = await prisma.newsArticleTool.count({
     *   where: {
     *     // ... the filter for the NewsArticleTools we want to count
     *   }
     * })
    **/
    count<T extends NewsArticleToolCountArgs>(
      args?: Subset<T, NewsArticleToolCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NewsArticleToolCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a NewsArticleTool.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsArticleToolAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NewsArticleToolAggregateArgs>(args: Subset<T, NewsArticleToolAggregateArgs>): Prisma.PrismaPromise<GetNewsArticleToolAggregateType<T>>

    /**
     * Group by NewsArticleTool.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsArticleToolGroupByArgs} args - Group by arguments.
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
      T extends NewsArticleToolGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NewsArticleToolGroupByArgs['orderBy'] }
        : { orderBy?: NewsArticleToolGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NewsArticleToolGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNewsArticleToolGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the NewsArticleTool model
   */
  readonly fields: NewsArticleToolFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for NewsArticleTool.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NewsArticleToolClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    article<T extends NewsArticleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, NewsArticleDefaultArgs<ExtArgs>>): Prisma__NewsArticleClient<$Result.GetResult<Prisma.$NewsArticlePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tool<T extends ToolDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ToolDefaultArgs<ExtArgs>>): Prisma__ToolClient<$Result.GetResult<Prisma.$ToolPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the NewsArticleTool model
   */
  interface NewsArticleToolFieldRefs {
    readonly articleId: FieldRef<"NewsArticleTool", 'String'>
    readonly toolId: FieldRef<"NewsArticleTool", 'String'>
    readonly createdAt: FieldRef<"NewsArticleTool", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * NewsArticleTool findUnique
   */
  export type NewsArticleToolFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsArticleTool
     */
    select?: NewsArticleToolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsArticleTool
     */
    omit?: NewsArticleToolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsArticleToolInclude<ExtArgs> | null
    /**
     * Filter, which NewsArticleTool to fetch.
     */
    where: NewsArticleToolWhereUniqueInput
  }

  /**
   * NewsArticleTool findUniqueOrThrow
   */
  export type NewsArticleToolFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsArticleTool
     */
    select?: NewsArticleToolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsArticleTool
     */
    omit?: NewsArticleToolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsArticleToolInclude<ExtArgs> | null
    /**
     * Filter, which NewsArticleTool to fetch.
     */
    where: NewsArticleToolWhereUniqueInput
  }

  /**
   * NewsArticleTool findFirst
   */
  export type NewsArticleToolFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsArticleTool
     */
    select?: NewsArticleToolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsArticleTool
     */
    omit?: NewsArticleToolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsArticleToolInclude<ExtArgs> | null
    /**
     * Filter, which NewsArticleTool to fetch.
     */
    where?: NewsArticleToolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NewsArticleTools to fetch.
     */
    orderBy?: NewsArticleToolOrderByWithRelationInput | NewsArticleToolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NewsArticleTools.
     */
    cursor?: NewsArticleToolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NewsArticleTools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NewsArticleTools.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NewsArticleTools.
     */
    distinct?: NewsArticleToolScalarFieldEnum | NewsArticleToolScalarFieldEnum[]
  }

  /**
   * NewsArticleTool findFirstOrThrow
   */
  export type NewsArticleToolFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsArticleTool
     */
    select?: NewsArticleToolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsArticleTool
     */
    omit?: NewsArticleToolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsArticleToolInclude<ExtArgs> | null
    /**
     * Filter, which NewsArticleTool to fetch.
     */
    where?: NewsArticleToolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NewsArticleTools to fetch.
     */
    orderBy?: NewsArticleToolOrderByWithRelationInput | NewsArticleToolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NewsArticleTools.
     */
    cursor?: NewsArticleToolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NewsArticleTools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NewsArticleTools.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NewsArticleTools.
     */
    distinct?: NewsArticleToolScalarFieldEnum | NewsArticleToolScalarFieldEnum[]
  }

  /**
   * NewsArticleTool findMany
   */
  export type NewsArticleToolFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsArticleTool
     */
    select?: NewsArticleToolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsArticleTool
     */
    omit?: NewsArticleToolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsArticleToolInclude<ExtArgs> | null
    /**
     * Filter, which NewsArticleTools to fetch.
     */
    where?: NewsArticleToolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NewsArticleTools to fetch.
     */
    orderBy?: NewsArticleToolOrderByWithRelationInput | NewsArticleToolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing NewsArticleTools.
     */
    cursor?: NewsArticleToolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NewsArticleTools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NewsArticleTools.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NewsArticleTools.
     */
    distinct?: NewsArticleToolScalarFieldEnum | NewsArticleToolScalarFieldEnum[]
  }

  /**
   * NewsArticleTool create
   */
  export type NewsArticleToolCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsArticleTool
     */
    select?: NewsArticleToolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsArticleTool
     */
    omit?: NewsArticleToolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsArticleToolInclude<ExtArgs> | null
    /**
     * The data needed to create a NewsArticleTool.
     */
    data: XOR<NewsArticleToolCreateInput, NewsArticleToolUncheckedCreateInput>
  }

  /**
   * NewsArticleTool createMany
   */
  export type NewsArticleToolCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many NewsArticleTools.
     */
    data: NewsArticleToolCreateManyInput | NewsArticleToolCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * NewsArticleTool createManyAndReturn
   */
  export type NewsArticleToolCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsArticleTool
     */
    select?: NewsArticleToolSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NewsArticleTool
     */
    omit?: NewsArticleToolOmit<ExtArgs> | null
    /**
     * The data used to create many NewsArticleTools.
     */
    data: NewsArticleToolCreateManyInput | NewsArticleToolCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsArticleToolIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * NewsArticleTool update
   */
  export type NewsArticleToolUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsArticleTool
     */
    select?: NewsArticleToolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsArticleTool
     */
    omit?: NewsArticleToolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsArticleToolInclude<ExtArgs> | null
    /**
     * The data needed to update a NewsArticleTool.
     */
    data: XOR<NewsArticleToolUpdateInput, NewsArticleToolUncheckedUpdateInput>
    /**
     * Choose, which NewsArticleTool to update.
     */
    where: NewsArticleToolWhereUniqueInput
  }

  /**
   * NewsArticleTool updateMany
   */
  export type NewsArticleToolUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update NewsArticleTools.
     */
    data: XOR<NewsArticleToolUpdateManyMutationInput, NewsArticleToolUncheckedUpdateManyInput>
    /**
     * Filter which NewsArticleTools to update
     */
    where?: NewsArticleToolWhereInput
    /**
     * Limit how many NewsArticleTools to update.
     */
    limit?: number
  }

  /**
   * NewsArticleTool updateManyAndReturn
   */
  export type NewsArticleToolUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsArticleTool
     */
    select?: NewsArticleToolSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NewsArticleTool
     */
    omit?: NewsArticleToolOmit<ExtArgs> | null
    /**
     * The data used to update NewsArticleTools.
     */
    data: XOR<NewsArticleToolUpdateManyMutationInput, NewsArticleToolUncheckedUpdateManyInput>
    /**
     * Filter which NewsArticleTools to update
     */
    where?: NewsArticleToolWhereInput
    /**
     * Limit how many NewsArticleTools to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsArticleToolIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * NewsArticleTool upsert
   */
  export type NewsArticleToolUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsArticleTool
     */
    select?: NewsArticleToolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsArticleTool
     */
    omit?: NewsArticleToolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsArticleToolInclude<ExtArgs> | null
    /**
     * The filter to search for the NewsArticleTool to update in case it exists.
     */
    where: NewsArticleToolWhereUniqueInput
    /**
     * In case the NewsArticleTool found by the `where` argument doesn't exist, create a new NewsArticleTool with this data.
     */
    create: XOR<NewsArticleToolCreateInput, NewsArticleToolUncheckedCreateInput>
    /**
     * In case the NewsArticleTool was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NewsArticleToolUpdateInput, NewsArticleToolUncheckedUpdateInput>
  }

  /**
   * NewsArticleTool delete
   */
  export type NewsArticleToolDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsArticleTool
     */
    select?: NewsArticleToolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsArticleTool
     */
    omit?: NewsArticleToolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsArticleToolInclude<ExtArgs> | null
    /**
     * Filter which NewsArticleTool to delete.
     */
    where: NewsArticleToolWhereUniqueInput
  }

  /**
   * NewsArticleTool deleteMany
   */
  export type NewsArticleToolDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NewsArticleTools to delete
     */
    where?: NewsArticleToolWhereInput
    /**
     * Limit how many NewsArticleTools to delete.
     */
    limit?: number
  }

  /**
   * NewsArticleTool without action
   */
  export type NewsArticleToolDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsArticleTool
     */
    select?: NewsArticleToolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsArticleTool
     */
    omit?: NewsArticleToolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsArticleToolInclude<ExtArgs> | null
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


  export const CategoryScalarFieldEnum: {
    id: 'id',
    slug: 'slug',
    name: 'name',
    description: 'description',
    accent: 'accent',
    sortOrder: 'sortOrder',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const PlatformScalarFieldEnum: {
    id: 'id',
    slug: 'slug',
    name: 'name',
    description: 'description',
    sortOrder: 'sortOrder',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PlatformScalarFieldEnum = (typeof PlatformScalarFieldEnum)[keyof typeof PlatformScalarFieldEnum]


  export const ToolScalarFieldEnum: {
    id: 'id',
    slug: 'slug',
    name: 'name',
    tagline: 'tagline',
    description: 'description',
    logoUrl: 'logoUrl',
    websiteUrl: 'websiteUrl',
    docsUrl: 'docsUrl',
    companyName: 'companyName',
    companyUrl: 'companyUrl',
    companyLocation: 'companyLocation',
    pricingModel: 'pricingModel',
    pricingNote: 'pricingNote',
    status: 'status',
    isFeatured: 'isFeatured',
    isVerified: 'isVerified',
    popularityScore: 'popularityScore',
    launchDate: 'launchDate',
    publishedAt: 'publishedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ToolScalarFieldEnum = (typeof ToolScalarFieldEnum)[keyof typeof ToolScalarFieldEnum]


  export const ToolCategoryScalarFieldEnum: {
    toolId: 'toolId',
    categoryId: 'categoryId',
    createdAt: 'createdAt'
  };

  export type ToolCategoryScalarFieldEnum = (typeof ToolCategoryScalarFieldEnum)[keyof typeof ToolCategoryScalarFieldEnum]


  export const ToolPlatformScalarFieldEnum: {
    toolId: 'toolId',
    platformId: 'platformId',
    createdAt: 'createdAt'
  };

  export type ToolPlatformScalarFieldEnum = (typeof ToolPlatformScalarFieldEnum)[keyof typeof ToolPlatformScalarFieldEnum]


  export const ToolCapabilityScalarFieldEnum: {
    id: 'id',
    toolId: 'toolId',
    title: 'title',
    summary: 'summary',
    sortOrder: 'sortOrder',
    createdAt: 'createdAt'
  };

  export type ToolCapabilityScalarFieldEnum = (typeof ToolCapabilityScalarFieldEnum)[keyof typeof ToolCapabilityScalarFieldEnum]


  export const ToolUseCaseScalarFieldEnum: {
    id: 'id',
    toolId: 'toolId',
    title: 'title',
    summary: 'summary',
    sortOrder: 'sortOrder',
    createdAt: 'createdAt'
  };

  export type ToolUseCaseScalarFieldEnum = (typeof ToolUseCaseScalarFieldEnum)[keyof typeof ToolUseCaseScalarFieldEnum]


  export const ToolScreenshotScalarFieldEnum: {
    id: 'id',
    toolId: 'toolId',
    imageUrl: 'imageUrl',
    altText: 'altText',
    caption: 'caption',
    sortOrder: 'sortOrder',
    createdAt: 'createdAt'
  };

  export type ToolScreenshotScalarFieldEnum = (typeof ToolScreenshotScalarFieldEnum)[keyof typeof ToolScreenshotScalarFieldEnum]


  export const NewsArticleScalarFieldEnum: {
    id: 'id',
    slug: 'slug',
    title: 'title',
    excerpt: 'excerpt',
    body: 'body',
    coverImageUrl: 'coverImageUrl',
    sourceName: 'sourceName',
    sourceUrl: 'sourceUrl',
    authorName: 'authorName',
    topic: 'topic',
    readingMinutes: 'readingMinutes',
    status: 'status',
    isFeatured: 'isFeatured',
    publishedAt: 'publishedAt',
    categoryId: 'categoryId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type NewsArticleScalarFieldEnum = (typeof NewsArticleScalarFieldEnum)[keyof typeof NewsArticleScalarFieldEnum]


  export const NewsArticleToolScalarFieldEnum: {
    articleId: 'articleId',
    toolId: 'toolId',
    createdAt: 'createdAt'
  };

  export type NewsArticleToolScalarFieldEnum = (typeof NewsArticleToolScalarFieldEnum)[keyof typeof NewsArticleToolScalarFieldEnum]


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
   * Reference to a field of type 'PricingModel'
   */
  export type EnumPricingModelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PricingModel'>
    


  /**
   * Reference to a field of type 'PricingModel[]'
   */
  export type ListEnumPricingModelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PricingModel[]'>
    


  /**
   * Reference to a field of type 'ToolStatus'
   */
  export type EnumToolStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ToolStatus'>
    


  /**
   * Reference to a field of type 'ToolStatus[]'
   */
  export type ListEnumToolStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ToolStatus[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'NewsStatus'
   */
  export type EnumNewsStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'NewsStatus'>
    


  /**
   * Reference to a field of type 'NewsStatus[]'
   */
  export type ListEnumNewsStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'NewsStatus[]'>
    


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


  export type CategoryWhereInput = {
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    id?: StringFilter<"Category"> | string
    slug?: StringFilter<"Category"> | string
    name?: StringFilter<"Category"> | string
    description?: StringNullableFilter<"Category"> | string | null
    accent?: StringNullableFilter<"Category"> | string | null
    sortOrder?: IntFilter<"Category"> | number
    createdAt?: DateTimeFilter<"Category"> | Date | string
    updatedAt?: DateTimeFilter<"Category"> | Date | string
    tools?: ToolCategoryListRelationFilter
    news?: NewsArticleListRelationFilter
  }

  export type CategoryOrderByWithRelationInput = {
    id?: SortOrder
    slug?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    accent?: SortOrderInput | SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tools?: ToolCategoryOrderByRelationAggregateInput
    news?: NewsArticleOrderByRelationAggregateInput
  }

  export type CategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    name?: StringFilter<"Category"> | string
    description?: StringNullableFilter<"Category"> | string | null
    accent?: StringNullableFilter<"Category"> | string | null
    sortOrder?: IntFilter<"Category"> | number
    createdAt?: DateTimeFilter<"Category"> | Date | string
    updatedAt?: DateTimeFilter<"Category"> | Date | string
    tools?: ToolCategoryListRelationFilter
    news?: NewsArticleListRelationFilter
  }, "id" | "slug">

  export type CategoryOrderByWithAggregationInput = {
    id?: SortOrder
    slug?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    accent?: SortOrderInput | SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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
    id?: StringWithAggregatesFilter<"Category"> | string
    slug?: StringWithAggregatesFilter<"Category"> | string
    name?: StringWithAggregatesFilter<"Category"> | string
    description?: StringNullableWithAggregatesFilter<"Category"> | string | null
    accent?: StringNullableWithAggregatesFilter<"Category"> | string | null
    sortOrder?: IntWithAggregatesFilter<"Category"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Category"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Category"> | Date | string
  }

  export type PlatformWhereInput = {
    AND?: PlatformWhereInput | PlatformWhereInput[]
    OR?: PlatformWhereInput[]
    NOT?: PlatformWhereInput | PlatformWhereInput[]
    id?: StringFilter<"Platform"> | string
    slug?: StringFilter<"Platform"> | string
    name?: StringFilter<"Platform"> | string
    description?: StringNullableFilter<"Platform"> | string | null
    sortOrder?: IntFilter<"Platform"> | number
    createdAt?: DateTimeFilter<"Platform"> | Date | string
    updatedAt?: DateTimeFilter<"Platform"> | Date | string
    tools?: ToolPlatformListRelationFilter
  }

  export type PlatformOrderByWithRelationInput = {
    id?: SortOrder
    slug?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tools?: ToolPlatformOrderByRelationAggregateInput
  }

  export type PlatformWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: PlatformWhereInput | PlatformWhereInput[]
    OR?: PlatformWhereInput[]
    NOT?: PlatformWhereInput | PlatformWhereInput[]
    name?: StringFilter<"Platform"> | string
    description?: StringNullableFilter<"Platform"> | string | null
    sortOrder?: IntFilter<"Platform"> | number
    createdAt?: DateTimeFilter<"Platform"> | Date | string
    updatedAt?: DateTimeFilter<"Platform"> | Date | string
    tools?: ToolPlatformListRelationFilter
  }, "id" | "slug">

  export type PlatformOrderByWithAggregationInput = {
    id?: SortOrder
    slug?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PlatformCountOrderByAggregateInput
    _avg?: PlatformAvgOrderByAggregateInput
    _max?: PlatformMaxOrderByAggregateInput
    _min?: PlatformMinOrderByAggregateInput
    _sum?: PlatformSumOrderByAggregateInput
  }

  export type PlatformScalarWhereWithAggregatesInput = {
    AND?: PlatformScalarWhereWithAggregatesInput | PlatformScalarWhereWithAggregatesInput[]
    OR?: PlatformScalarWhereWithAggregatesInput[]
    NOT?: PlatformScalarWhereWithAggregatesInput | PlatformScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Platform"> | string
    slug?: StringWithAggregatesFilter<"Platform"> | string
    name?: StringWithAggregatesFilter<"Platform"> | string
    description?: StringNullableWithAggregatesFilter<"Platform"> | string | null
    sortOrder?: IntWithAggregatesFilter<"Platform"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Platform"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Platform"> | Date | string
  }

  export type ToolWhereInput = {
    AND?: ToolWhereInput | ToolWhereInput[]
    OR?: ToolWhereInput[]
    NOT?: ToolWhereInput | ToolWhereInput[]
    id?: StringFilter<"Tool"> | string
    slug?: StringFilter<"Tool"> | string
    name?: StringFilter<"Tool"> | string
    tagline?: StringFilter<"Tool"> | string
    description?: StringFilter<"Tool"> | string
    logoUrl?: StringNullableFilter<"Tool"> | string | null
    websiteUrl?: StringFilter<"Tool"> | string
    docsUrl?: StringNullableFilter<"Tool"> | string | null
    companyName?: StringFilter<"Tool"> | string
    companyUrl?: StringNullableFilter<"Tool"> | string | null
    companyLocation?: StringNullableFilter<"Tool"> | string | null
    pricingModel?: EnumPricingModelFilter<"Tool"> | $Enums.PricingModel
    pricingNote?: StringNullableFilter<"Tool"> | string | null
    status?: EnumToolStatusFilter<"Tool"> | $Enums.ToolStatus
    isFeatured?: BoolFilter<"Tool"> | boolean
    isVerified?: BoolFilter<"Tool"> | boolean
    popularityScore?: IntFilter<"Tool"> | number
    launchDate?: DateTimeNullableFilter<"Tool"> | Date | string | null
    publishedAt?: DateTimeNullableFilter<"Tool"> | Date | string | null
    createdAt?: DateTimeFilter<"Tool"> | Date | string
    updatedAt?: DateTimeFilter<"Tool"> | Date | string
    categories?: ToolCategoryListRelationFilter
    platforms?: ToolPlatformListRelationFilter
    capabilities?: ToolCapabilityListRelationFilter
    useCases?: ToolUseCaseListRelationFilter
    screenshots?: ToolScreenshotListRelationFilter
    news?: NewsArticleToolListRelationFilter
  }

  export type ToolOrderByWithRelationInput = {
    id?: SortOrder
    slug?: SortOrder
    name?: SortOrder
    tagline?: SortOrder
    description?: SortOrder
    logoUrl?: SortOrderInput | SortOrder
    websiteUrl?: SortOrder
    docsUrl?: SortOrderInput | SortOrder
    companyName?: SortOrder
    companyUrl?: SortOrderInput | SortOrder
    companyLocation?: SortOrderInput | SortOrder
    pricingModel?: SortOrder
    pricingNote?: SortOrderInput | SortOrder
    status?: SortOrder
    isFeatured?: SortOrder
    isVerified?: SortOrder
    popularityScore?: SortOrder
    launchDate?: SortOrderInput | SortOrder
    publishedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    categories?: ToolCategoryOrderByRelationAggregateInput
    platforms?: ToolPlatformOrderByRelationAggregateInput
    capabilities?: ToolCapabilityOrderByRelationAggregateInput
    useCases?: ToolUseCaseOrderByRelationAggregateInput
    screenshots?: ToolScreenshotOrderByRelationAggregateInput
    news?: NewsArticleToolOrderByRelationAggregateInput
  }

  export type ToolWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: ToolWhereInput | ToolWhereInput[]
    OR?: ToolWhereInput[]
    NOT?: ToolWhereInput | ToolWhereInput[]
    name?: StringFilter<"Tool"> | string
    tagline?: StringFilter<"Tool"> | string
    description?: StringFilter<"Tool"> | string
    logoUrl?: StringNullableFilter<"Tool"> | string | null
    websiteUrl?: StringFilter<"Tool"> | string
    docsUrl?: StringNullableFilter<"Tool"> | string | null
    companyName?: StringFilter<"Tool"> | string
    companyUrl?: StringNullableFilter<"Tool"> | string | null
    companyLocation?: StringNullableFilter<"Tool"> | string | null
    pricingModel?: EnumPricingModelFilter<"Tool"> | $Enums.PricingModel
    pricingNote?: StringNullableFilter<"Tool"> | string | null
    status?: EnumToolStatusFilter<"Tool"> | $Enums.ToolStatus
    isFeatured?: BoolFilter<"Tool"> | boolean
    isVerified?: BoolFilter<"Tool"> | boolean
    popularityScore?: IntFilter<"Tool"> | number
    launchDate?: DateTimeNullableFilter<"Tool"> | Date | string | null
    publishedAt?: DateTimeNullableFilter<"Tool"> | Date | string | null
    createdAt?: DateTimeFilter<"Tool"> | Date | string
    updatedAt?: DateTimeFilter<"Tool"> | Date | string
    categories?: ToolCategoryListRelationFilter
    platforms?: ToolPlatformListRelationFilter
    capabilities?: ToolCapabilityListRelationFilter
    useCases?: ToolUseCaseListRelationFilter
    screenshots?: ToolScreenshotListRelationFilter
    news?: NewsArticleToolListRelationFilter
  }, "id" | "slug">

  export type ToolOrderByWithAggregationInput = {
    id?: SortOrder
    slug?: SortOrder
    name?: SortOrder
    tagline?: SortOrder
    description?: SortOrder
    logoUrl?: SortOrderInput | SortOrder
    websiteUrl?: SortOrder
    docsUrl?: SortOrderInput | SortOrder
    companyName?: SortOrder
    companyUrl?: SortOrderInput | SortOrder
    companyLocation?: SortOrderInput | SortOrder
    pricingModel?: SortOrder
    pricingNote?: SortOrderInput | SortOrder
    status?: SortOrder
    isFeatured?: SortOrder
    isVerified?: SortOrder
    popularityScore?: SortOrder
    launchDate?: SortOrderInput | SortOrder
    publishedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ToolCountOrderByAggregateInput
    _avg?: ToolAvgOrderByAggregateInput
    _max?: ToolMaxOrderByAggregateInput
    _min?: ToolMinOrderByAggregateInput
    _sum?: ToolSumOrderByAggregateInput
  }

  export type ToolScalarWhereWithAggregatesInput = {
    AND?: ToolScalarWhereWithAggregatesInput | ToolScalarWhereWithAggregatesInput[]
    OR?: ToolScalarWhereWithAggregatesInput[]
    NOT?: ToolScalarWhereWithAggregatesInput | ToolScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Tool"> | string
    slug?: StringWithAggregatesFilter<"Tool"> | string
    name?: StringWithAggregatesFilter<"Tool"> | string
    tagline?: StringWithAggregatesFilter<"Tool"> | string
    description?: StringWithAggregatesFilter<"Tool"> | string
    logoUrl?: StringNullableWithAggregatesFilter<"Tool"> | string | null
    websiteUrl?: StringWithAggregatesFilter<"Tool"> | string
    docsUrl?: StringNullableWithAggregatesFilter<"Tool"> | string | null
    companyName?: StringWithAggregatesFilter<"Tool"> | string
    companyUrl?: StringNullableWithAggregatesFilter<"Tool"> | string | null
    companyLocation?: StringNullableWithAggregatesFilter<"Tool"> | string | null
    pricingModel?: EnumPricingModelWithAggregatesFilter<"Tool"> | $Enums.PricingModel
    pricingNote?: StringNullableWithAggregatesFilter<"Tool"> | string | null
    status?: EnumToolStatusWithAggregatesFilter<"Tool"> | $Enums.ToolStatus
    isFeatured?: BoolWithAggregatesFilter<"Tool"> | boolean
    isVerified?: BoolWithAggregatesFilter<"Tool"> | boolean
    popularityScore?: IntWithAggregatesFilter<"Tool"> | number
    launchDate?: DateTimeNullableWithAggregatesFilter<"Tool"> | Date | string | null
    publishedAt?: DateTimeNullableWithAggregatesFilter<"Tool"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Tool"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Tool"> | Date | string
  }

  export type ToolCategoryWhereInput = {
    AND?: ToolCategoryWhereInput | ToolCategoryWhereInput[]
    OR?: ToolCategoryWhereInput[]
    NOT?: ToolCategoryWhereInput | ToolCategoryWhereInput[]
    toolId?: StringFilter<"ToolCategory"> | string
    categoryId?: StringFilter<"ToolCategory"> | string
    createdAt?: DateTimeFilter<"ToolCategory"> | Date | string
    tool?: XOR<ToolScalarRelationFilter, ToolWhereInput>
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
  }

  export type ToolCategoryOrderByWithRelationInput = {
    toolId?: SortOrder
    categoryId?: SortOrder
    createdAt?: SortOrder
    tool?: ToolOrderByWithRelationInput
    category?: CategoryOrderByWithRelationInput
  }

  export type ToolCategoryWhereUniqueInput = Prisma.AtLeast<{
    toolId_categoryId?: ToolCategoryToolIdCategoryIdCompoundUniqueInput
    AND?: ToolCategoryWhereInput | ToolCategoryWhereInput[]
    OR?: ToolCategoryWhereInput[]
    NOT?: ToolCategoryWhereInput | ToolCategoryWhereInput[]
    toolId?: StringFilter<"ToolCategory"> | string
    categoryId?: StringFilter<"ToolCategory"> | string
    createdAt?: DateTimeFilter<"ToolCategory"> | Date | string
    tool?: XOR<ToolScalarRelationFilter, ToolWhereInput>
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
  }, "toolId_categoryId">

  export type ToolCategoryOrderByWithAggregationInput = {
    toolId?: SortOrder
    categoryId?: SortOrder
    createdAt?: SortOrder
    _count?: ToolCategoryCountOrderByAggregateInput
    _max?: ToolCategoryMaxOrderByAggregateInput
    _min?: ToolCategoryMinOrderByAggregateInput
  }

  export type ToolCategoryScalarWhereWithAggregatesInput = {
    AND?: ToolCategoryScalarWhereWithAggregatesInput | ToolCategoryScalarWhereWithAggregatesInput[]
    OR?: ToolCategoryScalarWhereWithAggregatesInput[]
    NOT?: ToolCategoryScalarWhereWithAggregatesInput | ToolCategoryScalarWhereWithAggregatesInput[]
    toolId?: StringWithAggregatesFilter<"ToolCategory"> | string
    categoryId?: StringWithAggregatesFilter<"ToolCategory"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ToolCategory"> | Date | string
  }

  export type ToolPlatformWhereInput = {
    AND?: ToolPlatformWhereInput | ToolPlatformWhereInput[]
    OR?: ToolPlatformWhereInput[]
    NOT?: ToolPlatformWhereInput | ToolPlatformWhereInput[]
    toolId?: StringFilter<"ToolPlatform"> | string
    platformId?: StringFilter<"ToolPlatform"> | string
    createdAt?: DateTimeFilter<"ToolPlatform"> | Date | string
    tool?: XOR<ToolScalarRelationFilter, ToolWhereInput>
    platform?: XOR<PlatformScalarRelationFilter, PlatformWhereInput>
  }

  export type ToolPlatformOrderByWithRelationInput = {
    toolId?: SortOrder
    platformId?: SortOrder
    createdAt?: SortOrder
    tool?: ToolOrderByWithRelationInput
    platform?: PlatformOrderByWithRelationInput
  }

  export type ToolPlatformWhereUniqueInput = Prisma.AtLeast<{
    toolId_platformId?: ToolPlatformToolIdPlatformIdCompoundUniqueInput
    AND?: ToolPlatformWhereInput | ToolPlatformWhereInput[]
    OR?: ToolPlatformWhereInput[]
    NOT?: ToolPlatformWhereInput | ToolPlatformWhereInput[]
    toolId?: StringFilter<"ToolPlatform"> | string
    platformId?: StringFilter<"ToolPlatform"> | string
    createdAt?: DateTimeFilter<"ToolPlatform"> | Date | string
    tool?: XOR<ToolScalarRelationFilter, ToolWhereInput>
    platform?: XOR<PlatformScalarRelationFilter, PlatformWhereInput>
  }, "toolId_platformId">

  export type ToolPlatformOrderByWithAggregationInput = {
    toolId?: SortOrder
    platformId?: SortOrder
    createdAt?: SortOrder
    _count?: ToolPlatformCountOrderByAggregateInput
    _max?: ToolPlatformMaxOrderByAggregateInput
    _min?: ToolPlatformMinOrderByAggregateInput
  }

  export type ToolPlatformScalarWhereWithAggregatesInput = {
    AND?: ToolPlatformScalarWhereWithAggregatesInput | ToolPlatformScalarWhereWithAggregatesInput[]
    OR?: ToolPlatformScalarWhereWithAggregatesInput[]
    NOT?: ToolPlatformScalarWhereWithAggregatesInput | ToolPlatformScalarWhereWithAggregatesInput[]
    toolId?: StringWithAggregatesFilter<"ToolPlatform"> | string
    platformId?: StringWithAggregatesFilter<"ToolPlatform"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ToolPlatform"> | Date | string
  }

  export type ToolCapabilityWhereInput = {
    AND?: ToolCapabilityWhereInput | ToolCapabilityWhereInput[]
    OR?: ToolCapabilityWhereInput[]
    NOT?: ToolCapabilityWhereInput | ToolCapabilityWhereInput[]
    id?: StringFilter<"ToolCapability"> | string
    toolId?: StringFilter<"ToolCapability"> | string
    title?: StringFilter<"ToolCapability"> | string
    summary?: StringNullableFilter<"ToolCapability"> | string | null
    sortOrder?: IntFilter<"ToolCapability"> | number
    createdAt?: DateTimeFilter<"ToolCapability"> | Date | string
    tool?: XOR<ToolScalarRelationFilter, ToolWhereInput>
  }

  export type ToolCapabilityOrderByWithRelationInput = {
    id?: SortOrder
    toolId?: SortOrder
    title?: SortOrder
    summary?: SortOrderInput | SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    tool?: ToolOrderByWithRelationInput
  }

  export type ToolCapabilityWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ToolCapabilityWhereInput | ToolCapabilityWhereInput[]
    OR?: ToolCapabilityWhereInput[]
    NOT?: ToolCapabilityWhereInput | ToolCapabilityWhereInput[]
    toolId?: StringFilter<"ToolCapability"> | string
    title?: StringFilter<"ToolCapability"> | string
    summary?: StringNullableFilter<"ToolCapability"> | string | null
    sortOrder?: IntFilter<"ToolCapability"> | number
    createdAt?: DateTimeFilter<"ToolCapability"> | Date | string
    tool?: XOR<ToolScalarRelationFilter, ToolWhereInput>
  }, "id">

  export type ToolCapabilityOrderByWithAggregationInput = {
    id?: SortOrder
    toolId?: SortOrder
    title?: SortOrder
    summary?: SortOrderInput | SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    _count?: ToolCapabilityCountOrderByAggregateInput
    _avg?: ToolCapabilityAvgOrderByAggregateInput
    _max?: ToolCapabilityMaxOrderByAggregateInput
    _min?: ToolCapabilityMinOrderByAggregateInput
    _sum?: ToolCapabilitySumOrderByAggregateInput
  }

  export type ToolCapabilityScalarWhereWithAggregatesInput = {
    AND?: ToolCapabilityScalarWhereWithAggregatesInput | ToolCapabilityScalarWhereWithAggregatesInput[]
    OR?: ToolCapabilityScalarWhereWithAggregatesInput[]
    NOT?: ToolCapabilityScalarWhereWithAggregatesInput | ToolCapabilityScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ToolCapability"> | string
    toolId?: StringWithAggregatesFilter<"ToolCapability"> | string
    title?: StringWithAggregatesFilter<"ToolCapability"> | string
    summary?: StringNullableWithAggregatesFilter<"ToolCapability"> | string | null
    sortOrder?: IntWithAggregatesFilter<"ToolCapability"> | number
    createdAt?: DateTimeWithAggregatesFilter<"ToolCapability"> | Date | string
  }

  export type ToolUseCaseWhereInput = {
    AND?: ToolUseCaseWhereInput | ToolUseCaseWhereInput[]
    OR?: ToolUseCaseWhereInput[]
    NOT?: ToolUseCaseWhereInput | ToolUseCaseWhereInput[]
    id?: StringFilter<"ToolUseCase"> | string
    toolId?: StringFilter<"ToolUseCase"> | string
    title?: StringFilter<"ToolUseCase"> | string
    summary?: StringNullableFilter<"ToolUseCase"> | string | null
    sortOrder?: IntFilter<"ToolUseCase"> | number
    createdAt?: DateTimeFilter<"ToolUseCase"> | Date | string
    tool?: XOR<ToolScalarRelationFilter, ToolWhereInput>
  }

  export type ToolUseCaseOrderByWithRelationInput = {
    id?: SortOrder
    toolId?: SortOrder
    title?: SortOrder
    summary?: SortOrderInput | SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    tool?: ToolOrderByWithRelationInput
  }

  export type ToolUseCaseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ToolUseCaseWhereInput | ToolUseCaseWhereInput[]
    OR?: ToolUseCaseWhereInput[]
    NOT?: ToolUseCaseWhereInput | ToolUseCaseWhereInput[]
    toolId?: StringFilter<"ToolUseCase"> | string
    title?: StringFilter<"ToolUseCase"> | string
    summary?: StringNullableFilter<"ToolUseCase"> | string | null
    sortOrder?: IntFilter<"ToolUseCase"> | number
    createdAt?: DateTimeFilter<"ToolUseCase"> | Date | string
    tool?: XOR<ToolScalarRelationFilter, ToolWhereInput>
  }, "id">

  export type ToolUseCaseOrderByWithAggregationInput = {
    id?: SortOrder
    toolId?: SortOrder
    title?: SortOrder
    summary?: SortOrderInput | SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    _count?: ToolUseCaseCountOrderByAggregateInput
    _avg?: ToolUseCaseAvgOrderByAggregateInput
    _max?: ToolUseCaseMaxOrderByAggregateInput
    _min?: ToolUseCaseMinOrderByAggregateInput
    _sum?: ToolUseCaseSumOrderByAggregateInput
  }

  export type ToolUseCaseScalarWhereWithAggregatesInput = {
    AND?: ToolUseCaseScalarWhereWithAggregatesInput | ToolUseCaseScalarWhereWithAggregatesInput[]
    OR?: ToolUseCaseScalarWhereWithAggregatesInput[]
    NOT?: ToolUseCaseScalarWhereWithAggregatesInput | ToolUseCaseScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ToolUseCase"> | string
    toolId?: StringWithAggregatesFilter<"ToolUseCase"> | string
    title?: StringWithAggregatesFilter<"ToolUseCase"> | string
    summary?: StringNullableWithAggregatesFilter<"ToolUseCase"> | string | null
    sortOrder?: IntWithAggregatesFilter<"ToolUseCase"> | number
    createdAt?: DateTimeWithAggregatesFilter<"ToolUseCase"> | Date | string
  }

  export type ToolScreenshotWhereInput = {
    AND?: ToolScreenshotWhereInput | ToolScreenshotWhereInput[]
    OR?: ToolScreenshotWhereInput[]
    NOT?: ToolScreenshotWhereInput | ToolScreenshotWhereInput[]
    id?: StringFilter<"ToolScreenshot"> | string
    toolId?: StringFilter<"ToolScreenshot"> | string
    imageUrl?: StringFilter<"ToolScreenshot"> | string
    altText?: StringFilter<"ToolScreenshot"> | string
    caption?: StringNullableFilter<"ToolScreenshot"> | string | null
    sortOrder?: IntFilter<"ToolScreenshot"> | number
    createdAt?: DateTimeFilter<"ToolScreenshot"> | Date | string
    tool?: XOR<ToolScalarRelationFilter, ToolWhereInput>
  }

  export type ToolScreenshotOrderByWithRelationInput = {
    id?: SortOrder
    toolId?: SortOrder
    imageUrl?: SortOrder
    altText?: SortOrder
    caption?: SortOrderInput | SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    tool?: ToolOrderByWithRelationInput
  }

  export type ToolScreenshotWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ToolScreenshotWhereInput | ToolScreenshotWhereInput[]
    OR?: ToolScreenshotWhereInput[]
    NOT?: ToolScreenshotWhereInput | ToolScreenshotWhereInput[]
    toolId?: StringFilter<"ToolScreenshot"> | string
    imageUrl?: StringFilter<"ToolScreenshot"> | string
    altText?: StringFilter<"ToolScreenshot"> | string
    caption?: StringNullableFilter<"ToolScreenshot"> | string | null
    sortOrder?: IntFilter<"ToolScreenshot"> | number
    createdAt?: DateTimeFilter<"ToolScreenshot"> | Date | string
    tool?: XOR<ToolScalarRelationFilter, ToolWhereInput>
  }, "id">

  export type ToolScreenshotOrderByWithAggregationInput = {
    id?: SortOrder
    toolId?: SortOrder
    imageUrl?: SortOrder
    altText?: SortOrder
    caption?: SortOrderInput | SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    _count?: ToolScreenshotCountOrderByAggregateInput
    _avg?: ToolScreenshotAvgOrderByAggregateInput
    _max?: ToolScreenshotMaxOrderByAggregateInput
    _min?: ToolScreenshotMinOrderByAggregateInput
    _sum?: ToolScreenshotSumOrderByAggregateInput
  }

  export type ToolScreenshotScalarWhereWithAggregatesInput = {
    AND?: ToolScreenshotScalarWhereWithAggregatesInput | ToolScreenshotScalarWhereWithAggregatesInput[]
    OR?: ToolScreenshotScalarWhereWithAggregatesInput[]
    NOT?: ToolScreenshotScalarWhereWithAggregatesInput | ToolScreenshotScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ToolScreenshot"> | string
    toolId?: StringWithAggregatesFilter<"ToolScreenshot"> | string
    imageUrl?: StringWithAggregatesFilter<"ToolScreenshot"> | string
    altText?: StringWithAggregatesFilter<"ToolScreenshot"> | string
    caption?: StringNullableWithAggregatesFilter<"ToolScreenshot"> | string | null
    sortOrder?: IntWithAggregatesFilter<"ToolScreenshot"> | number
    createdAt?: DateTimeWithAggregatesFilter<"ToolScreenshot"> | Date | string
  }

  export type NewsArticleWhereInput = {
    AND?: NewsArticleWhereInput | NewsArticleWhereInput[]
    OR?: NewsArticleWhereInput[]
    NOT?: NewsArticleWhereInput | NewsArticleWhereInput[]
    id?: StringFilter<"NewsArticle"> | string
    slug?: StringFilter<"NewsArticle"> | string
    title?: StringFilter<"NewsArticle"> | string
    excerpt?: StringFilter<"NewsArticle"> | string
    body?: StringFilter<"NewsArticle"> | string
    coverImageUrl?: StringNullableFilter<"NewsArticle"> | string | null
    sourceName?: StringFilter<"NewsArticle"> | string
    sourceUrl?: StringNullableFilter<"NewsArticle"> | string | null
    authorName?: StringNullableFilter<"NewsArticle"> | string | null
    topic?: StringFilter<"NewsArticle"> | string
    readingMinutes?: IntFilter<"NewsArticle"> | number
    status?: EnumNewsStatusFilter<"NewsArticle"> | $Enums.NewsStatus
    isFeatured?: BoolFilter<"NewsArticle"> | boolean
    publishedAt?: DateTimeNullableFilter<"NewsArticle"> | Date | string | null
    categoryId?: StringNullableFilter<"NewsArticle"> | string | null
    createdAt?: DateTimeFilter<"NewsArticle"> | Date | string
    updatedAt?: DateTimeFilter<"NewsArticle"> | Date | string
    category?: XOR<CategoryNullableScalarRelationFilter, CategoryWhereInput> | null
    tools?: NewsArticleToolListRelationFilter
  }

  export type NewsArticleOrderByWithRelationInput = {
    id?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    excerpt?: SortOrder
    body?: SortOrder
    coverImageUrl?: SortOrderInput | SortOrder
    sourceName?: SortOrder
    sourceUrl?: SortOrderInput | SortOrder
    authorName?: SortOrderInput | SortOrder
    topic?: SortOrder
    readingMinutes?: SortOrder
    status?: SortOrder
    isFeatured?: SortOrder
    publishedAt?: SortOrderInput | SortOrder
    categoryId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    category?: CategoryOrderByWithRelationInput
    tools?: NewsArticleToolOrderByRelationAggregateInput
  }

  export type NewsArticleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: NewsArticleWhereInput | NewsArticleWhereInput[]
    OR?: NewsArticleWhereInput[]
    NOT?: NewsArticleWhereInput | NewsArticleWhereInput[]
    title?: StringFilter<"NewsArticle"> | string
    excerpt?: StringFilter<"NewsArticle"> | string
    body?: StringFilter<"NewsArticle"> | string
    coverImageUrl?: StringNullableFilter<"NewsArticle"> | string | null
    sourceName?: StringFilter<"NewsArticle"> | string
    sourceUrl?: StringNullableFilter<"NewsArticle"> | string | null
    authorName?: StringNullableFilter<"NewsArticle"> | string | null
    topic?: StringFilter<"NewsArticle"> | string
    readingMinutes?: IntFilter<"NewsArticle"> | number
    status?: EnumNewsStatusFilter<"NewsArticle"> | $Enums.NewsStatus
    isFeatured?: BoolFilter<"NewsArticle"> | boolean
    publishedAt?: DateTimeNullableFilter<"NewsArticle"> | Date | string | null
    categoryId?: StringNullableFilter<"NewsArticle"> | string | null
    createdAt?: DateTimeFilter<"NewsArticle"> | Date | string
    updatedAt?: DateTimeFilter<"NewsArticle"> | Date | string
    category?: XOR<CategoryNullableScalarRelationFilter, CategoryWhereInput> | null
    tools?: NewsArticleToolListRelationFilter
  }, "id" | "slug">

  export type NewsArticleOrderByWithAggregationInput = {
    id?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    excerpt?: SortOrder
    body?: SortOrder
    coverImageUrl?: SortOrderInput | SortOrder
    sourceName?: SortOrder
    sourceUrl?: SortOrderInput | SortOrder
    authorName?: SortOrderInput | SortOrder
    topic?: SortOrder
    readingMinutes?: SortOrder
    status?: SortOrder
    isFeatured?: SortOrder
    publishedAt?: SortOrderInput | SortOrder
    categoryId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: NewsArticleCountOrderByAggregateInput
    _avg?: NewsArticleAvgOrderByAggregateInput
    _max?: NewsArticleMaxOrderByAggregateInput
    _min?: NewsArticleMinOrderByAggregateInput
    _sum?: NewsArticleSumOrderByAggregateInput
  }

  export type NewsArticleScalarWhereWithAggregatesInput = {
    AND?: NewsArticleScalarWhereWithAggregatesInput | NewsArticleScalarWhereWithAggregatesInput[]
    OR?: NewsArticleScalarWhereWithAggregatesInput[]
    NOT?: NewsArticleScalarWhereWithAggregatesInput | NewsArticleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"NewsArticle"> | string
    slug?: StringWithAggregatesFilter<"NewsArticle"> | string
    title?: StringWithAggregatesFilter<"NewsArticle"> | string
    excerpt?: StringWithAggregatesFilter<"NewsArticle"> | string
    body?: StringWithAggregatesFilter<"NewsArticle"> | string
    coverImageUrl?: StringNullableWithAggregatesFilter<"NewsArticle"> | string | null
    sourceName?: StringWithAggregatesFilter<"NewsArticle"> | string
    sourceUrl?: StringNullableWithAggregatesFilter<"NewsArticle"> | string | null
    authorName?: StringNullableWithAggregatesFilter<"NewsArticle"> | string | null
    topic?: StringWithAggregatesFilter<"NewsArticle"> | string
    readingMinutes?: IntWithAggregatesFilter<"NewsArticle"> | number
    status?: EnumNewsStatusWithAggregatesFilter<"NewsArticle"> | $Enums.NewsStatus
    isFeatured?: BoolWithAggregatesFilter<"NewsArticle"> | boolean
    publishedAt?: DateTimeNullableWithAggregatesFilter<"NewsArticle"> | Date | string | null
    categoryId?: StringNullableWithAggregatesFilter<"NewsArticle"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"NewsArticle"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"NewsArticle"> | Date | string
  }

  export type NewsArticleToolWhereInput = {
    AND?: NewsArticleToolWhereInput | NewsArticleToolWhereInput[]
    OR?: NewsArticleToolWhereInput[]
    NOT?: NewsArticleToolWhereInput | NewsArticleToolWhereInput[]
    articleId?: StringFilter<"NewsArticleTool"> | string
    toolId?: StringFilter<"NewsArticleTool"> | string
    createdAt?: DateTimeFilter<"NewsArticleTool"> | Date | string
    article?: XOR<NewsArticleScalarRelationFilter, NewsArticleWhereInput>
    tool?: XOR<ToolScalarRelationFilter, ToolWhereInput>
  }

  export type NewsArticleToolOrderByWithRelationInput = {
    articleId?: SortOrder
    toolId?: SortOrder
    createdAt?: SortOrder
    article?: NewsArticleOrderByWithRelationInput
    tool?: ToolOrderByWithRelationInput
  }

  export type NewsArticleToolWhereUniqueInput = Prisma.AtLeast<{
    articleId_toolId?: NewsArticleToolArticleIdToolIdCompoundUniqueInput
    AND?: NewsArticleToolWhereInput | NewsArticleToolWhereInput[]
    OR?: NewsArticleToolWhereInput[]
    NOT?: NewsArticleToolWhereInput | NewsArticleToolWhereInput[]
    articleId?: StringFilter<"NewsArticleTool"> | string
    toolId?: StringFilter<"NewsArticleTool"> | string
    createdAt?: DateTimeFilter<"NewsArticleTool"> | Date | string
    article?: XOR<NewsArticleScalarRelationFilter, NewsArticleWhereInput>
    tool?: XOR<ToolScalarRelationFilter, ToolWhereInput>
  }, "articleId_toolId">

  export type NewsArticleToolOrderByWithAggregationInput = {
    articleId?: SortOrder
    toolId?: SortOrder
    createdAt?: SortOrder
    _count?: NewsArticleToolCountOrderByAggregateInput
    _max?: NewsArticleToolMaxOrderByAggregateInput
    _min?: NewsArticleToolMinOrderByAggregateInput
  }

  export type NewsArticleToolScalarWhereWithAggregatesInput = {
    AND?: NewsArticleToolScalarWhereWithAggregatesInput | NewsArticleToolScalarWhereWithAggregatesInput[]
    OR?: NewsArticleToolScalarWhereWithAggregatesInput[]
    NOT?: NewsArticleToolScalarWhereWithAggregatesInput | NewsArticleToolScalarWhereWithAggregatesInput[]
    articleId?: StringWithAggregatesFilter<"NewsArticleTool"> | string
    toolId?: StringWithAggregatesFilter<"NewsArticleTool"> | string
    createdAt?: DateTimeWithAggregatesFilter<"NewsArticleTool"> | Date | string
  }

  export type CategoryCreateInput = {
    id?: string
    slug: string
    name: string
    description?: string | null
    accent?: string | null
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    tools?: ToolCategoryCreateNestedManyWithoutCategoryInput
    news?: NewsArticleCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateInput = {
    id?: string
    slug: string
    name: string
    description?: string | null
    accent?: string | null
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    tools?: ToolCategoryUncheckedCreateNestedManyWithoutCategoryInput
    news?: NewsArticleUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    accent?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tools?: ToolCategoryUpdateManyWithoutCategoryNestedInput
    news?: NewsArticleUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    accent?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tools?: ToolCategoryUncheckedUpdateManyWithoutCategoryNestedInput
    news?: NewsArticleUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryCreateManyInput = {
    id?: string
    slug: string
    name: string
    description?: string | null
    accent?: string | null
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CategoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    accent?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    accent?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlatformCreateInput = {
    id?: string
    slug: string
    name: string
    description?: string | null
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    tools?: ToolPlatformCreateNestedManyWithoutPlatformInput
  }

  export type PlatformUncheckedCreateInput = {
    id?: string
    slug: string
    name: string
    description?: string | null
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    tools?: ToolPlatformUncheckedCreateNestedManyWithoutPlatformInput
  }

  export type PlatformUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tools?: ToolPlatformUpdateManyWithoutPlatformNestedInput
  }

  export type PlatformUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tools?: ToolPlatformUncheckedUpdateManyWithoutPlatformNestedInput
  }

  export type PlatformCreateManyInput = {
    id?: string
    slug: string
    name: string
    description?: string | null
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PlatformUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlatformUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ToolCreateInput = {
    id?: string
    slug: string
    name: string
    tagline: string
    description: string
    logoUrl?: string | null
    websiteUrl: string
    docsUrl?: string | null
    companyName: string
    companyUrl?: string | null
    companyLocation?: string | null
    pricingModel: $Enums.PricingModel
    pricingNote?: string | null
    status?: $Enums.ToolStatus
    isFeatured?: boolean
    isVerified?: boolean
    popularityScore?: number
    launchDate?: Date | string | null
    publishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    categories?: ToolCategoryCreateNestedManyWithoutToolInput
    platforms?: ToolPlatformCreateNestedManyWithoutToolInput
    capabilities?: ToolCapabilityCreateNestedManyWithoutToolInput
    useCases?: ToolUseCaseCreateNestedManyWithoutToolInput
    screenshots?: ToolScreenshotCreateNestedManyWithoutToolInput
    news?: NewsArticleToolCreateNestedManyWithoutToolInput
  }

  export type ToolUncheckedCreateInput = {
    id?: string
    slug: string
    name: string
    tagline: string
    description: string
    logoUrl?: string | null
    websiteUrl: string
    docsUrl?: string | null
    companyName: string
    companyUrl?: string | null
    companyLocation?: string | null
    pricingModel: $Enums.PricingModel
    pricingNote?: string | null
    status?: $Enums.ToolStatus
    isFeatured?: boolean
    isVerified?: boolean
    popularityScore?: number
    launchDate?: Date | string | null
    publishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    categories?: ToolCategoryUncheckedCreateNestedManyWithoutToolInput
    platforms?: ToolPlatformUncheckedCreateNestedManyWithoutToolInput
    capabilities?: ToolCapabilityUncheckedCreateNestedManyWithoutToolInput
    useCases?: ToolUseCaseUncheckedCreateNestedManyWithoutToolInput
    screenshots?: ToolScreenshotUncheckedCreateNestedManyWithoutToolInput
    news?: NewsArticleToolUncheckedCreateNestedManyWithoutToolInput
  }

  export type ToolUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    tagline?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    websiteUrl?: StringFieldUpdateOperationsInput | string
    docsUrl?: NullableStringFieldUpdateOperationsInput | string | null
    companyName?: StringFieldUpdateOperationsInput | string
    companyUrl?: NullableStringFieldUpdateOperationsInput | string | null
    companyLocation?: NullableStringFieldUpdateOperationsInput | string | null
    pricingModel?: EnumPricingModelFieldUpdateOperationsInput | $Enums.PricingModel
    pricingNote?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumToolStatusFieldUpdateOperationsInput | $Enums.ToolStatus
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    popularityScore?: IntFieldUpdateOperationsInput | number
    launchDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: ToolCategoryUpdateManyWithoutToolNestedInput
    platforms?: ToolPlatformUpdateManyWithoutToolNestedInput
    capabilities?: ToolCapabilityUpdateManyWithoutToolNestedInput
    useCases?: ToolUseCaseUpdateManyWithoutToolNestedInput
    screenshots?: ToolScreenshotUpdateManyWithoutToolNestedInput
    news?: NewsArticleToolUpdateManyWithoutToolNestedInput
  }

  export type ToolUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    tagline?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    websiteUrl?: StringFieldUpdateOperationsInput | string
    docsUrl?: NullableStringFieldUpdateOperationsInput | string | null
    companyName?: StringFieldUpdateOperationsInput | string
    companyUrl?: NullableStringFieldUpdateOperationsInput | string | null
    companyLocation?: NullableStringFieldUpdateOperationsInput | string | null
    pricingModel?: EnumPricingModelFieldUpdateOperationsInput | $Enums.PricingModel
    pricingNote?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumToolStatusFieldUpdateOperationsInput | $Enums.ToolStatus
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    popularityScore?: IntFieldUpdateOperationsInput | number
    launchDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: ToolCategoryUncheckedUpdateManyWithoutToolNestedInput
    platforms?: ToolPlatformUncheckedUpdateManyWithoutToolNestedInput
    capabilities?: ToolCapabilityUncheckedUpdateManyWithoutToolNestedInput
    useCases?: ToolUseCaseUncheckedUpdateManyWithoutToolNestedInput
    screenshots?: ToolScreenshotUncheckedUpdateManyWithoutToolNestedInput
    news?: NewsArticleToolUncheckedUpdateManyWithoutToolNestedInput
  }

  export type ToolCreateManyInput = {
    id?: string
    slug: string
    name: string
    tagline: string
    description: string
    logoUrl?: string | null
    websiteUrl: string
    docsUrl?: string | null
    companyName: string
    companyUrl?: string | null
    companyLocation?: string | null
    pricingModel: $Enums.PricingModel
    pricingNote?: string | null
    status?: $Enums.ToolStatus
    isFeatured?: boolean
    isVerified?: boolean
    popularityScore?: number
    launchDate?: Date | string | null
    publishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ToolUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    tagline?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    websiteUrl?: StringFieldUpdateOperationsInput | string
    docsUrl?: NullableStringFieldUpdateOperationsInput | string | null
    companyName?: StringFieldUpdateOperationsInput | string
    companyUrl?: NullableStringFieldUpdateOperationsInput | string | null
    companyLocation?: NullableStringFieldUpdateOperationsInput | string | null
    pricingModel?: EnumPricingModelFieldUpdateOperationsInput | $Enums.PricingModel
    pricingNote?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumToolStatusFieldUpdateOperationsInput | $Enums.ToolStatus
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    popularityScore?: IntFieldUpdateOperationsInput | number
    launchDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ToolUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    tagline?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    websiteUrl?: StringFieldUpdateOperationsInput | string
    docsUrl?: NullableStringFieldUpdateOperationsInput | string | null
    companyName?: StringFieldUpdateOperationsInput | string
    companyUrl?: NullableStringFieldUpdateOperationsInput | string | null
    companyLocation?: NullableStringFieldUpdateOperationsInput | string | null
    pricingModel?: EnumPricingModelFieldUpdateOperationsInput | $Enums.PricingModel
    pricingNote?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumToolStatusFieldUpdateOperationsInput | $Enums.ToolStatus
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    popularityScore?: IntFieldUpdateOperationsInput | number
    launchDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ToolCategoryCreateInput = {
    createdAt?: Date | string
    tool: ToolCreateNestedOneWithoutCategoriesInput
    category: CategoryCreateNestedOneWithoutToolsInput
  }

  export type ToolCategoryUncheckedCreateInput = {
    toolId: string
    categoryId: string
    createdAt?: Date | string
  }

  export type ToolCategoryUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tool?: ToolUpdateOneRequiredWithoutCategoriesNestedInput
    category?: CategoryUpdateOneRequiredWithoutToolsNestedInput
  }

  export type ToolCategoryUncheckedUpdateInput = {
    toolId?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ToolCategoryCreateManyInput = {
    toolId: string
    categoryId: string
    createdAt?: Date | string
  }

  export type ToolCategoryUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ToolCategoryUncheckedUpdateManyInput = {
    toolId?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ToolPlatformCreateInput = {
    createdAt?: Date | string
    tool: ToolCreateNestedOneWithoutPlatformsInput
    platform: PlatformCreateNestedOneWithoutToolsInput
  }

  export type ToolPlatformUncheckedCreateInput = {
    toolId: string
    platformId: string
    createdAt?: Date | string
  }

  export type ToolPlatformUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tool?: ToolUpdateOneRequiredWithoutPlatformsNestedInput
    platform?: PlatformUpdateOneRequiredWithoutToolsNestedInput
  }

  export type ToolPlatformUncheckedUpdateInput = {
    toolId?: StringFieldUpdateOperationsInput | string
    platformId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ToolPlatformCreateManyInput = {
    toolId: string
    platformId: string
    createdAt?: Date | string
  }

  export type ToolPlatformUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ToolPlatformUncheckedUpdateManyInput = {
    toolId?: StringFieldUpdateOperationsInput | string
    platformId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ToolCapabilityCreateInput = {
    id?: string
    title: string
    summary?: string | null
    sortOrder?: number
    createdAt?: Date | string
    tool: ToolCreateNestedOneWithoutCapabilitiesInput
  }

  export type ToolCapabilityUncheckedCreateInput = {
    id?: string
    toolId: string
    title: string
    summary?: string | null
    sortOrder?: number
    createdAt?: Date | string
  }

  export type ToolCapabilityUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tool?: ToolUpdateOneRequiredWithoutCapabilitiesNestedInput
  }

  export type ToolCapabilityUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    toolId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ToolCapabilityCreateManyInput = {
    id?: string
    toolId: string
    title: string
    summary?: string | null
    sortOrder?: number
    createdAt?: Date | string
  }

  export type ToolCapabilityUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ToolCapabilityUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    toolId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ToolUseCaseCreateInput = {
    id?: string
    title: string
    summary?: string | null
    sortOrder?: number
    createdAt?: Date | string
    tool: ToolCreateNestedOneWithoutUseCasesInput
  }

  export type ToolUseCaseUncheckedCreateInput = {
    id?: string
    toolId: string
    title: string
    summary?: string | null
    sortOrder?: number
    createdAt?: Date | string
  }

  export type ToolUseCaseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tool?: ToolUpdateOneRequiredWithoutUseCasesNestedInput
  }

  export type ToolUseCaseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    toolId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ToolUseCaseCreateManyInput = {
    id?: string
    toolId: string
    title: string
    summary?: string | null
    sortOrder?: number
    createdAt?: Date | string
  }

  export type ToolUseCaseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ToolUseCaseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    toolId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ToolScreenshotCreateInput = {
    id?: string
    imageUrl: string
    altText: string
    caption?: string | null
    sortOrder?: number
    createdAt?: Date | string
    tool: ToolCreateNestedOneWithoutScreenshotsInput
  }

  export type ToolScreenshotUncheckedCreateInput = {
    id?: string
    toolId: string
    imageUrl: string
    altText: string
    caption?: string | null
    sortOrder?: number
    createdAt?: Date | string
  }

  export type ToolScreenshotUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    altText?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tool?: ToolUpdateOneRequiredWithoutScreenshotsNestedInput
  }

  export type ToolScreenshotUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    toolId?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    altText?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ToolScreenshotCreateManyInput = {
    id?: string
    toolId: string
    imageUrl: string
    altText: string
    caption?: string | null
    sortOrder?: number
    createdAt?: Date | string
  }

  export type ToolScreenshotUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    altText?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ToolScreenshotUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    toolId?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    altText?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NewsArticleCreateInput = {
    id?: string
    slug: string
    title: string
    excerpt: string
    body: string
    coverImageUrl?: string | null
    sourceName: string
    sourceUrl?: string | null
    authorName?: string | null
    topic: string
    readingMinutes?: number
    status?: $Enums.NewsStatus
    isFeatured?: boolean
    publishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    category?: CategoryCreateNestedOneWithoutNewsInput
    tools?: NewsArticleToolCreateNestedManyWithoutArticleInput
  }

  export type NewsArticleUncheckedCreateInput = {
    id?: string
    slug: string
    title: string
    excerpt: string
    body: string
    coverImageUrl?: string | null
    sourceName: string
    sourceUrl?: string | null
    authorName?: string | null
    topic: string
    readingMinutes?: number
    status?: $Enums.NewsStatus
    isFeatured?: boolean
    publishedAt?: Date | string | null
    categoryId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tools?: NewsArticleToolUncheckedCreateNestedManyWithoutArticleInput
  }

  export type NewsArticleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    excerpt?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    coverImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    sourceName?: StringFieldUpdateOperationsInput | string
    sourceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    authorName?: NullableStringFieldUpdateOperationsInput | string | null
    topic?: StringFieldUpdateOperationsInput | string
    readingMinutes?: IntFieldUpdateOperationsInput | number
    status?: EnumNewsStatusFieldUpdateOperationsInput | $Enums.NewsStatus
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneWithoutNewsNestedInput
    tools?: NewsArticleToolUpdateManyWithoutArticleNestedInput
  }

  export type NewsArticleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    excerpt?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    coverImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    sourceName?: StringFieldUpdateOperationsInput | string
    sourceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    authorName?: NullableStringFieldUpdateOperationsInput | string | null
    topic?: StringFieldUpdateOperationsInput | string
    readingMinutes?: IntFieldUpdateOperationsInput | number
    status?: EnumNewsStatusFieldUpdateOperationsInput | $Enums.NewsStatus
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tools?: NewsArticleToolUncheckedUpdateManyWithoutArticleNestedInput
  }

  export type NewsArticleCreateManyInput = {
    id?: string
    slug: string
    title: string
    excerpt: string
    body: string
    coverImageUrl?: string | null
    sourceName: string
    sourceUrl?: string | null
    authorName?: string | null
    topic: string
    readingMinutes?: number
    status?: $Enums.NewsStatus
    isFeatured?: boolean
    publishedAt?: Date | string | null
    categoryId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NewsArticleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    excerpt?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    coverImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    sourceName?: StringFieldUpdateOperationsInput | string
    sourceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    authorName?: NullableStringFieldUpdateOperationsInput | string | null
    topic?: StringFieldUpdateOperationsInput | string
    readingMinutes?: IntFieldUpdateOperationsInput | number
    status?: EnumNewsStatusFieldUpdateOperationsInput | $Enums.NewsStatus
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NewsArticleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    excerpt?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    coverImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    sourceName?: StringFieldUpdateOperationsInput | string
    sourceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    authorName?: NullableStringFieldUpdateOperationsInput | string | null
    topic?: StringFieldUpdateOperationsInput | string
    readingMinutes?: IntFieldUpdateOperationsInput | number
    status?: EnumNewsStatusFieldUpdateOperationsInput | $Enums.NewsStatus
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NewsArticleToolCreateInput = {
    createdAt?: Date | string
    article: NewsArticleCreateNestedOneWithoutToolsInput
    tool: ToolCreateNestedOneWithoutNewsInput
  }

  export type NewsArticleToolUncheckedCreateInput = {
    articleId: string
    toolId: string
    createdAt?: Date | string
  }

  export type NewsArticleToolUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    article?: NewsArticleUpdateOneRequiredWithoutToolsNestedInput
    tool?: ToolUpdateOneRequiredWithoutNewsNestedInput
  }

  export type NewsArticleToolUncheckedUpdateInput = {
    articleId?: StringFieldUpdateOperationsInput | string
    toolId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NewsArticleToolCreateManyInput = {
    articleId: string
    toolId: string
    createdAt?: Date | string
  }

  export type NewsArticleToolUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NewsArticleToolUncheckedUpdateManyInput = {
    articleId?: StringFieldUpdateOperationsInput | string
    toolId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type ToolCategoryListRelationFilter = {
    every?: ToolCategoryWhereInput
    some?: ToolCategoryWhereInput
    none?: ToolCategoryWhereInput
  }

  export type NewsArticleListRelationFilter = {
    every?: NewsArticleWhereInput
    some?: NewsArticleWhereInput
    none?: NewsArticleWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ToolCategoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NewsArticleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CategoryCountOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    name?: SortOrder
    description?: SortOrder
    accent?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategoryAvgOrderByAggregateInput = {
    sortOrder?: SortOrder
  }

  export type CategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    name?: SortOrder
    description?: SortOrder
    accent?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategoryMinOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    name?: SortOrder
    description?: SortOrder
    accent?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategorySumOrderByAggregateInput = {
    sortOrder?: SortOrder
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

  export type ToolPlatformListRelationFilter = {
    every?: ToolPlatformWhereInput
    some?: ToolPlatformWhereInput
    none?: ToolPlatformWhereInput
  }

  export type ToolPlatformOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PlatformCountOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    name?: SortOrder
    description?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PlatformAvgOrderByAggregateInput = {
    sortOrder?: SortOrder
  }

  export type PlatformMaxOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    name?: SortOrder
    description?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PlatformMinOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    name?: SortOrder
    description?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PlatformSumOrderByAggregateInput = {
    sortOrder?: SortOrder
  }

  export type EnumPricingModelFilter<$PrismaModel = never> = {
    equals?: $Enums.PricingModel | EnumPricingModelFieldRefInput<$PrismaModel>
    in?: $Enums.PricingModel[] | ListEnumPricingModelFieldRefInput<$PrismaModel>
    notIn?: $Enums.PricingModel[] | ListEnumPricingModelFieldRefInput<$PrismaModel>
    not?: NestedEnumPricingModelFilter<$PrismaModel> | $Enums.PricingModel
  }

  export type EnumToolStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ToolStatus | EnumToolStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ToolStatus[] | ListEnumToolStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ToolStatus[] | ListEnumToolStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumToolStatusFilter<$PrismaModel> | $Enums.ToolStatus
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
  }

  export type ToolCapabilityListRelationFilter = {
    every?: ToolCapabilityWhereInput
    some?: ToolCapabilityWhereInput
    none?: ToolCapabilityWhereInput
  }

  export type ToolUseCaseListRelationFilter = {
    every?: ToolUseCaseWhereInput
    some?: ToolUseCaseWhereInput
    none?: ToolUseCaseWhereInput
  }

  export type ToolScreenshotListRelationFilter = {
    every?: ToolScreenshotWhereInput
    some?: ToolScreenshotWhereInput
    none?: ToolScreenshotWhereInput
  }

  export type NewsArticleToolListRelationFilter = {
    every?: NewsArticleToolWhereInput
    some?: NewsArticleToolWhereInput
    none?: NewsArticleToolWhereInput
  }

  export type ToolCapabilityOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ToolUseCaseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ToolScreenshotOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NewsArticleToolOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ToolCountOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    name?: SortOrder
    tagline?: SortOrder
    description?: SortOrder
    logoUrl?: SortOrder
    websiteUrl?: SortOrder
    docsUrl?: SortOrder
    companyName?: SortOrder
    companyUrl?: SortOrder
    companyLocation?: SortOrder
    pricingModel?: SortOrder
    pricingNote?: SortOrder
    status?: SortOrder
    isFeatured?: SortOrder
    isVerified?: SortOrder
    popularityScore?: SortOrder
    launchDate?: SortOrder
    publishedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ToolAvgOrderByAggregateInput = {
    popularityScore?: SortOrder
  }

  export type ToolMaxOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    name?: SortOrder
    tagline?: SortOrder
    description?: SortOrder
    logoUrl?: SortOrder
    websiteUrl?: SortOrder
    docsUrl?: SortOrder
    companyName?: SortOrder
    companyUrl?: SortOrder
    companyLocation?: SortOrder
    pricingModel?: SortOrder
    pricingNote?: SortOrder
    status?: SortOrder
    isFeatured?: SortOrder
    isVerified?: SortOrder
    popularityScore?: SortOrder
    launchDate?: SortOrder
    publishedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ToolMinOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    name?: SortOrder
    tagline?: SortOrder
    description?: SortOrder
    logoUrl?: SortOrder
    websiteUrl?: SortOrder
    docsUrl?: SortOrder
    companyName?: SortOrder
    companyUrl?: SortOrder
    companyLocation?: SortOrder
    pricingModel?: SortOrder
    pricingNote?: SortOrder
    status?: SortOrder
    isFeatured?: SortOrder
    isVerified?: SortOrder
    popularityScore?: SortOrder
    launchDate?: SortOrder
    publishedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ToolSumOrderByAggregateInput = {
    popularityScore?: SortOrder
  }

  export type EnumPricingModelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PricingModel | EnumPricingModelFieldRefInput<$PrismaModel>
    in?: $Enums.PricingModel[] | ListEnumPricingModelFieldRefInput<$PrismaModel>
    notIn?: $Enums.PricingModel[] | ListEnumPricingModelFieldRefInput<$PrismaModel>
    not?: NestedEnumPricingModelWithAggregatesFilter<$PrismaModel> | $Enums.PricingModel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPricingModelFilter<$PrismaModel>
    _max?: NestedEnumPricingModelFilter<$PrismaModel>
  }

  export type EnumToolStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ToolStatus | EnumToolStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ToolStatus[] | ListEnumToolStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ToolStatus[] | ListEnumToolStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumToolStatusWithAggregatesFilter<$PrismaModel> | $Enums.ToolStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumToolStatusFilter<$PrismaModel>
    _max?: NestedEnumToolStatusFilter<$PrismaModel>
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
  }

  export type ToolScalarRelationFilter = {
    is?: ToolWhereInput
    isNot?: ToolWhereInput
  }

  export type CategoryScalarRelationFilter = {
    is?: CategoryWhereInput
    isNot?: CategoryWhereInput
  }

  export type ToolCategoryToolIdCategoryIdCompoundUniqueInput = {
    toolId: string
    categoryId: string
  }

  export type ToolCategoryCountOrderByAggregateInput = {
    toolId?: SortOrder
    categoryId?: SortOrder
    createdAt?: SortOrder
  }

  export type ToolCategoryMaxOrderByAggregateInput = {
    toolId?: SortOrder
    categoryId?: SortOrder
    createdAt?: SortOrder
  }

  export type ToolCategoryMinOrderByAggregateInput = {
    toolId?: SortOrder
    categoryId?: SortOrder
    createdAt?: SortOrder
  }

  export type PlatformScalarRelationFilter = {
    is?: PlatformWhereInput
    isNot?: PlatformWhereInput
  }

  export type ToolPlatformToolIdPlatformIdCompoundUniqueInput = {
    toolId: string
    platformId: string
  }

  export type ToolPlatformCountOrderByAggregateInput = {
    toolId?: SortOrder
    platformId?: SortOrder
    createdAt?: SortOrder
  }

  export type ToolPlatformMaxOrderByAggregateInput = {
    toolId?: SortOrder
    platformId?: SortOrder
    createdAt?: SortOrder
  }

  export type ToolPlatformMinOrderByAggregateInput = {
    toolId?: SortOrder
    platformId?: SortOrder
    createdAt?: SortOrder
  }

  export type ToolCapabilityCountOrderByAggregateInput = {
    id?: SortOrder
    toolId?: SortOrder
    title?: SortOrder
    summary?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
  }

  export type ToolCapabilityAvgOrderByAggregateInput = {
    sortOrder?: SortOrder
  }

  export type ToolCapabilityMaxOrderByAggregateInput = {
    id?: SortOrder
    toolId?: SortOrder
    title?: SortOrder
    summary?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
  }

  export type ToolCapabilityMinOrderByAggregateInput = {
    id?: SortOrder
    toolId?: SortOrder
    title?: SortOrder
    summary?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
  }

  export type ToolCapabilitySumOrderByAggregateInput = {
    sortOrder?: SortOrder
  }

  export type ToolUseCaseCountOrderByAggregateInput = {
    id?: SortOrder
    toolId?: SortOrder
    title?: SortOrder
    summary?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
  }

  export type ToolUseCaseAvgOrderByAggregateInput = {
    sortOrder?: SortOrder
  }

  export type ToolUseCaseMaxOrderByAggregateInput = {
    id?: SortOrder
    toolId?: SortOrder
    title?: SortOrder
    summary?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
  }

  export type ToolUseCaseMinOrderByAggregateInput = {
    id?: SortOrder
    toolId?: SortOrder
    title?: SortOrder
    summary?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
  }

  export type ToolUseCaseSumOrderByAggregateInput = {
    sortOrder?: SortOrder
  }

  export type ToolScreenshotCountOrderByAggregateInput = {
    id?: SortOrder
    toolId?: SortOrder
    imageUrl?: SortOrder
    altText?: SortOrder
    caption?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
  }

  export type ToolScreenshotAvgOrderByAggregateInput = {
    sortOrder?: SortOrder
  }

  export type ToolScreenshotMaxOrderByAggregateInput = {
    id?: SortOrder
    toolId?: SortOrder
    imageUrl?: SortOrder
    altText?: SortOrder
    caption?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
  }

  export type ToolScreenshotMinOrderByAggregateInput = {
    id?: SortOrder
    toolId?: SortOrder
    imageUrl?: SortOrder
    altText?: SortOrder
    caption?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
  }

  export type ToolScreenshotSumOrderByAggregateInput = {
    sortOrder?: SortOrder
  }

  export type EnumNewsStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.NewsStatus | EnumNewsStatusFieldRefInput<$PrismaModel>
    in?: $Enums.NewsStatus[] | ListEnumNewsStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.NewsStatus[] | ListEnumNewsStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumNewsStatusFilter<$PrismaModel> | $Enums.NewsStatus
  }

  export type CategoryNullableScalarRelationFilter = {
    is?: CategoryWhereInput | null
    isNot?: CategoryWhereInput | null
  }

  export type NewsArticleCountOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    excerpt?: SortOrder
    body?: SortOrder
    coverImageUrl?: SortOrder
    sourceName?: SortOrder
    sourceUrl?: SortOrder
    authorName?: SortOrder
    topic?: SortOrder
    readingMinutes?: SortOrder
    status?: SortOrder
    isFeatured?: SortOrder
    publishedAt?: SortOrder
    categoryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NewsArticleAvgOrderByAggregateInput = {
    readingMinutes?: SortOrder
  }

  export type NewsArticleMaxOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    excerpt?: SortOrder
    body?: SortOrder
    coverImageUrl?: SortOrder
    sourceName?: SortOrder
    sourceUrl?: SortOrder
    authorName?: SortOrder
    topic?: SortOrder
    readingMinutes?: SortOrder
    status?: SortOrder
    isFeatured?: SortOrder
    publishedAt?: SortOrder
    categoryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NewsArticleMinOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    excerpt?: SortOrder
    body?: SortOrder
    coverImageUrl?: SortOrder
    sourceName?: SortOrder
    sourceUrl?: SortOrder
    authorName?: SortOrder
    topic?: SortOrder
    readingMinutes?: SortOrder
    status?: SortOrder
    isFeatured?: SortOrder
    publishedAt?: SortOrder
    categoryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NewsArticleSumOrderByAggregateInput = {
    readingMinutes?: SortOrder
  }

  export type EnumNewsStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.NewsStatus | EnumNewsStatusFieldRefInput<$PrismaModel>
    in?: $Enums.NewsStatus[] | ListEnumNewsStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.NewsStatus[] | ListEnumNewsStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumNewsStatusWithAggregatesFilter<$PrismaModel> | $Enums.NewsStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumNewsStatusFilter<$PrismaModel>
    _max?: NestedEnumNewsStatusFilter<$PrismaModel>
  }

  export type NewsArticleScalarRelationFilter = {
    is?: NewsArticleWhereInput
    isNot?: NewsArticleWhereInput
  }

  export type NewsArticleToolArticleIdToolIdCompoundUniqueInput = {
    articleId: string
    toolId: string
  }

  export type NewsArticleToolCountOrderByAggregateInput = {
    articleId?: SortOrder
    toolId?: SortOrder
    createdAt?: SortOrder
  }

  export type NewsArticleToolMaxOrderByAggregateInput = {
    articleId?: SortOrder
    toolId?: SortOrder
    createdAt?: SortOrder
  }

  export type NewsArticleToolMinOrderByAggregateInput = {
    articleId?: SortOrder
    toolId?: SortOrder
    createdAt?: SortOrder
  }

  export type ToolCategoryCreateNestedManyWithoutCategoryInput = {
    create?: XOR<ToolCategoryCreateWithoutCategoryInput, ToolCategoryUncheckedCreateWithoutCategoryInput> | ToolCategoryCreateWithoutCategoryInput[] | ToolCategoryUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ToolCategoryCreateOrConnectWithoutCategoryInput | ToolCategoryCreateOrConnectWithoutCategoryInput[]
    createMany?: ToolCategoryCreateManyCategoryInputEnvelope
    connect?: ToolCategoryWhereUniqueInput | ToolCategoryWhereUniqueInput[]
  }

  export type NewsArticleCreateNestedManyWithoutCategoryInput = {
    create?: XOR<NewsArticleCreateWithoutCategoryInput, NewsArticleUncheckedCreateWithoutCategoryInput> | NewsArticleCreateWithoutCategoryInput[] | NewsArticleUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: NewsArticleCreateOrConnectWithoutCategoryInput | NewsArticleCreateOrConnectWithoutCategoryInput[]
    createMany?: NewsArticleCreateManyCategoryInputEnvelope
    connect?: NewsArticleWhereUniqueInput | NewsArticleWhereUniqueInput[]
  }

  export type ToolCategoryUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<ToolCategoryCreateWithoutCategoryInput, ToolCategoryUncheckedCreateWithoutCategoryInput> | ToolCategoryCreateWithoutCategoryInput[] | ToolCategoryUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ToolCategoryCreateOrConnectWithoutCategoryInput | ToolCategoryCreateOrConnectWithoutCategoryInput[]
    createMany?: ToolCategoryCreateManyCategoryInputEnvelope
    connect?: ToolCategoryWhereUniqueInput | ToolCategoryWhereUniqueInput[]
  }

  export type NewsArticleUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<NewsArticleCreateWithoutCategoryInput, NewsArticleUncheckedCreateWithoutCategoryInput> | NewsArticleCreateWithoutCategoryInput[] | NewsArticleUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: NewsArticleCreateOrConnectWithoutCategoryInput | NewsArticleCreateOrConnectWithoutCategoryInput[]
    createMany?: NewsArticleCreateManyCategoryInputEnvelope
    connect?: NewsArticleWhereUniqueInput | NewsArticleWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ToolCategoryUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<ToolCategoryCreateWithoutCategoryInput, ToolCategoryUncheckedCreateWithoutCategoryInput> | ToolCategoryCreateWithoutCategoryInput[] | ToolCategoryUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ToolCategoryCreateOrConnectWithoutCategoryInput | ToolCategoryCreateOrConnectWithoutCategoryInput[]
    upsert?: ToolCategoryUpsertWithWhereUniqueWithoutCategoryInput | ToolCategoryUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: ToolCategoryCreateManyCategoryInputEnvelope
    set?: ToolCategoryWhereUniqueInput | ToolCategoryWhereUniqueInput[]
    disconnect?: ToolCategoryWhereUniqueInput | ToolCategoryWhereUniqueInput[]
    delete?: ToolCategoryWhereUniqueInput | ToolCategoryWhereUniqueInput[]
    connect?: ToolCategoryWhereUniqueInput | ToolCategoryWhereUniqueInput[]
    update?: ToolCategoryUpdateWithWhereUniqueWithoutCategoryInput | ToolCategoryUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: ToolCategoryUpdateManyWithWhereWithoutCategoryInput | ToolCategoryUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: ToolCategoryScalarWhereInput | ToolCategoryScalarWhereInput[]
  }

  export type NewsArticleUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<NewsArticleCreateWithoutCategoryInput, NewsArticleUncheckedCreateWithoutCategoryInput> | NewsArticleCreateWithoutCategoryInput[] | NewsArticleUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: NewsArticleCreateOrConnectWithoutCategoryInput | NewsArticleCreateOrConnectWithoutCategoryInput[]
    upsert?: NewsArticleUpsertWithWhereUniqueWithoutCategoryInput | NewsArticleUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: NewsArticleCreateManyCategoryInputEnvelope
    set?: NewsArticleWhereUniqueInput | NewsArticleWhereUniqueInput[]
    disconnect?: NewsArticleWhereUniqueInput | NewsArticleWhereUniqueInput[]
    delete?: NewsArticleWhereUniqueInput | NewsArticleWhereUniqueInput[]
    connect?: NewsArticleWhereUniqueInput | NewsArticleWhereUniqueInput[]
    update?: NewsArticleUpdateWithWhereUniqueWithoutCategoryInput | NewsArticleUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: NewsArticleUpdateManyWithWhereWithoutCategoryInput | NewsArticleUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: NewsArticleScalarWhereInput | NewsArticleScalarWhereInput[]
  }

  export type ToolCategoryUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<ToolCategoryCreateWithoutCategoryInput, ToolCategoryUncheckedCreateWithoutCategoryInput> | ToolCategoryCreateWithoutCategoryInput[] | ToolCategoryUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ToolCategoryCreateOrConnectWithoutCategoryInput | ToolCategoryCreateOrConnectWithoutCategoryInput[]
    upsert?: ToolCategoryUpsertWithWhereUniqueWithoutCategoryInput | ToolCategoryUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: ToolCategoryCreateManyCategoryInputEnvelope
    set?: ToolCategoryWhereUniqueInput | ToolCategoryWhereUniqueInput[]
    disconnect?: ToolCategoryWhereUniqueInput | ToolCategoryWhereUniqueInput[]
    delete?: ToolCategoryWhereUniqueInput | ToolCategoryWhereUniqueInput[]
    connect?: ToolCategoryWhereUniqueInput | ToolCategoryWhereUniqueInput[]
    update?: ToolCategoryUpdateWithWhereUniqueWithoutCategoryInput | ToolCategoryUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: ToolCategoryUpdateManyWithWhereWithoutCategoryInput | ToolCategoryUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: ToolCategoryScalarWhereInput | ToolCategoryScalarWhereInput[]
  }

  export type NewsArticleUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<NewsArticleCreateWithoutCategoryInput, NewsArticleUncheckedCreateWithoutCategoryInput> | NewsArticleCreateWithoutCategoryInput[] | NewsArticleUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: NewsArticleCreateOrConnectWithoutCategoryInput | NewsArticleCreateOrConnectWithoutCategoryInput[]
    upsert?: NewsArticleUpsertWithWhereUniqueWithoutCategoryInput | NewsArticleUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: NewsArticleCreateManyCategoryInputEnvelope
    set?: NewsArticleWhereUniqueInput | NewsArticleWhereUniqueInput[]
    disconnect?: NewsArticleWhereUniqueInput | NewsArticleWhereUniqueInput[]
    delete?: NewsArticleWhereUniqueInput | NewsArticleWhereUniqueInput[]
    connect?: NewsArticleWhereUniqueInput | NewsArticleWhereUniqueInput[]
    update?: NewsArticleUpdateWithWhereUniqueWithoutCategoryInput | NewsArticleUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: NewsArticleUpdateManyWithWhereWithoutCategoryInput | NewsArticleUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: NewsArticleScalarWhereInput | NewsArticleScalarWhereInput[]
  }

  export type ToolPlatformCreateNestedManyWithoutPlatformInput = {
    create?: XOR<ToolPlatformCreateWithoutPlatformInput, ToolPlatformUncheckedCreateWithoutPlatformInput> | ToolPlatformCreateWithoutPlatformInput[] | ToolPlatformUncheckedCreateWithoutPlatformInput[]
    connectOrCreate?: ToolPlatformCreateOrConnectWithoutPlatformInput | ToolPlatformCreateOrConnectWithoutPlatformInput[]
    createMany?: ToolPlatformCreateManyPlatformInputEnvelope
    connect?: ToolPlatformWhereUniqueInput | ToolPlatformWhereUniqueInput[]
  }

  export type ToolPlatformUncheckedCreateNestedManyWithoutPlatformInput = {
    create?: XOR<ToolPlatformCreateWithoutPlatformInput, ToolPlatformUncheckedCreateWithoutPlatformInput> | ToolPlatformCreateWithoutPlatformInput[] | ToolPlatformUncheckedCreateWithoutPlatformInput[]
    connectOrCreate?: ToolPlatformCreateOrConnectWithoutPlatformInput | ToolPlatformCreateOrConnectWithoutPlatformInput[]
    createMany?: ToolPlatformCreateManyPlatformInputEnvelope
    connect?: ToolPlatformWhereUniqueInput | ToolPlatformWhereUniqueInput[]
  }

  export type ToolPlatformUpdateManyWithoutPlatformNestedInput = {
    create?: XOR<ToolPlatformCreateWithoutPlatformInput, ToolPlatformUncheckedCreateWithoutPlatformInput> | ToolPlatformCreateWithoutPlatformInput[] | ToolPlatformUncheckedCreateWithoutPlatformInput[]
    connectOrCreate?: ToolPlatformCreateOrConnectWithoutPlatformInput | ToolPlatformCreateOrConnectWithoutPlatformInput[]
    upsert?: ToolPlatformUpsertWithWhereUniqueWithoutPlatformInput | ToolPlatformUpsertWithWhereUniqueWithoutPlatformInput[]
    createMany?: ToolPlatformCreateManyPlatformInputEnvelope
    set?: ToolPlatformWhereUniqueInput | ToolPlatformWhereUniqueInput[]
    disconnect?: ToolPlatformWhereUniqueInput | ToolPlatformWhereUniqueInput[]
    delete?: ToolPlatformWhereUniqueInput | ToolPlatformWhereUniqueInput[]
    connect?: ToolPlatformWhereUniqueInput | ToolPlatformWhereUniqueInput[]
    update?: ToolPlatformUpdateWithWhereUniqueWithoutPlatformInput | ToolPlatformUpdateWithWhereUniqueWithoutPlatformInput[]
    updateMany?: ToolPlatformUpdateManyWithWhereWithoutPlatformInput | ToolPlatformUpdateManyWithWhereWithoutPlatformInput[]
    deleteMany?: ToolPlatformScalarWhereInput | ToolPlatformScalarWhereInput[]
  }

  export type ToolPlatformUncheckedUpdateManyWithoutPlatformNestedInput = {
    create?: XOR<ToolPlatformCreateWithoutPlatformInput, ToolPlatformUncheckedCreateWithoutPlatformInput> | ToolPlatformCreateWithoutPlatformInput[] | ToolPlatformUncheckedCreateWithoutPlatformInput[]
    connectOrCreate?: ToolPlatformCreateOrConnectWithoutPlatformInput | ToolPlatformCreateOrConnectWithoutPlatformInput[]
    upsert?: ToolPlatformUpsertWithWhereUniqueWithoutPlatformInput | ToolPlatformUpsertWithWhereUniqueWithoutPlatformInput[]
    createMany?: ToolPlatformCreateManyPlatformInputEnvelope
    set?: ToolPlatformWhereUniqueInput | ToolPlatformWhereUniqueInput[]
    disconnect?: ToolPlatformWhereUniqueInput | ToolPlatformWhereUniqueInput[]
    delete?: ToolPlatformWhereUniqueInput | ToolPlatformWhereUniqueInput[]
    connect?: ToolPlatformWhereUniqueInput | ToolPlatformWhereUniqueInput[]
    update?: ToolPlatformUpdateWithWhereUniqueWithoutPlatformInput | ToolPlatformUpdateWithWhereUniqueWithoutPlatformInput[]
    updateMany?: ToolPlatformUpdateManyWithWhereWithoutPlatformInput | ToolPlatformUpdateManyWithWhereWithoutPlatformInput[]
    deleteMany?: ToolPlatformScalarWhereInput | ToolPlatformScalarWhereInput[]
  }

  export type ToolCategoryCreateNestedManyWithoutToolInput = {
    create?: XOR<ToolCategoryCreateWithoutToolInput, ToolCategoryUncheckedCreateWithoutToolInput> | ToolCategoryCreateWithoutToolInput[] | ToolCategoryUncheckedCreateWithoutToolInput[]
    connectOrCreate?: ToolCategoryCreateOrConnectWithoutToolInput | ToolCategoryCreateOrConnectWithoutToolInput[]
    createMany?: ToolCategoryCreateManyToolInputEnvelope
    connect?: ToolCategoryWhereUniqueInput | ToolCategoryWhereUniqueInput[]
  }

  export type ToolPlatformCreateNestedManyWithoutToolInput = {
    create?: XOR<ToolPlatformCreateWithoutToolInput, ToolPlatformUncheckedCreateWithoutToolInput> | ToolPlatformCreateWithoutToolInput[] | ToolPlatformUncheckedCreateWithoutToolInput[]
    connectOrCreate?: ToolPlatformCreateOrConnectWithoutToolInput | ToolPlatformCreateOrConnectWithoutToolInput[]
    createMany?: ToolPlatformCreateManyToolInputEnvelope
    connect?: ToolPlatformWhereUniqueInput | ToolPlatformWhereUniqueInput[]
  }

  export type ToolCapabilityCreateNestedManyWithoutToolInput = {
    create?: XOR<ToolCapabilityCreateWithoutToolInput, ToolCapabilityUncheckedCreateWithoutToolInput> | ToolCapabilityCreateWithoutToolInput[] | ToolCapabilityUncheckedCreateWithoutToolInput[]
    connectOrCreate?: ToolCapabilityCreateOrConnectWithoutToolInput | ToolCapabilityCreateOrConnectWithoutToolInput[]
    createMany?: ToolCapabilityCreateManyToolInputEnvelope
    connect?: ToolCapabilityWhereUniqueInput | ToolCapabilityWhereUniqueInput[]
  }

  export type ToolUseCaseCreateNestedManyWithoutToolInput = {
    create?: XOR<ToolUseCaseCreateWithoutToolInput, ToolUseCaseUncheckedCreateWithoutToolInput> | ToolUseCaseCreateWithoutToolInput[] | ToolUseCaseUncheckedCreateWithoutToolInput[]
    connectOrCreate?: ToolUseCaseCreateOrConnectWithoutToolInput | ToolUseCaseCreateOrConnectWithoutToolInput[]
    createMany?: ToolUseCaseCreateManyToolInputEnvelope
    connect?: ToolUseCaseWhereUniqueInput | ToolUseCaseWhereUniqueInput[]
  }

  export type ToolScreenshotCreateNestedManyWithoutToolInput = {
    create?: XOR<ToolScreenshotCreateWithoutToolInput, ToolScreenshotUncheckedCreateWithoutToolInput> | ToolScreenshotCreateWithoutToolInput[] | ToolScreenshotUncheckedCreateWithoutToolInput[]
    connectOrCreate?: ToolScreenshotCreateOrConnectWithoutToolInput | ToolScreenshotCreateOrConnectWithoutToolInput[]
    createMany?: ToolScreenshotCreateManyToolInputEnvelope
    connect?: ToolScreenshotWhereUniqueInput | ToolScreenshotWhereUniqueInput[]
  }

  export type NewsArticleToolCreateNestedManyWithoutToolInput = {
    create?: XOR<NewsArticleToolCreateWithoutToolInput, NewsArticleToolUncheckedCreateWithoutToolInput> | NewsArticleToolCreateWithoutToolInput[] | NewsArticleToolUncheckedCreateWithoutToolInput[]
    connectOrCreate?: NewsArticleToolCreateOrConnectWithoutToolInput | NewsArticleToolCreateOrConnectWithoutToolInput[]
    createMany?: NewsArticleToolCreateManyToolInputEnvelope
    connect?: NewsArticleToolWhereUniqueInput | NewsArticleToolWhereUniqueInput[]
  }

  export type ToolCategoryUncheckedCreateNestedManyWithoutToolInput = {
    create?: XOR<ToolCategoryCreateWithoutToolInput, ToolCategoryUncheckedCreateWithoutToolInput> | ToolCategoryCreateWithoutToolInput[] | ToolCategoryUncheckedCreateWithoutToolInput[]
    connectOrCreate?: ToolCategoryCreateOrConnectWithoutToolInput | ToolCategoryCreateOrConnectWithoutToolInput[]
    createMany?: ToolCategoryCreateManyToolInputEnvelope
    connect?: ToolCategoryWhereUniqueInput | ToolCategoryWhereUniqueInput[]
  }

  export type ToolPlatformUncheckedCreateNestedManyWithoutToolInput = {
    create?: XOR<ToolPlatformCreateWithoutToolInput, ToolPlatformUncheckedCreateWithoutToolInput> | ToolPlatformCreateWithoutToolInput[] | ToolPlatformUncheckedCreateWithoutToolInput[]
    connectOrCreate?: ToolPlatformCreateOrConnectWithoutToolInput | ToolPlatformCreateOrConnectWithoutToolInput[]
    createMany?: ToolPlatformCreateManyToolInputEnvelope
    connect?: ToolPlatformWhereUniqueInput | ToolPlatformWhereUniqueInput[]
  }

  export type ToolCapabilityUncheckedCreateNestedManyWithoutToolInput = {
    create?: XOR<ToolCapabilityCreateWithoutToolInput, ToolCapabilityUncheckedCreateWithoutToolInput> | ToolCapabilityCreateWithoutToolInput[] | ToolCapabilityUncheckedCreateWithoutToolInput[]
    connectOrCreate?: ToolCapabilityCreateOrConnectWithoutToolInput | ToolCapabilityCreateOrConnectWithoutToolInput[]
    createMany?: ToolCapabilityCreateManyToolInputEnvelope
    connect?: ToolCapabilityWhereUniqueInput | ToolCapabilityWhereUniqueInput[]
  }

  export type ToolUseCaseUncheckedCreateNestedManyWithoutToolInput = {
    create?: XOR<ToolUseCaseCreateWithoutToolInput, ToolUseCaseUncheckedCreateWithoutToolInput> | ToolUseCaseCreateWithoutToolInput[] | ToolUseCaseUncheckedCreateWithoutToolInput[]
    connectOrCreate?: ToolUseCaseCreateOrConnectWithoutToolInput | ToolUseCaseCreateOrConnectWithoutToolInput[]
    createMany?: ToolUseCaseCreateManyToolInputEnvelope
    connect?: ToolUseCaseWhereUniqueInput | ToolUseCaseWhereUniqueInput[]
  }

  export type ToolScreenshotUncheckedCreateNestedManyWithoutToolInput = {
    create?: XOR<ToolScreenshotCreateWithoutToolInput, ToolScreenshotUncheckedCreateWithoutToolInput> | ToolScreenshotCreateWithoutToolInput[] | ToolScreenshotUncheckedCreateWithoutToolInput[]
    connectOrCreate?: ToolScreenshotCreateOrConnectWithoutToolInput | ToolScreenshotCreateOrConnectWithoutToolInput[]
    createMany?: ToolScreenshotCreateManyToolInputEnvelope
    connect?: ToolScreenshotWhereUniqueInput | ToolScreenshotWhereUniqueInput[]
  }

  export type NewsArticleToolUncheckedCreateNestedManyWithoutToolInput = {
    create?: XOR<NewsArticleToolCreateWithoutToolInput, NewsArticleToolUncheckedCreateWithoutToolInput> | NewsArticleToolCreateWithoutToolInput[] | NewsArticleToolUncheckedCreateWithoutToolInput[]
    connectOrCreate?: NewsArticleToolCreateOrConnectWithoutToolInput | NewsArticleToolCreateOrConnectWithoutToolInput[]
    createMany?: NewsArticleToolCreateManyToolInputEnvelope
    connect?: NewsArticleToolWhereUniqueInput | NewsArticleToolWhereUniqueInput[]
  }

  export type EnumPricingModelFieldUpdateOperationsInput = {
    set?: $Enums.PricingModel
  }

  export type EnumToolStatusFieldUpdateOperationsInput = {
    set?: $Enums.ToolStatus
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type ToolCategoryUpdateManyWithoutToolNestedInput = {
    create?: XOR<ToolCategoryCreateWithoutToolInput, ToolCategoryUncheckedCreateWithoutToolInput> | ToolCategoryCreateWithoutToolInput[] | ToolCategoryUncheckedCreateWithoutToolInput[]
    connectOrCreate?: ToolCategoryCreateOrConnectWithoutToolInput | ToolCategoryCreateOrConnectWithoutToolInput[]
    upsert?: ToolCategoryUpsertWithWhereUniqueWithoutToolInput | ToolCategoryUpsertWithWhereUniqueWithoutToolInput[]
    createMany?: ToolCategoryCreateManyToolInputEnvelope
    set?: ToolCategoryWhereUniqueInput | ToolCategoryWhereUniqueInput[]
    disconnect?: ToolCategoryWhereUniqueInput | ToolCategoryWhereUniqueInput[]
    delete?: ToolCategoryWhereUniqueInput | ToolCategoryWhereUniqueInput[]
    connect?: ToolCategoryWhereUniqueInput | ToolCategoryWhereUniqueInput[]
    update?: ToolCategoryUpdateWithWhereUniqueWithoutToolInput | ToolCategoryUpdateWithWhereUniqueWithoutToolInput[]
    updateMany?: ToolCategoryUpdateManyWithWhereWithoutToolInput | ToolCategoryUpdateManyWithWhereWithoutToolInput[]
    deleteMany?: ToolCategoryScalarWhereInput | ToolCategoryScalarWhereInput[]
  }

  export type ToolPlatformUpdateManyWithoutToolNestedInput = {
    create?: XOR<ToolPlatformCreateWithoutToolInput, ToolPlatformUncheckedCreateWithoutToolInput> | ToolPlatformCreateWithoutToolInput[] | ToolPlatformUncheckedCreateWithoutToolInput[]
    connectOrCreate?: ToolPlatformCreateOrConnectWithoutToolInput | ToolPlatformCreateOrConnectWithoutToolInput[]
    upsert?: ToolPlatformUpsertWithWhereUniqueWithoutToolInput | ToolPlatformUpsertWithWhereUniqueWithoutToolInput[]
    createMany?: ToolPlatformCreateManyToolInputEnvelope
    set?: ToolPlatformWhereUniqueInput | ToolPlatformWhereUniqueInput[]
    disconnect?: ToolPlatformWhereUniqueInput | ToolPlatformWhereUniqueInput[]
    delete?: ToolPlatformWhereUniqueInput | ToolPlatformWhereUniqueInput[]
    connect?: ToolPlatformWhereUniqueInput | ToolPlatformWhereUniqueInput[]
    update?: ToolPlatformUpdateWithWhereUniqueWithoutToolInput | ToolPlatformUpdateWithWhereUniqueWithoutToolInput[]
    updateMany?: ToolPlatformUpdateManyWithWhereWithoutToolInput | ToolPlatformUpdateManyWithWhereWithoutToolInput[]
    deleteMany?: ToolPlatformScalarWhereInput | ToolPlatformScalarWhereInput[]
  }

  export type ToolCapabilityUpdateManyWithoutToolNestedInput = {
    create?: XOR<ToolCapabilityCreateWithoutToolInput, ToolCapabilityUncheckedCreateWithoutToolInput> | ToolCapabilityCreateWithoutToolInput[] | ToolCapabilityUncheckedCreateWithoutToolInput[]
    connectOrCreate?: ToolCapabilityCreateOrConnectWithoutToolInput | ToolCapabilityCreateOrConnectWithoutToolInput[]
    upsert?: ToolCapabilityUpsertWithWhereUniqueWithoutToolInput | ToolCapabilityUpsertWithWhereUniqueWithoutToolInput[]
    createMany?: ToolCapabilityCreateManyToolInputEnvelope
    set?: ToolCapabilityWhereUniqueInput | ToolCapabilityWhereUniqueInput[]
    disconnect?: ToolCapabilityWhereUniqueInput | ToolCapabilityWhereUniqueInput[]
    delete?: ToolCapabilityWhereUniqueInput | ToolCapabilityWhereUniqueInput[]
    connect?: ToolCapabilityWhereUniqueInput | ToolCapabilityWhereUniqueInput[]
    update?: ToolCapabilityUpdateWithWhereUniqueWithoutToolInput | ToolCapabilityUpdateWithWhereUniqueWithoutToolInput[]
    updateMany?: ToolCapabilityUpdateManyWithWhereWithoutToolInput | ToolCapabilityUpdateManyWithWhereWithoutToolInput[]
    deleteMany?: ToolCapabilityScalarWhereInput | ToolCapabilityScalarWhereInput[]
  }

  export type ToolUseCaseUpdateManyWithoutToolNestedInput = {
    create?: XOR<ToolUseCaseCreateWithoutToolInput, ToolUseCaseUncheckedCreateWithoutToolInput> | ToolUseCaseCreateWithoutToolInput[] | ToolUseCaseUncheckedCreateWithoutToolInput[]
    connectOrCreate?: ToolUseCaseCreateOrConnectWithoutToolInput | ToolUseCaseCreateOrConnectWithoutToolInput[]
    upsert?: ToolUseCaseUpsertWithWhereUniqueWithoutToolInput | ToolUseCaseUpsertWithWhereUniqueWithoutToolInput[]
    createMany?: ToolUseCaseCreateManyToolInputEnvelope
    set?: ToolUseCaseWhereUniqueInput | ToolUseCaseWhereUniqueInput[]
    disconnect?: ToolUseCaseWhereUniqueInput | ToolUseCaseWhereUniqueInput[]
    delete?: ToolUseCaseWhereUniqueInput | ToolUseCaseWhereUniqueInput[]
    connect?: ToolUseCaseWhereUniqueInput | ToolUseCaseWhereUniqueInput[]
    update?: ToolUseCaseUpdateWithWhereUniqueWithoutToolInput | ToolUseCaseUpdateWithWhereUniqueWithoutToolInput[]
    updateMany?: ToolUseCaseUpdateManyWithWhereWithoutToolInput | ToolUseCaseUpdateManyWithWhereWithoutToolInput[]
    deleteMany?: ToolUseCaseScalarWhereInput | ToolUseCaseScalarWhereInput[]
  }

  export type ToolScreenshotUpdateManyWithoutToolNestedInput = {
    create?: XOR<ToolScreenshotCreateWithoutToolInput, ToolScreenshotUncheckedCreateWithoutToolInput> | ToolScreenshotCreateWithoutToolInput[] | ToolScreenshotUncheckedCreateWithoutToolInput[]
    connectOrCreate?: ToolScreenshotCreateOrConnectWithoutToolInput | ToolScreenshotCreateOrConnectWithoutToolInput[]
    upsert?: ToolScreenshotUpsertWithWhereUniqueWithoutToolInput | ToolScreenshotUpsertWithWhereUniqueWithoutToolInput[]
    createMany?: ToolScreenshotCreateManyToolInputEnvelope
    set?: ToolScreenshotWhereUniqueInput | ToolScreenshotWhereUniqueInput[]
    disconnect?: ToolScreenshotWhereUniqueInput | ToolScreenshotWhereUniqueInput[]
    delete?: ToolScreenshotWhereUniqueInput | ToolScreenshotWhereUniqueInput[]
    connect?: ToolScreenshotWhereUniqueInput | ToolScreenshotWhereUniqueInput[]
    update?: ToolScreenshotUpdateWithWhereUniqueWithoutToolInput | ToolScreenshotUpdateWithWhereUniqueWithoutToolInput[]
    updateMany?: ToolScreenshotUpdateManyWithWhereWithoutToolInput | ToolScreenshotUpdateManyWithWhereWithoutToolInput[]
    deleteMany?: ToolScreenshotScalarWhereInput | ToolScreenshotScalarWhereInput[]
  }

  export type NewsArticleToolUpdateManyWithoutToolNestedInput = {
    create?: XOR<NewsArticleToolCreateWithoutToolInput, NewsArticleToolUncheckedCreateWithoutToolInput> | NewsArticleToolCreateWithoutToolInput[] | NewsArticleToolUncheckedCreateWithoutToolInput[]
    connectOrCreate?: NewsArticleToolCreateOrConnectWithoutToolInput | NewsArticleToolCreateOrConnectWithoutToolInput[]
    upsert?: NewsArticleToolUpsertWithWhereUniqueWithoutToolInput | NewsArticleToolUpsertWithWhereUniqueWithoutToolInput[]
    createMany?: NewsArticleToolCreateManyToolInputEnvelope
    set?: NewsArticleToolWhereUniqueInput | NewsArticleToolWhereUniqueInput[]
    disconnect?: NewsArticleToolWhereUniqueInput | NewsArticleToolWhereUniqueInput[]
    delete?: NewsArticleToolWhereUniqueInput | NewsArticleToolWhereUniqueInput[]
    connect?: NewsArticleToolWhereUniqueInput | NewsArticleToolWhereUniqueInput[]
    update?: NewsArticleToolUpdateWithWhereUniqueWithoutToolInput | NewsArticleToolUpdateWithWhereUniqueWithoutToolInput[]
    updateMany?: NewsArticleToolUpdateManyWithWhereWithoutToolInput | NewsArticleToolUpdateManyWithWhereWithoutToolInput[]
    deleteMany?: NewsArticleToolScalarWhereInput | NewsArticleToolScalarWhereInput[]
  }

  export type ToolCategoryUncheckedUpdateManyWithoutToolNestedInput = {
    create?: XOR<ToolCategoryCreateWithoutToolInput, ToolCategoryUncheckedCreateWithoutToolInput> | ToolCategoryCreateWithoutToolInput[] | ToolCategoryUncheckedCreateWithoutToolInput[]
    connectOrCreate?: ToolCategoryCreateOrConnectWithoutToolInput | ToolCategoryCreateOrConnectWithoutToolInput[]
    upsert?: ToolCategoryUpsertWithWhereUniqueWithoutToolInput | ToolCategoryUpsertWithWhereUniqueWithoutToolInput[]
    createMany?: ToolCategoryCreateManyToolInputEnvelope
    set?: ToolCategoryWhereUniqueInput | ToolCategoryWhereUniqueInput[]
    disconnect?: ToolCategoryWhereUniqueInput | ToolCategoryWhereUniqueInput[]
    delete?: ToolCategoryWhereUniqueInput | ToolCategoryWhereUniqueInput[]
    connect?: ToolCategoryWhereUniqueInput | ToolCategoryWhereUniqueInput[]
    update?: ToolCategoryUpdateWithWhereUniqueWithoutToolInput | ToolCategoryUpdateWithWhereUniqueWithoutToolInput[]
    updateMany?: ToolCategoryUpdateManyWithWhereWithoutToolInput | ToolCategoryUpdateManyWithWhereWithoutToolInput[]
    deleteMany?: ToolCategoryScalarWhereInput | ToolCategoryScalarWhereInput[]
  }

  export type ToolPlatformUncheckedUpdateManyWithoutToolNestedInput = {
    create?: XOR<ToolPlatformCreateWithoutToolInput, ToolPlatformUncheckedCreateWithoutToolInput> | ToolPlatformCreateWithoutToolInput[] | ToolPlatformUncheckedCreateWithoutToolInput[]
    connectOrCreate?: ToolPlatformCreateOrConnectWithoutToolInput | ToolPlatformCreateOrConnectWithoutToolInput[]
    upsert?: ToolPlatformUpsertWithWhereUniqueWithoutToolInput | ToolPlatformUpsertWithWhereUniqueWithoutToolInput[]
    createMany?: ToolPlatformCreateManyToolInputEnvelope
    set?: ToolPlatformWhereUniqueInput | ToolPlatformWhereUniqueInput[]
    disconnect?: ToolPlatformWhereUniqueInput | ToolPlatformWhereUniqueInput[]
    delete?: ToolPlatformWhereUniqueInput | ToolPlatformWhereUniqueInput[]
    connect?: ToolPlatformWhereUniqueInput | ToolPlatformWhereUniqueInput[]
    update?: ToolPlatformUpdateWithWhereUniqueWithoutToolInput | ToolPlatformUpdateWithWhereUniqueWithoutToolInput[]
    updateMany?: ToolPlatformUpdateManyWithWhereWithoutToolInput | ToolPlatformUpdateManyWithWhereWithoutToolInput[]
    deleteMany?: ToolPlatformScalarWhereInput | ToolPlatformScalarWhereInput[]
  }

  export type ToolCapabilityUncheckedUpdateManyWithoutToolNestedInput = {
    create?: XOR<ToolCapabilityCreateWithoutToolInput, ToolCapabilityUncheckedCreateWithoutToolInput> | ToolCapabilityCreateWithoutToolInput[] | ToolCapabilityUncheckedCreateWithoutToolInput[]
    connectOrCreate?: ToolCapabilityCreateOrConnectWithoutToolInput | ToolCapabilityCreateOrConnectWithoutToolInput[]
    upsert?: ToolCapabilityUpsertWithWhereUniqueWithoutToolInput | ToolCapabilityUpsertWithWhereUniqueWithoutToolInput[]
    createMany?: ToolCapabilityCreateManyToolInputEnvelope
    set?: ToolCapabilityWhereUniqueInput | ToolCapabilityWhereUniqueInput[]
    disconnect?: ToolCapabilityWhereUniqueInput | ToolCapabilityWhereUniqueInput[]
    delete?: ToolCapabilityWhereUniqueInput | ToolCapabilityWhereUniqueInput[]
    connect?: ToolCapabilityWhereUniqueInput | ToolCapabilityWhereUniqueInput[]
    update?: ToolCapabilityUpdateWithWhereUniqueWithoutToolInput | ToolCapabilityUpdateWithWhereUniqueWithoutToolInput[]
    updateMany?: ToolCapabilityUpdateManyWithWhereWithoutToolInput | ToolCapabilityUpdateManyWithWhereWithoutToolInput[]
    deleteMany?: ToolCapabilityScalarWhereInput | ToolCapabilityScalarWhereInput[]
  }

  export type ToolUseCaseUncheckedUpdateManyWithoutToolNestedInput = {
    create?: XOR<ToolUseCaseCreateWithoutToolInput, ToolUseCaseUncheckedCreateWithoutToolInput> | ToolUseCaseCreateWithoutToolInput[] | ToolUseCaseUncheckedCreateWithoutToolInput[]
    connectOrCreate?: ToolUseCaseCreateOrConnectWithoutToolInput | ToolUseCaseCreateOrConnectWithoutToolInput[]
    upsert?: ToolUseCaseUpsertWithWhereUniqueWithoutToolInput | ToolUseCaseUpsertWithWhereUniqueWithoutToolInput[]
    createMany?: ToolUseCaseCreateManyToolInputEnvelope
    set?: ToolUseCaseWhereUniqueInput | ToolUseCaseWhereUniqueInput[]
    disconnect?: ToolUseCaseWhereUniqueInput | ToolUseCaseWhereUniqueInput[]
    delete?: ToolUseCaseWhereUniqueInput | ToolUseCaseWhereUniqueInput[]
    connect?: ToolUseCaseWhereUniqueInput | ToolUseCaseWhereUniqueInput[]
    update?: ToolUseCaseUpdateWithWhereUniqueWithoutToolInput | ToolUseCaseUpdateWithWhereUniqueWithoutToolInput[]
    updateMany?: ToolUseCaseUpdateManyWithWhereWithoutToolInput | ToolUseCaseUpdateManyWithWhereWithoutToolInput[]
    deleteMany?: ToolUseCaseScalarWhereInput | ToolUseCaseScalarWhereInput[]
  }

  export type ToolScreenshotUncheckedUpdateManyWithoutToolNestedInput = {
    create?: XOR<ToolScreenshotCreateWithoutToolInput, ToolScreenshotUncheckedCreateWithoutToolInput> | ToolScreenshotCreateWithoutToolInput[] | ToolScreenshotUncheckedCreateWithoutToolInput[]
    connectOrCreate?: ToolScreenshotCreateOrConnectWithoutToolInput | ToolScreenshotCreateOrConnectWithoutToolInput[]
    upsert?: ToolScreenshotUpsertWithWhereUniqueWithoutToolInput | ToolScreenshotUpsertWithWhereUniqueWithoutToolInput[]
    createMany?: ToolScreenshotCreateManyToolInputEnvelope
    set?: ToolScreenshotWhereUniqueInput | ToolScreenshotWhereUniqueInput[]
    disconnect?: ToolScreenshotWhereUniqueInput | ToolScreenshotWhereUniqueInput[]
    delete?: ToolScreenshotWhereUniqueInput | ToolScreenshotWhereUniqueInput[]
    connect?: ToolScreenshotWhereUniqueInput | ToolScreenshotWhereUniqueInput[]
    update?: ToolScreenshotUpdateWithWhereUniqueWithoutToolInput | ToolScreenshotUpdateWithWhereUniqueWithoutToolInput[]
    updateMany?: ToolScreenshotUpdateManyWithWhereWithoutToolInput | ToolScreenshotUpdateManyWithWhereWithoutToolInput[]
    deleteMany?: ToolScreenshotScalarWhereInput | ToolScreenshotScalarWhereInput[]
  }

  export type NewsArticleToolUncheckedUpdateManyWithoutToolNestedInput = {
    create?: XOR<NewsArticleToolCreateWithoutToolInput, NewsArticleToolUncheckedCreateWithoutToolInput> | NewsArticleToolCreateWithoutToolInput[] | NewsArticleToolUncheckedCreateWithoutToolInput[]
    connectOrCreate?: NewsArticleToolCreateOrConnectWithoutToolInput | NewsArticleToolCreateOrConnectWithoutToolInput[]
    upsert?: NewsArticleToolUpsertWithWhereUniqueWithoutToolInput | NewsArticleToolUpsertWithWhereUniqueWithoutToolInput[]
    createMany?: NewsArticleToolCreateManyToolInputEnvelope
    set?: NewsArticleToolWhereUniqueInput | NewsArticleToolWhereUniqueInput[]
    disconnect?: NewsArticleToolWhereUniqueInput | NewsArticleToolWhereUniqueInput[]
    delete?: NewsArticleToolWhereUniqueInput | NewsArticleToolWhereUniqueInput[]
    connect?: NewsArticleToolWhereUniqueInput | NewsArticleToolWhereUniqueInput[]
    update?: NewsArticleToolUpdateWithWhereUniqueWithoutToolInput | NewsArticleToolUpdateWithWhereUniqueWithoutToolInput[]
    updateMany?: NewsArticleToolUpdateManyWithWhereWithoutToolInput | NewsArticleToolUpdateManyWithWhereWithoutToolInput[]
    deleteMany?: NewsArticleToolScalarWhereInput | NewsArticleToolScalarWhereInput[]
  }

  export type ToolCreateNestedOneWithoutCategoriesInput = {
    create?: XOR<ToolCreateWithoutCategoriesInput, ToolUncheckedCreateWithoutCategoriesInput>
    connectOrCreate?: ToolCreateOrConnectWithoutCategoriesInput
    connect?: ToolWhereUniqueInput
  }

  export type CategoryCreateNestedOneWithoutToolsInput = {
    create?: XOR<CategoryCreateWithoutToolsInput, CategoryUncheckedCreateWithoutToolsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutToolsInput
    connect?: CategoryWhereUniqueInput
  }

  export type ToolUpdateOneRequiredWithoutCategoriesNestedInput = {
    create?: XOR<ToolCreateWithoutCategoriesInput, ToolUncheckedCreateWithoutCategoriesInput>
    connectOrCreate?: ToolCreateOrConnectWithoutCategoriesInput
    upsert?: ToolUpsertWithoutCategoriesInput
    connect?: ToolWhereUniqueInput
    update?: XOR<XOR<ToolUpdateToOneWithWhereWithoutCategoriesInput, ToolUpdateWithoutCategoriesInput>, ToolUncheckedUpdateWithoutCategoriesInput>
  }

  export type CategoryUpdateOneRequiredWithoutToolsNestedInput = {
    create?: XOR<CategoryCreateWithoutToolsInput, CategoryUncheckedCreateWithoutToolsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutToolsInput
    upsert?: CategoryUpsertWithoutToolsInput
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutToolsInput, CategoryUpdateWithoutToolsInput>, CategoryUncheckedUpdateWithoutToolsInput>
  }

  export type ToolCreateNestedOneWithoutPlatformsInput = {
    create?: XOR<ToolCreateWithoutPlatformsInput, ToolUncheckedCreateWithoutPlatformsInput>
    connectOrCreate?: ToolCreateOrConnectWithoutPlatformsInput
    connect?: ToolWhereUniqueInput
  }

  export type PlatformCreateNestedOneWithoutToolsInput = {
    create?: XOR<PlatformCreateWithoutToolsInput, PlatformUncheckedCreateWithoutToolsInput>
    connectOrCreate?: PlatformCreateOrConnectWithoutToolsInput
    connect?: PlatformWhereUniqueInput
  }

  export type ToolUpdateOneRequiredWithoutPlatformsNestedInput = {
    create?: XOR<ToolCreateWithoutPlatformsInput, ToolUncheckedCreateWithoutPlatformsInput>
    connectOrCreate?: ToolCreateOrConnectWithoutPlatformsInput
    upsert?: ToolUpsertWithoutPlatformsInput
    connect?: ToolWhereUniqueInput
    update?: XOR<XOR<ToolUpdateToOneWithWhereWithoutPlatformsInput, ToolUpdateWithoutPlatformsInput>, ToolUncheckedUpdateWithoutPlatformsInput>
  }

  export type PlatformUpdateOneRequiredWithoutToolsNestedInput = {
    create?: XOR<PlatformCreateWithoutToolsInput, PlatformUncheckedCreateWithoutToolsInput>
    connectOrCreate?: PlatformCreateOrConnectWithoutToolsInput
    upsert?: PlatformUpsertWithoutToolsInput
    connect?: PlatformWhereUniqueInput
    update?: XOR<XOR<PlatformUpdateToOneWithWhereWithoutToolsInput, PlatformUpdateWithoutToolsInput>, PlatformUncheckedUpdateWithoutToolsInput>
  }

  export type ToolCreateNestedOneWithoutCapabilitiesInput = {
    create?: XOR<ToolCreateWithoutCapabilitiesInput, ToolUncheckedCreateWithoutCapabilitiesInput>
    connectOrCreate?: ToolCreateOrConnectWithoutCapabilitiesInput
    connect?: ToolWhereUniqueInput
  }

  export type ToolUpdateOneRequiredWithoutCapabilitiesNestedInput = {
    create?: XOR<ToolCreateWithoutCapabilitiesInput, ToolUncheckedCreateWithoutCapabilitiesInput>
    connectOrCreate?: ToolCreateOrConnectWithoutCapabilitiesInput
    upsert?: ToolUpsertWithoutCapabilitiesInput
    connect?: ToolWhereUniqueInput
    update?: XOR<XOR<ToolUpdateToOneWithWhereWithoutCapabilitiesInput, ToolUpdateWithoutCapabilitiesInput>, ToolUncheckedUpdateWithoutCapabilitiesInput>
  }

  export type ToolCreateNestedOneWithoutUseCasesInput = {
    create?: XOR<ToolCreateWithoutUseCasesInput, ToolUncheckedCreateWithoutUseCasesInput>
    connectOrCreate?: ToolCreateOrConnectWithoutUseCasesInput
    connect?: ToolWhereUniqueInput
  }

  export type ToolUpdateOneRequiredWithoutUseCasesNestedInput = {
    create?: XOR<ToolCreateWithoutUseCasesInput, ToolUncheckedCreateWithoutUseCasesInput>
    connectOrCreate?: ToolCreateOrConnectWithoutUseCasesInput
    upsert?: ToolUpsertWithoutUseCasesInput
    connect?: ToolWhereUniqueInput
    update?: XOR<XOR<ToolUpdateToOneWithWhereWithoutUseCasesInput, ToolUpdateWithoutUseCasesInput>, ToolUncheckedUpdateWithoutUseCasesInput>
  }

  export type ToolCreateNestedOneWithoutScreenshotsInput = {
    create?: XOR<ToolCreateWithoutScreenshotsInput, ToolUncheckedCreateWithoutScreenshotsInput>
    connectOrCreate?: ToolCreateOrConnectWithoutScreenshotsInput
    connect?: ToolWhereUniqueInput
  }

  export type ToolUpdateOneRequiredWithoutScreenshotsNestedInput = {
    create?: XOR<ToolCreateWithoutScreenshotsInput, ToolUncheckedCreateWithoutScreenshotsInput>
    connectOrCreate?: ToolCreateOrConnectWithoutScreenshotsInput
    upsert?: ToolUpsertWithoutScreenshotsInput
    connect?: ToolWhereUniqueInput
    update?: XOR<XOR<ToolUpdateToOneWithWhereWithoutScreenshotsInput, ToolUpdateWithoutScreenshotsInput>, ToolUncheckedUpdateWithoutScreenshotsInput>
  }

  export type CategoryCreateNestedOneWithoutNewsInput = {
    create?: XOR<CategoryCreateWithoutNewsInput, CategoryUncheckedCreateWithoutNewsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutNewsInput
    connect?: CategoryWhereUniqueInput
  }

  export type NewsArticleToolCreateNestedManyWithoutArticleInput = {
    create?: XOR<NewsArticleToolCreateWithoutArticleInput, NewsArticleToolUncheckedCreateWithoutArticleInput> | NewsArticleToolCreateWithoutArticleInput[] | NewsArticleToolUncheckedCreateWithoutArticleInput[]
    connectOrCreate?: NewsArticleToolCreateOrConnectWithoutArticleInput | NewsArticleToolCreateOrConnectWithoutArticleInput[]
    createMany?: NewsArticleToolCreateManyArticleInputEnvelope
    connect?: NewsArticleToolWhereUniqueInput | NewsArticleToolWhereUniqueInput[]
  }

  export type NewsArticleToolUncheckedCreateNestedManyWithoutArticleInput = {
    create?: XOR<NewsArticleToolCreateWithoutArticleInput, NewsArticleToolUncheckedCreateWithoutArticleInput> | NewsArticleToolCreateWithoutArticleInput[] | NewsArticleToolUncheckedCreateWithoutArticleInput[]
    connectOrCreate?: NewsArticleToolCreateOrConnectWithoutArticleInput | NewsArticleToolCreateOrConnectWithoutArticleInput[]
    createMany?: NewsArticleToolCreateManyArticleInputEnvelope
    connect?: NewsArticleToolWhereUniqueInput | NewsArticleToolWhereUniqueInput[]
  }

  export type EnumNewsStatusFieldUpdateOperationsInput = {
    set?: $Enums.NewsStatus
  }

  export type CategoryUpdateOneWithoutNewsNestedInput = {
    create?: XOR<CategoryCreateWithoutNewsInput, CategoryUncheckedCreateWithoutNewsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutNewsInput
    upsert?: CategoryUpsertWithoutNewsInput
    disconnect?: CategoryWhereInput | boolean
    delete?: CategoryWhereInput | boolean
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutNewsInput, CategoryUpdateWithoutNewsInput>, CategoryUncheckedUpdateWithoutNewsInput>
  }

  export type NewsArticleToolUpdateManyWithoutArticleNestedInput = {
    create?: XOR<NewsArticleToolCreateWithoutArticleInput, NewsArticleToolUncheckedCreateWithoutArticleInput> | NewsArticleToolCreateWithoutArticleInput[] | NewsArticleToolUncheckedCreateWithoutArticleInput[]
    connectOrCreate?: NewsArticleToolCreateOrConnectWithoutArticleInput | NewsArticleToolCreateOrConnectWithoutArticleInput[]
    upsert?: NewsArticleToolUpsertWithWhereUniqueWithoutArticleInput | NewsArticleToolUpsertWithWhereUniqueWithoutArticleInput[]
    createMany?: NewsArticleToolCreateManyArticleInputEnvelope
    set?: NewsArticleToolWhereUniqueInput | NewsArticleToolWhereUniqueInput[]
    disconnect?: NewsArticleToolWhereUniqueInput | NewsArticleToolWhereUniqueInput[]
    delete?: NewsArticleToolWhereUniqueInput | NewsArticleToolWhereUniqueInput[]
    connect?: NewsArticleToolWhereUniqueInput | NewsArticleToolWhereUniqueInput[]
    update?: NewsArticleToolUpdateWithWhereUniqueWithoutArticleInput | NewsArticleToolUpdateWithWhereUniqueWithoutArticleInput[]
    updateMany?: NewsArticleToolUpdateManyWithWhereWithoutArticleInput | NewsArticleToolUpdateManyWithWhereWithoutArticleInput[]
    deleteMany?: NewsArticleToolScalarWhereInput | NewsArticleToolScalarWhereInput[]
  }

  export type NewsArticleToolUncheckedUpdateManyWithoutArticleNestedInput = {
    create?: XOR<NewsArticleToolCreateWithoutArticleInput, NewsArticleToolUncheckedCreateWithoutArticleInput> | NewsArticleToolCreateWithoutArticleInput[] | NewsArticleToolUncheckedCreateWithoutArticleInput[]
    connectOrCreate?: NewsArticleToolCreateOrConnectWithoutArticleInput | NewsArticleToolCreateOrConnectWithoutArticleInput[]
    upsert?: NewsArticleToolUpsertWithWhereUniqueWithoutArticleInput | NewsArticleToolUpsertWithWhereUniqueWithoutArticleInput[]
    createMany?: NewsArticleToolCreateManyArticleInputEnvelope
    set?: NewsArticleToolWhereUniqueInput | NewsArticleToolWhereUniqueInput[]
    disconnect?: NewsArticleToolWhereUniqueInput | NewsArticleToolWhereUniqueInput[]
    delete?: NewsArticleToolWhereUniqueInput | NewsArticleToolWhereUniqueInput[]
    connect?: NewsArticleToolWhereUniqueInput | NewsArticleToolWhereUniqueInput[]
    update?: NewsArticleToolUpdateWithWhereUniqueWithoutArticleInput | NewsArticleToolUpdateWithWhereUniqueWithoutArticleInput[]
    updateMany?: NewsArticleToolUpdateManyWithWhereWithoutArticleInput | NewsArticleToolUpdateManyWithWhereWithoutArticleInput[]
    deleteMany?: NewsArticleToolScalarWhereInput | NewsArticleToolScalarWhereInput[]
  }

  export type NewsArticleCreateNestedOneWithoutToolsInput = {
    create?: XOR<NewsArticleCreateWithoutToolsInput, NewsArticleUncheckedCreateWithoutToolsInput>
    connectOrCreate?: NewsArticleCreateOrConnectWithoutToolsInput
    connect?: NewsArticleWhereUniqueInput
  }

  export type ToolCreateNestedOneWithoutNewsInput = {
    create?: XOR<ToolCreateWithoutNewsInput, ToolUncheckedCreateWithoutNewsInput>
    connectOrCreate?: ToolCreateOrConnectWithoutNewsInput
    connect?: ToolWhereUniqueInput
  }

  export type NewsArticleUpdateOneRequiredWithoutToolsNestedInput = {
    create?: XOR<NewsArticleCreateWithoutToolsInput, NewsArticleUncheckedCreateWithoutToolsInput>
    connectOrCreate?: NewsArticleCreateOrConnectWithoutToolsInput
    upsert?: NewsArticleUpsertWithoutToolsInput
    connect?: NewsArticleWhereUniqueInput
    update?: XOR<XOR<NewsArticleUpdateToOneWithWhereWithoutToolsInput, NewsArticleUpdateWithoutToolsInput>, NewsArticleUncheckedUpdateWithoutToolsInput>
  }

  export type ToolUpdateOneRequiredWithoutNewsNestedInput = {
    create?: XOR<ToolCreateWithoutNewsInput, ToolUncheckedCreateWithoutNewsInput>
    connectOrCreate?: ToolCreateOrConnectWithoutNewsInput
    upsert?: ToolUpsertWithoutNewsInput
    connect?: ToolWhereUniqueInput
    update?: XOR<XOR<ToolUpdateToOneWithWhereWithoutNewsInput, ToolUpdateWithoutNewsInput>, ToolUncheckedUpdateWithoutNewsInput>
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

  export type NestedEnumPricingModelFilter<$PrismaModel = never> = {
    equals?: $Enums.PricingModel | EnumPricingModelFieldRefInput<$PrismaModel>
    in?: $Enums.PricingModel[] | ListEnumPricingModelFieldRefInput<$PrismaModel>
    notIn?: $Enums.PricingModel[] | ListEnumPricingModelFieldRefInput<$PrismaModel>
    not?: NestedEnumPricingModelFilter<$PrismaModel> | $Enums.PricingModel
  }

  export type NestedEnumToolStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ToolStatus | EnumToolStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ToolStatus[] | ListEnumToolStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ToolStatus[] | ListEnumToolStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumToolStatusFilter<$PrismaModel> | $Enums.ToolStatus
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
  }

  export type NestedEnumPricingModelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PricingModel | EnumPricingModelFieldRefInput<$PrismaModel>
    in?: $Enums.PricingModel[] | ListEnumPricingModelFieldRefInput<$PrismaModel>
    notIn?: $Enums.PricingModel[] | ListEnumPricingModelFieldRefInput<$PrismaModel>
    not?: NestedEnumPricingModelWithAggregatesFilter<$PrismaModel> | $Enums.PricingModel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPricingModelFilter<$PrismaModel>
    _max?: NestedEnumPricingModelFilter<$PrismaModel>
  }

  export type NestedEnumToolStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ToolStatus | EnumToolStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ToolStatus[] | ListEnumToolStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ToolStatus[] | ListEnumToolStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumToolStatusWithAggregatesFilter<$PrismaModel> | $Enums.ToolStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumToolStatusFilter<$PrismaModel>
    _max?: NestedEnumToolStatusFilter<$PrismaModel>
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
  }

  export type NestedEnumNewsStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.NewsStatus | EnumNewsStatusFieldRefInput<$PrismaModel>
    in?: $Enums.NewsStatus[] | ListEnumNewsStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.NewsStatus[] | ListEnumNewsStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumNewsStatusFilter<$PrismaModel> | $Enums.NewsStatus
  }

  export type NestedEnumNewsStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.NewsStatus | EnumNewsStatusFieldRefInput<$PrismaModel>
    in?: $Enums.NewsStatus[] | ListEnumNewsStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.NewsStatus[] | ListEnumNewsStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumNewsStatusWithAggregatesFilter<$PrismaModel> | $Enums.NewsStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumNewsStatusFilter<$PrismaModel>
    _max?: NestedEnumNewsStatusFilter<$PrismaModel>
  }

  export type ToolCategoryCreateWithoutCategoryInput = {
    createdAt?: Date | string
    tool: ToolCreateNestedOneWithoutCategoriesInput
  }

  export type ToolCategoryUncheckedCreateWithoutCategoryInput = {
    toolId: string
    createdAt?: Date | string
  }

  export type ToolCategoryCreateOrConnectWithoutCategoryInput = {
    where: ToolCategoryWhereUniqueInput
    create: XOR<ToolCategoryCreateWithoutCategoryInput, ToolCategoryUncheckedCreateWithoutCategoryInput>
  }

  export type ToolCategoryCreateManyCategoryInputEnvelope = {
    data: ToolCategoryCreateManyCategoryInput | ToolCategoryCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type NewsArticleCreateWithoutCategoryInput = {
    id?: string
    slug: string
    title: string
    excerpt: string
    body: string
    coverImageUrl?: string | null
    sourceName: string
    sourceUrl?: string | null
    authorName?: string | null
    topic: string
    readingMinutes?: number
    status?: $Enums.NewsStatus
    isFeatured?: boolean
    publishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tools?: NewsArticleToolCreateNestedManyWithoutArticleInput
  }

  export type NewsArticleUncheckedCreateWithoutCategoryInput = {
    id?: string
    slug: string
    title: string
    excerpt: string
    body: string
    coverImageUrl?: string | null
    sourceName: string
    sourceUrl?: string | null
    authorName?: string | null
    topic: string
    readingMinutes?: number
    status?: $Enums.NewsStatus
    isFeatured?: boolean
    publishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tools?: NewsArticleToolUncheckedCreateNestedManyWithoutArticleInput
  }

  export type NewsArticleCreateOrConnectWithoutCategoryInput = {
    where: NewsArticleWhereUniqueInput
    create: XOR<NewsArticleCreateWithoutCategoryInput, NewsArticleUncheckedCreateWithoutCategoryInput>
  }

  export type NewsArticleCreateManyCategoryInputEnvelope = {
    data: NewsArticleCreateManyCategoryInput | NewsArticleCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type ToolCategoryUpsertWithWhereUniqueWithoutCategoryInput = {
    where: ToolCategoryWhereUniqueInput
    update: XOR<ToolCategoryUpdateWithoutCategoryInput, ToolCategoryUncheckedUpdateWithoutCategoryInput>
    create: XOR<ToolCategoryCreateWithoutCategoryInput, ToolCategoryUncheckedCreateWithoutCategoryInput>
  }

  export type ToolCategoryUpdateWithWhereUniqueWithoutCategoryInput = {
    where: ToolCategoryWhereUniqueInput
    data: XOR<ToolCategoryUpdateWithoutCategoryInput, ToolCategoryUncheckedUpdateWithoutCategoryInput>
  }

  export type ToolCategoryUpdateManyWithWhereWithoutCategoryInput = {
    where: ToolCategoryScalarWhereInput
    data: XOR<ToolCategoryUpdateManyMutationInput, ToolCategoryUncheckedUpdateManyWithoutCategoryInput>
  }

  export type ToolCategoryScalarWhereInput = {
    AND?: ToolCategoryScalarWhereInput | ToolCategoryScalarWhereInput[]
    OR?: ToolCategoryScalarWhereInput[]
    NOT?: ToolCategoryScalarWhereInput | ToolCategoryScalarWhereInput[]
    toolId?: StringFilter<"ToolCategory"> | string
    categoryId?: StringFilter<"ToolCategory"> | string
    createdAt?: DateTimeFilter<"ToolCategory"> | Date | string
  }

  export type NewsArticleUpsertWithWhereUniqueWithoutCategoryInput = {
    where: NewsArticleWhereUniqueInput
    update: XOR<NewsArticleUpdateWithoutCategoryInput, NewsArticleUncheckedUpdateWithoutCategoryInput>
    create: XOR<NewsArticleCreateWithoutCategoryInput, NewsArticleUncheckedCreateWithoutCategoryInput>
  }

  export type NewsArticleUpdateWithWhereUniqueWithoutCategoryInput = {
    where: NewsArticleWhereUniqueInput
    data: XOR<NewsArticleUpdateWithoutCategoryInput, NewsArticleUncheckedUpdateWithoutCategoryInput>
  }

  export type NewsArticleUpdateManyWithWhereWithoutCategoryInput = {
    where: NewsArticleScalarWhereInput
    data: XOR<NewsArticleUpdateManyMutationInput, NewsArticleUncheckedUpdateManyWithoutCategoryInput>
  }

  export type NewsArticleScalarWhereInput = {
    AND?: NewsArticleScalarWhereInput | NewsArticleScalarWhereInput[]
    OR?: NewsArticleScalarWhereInput[]
    NOT?: NewsArticleScalarWhereInput | NewsArticleScalarWhereInput[]
    id?: StringFilter<"NewsArticle"> | string
    slug?: StringFilter<"NewsArticle"> | string
    title?: StringFilter<"NewsArticle"> | string
    excerpt?: StringFilter<"NewsArticle"> | string
    body?: StringFilter<"NewsArticle"> | string
    coverImageUrl?: StringNullableFilter<"NewsArticle"> | string | null
    sourceName?: StringFilter<"NewsArticle"> | string
    sourceUrl?: StringNullableFilter<"NewsArticle"> | string | null
    authorName?: StringNullableFilter<"NewsArticle"> | string | null
    topic?: StringFilter<"NewsArticle"> | string
    readingMinutes?: IntFilter<"NewsArticle"> | number
    status?: EnumNewsStatusFilter<"NewsArticle"> | $Enums.NewsStatus
    isFeatured?: BoolFilter<"NewsArticle"> | boolean
    publishedAt?: DateTimeNullableFilter<"NewsArticle"> | Date | string | null
    categoryId?: StringNullableFilter<"NewsArticle"> | string | null
    createdAt?: DateTimeFilter<"NewsArticle"> | Date | string
    updatedAt?: DateTimeFilter<"NewsArticle"> | Date | string
  }

  export type ToolPlatformCreateWithoutPlatformInput = {
    createdAt?: Date | string
    tool: ToolCreateNestedOneWithoutPlatformsInput
  }

  export type ToolPlatformUncheckedCreateWithoutPlatformInput = {
    toolId: string
    createdAt?: Date | string
  }

  export type ToolPlatformCreateOrConnectWithoutPlatformInput = {
    where: ToolPlatformWhereUniqueInput
    create: XOR<ToolPlatformCreateWithoutPlatformInput, ToolPlatformUncheckedCreateWithoutPlatformInput>
  }

  export type ToolPlatformCreateManyPlatformInputEnvelope = {
    data: ToolPlatformCreateManyPlatformInput | ToolPlatformCreateManyPlatformInput[]
    skipDuplicates?: boolean
  }

  export type ToolPlatformUpsertWithWhereUniqueWithoutPlatformInput = {
    where: ToolPlatformWhereUniqueInput
    update: XOR<ToolPlatformUpdateWithoutPlatformInput, ToolPlatformUncheckedUpdateWithoutPlatformInput>
    create: XOR<ToolPlatformCreateWithoutPlatformInput, ToolPlatformUncheckedCreateWithoutPlatformInput>
  }

  export type ToolPlatformUpdateWithWhereUniqueWithoutPlatformInput = {
    where: ToolPlatformWhereUniqueInput
    data: XOR<ToolPlatformUpdateWithoutPlatformInput, ToolPlatformUncheckedUpdateWithoutPlatformInput>
  }

  export type ToolPlatformUpdateManyWithWhereWithoutPlatformInput = {
    where: ToolPlatformScalarWhereInput
    data: XOR<ToolPlatformUpdateManyMutationInput, ToolPlatformUncheckedUpdateManyWithoutPlatformInput>
  }

  export type ToolPlatformScalarWhereInput = {
    AND?: ToolPlatformScalarWhereInput | ToolPlatformScalarWhereInput[]
    OR?: ToolPlatformScalarWhereInput[]
    NOT?: ToolPlatformScalarWhereInput | ToolPlatformScalarWhereInput[]
    toolId?: StringFilter<"ToolPlatform"> | string
    platformId?: StringFilter<"ToolPlatform"> | string
    createdAt?: DateTimeFilter<"ToolPlatform"> | Date | string
  }

  export type ToolCategoryCreateWithoutToolInput = {
    createdAt?: Date | string
    category: CategoryCreateNestedOneWithoutToolsInput
  }

  export type ToolCategoryUncheckedCreateWithoutToolInput = {
    categoryId: string
    createdAt?: Date | string
  }

  export type ToolCategoryCreateOrConnectWithoutToolInput = {
    where: ToolCategoryWhereUniqueInput
    create: XOR<ToolCategoryCreateWithoutToolInput, ToolCategoryUncheckedCreateWithoutToolInput>
  }

  export type ToolCategoryCreateManyToolInputEnvelope = {
    data: ToolCategoryCreateManyToolInput | ToolCategoryCreateManyToolInput[]
    skipDuplicates?: boolean
  }

  export type ToolPlatformCreateWithoutToolInput = {
    createdAt?: Date | string
    platform: PlatformCreateNestedOneWithoutToolsInput
  }

  export type ToolPlatformUncheckedCreateWithoutToolInput = {
    platformId: string
    createdAt?: Date | string
  }

  export type ToolPlatformCreateOrConnectWithoutToolInput = {
    where: ToolPlatformWhereUniqueInput
    create: XOR<ToolPlatformCreateWithoutToolInput, ToolPlatformUncheckedCreateWithoutToolInput>
  }

  export type ToolPlatformCreateManyToolInputEnvelope = {
    data: ToolPlatformCreateManyToolInput | ToolPlatformCreateManyToolInput[]
    skipDuplicates?: boolean
  }

  export type ToolCapabilityCreateWithoutToolInput = {
    id?: string
    title: string
    summary?: string | null
    sortOrder?: number
    createdAt?: Date | string
  }

  export type ToolCapabilityUncheckedCreateWithoutToolInput = {
    id?: string
    title: string
    summary?: string | null
    sortOrder?: number
    createdAt?: Date | string
  }

  export type ToolCapabilityCreateOrConnectWithoutToolInput = {
    where: ToolCapabilityWhereUniqueInput
    create: XOR<ToolCapabilityCreateWithoutToolInput, ToolCapabilityUncheckedCreateWithoutToolInput>
  }

  export type ToolCapabilityCreateManyToolInputEnvelope = {
    data: ToolCapabilityCreateManyToolInput | ToolCapabilityCreateManyToolInput[]
    skipDuplicates?: boolean
  }

  export type ToolUseCaseCreateWithoutToolInput = {
    id?: string
    title: string
    summary?: string | null
    sortOrder?: number
    createdAt?: Date | string
  }

  export type ToolUseCaseUncheckedCreateWithoutToolInput = {
    id?: string
    title: string
    summary?: string | null
    sortOrder?: number
    createdAt?: Date | string
  }

  export type ToolUseCaseCreateOrConnectWithoutToolInput = {
    where: ToolUseCaseWhereUniqueInput
    create: XOR<ToolUseCaseCreateWithoutToolInput, ToolUseCaseUncheckedCreateWithoutToolInput>
  }

  export type ToolUseCaseCreateManyToolInputEnvelope = {
    data: ToolUseCaseCreateManyToolInput | ToolUseCaseCreateManyToolInput[]
    skipDuplicates?: boolean
  }

  export type ToolScreenshotCreateWithoutToolInput = {
    id?: string
    imageUrl: string
    altText: string
    caption?: string | null
    sortOrder?: number
    createdAt?: Date | string
  }

  export type ToolScreenshotUncheckedCreateWithoutToolInput = {
    id?: string
    imageUrl: string
    altText: string
    caption?: string | null
    sortOrder?: number
    createdAt?: Date | string
  }

  export type ToolScreenshotCreateOrConnectWithoutToolInput = {
    where: ToolScreenshotWhereUniqueInput
    create: XOR<ToolScreenshotCreateWithoutToolInput, ToolScreenshotUncheckedCreateWithoutToolInput>
  }

  export type ToolScreenshotCreateManyToolInputEnvelope = {
    data: ToolScreenshotCreateManyToolInput | ToolScreenshotCreateManyToolInput[]
    skipDuplicates?: boolean
  }

  export type NewsArticleToolCreateWithoutToolInput = {
    createdAt?: Date | string
    article: NewsArticleCreateNestedOneWithoutToolsInput
  }

  export type NewsArticleToolUncheckedCreateWithoutToolInput = {
    articleId: string
    createdAt?: Date | string
  }

  export type NewsArticleToolCreateOrConnectWithoutToolInput = {
    where: NewsArticleToolWhereUniqueInput
    create: XOR<NewsArticleToolCreateWithoutToolInput, NewsArticleToolUncheckedCreateWithoutToolInput>
  }

  export type NewsArticleToolCreateManyToolInputEnvelope = {
    data: NewsArticleToolCreateManyToolInput | NewsArticleToolCreateManyToolInput[]
    skipDuplicates?: boolean
  }

  export type ToolCategoryUpsertWithWhereUniqueWithoutToolInput = {
    where: ToolCategoryWhereUniqueInput
    update: XOR<ToolCategoryUpdateWithoutToolInput, ToolCategoryUncheckedUpdateWithoutToolInput>
    create: XOR<ToolCategoryCreateWithoutToolInput, ToolCategoryUncheckedCreateWithoutToolInput>
  }

  export type ToolCategoryUpdateWithWhereUniqueWithoutToolInput = {
    where: ToolCategoryWhereUniqueInput
    data: XOR<ToolCategoryUpdateWithoutToolInput, ToolCategoryUncheckedUpdateWithoutToolInput>
  }

  export type ToolCategoryUpdateManyWithWhereWithoutToolInput = {
    where: ToolCategoryScalarWhereInput
    data: XOR<ToolCategoryUpdateManyMutationInput, ToolCategoryUncheckedUpdateManyWithoutToolInput>
  }

  export type ToolPlatformUpsertWithWhereUniqueWithoutToolInput = {
    where: ToolPlatformWhereUniqueInput
    update: XOR<ToolPlatformUpdateWithoutToolInput, ToolPlatformUncheckedUpdateWithoutToolInput>
    create: XOR<ToolPlatformCreateWithoutToolInput, ToolPlatformUncheckedCreateWithoutToolInput>
  }

  export type ToolPlatformUpdateWithWhereUniqueWithoutToolInput = {
    where: ToolPlatformWhereUniqueInput
    data: XOR<ToolPlatformUpdateWithoutToolInput, ToolPlatformUncheckedUpdateWithoutToolInput>
  }

  export type ToolPlatformUpdateManyWithWhereWithoutToolInput = {
    where: ToolPlatformScalarWhereInput
    data: XOR<ToolPlatformUpdateManyMutationInput, ToolPlatformUncheckedUpdateManyWithoutToolInput>
  }

  export type ToolCapabilityUpsertWithWhereUniqueWithoutToolInput = {
    where: ToolCapabilityWhereUniqueInput
    update: XOR<ToolCapabilityUpdateWithoutToolInput, ToolCapabilityUncheckedUpdateWithoutToolInput>
    create: XOR<ToolCapabilityCreateWithoutToolInput, ToolCapabilityUncheckedCreateWithoutToolInput>
  }

  export type ToolCapabilityUpdateWithWhereUniqueWithoutToolInput = {
    where: ToolCapabilityWhereUniqueInput
    data: XOR<ToolCapabilityUpdateWithoutToolInput, ToolCapabilityUncheckedUpdateWithoutToolInput>
  }

  export type ToolCapabilityUpdateManyWithWhereWithoutToolInput = {
    where: ToolCapabilityScalarWhereInput
    data: XOR<ToolCapabilityUpdateManyMutationInput, ToolCapabilityUncheckedUpdateManyWithoutToolInput>
  }

  export type ToolCapabilityScalarWhereInput = {
    AND?: ToolCapabilityScalarWhereInput | ToolCapabilityScalarWhereInput[]
    OR?: ToolCapabilityScalarWhereInput[]
    NOT?: ToolCapabilityScalarWhereInput | ToolCapabilityScalarWhereInput[]
    id?: StringFilter<"ToolCapability"> | string
    toolId?: StringFilter<"ToolCapability"> | string
    title?: StringFilter<"ToolCapability"> | string
    summary?: StringNullableFilter<"ToolCapability"> | string | null
    sortOrder?: IntFilter<"ToolCapability"> | number
    createdAt?: DateTimeFilter<"ToolCapability"> | Date | string
  }

  export type ToolUseCaseUpsertWithWhereUniqueWithoutToolInput = {
    where: ToolUseCaseWhereUniqueInput
    update: XOR<ToolUseCaseUpdateWithoutToolInput, ToolUseCaseUncheckedUpdateWithoutToolInput>
    create: XOR<ToolUseCaseCreateWithoutToolInput, ToolUseCaseUncheckedCreateWithoutToolInput>
  }

  export type ToolUseCaseUpdateWithWhereUniqueWithoutToolInput = {
    where: ToolUseCaseWhereUniqueInput
    data: XOR<ToolUseCaseUpdateWithoutToolInput, ToolUseCaseUncheckedUpdateWithoutToolInput>
  }

  export type ToolUseCaseUpdateManyWithWhereWithoutToolInput = {
    where: ToolUseCaseScalarWhereInput
    data: XOR<ToolUseCaseUpdateManyMutationInput, ToolUseCaseUncheckedUpdateManyWithoutToolInput>
  }

  export type ToolUseCaseScalarWhereInput = {
    AND?: ToolUseCaseScalarWhereInput | ToolUseCaseScalarWhereInput[]
    OR?: ToolUseCaseScalarWhereInput[]
    NOT?: ToolUseCaseScalarWhereInput | ToolUseCaseScalarWhereInput[]
    id?: StringFilter<"ToolUseCase"> | string
    toolId?: StringFilter<"ToolUseCase"> | string
    title?: StringFilter<"ToolUseCase"> | string
    summary?: StringNullableFilter<"ToolUseCase"> | string | null
    sortOrder?: IntFilter<"ToolUseCase"> | number
    createdAt?: DateTimeFilter<"ToolUseCase"> | Date | string
  }

  export type ToolScreenshotUpsertWithWhereUniqueWithoutToolInput = {
    where: ToolScreenshotWhereUniqueInput
    update: XOR<ToolScreenshotUpdateWithoutToolInput, ToolScreenshotUncheckedUpdateWithoutToolInput>
    create: XOR<ToolScreenshotCreateWithoutToolInput, ToolScreenshotUncheckedCreateWithoutToolInput>
  }

  export type ToolScreenshotUpdateWithWhereUniqueWithoutToolInput = {
    where: ToolScreenshotWhereUniqueInput
    data: XOR<ToolScreenshotUpdateWithoutToolInput, ToolScreenshotUncheckedUpdateWithoutToolInput>
  }

  export type ToolScreenshotUpdateManyWithWhereWithoutToolInput = {
    where: ToolScreenshotScalarWhereInput
    data: XOR<ToolScreenshotUpdateManyMutationInput, ToolScreenshotUncheckedUpdateManyWithoutToolInput>
  }

  export type ToolScreenshotScalarWhereInput = {
    AND?: ToolScreenshotScalarWhereInput | ToolScreenshotScalarWhereInput[]
    OR?: ToolScreenshotScalarWhereInput[]
    NOT?: ToolScreenshotScalarWhereInput | ToolScreenshotScalarWhereInput[]
    id?: StringFilter<"ToolScreenshot"> | string
    toolId?: StringFilter<"ToolScreenshot"> | string
    imageUrl?: StringFilter<"ToolScreenshot"> | string
    altText?: StringFilter<"ToolScreenshot"> | string
    caption?: StringNullableFilter<"ToolScreenshot"> | string | null
    sortOrder?: IntFilter<"ToolScreenshot"> | number
    createdAt?: DateTimeFilter<"ToolScreenshot"> | Date | string
  }

  export type NewsArticleToolUpsertWithWhereUniqueWithoutToolInput = {
    where: NewsArticleToolWhereUniqueInput
    update: XOR<NewsArticleToolUpdateWithoutToolInput, NewsArticleToolUncheckedUpdateWithoutToolInput>
    create: XOR<NewsArticleToolCreateWithoutToolInput, NewsArticleToolUncheckedCreateWithoutToolInput>
  }

  export type NewsArticleToolUpdateWithWhereUniqueWithoutToolInput = {
    where: NewsArticleToolWhereUniqueInput
    data: XOR<NewsArticleToolUpdateWithoutToolInput, NewsArticleToolUncheckedUpdateWithoutToolInput>
  }

  export type NewsArticleToolUpdateManyWithWhereWithoutToolInput = {
    where: NewsArticleToolScalarWhereInput
    data: XOR<NewsArticleToolUpdateManyMutationInput, NewsArticleToolUncheckedUpdateManyWithoutToolInput>
  }

  export type NewsArticleToolScalarWhereInput = {
    AND?: NewsArticleToolScalarWhereInput | NewsArticleToolScalarWhereInput[]
    OR?: NewsArticleToolScalarWhereInput[]
    NOT?: NewsArticleToolScalarWhereInput | NewsArticleToolScalarWhereInput[]
    articleId?: StringFilter<"NewsArticleTool"> | string
    toolId?: StringFilter<"NewsArticleTool"> | string
    createdAt?: DateTimeFilter<"NewsArticleTool"> | Date | string
  }

  export type ToolCreateWithoutCategoriesInput = {
    id?: string
    slug: string
    name: string
    tagline: string
    description: string
    logoUrl?: string | null
    websiteUrl: string
    docsUrl?: string | null
    companyName: string
    companyUrl?: string | null
    companyLocation?: string | null
    pricingModel: $Enums.PricingModel
    pricingNote?: string | null
    status?: $Enums.ToolStatus
    isFeatured?: boolean
    isVerified?: boolean
    popularityScore?: number
    launchDate?: Date | string | null
    publishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    platforms?: ToolPlatformCreateNestedManyWithoutToolInput
    capabilities?: ToolCapabilityCreateNestedManyWithoutToolInput
    useCases?: ToolUseCaseCreateNestedManyWithoutToolInput
    screenshots?: ToolScreenshotCreateNestedManyWithoutToolInput
    news?: NewsArticleToolCreateNestedManyWithoutToolInput
  }

  export type ToolUncheckedCreateWithoutCategoriesInput = {
    id?: string
    slug: string
    name: string
    tagline: string
    description: string
    logoUrl?: string | null
    websiteUrl: string
    docsUrl?: string | null
    companyName: string
    companyUrl?: string | null
    companyLocation?: string | null
    pricingModel: $Enums.PricingModel
    pricingNote?: string | null
    status?: $Enums.ToolStatus
    isFeatured?: boolean
    isVerified?: boolean
    popularityScore?: number
    launchDate?: Date | string | null
    publishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    platforms?: ToolPlatformUncheckedCreateNestedManyWithoutToolInput
    capabilities?: ToolCapabilityUncheckedCreateNestedManyWithoutToolInput
    useCases?: ToolUseCaseUncheckedCreateNestedManyWithoutToolInput
    screenshots?: ToolScreenshotUncheckedCreateNestedManyWithoutToolInput
    news?: NewsArticleToolUncheckedCreateNestedManyWithoutToolInput
  }

  export type ToolCreateOrConnectWithoutCategoriesInput = {
    where: ToolWhereUniqueInput
    create: XOR<ToolCreateWithoutCategoriesInput, ToolUncheckedCreateWithoutCategoriesInput>
  }

  export type CategoryCreateWithoutToolsInput = {
    id?: string
    slug: string
    name: string
    description?: string | null
    accent?: string | null
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    news?: NewsArticleCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateWithoutToolsInput = {
    id?: string
    slug: string
    name: string
    description?: string | null
    accent?: string | null
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    news?: NewsArticleUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryCreateOrConnectWithoutToolsInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutToolsInput, CategoryUncheckedCreateWithoutToolsInput>
  }

  export type ToolUpsertWithoutCategoriesInput = {
    update: XOR<ToolUpdateWithoutCategoriesInput, ToolUncheckedUpdateWithoutCategoriesInput>
    create: XOR<ToolCreateWithoutCategoriesInput, ToolUncheckedCreateWithoutCategoriesInput>
    where?: ToolWhereInput
  }

  export type ToolUpdateToOneWithWhereWithoutCategoriesInput = {
    where?: ToolWhereInput
    data: XOR<ToolUpdateWithoutCategoriesInput, ToolUncheckedUpdateWithoutCategoriesInput>
  }

  export type ToolUpdateWithoutCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    tagline?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    websiteUrl?: StringFieldUpdateOperationsInput | string
    docsUrl?: NullableStringFieldUpdateOperationsInput | string | null
    companyName?: StringFieldUpdateOperationsInput | string
    companyUrl?: NullableStringFieldUpdateOperationsInput | string | null
    companyLocation?: NullableStringFieldUpdateOperationsInput | string | null
    pricingModel?: EnumPricingModelFieldUpdateOperationsInput | $Enums.PricingModel
    pricingNote?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumToolStatusFieldUpdateOperationsInput | $Enums.ToolStatus
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    popularityScore?: IntFieldUpdateOperationsInput | number
    launchDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    platforms?: ToolPlatformUpdateManyWithoutToolNestedInput
    capabilities?: ToolCapabilityUpdateManyWithoutToolNestedInput
    useCases?: ToolUseCaseUpdateManyWithoutToolNestedInput
    screenshots?: ToolScreenshotUpdateManyWithoutToolNestedInput
    news?: NewsArticleToolUpdateManyWithoutToolNestedInput
  }

  export type ToolUncheckedUpdateWithoutCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    tagline?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    websiteUrl?: StringFieldUpdateOperationsInput | string
    docsUrl?: NullableStringFieldUpdateOperationsInput | string | null
    companyName?: StringFieldUpdateOperationsInput | string
    companyUrl?: NullableStringFieldUpdateOperationsInput | string | null
    companyLocation?: NullableStringFieldUpdateOperationsInput | string | null
    pricingModel?: EnumPricingModelFieldUpdateOperationsInput | $Enums.PricingModel
    pricingNote?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumToolStatusFieldUpdateOperationsInput | $Enums.ToolStatus
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    popularityScore?: IntFieldUpdateOperationsInput | number
    launchDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    platforms?: ToolPlatformUncheckedUpdateManyWithoutToolNestedInput
    capabilities?: ToolCapabilityUncheckedUpdateManyWithoutToolNestedInput
    useCases?: ToolUseCaseUncheckedUpdateManyWithoutToolNestedInput
    screenshots?: ToolScreenshotUncheckedUpdateManyWithoutToolNestedInput
    news?: NewsArticleToolUncheckedUpdateManyWithoutToolNestedInput
  }

  export type CategoryUpsertWithoutToolsInput = {
    update: XOR<CategoryUpdateWithoutToolsInput, CategoryUncheckedUpdateWithoutToolsInput>
    create: XOR<CategoryCreateWithoutToolsInput, CategoryUncheckedCreateWithoutToolsInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutToolsInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutToolsInput, CategoryUncheckedUpdateWithoutToolsInput>
  }

  export type CategoryUpdateWithoutToolsInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    accent?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    news?: NewsArticleUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateWithoutToolsInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    accent?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    news?: NewsArticleUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type ToolCreateWithoutPlatformsInput = {
    id?: string
    slug: string
    name: string
    tagline: string
    description: string
    logoUrl?: string | null
    websiteUrl: string
    docsUrl?: string | null
    companyName: string
    companyUrl?: string | null
    companyLocation?: string | null
    pricingModel: $Enums.PricingModel
    pricingNote?: string | null
    status?: $Enums.ToolStatus
    isFeatured?: boolean
    isVerified?: boolean
    popularityScore?: number
    launchDate?: Date | string | null
    publishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    categories?: ToolCategoryCreateNestedManyWithoutToolInput
    capabilities?: ToolCapabilityCreateNestedManyWithoutToolInput
    useCases?: ToolUseCaseCreateNestedManyWithoutToolInput
    screenshots?: ToolScreenshotCreateNestedManyWithoutToolInput
    news?: NewsArticleToolCreateNestedManyWithoutToolInput
  }

  export type ToolUncheckedCreateWithoutPlatformsInput = {
    id?: string
    slug: string
    name: string
    tagline: string
    description: string
    logoUrl?: string | null
    websiteUrl: string
    docsUrl?: string | null
    companyName: string
    companyUrl?: string | null
    companyLocation?: string | null
    pricingModel: $Enums.PricingModel
    pricingNote?: string | null
    status?: $Enums.ToolStatus
    isFeatured?: boolean
    isVerified?: boolean
    popularityScore?: number
    launchDate?: Date | string | null
    publishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    categories?: ToolCategoryUncheckedCreateNestedManyWithoutToolInput
    capabilities?: ToolCapabilityUncheckedCreateNestedManyWithoutToolInput
    useCases?: ToolUseCaseUncheckedCreateNestedManyWithoutToolInput
    screenshots?: ToolScreenshotUncheckedCreateNestedManyWithoutToolInput
    news?: NewsArticleToolUncheckedCreateNestedManyWithoutToolInput
  }

  export type ToolCreateOrConnectWithoutPlatformsInput = {
    where: ToolWhereUniqueInput
    create: XOR<ToolCreateWithoutPlatformsInput, ToolUncheckedCreateWithoutPlatformsInput>
  }

  export type PlatformCreateWithoutToolsInput = {
    id?: string
    slug: string
    name: string
    description?: string | null
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PlatformUncheckedCreateWithoutToolsInput = {
    id?: string
    slug: string
    name: string
    description?: string | null
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PlatformCreateOrConnectWithoutToolsInput = {
    where: PlatformWhereUniqueInput
    create: XOR<PlatformCreateWithoutToolsInput, PlatformUncheckedCreateWithoutToolsInput>
  }

  export type ToolUpsertWithoutPlatformsInput = {
    update: XOR<ToolUpdateWithoutPlatformsInput, ToolUncheckedUpdateWithoutPlatformsInput>
    create: XOR<ToolCreateWithoutPlatformsInput, ToolUncheckedCreateWithoutPlatformsInput>
    where?: ToolWhereInput
  }

  export type ToolUpdateToOneWithWhereWithoutPlatformsInput = {
    where?: ToolWhereInput
    data: XOR<ToolUpdateWithoutPlatformsInput, ToolUncheckedUpdateWithoutPlatformsInput>
  }

  export type ToolUpdateWithoutPlatformsInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    tagline?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    websiteUrl?: StringFieldUpdateOperationsInput | string
    docsUrl?: NullableStringFieldUpdateOperationsInput | string | null
    companyName?: StringFieldUpdateOperationsInput | string
    companyUrl?: NullableStringFieldUpdateOperationsInput | string | null
    companyLocation?: NullableStringFieldUpdateOperationsInput | string | null
    pricingModel?: EnumPricingModelFieldUpdateOperationsInput | $Enums.PricingModel
    pricingNote?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumToolStatusFieldUpdateOperationsInput | $Enums.ToolStatus
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    popularityScore?: IntFieldUpdateOperationsInput | number
    launchDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: ToolCategoryUpdateManyWithoutToolNestedInput
    capabilities?: ToolCapabilityUpdateManyWithoutToolNestedInput
    useCases?: ToolUseCaseUpdateManyWithoutToolNestedInput
    screenshots?: ToolScreenshotUpdateManyWithoutToolNestedInput
    news?: NewsArticleToolUpdateManyWithoutToolNestedInput
  }

  export type ToolUncheckedUpdateWithoutPlatformsInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    tagline?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    websiteUrl?: StringFieldUpdateOperationsInput | string
    docsUrl?: NullableStringFieldUpdateOperationsInput | string | null
    companyName?: StringFieldUpdateOperationsInput | string
    companyUrl?: NullableStringFieldUpdateOperationsInput | string | null
    companyLocation?: NullableStringFieldUpdateOperationsInput | string | null
    pricingModel?: EnumPricingModelFieldUpdateOperationsInput | $Enums.PricingModel
    pricingNote?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumToolStatusFieldUpdateOperationsInput | $Enums.ToolStatus
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    popularityScore?: IntFieldUpdateOperationsInput | number
    launchDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: ToolCategoryUncheckedUpdateManyWithoutToolNestedInput
    capabilities?: ToolCapabilityUncheckedUpdateManyWithoutToolNestedInput
    useCases?: ToolUseCaseUncheckedUpdateManyWithoutToolNestedInput
    screenshots?: ToolScreenshotUncheckedUpdateManyWithoutToolNestedInput
    news?: NewsArticleToolUncheckedUpdateManyWithoutToolNestedInput
  }

  export type PlatformUpsertWithoutToolsInput = {
    update: XOR<PlatformUpdateWithoutToolsInput, PlatformUncheckedUpdateWithoutToolsInput>
    create: XOR<PlatformCreateWithoutToolsInput, PlatformUncheckedCreateWithoutToolsInput>
    where?: PlatformWhereInput
  }

  export type PlatformUpdateToOneWithWhereWithoutToolsInput = {
    where?: PlatformWhereInput
    data: XOR<PlatformUpdateWithoutToolsInput, PlatformUncheckedUpdateWithoutToolsInput>
  }

  export type PlatformUpdateWithoutToolsInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlatformUncheckedUpdateWithoutToolsInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ToolCreateWithoutCapabilitiesInput = {
    id?: string
    slug: string
    name: string
    tagline: string
    description: string
    logoUrl?: string | null
    websiteUrl: string
    docsUrl?: string | null
    companyName: string
    companyUrl?: string | null
    companyLocation?: string | null
    pricingModel: $Enums.PricingModel
    pricingNote?: string | null
    status?: $Enums.ToolStatus
    isFeatured?: boolean
    isVerified?: boolean
    popularityScore?: number
    launchDate?: Date | string | null
    publishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    categories?: ToolCategoryCreateNestedManyWithoutToolInput
    platforms?: ToolPlatformCreateNestedManyWithoutToolInput
    useCases?: ToolUseCaseCreateNestedManyWithoutToolInput
    screenshots?: ToolScreenshotCreateNestedManyWithoutToolInput
    news?: NewsArticleToolCreateNestedManyWithoutToolInput
  }

  export type ToolUncheckedCreateWithoutCapabilitiesInput = {
    id?: string
    slug: string
    name: string
    tagline: string
    description: string
    logoUrl?: string | null
    websiteUrl: string
    docsUrl?: string | null
    companyName: string
    companyUrl?: string | null
    companyLocation?: string | null
    pricingModel: $Enums.PricingModel
    pricingNote?: string | null
    status?: $Enums.ToolStatus
    isFeatured?: boolean
    isVerified?: boolean
    popularityScore?: number
    launchDate?: Date | string | null
    publishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    categories?: ToolCategoryUncheckedCreateNestedManyWithoutToolInput
    platforms?: ToolPlatformUncheckedCreateNestedManyWithoutToolInput
    useCases?: ToolUseCaseUncheckedCreateNestedManyWithoutToolInput
    screenshots?: ToolScreenshotUncheckedCreateNestedManyWithoutToolInput
    news?: NewsArticleToolUncheckedCreateNestedManyWithoutToolInput
  }

  export type ToolCreateOrConnectWithoutCapabilitiesInput = {
    where: ToolWhereUniqueInput
    create: XOR<ToolCreateWithoutCapabilitiesInput, ToolUncheckedCreateWithoutCapabilitiesInput>
  }

  export type ToolUpsertWithoutCapabilitiesInput = {
    update: XOR<ToolUpdateWithoutCapabilitiesInput, ToolUncheckedUpdateWithoutCapabilitiesInput>
    create: XOR<ToolCreateWithoutCapabilitiesInput, ToolUncheckedCreateWithoutCapabilitiesInput>
    where?: ToolWhereInput
  }

  export type ToolUpdateToOneWithWhereWithoutCapabilitiesInput = {
    where?: ToolWhereInput
    data: XOR<ToolUpdateWithoutCapabilitiesInput, ToolUncheckedUpdateWithoutCapabilitiesInput>
  }

  export type ToolUpdateWithoutCapabilitiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    tagline?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    websiteUrl?: StringFieldUpdateOperationsInput | string
    docsUrl?: NullableStringFieldUpdateOperationsInput | string | null
    companyName?: StringFieldUpdateOperationsInput | string
    companyUrl?: NullableStringFieldUpdateOperationsInput | string | null
    companyLocation?: NullableStringFieldUpdateOperationsInput | string | null
    pricingModel?: EnumPricingModelFieldUpdateOperationsInput | $Enums.PricingModel
    pricingNote?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumToolStatusFieldUpdateOperationsInput | $Enums.ToolStatus
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    popularityScore?: IntFieldUpdateOperationsInput | number
    launchDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: ToolCategoryUpdateManyWithoutToolNestedInput
    platforms?: ToolPlatformUpdateManyWithoutToolNestedInput
    useCases?: ToolUseCaseUpdateManyWithoutToolNestedInput
    screenshots?: ToolScreenshotUpdateManyWithoutToolNestedInput
    news?: NewsArticleToolUpdateManyWithoutToolNestedInput
  }

  export type ToolUncheckedUpdateWithoutCapabilitiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    tagline?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    websiteUrl?: StringFieldUpdateOperationsInput | string
    docsUrl?: NullableStringFieldUpdateOperationsInput | string | null
    companyName?: StringFieldUpdateOperationsInput | string
    companyUrl?: NullableStringFieldUpdateOperationsInput | string | null
    companyLocation?: NullableStringFieldUpdateOperationsInput | string | null
    pricingModel?: EnumPricingModelFieldUpdateOperationsInput | $Enums.PricingModel
    pricingNote?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumToolStatusFieldUpdateOperationsInput | $Enums.ToolStatus
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    popularityScore?: IntFieldUpdateOperationsInput | number
    launchDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: ToolCategoryUncheckedUpdateManyWithoutToolNestedInput
    platforms?: ToolPlatformUncheckedUpdateManyWithoutToolNestedInput
    useCases?: ToolUseCaseUncheckedUpdateManyWithoutToolNestedInput
    screenshots?: ToolScreenshotUncheckedUpdateManyWithoutToolNestedInput
    news?: NewsArticleToolUncheckedUpdateManyWithoutToolNestedInput
  }

  export type ToolCreateWithoutUseCasesInput = {
    id?: string
    slug: string
    name: string
    tagline: string
    description: string
    logoUrl?: string | null
    websiteUrl: string
    docsUrl?: string | null
    companyName: string
    companyUrl?: string | null
    companyLocation?: string | null
    pricingModel: $Enums.PricingModel
    pricingNote?: string | null
    status?: $Enums.ToolStatus
    isFeatured?: boolean
    isVerified?: boolean
    popularityScore?: number
    launchDate?: Date | string | null
    publishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    categories?: ToolCategoryCreateNestedManyWithoutToolInput
    platforms?: ToolPlatformCreateNestedManyWithoutToolInput
    capabilities?: ToolCapabilityCreateNestedManyWithoutToolInput
    screenshots?: ToolScreenshotCreateNestedManyWithoutToolInput
    news?: NewsArticleToolCreateNestedManyWithoutToolInput
  }

  export type ToolUncheckedCreateWithoutUseCasesInput = {
    id?: string
    slug: string
    name: string
    tagline: string
    description: string
    logoUrl?: string | null
    websiteUrl: string
    docsUrl?: string | null
    companyName: string
    companyUrl?: string | null
    companyLocation?: string | null
    pricingModel: $Enums.PricingModel
    pricingNote?: string | null
    status?: $Enums.ToolStatus
    isFeatured?: boolean
    isVerified?: boolean
    popularityScore?: number
    launchDate?: Date | string | null
    publishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    categories?: ToolCategoryUncheckedCreateNestedManyWithoutToolInput
    platforms?: ToolPlatformUncheckedCreateNestedManyWithoutToolInput
    capabilities?: ToolCapabilityUncheckedCreateNestedManyWithoutToolInput
    screenshots?: ToolScreenshotUncheckedCreateNestedManyWithoutToolInput
    news?: NewsArticleToolUncheckedCreateNestedManyWithoutToolInput
  }

  export type ToolCreateOrConnectWithoutUseCasesInput = {
    where: ToolWhereUniqueInput
    create: XOR<ToolCreateWithoutUseCasesInput, ToolUncheckedCreateWithoutUseCasesInput>
  }

  export type ToolUpsertWithoutUseCasesInput = {
    update: XOR<ToolUpdateWithoutUseCasesInput, ToolUncheckedUpdateWithoutUseCasesInput>
    create: XOR<ToolCreateWithoutUseCasesInput, ToolUncheckedCreateWithoutUseCasesInput>
    where?: ToolWhereInput
  }

  export type ToolUpdateToOneWithWhereWithoutUseCasesInput = {
    where?: ToolWhereInput
    data: XOR<ToolUpdateWithoutUseCasesInput, ToolUncheckedUpdateWithoutUseCasesInput>
  }

  export type ToolUpdateWithoutUseCasesInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    tagline?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    websiteUrl?: StringFieldUpdateOperationsInput | string
    docsUrl?: NullableStringFieldUpdateOperationsInput | string | null
    companyName?: StringFieldUpdateOperationsInput | string
    companyUrl?: NullableStringFieldUpdateOperationsInput | string | null
    companyLocation?: NullableStringFieldUpdateOperationsInput | string | null
    pricingModel?: EnumPricingModelFieldUpdateOperationsInput | $Enums.PricingModel
    pricingNote?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumToolStatusFieldUpdateOperationsInput | $Enums.ToolStatus
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    popularityScore?: IntFieldUpdateOperationsInput | number
    launchDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: ToolCategoryUpdateManyWithoutToolNestedInput
    platforms?: ToolPlatformUpdateManyWithoutToolNestedInput
    capabilities?: ToolCapabilityUpdateManyWithoutToolNestedInput
    screenshots?: ToolScreenshotUpdateManyWithoutToolNestedInput
    news?: NewsArticleToolUpdateManyWithoutToolNestedInput
  }

  export type ToolUncheckedUpdateWithoutUseCasesInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    tagline?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    websiteUrl?: StringFieldUpdateOperationsInput | string
    docsUrl?: NullableStringFieldUpdateOperationsInput | string | null
    companyName?: StringFieldUpdateOperationsInput | string
    companyUrl?: NullableStringFieldUpdateOperationsInput | string | null
    companyLocation?: NullableStringFieldUpdateOperationsInput | string | null
    pricingModel?: EnumPricingModelFieldUpdateOperationsInput | $Enums.PricingModel
    pricingNote?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumToolStatusFieldUpdateOperationsInput | $Enums.ToolStatus
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    popularityScore?: IntFieldUpdateOperationsInput | number
    launchDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: ToolCategoryUncheckedUpdateManyWithoutToolNestedInput
    platforms?: ToolPlatformUncheckedUpdateManyWithoutToolNestedInput
    capabilities?: ToolCapabilityUncheckedUpdateManyWithoutToolNestedInput
    screenshots?: ToolScreenshotUncheckedUpdateManyWithoutToolNestedInput
    news?: NewsArticleToolUncheckedUpdateManyWithoutToolNestedInput
  }

  export type ToolCreateWithoutScreenshotsInput = {
    id?: string
    slug: string
    name: string
    tagline: string
    description: string
    logoUrl?: string | null
    websiteUrl: string
    docsUrl?: string | null
    companyName: string
    companyUrl?: string | null
    companyLocation?: string | null
    pricingModel: $Enums.PricingModel
    pricingNote?: string | null
    status?: $Enums.ToolStatus
    isFeatured?: boolean
    isVerified?: boolean
    popularityScore?: number
    launchDate?: Date | string | null
    publishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    categories?: ToolCategoryCreateNestedManyWithoutToolInput
    platforms?: ToolPlatformCreateNestedManyWithoutToolInput
    capabilities?: ToolCapabilityCreateNestedManyWithoutToolInput
    useCases?: ToolUseCaseCreateNestedManyWithoutToolInput
    news?: NewsArticleToolCreateNestedManyWithoutToolInput
  }

  export type ToolUncheckedCreateWithoutScreenshotsInput = {
    id?: string
    slug: string
    name: string
    tagline: string
    description: string
    logoUrl?: string | null
    websiteUrl: string
    docsUrl?: string | null
    companyName: string
    companyUrl?: string | null
    companyLocation?: string | null
    pricingModel: $Enums.PricingModel
    pricingNote?: string | null
    status?: $Enums.ToolStatus
    isFeatured?: boolean
    isVerified?: boolean
    popularityScore?: number
    launchDate?: Date | string | null
    publishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    categories?: ToolCategoryUncheckedCreateNestedManyWithoutToolInput
    platforms?: ToolPlatformUncheckedCreateNestedManyWithoutToolInput
    capabilities?: ToolCapabilityUncheckedCreateNestedManyWithoutToolInput
    useCases?: ToolUseCaseUncheckedCreateNestedManyWithoutToolInput
    news?: NewsArticleToolUncheckedCreateNestedManyWithoutToolInput
  }

  export type ToolCreateOrConnectWithoutScreenshotsInput = {
    where: ToolWhereUniqueInput
    create: XOR<ToolCreateWithoutScreenshotsInput, ToolUncheckedCreateWithoutScreenshotsInput>
  }

  export type ToolUpsertWithoutScreenshotsInput = {
    update: XOR<ToolUpdateWithoutScreenshotsInput, ToolUncheckedUpdateWithoutScreenshotsInput>
    create: XOR<ToolCreateWithoutScreenshotsInput, ToolUncheckedCreateWithoutScreenshotsInput>
    where?: ToolWhereInput
  }

  export type ToolUpdateToOneWithWhereWithoutScreenshotsInput = {
    where?: ToolWhereInput
    data: XOR<ToolUpdateWithoutScreenshotsInput, ToolUncheckedUpdateWithoutScreenshotsInput>
  }

  export type ToolUpdateWithoutScreenshotsInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    tagline?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    websiteUrl?: StringFieldUpdateOperationsInput | string
    docsUrl?: NullableStringFieldUpdateOperationsInput | string | null
    companyName?: StringFieldUpdateOperationsInput | string
    companyUrl?: NullableStringFieldUpdateOperationsInput | string | null
    companyLocation?: NullableStringFieldUpdateOperationsInput | string | null
    pricingModel?: EnumPricingModelFieldUpdateOperationsInput | $Enums.PricingModel
    pricingNote?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumToolStatusFieldUpdateOperationsInput | $Enums.ToolStatus
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    popularityScore?: IntFieldUpdateOperationsInput | number
    launchDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: ToolCategoryUpdateManyWithoutToolNestedInput
    platforms?: ToolPlatformUpdateManyWithoutToolNestedInput
    capabilities?: ToolCapabilityUpdateManyWithoutToolNestedInput
    useCases?: ToolUseCaseUpdateManyWithoutToolNestedInput
    news?: NewsArticleToolUpdateManyWithoutToolNestedInput
  }

  export type ToolUncheckedUpdateWithoutScreenshotsInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    tagline?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    websiteUrl?: StringFieldUpdateOperationsInput | string
    docsUrl?: NullableStringFieldUpdateOperationsInput | string | null
    companyName?: StringFieldUpdateOperationsInput | string
    companyUrl?: NullableStringFieldUpdateOperationsInput | string | null
    companyLocation?: NullableStringFieldUpdateOperationsInput | string | null
    pricingModel?: EnumPricingModelFieldUpdateOperationsInput | $Enums.PricingModel
    pricingNote?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumToolStatusFieldUpdateOperationsInput | $Enums.ToolStatus
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    popularityScore?: IntFieldUpdateOperationsInput | number
    launchDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: ToolCategoryUncheckedUpdateManyWithoutToolNestedInput
    platforms?: ToolPlatformUncheckedUpdateManyWithoutToolNestedInput
    capabilities?: ToolCapabilityUncheckedUpdateManyWithoutToolNestedInput
    useCases?: ToolUseCaseUncheckedUpdateManyWithoutToolNestedInput
    news?: NewsArticleToolUncheckedUpdateManyWithoutToolNestedInput
  }

  export type CategoryCreateWithoutNewsInput = {
    id?: string
    slug: string
    name: string
    description?: string | null
    accent?: string | null
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    tools?: ToolCategoryCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateWithoutNewsInput = {
    id?: string
    slug: string
    name: string
    description?: string | null
    accent?: string | null
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    tools?: ToolCategoryUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryCreateOrConnectWithoutNewsInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutNewsInput, CategoryUncheckedCreateWithoutNewsInput>
  }

  export type NewsArticleToolCreateWithoutArticleInput = {
    createdAt?: Date | string
    tool: ToolCreateNestedOneWithoutNewsInput
  }

  export type NewsArticleToolUncheckedCreateWithoutArticleInput = {
    toolId: string
    createdAt?: Date | string
  }

  export type NewsArticleToolCreateOrConnectWithoutArticleInput = {
    where: NewsArticleToolWhereUniqueInput
    create: XOR<NewsArticleToolCreateWithoutArticleInput, NewsArticleToolUncheckedCreateWithoutArticleInput>
  }

  export type NewsArticleToolCreateManyArticleInputEnvelope = {
    data: NewsArticleToolCreateManyArticleInput | NewsArticleToolCreateManyArticleInput[]
    skipDuplicates?: boolean
  }

  export type CategoryUpsertWithoutNewsInput = {
    update: XOR<CategoryUpdateWithoutNewsInput, CategoryUncheckedUpdateWithoutNewsInput>
    create: XOR<CategoryCreateWithoutNewsInput, CategoryUncheckedCreateWithoutNewsInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutNewsInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutNewsInput, CategoryUncheckedUpdateWithoutNewsInput>
  }

  export type CategoryUpdateWithoutNewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    accent?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tools?: ToolCategoryUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateWithoutNewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    accent?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tools?: ToolCategoryUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type NewsArticleToolUpsertWithWhereUniqueWithoutArticleInput = {
    where: NewsArticleToolWhereUniqueInput
    update: XOR<NewsArticleToolUpdateWithoutArticleInput, NewsArticleToolUncheckedUpdateWithoutArticleInput>
    create: XOR<NewsArticleToolCreateWithoutArticleInput, NewsArticleToolUncheckedCreateWithoutArticleInput>
  }

  export type NewsArticleToolUpdateWithWhereUniqueWithoutArticleInput = {
    where: NewsArticleToolWhereUniqueInput
    data: XOR<NewsArticleToolUpdateWithoutArticleInput, NewsArticleToolUncheckedUpdateWithoutArticleInput>
  }

  export type NewsArticleToolUpdateManyWithWhereWithoutArticleInput = {
    where: NewsArticleToolScalarWhereInput
    data: XOR<NewsArticleToolUpdateManyMutationInput, NewsArticleToolUncheckedUpdateManyWithoutArticleInput>
  }

  export type NewsArticleCreateWithoutToolsInput = {
    id?: string
    slug: string
    title: string
    excerpt: string
    body: string
    coverImageUrl?: string | null
    sourceName: string
    sourceUrl?: string | null
    authorName?: string | null
    topic: string
    readingMinutes?: number
    status?: $Enums.NewsStatus
    isFeatured?: boolean
    publishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    category?: CategoryCreateNestedOneWithoutNewsInput
  }

  export type NewsArticleUncheckedCreateWithoutToolsInput = {
    id?: string
    slug: string
    title: string
    excerpt: string
    body: string
    coverImageUrl?: string | null
    sourceName: string
    sourceUrl?: string | null
    authorName?: string | null
    topic: string
    readingMinutes?: number
    status?: $Enums.NewsStatus
    isFeatured?: boolean
    publishedAt?: Date | string | null
    categoryId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NewsArticleCreateOrConnectWithoutToolsInput = {
    where: NewsArticleWhereUniqueInput
    create: XOR<NewsArticleCreateWithoutToolsInput, NewsArticleUncheckedCreateWithoutToolsInput>
  }

  export type ToolCreateWithoutNewsInput = {
    id?: string
    slug: string
    name: string
    tagline: string
    description: string
    logoUrl?: string | null
    websiteUrl: string
    docsUrl?: string | null
    companyName: string
    companyUrl?: string | null
    companyLocation?: string | null
    pricingModel: $Enums.PricingModel
    pricingNote?: string | null
    status?: $Enums.ToolStatus
    isFeatured?: boolean
    isVerified?: boolean
    popularityScore?: number
    launchDate?: Date | string | null
    publishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    categories?: ToolCategoryCreateNestedManyWithoutToolInput
    platforms?: ToolPlatformCreateNestedManyWithoutToolInput
    capabilities?: ToolCapabilityCreateNestedManyWithoutToolInput
    useCases?: ToolUseCaseCreateNestedManyWithoutToolInput
    screenshots?: ToolScreenshotCreateNestedManyWithoutToolInput
  }

  export type ToolUncheckedCreateWithoutNewsInput = {
    id?: string
    slug: string
    name: string
    tagline: string
    description: string
    logoUrl?: string | null
    websiteUrl: string
    docsUrl?: string | null
    companyName: string
    companyUrl?: string | null
    companyLocation?: string | null
    pricingModel: $Enums.PricingModel
    pricingNote?: string | null
    status?: $Enums.ToolStatus
    isFeatured?: boolean
    isVerified?: boolean
    popularityScore?: number
    launchDate?: Date | string | null
    publishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    categories?: ToolCategoryUncheckedCreateNestedManyWithoutToolInput
    platforms?: ToolPlatformUncheckedCreateNestedManyWithoutToolInput
    capabilities?: ToolCapabilityUncheckedCreateNestedManyWithoutToolInput
    useCases?: ToolUseCaseUncheckedCreateNestedManyWithoutToolInput
    screenshots?: ToolScreenshotUncheckedCreateNestedManyWithoutToolInput
  }

  export type ToolCreateOrConnectWithoutNewsInput = {
    where: ToolWhereUniqueInput
    create: XOR<ToolCreateWithoutNewsInput, ToolUncheckedCreateWithoutNewsInput>
  }

  export type NewsArticleUpsertWithoutToolsInput = {
    update: XOR<NewsArticleUpdateWithoutToolsInput, NewsArticleUncheckedUpdateWithoutToolsInput>
    create: XOR<NewsArticleCreateWithoutToolsInput, NewsArticleUncheckedCreateWithoutToolsInput>
    where?: NewsArticleWhereInput
  }

  export type NewsArticleUpdateToOneWithWhereWithoutToolsInput = {
    where?: NewsArticleWhereInput
    data: XOR<NewsArticleUpdateWithoutToolsInput, NewsArticleUncheckedUpdateWithoutToolsInput>
  }

  export type NewsArticleUpdateWithoutToolsInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    excerpt?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    coverImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    sourceName?: StringFieldUpdateOperationsInput | string
    sourceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    authorName?: NullableStringFieldUpdateOperationsInput | string | null
    topic?: StringFieldUpdateOperationsInput | string
    readingMinutes?: IntFieldUpdateOperationsInput | number
    status?: EnumNewsStatusFieldUpdateOperationsInput | $Enums.NewsStatus
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneWithoutNewsNestedInput
  }

  export type NewsArticleUncheckedUpdateWithoutToolsInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    excerpt?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    coverImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    sourceName?: StringFieldUpdateOperationsInput | string
    sourceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    authorName?: NullableStringFieldUpdateOperationsInput | string | null
    topic?: StringFieldUpdateOperationsInput | string
    readingMinutes?: IntFieldUpdateOperationsInput | number
    status?: EnumNewsStatusFieldUpdateOperationsInput | $Enums.NewsStatus
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ToolUpsertWithoutNewsInput = {
    update: XOR<ToolUpdateWithoutNewsInput, ToolUncheckedUpdateWithoutNewsInput>
    create: XOR<ToolCreateWithoutNewsInput, ToolUncheckedCreateWithoutNewsInput>
    where?: ToolWhereInput
  }

  export type ToolUpdateToOneWithWhereWithoutNewsInput = {
    where?: ToolWhereInput
    data: XOR<ToolUpdateWithoutNewsInput, ToolUncheckedUpdateWithoutNewsInput>
  }

  export type ToolUpdateWithoutNewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    tagline?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    websiteUrl?: StringFieldUpdateOperationsInput | string
    docsUrl?: NullableStringFieldUpdateOperationsInput | string | null
    companyName?: StringFieldUpdateOperationsInput | string
    companyUrl?: NullableStringFieldUpdateOperationsInput | string | null
    companyLocation?: NullableStringFieldUpdateOperationsInput | string | null
    pricingModel?: EnumPricingModelFieldUpdateOperationsInput | $Enums.PricingModel
    pricingNote?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumToolStatusFieldUpdateOperationsInput | $Enums.ToolStatus
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    popularityScore?: IntFieldUpdateOperationsInput | number
    launchDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: ToolCategoryUpdateManyWithoutToolNestedInput
    platforms?: ToolPlatformUpdateManyWithoutToolNestedInput
    capabilities?: ToolCapabilityUpdateManyWithoutToolNestedInput
    useCases?: ToolUseCaseUpdateManyWithoutToolNestedInput
    screenshots?: ToolScreenshotUpdateManyWithoutToolNestedInput
  }

  export type ToolUncheckedUpdateWithoutNewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    tagline?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    websiteUrl?: StringFieldUpdateOperationsInput | string
    docsUrl?: NullableStringFieldUpdateOperationsInput | string | null
    companyName?: StringFieldUpdateOperationsInput | string
    companyUrl?: NullableStringFieldUpdateOperationsInput | string | null
    companyLocation?: NullableStringFieldUpdateOperationsInput | string | null
    pricingModel?: EnumPricingModelFieldUpdateOperationsInput | $Enums.PricingModel
    pricingNote?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumToolStatusFieldUpdateOperationsInput | $Enums.ToolStatus
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    popularityScore?: IntFieldUpdateOperationsInput | number
    launchDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: ToolCategoryUncheckedUpdateManyWithoutToolNestedInput
    platforms?: ToolPlatformUncheckedUpdateManyWithoutToolNestedInput
    capabilities?: ToolCapabilityUncheckedUpdateManyWithoutToolNestedInput
    useCases?: ToolUseCaseUncheckedUpdateManyWithoutToolNestedInput
    screenshots?: ToolScreenshotUncheckedUpdateManyWithoutToolNestedInput
  }

  export type ToolCategoryCreateManyCategoryInput = {
    toolId: string
    createdAt?: Date | string
  }

  export type NewsArticleCreateManyCategoryInput = {
    id?: string
    slug: string
    title: string
    excerpt: string
    body: string
    coverImageUrl?: string | null
    sourceName: string
    sourceUrl?: string | null
    authorName?: string | null
    topic: string
    readingMinutes?: number
    status?: $Enums.NewsStatus
    isFeatured?: boolean
    publishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ToolCategoryUpdateWithoutCategoryInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tool?: ToolUpdateOneRequiredWithoutCategoriesNestedInput
  }

  export type ToolCategoryUncheckedUpdateWithoutCategoryInput = {
    toolId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ToolCategoryUncheckedUpdateManyWithoutCategoryInput = {
    toolId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NewsArticleUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    excerpt?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    coverImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    sourceName?: StringFieldUpdateOperationsInput | string
    sourceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    authorName?: NullableStringFieldUpdateOperationsInput | string | null
    topic?: StringFieldUpdateOperationsInput | string
    readingMinutes?: IntFieldUpdateOperationsInput | number
    status?: EnumNewsStatusFieldUpdateOperationsInput | $Enums.NewsStatus
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tools?: NewsArticleToolUpdateManyWithoutArticleNestedInput
  }

  export type NewsArticleUncheckedUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    excerpt?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    coverImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    sourceName?: StringFieldUpdateOperationsInput | string
    sourceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    authorName?: NullableStringFieldUpdateOperationsInput | string | null
    topic?: StringFieldUpdateOperationsInput | string
    readingMinutes?: IntFieldUpdateOperationsInput | number
    status?: EnumNewsStatusFieldUpdateOperationsInput | $Enums.NewsStatus
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tools?: NewsArticleToolUncheckedUpdateManyWithoutArticleNestedInput
  }

  export type NewsArticleUncheckedUpdateManyWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    excerpt?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    coverImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    sourceName?: StringFieldUpdateOperationsInput | string
    sourceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    authorName?: NullableStringFieldUpdateOperationsInput | string | null
    topic?: StringFieldUpdateOperationsInput | string
    readingMinutes?: IntFieldUpdateOperationsInput | number
    status?: EnumNewsStatusFieldUpdateOperationsInput | $Enums.NewsStatus
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ToolPlatformCreateManyPlatformInput = {
    toolId: string
    createdAt?: Date | string
  }

  export type ToolPlatformUpdateWithoutPlatformInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tool?: ToolUpdateOneRequiredWithoutPlatformsNestedInput
  }

  export type ToolPlatformUncheckedUpdateWithoutPlatformInput = {
    toolId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ToolPlatformUncheckedUpdateManyWithoutPlatformInput = {
    toolId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ToolCategoryCreateManyToolInput = {
    categoryId: string
    createdAt?: Date | string
  }

  export type ToolPlatformCreateManyToolInput = {
    platformId: string
    createdAt?: Date | string
  }

  export type ToolCapabilityCreateManyToolInput = {
    id?: string
    title: string
    summary?: string | null
    sortOrder?: number
    createdAt?: Date | string
  }

  export type ToolUseCaseCreateManyToolInput = {
    id?: string
    title: string
    summary?: string | null
    sortOrder?: number
    createdAt?: Date | string
  }

  export type ToolScreenshotCreateManyToolInput = {
    id?: string
    imageUrl: string
    altText: string
    caption?: string | null
    sortOrder?: number
    createdAt?: Date | string
  }

  export type NewsArticleToolCreateManyToolInput = {
    articleId: string
    createdAt?: Date | string
  }

  export type ToolCategoryUpdateWithoutToolInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneRequiredWithoutToolsNestedInput
  }

  export type ToolCategoryUncheckedUpdateWithoutToolInput = {
    categoryId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ToolCategoryUncheckedUpdateManyWithoutToolInput = {
    categoryId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ToolPlatformUpdateWithoutToolInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    platform?: PlatformUpdateOneRequiredWithoutToolsNestedInput
  }

  export type ToolPlatformUncheckedUpdateWithoutToolInput = {
    platformId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ToolPlatformUncheckedUpdateManyWithoutToolInput = {
    platformId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ToolCapabilityUpdateWithoutToolInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ToolCapabilityUncheckedUpdateWithoutToolInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ToolCapabilityUncheckedUpdateManyWithoutToolInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ToolUseCaseUpdateWithoutToolInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ToolUseCaseUncheckedUpdateWithoutToolInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ToolUseCaseUncheckedUpdateManyWithoutToolInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ToolScreenshotUpdateWithoutToolInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    altText?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ToolScreenshotUncheckedUpdateWithoutToolInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    altText?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ToolScreenshotUncheckedUpdateManyWithoutToolInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    altText?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NewsArticleToolUpdateWithoutToolInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    article?: NewsArticleUpdateOneRequiredWithoutToolsNestedInput
  }

  export type NewsArticleToolUncheckedUpdateWithoutToolInput = {
    articleId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NewsArticleToolUncheckedUpdateManyWithoutToolInput = {
    articleId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NewsArticleToolCreateManyArticleInput = {
    toolId: string
    createdAt?: Date | string
  }

  export type NewsArticleToolUpdateWithoutArticleInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tool?: ToolUpdateOneRequiredWithoutNewsNestedInput
  }

  export type NewsArticleToolUncheckedUpdateWithoutArticleInput = {
    toolId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NewsArticleToolUncheckedUpdateManyWithoutArticleInput = {
    toolId?: StringFieldUpdateOperationsInput | string
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