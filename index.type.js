/**
 * @description - declare type definition
 * @author - bornkiller <hjj491229492@hotmail.com>
 */

/**
 * @typedef {object} Observable
 *
 * @property {function} subscribe - interface for subscriber
 * @property {function} next - transfer info into subscriber
 */

/**
 * @typedef {object} Observer
 *
 * @property {Symbol} identity - unique identity for specific observer
 * @property {function} next - info receiver
 *
 * @description - internal standard observer
 */

/**
 * @typedef {object} Subscription
 *
 * @property {function} unsubscribe - cancel the subscribe
 *
 * @description - unique record for the subscribe
 */
