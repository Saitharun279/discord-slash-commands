import { kickEachUser } from "../../../src/controllers/kickEachUser";
import {
  transformedArgument,
  ctx,
  messageRequestMemberMockSuperUser,
  messageRequestMemberMockNonSuperUser,
} from "../../fixtures/fixture";
import { mockEnv } from "../mockEnv";

describe("kickEachUser", () => {
  it("should fail when a non super_user runs ", async () => {


    const { roleToBeTaggedObj } = transformedArgument; // Extracting roleToBeTaggedObj
    const messageRequestMember = {
      roleToBeRemovedObj: roleToBeTaggedObj,
      channelId: 12345,
      ...messageRequestMemberMockNonSuperUser,
    };
    const response = kickEachUser(messageRequestMember, mockEnv, ctx);

    const roleID = roleToBeTaggedObj.value;

    expect(response).toBeInstanceOf(Promise);

    const textMessage: { data: { content: string } } = await response.then(
      (res) => res.json()
    );
    expect(textMessage.data.content).toBe(
      `You're not authorized to make this request.`
    );
  });

  it("should run when found no users with Matched Role", async () => {

    const { roleToBeTaggedObj } = transformedArgument; // Extracting roleToBeTaggedObj
    const messageRequestMember = {
      roleToBeRemovedObj: roleToBeTaggedObj,
      channelId: 12345,
      ...messageRequestMemberMockSuperUser,
    };
    const response = kickEachUser(messageRequestMember, mockEnv, ctx);

    const roleID = roleToBeTaggedObj.value;

    expect(response).toBeInstanceOf(Promise);

    const textMessage: { data: { content: string } } = await response.then(
      (res) => res.json()
    );
    expect(textMessage.data.content).toBe(
      `We couldn't find any user(s) assigned to <@&${roleID}> role.`
    );
  });
});
