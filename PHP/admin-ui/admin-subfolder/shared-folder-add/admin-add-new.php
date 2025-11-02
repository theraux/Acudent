<div class="add-new-modal-container" id="add-new-modal-container-id">
    <div class="add-new-modal-wrapper">
        <div class="add-new-close-modal">
            <button id="add-new-close-modal-btn">&times;</button>
        </div>

        <div class="add-new-container">
            <div class="add-new-wrapper-title">
                <h3>Personal Information</h3>
            </div>
            <hr class="hr1 mt-0 mb-4">
            <div class="row row-cols-xxl-2 row-cols-xl-2 row-cols-lg-1 row-cols-md-1 row-cols-sm-1 row-cols-1  ">
                <div class="col-xxl-6 col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12">
                    <div class="add-new-wrapper">

                        <div class="form-floating">
                            <input type="text" id="LastName" class="form-control" name="LastName"
                                placeholder="Last Name" required>
                            <label for="Last Name">Last Name<span class="required">*</span></label>
                        </div>
                    </div>
                </div>
                <div class="col-xxl-6 col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12">
                    <div class="add-new-wrapper">
                        <div class="form-floating">
                            <input type="text" id="FirstName" class="form-control" name="FirstName"
                                placeholder="First Name" required>
                            <label for="First Name">First Name<span class="required">*</span></label>
                        </div>
                    </div>
                </div>
                <div class="col-xxl-6 col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12">
                    <div class="add-new-wrapper">
                        <div class="form-floating">
                            <input type="email" id="Email" class="form-control" name="Email" placeholder="Email"
                                required>
                            <label for="Email">Email<span class="required">*</span></label>
                        </div>
                    </div>
                </div>
                <div class="col-xxl-6 col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12">
                    <div class="add-new-wrapper">
                        <div class="form-floating">
                            <select id="gender-id" name="Gender">
                                <option value="" disabled selected></option>
                                <option value="Female">Female</option>
                                <option value="Male">Male</option>
                            </select>
                            <label for="Gender">Gender<span class="required">*</span></label>
                        </div>
                    </div>
                </div>
                <div class="col-xxl-6 col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12">
                    <div class="add-new-wrapper">
                        <div class="form-floating">
                            <input type="date" id="Birthdate" class="form-control" name="Birthdate"
                                placeholder="Birthdate" required>
                            <label for="Birthdate">Birthdate<span class="required">*</span></label>
                        </div>
                    </div>
                </div>

                <div class="col-xxl-6 col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12">
                    <div class="add-new-wrapper">
                        <div class="form-floating">
                            <input type="tel" id="PhoneNumber" class="form-control" name="PhoneNumber"
                                placeholder="Phone Number" required>
                            <label for="Phone Number">Phone Number<span class="required">*</span></label>
                        </div>
                    </div>
                </div>

                <div class="col-xxl-6 col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12">
                    <div class="specialization-wrapper">
                        <div class="form-floating">

                            <select id="specialization-id" name="Specialization" required>
                                <option value="" disabled selected></option>
                                <option value="Periodontics">Periodontics</option>
                                <option value="Cosmetic Care">Cosmetic Care</option>
                                <option value="Orthodontics">Orthodontics</option>
                                <option value="Prosthodontics">Prosthodontics</option>
                                <option value="Surgical Treatment">Surgical Treatment</option>
                            </select>
                            <label for="specialization-id">Specialization<span class="required">*</span></label>
                        </div>
                    </div>
                </div>
            </div>


            <div class="add-new-wrapper-title">
                <h3>Log In Credentials</h3>
            </div>
            <hr class="hr1 mt-0 mb-4">
            <div class="row row-cols-xxl-2 row-cols-xl-2 row-cols-lg-1 row-cols-md-1 row-cols-sm-1 row-cols-1">
                <div class="col-xxl-6 col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12">
                    <div class="add-new-wrapper">

                        <div class="form-floating">
                            <input type="text" id="Username" class="form-control" name="Username" placeholder="Username"
                                required>
                            <label for="username">User Name<span class="required">*</span></label>
                        </div>
                    </div>
                </div>

                <div class="col-xxl-6 col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12">
                    <div class="add-new-wrapper">
                        <div class="form-floating">
                            <input type="password" id="Password" class="form-control" name="Password"
                                placeholder="Password" required>
                            <label for="password">Password<span class="required">*</span></label>
                        </div>
                    </div>
                </div>

                <div class="col-xxl-6 col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12">
                    <div class="add-new-wrapper">
                        <div class="form-floating">
                            <input type="password" id="ConfirmPassword" class="form-control" name="ConfirmPassword"
                                placeholder="Confirm Password" required>
                            <label for="Confirm Password">Confirm Password<span class="required">*</span></label>
                        </div>
                    </div>
                </div>
            </div>

            <div class="add-new-button-container d-flex w-100">
                <div class="add-new-button ms-auto d-flex">
                    <button id="add-new-btn-id">Add</button>
                    <div class="add-new-cancel-btn">
                        <button class="add-new-cancel-button">Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>