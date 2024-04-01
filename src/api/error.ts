export enum ServerError {
    CipherNotFound = "LP-Cipher-404",
    CollectionNotFound = "LP-Collection-404",
    Duplicated = "LP-Duplicated",
    EmailInvalidCode = "LP-Email-Invalid-Code",
    EmailNotVerified = "LP-Email-Not-Verified",
    InvalidBody = "LP-Invalid-Body",
    InvalidCipher = "LP-Invalid-Cipher",
    InvalidCollection = "LP-Invalid-Collection",
    InvalidSharedSecret = "LP-Invalid-Shared-Secret",
    InvalidToken = "LP-Invalid-Token",
    InvalidTwoFactor = "LP-Invalid-Two-Factor",
    MissingCipher = "LP-Missing-Cipher",
    NotFound = "LP-404",
    RateLimit = "LP-RateLimit",
    UserNotFound = "LP-User-404",
    Database = "LP-Database-Error",
    Mail = "LP-Mail-Error"
}
