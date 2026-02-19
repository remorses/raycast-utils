import { LaunchProps, showHUD } from "termcast";
import { getAccessToken, withAccessToken, OAuthService } from "@raycast/utils";

const linear = OAuthService.linear({
  scope: "read write",
  onAuthorize(params) {
    console.log(params);
  },
});

async function Command(props: LaunchProps<{ arguments: Arguments.OauthNoViewWithProps }>) {
  const { token } = getAccessToken();
  await showHUD(`${props.arguments.text} ${token}`);
}

export default withAccessToken(linear)(Command);
