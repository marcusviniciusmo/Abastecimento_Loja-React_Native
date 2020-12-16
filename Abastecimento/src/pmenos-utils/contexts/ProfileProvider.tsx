import React, { useState } from 'react';
import ProfileContext from './ProfileContext';
import { IProfile } from '../types';
import { Loading } from '../../Components';

const ProfileProvider: React.FC = ({
    children
}) => {
    const [profile, setProfile] = useState<IProfile | null>(null);
    const [loading, setLoading] = useState(false);

    return (
        <ProfileContext.Provider
            value={{
                user: profile,
            }}>
            <Loading isLoading={loading}>{children}</Loading>
        </ProfileContext.Provider>
    )
};

export default ProfileProvider;