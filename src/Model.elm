module Model exposing (Attachment, Entry, Model, SimpleEntry, initialModel)

import Browser.Navigation exposing (Key)
import Data.EnvironmentVariables exposing (EnvironmentVariables)
import Route exposing (Route)


initialModel : EnvironmentVariables -> Key -> Maybe Route -> Model
initialModel environmentVariables key route =
    { environmentVariables = environmentVariables
    , key = key
    , route = route
    , entries =
        { isFetching = False
        , data = Nothing
        }
    , entry =
        { isFetching = True
        , data = Nothing
        }
    }


type alias Model =
    { environmentVariables : EnvironmentVariables
    , key : Key
    , route : Maybe Route
    , entries :
        { isFetching : Bool
        , data : Maybe (List SimpleEntry)
        }
    , entry :
        { isFetching : Bool
        , data : Maybe Entry
        }
    }


type alias Entry =
    { attachments : List Attachment
    , body : String
    , date : String
    , thumbnail : String
    , title : String
    }


type alias Attachment =
    { thumbnail : String
    , title : String
    , url : Maybe String
    }


type alias SimpleEntry =
    { date : String
    , description : String
    , thumbnail : String
    , title : String
    , url : String
    }
