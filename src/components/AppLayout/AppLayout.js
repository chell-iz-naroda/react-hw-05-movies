import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { NavMenu } from 'components/Nav/Nav';
import { Loader } from 'components/Loader/Loader';

import { Header, Main } from './AppLayout.styled';

const AppLayout = () => {
    return (
        <>
            <Header>
                <NavMenu />
            </Header>
            <Main>
                <Suspense fallback={<Loader />}>
                    <Outlet />
                </Suspense>
            </Main>
        </>
    );
}


export default AppLayout;