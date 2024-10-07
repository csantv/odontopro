cmake_minimum_required(VERSION 3.29)
project(odontopro LANGUAGES CXX)

add_executable(odontopro)

set_target_properties(odontopro PROPERTIES
    CXX_STANDARD 23
    CXX_STANDARD_REQUIRED ON
    CXX_EXTENSIONS OFF
)

target_sources(odontopro PRIVATE main.cpp)
