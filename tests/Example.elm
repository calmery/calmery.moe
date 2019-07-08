module Example exposing (suite)

import Expect exposing (Expectation)
import Fuzz exposing (Fuzzer, int, list, string)
import Test exposing (..)


suite : Test
suite =
    describe "Elm Tests"
        [ test "Update" <|
            \_ ->
                let
                    value =
                        1
                in
                Expect.equal value 1
        ]
