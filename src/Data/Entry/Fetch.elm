module Data.Entry.Fetch exposing (fetchEntry)

import Http
import Msg exposing (Msg(..))


fetchEntry : String -> Cmd Msg
fetchEntry name =
    Http.get
        { url =
            "/assets/entries/"
                ++ name
                ++ ".json"
        , expect = Http.expectString UpdateEntry
        }
