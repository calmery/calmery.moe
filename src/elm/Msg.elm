module Msg exposing (Msg(..))

import Browser exposing (UrlRequest)
import Http exposing (Error)
import Url exposing (Url)


type Msg
    = UpdateProfile (Result Error String)
    | UpdatePage (Result Error String)
    | LinkClicked UrlRequest
    | UrlChanged Url
