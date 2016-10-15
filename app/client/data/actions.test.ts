import { Action,
         EDIT_URL, SUBMIT_URL, URL_ERROR,
         editUrl, submitUrl, urlError,
         LOAD, LOAD_FAIL, LOAD_SUCCESS,
         PARSING_STARTED, PARSE_ERROR, FEED_PARSED
       } from './actions';

describe("action creators", () => {

    describe("editUrl", () => {
        it ('returns the correct action', () => {
            const url = "foo";
            expect(editUrl(url)).toEqual({
                type: EDIT_URL,
                url
            })
        })
    })

    describe("submitUrl", () => {
        it ('returns the correct action', () => {
            expect(submitUrl()).toEqual({
                type: SUBMIT_URL
            })
        })
    })
}
