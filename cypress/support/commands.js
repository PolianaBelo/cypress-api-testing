import "cypress-localstorage-commands";
import {createProgram, getProgram} from './commandsPrograms';
import {createBrand, getBrand} from './commandsBrands';
import {createLocation} from './commandsLocation';
import {authenticate} from './commandsAuthentication';

Cypress.config('baseUrl', 'https://api.fidel.uk/v1');