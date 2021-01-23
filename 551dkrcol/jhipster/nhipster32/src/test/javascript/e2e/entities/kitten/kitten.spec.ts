import { browser, element, by } from 'protractor';

import NavBarPage from './../../page-objects/navbar-page';
import SignInPage from './../../page-objects/signin-page';
import KittenComponentsPage, { KittenDeleteDialog } from './kitten.page-object';
import KittenUpdatePage from './kitten-update.page-object';
import {
  waitUntilDisplayed,
  waitUntilAnyDisplayed,
  click,
  getRecordsCount,
  waitUntilHidden,
  waitUntilCount,
  isVisible
} from '../../util/utils';

const expect = chai.expect;

describe('Kitten e2e test', () => {
  let navBarPage: NavBarPage;
  let signInPage: SignInPage;
  let kittenComponentsPage: KittenComponentsPage;
  let kittenUpdatePage: KittenUpdatePage;
  let kittenDeleteDialog: KittenDeleteDialog;
  let beforeRecordsCount = 0;

  before(async () => {
    await browser.get('/');
    navBarPage = new NavBarPage();
    signInPage = await navBarPage.getSignInPage();
    await signInPage.waitUntilDisplayed();

    await signInPage.username.sendKeys('admin');
    await signInPage.password.sendKeys('admin');
    await signInPage.loginButton.click();
    await signInPage.waitUntilHidden();
    await waitUntilDisplayed(navBarPage.entityMenu);
    await waitUntilDisplayed(navBarPage.adminMenu);
    await waitUntilDisplayed(navBarPage.accountMenu);
  });

  it('should load Kittens', async () => {
    await navBarPage.getEntityPage('kitten');
    kittenComponentsPage = new KittenComponentsPage();
    expect(await kittenComponentsPage.title.getText()).to.match(/Kittens/);

    expect(await kittenComponentsPage.createButton.isEnabled()).to.be.true;
    await waitUntilAnyDisplayed([kittenComponentsPage.noRecords, kittenComponentsPage.table]);

    beforeRecordsCount = (await isVisible(kittenComponentsPage.noRecords)) ? 0 : await getRecordsCount(kittenComponentsPage.table);
  });

  it('should load create Kitten page', async () => {
    await kittenComponentsPage.createButton.click();
    kittenUpdatePage = new KittenUpdatePage();
    expect(await kittenUpdatePage.getPageTitle().getText()).to.match(/Create or edit a Kitten/);
    await kittenUpdatePage.cancel();
  });

  it('should create and save Kittens', async () => {
    await kittenComponentsPage.createButton.click();
    await kittenUpdatePage.setNameInput('name');
    expect(await kittenUpdatePage.getNameInput()).to.match(/name/);
    await kittenUpdatePage.setColorInput('color');
    expect(await kittenUpdatePage.getColorInput()).to.match(/color/);
    await kittenUpdatePage.setSizeInput('size');
    expect(await kittenUpdatePage.getSizeInput()).to.match(/size/);
    await waitUntilDisplayed(kittenUpdatePage.saveButton);
    await kittenUpdatePage.save();
    await waitUntilHidden(kittenUpdatePage.saveButton);
    expect(await isVisible(kittenUpdatePage.saveButton)).to.be.false;

    expect(await kittenComponentsPage.createButton.isEnabled()).to.be.true;

    await waitUntilDisplayed(kittenComponentsPage.table);

    await waitUntilCount(kittenComponentsPage.records, beforeRecordsCount + 1);
    expect(await kittenComponentsPage.records.count()).to.eq(beforeRecordsCount + 1);
  });

  it('should delete last Kitten', async () => {
    const deleteButton = kittenComponentsPage.getDeleteButton(kittenComponentsPage.records.last());
    await click(deleteButton);

    kittenDeleteDialog = new KittenDeleteDialog();
    await waitUntilDisplayed(kittenDeleteDialog.deleteModal);
    expect(await kittenDeleteDialog.getDialogTitle().getAttribute('id')).to.match(/nhipster32App.kitten.delete.question/);
    await kittenDeleteDialog.clickOnConfirmButton();

    await waitUntilHidden(kittenDeleteDialog.deleteModal);

    expect(await isVisible(kittenDeleteDialog.deleteModal)).to.be.false;

    await waitUntilAnyDisplayed([kittenComponentsPage.noRecords, kittenComponentsPage.table]);

    const afterCount = (await isVisible(kittenComponentsPage.noRecords)) ? 0 : await getRecordsCount(kittenComponentsPage.table);
    expect(afterCount).to.eq(beforeRecordsCount);
  });

  after(async () => {
    await navBarPage.autoSignOut();
  });
});
