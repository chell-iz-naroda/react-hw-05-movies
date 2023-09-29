import {BiSearch} from 'react-icons/bi';

import { Form, Label, Input, Button } from './SearchBar.styled';

export const SearchBar = ({onSubmit}) => {
    return (
        <>
            <Form onSubmit={onSubmit}>
                <Label>
                    <Input
                        type="text"
                        name="query"
                        autoComplete="off"
                        placeholder="Please, enter a query"
                    />
                    <Button type="submit">
                        <BiSearch />
                    </Button>
                </Label>
            </Form>
        </>
    );
}