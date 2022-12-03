Create a virtual environment
Before you start, create a virtual environment and place yourself in it. By doing so, you isolate yourself from the rest of your machine. Your environment should be isolated so you don't affect the rest of the machine when you install libraries.

Run venv env, to create a virtual environment called env:

Bash

Copy
python -m venv env
You should now see a new env subdirectory.

To activate the virtual environment, run the following command on Windows:

Bash
# vscode
For windows in vscode terminal

py -3 -m venv .myproject

now the venv created in the name myproject

Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope Process

this command sets the policy to activate the venv for one time if not used activation error will occur

.myproject\scripts\activate

this command activates the venv in windows

deactivate

type this to finally close the venv
Copy
 # Windows
 source env/Scripts/activate
Or, this command on Linux, WSL or macOS:

Bash

Copy
 # Linux, WSL or macOS
 source env/bin/activate
Your command prompt should start with (env) to indicate the name of the virtual environment.

Install dependencies for a project
You have access to some source code and a requirements.txt file. The .txt file contains libraries that you want to download. You need to download these libraries so your program will function as intended.

Create the needed files from the terminal:

Bash

Copy
mkdir src
cd src
touch app.py 
touch requirements.txt
These are your files:

Output

Copy
src/
  app.py
  requirements.txt
Add the following content to app.py:

Python

Copy
from datetime import *
from dateutil.relativedelta import *
now = datetime.now()
print(now)

now = now + relativedelta(months=1, weeks=1, hour=10)

print(now)
Add the following content to requirements.txt:

Output

Copy
python-dateutil==2.8.2
six==1.16.0
Run pip install to install libraries specified in requirements.txt:

Bash

Copy
pip install -r requirements.txt
You'll see output similar to the following text:

Output

Copy
Using cached python_dateutil-2.8.2-py2.py3-none-any.whl (247 kB)
Requirement already satisfied: six==1.16.0 in ./env/lib/python3.9/site-packages (from -r requirements.txt (line 2)) (1.16.0)
Installing collected packages: python-dateutil
Successfully installed python-dateutil-2.8.2
Congratulations! You've successfully restored a project that had nothing but application files and a requirements.txt file in it.

Upgrade a package
Imagine that the project you created is using an older version of the library python-dateutil. Also, your team has asked you to install only fixes. In other words, the team wants you to upgrade the patch version and not install a major update, because that might be risky for your application and potentially break it.

Let's first simulate being on an earlier version of python-dateutil.

Run pip install:

Bash

Copy
pip install python-dateutil===2.7.4
Now, you should be on version 2.7.4. Next, you want to try to upgrade to the latest patch version.

Run pip install --upgrade:

Bash

Copy
pip install "python-dateutil==2.7.*" --upgrade
The last line of your output should say "Successfully installed python-dateutil-2.7.5." That means it upgraded the package by looking at the rightmost number.

Congratulations! You've upgraded your library in a responsible way.





{
  "primaryKey": "utVqAkxWmJVq_2KjCH6Rb6TxjfAqJbPtq2lCH8iqSV4",
  "primaryKeyLastUpdated": "2022-10-22T12:46:36.923818Z",
  "secondaryKey": "Dhw_DKlMCxMpPjUnyUEoyXMwo3IRbW-jah07alXFOIw",
  "secondaryKeyLastUpdated": "2022-10-22T12:46:36.9238185Z"
}


Configure the Python environment
In Visual Studio Code, select Terminal > New terminal to open the terminal.

In the terminal, enter the following command to create a Python virtual environment.

On Windows:

Python

Copy
python -m venv .venv
On Linux or macOS:

Python

Copy
python3 -m venv .venv
This command creates a virtual environment inside the current folder. Visual Studio Code detects this change and prompts you to select the virtual environment for this folder. Select Yes.

Screenshot that shows the prompt to activate the virtual environment.

 Note

If you don’t see a dialog box that asks whether you want to select the virtual environment, you can manually select the Python interpreter version. In the Visual Studio Code status bar in the lower-right corner, select the Python version. At the top of the Visual Studio Code window, the Python interpreter selection opens. Select the Python version that is in the ./.venv/Scripts/python.exe file.

Close the terminal by selecting the trash can icon.

The kill terminal button.

Select Terminal > New terminal to reopen the terminal in the virtual environment.

When the terminal is running in a Python virtual environment, notice that the prompt shows (.venv) as a prefix.

Install pip


# anaconda activation env
To set up your local environment:

Open the Anaconda prompt.

Screenshot that shows the Anaconda prompt.

In the Anaconda prompt, create a new Anaconda environment with Pandas, NumPy, scikit-learn, PyDotPlus, and Jupyter:

Bash

Copy
conda create -n myenv python=3.8 pandas numpy jupyter seaborn scikit-learn pydotplus
In the Anaconda prompt, activate the new environment:

Bash

Copy
conda activate myenv
In the Anaconda prompt, install AzureML-SDK:

Bash

Copy
pip install --upgrade azureml-sdk
In some cases, the install can take several minutes to complete. Let it resolve until it does.

In the Anaconda prompt, install an Excel reader (note that xlrd might not work with the Excel data file you downloaded):

Bash

Copy
pip install openpyxl
In Visual Studio Code, open the local folder you created to store all of the code and data. Select both the upper-right Jupyter kernel Python version and the lower-left Python interpreter, and set them both to use your Anaconda environment:



