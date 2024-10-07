import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Popover from "@mui/material/Popover";
import {
  usePopupState,
  bindTrigger,
  bindPopover,
} from "material-ui-popup-state/hooks";
import { Avatar, Box, MenuItem } from "@mui/material";
import { useEffect } from "react";
import CommonUtil from "../Validation/CommonUtil";
// import UserService from "../../services/UserService";
// import DefaultUserPic from "../../assets/images/default_user_pic.svg";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import Sidebar from "./Sidebar";
// import { ReactComponent as InActiveLanguageMenu } from "../../assets/images/menu_language.svg";
// import { ReactComponent as ActiveLanguageMenu } from "../../assets/images/menu_language_active.svg";
// import AppLanguage from "../../util/AppLanguages";
import { useTranslation } from "react-i18next";
import AppLanguage from "../util/AppLanguages";

export default function SwitchLanguage() {
  const [user, setUser] = useState({});

  const { t } = useTranslation();
  // useEffect(() => {
  //   let user = CommonUtil.decodeToken();
  //   if (user) {
  //     getUser(user?.id, true);
  //   }
  // }, []);

  // const getUser = async (id, loadProfileImage) => {
  //   await UserService.getUserDetails(id, loadProfileImage).then((res) => {
  //     setUser(res?.data?.data);
  //   });
  // };

  const switchLanguage = (code) => {
    AppLanguage.setLanguage(code);
    window.location.reload();
  };

  const popupState = usePopupState({
    variant: "popover",
    popupId: "demoPopover",
  });
  return (
    <div>
      <Box
        display="flex"
        alignItems={"center"}
        justifyContent={"flex-start"}
        style={{ cursor: "pointer", height: "33px" }}
        {...bindTrigger(popupState)}
        sx={{ px: { xs: 0, md: 0 }, my: { xs: 0, md: 1 } }}
      >
        <Box flexGrow={1}>
          <Sidebar
            link=""
            label={t("LVLDB0008")}
            isActive={false}
            // activeMenu={ActiveLanguageMenu}
            // inActiveMenu={InActiveLanguageMenu}
          />
        </Box>
        <Box py={0.5} px={2} sx={{ display: { xs: "none", md: "flex" } }}>
          <Typography variant="menuItem">
            {" "}
            {popupState.isOpen ? (
              <KeyboardArrowLeftIcon fontSize="small" />
            ) : (
              <KeyboardArrowRightIcon fontSize="small" />
            )}
          </Typography>
        </Box>
      </Box>
      <Popover
        {...bindPopover(popupState)}
        anchorOrigin={{
          vertical: "center",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "center",
          horizontal: "left",
        }}
      >
        {/* <MenuItem onClick={popupState.close}>View Profile</MenuItem>
        <MenuItem onClick={popupState.close}>Edit Profile</MenuItem> */}
        <MenuItem
          id="SwitchLanguage-menuitem-1"
          onClick={() => {
            switchLanguage("en");
            popupState.close();
          }}
        >
          English
        </MenuItem>
        <MenuItem
          id="SwitchLanguage-menuitem-4"
          onClick={() => {
            switchLanguage("ch");
            popupState.close();
          }}
        >
          Chinese
        </MenuItem>
        <MenuItem
          id="SwitchLanguage-menuitem-2"
          onClick={() => {
            switchLanguage("idn");
            popupState.close();
          }}
        >
          Indonesian
        </MenuItem>
        <MenuItem
          id="SwitchLanguage-menuitem-3"
          onClick={() => {
            switchLanguage("th");
            popupState.close();
          }}
        >
          Thai
        </MenuItem>
      </Popover>
    </div>
  );
}
