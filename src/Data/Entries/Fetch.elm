module Data.Entries.Fetch exposing (fetchEntries)

import Http
import Msg exposing (Msg(..))


fetchEntries : Cmd Msg
fetchEntries =
    Http.get
        { url =
            "/assets/entries.yml"
        , expect = Http.expectString UpdateEntries
        }
