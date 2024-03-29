exports.registerEmailParams = (email, token) => {
    return {
        Source: process.env.EMAIL_FROM,
        Destination: {
            ToAddresses: [email]
        },
        ReplyToAddresses: [process.env.EMAIL_FROM],
        Message: {
            Body: {
                Html: {
                    Charset: 'UTF-8',
                    Data: `
                        <html>
                            <h1>Vefiry your email address</h1>
                            <p>Please use the following link to complete your registration:</p>
                            <p>${process.env.CLIENT_URL}/auth/activate/${token}</p>
                        </html>
                    `
                }
            },
            Subject: {
                Charset: 'UTF-8',
                Data: 'Complete your registration'
            }
        }
    };
};

exports.forgotPasswordEmailParams = (email, token) => {
    return {
        Source: process.env.EMAIL_FROM,
        Destination: {
            ToAddresses: [email]
        },
        ReplyToAddresses: [process.env.EMAIL_FROM],
        Message: {
            Body: {
                Html: {
                    Charset: 'UTF-8',
                    Data: `
                        <html>
                            <h1 style="color:blue">We are ELEC5620 Group 9 that is for SmartHealth App</h1>
                            <h2 style="color:red">Reset Password Link</h2>
                            <img src="https://specials-images.forbesimg.com/imageserve/1013559166/960x0.jpg?fit=scale" alt="Paris" width="300" height="300">
                            <p>Please use the following link to reset your password:</p>
                            <p>${process.env.CLIENT_URL}/auth/password/reset/${token}</p>
                        </html>
                    `
                }
            },
            Subject: {
                Charset: 'UTF-8',
                Data: 'Reset your password'
            }
        }
    };
};

exports.announcementPublishedParams = (email, data) => {
    return {
        Source: process.env.EMAIL_FROM,
        Destination: {
            ToAddresses: [email]
        },
        ReplyToAddresses: [process.env.EMAIL_FROM],
        Message: {
            Body: {
                Html: {
                    Charset: 'UTF-8',
                    Data: `
                        <html>
                            <h1>New Annoucement published | reactnodeaws.com</h1>
                            <p>A new annoucement titled <b>${
                                data.title
                            }</b> has been just publihsed in the following categories.</p>
                            
                            ${data.categories
                                .map(c => {
                                    return `
                                    <div>
                                        <h2>${c.name}</h2>
                                        <img src="${c.image.url}" alt="${c.name}" style="height:50px;" />
                                        <h3><a href="${process.env.CLIENT_URL}/links/${c.slug}">Check it out!</a></h3>
                                    </div>
                                `;
                                })
                                .join('-----------------------')}

                            <br />

                            <p>Do not with to receive notifications?</p>
                            <p>Turn off notification by going to your <b>dashboard</b> > <b>update profile</b> and <b>uncheck the categories</b></p>
                            <p>${process.env.CLIENT_URL}/user/profile/update</p>

                        </html>
                    `
                }
            },
            Subject: {
                Charset: 'UTF-8',
                Data: 'New announcement published'
            }
        }
    };
};


