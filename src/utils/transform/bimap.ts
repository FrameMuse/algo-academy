/**
 * This class represent keys and values mapping (swapping).
 * 
 * ### Research
 * - https://www.google.com/search?q=bidirectional+map+js&oq=bidirectional+map+js&aqs=chrome..69i57.2532j0j7&sourceid=chrome&ie=UTF-8
 * - https://www.google.com/search?q=bilateral+mapping+npm
 * - https://startfunction.com/2020/11/26/bidirectional-map-javascript/#initialize
 * - https://startfunction.com/bidirectional-map-javascript/
 * - https://www.npmjs.com/package/bi-directional-map
 */
class BiMap<A1 extends keyof never, A2 extends keyof never> {
  private forwardMap: Record<A1, A2>
  private backwardMap: Record<A2, A1>

  constructor(mapping: Record<A1, A2>) {
    const mappingKeys = Object.keys(mapping) as A1[]

    this.forwardMap = { ...mapping }
    this.backwardMap = mappingKeys.reduce((result, key) => ({ ...result, [mapping[key]]: key }), {} as Record<A2, A1>)
  }

  public mapForward(key: A1): A2 {
    return this.forwardMap[key]
  }

  public mapBackward(key: A2): A1 {
    return this.backwardMap[key]
  }
}

export default BiMap
