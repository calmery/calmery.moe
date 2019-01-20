module Update exposing (update)

import Browser exposing (UrlRequest(..))
import Browser.Navigation exposing (load, pushUrl)
import Data.Page.Decoder exposing (decodePage)
import Data.Profile.Decoder exposing (decodeProfile)
import Helper exposing (fetchFromUrlPath, isPageUrl)
import Model exposing (Model)
import Msg exposing (Msg(..))
import Url


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        UpdateProfile (Ok response) ->
            ( { model
                | profile =
                    case decodeProfile response of
                        Ok profile ->
                            { isFetching = False
                            , data = Just profile
                            }

                        Err _ ->
                            { isFetching = False
                            , data = Nothing
                            }
              }
            , Cmd.none
            )

        UpdateProfile (Err _) ->
            ( { model
                | profile =
                    { isFetching = False
                    , data = Nothing
                    }
              }
            , Cmd.none
            )

        UpdatePage (Ok response) ->
            ( { model
                | entry =
                    case decodePage response of
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

        UpdatePage (Err _) ->
            ( { model
                | entry =
                    { isFetching = False
                    , data = Nothing
                    }
              }
            , Cmd.none
            )

        LinkClicked urlRequest ->
            case urlRequest of
                Internal url ->
                    ( model, pushUrl model.key (Url.toString url) )

                External href ->
                    ( model, load href )

        UrlChanged url ->
            ( { model
                | url = url
                , entry =
                    { isFetching = True
                    , data = Nothing
                    }
              }
            , fetchFromUrlPath url
            )
