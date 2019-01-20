module Tests exposing (all)

import Expect exposing (equal)
import Test exposing (Test, describe, test)
import Tuple exposing (first)
import Update exposing (Msg(..), update)


all : Test
all =
    describe "Elm Tests"
        [ test "Dummy" <|
            \_ ->
                Expect.equal True True
        ]
