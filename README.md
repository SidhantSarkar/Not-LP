# NotLP
An end to end solution to evaluate your subjective answer based on a sample answer that has been supplied.

## 
### Made using Natural Language Processing.

#### Tools used to evaluate:
1. **Keyword Analysis**
2. **Context Analysis**
3. **Grammar Check**
## 

#### Dependencies:
1. `Ionic 4`
2. `Angular 8`
3. `NodeJS`
4. `python 3.6`

#### Python Dependencies:
* `numpy`
* `spacy`
* `collections`
* `pyrebase`
* `nltk`
* `flask`
* `flask_cors`

#### To Deploy:
1. Install all the dependencies.
2. Update API keys and auth keys in `serverSetup/env_variables.py`
3. Run `python ./serverSetup/flashk.py`
4. Edit the back-end server address in `src/app/services/requests.service.ts`.
5. Run `npm install` in the root directory.
6. `ionic serve [--address=host_address]`

