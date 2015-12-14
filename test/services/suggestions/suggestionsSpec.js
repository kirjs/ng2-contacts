import suggest from '../../../src/services/suggestions/suggestions'
import {ambigify} from '../../../src/services/suggestions/suggestions'
import {expect}  from 'chai';

describe('Suggestions', function () {
  it('ambiguates things', function () {
    expect(ambigify('me')).to.equal('me');
    expect(ambigify('12/12')).to.equal('{{date}}');
  });

  it('suggests meetings', function () {
    expect(suggest('me')[0].suggestion).to.match(/met/)
  });

  it('returns empty results when nothing matched', function () {
    expect(suggest('be').length).to.equal(0);
  });
});
