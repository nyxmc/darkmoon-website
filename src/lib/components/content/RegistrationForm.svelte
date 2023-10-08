<h2 class="text-3xl text-center">Tell us about yourself..</h2>
<form action="?/register" method="POST">
    <!--
        The following data is collected:
        - IGN
        - preferred (Nick)Name
        - Timezone
        - age as a selection (13-15, 15-17, 18+, no answer)
        - optionally a short bio
        - optionally other notes
        - checkbox if they agree to the rules
        - checkbox if they agree to listen to staff
        - checkbox if they just check all checkboxes
    -->

    <div class="flex w-full">
        <div class="grid flex-grow w-3/6">
            <div class="form-control">
                <label class="label">
                    <span class="label-text">What is your in-game name?</span>
                </label>
                <input class="input" type="text" name="ign" placeholder="IGN" required/>
            </div>

            <div class="form-control">
                <label class="label">
                    <span class="label-text">What do you want us to call you?</span>
                </label>
                <input class="input" type="text" name="nickname" placeholder="Preferred name" required/>
                <label class="label">
                    <span class="label-text-alt">Feel free to specify your preferred pronouns too.</span>
                </label>
            </div>

            <div class="form-control">
                <label class="label">
                    <span class="label-text">What is your timezone? (e.g. GMT+1)</span>
                </label>
                <input class="input" type="text" name="timezone" placeholder="Timezone" required/>
            </div>

            <div class="form-control">
                <label class="label">
                    <span class="label-text">How old are you?</span>
                </label>
                <select class="select select-bordered" name="age" required>
                    <option disabled selected>Pick one</option>
                    <option>13-15</option>
                    <option>15-17</option>
                    <option>18+</option>
                    <option>I'd prefer not to answer</option>
                </select>
            </div>
        </div>

        <div class="divider divider-horizontal"/>

        <div class="grid flex-grow w-3/6">
            <div class="form-control">
                <label class="label">
                    <span class="label-text">Optionally, tell us more about yourself</span>
                </label>
                <textarea name="bio" class="textarea textarea-bordered h-24" placeholder="Bio"></textarea>
            </div>

            <div class="form-control">
                <label class="label">
                    <span class="label-text">Anything else you'd like us to know?</span>
                </label>
                <textarea name="notes" class="textarea textarea-bordered h-24"
                          placeholder="Other notes.."></textarea>
            </div>

            <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">I agree to the rules.</span>
                    <input name="rules" type="checkbox" class="toggle" required/>
                </label>
            </div>

            <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">I agree to listen to staff.</span>
                    <input name="staff" type="checkbox" class="toggle" required/>
                </label>
            </div>

            <div class="form-control">
                <label class="label cursor-pointer">
                    <span class="label-text">I just check all the boxes.</span>
                    <input name="all" type="checkbox" class="toggle"/>
                </label>
            </div>
        </div>
    </div>

    <button class="my-2 btn btn-primary">Submit</button>
</form>
