module Tests exposing (all)

import Expect exposing (equal)
import Test exposing (Test, describe, test)


all : Test
all =
    describe "Elm Tests"
        [ test "Dummy" <|
            \_ ->
                Expect.equal True True
        ]
