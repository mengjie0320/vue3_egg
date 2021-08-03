const { toString } = Object.prototype;

/**
 * @description: 判断值是否未某个类型
 */
export function is(val: unknown, type: string) {
  return toString.call(val) === `[object ${type}]`;
}

/**
 * @description:  是否为函数
 */
export function isFunction<T = Function>(val: unknown): val is T {
  return is(val, 'Function');
}

/**
 * @description: 是否已定义
 */
export const isDef = <T = unknown>(val?: T): val is T => typeof val !== 'undefined';

export const isUnDef = <T = unknown>(val?: T): val is T => !isDef(val);
/**
 * @description: 是否为对象
 */
export const isObject = (val: any): val is Record<any, any> => val !== null && is(val, 'Object');

/**
 * @description:  是否为时间
 */
export function isDate(val: unknown): val is Date {
  return is(val, 'Date');
}

/**
 * @description:  是否为数值
 */
export function isNumber(val: unknown): val is number {
  return is(val, 'Number');
}
/**
 * @description:  是否为AsyncFunction
 */
export function isAsyncFunction<T = any>(val: unknown): val is Promise<T> {
  return is(val, 'AsyncFunction');
}
/**
 * @description:  是否为promise
 */
export function isPromise<T = any>(val: unknown): val is Promise<T> {
  return is(val, 'Promise') && isObject(val) && isFunction(val.then) && isFunction(val.catch);
}

/**
 * @description:  是否为字符串
 */
export function isString(val: unknown): val is string {
  return is(val, 'String');
}

/**
 * @description:  是否为boolean类型
 */
export function isBoolean(val: unknown): val is boolean {
  return is(val, 'Boolean');
}

/**
 * @description:  是否为数组
 */
export function isArray(val: any): val is Array<any> {
  return val && Array.isArray(val);
}

/**
 * @description: 是否客户端
 */
export const isClient = () => typeof window !== 'undefined';

/**
 * @description: 是否为浏览器
 */
export const isWindow = (val: any): val is Window => typeof window !== 'undefined' && is(val, 'Window');

export const isElement = (val: unknown): val is Element => isObject(val) && !!val.tagName;

export const isServer = typeof window === 'undefined';

// 是否为图片节点
export function isImageDom(o: Element) {
  return o && ['IMAGE', 'IMG'].includes(o.tagName);
}

/**
 * @description: 是否为正式环境
*/
export const isProduction = (() => window.location.host === 'prom.cf.com')();
