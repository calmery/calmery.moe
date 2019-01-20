module Tests exposing (..)

import Test exposing (Test, test, describe)
import Expect exposing (equal)
import Tuple exposing (first)
import Update exposing (Msg(..), update)


all : Test
all =
    describe "Elm Tests"
        [ test "Update" <|
            \_ ->
                let
                    updatedModel =
                        first (update NoOp "Hello World")
                in
                    Expect.equal updatedModel "Hello World"
        ]
