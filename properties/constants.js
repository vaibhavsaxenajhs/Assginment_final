
/****** FLAGS ******/

exports.responseFlags = {
    VALIDATION_SUCCESS            : 200,
    INVALID_INPUT                 : 400,
    INVALID_USER_ID               : 400,
    ADDON_UPDATED                 : 200,
    ADDON_INSERTED                : 200,
    DUPLICATE_ADDONS              : 400,
    RESELLER_UPDATED              : 200,
    NOT_AUTHORIZED_TO_ACCESS      : 400,
    PASSWORD_UPDATED              : 200,
    INVALID_RESELLER_ID           : 400,
    DOMAIN_REQUIRED_IN_INPUT      : 400,
    PARAMETER_MISSING             : 100,
    INVALID_ACCESS_TOKEN          : 101,
    INVALID_USERNAME              : 201,
    INVALID_EMAIL_ID              : 201,
    ACTION_NOT_ALLOWED            : 400,
    INVALID_ACCESS                : 201,
    WRONG_PASSWORD                : 201,
    WRONG_OLD_PASSWORD            : 201,
    ACTION_COMPLETE               : 200,
    LOGIN_SUCCESSFULLY            : 200,
    SHOW_ERROR_MESSAGE            : 201,
    IMAGE_FILE_MISSING            : 102,
    NO_DATA_FOUND                 : 400,
    ERROR_IN_EXECUTION            : 404,
    UPLOAD_ERROR                  : 201,
    USER_NOT_FOUND                : 201,
    RESELLER_USER_NOT_FOUND       : 401,
    PASSWORD_CHANGED_SUCCESSFULLY : 200,
    EXCEED_FLEET_COUNT            : 202,
    ACCOUNT_EXPIRE                : 401,
    SHOW_WARNING                  : 410,
    ACTION_COMPLETE_2             : 205,
    BILLING_PLAN_CHANGED_FOR_TODAY: 206,
    CREDIT_CARD_NOT_ADDED         : 300,
    VENDOR_NOT_FOUND              : 201,
    EMAIL_NOT_EXISTS              : 400,
    DOMAIN_NOT_AVAILABLE          : 400,
    DOMAIN_NOT_CREATED            : 400,
    DOMAIN_NOT_FOUND              : 400,
    FORM_SETTINGS_NOT_FOUND       : 400,
    ALREADY_EXIST                 : 400,
    SMS_SETTINGS_NOT_FOUND        : 400,
    JOB_NOT_MAPPED_WITH_YOU       : 501,
    USER_ALREADY_EXISTS           : 601,
    AVAILABILITY_RIGHTS_CHANGED   : 210,
    INVALID_APP                   : 502,
    INVALID_FORM                  : 101,
    INVALID_PAYMENT_METHOD        : 101,
    PAYMENT_FAILED                : 401,
    MINOR_ERROR                   : 201,
    NOT_AVAILABLE                 : 400,
    REFRESH_APP                   : 101,
    RESELLER_IS_ALREADY_ADMIN     : 409,
    INVALID_AADHAR_ID             : 201,
    ERROR_IN_FACE_COMPARISON      : 202,
    ADDON_DEACTIVATED             : 203,
    BLOCKED_USER                  : 404,
    STRIPE_ACCOUNT_NOT_FOUND      : 202,
    SMS_PLAN_NOT_CONFIGURED       : 203
  };