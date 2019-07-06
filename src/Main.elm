module Main exposing (main)

import Browser exposing (application)
import Browser.Navigation exposing (Key)
import Flags exposing (decodeFlags)
import Html exposing (text)
import Maybe exposing (andThen)
import Model exposing (Model, initialModel)
import Route exposing (parseUrl)
import Tuple exposing (first, second)
import Update exposing (Msg(..), update)
import Url exposing (Url)
import View exposing (view)


main : Program String Model Msg
main =
    application
        { init = init
        , view = view
        , update = update
        , subscriptions = subscriptions
        , onUrlRequest = OnUrlRequest
        , onUrlChange = \url -> updateUrl url |> OnUrlChange
        }


init : String -> Url -> Key -> ( Model, Cmd Msg )
init flags url key =
    let
        route =
            updateUrl url
                |> parseUrl
    in
    ( initialModel (decodeFlags flags) key route
    , Cmd.none
    )


subscriptions : Model -> Sub Msg
subscriptions _ =
    Sub.none



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
