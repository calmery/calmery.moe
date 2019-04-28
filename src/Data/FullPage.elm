module Data.FullPage exposing (routeToSection, sectionToPath, sectionToRoute)

import Route exposing (Route(..))


sectionToRoute : Int -> Maybe Route
sectionToRoute section =
    case section of
        0 ->
            Just Top

        1 ->
            Just Profile

        2 ->
            Just Articles

        3 ->
            Just Goods

        _ ->
            Nothing


routeToSection : Route -> Maybe Int
routeToSection route =
    case route of
        Top ->
            Just 0

        Profile ->
            Just 1

        Articles ->
            Just 2

        Goods ->
            Just 3

        _ ->
            Nothing


sectionToPath : Int -> String
sectionToPath section =
    case section of
        1 ->
            "profile"

        2 ->
            "articles"

        3 ->
            "goods"

        _ ->
            ""
