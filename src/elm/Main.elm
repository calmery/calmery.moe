module Main exposing (main)

import Browser exposing (application)
import Browser.Navigation exposing (Key)
import Data.Profile.Fetch exposing (fetchProfile)
import Helper exposing (fetchFromUrlPath, isPageUrl)
import Model exposing (Model, initialModel)
import Msg exposing (Msg(..))
import Update exposing (update)
import Url exposing (Url)
import View exposing (view)


main : Program () Model Msg
main =
    Browser.application
        { init = init
        , view = view
        , update = update
        , subscriptions = always Sub.none
        , onUrlRequest = LinkClicked
        , onUrlChange = \url -> updateUrl url |> UrlChanged
        }


init : () -> Url -> Key -> ( Model, Cmd Msg )
init () url key =
    let
        initialUrl =
            updateUrl url
    in
    ( initialModel key initialUrl
    , Cmd.batch [ fetchFromUrlPath initialUrl, fetchProfile ]
    )



-- Routing


updateUrl : Url -> Url
updateUrl url =
    pathFromFragment url
        |> fixPathAndQuery


pathFromFragment : Url -> Url
pathFromFragment url =
    { url
        | path = Maybe.withDefault "/" url.fragment
        , fragment = Nothing
    }


fixPathAndQuery : Url -> Url
fixPathAndQuery url =
    let
        ( path, query ) =
            case String.split "?" url.path of
                p :: q :: [] ->
                    ( p, Just q )

                _ ->
                    ( url.path, url.query )
    in
    { url
        | path = path
        , query = query
    }
