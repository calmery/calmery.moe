port module Ports exposing (fullPage, fullPageSectionChanged)


port fullPageSectionChanged : (Int -> msg) -> Sub msg


port fullPage : Int -> Cmd msg
