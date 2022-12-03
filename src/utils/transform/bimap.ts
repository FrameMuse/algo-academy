/* eslint-disable @typescript-eslint/ban-types */


/**
 * This class represent keys and values swapping.
 * 
 * ### Research
 * - https://www.google.com/search?q=bidirectional+map+js&oq=bidirectional+map+js&aqs=chrome..69i57.2532j0j7&sourceid=chrome&ie=UTF-8
 * - https://www.google.com/search?q=bilateral+mapping+npm
 * - https://startfunction.com/2020/11/26/bidirectional-map-javascript/#initialize
 * - https://startfunction.com/bidirectional-map-javascript/
 * - https://www.npmjs.com/package/bi-directional-map
 */
class BiMap<A1 extends keyof never, A2 extends keyof never> {
  protected forwardMap: Record<A1, A2>
  protected backwardMap: Record<A2, A1>

  constructor(map: Record<A1, A2>) {
    const mapKeys = Object.keys(map) as A1[]

    this.forwardMap = { ...map }
    this.backwardMap = mapKeys.reduce((result, key) => ({ ...result, [map[key]]: key }), {} as Record<A2, A1>)
  }

  public forward(key: A1): A2 {
    return this.forwardMap[key]
  }

  public backward(key: A2): A1 {
    return this.backwardMap[key]
  }
}






// type SnakeToCamelCase<S> = S extends `${infer Start}_${infer Rest}` ? `${Start}${Capitalize<SnakeToCamelCase<Rest>>}` : S
// // type SnakeToCamelCase__TEST__ = SnakeToCamelCase<"my_account_profile"> // myAccountProfile

// class BiMapKeys<O, F extends { [K in keyof O]?: FK } = {}, FK extends keyof never = keyof never> {
//   private forwardMap: F
//   // private backwardMap: Record<A2, A1>

//   constructor(map: F) {
//     this.forwardMap = map
//   }

//   public mapForward<$O extends Partial<O>>(i: $O): {
//     [K in keyof $O as NonNullable<(F[(K extends keyof F ? K : never)])>]: $O[K]
//   } {
//     return i as never
//   }
// }

// const lessonPreviewBiMap = new BiMapKeys<APISchemas.Chapter>({
//   name: "title",
//   learning_list: "learningList",
//   id: "id",
//   order_number: "orderNumber",
//   practice_list: "practiceList",
//   user_topic: "userTopic"
// })

// const asd = lessonPreviewBiMap.mapForward({ id: "123123", learning_list: [] })
// asd

export default BiMap
