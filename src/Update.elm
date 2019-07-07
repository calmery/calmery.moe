module Update exposing (update)

import Browser exposing (UrlRequest(..))
import Browser.Navigation exposing (load, pushUrl)
import Data.Entries.Decoder exposing (decodeEntries)
import Data.Entry.Decoder exposing (decodeEntry)
import Data.EnvironmentVariables exposing (get)
import Helper exposing (fetchFromUrlPath)
import Model exposing (Model)
import Msg exposing (Msg(..))
import Route exposing (parseUrl)
import Url exposing (Url)


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        UpdateEntry (Ok response) ->
            ( { model
                | entry =
                    case decodeEntry response of
                        Ok entry ->
                            { isFetching = False
                            , data = Just entry
                            }

                        Err _ ->
                            { isFetching = False
                            , data = Nothing
                            }
              }
            , Cmd.none
            )

        UpdateEntry (Err _) ->
            ( { model
                | entry =
                    { isFetching = False
                    , data = Nothing
                    }
              }
            , Cmd.none
            )

        UpdateEntries (Ok response) ->
            ( { model
                | entries =
                    case decodeEntries response of
                        Ok entries ->
                            { isFetching = False
                            , data = Just entries
                            }

                        Err _ ->
                            { isFetching = False
                            , data = Nothing
                            }
              }
            , Cmd.none
            )

        UpdateEntries (Err _) ->
            ( { model
                | entries =
                    { isFetching = False
                    , data = Nothing
                    }
              }
            , Cmd.none
            )

        OnUrlRequest urlRequest ->
            case urlRequest of
                Internal url ->
                    ( model
                    , Cmd.batch
                        [ pushUrl model.key (Url.toString url)
                        ]
                    )

                External href ->
                    ( model, load href )

        OnUrlChange url ->
            let
                route =
                    parseUrl url
            in
            ( { model | route = route }, fetchFromUrlPath url )
