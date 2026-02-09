import Map "mo:core/Map";
import Text "mo:core/Text";
import Nat "mo:core/Nat";
import Array "mo:core/Array";
import Order "mo:core/Order";
import Principal "mo:core/Principal";
import Runtime "mo:core/Runtime";
import AccessControl "authorization/access-control";
import MixinAuthorization "authorization/MixinAuthorization";

actor {
  // Access Control
  let accessControlState = AccessControl.initState();
  include MixinAuthorization(accessControlState);

  // User Profile Type
  public type UserProfile = {
    name : Text;
  };

  let userProfiles = Map.empty<Principal, UserProfile>();

  public query ({ caller }) func getCallerUserProfile() : async ?UserProfile {
    if (not AccessControl.hasPermission(accessControlState, caller, #user)) {
      Runtime.trap("Unauthorized: Only users can access profiles");
    };
    userProfiles.get(caller);
  };

  public query ({ caller }) func getUserProfile(user : Principal) : async ?UserProfile {
    if (caller != user and not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Can only view your own profile");
    };
    userProfiles.get(user);
  };

  public shared ({ caller }) func saveCallerUserProfile(profile : UserProfile) : async () {
    if (not AccessControl.hasPermission(accessControlState, caller, #user)) {
      Runtime.trap("Unauthorized: Only users can save profiles");
    };
    userProfiles.add(caller, profile);
  };

  // Consultation Request Type
  public type ConsultationRequest = {
    id : Nat;
    name : Text;
    email : Text;
    phone : Text;
    message : Text;
  };

  var nextRequestId : Nat = 0;
  let consultationRequests = Map.empty<Nat, ConsultationRequest>();

  // Public endpoint - no authorization required (guests can submit)
  public shared ({ caller }) func submitConsultationRequest(name : Text, email : Text, phone : Text, message : Text) : async () {
    // Very simple validation (assuming frontend has performed more robust checks)
    if (name.size() == 0 or email.size() == 0 or message.size() == 0) {
      Runtime.trap("Missing required fields");
    };

    let newRequest : ConsultationRequest = {
      id = nextRequestId;
      name;
      email;
      phone;
      message;
    };

    consultationRequests.add(nextRequestId, newRequest);
    nextRequestId += 1;
  };

  // Admin-only endpoint
  public query ({ caller }) func getConsultationRequests() : async [ConsultationRequest] {
    if (not AccessControl.hasPermission(accessControlState, caller, #admin)) {
      Runtime.trap("Unauthorized: Only admins can view consultation requests");
    };
    consultationRequests.values().toArray();
  };

  // Admin-only endpoint
  public shared ({ caller }) func clearConsultationRequests() : async () {
    if (not AccessControl.hasPermission(accessControlState, caller, #admin)) {
      Runtime.trap("Unauthorized: Only admins can clear consultation requests");
    };
    consultationRequests.clear();
  };
};
