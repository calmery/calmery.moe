module Route exposing (Route(..), parseUrl)

import Url exposing (Url)
import Url.Parser exposing ((</>), Parser, int, map, oneOf, parse, s, top)


parseUrl : Url -> Maybe Route
parseUrl =
    parse route



-- Routing


type Route
    = Top
    | Profile
    | Article Int
    | Articles
    | Good Int
    | Goods


route : Parser (Route -> Route) Route
route =
    oneOf
        [ map Top top
        , map Profile (s "profile")
        , map Article (s "articles" </> int)
        , map Articles (s "articles")
        , map Good (s "goods" </> int)
        , map Goods (s "goods")
        ]
