import expect from 'expect';
import * as inputParser from '../inputParser';

describe('inputParser', () => {
  describe('isAskingForGreeting', () => {
    describe('when text contains /start', () => {
      const text = '/start';

      it('returns true', () => {
        expect(inputParser.isAskingForGreeting(text)).toBe(true);
      });
    });

    describe('when text does not contain /start', () => {
      const text = 'text';

      it('returns false', () => {
        expect(inputParser.isAskingForGreeting(text)).toBe(false);
      });
    });

    describe('when text contains command without spaces', () => {
      describe('when text contains bot mention', () => {
        const text = '/start@qw4z1bot';

        it('returns true', () => {
          expect(inputParser.isAskingForGreeting(text)).toBe(true);
        });
      });

      describe('when text does not contain bot mention', () => {
        const text = '/startwithoutspaces';

        it('returns false', () => {
          expect(inputParser.isAskingForGreeting(text)).toBe(false);
        });
      });
    });
  });

  describe('isAskingForBone', () => {
    describe('when text contains /böne', () => {
      const text = '/böne';

      it('returns true', () => {
        expect(inputParser.isAskingForBone(text)).toBe(true);
      });
    });

    describe('when text does not contain /böne', () => {
      const text = 'text';

      it('returns false', () => {
        expect(inputParser.isAskingForBone(text)).toBe(false);
      });
    });

    describe('when text contains command without spaces', () => {
      describe('when text contains bot mention', () => {
        const text = '/böne@qw4z1bot';

        it('returns true', () => {
          expect(inputParser.isAskingForBone(text)).toBe(true);
        });
      });

      describe('when text does not contain bot mention', () => {
        const text = '/bönewithoutspaces';

        it('returns false', () => {
          expect(inputParser.isAskingForBone(text)).toBe(false);
        });
      });
    });
  });

  describe('isAskingForMartinez', () => {
    describe('when text contains /martinez', () => {
      const text = '/martinez';

      it('returns true', () => {
        expect(inputParser.isAskingForMartinez(text)).toBe(true);
      });
    });

    describe('when text does not contain /martinez', () => {
      const text = 'text';

      it('returns false', () => {
        expect(inputParser.isAskingForMartinez(text)).toBe(false);
      });
    });

    describe('when text contains command without spaces', () => {
      describe('when text contains bot mention', () => {
        const text = '/martinez@qw4z1bot';

        it('returns true', () => {
          expect(inputParser.isAskingForMartinez(text)).toBe(true);
        });
      });

      describe('when text does not contain bot mention', () => {
        const text = '/martinezwithoutspaces';

        it('returns false', () => {
          expect(inputParser.isAskingForMartinez(text)).toBe(false);
        });
      });
    });
  });

  describe('isAskingForBronas', () => {
    describe('when text contains /bronas', () => {
      const text = '/bronas';

      it('returns true', () => {
        expect(inputParser.isAskingForBronas(text)).toBe(true);
      });
    });

    describe('when text does not contain /bronas', () => {
      const text = 'text';

      it('returns false', () => {
        expect(inputParser.isAskingForBronas(text)).toBe(false);
      });
    });

    describe('when text contains command without spaces', () => {
      describe('when text contains bot mention', () => {
        const text = '/bronas@qw4z1bot';

        it('returns true', () => {
          expect(inputParser.isAskingForBronas(text)).toBe(true);
        });
      });

      describe('when text does not contain bot mention', () => {
        const text = '/bronaswithoutspaces';

        it('returns false', () => {
          expect(inputParser.isAskingForBronas(text)).toBe(false);
        });
      });
    });
  });

  describe('isAskingForBoegivar', () => {
    describe('when text contains /boegivar', () => {
      const text = '/boegivar';

      it('returns true', () => {
        expect(inputParser.isAskingForBoegivar(text)).toBe(true);
      });
    });

    describe('when text does not contain /boegivar', () => {
      const text = 'text';

      it('returns false', () => {
        expect(inputParser.isAskingForBoegivar(text)).toBe(false);
      });
    });

    describe('when text contains command without spaces', () => {
      describe('when text contains bot mention', () => {
        const text = '/boegivar@qw4z1bot';

        it('returns true', () => {
          expect(inputParser.isAskingForBoegivar(text)).toBe(true);
        });
      });

      describe('when text does not contain bot mention', () => {
        const text = '/boegivarwithoutspaces';

        it('returns false', () => {
          expect(inputParser.isAskingForBoegivar(text)).toBe(false);
        });
      });
    });
  });

  describe('isAskingForTourettes', () => {
    describe('when text contains /tourettes', () => {
      const text = '/tourettes';

      it('returns true', () => {
        expect(inputParser.isAskingForTourettes(text)).toBe(true);
      });
    });

    describe('when text does not contain /tourettes', () => {
      const text = 'text';

      it('returns false', () => {
        expect(inputParser.isAskingForTourettes(text)).toBe(false);
      });
    });

    describe('when text contains command without spaces', () => {
      describe('when text contains bot mention', () => {
        const text = '/tourettes@qw4z1bot';

        it('returns true', () => {
          expect(inputParser.isAskingForTourettes(text)).toBe(true);
        });
      });

      describe('when text does not contain bot mention', () => {
        const text = '/touretteswithoutspaces';

        it('returns false', () => {
          expect(inputParser.isAskingForTourettes(text)).toBe(false);
        });
      });
    });
  });

  describe('isAskingForHelp', () => {
    describe('when text contains /help', () => {
      const text = '/help';

      it('returns true', () => {
        expect(inputParser.isAskingForHelp(text)).toBe(true);
      });
    });

    describe('when text does not contain /help', () => {
      const text = 'text';

      it('returns false', () => {
        expect(inputParser.isAskingForHelp(text)).toBe(false);
      });
    });

    describe('when text contains command without spaces', () => {
      describe('when text contains bot mention', () => {
        const text = '/help@qw4z1bot';

        it('returns true', () => {
          expect(inputParser.isAskingForHelp(text)).toBe(true);
        });
      });

      describe('when text does not contain bot mention', () => {
        const text = '/helpwithoutspaces';

        it('returns false', () => {
          expect(inputParser.isAskingForHelp(text)).toBe(false);
        });
      });
    });
  });

  describe('isAskingForRandom', () => {
    // TODO Ignore for now.
  });
});
