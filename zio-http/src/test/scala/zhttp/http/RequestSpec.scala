package zhttp.http

import zhttp.internal.HttpGen
import zio.test.Assertion._
import zio.test._

object RequestSpec extends DefaultRunnableSpec {
  def spec = suite("Request")(
    suite("toString") {
      testM("should produce string representation of a request") {
        check(HttpGen.request) { req =>
          assert(req.toString)(
            equalTo(s"Request(${req.version}, ${req.method}, ${req.url}, ${req.headers}, ${req.remoteAddress})"),
          )
        }
      } +
        testM("should produce string representation of a parameterized request") {
          check(HttpGen.parameterizedRequest(Gen.alphaNumericString)) { req =>
            assert(req.toString)(
              equalTo(
                s"ParameterizedRequest(Request(${req.version}, ${req.method}, ${req.url}, ${req.headers}, ${req.remoteAddress}), ${req.params})",
              ),
            )
          }
        }
    },
  )
}
