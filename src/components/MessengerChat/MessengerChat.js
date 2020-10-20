/* eslint-disable func-names */
/* eslint-disable one-var */
/* eslint-disable no-var */
/* eslint-disable wrap-iife */
import React, { useEffect, useState } from 'react';
import { useThemeUI } from 'theme-ui';

const facebookAppId = process.env.FB_PAGE_ID;

const MessengerChat = () => {
  const [isFbLoaded, setIsFbLoaded] = useState(false);
  useEffect(() => {
    window.fbAsyncInit = function () {
      window.FB.init({
        xfbml: true,
        version: 'v8.0',
      });
    };

    (function (d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s);
      js.id = id;
      js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
      fjs.parentNode.insertBefore(js, fjs);
    })(document, 'script', 'facebook-jssdk');

    setIsFbLoaded(true);
  });

  useEffect(() => {
    if (isFbLoaded && typeof window !== 'undefined') {
      if (window.FB) {
        window.fbAsyncInit();
      }
    }
    return () => {
      setIsFbLoaded(false);
    };
  }, [isFbLoaded]);

  const context = useThemeUI();
  const { theme } = context;

  return (
    <>
      <div id="fb-root" />
      <div
        className="fb-customerchat"
        attribution="setup_tool"
        page_id={facebookAppId}
        theme_color={theme.colors.primary}
        logged_in_greeting="Hi there! Have any questions?"
        logged_out_greeting="Hi there! Have any questions?"
      >
        asdasd
      </div>
    </>
  );
};

export default MessengerChat;
