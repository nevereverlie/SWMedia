package com.com.swmedia.signup;

import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.util.Patterns;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Toast;

import com.com.swmedia.login.MainActivity;
import com.com.swmedia.R;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;
import retrofit2.Retrofit;
import retrofit2.converter.gson.GsonConverterFactory;

public class SignUp extends AppCompatActivity {
    private static final String BASE_URL = "https://swmedia.azurewebsites.net";
    private EditText mUserName;
    private EditText mPassword;
    private EditText mEmail;
    private EditText mNumber;


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_sign_up);

        Button btnCreate = findViewById(R.id.btnCreate);

        mUserName = findViewById(R.id.usernameReg);
        mPassword = findViewById(R.id.passwordReg);
        mEmail = findViewById(R.id.emailReg);
        mNumber = findViewById(R.id.numberReg);

        btnCreate.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                String userName = mUserName.getText().toString();
                String email = mEmail.getText().toString();
                String password = mPassword.getText().toString();
                String phone = mNumber.getText().toString();

                if (null == userName || userName.length() == 0) {
                    // showToast("Enter Your Password");
                    mUserName.setError("User's name is required");
                } else if (userName.length() < 3) {
                    mUserName.setError("Minimum 3 characters!");
                } else if (null == email || email.length() == 0) {
                    // showToast("Enter Your Password");
                    mEmail.setError("Email is required!");
                } else if (!Patterns.EMAIL_ADDRESS.matcher(email).matches()) {
                    mEmail.setError("Incorrect email!");
                } else if (password.length() < 3) {
                    mPassword.setError("Minimum 3 characters!");
                } else if (null == password || password.length() == 0) {
                    // showToast("Enter Your Password");
                    mPassword.setError("Password is required!");
                } else if (phone.length() < 9) {
                    mPassword.setError("Incorrect phone number");
                } else if (null == phone || phone.length() == 0) {
                    // showToast("Enter Your Password");
                    mPassword.setError("Phone number is required!");
                } else {
                    RegistrationResponse registrationResponse =
                            new RegistrationResponse(userName, email, password, phone);
                    Retrofit retrofit = new Retrofit.Builder()
                            .baseUrl(BASE_URL)
                            .addConverterFactory(GsonConverterFactory.create())
                            .build();
                    Api_JSON_Registration api_json_registration = retrofit.create(Api_JSON_Registration.class);
                    Call<RegistrationResponse> call = api_json_registration.register(registrationResponse);
                    call.enqueue(new Callback<RegistrationResponse>() {
                        @Override
                        public void onResponse(Call<RegistrationResponse> call, Response<RegistrationResponse> response) {
                            String responseF = response.body().toString();
                            finish();
                        }

                        @Override
                        public void onFailure(Call<RegistrationResponse> call, Throwable t) {
                            Toast.makeText(SignUp.this, "Can\\'t connect to the server. Please check your Internet connection!", Toast.LENGTH_LONG).show();
                        }
                    });
                }
            }
        });
    }
}
