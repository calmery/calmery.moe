module Msg exposing (Msg(..))

import Browser exposing (UrlRequest(..))
import Http exposing (Error)
import Url exposing (Url)


type Msg
    = UpdateEntries (Result Error String)
    | UpdateEntry (Result Error String)
    | OnUrlRequest UrlRequest
    | OnUrlChange Url
