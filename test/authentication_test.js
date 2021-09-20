/**
 * [authentication_test.js]
 * encoding=utf-8
 */


var chai = require("chai");
var assert = chai.assert;
var expect = chai.expect;
var sinon = require("sinon");
var shouldFulfilled = require("promise-test-helper").shouldFulfilled;
var shouldRejected  = require("promise-test-helper").shouldRejected;

var target = require("../src/authentication.js");
const _sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));




describe( "authentication.js", function(){
    /**
     * @type テスト毎に前処理する。
     */
    beforeEach(function(){
    });
    /**
     * @type テスト毎に後処理する。
     */
    afterEach(function(){
    });

    describe("::isOwnerValid()", function() {
        // ここからテスト。
        it("パスワードが正しい場合", function(){
            var isOwnerValid = target.isOwnerValid;
            var getQuery = {"pass":"ss1met1j"};
            var result = isOwnerValid( getQuery );
            await _sleep(2000);
            assert( result, "trueが返却されること" )
        });
        it("パスワードが不正の場合");
    });
});


