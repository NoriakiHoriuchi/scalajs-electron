package tutorial.webapp

import scala.scalajs.js.JSApp
object TutorialApp extends JSApp {
    def main(): Unit = {

        List(1 to 100).foreach { _ =>
            println("hello world!")
        }
    }
}
