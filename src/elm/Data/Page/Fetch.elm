module Data.Page.Fetch exposing (fetchPage)

import Http exposing (getString, send)
import Msg exposing (Msg(..))


fetchPage : String -> Cmd Msg
fetchPage name =
    "/entries/"
        ++ name
        ++ ".yml"
        |> getString
        |> send UpdatePage
