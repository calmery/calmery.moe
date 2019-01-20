module Model exposing (Card, Model, Page, Profile, initialModel)

import Browser.Navigation exposing (Key)
import Url exposing (Url)


initialModel : Key -> Url -> Model
initialModel key url =
    { key = key
    , url = url
    , profile =
        { isFetching = True
        , data = Nothing
        }
    , entry =
        { isFetching = True
        , data = Nothing
        }
    }


type alias Model =
    { key : Key
    , url : Url
    , profile :
        { isFetching : Bool
        , data : Maybe Profile
        }
    , entry :
        { isFetching : Bool
        , data : Maybe Page
        }
    }


type alias Profile =
    { name : String
    , description : String
    , icon : String
    }


type alias Page =
    { title : String
    , description : List String
    , thumbnail : String
    , cards : List Card
    }


type alias Card =
    { title : String
    , description : String
    , thumbnail : String
    , url : String
    }
