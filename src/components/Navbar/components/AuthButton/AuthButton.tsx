import { Button } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";
import { resetBattletagSlice, selectBattletagName } from "../../../../redux/slices/battletagSlice";
import authURI from "../../../../utils/authURI";
import { FC, useEffect } from "react";
import { resetSessionSlice } from "../../../../redux/slices/sessionSlice";
import { useLogoutMutation } from "../../../../redux/services/authApi";
import { setSuccessSnackbar } from "../../../../redux/slices/notificationsSlice";

const AuthButton: FC = (): JSX.Element => {
    const dispatch = useAppDispatch();
    const battletagName = useAppSelector(selectBattletagName);
    const [performLogout, result] = useLogoutMutation();

    useEffect(() => {
        if (result.data) {
            dispatch(setSuccessSnackbar(result.data.message));
        }
    }, [dispatch, result.data]);

    const logout = () => {
        dispatch(resetBattletagSlice());
        dispatch(resetSessionSlice());
        performLogout(null);
    };

    return battletagName ?
        (
            <Button
                size={"small"}
                aria-label={"Login Button"}
                color={"inherit"}
                variant={"outlined"}
                href={authURI.toString()}
            >
                {"Login"}
            </Button>
        ) : (
            <Button
                size={"small"}
                aria-label={"Logout Button"}
                color={"inherit"}
                variant={"outlined"}
                onClick={() => logout()}

            >
                {"Logout"}
            </Button>
        );
};

export default AuthButton;
